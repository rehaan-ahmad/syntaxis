import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import RevealCountdown from './RevealCountdown';
import { EXTERNAL_LINKS } from '../../lib/constants';
import { useCountdown } from '../../hooks/useCountdown';

export function PragmaModal() {
  const [isOpen, setIsOpen] = useState(false);
  const revealDate = new Date('2026-08-10T00:00:00+05:30').getTime();
  const { isExpired } = useCountdown(revealDate);

  useEffect(() => {
    const handleOpen = (e: Event) => {
      e.preventDefault();
      setIsOpen(true);
    };

    window.addEventListener('openPragmaModal', handleOpen);
    return () => window.removeEventListener('openPragmaModal', handleOpen);
  }, []);

  // Also intercept clicks on Pragma links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link && link.getAttribute('href') === EXTERNAL_LINKS.pragma) {
        if (!isExpired) {
          e.preventDefault();
          setIsOpen(true);
        }
      }
    };
    
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isExpired]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-lg)] shadow-2xl p-6 sm:p-10 flex flex-col items-center text-center overflow-hidden z-[101]"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-[var(--color-bg-glass)] text-[var(--color-text-sec)] hover:text-[var(--color-text-pri)] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-brand)] to-transparent opacity-50" />

              <h2 className="text-2xl sm:text-3xl font-black font-heading text-[var(--color-text-pri)] tracking-wider mb-2 mt-4">
                PRAGMA EMS
              </h2>
              <p className="text-sm text-[var(--color-text-body)] mb-8 max-w-md">
                The exclusive Event Management System for SYNTAXIS 2026. Registrations, schedules, and live leaderboards will be available soon.
              </p>

              {!isExpired ? (
                <div className="w-full">
                  <RevealCountdown 
                    targetDate={revealDate} 
                    label="Pragma Launches In"
                    revealText="Launching on August 10, 2026"
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center gap-6 p-8 border border-[var(--color-brand)]/30 bg-[var(--color-brand)]/5 rounded-[var(--radius-md)] w-full">
                  <p className="text-lg font-bold text-[var(--color-brand)]">
                    Pragma is now live!
                  </p>
                  <a
                    href={EXTERNAL_LINKS.pragma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[var(--color-brand)] text-[var(--color-bg)] font-bold px-8 py-4 rounded-[var(--radius-md)] hover:scale-105 transition-transform duration-200"
                  >
                    <span>Go to Pragma Dashboard</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default PragmaModal;
