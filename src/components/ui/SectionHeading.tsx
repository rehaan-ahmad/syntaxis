import clsx from 'clsx';

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export function SectionHeading({ title, subtitle, className, align = 'center' }: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "flex flex-col mb-12 select-none",
        align === 'center' && "items-center text-center",
        align === 'left' && "items-start text-left",
        align === 'right' && "items-end text-right",
        className
      )}
    >
      {subtitle && (
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-text-sec)] mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wider text-[var(--color-text-pri)] font-heading relative pb-4">
        {title}
        <span 
          className={clsx(
            "absolute bottom-0 w-16 h-[3px] bg-[var(--color-brand)] rounded-full",
            align === 'center' && "left-1/2 -translate-x-1/2",
            align === 'left' && "left-0",
            align === 'right' && "right-0"
          )}
        />
      </h2>
    </div>
  );
}

export default SectionHeading;
