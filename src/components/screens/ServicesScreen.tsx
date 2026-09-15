import React, { useState } from 'react';
import { ASSETS, SERVICES_LIST, PROJECT_GALLERY, TESTIMONIALS } from '../../data/landscapingData';
import { ServiceItem, ProjectPhoto, ServiceFrequency } from '../../types';
import { ScrollReveal } from '../ScrollReveal';
import { NumberCounter, CounterCard } from '../NumberCounter';
import { AustinWateringWidget } from '../AustinWateringWidget';
import { TexasGrassGuideWidget } from '../TexasGrassGuideWidget';
import { BeforeAfterSlider } from '../BeforeAfterSlider';
import { SeasonalRoadmapWidget } from '../SeasonalRoadmapWidget';

interface ServicesScreenProps {
  onOpenQuoteScreen: (preselectedService?: string) => void;
  onOpenServiceModal: (service: ServiceItem) => void;
  onOpenPhotoLightbox: (photo: ProjectPhoto) => void;
  onOpenSpringModal: () => void;
}

export const ServicesScreen: React.FC<ServicesScreenProps> = ({
  onOpenQuoteScreen,
  onOpenServiceModal,
  onOpenPhotoLightbox,
  onOpenSpringModal,
}) => {
  // Frequency in the inline form
  const [selectedFreq, setSelectedFreq] = useState<ServiceFrequency>('Weekly');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form inputs
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [serviceType, setServiceType] = useState('routine-mowing');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  return (
    <div className="flex flex-col w-full gap-8">
      {/* Hero Section */}
      <section className="px-4 max-w-5xl mx-auto w-full pt-3 flex flex-col gap-4">
        {/* Trust Pill Badge with slow color animation */}
        <ScrollReveal direction="down" duration={1.2}>
          <div className="inline-flex items-center gap-2 bg-[var(--color-surface-low)] border border-[var(--color-border)] px-3.5 py-1.5 rounded-full w-fit shadow-xs color-border-animated">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d9822b] color-pulse-beacon"></span>
            <span className="text-[12px] text-[var(--color-on-surface)] font-bold tracking-wide">
              Central Texas Trade Record • 24 Years Experience
            </span>
            <span className="hidden sm:inline text-[11px] text-[#3e6843] dark:text-[#85d697] font-semibold pl-1 border-l border-[var(--color-border)]">
              Del Valle Base &amp; Greater Austin Dispatch
            </span>
          </div>
        </ScrollReveal>

        {/* Main Headline & Subtitle */}
        <ScrollReveal direction="up" duration={1.4} delay={0.1}>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#00200d] dark:text-[#85d697] tracking-tight leading-[1.2]">
              Austin’s Premier Lawn Care, Turf &amp; Stonework Craftsmanship
            </h1>
            <p className="text-sm sm:text-base text-[var(--color-on-surface-variant)] leading-relaxed max-w-2xl">
              From razor-sharp rotary mowing and Palisades Zoysia sod to custom Hill Country white limestone retaining beds. Meticulously cared for by Javier Hernandez and local crew.
            </p>
          </div>
        </ScrollReveal>

        {/* Hero Image Showcase with Ambient Color Border */}
        <ScrollReveal direction="up" duration={1.5} delay={0.2}>
          <div className="relative w-full rounded-2xl overflow-hidden shadow-md bg-[var(--color-surface-high)] aspect-[16/10] group border border-[var(--color-border)]">
            <img
              src={ASSETS.heroEstate}
              alt="Modern Texas limestone residential estate featuring manicured emerald turf, drought-tolerant xeriscape agave plantings, and crisp flagstone walk"
              className="w-full h-full object-cover transition-transform duration-1200 ease-out group-hover:scale-104"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00200d]/85 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 bg-white/95 dark:bg-[#14231b]/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm">
                <span
                  className="material-symbols-outlined text-[18px] text-[#3e6843]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified_user
                </span>
                <span className="text-[11px] sm:text-xs text-[#121c2a] dark:text-[#f1f7f3] font-bold">
                  500+ Austin Properties Maintained
                </span>
              </div>
              
              <div className="bg-[#163620]/95 backdrop-blur-md px-2.5 py-1.5 rounded-lg text-white text-[11px] sm:text-xs font-semibold flex items-center gap-1 shrink-0">
                <span className="material-symbols-outlined text-[14px] text-[#d9822b]">water_drop</span>
                <span>Balcones &amp; Hill Country Specialists</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Dual Primary Call to Actions */}
        <ScrollReveal direction="up" duration={1.3} delay={0.25}>
          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <button
              type="button"
              id="heroInstantQuoteBtn"
              onClick={() => onOpenQuoteScreen()}
              className="w-full sm:flex-1 flex items-center justify-center gap-2 bg-[#d9822b] hover:bg-[#c27222] text-white font-bold text-sm sm:text-base py-3.5 px-4 rounded-xl shadow-md transition-all duration-300 active:scale-[0.98] cta-glow-pulse min-h-[48px] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">request_quote</span>
              <span>Get Free Instant Quote</span>
            </button>
            <a
              id="heroCallDispatchBtn"
              href="tel:5127913398"
              className="w-full sm:flex-1 flex items-center justify-center gap-2 bg-[#163620] text-white font-bold text-sm sm:text-base py-3.5 px-4 rounded-xl shadow-sm hover:bg-[#234e31] transition-all duration-300 active:scale-[0.98] min-h-[48px]"
            >
              <span className="material-symbols-outlined text-[20px] text-[#d9822b]">phone_in_talk</span>
              <span>Call Dispatch: (512) 791-3398</span>
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* Trust Stats Strip with Animated Number Counters */}
      <section className="px-4 max-w-5xl mx-auto w-full">
        <ScrollReveal direction="up" duration={1.2}>
          <div
            id="stats-section"
            className="p-4 sm:p-5 bg-[var(--color-surface-low)] rounded-2xl border border-[var(--color-border)] shadow-xs"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <CounterCard
                value={24}
                suffix=" Yrs"
                label="Central TX Experience"
                sublabel="24 Years of Service"
                icon="history_edu"
                iconColor="text-[#d9822b]"
                duration={2200}
              />
              <CounterCard
                value={4.7}
                decimals={1}
                label="HomeAdvisor Rating"
                sublabel="99 Verified Reviews"
                icon="star"
                iconColor="text-[#d9822b]"
                duration={2000}
              />
              <CounterCard
                value={100}
                suffix="%"
                label="Zero Subcontractors"
                sublabel="Direct Javier Family Care"
                icon="shield_with_heart"
                iconColor="text-[#3e6843] dark:text-[#85d697]"
                duration={2200}
              />
              <CounterCard
                value={6}
                suffix=" Yr+"
                label="Client Retention"
                sublabel="Long-Term Regular Yards"
                icon="groups"
                iconColor="text-[#3e6843] dark:text-[#85d697]"
                duration={2400}
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Interactive City of Austin Watering Schedule Widget (Action out when scrolled there) */}
      <section className="px-4 max-w-5xl mx-auto w-full">
        <AustinWateringWidget />
      </section>

      {/* Core Services Section with ScrollReveal on each card */}
      <section className="px-4 max-w-5xl mx-auto w-full flex flex-col gap-6">
        <ScrollReveal direction="up" duration={1.3}>
          <div className="flex flex-col gap-1">
            <div className="inline-flex items-center gap-1 text-[#3e6843] dark:text-[#85d697] text-xs uppercase tracking-wider font-bold">
              <span className="material-symbols-outlined text-[16px]">yard</span>
              Horticultural &amp; Grounds Excellence
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--color-on-surface)] tracking-tight">
              Comprehensive Yard, Turf &amp; Stonework Services
            </h2>
            <p className="text-sm text-[var(--color-on-surface-variant)]">
              Tailored for Westlake Hills, Tarrytown, Lakeway, Barton Creek, and Austin commercial grounds.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid with Slower ScrollReveal Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES_LIST.map((service, index) => (
            <ScrollReveal
              key={service.id}
              direction="up"
              duration={1.25}
              delay={0.08 * (index % 3)}
              className="h-full"
            >
              <div className="h-full bg-[var(--color-surface-lowest)] p-4 sm:p-5 rounded-2xl shadow-xs border border-[var(--color-border)] flex flex-col justify-between gap-4 card-hover-fx overflow-hidden">
                <div className="flex flex-col gap-3">
                  {service.imageUrl && (
                    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-xs border border-[var(--color-border)]/50 group/img bg-[var(--color-surface-high)]">
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-106"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      <span className="absolute bottom-2 left-2 bg-[#163620]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-xs">
                        {service.highlightTag}
                      </span>
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-2">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-secondary-container)] flex items-center justify-center text-[#163620] dark:text-[#85d697] shrink-0">
                      <span className="material-symbols-outlined text-[22px]">{service.iconName}</span>
                    </div>
                    <span className="bg-[var(--color-surface-container)] px-2.5 py-1 rounded-full text-xs font-bold text-[#00200d] dark:text-[#85d697]">
                      {service.priceTag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[var(--color-on-surface)] mb-1.5 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[var(--color-on-surface-variant)] leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[var(--color-border)]/60">
                  <span className="text-xs font-bold text-[#3e6843] dark:text-[#85d697] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px]">check_circle</span>
                    {service.highlightTag}
                  </span>
                  <button
                    type="button"
                    onClick={() => onOpenServiceModal(service)}
                    className="text-xs text-[#d9822b] font-bold flex items-center gap-0.5 hover:underline group cursor-pointer"
                  >
                    View Details
                    <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Interactive Before & After Yard Transformation Slider (Action out when scrolled there) */}
      <section className="px-4 max-w-5xl mx-auto w-full">
        <BeforeAfterSlider />
      </section>

      {/* Central Texas Sod & Turf Variety Guide (Action out when scrolled there) */}
      <section className="px-4 max-w-5xl mx-auto w-full">
        <TexasGrassGuideWidget
          onSelectGrassForQuote={(grassName) => onOpenQuoteScreen(grassName)}
        />
      </section>

      {/* Austin 4-Season Care Cycle (Action out when scrolled there) */}
      <section className="px-4 max-w-5xl mx-auto w-full">
        <SeasonalRoadmapWidget
          onSelectSeasonalService={(seasonTitle) => onOpenQuoteScreen(seasonTitle)}
        />
      </section>

      {/* Visual Craft Gallery Strip */}
      <section className="px-4 max-w-5xl mx-auto w-full flex flex-col gap-3">
        <ScrollReveal direction="up" duration={1.3}>
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-[var(--color-on-surface)] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#3e6843] text-[18px]">photo_camera</span>
              Recent Austin Property Transformations
            </span>
            <span className="text-xs font-semibold text-[#3e6843] dark:text-[#85d697]">
              Westlake • Tarrytown • Lakeway
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PROJECT_GALLERY.map((project, idx) => (
            <ScrollReveal
              key={project.id}
              direction="up"
              duration={1.3}
              delay={idx * 0.1}
            >
              <div
                onClick={() => onOpenPhotoLightbox(project)}
                className="relative rounded-xl overflow-hidden shadow-xs h-48 sm:h-56 bg-[var(--color-surface-high)] group cursor-pointer border border-[var(--color-border)]"
              >
                <img
                  src={project.imageUrl}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-800 ease-out group-hover:scale-104"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00200d]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
                  <div className="bg-[#163620]/90 backdrop-blur-md px-2.5 py-1 rounded text-xs font-bold text-white shadow-xs">
                    {project.title}
                  </div>
                  <span className="text-[11px] text-white/90 font-medium">
                    {project.location}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Social Proof & Verified Austin Testimonials */}
      <section className="px-4 max-w-5xl mx-auto w-full">
        <ScrollReveal
          direction="up"
          duration={1.3}
          className="p-5 sm:p-6 bg-[var(--color-surface-low)] rounded-2xl border border-[var(--color-border)] flex flex-col gap-5"
        >
          <div className="flex flex-col gap-1">
            <div className="inline-flex items-center gap-1 text-[#d9822b] text-xs font-bold tracking-wider uppercase">
              <span
                className="material-symbols-outlined text-[16px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                stars
              </span>
              Verified Austin Homeowners
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#00200d] dark:text-[#85d697] tracking-tight">
              Reputation Built on Trust &amp; Sharp Edges
            </h2>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TESTIMONIALS.slice(0, 3).map((item, i) => (
              <ScrollReveal
                key={item.id}
                direction="up"
                duration={1.2}
                delay={i * 0.1}
                className="h-full"
              >
                <div className="h-full bg-[var(--color-surface-lowest)] p-5 rounded-xl shadow-xs border border-[var(--color-border)] flex flex-col justify-between gap-3 card-hover-fx">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex text-[#d9822b]">
                        {[...Array(5)].map((_, idx) => (
                          <span
                            key={idx}
                            className="material-symbols-outlined text-[18px]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            star
                          </span>
                        ))}
                      </div>
                      <span className="bg-[var(--color-surface-container)] px-2 py-0.5 rounded text-xs text-[#3e6843] dark:text-[#85d697] font-bold">
                        5.0 Star
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--color-on-surface)] italic leading-relaxed">
                      {item.quote}
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5 pt-2 border-t border-[var(--color-border)]/50">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${item.avatarBg}`}
                    >
                      {item.initials}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-[var(--color-on-surface)] leading-tight">
                        {item.name}
                      </span>
                      <span className="text-[11px] text-[var(--color-on-surface-variant)]">
                        {item.neighborhood}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Austin Track Record & Live Number Counters Section */}
      <section className="px-4 max-w-5xl mx-auto w-full">
        <ScrollReveal direction="up" duration={1.3}>
          <div className="bg-[var(--color-surface-low)] rounded-2xl p-5 sm:p-6 border border-[var(--color-border)] shadow-xs flex flex-col gap-5 color-border-animated">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[var(--color-border)]/70 pb-3">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[#3e6843] dark:text-[#85d697] text-xs font-bold uppercase tracking-wider mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#d9822b] color-pulse-beacon"></span>
                  Austin Track Record in Numbers
                </div>
                <h3 className="text-lg sm:text-2xl font-extrabold text-[var(--color-on-surface)] tracking-tight">
                  Central Texas Grounds Impact &amp; Milestones
                </h3>
              </div>
              <p className="text-xs text-[var(--color-on-surface-variant)] max-w-sm">
                Over two decades of measurable horticultural craftsmanship across Westlake, Tarrytown, Lakeway, and Barton Creek.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              <div className="bg-[var(--color-surface-lowest)] p-3.5 rounded-xl border border-[var(--color-border)] flex flex-col justify-between card-hover-fx text-center">
                <NumberCounter
                  to={1850}
                  suffix="+"
                  duration={2200}
                  className="text-2xl sm:text-3xl font-extrabold text-[#00200d] dark:text-[#85d697]"
                />
                <span className="text-xs font-bold text-[var(--color-on-surface)] mt-1">Acres Mowed</span>
                <span className="text-[10px] text-[var(--color-on-surface-variant)]">Precision rotary cut</span>
              </div>

              <div className="bg-[var(--color-surface-lowest)] p-3.5 rounded-xl border border-[var(--color-border)] flex flex-col justify-between card-hover-fx text-center">
                <NumberCounter
                  to={45000}
                  suffix="+"
                  duration={2400}
                  className="text-2xl sm:text-3xl font-extrabold text-[#d9822b]"
                />
                <span className="text-xs font-bold text-[var(--color-on-surface)] mt-1">Yds Cedar Mulch</span>
                <span className="text-[10px] text-[var(--color-on-surface-variant)]">Native weed barrier</span>
              </div>

              <div className="bg-[var(--color-surface-lowest)] p-3.5 rounded-xl border border-[var(--color-border)] flex flex-col justify-between card-hover-fx text-center">
                <NumberCounter
                  to={3400}
                  suffix="+"
                  duration={2100}
                  className="text-2xl sm:text-3xl font-extrabold text-[#00200d] dark:text-[#85d697]"
                />
                <span className="text-xs font-bold text-[var(--color-on-surface)] mt-1">Trees Pruned</span>
                <span className="text-[10px] text-[var(--color-on-surface-variant)]">Live Oak &amp; storms</span>
              </div>

              <div className="bg-[var(--color-surface-lowest)] p-3.5 rounded-xl border border-[var(--color-border)] flex flex-col justify-between card-hover-fx text-center">
                <NumberCounter
                  to={12800}
                  suffix="+"
                  duration={2300}
                  className="text-2xl sm:text-3xl font-extrabold text-[#d9822b]"
                />
                <span className="text-xs font-bold text-[var(--color-on-surface)] mt-1">Ft. Limestone</span>
                <span className="text-[10px] text-[var(--color-on-surface-variant)]">Hill Country walls</span>
              </div>

              <div className="bg-[var(--color-surface-lowest)] p-3.5 rounded-xl border border-[var(--color-border)] flex flex-col justify-between card-hover-fx text-center">
                <NumberCounter
                  to={100}
                  suffix="%"
                  duration={2000}
                  className="text-2xl sm:text-3xl font-extrabold text-[#3e6843] dark:text-[#85d697]"
                />
                <span className="text-xs font-bold text-[var(--color-on-surface)] mt-1">Zero Debris</span>
                <span className="text-[10px] text-[var(--color-on-surface-variant)]">Blow-off clean</span>
              </div>

              <div className="bg-[var(--color-surface-lowest)] p-3.5 rounded-xl border border-[var(--color-border)] flex flex-col justify-between card-hover-fx text-center">
                <NumberCounter
                  to={520}
                  suffix="+"
                  duration={2200}
                  className="text-2xl sm:text-3xl font-extrabold text-[#00200d] dark:text-[#85d697]"
                />
                <span className="text-xs font-bold text-[var(--color-on-surface)] mt-1">Austin Lawns</span>
                <span className="text-[10px] text-[var(--color-on-surface-variant)]">Active routes</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Quick Estimate & Free Quote Form (Action out when scrolled there) */}
      <section className="px-4 max-w-5xl mx-auto w-full scroll-mt-20" id="quote-section">
        <ScrollReveal
          direction="up"
          duration={1.3}
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-1">
            <div className="inline-flex items-center gap-1 text-[#d9822b] text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">bolt</span>
              Instant Fast Response
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--color-on-surface)] tracking-tight">
              Request Your Free Austin Property Inspection
            </h2>
            <p className="text-sm text-[var(--color-on-surface-variant)]">
              No sales loops. Javier personally visits your property and calculates precise yard dimensions.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-[var(--color-surface-lowest)] p-5 sm:p-6 rounded-2xl shadow-sm border border-[var(--color-border)] flex flex-col gap-4">
            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4" id="estimateForm">
                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-[var(--color-on-surface)]" htmlFor="fullName">
                    Your Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g., Sarah Jenkins"
                    className="w-full bg-[var(--color-surface-low)] px-3.5 py-3 rounded-xl text-sm text-[var(--color-on-surface)] placeholder:text-[var(--color-on-surface-variant)]/60 focus:outline-none focus:ring-2 focus:ring-[#163620] border border-[var(--color-border)] transition-all"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-[var(--color-on-surface)]" htmlFor="phoneNumber">
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(512) 555-0199"
                    className="w-full bg-[var(--color-surface-low)] px-3.5 py-3 rounded-xl text-sm text-[var(--color-on-surface)] placeholder:text-[var(--color-on-surface-variant)]/60 focus:outline-none focus:ring-2 focus:ring-[#163620] border border-[var(--color-border)] transition-all"
                  />
                </div>

                {/* Neighborhood / Zip */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-[var(--color-on-surface)]" htmlFor="neighborhood">
                    Austin Zip Code or Neighborhood
                  </label>
                  <input
                    id="neighborhood"
                    type="text"
                    required
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    placeholder="e.g., 78746 / Westlake Hills"
                    className="w-full bg-[var(--color-surface-low)] px-3.5 py-3 rounded-xl text-sm text-[var(--color-on-surface)] placeholder:text-[var(--color-on-surface-variant)]/60 focus:outline-none focus:ring-2 focus:ring-[#163620] border border-[var(--color-border)] transition-all"
                  />
                </div>

                {/* Primary Service */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-[var(--color-on-surface)]" htmlFor="serviceType">
                    Primary Service Needed
                  </label>
                  <div className="relative">
                    <select
                      id="serviceType"
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full bg-[var(--color-surface-low)] px-3.5 py-3 pr-10 rounded-xl text-sm text-[var(--color-on-surface)] focus:outline-none focus:ring-2 focus:ring-[#163620] border border-[var(--color-border)] appearance-none cursor-pointer"
                    >
                      <option value="routine-mowing">Regular Lawn Mowing &amp; Edging</option>
                      <option value="sod-install">Palisades Zoysia / Sod Installation</option>
                      <option value="masonry">Austin Limestone Masonry &amp; Hardscaping</option>
                      <option value="flower-beds">Flower Bed Cedar Mulch &amp; Xeriscaping</option>
                      <option value="tree-care">Tree Trimming &amp; Storm Branch Removal</option>
                      <option value="seasonal-cleanup">Seasonal Cleanup &amp; Core Aeration</option>
                      <option value="commercial">Commercial Grounds Maintenance</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-3.5 pointer-events-none text-[var(--color-on-surface-variant)] text-[20px]">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Frequency Chips */}
                <div className="flex flex-col gap-1.5 pt-1">
                  <span className="text-xs font-bold text-[var(--color-on-surface)]">
                    Estimated Frequency
                  </span>
                  <div className="flex gap-2">
                    {(['Weekly', 'Bi-Weekly', 'One-Time'] as ServiceFrequency[]).map((freq) => {
                      const isSelected = selectedFreq === freq;
                      return (
                        <button
                          key={freq}
                          type="button"
                          onClick={() => setSelectedFreq(freq)}
                          className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                            isSelected
                              ? 'bg-[#163620] text-white shadow-xs'
                              : 'bg-[var(--color-surface-container)] text-[var(--color-on-surface)] hover:bg-[var(--color-surface-high)]'
                          }`}
                        >
                          {freq}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  id="submitFreeEstimateBtn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 bg-[#d9822b] hover:bg-[#c27222] text-white font-bold text-sm sm:text-base py-3.5 px-4 rounded-xl shadow-md transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined text-[20px] animate-spin">sync</span>
                      <span>Sending Details...</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[20px]">send</span>
                      <span>Request My Free Estimate</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="bg-[var(--color-secondary-container)] text-[#00200d] dark:text-white p-5 rounded-xl flex items-start gap-3 transition-opacity duration-500">
                <span className="material-symbols-outlined text-[26px] text-emerald-800 dark:text-emerald-300 shrink-0 mt-0.5">
                  task_alt
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold">Thank you, {fullName || 'Austin Neighbor'}! Request Received.</span>
                  <span className="text-xs leading-relaxed text-emerald-900 dark:text-emerald-200">
                    Javier or his lead crew dispatcher will review your property details for {neighborhood || 'Austin'} and call you back promptly.
                  </span>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-bold text-emerald-950 dark:text-white underline mt-2 text-left"
                  >
                    Submit another property request
                  </button>
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </section>

      {/* Business Hours, Dispatch & Austin Coverage Details */}
      <section className="px-4 max-w-5xl mx-auto w-full">
        <ScrollReveal
          direction="up"
          duration={1.3}
          className="bg-[var(--color-surface-lowest)] p-5 sm:p-6 rounded-2xl shadow-xs border border-[var(--color-border)] flex flex-col gap-4"
        >
          {/* Direct Dispatch Header */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#163620] text-[#d9822b] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[22px]">storefront</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-[var(--color-on-surface)] leading-tight">
                Local Austin Operations &amp; Dispatch
              </h3>
              <p className="text-xs text-[var(--color-on-surface-variant)]">
                Directly Serving Greater Austin &amp; Central Texas
              </p>
            </div>
          </div>

          {/* Schedule & Working Hours */}
          <div className="bg-[var(--color-surface-low)] p-4 rounded-xl flex flex-col gap-2 border border-[var(--color-border)]/50">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[var(--color-on-surface)] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-[#3e6843]">schedule</span>
                Working Hours
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-[var(--color-secondary-container)] text-[#163620] dark:text-[#85d697] font-bold">
                Dispatched Daily
              </span>
            </div>
            <div className="text-xs text-[var(--color-on-surface-variant)] flex flex-col gap-1 pt-1">
              <div className="flex justify-between">
                <span className="font-medium">Monday – Saturday:</span>
                <span className="text-[var(--color-on-surface)] font-bold">7:00 AM – 6:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Sunday:</span>
                <span className="text-amber-700 dark:text-amber-400 font-bold">Closed (Family Day)</span>
              </div>
            </div>
          </div>

          {/* Direct Phone & Dispatch Link */}
          <div className="flex items-center justify-between p-4 bg-[var(--color-surface-container)] rounded-xl card-hover-fx">
            <div className="flex flex-col">
              <span className="text-xs text-[var(--color-on-surface-variant)] font-medium">Direct Dispatch Line</span>
              <a
                href="tel:5127913398"
                className="text-base sm:text-lg text-[#00200d] dark:text-[#85d697] font-extrabold hover:underline"
              >
                (512) 791-3398
              </a>
            </div>
            <a
              href="tel:5127913398"
              className="w-10 h-10 rounded-full bg-[#163620] text-white flex items-center justify-center hover:bg-[#234e31] transition-colors duration-200 shadow-sm"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
            </a>
          </div>

          {/* Service Coverage Pills */}
          <div className="flex flex-col gap-2 pt-1">
            <span className="text-xs font-bold text-[var(--color-on-surface)] flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-[#3e6843]">pin_drop</span>
              Active Route Coverage:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                'West Lake Hills',
                'Tarrytown',
                'Lakeway',
                'Barton Creek',
                'Rollingwood',
                'Central Austin',
                'Round Rock',
                'Cedar Park',
                'Circle C Ranch',
                'Del Valle',
                'Buda',
                'Kyle',
              ].map((town) => (
                <span
                  key={town}
                  className="bg-[var(--color-surface-low)] text-[var(--color-on-surface)] text-xs font-medium px-2.5 py-1 rounded-lg border border-[var(--color-border)]/60"
                >
                  {town}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-[var(--footer-bg)] border-t border-[var(--color-border)] px-4 py-8">
        <div className="max-w-5xl mx-auto flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-1 bg-[var(--color-surface-lowest)] border border-[var(--color-border)] px-3 py-1 rounded-full text-[#3e6843] dark:text-[#85d697] text-xs font-bold">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>Austin Licensed &amp; Insured</span>
            </div>
            <div className="inline-flex items-center gap-1 bg-[var(--color-surface-lowest)] border border-[var(--color-border)] px-3 py-1 rounded-full text-[#3e6843] dark:text-[#85d697] text-xs font-bold">
              <span className="material-symbols-outlined text-[16px]">shield</span>
              <span>Commercial General Liability</span>
            </div>
            <div className="inline-flex items-center gap-1 bg-[var(--color-surface-lowest)] border border-[var(--color-border)] px-3 py-1 rounded-full text-[#3e6843] dark:text-[#85d697] text-xs font-bold">
              <span className="material-symbols-outlined text-[16px]">eco</span>
              <span>Zero Debris Left Behind</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-on-surface)] mb-1">
              Service Areas (Central Texas)
            </h4>
            <p className="text-xs text-[var(--color-on-surface-variant)] leading-relaxed">
              Westlake • Tarrytown • Lakeway • Barton Creek • Round Rock • South Congress • Cedar Park • Del Valle
            </p>
          </div>

          <div className="pt-1 border-t border-[var(--color-border)]/60">
            <p className="text-xs text-[var(--color-on-surface-variant)]">
              Direct Dispatch:{' '}
              <a href="tel:5127913398" className="font-bold text-[#163620] dark:text-[#85d697] underline">
                (512) 791-3398
              </a>
            </p>
            <p className="text-[11px] text-[var(--color-on-surface-variant)]/80 mt-1">
              © Javier's Landscaping &amp; Lawn Care. Serving Austin, Texas. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
