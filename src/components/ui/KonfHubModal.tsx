import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Ticket } from 'lucide-react';
import Card from './Card';
import { EXTERNAL_LINKS } from '../../lib/constants';

interface KonfHubEventDetail {
  widgetUrl?: string;
  title?: string;
}

export function KonfHubModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [widgetUrl, setWidgetUrl] = useState<string>('https://konfhub.com/widget/id/f63c7ac5-fcc5-49d7-8c29-afcb10aa875d');
  const [ticketTitle, setTicketTitle] = useState<string>('Syntaxis 2026 Registration');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleOpen = (e: CustomEvent<KonfHubEventDetail>) => {
      if (e.detail?.widgetUrl) {
        setWidgetUrl(e.detail.widgetUrl);
      } else {
        setWidgetUrl('https://konfhub.com/widget/id/f63c7ac5-fcc5-49d7-8c29-afcb10aa875d');
      }
      if (e.detail?.title) {
        setTicketTitle(e.detail.title);
      } else {
        setTicketTitle('Syntaxis 2026 Pass Registration');
      }
      setIsLoading(true);
      setIsOpen(true);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('openKonfHubModal' as any, handleOpen);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('openKonfHubModal' as any, handleOpen);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-2xl z-10 my-auto"
          >
            <Card className="p-0 border-2 border-[var(--color-brand)]/80 bg-[var(--color-bg)] rounded-[var(--radius-xl)] shadow-[0_0_50px_var(--color-brand-glow)] overflow-hidden flex flex-col">
              
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)] bg-[var(--color-bg-glass)]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-brand)]/20 border border-[var(--color-brand)]/40 flex items-center justify-center text-[var(--color-brand)]">
                    <Ticket className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold font-heading text-[var(--color-text-pri)] uppercase tracking-wide">
                      {ticketTitle}
                    </h3>
                    <span className="text-[10px] font-mono text-[var(--color-text-sec)]">
                      Official KonfHub Checkout Portal
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={EXTERNAL_LINKS.konfhub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1 text-xs text-[var(--color-text-sec)] hover:text-[var(--color-brand)] font-semibold transition-colors px-2.5 py-1 rounded-md border border-[var(--color-border)] hover:border-[var(--color-brand)]"
                    title="Open on KonfHub portal"
                  >
                    <span>Open in new tab</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 text-[var(--color-text-sec)] hover:text-[var(--color-text-pri)] hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Iframe Content Container */}
              <div className="relative w-full min-h-[520px] bg-[var(--color-bg)] flex items-center justify-center">
                {isLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[var(--color-bg)] z-10 text-[var(--color-brand)]">
                    <div className="w-8 h-8 border-2 border-[var(--color-brand)] border-t-transparent rounded-full animate-spin" />
                    <span className="text-xs font-mono text-[var(--color-text-sec)]">Loading KonfHub Checkout...</span>
                  </div>
                )}

                <iframe
                  src={widgetUrl}
                  id="konfhub-widget"
                  title={ticketTitle}
                  width="100%"
                  height="520"
                  allow="payment"
                  className="w-full h-[520px] border-0 bg-transparent"
                  onLoad={() => setIsLoading(false)}
                />
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between px-6 py-3 border-t border-[var(--color-border)] bg-[var(--color-bg-glass)] text-[11px] text-[var(--color-text-sec)] font-mono">
                <span>Secure 256-Bit SSL Payment via KonfHub</span>
                <a
                  href={EXTERNAL_LINKS.konfhub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-brand)] underline hover:text-[var(--color-text-pri)]"
                >
                  konfhub.com/syntaxis-2026
                </a>
              </div>

            </Card>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function openTicketWidget(widgetUrl: string, title?: string) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('openKonfHubModal', {
        detail: { widgetUrl, title },
      })
    );
  }
}

export default KonfHubModal;
