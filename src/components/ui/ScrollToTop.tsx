import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutElement = document.getElementById('about');
      if (aboutElement) {
        const rect = aboutElement.getBoundingClientRect();
        // Show button once the top of the About section reaches near top of viewport or scrollY > 400
        if (rect.top <= window.innerHeight * 0.75 || window.scrollY > 400) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 600,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={scrollToTop}
          aria-label="Scroll to Top"
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[var(--color-bg-glass)] border border-[var(--color-brand)]/80 text-[var(--color-brand)] hover:bg-[var(--color-brand)] hover:text-[var(--color-bg)] shadow-[0_0_15px_var(--color-brand-glow)] backdrop-blur-md transition-all duration-300 hover:scale-110 cursor-pointer outline-none flex items-center justify-center group"
        >
          <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop;
