import React, { useEffect, useRef, useState } from 'react';

export interface NumberCounterProps {
  to: number;
  from?: number;
  duration?: number;
  delay?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
  className?: string;
}

export const NumberCounter: React.FC<NumberCounterProps> = ({
  to,
  from = 0,
  duration = 2000,
  delay = 0,
  decimals = 0,
  prefix = '',
  suffix = '',
  separator = ',',
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState<string>(() => {
    return formatNumber(from, decimals, separator);
  });
  const counterRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef<boolean>(false);

  function formatNumber(val: number, dec: number, sep: string): string {
    const fixed = val.toFixed(dec);
    if (!sep) return fixed;
    const parts = fixed.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, sep);
    return parts.join('.');
  }

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            const timer = setTimeout(() => {
              const startTime = performance.now();

              const frame = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Smooth quintic ease-out curve
                const easeOut = 1 - Math.pow(1 - progress, 5);
                const currentNumber = from + (to - from) * easeOut;

                setDisplayValue(formatNumber(currentNumber, decimals, separator));

                if (progress < 1) {
                  requestAnimationFrame(frame);
                } else {
                  setDisplayValue(formatNumber(to, decimals, separator));
                }
              };

              requestAnimationFrame(frame);
            }, delay);

            return () => clearTimeout(timer);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [to, from, duration, delay, decimals, separator]);

  return (
    <span ref={counterRef} className={`tabular-nums inline-block ${className}`}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};

export interface CounterCardProps {
  value: number;
  from?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel?: string;
  icon?: string;
  iconColor?: string;
  duration?: number;
  delay?: number;
  className?: string;
}

export const CounterCard: React.FC<CounterCardProps> = ({
  value,
  from = 0,
  decimals = 0,
  prefix = '',
  suffix = '',
  label,
  sublabel,
  icon,
  iconColor = 'text-[#d9822b]',
  duration = 2200,
  delay = 0,
  className = '',
}) => {
  return (
    <div
      className={`bg-[var(--color-surface-lowest)] p-4 rounded-xl shadow-xs flex flex-col justify-between card-hover-fx border border-[var(--color-border)]/60 ${className}`}
    >
      <div className="flex items-center justify-between gap-1 mb-1">
        <NumberCounter
          to={value}
          from={from}
          decimals={decimals}
          prefix={prefix}
          suffix={suffix}
          duration={duration}
          delay={delay}
          className="text-2xl sm:text-3xl text-[#00200d] dark:text-[#85d697] font-extrabold leading-none tracking-tight"
        />
        {icon && (
          <span
            className={`material-symbols-outlined text-[22px] ${iconColor}`}
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            {icon}
          </span>
        )}
      </div>
      <div>
        <p className="text-xs font-bold text-[var(--color-on-surface)] leading-snug">
          {label}
        </p>
        {sublabel && (
          <p className="text-[11px] text-[var(--color-on-surface-variant)] leading-tight mt-0.5">
            {sublabel}
          </p>
        )}
      </div>
    </div>
  );
};
