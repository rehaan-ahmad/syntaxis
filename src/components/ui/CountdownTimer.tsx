import React from 'react';
import { useCountdown } from '../../hooks/useCountdown';

export function CountdownTimer() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown();

  const pad = (num: number) => String(num).padStart(2, '0');

  const items = [
    { value: pad(days), label: 'DAYS' },
    { value: pad(hours), label: 'HOURS' },
    { value: pad(minutes), label: 'MINUTES' },
    { value: pad(seconds), label: 'SECONDS' },
  ];

  if (isExpired) {
    return (
      <div className="flex flex-col items-center gap-1 py-4 select-none">
        <span className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-widest text-[var(--color-brand)] drop-shadow-[0_0_20px_var(--color-brand-glow)] uppercase text-center">
          Syntaxis 2026
        </span>
        <span className="text-lg sm:text-2xl md:text-3xl font-bold font-heading tracking-[0.3em] text-[var(--color-text-pri)] uppercase text-center">
          Has Ended!
        </span>
        <span className="text-xs font-mono text-[var(--color-text-sec)] tracking-widest mt-1 uppercase">
          Thank you to all participants &amp; attendees
        </span>
      </div>
    );
  }

  return (
    <div className="flex gap-3 sm:gap-6 justify-center items-center select-none font-mono py-2">
      {items.map((item, index) => (
        <React.Fragment key={item.label}>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-5xl md:text-6xl font-black text-[var(--color-brand)] tracking-tight drop-shadow-[0_0_15px_var(--color-brand-glow)]">
              {item.value}
            </span>
            <span className="text-[9px] sm:text-xs font-bold text-[var(--color-text-sec)] tracking-widest mt-1">
              {item.label}
            </span>
          </div>
          {index < items.length - 1 && (
            <span className="text-2xl sm:text-4xl text-[var(--color-accent)] font-light self-start mt-1 sm:mt-2">
              :
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default CountdownTimer;
