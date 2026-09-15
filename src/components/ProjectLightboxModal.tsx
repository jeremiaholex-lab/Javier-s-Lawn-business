import React from 'react';
import { ProjectPhoto } from '../types';

interface ProjectLightboxModalProps {
  photo: ProjectPhoto | null;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ProjectLightboxModal: React.FC<ProjectLightboxModalProps> = ({
  photo,
  onClose,
  onOpenQuote,
}) => {
  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-[var(--color-surface-lowest)] rounded-2xl overflow-hidden shadow-2xl border border-[var(--color-border)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/10] bg-black">
          <img
            src={photo.imageUrl}
            alt={photo.alt}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close photo preview"
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
          <div className="absolute bottom-2 left-2 bg-[#163620]/90 text-white text-xs font-bold px-2.5 py-1 rounded-md">
            {photo.location}
          </div>
        </div>

        <div className="p-4 sm:p-5 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-[var(--color-on-surface)]">
              {photo.title}
            </h3>
            <span className="text-xs font-semibold text-[#3e6843] dark:text-[#85d697] flex items-center gap-1">
              <span className="material-symbols-outlined text-[15px]">verified</span>
              Completed Project
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
            {photo.description}
          </p>

          <div className="pt-2 flex gap-2">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="flex-1 py-2.5 rounded-xl bg-[#d9822b] hover:bg-[#c27222] text-white font-bold text-xs shadow-md transition-all active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">request_quote</span>
              Request Similar Look
            </button>
            <a
              href="tel:5127913398"
              className="py-2.5 px-4 rounded-xl bg-[#163620] text-white font-bold text-xs shadow-sm hover:bg-[#234e31] transition-all flex items-center justify-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px] text-[#d9822b]">call</span>
              Questions?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
