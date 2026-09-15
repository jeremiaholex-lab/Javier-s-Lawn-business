import React from 'react';
import { ThemeMode } from '../types';

interface ThemeBarProps {
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  onOpenSpringNotice?: () => void;
}

export const ThemeBar: React.FC<ThemeBarProps> = ({ currentTheme, onThemeChange, onOpenSpringNotice }) => {
  return (
    <div className="pt-3 pb-1 flex flex-col gap-2">
      {/* Theme Switcher */}
      <div
        id="themeBar"
        className="flex items-center justify-between bg-[var(--color-surface-low)] px-3.5 py-1.5 rounded-xl border border-[var(--color-border)] shadow-xs transition-colors"
      >
        <span className="text-[12px] text-[var(--color-on-surface-variant)] font-semibold flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[16px] text-[#3e6843]">palette</span>
          Theme:
        </span>
        <div
          id="themeSwitcher"
          className="inline-flex p-0.5 bg-[var(--color-surface-container)] rounded-lg text-xs font-semibold"
        >
          <button
            type="button"
            data-mode="default"
            onClick={() => onThemeChange('default')}
            className={`px-2.5 py-1 rounded-md transition-all duration-200 text-[11px] font-bold ${
              currentTheme === 'default'
                ? 'bg-[#163620] text-white shadow-xs'
                : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)]'
            }`}
          >
            Default
          </button>
          <button
            type="button"
            data-mode="dark"
            onClick={() => onThemeChange('dark')}
            className={`px-2.5 py-1 rounded-md transition-all duration-200 text-[11px] font-bold ${
              currentTheme === 'dark'
                ? 'bg-[#163620] text-white shadow-xs'
                : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)]'
            }`}
          >
            Dark
          </button>
          <button
            type="button"
            data-mode="light"
            onClick={() => onThemeChange('light')}
            className={`px-2.5 py-1 rounded-md transition-all duration-200 text-[11px] font-bold ${
              currentTheme === 'light'
                ? 'bg-[#163620] text-white shadow-xs'
                : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)]'
            }`}
          >
            Light
          </button>
        </div>
      </div>

      {/* Seasonal Alert Notification */}
      <div
        id="springNoticeBar"
        onClick={onOpenSpringNotice}
        className="bg-[var(--color-surface-low)] rounded-xl px-3 py-2 flex items-center justify-between shadow-xs border border-[var(--color-border)]/60 cursor-pointer hover:bg-[var(--color-surface-container)] transition-colors group"
      >
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#d9822b] shrink-0 animate-pulse"></span>
          <span className="text-[12px] sm:text-[13px] text-[#3e6843] dark:text-[#85d697] truncate font-bold">
            Spring Turf Awakening Schedule Open
          </span>
        </div>
        <span className="text-[11px] sm:text-[12px] text-[#d9822b] font-semibold shrink-0 ml-2 group-hover:underline flex items-center gap-0.5">
          Stage 1 Notice
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        </span>
      </div>
    </div>
  );
};
