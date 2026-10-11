import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Download } from 'lucide-react';
import clsx from 'clsx';

import { openTicketWidget } from '../ui/KonfHubModal';
import { openTallyModal } from '../../lib/tally';

export interface EventCarouselProps {
  events: {
    title: string;
    description: string;
    category: string;
    prizePool: string;
    teamSize: string;
    image: string;
    price?: string;
    widgetUrl?: string;
    tallyId?: string;
    registrationUrl?: string;
    hasConsentForm?: boolean;
  }[];
  autoplay?: boolean;
  loop?: boolean;
}

export function EventCarousel({
  events,
  autoplay = false,
  loop = true,
}: EventCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop, slidesToScroll: 1 },
    autoplay ? [Autoplay({ delay: 3000, stopOnInteraction: true })] : []
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Embla Viewport */}
      <div className="overflow-hidden w-full cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex -ml-4 backface-hidden">
          {events.map((event, idx) => {
            const isActive = idx === selectedIndex;
            return (
              <div
                key={idx}
                className="flex-[0_0_85%] sm:flex-[0_0_55%] min-w-0 pl-4 relative h-[420px]"
              >
                <motion.div
                  initial={false}
                  animate={{
                    clipPath: isActive
                      ? "inset(0% 0% 0% 0% round 1rem)"
                      : "inset(8% 0% 8% 0% round 1rem)",
                  }}
                  transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                  className="w-full h-full relative overflow-hidden bg-[var(--color-bg-glass)] border border-[var(--color-border)] rounded-2xl flex flex-col justify-end p-6"
                >
                  {/* Event Background Image */}
                  <img
                    src={event.image}
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-20 transition-opacity duration-300 pointer-events-none"
                    loading="lazy"
                  />
                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/80 to-transparent pointer-events-none" />

                  {/* Text content details */}
                  <div className="relative z-10 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-widest text-[var(--color-brand)] uppercase">
                        {event.category}
                      </span>
                      {event.price && (
                        <span className="text-[10px] font-mono font-bold text-white/90 bg-[var(--color-accent)]/80 px-2 py-0.5 rounded-full border border-white/20">
                          {event.price}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-[var(--color-text-pri)] uppercase font-heading tracking-wide">
                      {event.title}
                    </h3>
                    <p className="text-xs text-[var(--color-text-body)] line-clamp-2 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="flex justify-between items-center text-[10px] text-[var(--color-text-sec)] font-bold tracking-wider mt-2 border-t border-[var(--color-border)] pt-3">
                      <span>TEAM: {event.teamSize}</span>
                      <span>PRIZE: {event.prizePool}</span>
                    </div>

                    {event.hasConsentForm && (
                      <a
                        href={`${import.meta.env.BASE_URL}docs/archithon-consent.html`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded border border-[var(--color-border-gold)] text-[var(--color-brand)] hover:bg-[var(--color-brand)] hover:text-[var(--color-bg)] transition-all font-heading font-semibold text-[10px] uppercase"
                      >
                        <Download className="w-3 h-3" />
                        <span>Consent Letter (syntaxis@rdec.in)</span>
                      </a>
                    )}

                    {event.tallyId ? (
                      <div className="mt-3 flex items-center gap-2">
                        <button
                          type="button"
                          data-tally-open={event.tallyId}
                          data-tally-layout="modal"
                          data-tally-width="500"
                          data-tally-emoji-text="👋"
                          data-tally-emoji-animation="wave"
                          onClick={() => event.tallyId && openTallyModal(event.tallyId)}
                          className="flex-1 py-2.5 text-center text-xs font-semibold text-[var(--color-bg)] bg-[var(--color-brand)] rounded-[var(--radius-md)] hover:scale-[1.02] transition-transform duration-200 cursor-pointer font-heading uppercase"
                        >
                          Register for Free
                        </button>
                        <a
                          href={`https://tally.so/r/${event.tallyId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Open form in new tab"
                          className="p-2.5 rounded-[var(--radius-md)] border border-[var(--color-border-gold)] bg-[var(--color-bg-glass)] text-[var(--color-brand)] hover:bg-[var(--color-brand)] hover:text-[var(--color-bg)] transition-all cursor-pointer flex items-center justify-center"
                          aria-label={`Open ${event.title} in new tab`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    ) : event.widgetUrl ? (
                      <button
                        type="button"
                        onClick={() => event.widgetUrl && openTicketWidget(event.widgetUrl, event.title)}
                        className="mt-4 w-full py-2.5 text-center text-xs font-semibold text-[var(--color-bg)] bg-[var(--color-brand)] rounded-[var(--radius-md)] hover:scale-[1.02] transition-transform duration-200 cursor-pointer font-heading uppercase"
                      >
                        Get Ticket ({event.price || 'Register'})
                      </button>
                    ) : (
                      <a
                        href={event.registrationUrl || 'https://konfhub.com/syntaxis-2026'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 w-full py-2.5 text-center text-xs font-semibold text-[var(--color-bg)] bg-[var(--color-brand)] rounded-[var(--radius-md)] hover:scale-[1.02] transition-transform duration-200 font-heading uppercase"
                      >
                        Register Here
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center px-4 mt-6">
        {/* Dots Pagination */}
        <div className="flex gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={clsx(
                "h-2 w-2 rounded-full cursor-pointer transition-all duration-300",
                selectedIndex === index ? "bg-[var(--color-brand)] w-4" : "bg-[var(--color-text-sec)]/30"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-2">
          <button
            onClick={scrollPrev}
            className="w-8 h-8 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-glass)] flex items-center justify-center text-[var(--color-text-pri)] hover:border-[var(--color-brand)] transition-colors cursor-pointer"
            aria-label="Previous event"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={scrollNext}
            className="w-8 h-8 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-glass)] flex items-center justify-center text-[var(--color-text-pri)] hover:border-[var(--color-brand)] transition-colors cursor-pointer"
            aria-label="Next event"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCarousel;
