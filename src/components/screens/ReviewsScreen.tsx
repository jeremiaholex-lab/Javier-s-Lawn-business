import React, { useState } from 'react';
import { TESTIMONIALS } from '../../data/landscapingData';
import { Testimonial } from '../../types';
import { ScrollReveal } from '../ScrollReveal';
import { NumberCounter } from '../NumberCounter';

export const ReviewsScreen: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Testimonial[]>(TESTIMONIALS);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('All');
  const [showReviewModal, setShowReviewModal] = useState(false);

  // New review form states
  const [reviewerName, setReviewerName] = useState('');
  const [reviewerNeighborhood, setReviewerNeighborhood] = useState('Westlake Hills, Austin');
  const [reviewerRating, setReviewerRating] = useState(5);
  const [reviewerQuote, setReviewerQuote] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const neighborhoods = ['All', 'Westlake Hills', 'Tarrytown', 'Lakeway', 'Barton Creek', 'Commercial'];

  const filteredReviews = selectedNeighborhood === 'All'
    ? reviewsList
    : reviewsList.filter((r) => r.neighborhood.toLowerCase().includes(selectedNeighborhood.toLowerCase()));

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewerName || !reviewerQuote) return;

    const initials = reviewerName
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);

    const newRev: Testimonial = {
      id: Date.now().toString(),
      name: reviewerName,
      initials: initials || 'HN',
      neighborhood: reviewerNeighborhood,
      rating: reviewerRating,
      quote: `“${reviewerQuote}”`,
      avatarBg: 'bg-emerald-700 text-white',
      date: 'Just now',
      serviceUsed: 'Verified Austin Service',
    };

    setReviewsList([newRev, ...reviewsList]);
    setReviewSubmitted(true);
    setTimeout(() => {
      setShowReviewModal(false);
      setReviewSubmitted(false);
      setReviewerName('');
      setReviewerQuote('');
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full px-4 max-w-5xl mx-auto py-4 gap-6">
      {/* Header & Rating Summary */}
      <ScrollReveal direction="down" duration={1.2}>
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-1.5 text-[#d9822b] text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              grade
            </span>
            Verified Central Texas Client Reviews
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#00200d] dark:text-[#85d697] tracking-tight">
                Reputation Built on Trust
              </h1>
              <p className="text-xs sm:text-sm text-[var(--color-on-surface-variant)]">
                Real homeowners and estate managers sharing their experience with Javier's crew.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowReviewModal(true)}
              className="w-fit py-2.5 px-4 rounded-xl bg-[#d9822b] hover:bg-[#c27222] text-white font-bold text-xs shadow-md transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">rate_review</span>
              Leave a Review
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* Aggregate Score Card */}
      <ScrollReveal direction="up" duration={1.3} delay={0.1}>
        <div className="bg-[var(--color-surface-lowest)] rounded-2xl p-5 sm:p-6 border border-[var(--color-border)] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 color-border-animated">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-baseline gap-2">
              <NumberCounter
                to={4.7}
                decimals={1}
                duration={1800}
                className="text-4xl sm:text-5xl font-extrabold text-[#00200d] dark:text-[#85d697]"
              />
              <span className="text-sm text-[var(--color-on-surface-variant)] font-semibold">/ 5.0</span>
            </div>
            <div className="flex text-[#d9822b] my-1">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-[20px]"
                  style={i < 4 ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                  {i < 4 ? 'star' : 'star_half'}
                </span>
              ))}
            </div>
            <span className="text-xs text-[var(--color-on-surface-variant)] font-medium inline-flex items-center gap-1">
              Based on{' '}
              <strong className="text-[var(--color-on-surface)]">
                <NumberCounter to={99} duration={2000} />
              </strong>{' '}
              verified HomeAdvisor client reviews
            </span>
            <div className="flex items-center gap-2 mt-2 pt-2 border-t border-[var(--color-border)]/60 text-[11px] font-semibold text-[var(--color-on-surface-variant)]">
              <span className="inline-flex items-center gap-1 text-[#3e6843] dark:text-[#85d697]">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                HomeAdvisor Top Rated
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 text-[#d9822b]">
                <span className="material-symbols-outlined text-[14px]">thumb_up</span>
                Thumbtack Pro
              </span>
            </div>
          </div>

          {/* Rating Category Meters */}
          <div className="w-full sm:w-1/2 flex flex-col gap-2">
            {[
              { label: 'Work Quality & Cleanliness', val: 4.8, width: '96%' },
              { label: 'Responsiveness & Communication', val: 4.8, width: '96%' },
              { label: 'Punctuality & Reliability', val: 4.7, width: '94%' },
              { label: 'Fair Pricing & Value', val: 4.9, width: '98%' },
            ].map((cat, i) => (
              <div key={i} className="flex flex-col gap-0.5">
                <div className="flex justify-between text-[11px] font-semibold text-[var(--color-on-surface)]">
                  <span>{cat.label}</span>
                  <span className="text-[#3e6843] dark:text-[#85d697] font-bold">
                    <NumberCounter to={cat.val} decimals={1} duration={1600 + i * 200} />
                  </span>
                </div>
                <div className="w-full h-1.5 bg-[var(--color-surface-container)] rounded-full overflow-hidden">
                  <div className="h-full bg-[#163620] dark:bg-[#85d697] rounded-full transition-all duration-1000" style={{ width: cat.width }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Trust & Satisfaction Number Counters Strip */}
      <ScrollReveal direction="up" duration={1.2}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-[var(--color-surface-low)] p-3 rounded-xl border border-[var(--color-border)] flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[var(--color-surface-lowest)] flex items-center justify-center text-[#3e6843] dark:text-[#85d697] shrink-0">
              <span className="material-symbols-outlined text-[20px]">cleaning_services</span>
            </div>
            <div>
              <div className="text-base font-extrabold text-[var(--color-on-surface)] leading-tight">
                <NumberCounter to={100} suffix="%" duration={1800} /> Zero Debris
              </div>
              <p className="text-[11px] text-[var(--color-on-surface-variant)]">Driveways &amp; patios blown clean</p>
            </div>
          </div>

          <div className="bg-[var(--color-surface-low)] p-3 rounded-xl border border-[var(--color-border)] flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[var(--color-surface-lowest)] flex items-center justify-center text-[#d9822b] shrink-0">
              <span className="material-symbols-outlined text-[20px]">schedule</span>
            </div>
            <div>
              <div className="text-base font-extrabold text-[var(--color-on-surface)] leading-tight">
                <NumberCounter to={99.4} decimals={1} suffix="%" duration={2000} /> On-Time Rate
              </div>
              <p className="text-[11px] text-[var(--color-on-surface-variant)]">Reliable weekly route scheduling</p>
            </div>
          </div>

          <div className="bg-[var(--color-surface-low)] p-3 rounded-xl border border-[var(--color-border)] flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[var(--color-surface-lowest)] flex items-center justify-center text-[#163620] dark:text-[#85d697] shrink-0">
              <span className="material-symbols-outlined text-[20px]">groups</span>
            </div>
            <div>
              <div className="text-base font-extrabold text-[var(--color-on-surface)] leading-tight">
                <NumberCounter to={520} suffix="+" duration={2200} /> Active Lawns
              </div>
              <p className="text-[11px] text-[var(--color-on-surface-variant)]">Long-term Central Texas neighbors</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Neighborhood Filters */}
      <ScrollReveal direction="up" duration={1.2}>
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold text-[var(--color-on-surface)]">
            Filter by Neighborhood:
          </span>
          <div className="flex flex-wrap gap-2">
            {neighborhoods.map((hood) => {
              const isSelected = selectedNeighborhood === hood;
              return (
                <button
                  key={hood}
                  type="button"
                  onClick={() => setSelectedNeighborhood(hood)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#163620] text-white shadow-xs'
                      : 'bg-[var(--color-surface-lowest)] text-[var(--color-on-surface)] border border-[var(--color-border)] hover:bg-[var(--color-surface-low)]'
                  }`}
                >
                  {hood}
                </button>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      {/* Reviews Cards List with Slower ScrollReveal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredReviews.map((rev, idx) => (
          <ScrollReveal
            key={rev.id}
            direction="up"
            duration={1.25}
            delay={0.08 * (idx % 2)}
          >
            <div className="h-full bg-[var(--color-surface-lowest)] p-5 rounded-2xl shadow-xs border border-[var(--color-border)] flex flex-col justify-between gap-3 card-hover-fx">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex text-[#d9822b]">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[17px]"
                        style={i < Math.floor(rev.rating) ? { fontVariationSettings: "'FILL' 1" } : undefined}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  {rev.date && (
                    <span className="text-[11px] text-[var(--color-on-surface-variant)]">{rev.date}</span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-[var(--color-on-surface)] italic leading-relaxed">
                  {rev.quote}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[var(--color-border)]/50">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${rev.avatarBg}`}
                  >
                    {rev.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[var(--color-on-surface)]">{rev.name}</span>
                    <span className="text-[11px] text-[var(--color-on-surface-variant)]">{rev.neighborhood}</span>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-bold text-[#3e6843] dark:text-[#85d697] bg-[var(--color-secondary-container)] px-2 py-0.5 rounded">
                  Verified
                </span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Leave Review Modal */}
      {showReviewModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setShowReviewModal(false)}
        >
          <div
            className="w-full max-w-md bg-[var(--color-surface-lowest)] rounded-2xl p-5 sm:p-6 shadow-2xl border border-[var(--color-border)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border)]">
              <h3 className="text-base font-bold text-[var(--color-on-surface)]">
                Share Your Yard Feedback
              </h3>
              <button
                type="button"
                onClick={() => setShowReviewModal(false)}
                className="w-7 h-7 rounded-full bg-[var(--color-surface-low)] text-[var(--color-on-surface-variant)] flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            {!reviewSubmitted ? (
              <form onSubmit={handleAddReview} className="flex flex-col gap-3 py-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[var(--color-on-surface)]">
                    Rating (Stars)
                  </label>
                  <div className="flex gap-1 text-[#d9822b]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setReviewerRating(star)}
                        className="cursor-pointer hover:scale-110 transition-transform"
                      >
                        <span
                          className="material-symbols-outlined text-[26px]"
                          style={star <= reviewerRating ? { fontVariationSettings: "'FILL' 1" } : undefined}
                        >
                          star
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[var(--color-on-surface)]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={reviewerName}
                    onChange={(e) => setReviewerName(e.target.value)}
                    placeholder="e.g., Jennifer Hayes"
                    className="bg-[var(--color-surface-low)] px-3 py-2 rounded-xl text-xs sm:text-sm text-[var(--color-on-surface)] border border-[var(--color-border)]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[var(--color-on-surface)]">
                    Neighborhood / Area
                  </label>
                  <select
                    value={reviewerNeighborhood}
                    onChange={(e) => setReviewerNeighborhood(e.target.value)}
                    className="bg-[var(--color-surface-low)] px-3 py-2 rounded-xl text-xs sm:text-sm text-[var(--color-on-surface)] border border-[var(--color-border)]"
                  >
                    <option value="Westlake Hills, Austin">Westlake Hills</option>
                    <option value="Tarrytown, Austin">Tarrytown</option>
                    <option value="Lakeway, Austin">Lakeway</option>
                    <option value="Barton Creek, Austin">Barton Creek</option>
                    <option value="Circle C Ranch, Austin">Circle C Ranch</option>
                    <option value="Round Rock, TX">Round Rock</option>
                    <option value="Central Austin, TX">Central Austin</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[var(--color-on-surface)]">
                    Review Details
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={reviewerQuote}
                    onChange={(e) => setReviewerQuote(e.target.value)}
                    placeholder="How was the punctuality, edging, sod, or cleanup?"
                    className="bg-[var(--color-surface-low)] px-3 py-2 rounded-xl text-xs sm:text-sm text-[var(--color-on-surface)] border border-[var(--color-border)]"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 py-3 px-4 rounded-xl bg-[#d9822b] hover:bg-[#c27222] text-white font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  Post Feedback
                </button>
              </form>
            ) : (
              <div className="p-4 bg-[var(--color-secondary-container)] text-[#163620] dark:text-white rounded-xl flex items-center gap-2">
                <span className="material-symbols-outlined text-[24px]">task_alt</span>
                <span className="text-xs font-bold">
                  Thank you! Your verified review has been published.
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
