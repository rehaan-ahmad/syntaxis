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
      <div className="text-center font-semibold text-[var(--color-brand)] text-2xl tracking-wider py-4 font-heading">
        SYNTAXIS 2026 HAS BEGUN!
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
