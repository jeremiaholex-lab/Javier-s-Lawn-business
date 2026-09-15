import React from 'react';
import { ScreenTab } from '../types';

interface BottomNavProps {
  currentTab: ScreenTab;
  onSelectTab: (tab: ScreenTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onSelectTab }) => {
  const tabs = [
    { id: 'services' as ScreenTab, label: 'Services', icon: 'yard' },
    { id: 'about-us' as ScreenTab, label: 'About Us', icon: 'nature_people' },
    { id: 'reviews' as ScreenTab, label: 'Reviews', icon: 'grade' },
    { id: 'contact' as ScreenTab, label: 'Contact', icon: 'mail' },
    { id: 'instant-estimate' as ScreenTab, label: 'Quote', icon: 'calculate', isHighlight: true },
  ];

  return (
    <nav
      id="mainBottomNav"
      aria-label="Bottom Navigation"
      className="fixed bottom-0 inset-x-0 z-40 pb-safe bg-[var(--nav-bg)] backdrop-blur-xl border-t border-[var(--color-border)] transition-colors duration-300 shadow-[0_-2px_12px_rgba(22,54,32,0.06)]"
    >
      <div className="flex justify-around items-center h-16 max-w-md sm:max-w-xl mx-auto px-2 sm:px-6">
        {tabs.map((tab) => {
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              id={`navTab-${tab.id}`}
              type="button"
              onClick={() => {
                onSelectTab(tab.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex flex-col items-center justify-center gap-0.5 min-w-[52px] sm:min-w-[70px] min-h-[44px] px-1 sm:px-2.5 py-1 rounded-xl transition-all duration-200 cursor-pointer ${
                isActive
                  ? tab.isHighlight
                    ? 'text-[#d9822b] font-bold scale-105'
                    : 'text-[#163620] dark:text-[#85d697] font-bold scale-105'
                  : tab.isHighlight
                  ? 'text-[#d9822b]/80 hover:text-[#d9822b]'
                  : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)]'
              }`}
            >
              <span
                className="material-symbols-outlined text-[21px] sm:text-[23px]"
                style={isActive && tab.icon === 'grade' ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {tab.icon}
              </span>
              <span className="text-[11px] sm:text-xs leading-none tracking-tight font-semibold whitespace-nowrap">
                {tab.label}
              </span>
              {isActive && (
                <span
                  className={`w-1.5 h-1.5 rounded-full mt-0.5 ${
                    tab.isHighlight ? 'bg-[#d9822b]' : 'bg-[#163620] dark:bg-[#85d697]'
                  }`}
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
