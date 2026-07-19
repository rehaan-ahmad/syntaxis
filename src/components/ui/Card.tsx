import React from 'react';
import clsx from 'clsx';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        "glass-panel p-6 sm:p-8 flex flex-col",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
