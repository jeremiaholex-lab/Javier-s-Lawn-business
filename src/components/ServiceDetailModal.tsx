import React from 'react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForQuote: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForQuote,
}) => {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-[var(--color-surface-lowest)] rounded-t-3xl sm:rounded-2xl p-5 sm:p-6 shadow-2xl border border-[var(--color-border)] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Service Hero Image Banner */}
        {service.imageUrl && (
          <div className="relative w-full h-44 sm:h-52 rounded-xl overflow-hidden mb-4 shadow-sm border border-[var(--color-border)]">
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00200d]/70 via-black/10 to-transparent"></div>
            <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
              <span className="bg-[#163620]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded backdrop-blur-xs">
                {service.highlightTag}
              </span>
              <span className="text-[11px] text-white/90 font-medium drop-shadow-sm">
                Austin, TX Craftsmanship
              </span>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="flex items-start justify-between pb-3 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-secondary-container)] flex items-center justify-center text-[#163620] dark:text-[#85d697]">
              <span className="material-symbols-outlined text-[28px]">{service.iconName}</span>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#3e6843] dark:text-[#85d697]">
                Austin Horticultural Standard
              </span>
              <h3 className="text-lg font-bold text-[var(--color-on-surface)] leading-snug">
                {service.title}
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[var(--color-surface-low)] text-[var(--color-on-surface-variant)] flex items-center justify-center hover:bg-[var(--color-surface-container)] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Pricing Badge and Tag */}
        <div className="flex items-center justify-between py-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--color-surface-container)] text-[#163620] dark:text-[#85d697]">
            {service.priceTag}
          </span>
          <span className="text-xs font-bold text-[#3e6843] dark:text-[#85d697] flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            {service.highlightTag}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
          {service.description}
        </p>

        {/* What's Included */}
        <div className="mt-4 pt-3 border-t border-[var(--color-border)]">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-on-surface)] mb-2">
            Every Visit Includes:
          </h4>
          <ul className="flex flex-col gap-2">
            {service.detailedInclusions.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[var(--color-on-surface)]">
                <span className="material-symbols-outlined text-[#3e6843] dark:text-[#85d697] text-[16px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-col sm:flex-row gap-2.5">
          <button
            type="button"
            onClick={() => {
              onSelectForQuote(service.title);
              onClose();
            }}
            className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#d9822b] hover:bg-[#c27222] text-white font-bold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">calculate</span>
            <span>Get Free Quote for This</span>
          </button>
          <a
            href="tel:5127913398"
            className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#163620] text-white font-bold text-sm shadow-sm hover:bg-[#234e31] transition-all active:scale-95 flex items-center justify-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[18px] text-[#d9822b]">call</span>
            <span>Call Crew Dispatch</span>
          </a>
        </div>
      </div>
    </div>
  );
};
