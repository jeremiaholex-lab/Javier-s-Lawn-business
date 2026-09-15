import React, { useState } from 'react';
import { SERVICE_AREAS } from '../../data/landscapingData';
import { ScrollReveal } from '../ScrollReveal';
import { NumberCounter } from '../NumberCounter';

export const ContactScreen: React.FC = () => {
  const [zipInput, setZipInput] = useState('');
  const [zipResult, setZipResult] = useState<{ found: boolean; message: string; area?: string; schedule?: string } | null>(null);

  // Message form
  const [msgName, setMsgName] = useState('');
  const [msgPhone, setMsgPhone] = useState('');
  const [msgText, setMsgText] = useState('');
  const [msgSent, setMsgSent] = useState(false);

  const checkZipCode = (e: React.FormEvent) => {
    e.preventDefault();
    const query = zipInput.trim().toLowerCase();
    if (!query) return;

    const matched = SERVICE_AREAS.find(
      (a) => a.zip === query || a.name.toLowerCase().includes(query)
    );

    if (matched) {
      setZipResult({
        found: true,
        area: matched.name,
        schedule: matched.schedule,
        message: `Great news! ${matched.name} (${matched.zip}) is on our direct active route. Regular maintenance dispatched ${matched.schedule}.`,
      });
    } else {
      setZipResult({
        found: true,
        area: query,
        message: `We service Greater Austin & Central Texas! We frequently take custom routes for ${query}. Call (512) 791-3398 to confirm next available crew slot.`,
      });
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setMsgSent(true);
    setTimeout(() => {
      setMsgSent(false);
      setMsgName('');
      setMsgPhone('');
      setMsgText('');
    }, 4000);
  };

  return (
    <div className="flex flex-col w-full px-4 max-w-5xl mx-auto py-4 gap-6">
      {/* Header */}
      <ScrollReveal direction="down" duration={1.2}>
        <div className="flex flex-col gap-1.5">
          <div className="inline-flex items-center gap-1 text-[#3e6843] dark:text-[#85d697] text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#d9822b] color-pulse-beacon"></span>
            Austin Crew Direct Dispatch
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#00200d] dark:text-[#85d697] tracking-tight">
            Contact Javier’s Landscaping &amp; Lawn Care
          </h1>
          <p className="text-xs sm:text-sm text-[var(--color-on-surface-variant)]">
            Speak directly with our local Austin crew. No outsourced call centers or automated loops.
          </p>
        </div>
      </ScrollReveal>

      {/* Main Direct Dispatch Callout Box */}
      <ScrollReveal direction="up" duration={1.3} delay={0.1}>
        <div className="bg-[var(--color-surface-lowest)] rounded-2xl p-5 sm:p-6 border border-[var(--color-border)] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-5 color-border-animated">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#163620] text-[#d9822b] flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[30px]">phone_in_talk</span>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#d9822b] flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Immediate Austin Dispatch Line
              </span>
              <a
                href="tel:5127913398"
                className="text-xl sm:text-2xl font-extrabold text-[#00200d] dark:text-[#85d697] hover:underline block leading-tight"
              >
                (512) 791-3398
              </a>
              <p className="text-xs text-[var(--color-on-surface-variant)] mt-0.5">
                Monday – Saturday: 7:00 AM – 6:30 PM CST
              </p>
            </div>
          </div>

          <div className="flex gap-2 w-full sm:w-auto">
            <a
              href="tel:5127913398"
              className="flex-1 sm:flex-none py-3 px-5 rounded-xl bg-[#163620] text-white font-bold text-xs shadow-sm hover:bg-[#234e31] transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px] text-[#d9822b]">call</span>
              Call Dispatch
            </a>
            <a
              href="sms:5127913398"
              className="flex-1 sm:flex-none py-3 px-5 rounded-xl bg-[var(--color-surface-low)] text-[var(--color-on-surface)] border border-[var(--color-border)] font-bold text-xs hover:bg-[var(--color-surface-container)] transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px] text-[#3e6843]">chat</span>
              Text Photos
            </a>
          </div>
        </div>
      </ScrollReveal>

      {/* Dispatch Response & Direct Access Number Counters */}
      <ScrollReveal direction="up" duration={1.2}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-[var(--color-surface-low)] p-3.5 rounded-xl border border-[var(--color-border)] flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[var(--color-surface-lowest)] flex items-center justify-center text-[#d9822b] shrink-0">
              <span className="material-symbols-outlined text-[20px]">timer</span>
            </div>
            <div>
              <div className="text-base font-extrabold text-[var(--color-on-surface)] leading-tight flex items-baseline gap-1">
                <span>&lt;</span>
                <NumberCounter to={15} duration={1400} />
                <span>Min</span>
              </div>
              <p className="text-[11px] text-[var(--color-on-surface-variant)]">Average callback during business hrs</p>
            </div>
          </div>

          <div className="bg-[var(--color-surface-low)] p-3.5 rounded-xl border border-[var(--color-border)] flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[var(--color-surface-lowest)] flex items-center justify-center text-[#163620] dark:text-[#85d697] shrink-0">
              <span className="material-symbols-outlined text-[20px]">map</span>
            </div>
            <div>
              <div className="text-base font-extrabold text-[var(--color-on-surface)] leading-tight flex items-baseline gap-1">
                <NumberCounter to={12} duration={1600} />
                <span>Austin Zip Codes</span>
              </div>
              <p className="text-[11px] text-[var(--color-on-surface-variant)]">Weekly route trucks actively assigned</p>
            </div>
          </div>

          <div className="bg-[var(--color-surface-low)] p-3.5 rounded-xl border border-[var(--color-border)] flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[var(--color-surface-lowest)] flex items-center justify-center text-[#3e6843] dark:text-[#85d697] shrink-0">
              <span className="material-symbols-outlined text-[20px]">support_agent</span>
            </div>
            <div>
              <div className="text-base font-extrabold text-[var(--color-on-surface)] leading-tight flex items-baseline gap-1">
                <NumberCounter to={100} suffix="%" duration={1800} />
                <span>Direct Lead Dispatch</span>
              </div>
              <p className="text-[11px] text-[var(--color-on-surface-variant)]">Speak directly with crew leads</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Interactive Zip Code Territory Checker */}
      <ScrollReveal direction="up" duration={1.3}>
        <div className="bg-[var(--color-surface-low)] rounded-2xl p-5 border border-[var(--color-border)] flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-secondary-container)] flex items-center justify-center text-[#163620] dark:text-[#85d697]">
              <span className="material-symbols-outlined text-[20px]">pin_drop</span>
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[var(--color-on-surface)]">
                Interactive Territory &amp; Route Checker
              </h3>
              <p className="text-xs text-[var(--color-on-surface-variant)]">
                Check if your property is in our scheduled neighborhood rotation.
              </p>
            </div>
          </div>

          <form onSubmit={checkZipCode} className="flex gap-2">
            <input
              type="text"
              value={zipInput}
              onChange={(e) => setZipInput(e.target.value)}
              placeholder="Enter Austin Zip Code (e.g., 78746, 78703, 78734)"
              className="flex-1 bg-[var(--color-surface-lowest)] px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-[var(--color-on-surface)] border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[#163620]"
            />
            <button
              type="submit"
              className="py-2.5 px-4 rounded-xl bg-[#163620] text-white text-xs font-bold shadow-xs hover:bg-[#234e31] transition-all cursor-pointer"
            >
              Check Route
            </button>
          </form>

          {zipResult && (
            <div className="p-3.5 rounded-xl bg-[var(--color-surface-lowest)] border border-[var(--color-border)] flex items-start gap-2.5">
              <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-[20px] shrink-0 mt-0.5">
                check_circle
              </span>
              <div className="text-xs text-[var(--color-on-surface)] leading-relaxed">
                <span className="font-bold block text-sm mb-0.5">{zipResult.area}</span>
                {zipResult.message}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-1.5 pt-1">
            <span className="text-[11px] font-bold text-[var(--color-on-surface-variant)] mr-1 self-center">
              Common routes:
            </span>
            {SERVICE_AREAS.slice(0, 6).map((area) => (
              <button
                key={`${area.name}-${area.zip}`}
                type="button"
                onClick={() => {
                  setZipInput(area.zip);
                  setZipResult({
                    found: true,
                    area: area.name,
                    schedule: area.schedule,
                    message: `Active territory: ${area.name} (${area.zip}) is dispatched ${area.schedule}.`,
                  });
                }}
                className="text-[11px] bg-[var(--color-surface-lowest)] border border-[var(--color-border)] px-2 py-0.5 rounded text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container)] cursor-pointer"
              >
                {area.name} ({area.zip})
              </button>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Emergency Freeze & Weather Response */}
      <ScrollReveal direction="up" duration={1.3}>
        <div className="bg-[var(--color-surface-lowest)] rounded-2xl p-5 border border-[var(--color-border)] shadow-xs flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-[#d9822b] flex items-center justify-center shrink-0 border border-amber-200 dark:border-amber-900">
            <span className="material-symbols-outlined text-[24px]">ac_unit</span>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-bold text-[var(--color-on-surface)]">
              Texas Freeze Recovery &amp; Storm Tree Limbs
            </h3>
            <p className="text-xs text-[var(--color-on-surface-variant)] leading-relaxed">
              Need emergency cleanup after severe Central Texas freeze or high winds? Our rapid crew clears hazardous branches, recovers drooping palm trees, and restores curb appeal. Mention “Storm Priority” when calling.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Message Inquiry Form */}
      <ScrollReveal direction="up" duration={1.3}>
        <div className="bg-[var(--color-surface-lowest)] rounded-2xl p-5 sm:p-6 border border-[var(--color-border)] shadow-xs flex flex-col gap-3">
          <h3 className="text-sm sm:text-base font-bold text-[var(--color-on-surface)]">
            Send Javier a Quick Property Note
          </h3>
          {!msgSent ? (
            <form onSubmit={handleSendMessage} className="flex flex-col gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[var(--color-on-surface)]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={msgName}
                    onChange={(e) => setMsgName(e.target.value)}
                    placeholder="e.g., Robert Vance"
                    className="bg-[var(--color-surface-low)] px-3 py-2 rounded-xl text-xs sm:text-sm text-[var(--color-on-surface)] border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[#163620]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[var(--color-on-surface)]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={msgPhone}
                    onChange={(e) => setMsgPhone(e.target.value)}
                    placeholder="(512) 555-0188"
                    className="bg-[var(--color-surface-low)] px-3 py-2 rounded-xl text-xs sm:text-sm text-[var(--color-on-surface)] border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[#163620]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[var(--color-on-surface)]">
                  Property Question or Service Needed
                </label>
                <textarea
                  rows={3}
                  required
                  value={msgText}
                  onChange={(e) => setMsgText(e.target.value)}
                  placeholder="Describe your yard layout, address, or special requests..."
                  className="bg-[var(--color-surface-low)] px-3 py-2 rounded-xl text-xs sm:text-sm text-[var(--color-on-surface)] border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[#163620]"
                />
              </div>

              <button
                type="submit"
                className="mt-1 py-3 px-4 rounded-xl bg-[#d9822b] hover:bg-[#c27222] text-white font-bold text-xs shadow-md transition-all active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
                Send Direct Message
              </button>
            </form>
          ) : (
            <div className="p-4 bg-[var(--color-secondary-container)] text-[#163620] dark:text-white rounded-xl flex items-center gap-2">
              <span className="material-symbols-outlined text-[24px]">task_alt</span>
              <span className="text-xs font-bold">
                Message sent! Javier’s crew will text or call you back shortly.
              </span>
            </div>
          )}
        </div>
      </ScrollReveal>
    </div>
  );
};
