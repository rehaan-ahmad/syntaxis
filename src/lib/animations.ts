import type { Variants } from 'framer-motion';

export const fadeUpVariants: Variants = {
  initial: {
    opacity: 0,
    y: 30
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const staggerContainerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
