import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, PartyPopper } from 'lucide-react';

// Dispatch date: 20 November 2026 at midnight IST
const DISPATCH_DATE = new Date('2026-11-20T00:00:00+05:30');

export function FestEndedBanner() {
  const [isDismissed, setIsDismissed] = useState(false);
  const [rewardsDue, setRewardsDue] = useState(true);

  useEffect(() => {
    // Update reward status based on current time
    const now = new Date();
    setRewardsDue(now < DISPATCH_DATE);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  return (
    <AnimatePresence>
      {!isDismissed && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed top-20 sm:top-20 inset-x-0 z-[60] flex justify-center px-4 pointer-events-none"
        >
          <div
            className="pointer-events-auto max-w-2xl w-full flex items-start sm:items-center gap-3.5 px-5 py-4 rounded-[var(--radius-lg)] border-2 border-[var(--color-brand)] shadow-[0_0_40px_var(--color-brand-glow)] bg-[#11100e]/95 backdrop-blur-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(93,28,52,0.92) 0%, rgba(17,16,14,0.96) 100%)',
            }}
          >
            <div className="w-9 h-9 rounded-full bg-[var(--color-brand)]/20 border border-[var(--color-brand)]/40 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 text-[var(--color-brand)]">
              <PartyPopper className="w-5 h-5 text-[var(--color-brand)]" />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm sm:text-base font-bold font-heading text-[var(--color-text-pri)] tracking-wide uppercase">
                Syntaxis 2026 has ended!
              </p>
              <p className="text-xs sm:text-sm text-[var(--color-text-body)] mt-0.5 leading-snug">
                {rewardsDue
                  ? 'All certificates and rewards will be dispached by 20 November, 2026.'
                  : 'All certificates will be dispached by 20 November, 2026.'}
              </p>
            </div>

            <button
              onClick={handleDismiss}
              aria-label="Dismiss notification"
              className="shrink-0 p-1.5 text-[var(--color-text-sec)] hover:text-[var(--color-text-pri)] hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default FestEndedBanner;

