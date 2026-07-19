import React from 'react';
import clsx from 'clsx';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'brand' | 'accent' | 'sec';
  children: React.ReactNode;
}

export function Badge({ variant = 'brand', children, className, ...props }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center px-2.5 py-0.5 rounded-[var(--radius-pill)] text-[10px] font-bold tracking-wider uppercase select-none border",
        variant === 'brand' && "bg-[var(--color-brand)]/15 text-[var(--color-brand)] border-[var(--color-brand)]/30",
        variant === 'accent' && "bg-[var(--color-accent)]/15 text-[var(--color-text-pri)] border-[var(--color-accent)]/30",
        variant === 'sec' && "bg-[var(--color-text-sec)]/15 text-[var(--color-text-sec)] border-[var(--color-text-sec)]/30",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;
