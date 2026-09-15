import React from 'react';

interface SpringNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookSpringAwakening: () => void;
}

export const SpringNoticeModal: React.FC<SpringNoticeModalProps> = ({
  isOpen,
  onClose,
  onBookSpringAwakening,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[var(--color-surface-lowest)] rounded-2xl p-5 sm:p-6 shadow-2xl border border-[var(--color-border)] flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-2 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#d9822b] animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#d9822b]">
              Austin Seasonal Advisory
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-[var(--color-surface-low)] text-[var(--color-on-surface-variant)] flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div>
          <h3 className="text-base font-bold text-[var(--color-on-surface)] mb-1">
            Spring Turf Awakening • Stage 1
          </h3>
          <p className="text-xs text-[var(--color-on-surface-variant)] leading-relaxed">
            Central Texas winter freeze thaw signals critical root rejuvenation. Early spring care dictates your lawn's drought tolerance throughout the scorching summer months.
          </p>
        </div>

        <div className="flex flex-col gap-2 bg-[var(--color-surface-low)] p-3.5 rounded-xl border border-[var(--color-border)] text-xs text-[var(--color-on-surface)]">
          <div className="flex items-start gap-2">
            <span className="material-symbols-outlined text-[#3e6843] dark:text-[#85d697] text-[18px] shrink-0">
              verified
            </span>
            <div>
              <span className="font-bold block">Pre-Emergent Weed Barrier:</span>
              Stops Crabgrass, Goosegrass, and Dallisgrass seeds before soil warms above 55°F.
            </div>
          </div>
          <div className="flex items-start gap-2 pt-1 border-t border-[var(--color-border)]/60">
            <span className="material-symbols-outlined text-[#3e6843] dark:text-[#85d697] text-[18px] shrink-0">
              verified
            </span>
            <div>
              <span className="font-bold block">Core Aeration &amp; Humic Loam:</span>
              Relieves packed Hill Country clay and sends oxygen directly to roots.
            </div>
          </div>
        </div>

        <div className="flex gap-2 pt-1">
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookSpringAwakening();
            }}
            className="flex-1 py-3 px-4 rounded-xl bg-[#d9822b] hover:bg-[#c27222] text-white font-bold text-xs shadow-md transition-all active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">calendar_month</span>
            Schedule Awakening Visit
          </button>
          <a
            href="tel:5127913398"
            className="py-3 px-4 rounded-xl bg-[#163620] text-white font-bold text-xs shadow-sm hover:bg-[#234e31] transition-all flex items-center justify-center gap-1"
          >
            <span className="material-symbols-outlined text-[18px] text-[#d9822b]">call</span>
            Call
          </a>
        </div>
      </div>
    </div>
  );
};
