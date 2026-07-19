import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

export interface EventCarouselProps {
  events: {
    title: string;
    description: string;
    category: string;
    prizePool: string;
    teamSize: string;
    image: string;
    pragmaUrl: string;
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
                    <span className="text-[10px] font-bold tracking-widest text-[var(--color-brand)] uppercase">
                      {event.category}
                    </span>
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

                    <a
                      href={event.pragmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 w-full py-2.5 text-center text-xs font-semibold text-[var(--color-bg)] bg-[var(--color-brand)] rounded-[var(--radius-md)] hover:scale-[1.02] transition-transform duration-200"
                    >
                      Register on Pragma
                    </a>
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
