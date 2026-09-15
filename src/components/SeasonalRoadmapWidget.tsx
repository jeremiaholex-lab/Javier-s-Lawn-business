import React from 'react';
import { AUSTIN_SEASONAL_CYCLE } from '../data/landscapingData';
import { ScrollReveal } from './ScrollReveal';

interface SeasonalRoadmapWidgetProps {
  onSelectSeasonalService: (seasonTitle: string) => void;
}

export const SeasonalRoadmapWidget: React.FC<SeasonalRoadmapWidgetProps> = ({ onSelectSeasonalService }) => {
  return (
    <ScrollReveal
      direction="up"
      duration={1.4}
      className="bg-[var(--color-surface-lowest)] rounded-2xl p-5 sm:p-6 border border-[var(--color-border)] shadow-sm flex flex-col gap-4 relative overflow-hidden"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#3e6843] dark:text-[#85d697]">
            <span className="material-symbols-outlined text-[16px]">calendar_month</span>
            Austin Year-Round Property Roadmap
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#00200d] dark:text-[#85d697] tracking-tight">
            Central Texas Seasonal Care Cycle
          </h3>
        </div>
        <div className="flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-xs font-bold border border-emerald-200 dark:border-emerald-800 self-start sm:self-center">
          <span className="w-2 h-2 rounded-full bg-emerald-500 color-pulse-beacon"></span>
          Current Stage: Spring Turf Awakening
        </div>
      </div>

      <p className="text-xs sm:text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
        Austin’s intense summer droughts and unexpected winter freezes require precise seasonal intervention. Here is how Javier’s team protects your lawn through all 4 seasons:
      </p>

      {/* 4 Seasons Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
        {AUSTIN_SEASONAL_CYCLE.map((stage, idx) => (
          <div
            key={stage.season}
            className="bg-[var(--color-surface-low)] rounded-xl p-4 border border-[var(--color-border)] flex flex-col justify-between gap-3 card-hover-fx"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${stage.badgeColor}`}>
                  {stage.season.split(' ')[0]}
                </span>
                <span className="material-symbols-outlined text-[20px] text-[var(--color-on-surface-variant)]">
                  {stage.icon}
                </span>
              </div>
              <h4 className="text-xs font-extrabold text-[var(--color-on-surface)] leading-snug">
                {stage.focus}
              </h4>
              <p className="text-[11px] text-[var(--color-on-surface-variant)] leading-relaxed">
                {stage.description}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onSelectSeasonalService(`Seasonal Cleanup: ${stage.season}`)}
              className="text-[11px] font-bold text-[#d9822b] hover:underline flex items-center gap-1 pt-2 border-t border-[var(--color-border)]/50 cursor-pointer"
            >
              <span>Book This Stage</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
};
