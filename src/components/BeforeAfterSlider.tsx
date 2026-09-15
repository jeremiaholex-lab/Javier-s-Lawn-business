import React, { useState } from 'react';
import { ASSETS } from '../data/landscapingData';
import { ScrollReveal } from './ScrollReveal';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 to 100
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ScrollReveal
      direction="up"
      duration={1.4}
      className="bg-[var(--color-surface-lowest)] rounded-2xl p-5 sm:p-6 border border-[var(--color-border)] shadow-sm flex flex-col gap-4 relative overflow-hidden"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#d9822b]">
            <span className="material-symbols-outlined text-[16px]">compare</span>
            Austin Yard Transformation
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#00200d] dark:text-[#85d697] tracking-tight">
            Before &amp; After: The Javier Standard
          </h3>
        </div>
        <span className="text-xs text-[var(--color-on-surface-variant)] font-semibold bg-[var(--color-surface-low)] px-3 py-1 rounded-full border border-[var(--color-border)] self-start sm:self-center">
          Slide or Drag to Compare
        </span>
      </div>

      <p className="text-xs sm:text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
        From thin weed-infested caliche dirt to vibrant Palisades Zoysia framed with cut Hill Country white limestone borders and organic cedar mulch.
      </p>

      {/* Interactive Visual Comparison Container */}
      <div
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden select-none touch-none border border-[var(--color-border)] shadow-inner"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* "After" Image (Full background) */}
        <img
          src={ASSETS.afterYard}
          alt="After: Manicured Austin luxury yard with vibrant lawn, clean mulch bed, and Texas limestone retaining edge"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 right-3 bg-[#163620]/90 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-bold shadow-md z-10">
          AFTER (Javier’s Crew)
        </div>

        {/* "Before" Image (Clipped by slider percentage) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={ASSETS.beforeYard}
            alt="Before: Central Texas property prior to precision edging and flowerbed restoration"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: '100%', maxWidth: 'none' }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-3 left-3 bg-neutral-900/80 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-bold shadow-md z-10">
            BEFORE (Prior Condition)
          </div>
        </div>

        {/* Divider Line & Draggable Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          style={{ left: `calc(${sliderPos}% - 2px)` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-[#163620] shadow-xl flex items-center justify-center border-2 border-[#163620] cursor-grab active:cursor-grabbing">
            <span className="material-symbols-outlined text-[20px]">code</span>
          </div>
        </div>

        {/* Range Input Overlay for Seamless Accessibility & Touch */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          aria-label="Before and after transformation slider"
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
        />
      </div>

      {/* Preset Buttons for Quick Toggles */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setSliderPos(15)}
            className="text-xs font-bold px-3 py-1.5 rounded-lg bg-[var(--color-surface-low)] hover:bg-[var(--color-surface-container)] text-[var(--color-on-surface)] border border-[var(--color-border)] cursor-pointer"
          >
            Show "After" View
          </button>
          <button
            type="button"
            onClick={() => setSliderPos(50)}
            className="text-xs font-bold px-3 py-1.5 rounded-lg bg-[var(--color-surface-low)] hover:bg-[var(--color-surface-container)] text-[var(--color-on-surface)] border border-[var(--color-border)] cursor-pointer"
          >
            50/50 Split
          </button>
          <button
            type="button"
            onClick={() => setSliderPos(85)}
            className="text-xs font-bold px-3 py-1.5 rounded-lg bg-[var(--color-surface-low)] hover:bg-[var(--color-surface-container)] text-[var(--color-on-surface)] border border-[var(--color-border)] cursor-pointer"
          >
            Show "Before" View
          </button>
        </div>

        <span className="text-[11px] text-[var(--color-on-surface-variant)] hidden sm:inline">
          Westlake Hills Project #418
        </span>
      </div>
    </ScrollReveal>
  );
};
