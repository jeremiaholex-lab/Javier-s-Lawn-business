import React, { useState, useEffect } from 'react';
import { ScreenTab, ThemeMode, ServiceItem, ProjectPhoto } from './types';
import { Header } from './components/Header';
import { ThemeBar } from './components/ThemeBar';
import { BottomNav } from './components/BottomNav';
import { ServicesScreen } from './components/screens/ServicesScreen';
import { AboutScreen } from './components/screens/AboutScreen';
import { ReviewsScreen } from './components/screens/ReviewsScreen';
import { ContactScreen } from './components/screens/ContactScreen';
import { QuoteScreen } from './components/screens/QuoteScreen';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ProjectLightboxModal } from './components/ProjectLightboxModal';
import { SpringNoticeModal } from './components/SpringNoticeModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<ScreenTab>('services');
  const [theme, setTheme] = useState<ThemeMode>(() => {
    try {
      const saved = localStorage.getItem('javier_theme_pref') as ThemeMode;
      return saved && ['default', 'dark', 'light'].includes(saved) ? saved : 'default';
    } catch {
      return 'default';
    }
  });

  // Modal states
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);
  const [selectedPhotoLightbox, setSelectedPhotoLightbox] = useState<ProjectPhoto | null>(null);
  const [isSpringModalOpen, setIsSpringModalOpen] = useState(false);
  const [quotePreselectedService, setQuotePreselectedService] = useState<string | undefined>(undefined);

  // Floating Scroll-to-top button
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setShowScrollTop(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeChange = (newTheme: ThemeMode) => {
    setTheme(newTheme);
    const htmlEl = document.documentElement;
    htmlEl.setAttribute('data-theme', newTheme);
    if (newTheme === 'dark') {
      htmlEl.classList.add('dark');
      htmlEl.classList.remove('light');
    } else {
      htmlEl.classList.remove('dark');
      htmlEl.classList.add('light');
    }
    try {
      localStorage.setItem('javier_theme_pref', newTheme);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    handleThemeChange(theme);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openQuoteScreen = (preselected?: string) => {
    if (preselected) {
      setQuotePreselectedService(preselected);
    }
    setActiveTab('instant-estimate');
    scrollToTop();
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-surface)] text-[var(--color-on-surface)] transition-colors duration-400">
      {/* Top Fixed Header with Responsive Navigation */}
      <Header
        currentTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          scrollToTop();
        }}
        onOpenContact={() => {
          setActiveTab('contact');
          scrollToTop();
        }}
        onOpenQuote={() => openQuoteScreen()}
      />

      {/* Main Content Body */}
      <main className="flex-1 flex flex-col relative w-full pt-16 pb-24 bg-[var(--color-surface)]">
        {/* Theme and Notice Bar (visible on all screens at top) */}
        <div className="px-4 max-w-5xl mx-auto w-full">
          <ThemeBar
            currentTheme={theme}
            onThemeChange={handleThemeChange}
            onOpenSpringNotice={() => setIsSpringModalOpen(true)}
          />
        </div>

        {/* Tab Views */}
        {activeTab === 'services' && (
          <ServicesScreen
            onOpenQuoteScreen={(service) => openQuoteScreen(service)}
            onOpenServiceModal={(service) => setSelectedServiceModal(service)}
            onOpenPhotoLightbox={(photo) => setSelectedPhotoLightbox(photo)}
            onOpenSpringModal={() => setIsSpringModalOpen(true)}
          />
        )}

        {activeTab === 'about-us' && (
          <AboutScreen
            onOpenQuote={() => openQuoteScreen()}
            onOpenContact={() => {
              setActiveTab('contact');
              scrollToTop();
            }}
          />
        )}

        {activeTab === 'reviews' && <ReviewsScreen />}

        {activeTab === 'contact' && <ContactScreen />}

        {activeTab === 'instant-estimate' && (
          <QuoteScreen
            initialServiceTitle={quotePreselectedService}
            onOpenServices={() => {
              setActiveTab('services');
              scrollToTop();
            }}
          />
        )}
      </main>

      {/* Floating Scroll-To-Top Button */}
      {showScrollTop && (
        <button
          type="button"
          id="scrollToTopBtn"
          aria-label="Scroll back to top"
          onClick={scrollToTop}
          className="fixed bottom-22 right-4 z-40 w-11 h-11 rounded-full bg-[#163620] text-white shadow-xl border border-white/20 flex items-center justify-center cursor-pointer active:scale-95 hover:bg-[#234e31] transition-all"
        >
          <span className="material-symbols-outlined text-[22px]">arrow_upward</span>
        </button>
      )}

      {/* Fixed Bottom Navigation */}
      <BottomNav currentTab={activeTab} onSelectTab={setActiveTab} />

      {/* Modals & Lightboxes */}
      <ServiceDetailModal
        service={selectedServiceModal}
        onClose={() => setSelectedServiceModal(null)}
        onSelectForQuote={(title) => openQuoteScreen(title)}
      />

      <ProjectLightboxModal
        photo={selectedPhotoLightbox}
        onClose={() => setSelectedPhotoLightbox(null)}
        onOpenQuote={() => openQuoteScreen()}
      />

      <SpringNoticeModal
        isOpen={isSpringModalOpen}
        onClose={() => setIsSpringModalOpen(false)}
        onBookSpringAwakening={() => openQuoteScreen('Seasonal Cleanups & Core Aeration')}
      />
    </div>
  );
}
