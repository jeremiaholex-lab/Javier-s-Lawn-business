import React from 'react';
import { ASSETS } from '../../data/landscapingData';
import { ScrollReveal } from '../ScrollReveal';
import { CounterCard } from '../NumberCounter';

interface AboutScreenProps {
  onOpenQuote: () => void;
  onOpenContact: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onOpenQuote, onOpenContact }) => {
  return (
    <div className="flex flex-col w-full px-4 max-w-5xl mx-auto py-4 gap-6">
      {/* Header Badge & Title */}
      <ScrollReveal direction="down" duration={1.2}>
        <div className="flex flex-col gap-1.5">
          <div className="inline-flex items-center gap-1.5 text-[#3e6843] dark:text-[#85d697] text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#3e6843] color-pulse-beacon"></span>
            Central Texas Trade Records • 24 Years Experience
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#00200d] dark:text-[#85d697] tracking-tight">
            About Javier's Landscaping &amp; Lawn Care
          </h1>
          <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed max-w-2xl">
            24 years of dedicated lawn care, tree trimming, limestone masonry, and genuine family-run service based out of Del Valle, TX and serving Greater Austin.
          </p>
        </div>
      </ScrollReveal>

      {/* Founder Story Card with ScrollReveal */}
      <ScrollReveal direction="up" duration={1.3} delay={0.1}>
        <div className="bg-[var(--color-surface-lowest)] rounded-2xl p-5 sm:p-6 shadow-xs border border-[var(--color-border)] flex flex-col md:flex-row gap-5 items-center">
          <div className="w-full md:w-1/3 aspect-square max-w-[220px] rounded-2xl overflow-hidden shadow-sm bg-[var(--color-surface-high)] relative border border-[var(--color-border)]">
            <img
              src={ASSETS.founderJavier}
              alt="Javier Hernandez, Founder & Operator of Javier's Landscaping Austin"
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-2 left-2 right-2 bg-[#163620]/90 text-white text-[11px] font-bold px-2 py-1 rounded text-center backdrop-blur-xs">
              Javier • Founder &amp; Operator
            </div>
          </div>

          <div className="w-full md:w-2/3 flex flex-col gap-3">
            <span className="text-xs font-bold text-[#d9822b] uppercase tracking-wider flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              Del Valle &amp; Austin Family Owned • 24 Years of Service
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-[var(--color-on-surface)] leading-snug">
              “We treat every property as if our own family lived there — arriving on time, working efficiently, and leaving the yard spotless.”
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
              With 24 years on record in Central Texas, Javier’s Landscaping &amp; Lawn Care has built its name on word-of-mouth and long-term client relationships. Operating directly from Del Valle (78617) into Austin, West Lake Hills, Tarrytown, and Buda, we handle regular mowing, weed treatment, tree trimming, and heavy debris haul-off with no middlemen or outsourced crews.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-lg bg-[var(--color-surface-low)] text-xs font-semibold text-[#163620] dark:text-[#85d697] border border-[var(--color-border)]">
                24 Years Experience
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-[var(--color-surface-low)] text-xs font-semibold text-[#163620] dark:text-[#85d697] border border-[var(--color-border)]">
                Del Valle Base (78617)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-[var(--color-surface-low)] text-xs font-semibold text-[#3e6843] dark:text-[#85d697] border border-[var(--color-border)]">
                4.7★ HomeAdvisor (99 Reviews)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-[var(--color-surface-low)] text-xs font-semibold text-[#d9822b] border border-[var(--color-border)]">
                Direct Dispatch (512) 791-3398
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* 24-Year Central Texas Track Record in Numbers */}
      <ScrollReveal direction="up" duration={1.3}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <CounterCard
            value={24}
            suffix=" Years"
            label="Central Texas Experience"
            sublabel="Established Trade Record"
            icon="event_note"
            iconColor="text-[#d9822b]"
            duration={2200}
          />
          <CounterCard
            value={99}
            suffix=""
            label="Verified HomeAdvisor Reviews"
            sublabel="4.7 ★ Verified Average"
            icon="grade"
            iconColor="text-[#d9822b]"
            duration={2000}
          />
          <CounterCard
            value={6}
            suffix=" Yr+"
            label="Long-Term Client Retention"
            sublabel="Ongoing Multi-Year Contracts"
            icon="groups"
            iconColor="text-[#3e6843] dark:text-[#85d697]"
            duration={2400}
          />
          <CounterCard
            value={100}
            suffix="%"
            label="Zero Subcontractors"
            sublabel="Direct Javier Family Crew"
            icon="verified_user"
            iconColor="text-[#3e6843] dark:text-[#85d697]"
            duration={2100}
          />
        </div>
      </ScrollReveal>

      {/* The Javier Craftsmanship Standard */}
      <div className="flex flex-col gap-3">
        <ScrollReveal direction="up" duration={1.2}>
          <h3 className="text-lg font-bold text-[var(--color-on-surface)]">
            The Javier Craftsmanship Standard
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <ScrollReveal direction="up" duration={1.2} delay={0.05}>
            <div className="p-4 rounded-xl bg-[var(--color-surface-lowest)] border border-[var(--color-border)] flex flex-col gap-2 card-hover-fx h-full">
              <div className="w-9 h-9 rounded-lg bg-[var(--color-secondary-container)] flex items-center justify-center text-[#163620] dark:text-[#85d697]">
                <span className="material-symbols-outlined text-[20px]">content_cut</span>
              </div>
              <h4 className="text-sm font-bold text-[var(--color-on-surface)]">
                Daily Sharpened Blades
              </h4>
              <p className="text-xs text-[var(--color-on-surface-variant)] leading-relaxed">
                Dull blades tear grass, causing brown tips in Texas heat. We swap and balance our commercial blades daily for a clean, surgical cut.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" duration={1.2} delay={0.1}>
            <div className="p-4 rounded-xl bg-[var(--color-surface-lowest)] border border-[var(--color-border)] flex flex-col gap-2 card-hover-fx h-full">
              <div className="w-9 h-9 rounded-lg bg-[var(--color-secondary-container)] flex items-center justify-center text-[#163620] dark:text-[#85d697]">
                <span className="material-symbols-outlined text-[20px]">water_drop</span>
              </div>
              <h4 className="text-sm font-bold text-[var(--color-on-surface)]">
                Austin Water Stewardship
              </h4>
              <p className="text-xs text-[var(--color-on-surface-variant)] leading-relaxed">
                Trained in City of Austin Stage 1 &amp; 2 watering protocols. We optimize cutting heights to shelter soil moisture and prevent turf stress.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" duration={1.2} delay={0.15}>
            <div className="p-4 rounded-xl bg-[var(--color-surface-lowest)] border border-[var(--color-border)] flex flex-col gap-2 card-hover-fx h-full">
              <div className="w-9 h-9 rounded-lg bg-[var(--color-secondary-container)] flex items-center justify-center text-[#163620] dark:text-[#85d697]">
                <span className="material-symbols-outlined text-[20px]">cleaning_services</span>
              </div>
              <h4 className="text-sm font-bold text-[var(--color-on-surface)]">
                Zero Debris Guarantee
              </h4>
              <p className="text-xs text-[var(--color-on-surface-variant)] leading-relaxed">
                We never leave clippings blown against fence lines, pool copings, outdoor kitchens, or parked vehicles. Every surface is blown pristine.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" duration={1.2} delay={0.2}>
            <div className="p-4 rounded-xl bg-[var(--color-surface-lowest)] border border-[var(--color-border)] flex flex-col gap-2 card-hover-fx h-full">
              <div className="w-9 h-9 rounded-lg bg-[var(--color-secondary-container)] flex items-center justify-center text-[#163620] dark:text-[#85d697]">
                <span className="material-symbols-outlined text-[20px]">shield</span>
              </div>
              <h4 className="text-sm font-bold text-[var(--color-on-surface)]">
                $2M General Liability
              </h4>
              <p className="text-xs text-[var(--color-on-surface-variant)] leading-relaxed">
                Comprehensive Texas commercial insurance, workers' compensation, and fully licensed sprinkler/irrigation technicians for complete peace of mind.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Equipment & Neighborhood Etiquette */}
      <ScrollReveal direction="up" duration={1.3}>
        <div className="bg-[var(--color-surface-low)] rounded-2xl p-5 border border-[var(--color-border)] flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#3e6843] dark:text-[#85d697] text-[22px]">volume_off</span>
            <h3 className="text-sm sm:text-base font-bold text-[var(--color-on-surface)]">
              Quiet Neighborhood Equipment
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
            We respect early morning routines in neighborhoods like Westlake, Tarrytown, and Lakeway. Our crew utilizes high-performance commercial battery blowers and trimmers to minimize engine noise while keeping properties immaculate.
          </p>
        </div>
      </ScrollReveal>

      {/* CTA Banner with slow subtle color border */}
      <ScrollReveal direction="up" duration={1.3}>
        <div className="bg-[var(--color-surface-lowest)] rounded-2xl p-5 sm:p-6 border border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm color-border-animated">
          <div>
            <h3 className="text-base font-bold text-[var(--color-on-surface)]">
              Ready for Reliable Yard Care?
            </h3>
            <p className="text-xs text-[var(--color-on-surface-variant)]">
              Get an instant custom estimate or call Javier directly at (512) 791-3398.
            </p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onOpenQuote}
              className="flex-1 sm:flex-none py-2.5 px-4 rounded-xl bg-[#d9822b] hover:bg-[#c27222] text-white font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer"
            >
              Get Free Estimate
            </button>
            <button
              type="button"
              onClick={onOpenContact}
              className="flex-1 sm:flex-none py-2.5 px-4 rounded-xl bg-[#163620] text-white font-bold text-xs shadow-sm hover:bg-[#234e31] transition-all active:scale-95 cursor-pointer"
            >
              Contact Dispatch
            </button>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};
