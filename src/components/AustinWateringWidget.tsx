import React, { useState } from 'react';
import { AUSTIN_WATERING_RULES } from '../data/landscapingData';
import { ScrollReveal } from './ScrollReveal';

export const AustinWateringWidget: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'even' | 'odd' | 'commercial'>('even');
  const [addressInput, setAddressInput] = useState('');

  const currentRule = AUSTIN_WATERING_RULES.find((r) => r.addressType === selectedType) || AUSTIN_WATERING_RULES[0];

  const handleAddressChange = (val: string) => {
    setAddressInput(val);
    const trimmed = val.trim();
    if (!trimmed) return;
    const match = trimmed.match(/\d+/g);
    if (match && match.length > 0) {
      const lastDigits = match.join('');
      const lastDigit = parseInt(lastDigits.slice(-1), 10);
      if (!isNaN(lastDigit)) {
        setSelectedType(lastDigit % 2 === 0 ? 'even' : 'odd');
      }
    }
  };

  return (
    <ScrollReveal
      direction="up"
      duration={1.4}
      className="bg-[var(--color-surface-lowest)] rounded-2xl p-5 sm:p-6 border border-[var(--color-border)] shadow-sm flex flex-col gap-4 relative overflow-hidden"
    >
      {/* Decorative ambient color glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#3e6843]/15 via-[#d9822b]/10 to-transparent rounded-full blur-2xl pointer-events-none"></div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 flex items-center justify-center shrink-0 border border-cyan-200 dark:border-cyan-800">
            <span className="material-symbols-outlined text-[22px]">water_drop</span>
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-800 dark:text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-cyan-500 color-pulse-beacon"></span>
              City of Austin Water Compliance
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[var(--color-on-surface)] leading-tight">
              Interactive Austin Watering Schedule
            </h3>
          </div>
        </div>

        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[var(--color-surface-container)] text-[var(--color-on-surface-variant)] self-start sm:self-center border border-[var(--color-border)]">
          Stage 1 / 2 Conservation Verified
        </span>
      </div>

      <p className="text-xs sm:text-sm text-[var(--color-on-surface-variant)] leading-relaxed z-10">
        Austin fines for off-schedule watering can reach $500+. Check your official legal watering days below or type your house number:
      </p>

      {/* Address Quick Auto-Detect Input */}
      <div className="flex flex-col sm:flex-row gap-2 z-10">
        <div className="relative flex-1">
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-[18px] text-[var(--color-on-surface-variant)]">
            home
          </span>
          <input
            type="text"
            value={addressInput}
            onChange={(e) => handleAddressChange(e.target.value)}
            placeholder="Type your Austin street address (e.g., 2408 Westlake Dr)"
            className="w-full bg-[var(--color-surface-low)] pl-9 pr-3 py-2 rounded-xl text-xs sm:text-sm text-[var(--color-on-surface)] border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[#163620]"
          />
        </div>

        {/* Address Type Toggle Pills */}
        <div className="flex gap-1.5 bg-[var(--color-surface-low)] p-1 rounded-xl border border-[var(--color-border)]">
          {[
            { id: 'even', label: 'Even Street #' },
            { id: 'odd', label: 'Odd Street #' },
            { id: 'commercial', label: 'Commercial' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedType(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedType === tab.id
                  ? 'bg-[#163620] text-white shadow-xs'
                  : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Result Box with Smooth Color Frame */}
      <div className="bg-[var(--color-surface-low)] rounded-xl p-4 border border-[var(--color-border)] flex flex-col gap-3 z-10 transition-all duration-700">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[var(--color-border)]">
          <span className="text-xs font-bold text-[var(--color-on-surface)] flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px] text-[#3e6843] dark:text-[#85d697]">
              event_available
            </span>
            {currentRule.label}
          </span>
          <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
            Legal Days: {currentRule.automaticSprinklerDays}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="bg-[var(--color-surface-lowest)] p-3 rounded-lg border border-[var(--color-border)] flex flex-col gap-1">
            <span className="font-bold text-[var(--color-on-surface)] flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-cyan-600">sprinkler</span>
              Automated In-Ground Irrigation:
            </span>
            <span className="text-[var(--color-on-surface-variant)]">
              Allowed strictly on <strong className="text-[var(--color-on-surface)]">{currentRule.automaticSprinklerDays}</strong>.
            </span>
            <span className="text-[11px] text-[var(--color-on-surface-variant)]/80 mt-0.5">
              Hours: {currentRule.allowedHours}
            </span>
          </div>

          <div className="bg-[var(--color-surface-lowest)] p-3 rounded-lg border border-[var(--color-border)] flex flex-col gap-1">
            <span className="font-bold text-[var(--color-on-surface)] flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-amber-600">nature</span>
              Drip Irrigation &amp; Hand-Held Watering:
            </span>
            <span className="text-[var(--color-on-surface-variant)]">
              Permitted any day before 10:00 AM or after 7:00 PM for flowerbeds and trees.
            </span>
          </div>
        </div>

        {/* Javier's Local Austin Pro-Tip */}
        <div className="bg-amber-50/80 dark:bg-amber-950/30 p-3 rounded-lg border border-amber-200/80 dark:border-amber-900/40 flex items-start gap-2">
          <span className="material-symbols-outlined text-amber-700 dark:text-amber-400 text-[18px] shrink-0 mt-0.5">
            tips_and_updates
          </span>
          <p className="text-[11px] sm:text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
            <strong className="font-bold">Javier’s Root Growth Advice:</strong> {currentRule.proTip} Shallow daily sprinkles cause weak surface roots that burn up in Austin’s July heat waves.
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
};
