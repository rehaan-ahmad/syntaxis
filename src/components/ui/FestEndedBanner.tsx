import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, PartyPopper } from 'lucide-react';

// Dispatch date: 20 November 2026 at midnight IST
const DISPATCH_DATE = new Date('2026-11-20T00:00:00+05:30');

export function FestEndedBanner() {
  const [isDismissed, setIsDismissed] = useState(false);
  const [rewardsDue, setRewardsDue] = useState(true);

  useEffect(() => {
    // Check if user already dismissed this session
    const dismissed = sessionStorage.getItem('festEndedBannerDismissed');
    if (dismissed) setIsDismissed(true);

    // Update reward status based on current time
    const now = new Date();
    setRewardsDue(now < DISPATCH_DATE);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem('festEndedBannerDismissed', '1');
  };

  return (
    <AnimatePresence>
      {!isDismissed && (
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
          className="fixed top-16 inset-x-0 z-40 flex justify-center px-4 pointer-events-none"
        >
          <div
            className="pointer-events-auto max-w-2xl w-full flex items-start sm:items-center gap-3 px-5 py-3.5 rounded-[var(--radius-lg)] border border-[var(--color-brand)]/60 shadow-[0_0_30px_var(--color-brand-glow)] mt-2"
            style={{
              background: 'linear-gradient(135deg, rgba(93,28,52,0.75) 0%, rgba(17,16,14,0.90) 100%)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
            }}
          >
            <PartyPopper className="w-5 h-5 text-[var(--color-brand)] shrink-0 mt-0.5 sm:mt-0" />

            <div className="flex-1 min-w-0">
              <p className="text-sm sm:text-base font-bold font-heading text-[var(--color-text-pri)] tracking-wide">
                Syntaxis 2026 has ended!
              </p>
              <p className="text-xs text-[var(--color-text-body)] mt-0.5 leading-snug">
                {rewardsDue
                  ? 'All certificates and rewards will be dispached by 20 November, 2026.'
                  : 'All certificates will be dispached by 20 November, 2026.'}
              </p>
            </div>

            <button
              onClick={handleDismiss}
              aria-label="Dismiss notification"
              className="shrink-0 p-1 text-[var(--color-text-sec)] hover:text-[var(--color-text-pri)] hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default FestEndedBanner;

