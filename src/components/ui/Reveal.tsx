import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { fadeUpVariants } from '../../lib/animations';
import type { ReactNode } from 'react';

interface RevealProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  variants?: any;
  viewport?: {
    once?: boolean;
    amount?: 'some' | 'all' | number;
    margin?: string;
  };
}

export default function Reveal({
  children,
  variants = fadeUpVariants,
  viewport = { once: true, margin: "-100px" },
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={viewport}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
}
