import React, { useState, useEffect } from 'react';
import { ASSETS } from '../data/landscapingData';
import { ScreenTab } from '../types';

interface HeaderProps {
  currentTab: ScreenTab;
  onSelectTab: (tab: ScreenTab) => void;
  onOpenContact?: () => void;
  onOpenQuote: () => void;
}

interface NavItemConfig {
  id: ScreenTab;
  label: string;
  icon: string;
  subtitle: string;
  tag?: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  onOpenContact,
  onOpenQuote,
}) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const navItems: NavItemConfig[] = [
    {
      id: 'services',
      label: 'Services',
      icon: 'yard',
      subtitle: 'Lawn Care, Sod, Tree Pruning & Masonry',
      tag: 'Core',
    },
    {
      id: 'about-us',
      label: 'About Us',
      icon: 'nature_people',
      subtitle: '24-Year Central Texas Family Crew',
      tag: '24 Yrs Exp',
    },
    {
      id: 'reviews',
      label: 'Reviews',
      icon: 'grade',
      subtitle: '99 Verified HomeAdvisor & Thumbtack Reviews',
      tag: '4.7 ★',
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: 'mail',
      subtitle: 'Direct Lead Dispatch & Austin Zip Checker',
      tag: 'Fast Response',
    },
    {
      id: 'instant-estimate',
      label: 'Instant Quote',
      icon: 'calculate',
      subtitle: '30-Second Interactive Lawn & Project Pricing',
      tag: 'Free',
    },
  ];

  // Handle Escape key to close menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowProfileMenu(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (tab: ScreenTab) => {
    if (tab === 'instant-estimate') {
      onOpenQuote();
    } else {
      onSelectTab(tab);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-[var(--header-bg)] backdrop-blur-xl border-b border-[var(--color-border)] pt-safe transition-colors duration-300">
        {/* Main Bar: Logo, Quick Call, Profile, and Mobile/Tablet Hamburger Menu */}
        <div className="h-16 px-4 max-w-6xl mx-auto flex items-center justify-between gap-2.5 md:gap-3">
          {/* Logo & Brand Details */}
          <button
            type="button"
            onClick={() => handleNavClick('services')}
            className="flex items-center gap-2 sm:gap-2.5 min-w-0 text-left cursor-pointer group shrink-0"
          >
            <img
              src={ASSETS.logo}
              alt="Javier's Landscaping Logo"
              className="h-8 sm:h-9 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col min-w-0">
              <span
                id="headerBrandTitle"
                className="text-[13.5px] sm:text-[15px] font-bold text-[var(--color-on-surface)] leading-tight group-hover:text-[#163620] dark:group-hover:text-[#85d697] transition-colors whitespace-nowrap"
              >
                Javier's Landscaping
              </span>
              <span
                id="headerBrandSubtitle"
                className="text-[10px] sm:text-[11px] text-[var(--color-on-surface-variant)] mt-0.5 flex items-center gap-1 font-medium whitespace-nowrap"
              >
                Del Valle &amp; Austin • 24 Yrs Exp
              </span>
            </div>
          </button>

          {/* Tablet-Only Navigation Links (768px to 1024px) */}
          <nav
            id="tabletHeaderNav"
            aria-label="Tablet Navigation"
            className="items-center justify-center gap-1 shrink-0"
          >
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              const isQuote = item.id === 'instant-estimate';
              return (
                <button
                  key={`tablet-nav-${item.id}`}
                  id={`tabletNavBtn-${item.id}`}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`px-2 py-1 rounded-md text-[11px] font-semibold transition-all duration-150 cursor-pointer whitespace-nowrap select-none ${
                    isActive
                      ? isQuote
                        ? 'bg-[#d9822b] text-white font-bold shadow-xs'
                        : 'bg-[#163620] dark:bg-[#285735] text-white font-bold shadow-xs'
                      : isQuote
                      ? 'text-[#d9822b] font-bold hover:bg-[#d9822b]/10'
                      : 'text-[var(--color-on-surface)] hover:text-[#163620] dark:hover:text-[#85d697] hover:bg-[var(--color-surface-container)]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Controls: Call button, Profile, and Mobile/Tablet Menu */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Quick Call Button */}
            <a
              id="headerCallBtn"
              href="tel:5127913398"
              aria-label="Call Javier's Landscaping at 512-791-3398"
              className="flex items-center gap-1.5 bg-[#163620] text-white text-xs sm:text-sm font-semibold px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg hover:bg-[#234e31] transition-all duration-200 active:scale-95 shadow-xs min-h-[32px] sm:min-h-[40px]"
            >
              <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-[#d9822b]">call</span>
              <span className="hidden sm:inline">(512) 791-3398</span>
              <span className="sm:hidden font-bold text-[11px]">Call</span>
            </a>

            {/* Account & Austin Dispatch Info Modal Button (hidden on phone to save navbar space, available in menu) */}
            <button
              type="button"
              id="headerProfileBtn"
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              aria-label="Account and Quick Dispatch Options"
              className="hidden sm:flex w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#00200d] dark:bg-[#1b3824] items-center justify-center shrink-0 text-white hover:opacity-90 transition-all active:scale-95 cursor-pointer shadow-xs"
            >
              <span className="material-symbols-outlined text-[18px] sm:text-[19px]">person</span>
            </button>

          </div>
        </div>
      </header>

      {/* Quick Profile / Austin Dispatch Modal Dropdown */}
      {showProfileMenu && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-start justify-end p-4 pt-16 sm:pt-20"
          onClick={() => setShowProfileMenu(false)}
        >
          <div
            className="w-full max-w-xs bg-[var(--color-surface-lowest)] rounded-2xl p-4 shadow-xl border border-[var(--color-border)] animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border)]">
              <div>
                <h4 className="font-bold text-[var(--color-on-surface)] text-sm">Austin Client Services</h4>
                <p className="text-xs text-[var(--color-on-surface-variant)]">Family Owned Since 2002</p>
              </div>
              <button
                type="button"
                onClick={() => setShowProfileMenu(false)}
                className="w-7 h-7 rounded-full bg-[var(--color-surface-low)] text-[var(--color-on-surface-variant)] flex items-center justify-center hover:bg-[var(--color-surface-container)]"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <div className="py-3 flex flex-col gap-2">
              <a
                href="tel:5127913398"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[var(--color-surface-low)] text-xs font-semibold text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container)] transition-colors"
              >
                <span className="material-symbols-outlined text-[#d9822b] text-[18px]">call</span>
                <div>
                  <div className="font-bold">Direct Dispatch Line</div>
                  <div className="text-[11px] text-[var(--color-on-surface-variant)]">(512) 791-3398</div>
                </div>
              </a>

              <button
                type="button"
                onClick={() => {
                  setShowProfileMenu(false);
                  onOpenQuote();
                }}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[var(--color-surface-low)] text-xs font-semibold text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container)] transition-colors text-left"
              >
                <span className="material-symbols-outlined text-[#3e6843] text-[18px]">calculate</span>
                <div>
                  <div className="font-bold">Instant Lawn Estimate</div>
                  <div className="text-[11px] text-[var(--color-on-surface-variant)]">Calculate pricing in 30 seconds</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowProfileMenu(false);
                  if (onOpenContact) {
                    onOpenContact();
                  } else {
                    handleNavClick('contact');
                  }
                }}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[var(--color-surface-low)] text-xs font-semibold text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container)] transition-colors text-left"
              >
                <span className="material-symbols-outlined text-[#3e6843] text-[18px]">pin_drop</span>
                <div>
                  <div className="font-bold">Check Neighborhood Service</div>
                  <div className="text-[11px] text-[var(--color-on-surface-variant)]">Westlake, Tarrytown, Lakeway +</div>
                </div>
              </button>
            </div>

            <div className="pt-2 border-t border-[var(--color-border)] text-center">
              <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold flex items-center justify-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Austin Crews Dispatched Today
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
