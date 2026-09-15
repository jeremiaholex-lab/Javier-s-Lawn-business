import React, { useState } from 'react';
import { TEXAS_GRASS_GUIDE } from '../data/landscapingData';
import { ScrollReveal } from './ScrollReveal';

interface TexasGrassGuideWidgetProps {
  onSelectGrassForQuote: (grassName: string) => void;
}

export const TexasGrassGuideWidget: React.FC<TexasGrassGuideWidgetProps> = ({ onSelectGrassForQuote }) => {
  const [selectedGrassId, setSelectedGrassId] = useState('zoysia');
  const activeGrass = TEXAS_GRASS_GUIDE.find((g) => g.id === selectedGrassId) || TEXAS_GRASS_GUIDE[0];

  return (
    <ScrollReveal
      direction="up"
      duration={1.3}
      className="bg-[var(--color-surface-lowest)] rounded-2xl p-5 sm:p-6 border border-[var(--color-border)] shadow-sm flex flex-col gap-5 relative overflow-hidden"
    >
      {/* Decorative subtle color gradient banner */}
      <div className="flex flex-col gap-1.5 z-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#3e6843] dark:text-[#85d697]">
          <span className="material-symbols-outlined text-[16px]">grass</span>
          Central Texas Sod &amp; Turf Guide
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#00200d] dark:text-[#85d697] tracking-tight">
          Which Grass Thrives on Your Austin Property?
        </h3>
        <p className="text-xs sm:text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
          Austin sits on the Balcones fault with varying limestone caliche and heavy clay. Choosing the right turf variety saves thousands in watering bills.
        </p>
      </div>

      {/* Variety Tabs with Soft Color Transitions */}
      <div className="grid grid-cols-3 gap-2 z-10">
        {TEXAS_GRASS_GUIDE.map((grass) => {
          const isSelected = selectedGrassId === grass.id;
          return (
            <button
              key={grass.id}
              type="button"
              onClick={() => setSelectedGrassId(grass.id)}
              className={`py-3 px-2 sm:px-4 rounded-xl flex flex-col items-center text-center gap-1 transition-all duration-500 cursor-pointer border ${
                isSelected
                  ? 'bg-[#163620] text-white border-[#163620] shadow-md scale-101'
                  : 'bg-[var(--color-surface-low)] text-[var(--color-on-surface)] border-[var(--color-border)] hover:bg-[var(--color-surface-container)]'
              }`}
            >
              <span className="text-xs sm:text-sm font-bold leading-tight">{grass.name}</span>
              <span
                className={`text-[10px] hidden sm:inline ${
                  isSelected ? 'text-amber-300 font-semibold' : 'text-[var(--color-on-surface-variant)]'
                }`}
              >
                {grass.colorGrade}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Grass Profile Card with Color Animation */}
      <div className="bg-[var(--color-surface-low)] rounded-xl p-4 sm:p-5 border border-[var(--color-border)] flex flex-col gap-4 z-10 transition-all duration-700">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[var(--color-border)]">
          <div>
            <h4 className="text-base font-bold text-[var(--color-on-surface)]">{activeGrass.name}</h4>
            <span className="text-xs text-[#d9822b] font-semibold">{activeGrass.tagline}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#163620] dark:text-[#85d697] bg-[var(--color-surface-lowest)] px-3 py-1 rounded-full border border-[var(--color-border)]">
              {activeGrass.colorGrade}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="flex flex-col gap-1 bg-[var(--color-surface-lowest)] p-3 rounded-lg border border-[var(--color-border)]">
            <span className="text-[var(--color-on-surface-variant)] font-medium">Sunlight Needed:</span>
            <span className="font-bold text-[var(--color-on-surface)]">{activeGrass.sunRequirement}</span>
          </div>

          <div className="flex flex-col gap-1 bg-[var(--color-surface-lowest)] p-3 rounded-lg border border-[var(--color-border)]">
            <span className="text-[var(--color-on-surface-variant)] font-medium">Austin Drought Resistance:</span>
            <span className="font-bold text-emerald-800 dark:text-emerald-400">{activeGrass.droughtTolerance}</span>
          </div>

          <div className="flex flex-col gap-1 bg-[var(--color-surface-lowest)] p-3 rounded-lg border border-[var(--color-border)]">
            <span className="text-[var(--color-on-surface-variant)] font-medium">Optimal Cut Height:</span>
            <span className="font-bold text-[var(--color-on-surface)]">{activeGrass.mowingHeight}</span>
          </div>

          <div className="flex flex-col gap-1 bg-[var(--color-surface-lowest)] p-3 rounded-lg border border-[var(--color-border)]">
            <span className="text-[var(--color-on-surface-variant)] font-medium">Best Suited Neighborhoods:</span>
            <span className="font-bold text-[var(--color-on-surface)]">{activeGrass.austinBestFor}</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <div className="text-xs text-[var(--color-on-surface-variant)]">
            <span className="font-bold text-[var(--color-on-surface)]">Javier’s Guarantee:</span> Farm-fresh cut sod rolled within 12 hours with enriched topsoil compost grading.
          </div>
          <button
            type="button"
            onClick={() => onSelectGrassForQuote(`${activeGrass.name} Sod Installation`)}
            className="w-full sm:w-auto py-2.5 px-5 rounded-xl bg-[#d9822b] hover:bg-[#c27222] text-white text-xs font-bold shadow-xs transition-all active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
          >
            <span className="material-symbols-outlined text-[16px]">calculate</span>
            Estimate {activeGrass.name}
          </button>
        </div>
      </div>
    </ScrollReveal>
  );
};
