import React, { useState } from 'react';
import { ServiceFrequency } from '../../types';
import { ScrollReveal } from '../ScrollReveal';
import { NumberCounter } from '../NumberCounter';

interface QuoteScreenProps {
  initialServiceTitle?: string;
  onOpenServices: () => void;
}

export const QuoteScreen: React.FC<QuoteScreenProps> = ({ initialServiceTitle, onOpenServices }) => {
  // Calculator selections
  const [lotSize, setLotSize] = useState<'small' | 'standard' | 'estate' | 'acreage'>('standard');
  const [selectedService, setSelectedService] = useState<string>(
    initialServiceTitle || 'Regular Lawn Mowing & Edging'
  );
  const [frequency, setFrequency] = useState<ServiceFrequency>('Weekly');

  // Add-ons
  const [addonMulch, setAddonMulch] = useState(false);
  const [addonSprinkler, setAddonSprinkler] = useState(false);
  const [addonShrub, setAddonShrub] = useState(false);
  const [addonWeed, setAddonWeed] = useState(false);

  // User input
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dynamic price calculation
  const calculateEstimate = () => {
    let base = 50;
    if (lotSize === 'small') base = 38;
    if (lotSize === 'standard') base = 52;
    if (lotSize === 'estate') base = 88;
    if (lotSize === 'acreage') base = 150;

    // Service multipliers
    if (selectedService.includes('Sod') || selectedService.includes('Zoysia')) base = base * 4.2;
    else if (selectedService.includes('Masonry') || selectedService.includes('Hardscape')) base = base * 4.8;
    else if (selectedService.includes('Tree') || selectedService.includes('Storm')) base = base * 2.9;
    else if (selectedService.includes('Flower') || selectedService.includes('Xeriscape')) base = base * 2.6;
    else if (selectedService.includes('Seasonal')) base = base * 2.2;

    // Add-on fees
    let addonsTotal = 0;
    if (addonMulch) addonsTotal += 65;
    if (addonSprinkler) addonsTotal += 45;
    if (addonShrub) addonsTotal += 55;
    if (addonWeed) addonsTotal += 40;

    // Frequency discount
    let discount = 1.0;
    if (frequency === 'Weekly') discount = 0.85; // 15% off
    if (frequency === 'Bi-Weekly') discount = 0.92; // 8% off

    const finalBase = Math.round(base * discount + addonsTotal);
    const highRange = Math.round(finalBase * 1.25);

    const isRecurring = selectedService.includes('Mowing');
    return {
      low: finalBase,
      high: highRange,
      unit: isRecurring ? '/ visit' : 'project est.',
    };
  };

  const estimate = calculateEstimate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="flex flex-col w-full px-4 max-w-5xl mx-auto py-4 gap-6">
      {/* Header */}
      <ScrollReveal direction="down" duration={1.2}>
        <div className="flex flex-col gap-1.5">
          <div className="inline-flex items-center gap-1.5 text-[#d9822b] text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#d9822b] color-pulse-beacon"></span>
            Austin Instant Price Calculator
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#00200d] dark:text-[#85d697] tracking-tight">
            Instant Lawn &amp; Landscape Estimate
          </h1>
          <p className="text-xs sm:text-sm text-[var(--color-on-surface-variant)]">
            Get an immediate estimate tailored to your Austin property size and specific maintenance requirements.
          </p>
        </div>
      </ScrollReveal>

      {/* Calculator Volume & Trust Counters */}
      <ScrollReveal direction="up" duration={1.2}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="bg-[var(--color-surface-low)] p-3 rounded-xl border border-[var(--color-border)] flex flex-col items-center text-center">
            <span className="text-xl sm:text-2xl font-extrabold text-[#00200d] dark:text-[#85d697]">
              <NumberCounter to={1450} suffix="+" duration={2000} />
            </span>
            <span className="text-[11px] font-bold text-[var(--color-on-surface)] mt-0.5">Estimates Generated</span>
          </div>

          <div className="bg-[var(--color-surface-low)] p-3 rounded-xl border border-[var(--color-border)] flex flex-col items-center text-center">
            <span className="text-xl sm:text-2xl font-extrabold text-[#d9822b]">
              <NumberCounter to={98} suffix="%" duration={1800} />
            </span>
            <span className="text-[11px] font-bold text-[var(--color-on-surface)] mt-0.5">On-Site Accuracy</span>
          </div>

          <div className="bg-[var(--color-surface-low)] p-3 rounded-xl border border-[var(--color-border)] flex flex-col items-center text-center">
            <span className="text-xl sm:text-2xl font-extrabold text-[#3e6843] dark:text-[#85d697]">
              <NumberCounter to={15} suffix="%" duration={1600} />
            </span>
            <span className="text-[11px] font-bold text-[var(--color-on-surface)] mt-0.5">Weekly Route Discount</span>
          </div>

          <div className="bg-[var(--color-surface-low)] p-3 rounded-xl border border-[var(--color-border)] flex flex-col items-center text-center">
            <span className="text-xl sm:text-2xl font-extrabold text-[#00200d] dark:text-[#85d697]">
              $<NumberCounter to={0} duration={1000} />
            </span>
            <span className="text-[11px] font-bold text-[var(--color-on-surface)] mt-0.5">Deposit Required</span>
          </div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Calculator Controls */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          {/* Step 1: Property Size */}
          <ScrollReveal direction="up" duration={1.3}>
            <div className="bg-[var(--color-surface-lowest)] rounded-2xl p-5 border border-[var(--color-border)] shadow-xs flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3e6843] dark:text-[#85d697]">
                Step 1 • Select Property Lot Size
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'small', title: 'Courtyard', size: '< 2,500 sq ft', icon: 'cottage' },
                  { id: 'standard', title: 'Standard Yard', size: '5k–8k sq ft', icon: 'home' },
                  { id: 'estate', title: 'Hill Country Estate', size: '1/3 – 1/2 Acre', icon: 'villa' },
                  { id: 'acreage', title: 'Luxury Ranch', size: '1+ Acre', icon: 'landscape' },
                ].map((lot) => {
                  const isSelected = lotSize === lot.id;
                  return (
                    <button
                      key={lot.id}
                      type="button"
                      onClick={() => setLotSize(lot.id as any)}
                      className={`p-3 rounded-xl flex flex-col items-center text-center gap-1 border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#163620] text-white border-[#163620] shadow-sm scale-102'
                          : 'bg-[var(--color-surface-low)] text-[var(--color-on-surface)] border-[var(--color-border)] hover:bg-[var(--color-surface-container)]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[24px]">{lot.icon}</span>
                      <span className="text-xs font-bold leading-tight mt-0.5">{lot.title}</span>
                      <span
                        className={`text-[10px] ${
                          isSelected ? 'text-emerald-200' : 'text-[var(--color-on-surface-variant)]'
                        }`}
                      >
                        {lot.size}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Step 2: Primary Service */}
          <ScrollReveal direction="up" duration={1.3}>
            <div className="bg-[var(--color-surface-lowest)] rounded-2xl p-5 border border-[var(--color-border)] shadow-xs flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3e6843] dark:text-[#85d697]">
                Step 2 • Primary Service Needed
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Regular Lawn Mowing & Edging',
                  'Palisades Zoysia / Sod Installation',
                  'Austin Limestone Masonry & Hardscape',
                  'Flower Bed Cedar Mulch & Xeriscaping',
                  'Tree Trimming & Storm Limb Removal',
                  'Seasonal Cleanups & Core Aeration',
                ].map((srv) => {
                  const isSelected = selectedService === srv;
                  return (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => setSelectedService(srv)}
                      className={`p-3 rounded-xl text-left flex items-center justify-between border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#163620] text-white border-[#163620] shadow-sm'
                          : 'bg-[var(--color-surface-low)] text-[var(--color-on-surface)] border-[var(--color-border)] hover:bg-[var(--color-surface-container)]'
                      }`}
                    >
                      <span className="text-xs font-bold leading-tight">{srv}</span>
                      <span
                        className="material-symbols-outlined text-[18px] shrink-0"
                        style={isSelected ? { fontVariationSettings: "'FILL' 1" } : undefined}
                      >
                        {isSelected ? 'check_circle' : 'radio_button_unchecked'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Step 3: Frequency */}
          <ScrollReveal direction="up" duration={1.3}>
            <div className="bg-[var(--color-surface-lowest)] rounded-2xl p-5 border border-[var(--color-border)] shadow-xs flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#3e6843] dark:text-[#85d697]">
                  Step 3 • Frequency &amp; Discounts
                </span>
                <span className="text-[11px] font-bold text-[#d9822b]">Weekly saves 15%</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Weekly', discount: '15% Off' },
                  { label: 'Bi-Weekly', discount: '8% Off' },
                  { label: 'One-Time', discount: 'Standard' },
                ].map((freq) => {
                  const isSelected = frequency === freq.label;
                  return (
                    <button
                      key={freq.label}
                      type="button"
                      onClick={() => setFrequency(freq.label as ServiceFrequency)}
                      className={`p-2.5 rounded-xl flex flex-col items-center justify-center border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#163620] text-white border-[#163620] shadow-xs'
                          : 'bg-[var(--color-surface-low)] text-[var(--color-on-surface)] border-[var(--color-border)]'
                      }`}
                    >
                      <span className="text-xs font-bold">{freq.label}</span>
                      <span
                        className={`text-[10px] ${
                          isSelected ? 'text-amber-300' : 'text-[#d9822b] font-semibold'
                        }`}
                      >
                        {freq.discount}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Step 4: Optional Add-ons */}
          <ScrollReveal direction="up" duration={1.3}>
            <div className="bg-[var(--color-surface-lowest)] rounded-2xl p-5 border border-[var(--color-border)] shadow-xs flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3e6843] dark:text-[#85d697]">
                Step 4 • Optional Property Add-ons
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <label
                  className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${
                    addonMulch
                      ? 'bg-amber-50 dark:bg-amber-950/30 border-amber-300 dark:border-amber-700'
                      : 'bg-[var(--color-surface-low)] border-[var(--color-border)]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={addonMulch}
                      onChange={(e) => setAddonMulch(e.target.checked)}
                      className="w-4 h-4 rounded text-[#163620] focus:ring-0"
                    />
                    <span className="text-xs font-medium text-[var(--color-on-surface)]">
                      Organic Cedar Mulch Refresh
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#d9822b]">+$65</span>
                </label>

                <label
                  className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${
                    addonSprinkler
                      ? 'bg-amber-50 dark:bg-amber-950/30 border-amber-300 dark:border-amber-700'
                      : 'bg-[var(--color-surface-low)] border-[var(--color-border)]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={addonSprinkler}
                      onChange={(e) => setAddonSprinkler(e.target.checked)}
                      className="w-4 h-4 rounded text-[#163620] focus:ring-0"
                    />
                    <span className="text-xs font-medium text-[var(--color-on-surface)]">
                      Sprinkler / Drip Line Inspection
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#d9822b]">+$45</span>
                </label>

                <label
                  className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${
                    addonShrub
                      ? 'bg-amber-50 dark:bg-amber-950/30 border-amber-300 dark:border-amber-700'
                      : 'bg-[var(--color-surface-low)] border-[var(--color-border)]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={addonShrub}
                      onChange={(e) => setAddonShrub(e.target.checked)}
                      className="w-4 h-4 rounded text-[#163620] focus:ring-0"
                    />
                    <span className="text-xs font-medium text-[var(--color-on-surface)]">
                      Shrub Contour &amp; Canopy Lift
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#d9822b]">+$55</span>
                </label>

                <label
                  className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${
                    addonWeed
                      ? 'bg-amber-50 dark:bg-amber-950/30 border-amber-300 dark:border-amber-700'
                      : 'bg-[var(--color-surface-low)] border-[var(--color-border)]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={addonWeed}
                      onChange={(e) => setAddonWeed(e.target.checked)}
                      className="w-4 h-4 rounded text-[#163620] focus:ring-0"
                    />
                    <span className="text-xs font-medium text-[var(--color-on-surface)]">
                      Pre-Emergent Weed Barrier
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#d9822b]">+$40</span>
                </label>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Live Estimate Breakdown & Booking Form */}
        <div className="flex flex-col gap-4">
          <div className="sticky top-20 bg-[var(--color-surface-lowest)] rounded-2xl p-5 border border-[var(--color-border)] shadow-md flex flex-col gap-4 color-border-animated">
            <div className="pb-3 border-b border-[var(--color-border)]">
              <span className="text-xs font-bold text-[#d9822b] uppercase tracking-wider">
                Estimated Price Range
              </span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#00200d] dark:text-[#85d697] flex items-baseline">
                  $<NumberCounter to={estimate.low} duration={600} />
                  <span className="mx-1 text-2xl font-light text-[var(--color-on-surface-variant)]">–</span>
                  $<NumberCounter to={estimate.high} duration={600} />
                </span>
                <span className="text-xs font-semibold text-[var(--color-on-surface-variant)]">
                  {estimate.unit}
                </span>
              </div>
              <p className="text-[11px] text-[var(--color-on-surface-variant)] mt-1">
                Includes razor lawn mowing, 90° perimeter edging, string trimming &amp; clean blow-off.
              </p>
            </div>

            {/* Inclusions summary pills */}
            <div className="flex flex-col gap-1.5 text-xs text-[var(--color-on-surface)]">
              <div className="flex justify-between py-0.5">
                <span className="text-[var(--color-on-surface-variant)]">Property:</span>
                <span className="font-bold capitalize">{lotSize} Lot</span>
              </div>
              <div className="flex justify-between py-0.5">
                <span className="text-[var(--color-on-surface-variant)]">Program:</span>
                <span className="font-bold">{frequency}</span>
              </div>
              <div className="flex justify-between py-0.5">
                <span className="text-[var(--color-on-surface-variant)]">Service:</span>
                <span className="font-bold text-right truncate max-w-[170px]">{selectedService}</span>
              </div>
              <div className="flex justify-between py-0.5">
                <span className="text-[var(--color-on-surface-variant)]">Guarantee:</span>
                <span className="font-bold text-[#3e6843] dark:text-[#85d697]">Zero Debris Left</span>
              </div>
            </div>

            {/* Form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 pt-2 border-t border-[var(--color-border)]">
                <span className="text-xs font-bold text-[var(--color-on-surface)]">
                  Lock In This Rate:
                </span>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Your Full Name"
                  className="bg-[var(--color-surface-low)] px-3 py-2 rounded-xl text-xs text-[var(--color-on-surface)] border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[#163620]"
                />
                <input
                  type="tel"
                  required
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  placeholder="Phone Number (e.g. 512-555-0199)"
                  className="bg-[var(--color-surface-low)] px-3 py-2 rounded-xl text-xs text-[var(--color-on-surface)] border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[#163620]"
                />
                <input
                  type="text"
                  required
                  value={clientAddress}
                  onChange={(e) => setClientAddress(e.target.value)}
                  placeholder="Austin Street Address or Zip"
                  className="bg-[var(--color-surface-low)] px-3 py-2 rounded-xl text-xs text-[var(--color-on-surface)] border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[#163620]"
                />
                <textarea
                  rows={2}
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  placeholder="Notes (gate codes, pets, pool considerations)..."
                  className="bg-[var(--color-surface-low)] px-3 py-2 rounded-xl text-xs text-[var(--color-on-surface)] border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[#163620]"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl bg-[#d9822b] hover:bg-[#c27222] text-white font-bold text-xs shadow-md transition-all active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span className="material-symbols-outlined text-[18px] animate-spin">sync</span>
                  ) : (
                    <span className="material-symbols-outlined text-[18px]">lock</span>
                  )}
                  Lock In Estimate &amp; Book Inspection
                </button>
              </form>
            ) : (
              <div className="p-4 bg-[var(--color-secondary-container)] text-[#163620] dark:text-white rounded-xl flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[24px] text-emerald-800 dark:text-emerald-300 shrink-0">
                  task_alt
                </span>
                <div className="text-xs leading-relaxed">
                  <strong className="block text-sm font-bold mb-0.5">Rate Locked In!</strong>
                  Thank you, {clientName}. Javier's crew will contact you at {clientPhone} to schedule your free property inspection.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
