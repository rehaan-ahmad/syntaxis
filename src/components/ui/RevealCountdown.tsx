import React from 'react';
import { useCountdown } from '../../hooks/useCountdown';

interface RevealCountdownProps {
  targetDate: number;
  label: string;
  children?: React.ReactNode;
  revealText?: string;
}

export function RevealCountdown({ targetDate, label, children, revealText = "Revealing on August 15, 2026" }: RevealCountdownProps) {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(targetDate);

  const pad = (num: number) => String(num).padStart(2, '0');

  if (isExpired) return <>{children}</>;

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-12 border border-[var(--color-border)] bg-[var(--color-bg-glass)] rounded-[var(--radius-lg)] backdrop-blur-sm max-w-2xl mx-auto">
      <h3 className="text-xl font-bold font-heading text-[var(--color-brand)] tracking-widest uppercase">
        {label}
      </h3>
      <div className="flex gap-4 sm:gap-8 justify-center items-center select-none font-mono">
        {[
          { value: pad(days), label: 'DAYS' },
          { value: pad(hours), label: 'HOURS' },
          { value: pad(minutes), label: 'MINS' },
          { value: pad(seconds), label: 'SECS' },
        ].map((item, index) => (
          <React.Fragment key={item.label}>
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-5xl font-black text-[var(--color-text-pri)] tracking-tight">
                {item.value}
              </span>
              <span className="text-[9px] font-bold text-[var(--color-text-sec)] tracking-widest mt-1">
                {item.label}
              </span>
            </div>
            {index < 3 && (
              <span className="text-xl text-[var(--color-accent)] font-light self-start mt-1">
                :
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
      <p className="text-xs text-[var(--color-text-body)] italic opacity-70">
        {revealText}
      </p>
    </div>
  );
}

export default RevealCountdown;
