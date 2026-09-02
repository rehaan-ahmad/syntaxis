import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import EventCarousel from '../components/carousel/EventCarousel';
import { SECTION_IDS, EXTERNAL_LINKS } from '../lib/constants';

export interface EventItem {
  title: string;
  category: 'Technical' | 'Non-Technical' | 'Workshop' | 'Open';
  description: string;
  teamSize: string;
  prizePool: string;
  image: string;
  isGenesis?: boolean;
  pragmaUrl: string;
}

export function Events() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Technical' | 'Non-Technical' | 'Workshop' | 'Open'>('All');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const eventList: EventItem[] = [
    {
      title: 'Contest Package',
      category: 'Technical',
      description: 'An intensive competitive programming and problem-solving suite bundling Heureka (DSA / Problem Solving), Agon (HackerRank contest), and Katharsis (Debugging Duel).',
      teamSize: 'Individual & Duos',
      prizePool: '[PRIZE POOL TBD]',
      image: `${import.meta.env.BASE_URL}assets/events/placeholder-event.svg`,
      pragmaUrl: EXTERNAL_LINKS.pragma
    },
    {
      title: 'Workshop Package',
      category: 'Workshop',
      description: 'Comprehensive hands-on technical workshop series bundling Syndesis (Live API building with FastAPI) and Logika (Data Structures & Algorithmic logic).',
      teamSize: 'Individual',
      prizePool: 'Certificates Offered',
      image: `${import.meta.env.BASE_URL}assets/events/placeholder-event.svg`,
      pragmaUrl: EXTERNAL_LINKS.pragma
    },
    {
      title: 'Hackathon Package',
      category: 'Technical',
      description: 'The flagship build sprint bundling Archithon, Pythia Expo project exhibition, and The Tribunal jury defense. (Note: Pythia Expo & The Tribunal are open for any existing participant to attend for viewing).',
      teamSize: '2–4 Members',
      prizePool: '[PRIZE POOL TBD]',
      image: `${import.meta.env.BASE_URL}assets/events/placeholder-event.svg`,
      pragmaUrl: EXTERNAL_LINKS.pragma
    },
    {
      title: 'Eureka Pitch (Genesis Track)',
      category: 'Technical',
      description: 'Flagship school innovation competition conducted across two rounds — Round 1 on Day 2 and the Final Round on Day 3.',
      teamSize: '2–3 Students',
      prizePool: '[PRIZE POOL TBD]',
      image: `${import.meta.env.BASE_URL}assets/events/placeholder-genesis.svg`,
      isGenesis: true,
      pragmaUrl: EXTERNAL_LINKS.pragma
    },
    {
      title: 'Rhesis',
      category: 'Non-Technical',
      description: 'TEDx-style talks featuring visionary speakers delivering ideas and spoken discourse on technology and innovation.',
      teamSize: 'Open',
      prizePool: 'N/A',
      image: `${import.meta.env.BASE_URL}assets/events/placeholder-event.svg`,
      pragmaUrl: EXTERNAL_LINKS.pragma
    },
    {
      title: 'Pantheon Games',
      category: 'Open',
      description: 'Multi-genre gaming arena featuring FreeFire, Call of Duty Mobile, and BGMI. Competitive play for gaming veterans.',
      teamSize: 'Varies',
      prizePool: '[PRIZE POOL TBD]',
      image: `${import.meta.env.BASE_URL}assets/events/placeholder-event.svg`,
      pragmaUrl: EXTERNAL_LINKS.pragma
    }
  ];

  const filteredEvents = activeFilter === 'All'
    ? eventList
    : eventList.filter(item => item.category === activeFilter);

  const filters: ('All' | 'Technical' | 'Non-Technical' | 'Workshop' | 'Open')[] = [
    'All', 'Technical', 'Non-Technical', 'Workshop', 'Open'
  ];

  const cardVariants = {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.4 } 
    },
    exit: { opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.2 } }
  };

  return (
    <section 
      id={SECTION_IDS.events} 
      className="max-w-7xl mx-auto px-6 py-20 sm:py-32 relative z-10 bg-[var(--color-bg)]"
    >
      {/* Section Heading */}
      <SectionHeading title="EVENTS SPRINT" subtitle="CHALLENGE YOUR LIMITS" />

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-12 max-w-2xl mx-auto select-none">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={clsx(
              "px-4 py-2 text-xs sm:text-sm font-semibold rounded-[var(--radius-md)] border transition-all duration-200 cursor-pointer outline-none",
              activeFilter === filter
                ? "bg-[var(--color-accent)] text-[var(--color-text-pri)] border-[var(--color-accent)] shadow-md"
                : "border-[var(--color-text-sec)]/50 text-[var(--color-text-sec)] hover:border-[var(--color-brand)] hover:text-[var(--color-text-pri)]"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Conditional view: mobile carousel or desktop grid */}
      {isMobile ? (
        <EventCarousel events={filteredEvents} />
      ) : (
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event) => (
              <motion.div
                key={event.title}
                layout
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="h-full flex flex-col"
              >
                <Card className="h-full flex flex-col justify-between p-0 overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-border-gold)] transition-colors duration-300">
                  {/* Event banner image — 16:9 landscape or 4:3 for Genesis Track */}
                  <div className={clsx(
                    "relative w-full overflow-hidden bg-[var(--color-bg)]",
                    event.isGenesis ? "aspect-[4/3]" : "aspect-video"
                  )}>
                    <img 
                      src={event.image} 
                      alt={`[${event.title} Banner]`}
                      className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-glass)] to-transparent pointer-events-none" />
                    <Badge className="absolute top-3 right-3 z-10" variant="brand">
                      {event.category}
                    </Badge>
                  </div>

                  {/* Card Content details */}
                  <div className="p-6 flex flex-col flex-1 gap-4 justify-between">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-bold uppercase font-heading text-[var(--color-text-pri)] tracking-wide">
                        {event.title}
                      </h3>
                      <p className="text-xs text-[var(--color-text-body)] leading-relaxed line-clamp-4">
                        {event.description}
                      </p>
                    </div>

                    {/* Metadata items & Button */}
                    <div className="flex flex-col gap-4 mt-auto">
                      <div className="flex justify-between items-center text-[10px] text-[var(--color-text-sec)] font-bold tracking-wider border-t border-[var(--color-border)] pt-3">
                        <span>TEAM SIZE: {event.teamSize}</span>
                        <span>PRIZE: {event.prizePool}</span>
                      </div>
                      
                      <a 
                        href={event.pragmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 text-center text-xs font-bold text-[var(--color-bg)] bg-[var(--color-brand)] rounded-[var(--radius-md)] hover:scale-[1.02] hover:shadow-[0_0_15px_var(--color-brand-glow)] transition-all duration-200"
                      >
                        Register on Pragma
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
}

export default Events;
