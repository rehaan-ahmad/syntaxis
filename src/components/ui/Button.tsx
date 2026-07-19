import React from 'react';
import clsx from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        "font-semibold px-8 py-3 rounded-[var(--radius-md)] transition-all duration-200 cursor-pointer select-none outline-none",
        variant === 'primary' && "bg-[var(--color-brand)] text-[var(--color-bg)] hover:scale-105 hover:shadow-[0_0_20px_var(--color-brand-glow)]",
        variant === 'secondary' && "border border-[var(--color-accent)] text-[var(--color-text-pri)] hover:bg-[var(--color-accent)] hover:text-white",
        variant === 'ghost' && "text-[var(--color-brand)] underline-offset-4 hover:underline px-0 py-0 rounded-none bg-transparent",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
