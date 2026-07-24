import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import EventCarousel from '../components/carousel/EventCarousel';
import { SECTION_IDS, EXTERNAL_LINKS } from '../lib/constants';

interface EventItem {
  title: string;
  category: 'Technical' | 'Non-Technical' | 'Workshop' | 'Open';
  description: string;
  teamSize: string;
  prizePool: string;
  image: string;
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
      title: 'Syndesis',
      category: 'Workshop',
      description: 'Master API building with FastAPI. Build and test a live endpoint using Python scripts in this hands-on session.',
      teamSize: 'Individual',
      prizePool: 'Certificates Offered',
      image: `https://placehold.co/400x200/${encodeURIComponent('5d1c34')}/${encodeURIComponent('f0e9e3')}?text=Syndesis`,
      pragmaUrl: EXTERNAL_LINKS.pragma
    },
    {
      title: 'Logika',
      category: 'Workshop',
      description: 'Deep dive into Data Structures and Algorithms focusing on pure logical thinking and efficient problem solving.',
      teamSize: 'Individual',
      prizePool: 'Certificates Offered',
      image: `https://placehold.co/400x200/${encodeURIComponent('5d1c34')}/${encodeURIComponent('f0e9e3')}?text=Logika`,
      pragmaUrl: EXTERNAL_LINKS.pragma
    },
    {
      title: 'Rhesis',
      category: 'Non-Technical',
      description: 'TEDx-style talks featuring visionary speakers delivering ideas and spoken discourse on technology and innovation.',
      teamSize: 'Open',
      prizePool: 'N/A',
      image: `https://placehold.co/400x200/${encodeURIComponent('5d1c34')}/${encodeURIComponent('f0e9e3')}?text=Rhesis`,
      pragmaUrl: EXTERNAL_LINKS.pragma
    },
    {
      title: 'Heureka',
      category: 'Technical',
      description: 'Individual DSA and problem solving competition hosted on the GeeksforGeeks platform. Test your limits.',
      teamSize: 'Individual',
      prizePool: '[PRIZE POOL TBD]',
      image: `https://placehold.co/400x200/${encodeURIComponent('5d1c34')}/${encodeURIComponent('f0e9e3')}?text=Heureka`,
      pragmaUrl: EXTERNAL_LINKS.pragma
    },
    {
      title: 'Agon',
      category: 'Technical',
      description: 'Competitive programming contest on HackerRank. High-speed algorithmic challenges for the sharpest minds.',
      teamSize: 'Individual',
      prizePool: '[PRIZE POOL TBD]',
      image: `https://placehold.co/400x200/${encodeURIComponent('5d1c34')}/${encodeURIComponent('f0e9e3')}?text=Agon`,
      pragmaUrl: EXTERNAL_LINKS.pragma
    },
    {
      title: 'Katharsis',
      category: 'Technical',
      description: 'The Debugging Duel. A duo competition focused on purging bugs from broken code under tight constraints.',
      teamSize: '2 Members',
      prizePool: '[PRIZE POOL TBD]',
      image: `https://placehold.co/400x200/${encodeURIComponent('5d1c34')}/${encodeURIComponent('f0e9e3')}?text=Katharsis`,
      pragmaUrl: EXTERNAL_LINKS.pragma
    },
    {
      title: 'Pythia Expo',
      category: 'Open',
      description: 'A massive exhibition of innovation. Showcase your projects to industry judges and fellow developers.',
      teamSize: 'Team',
      prizePool: '[PRIZE POOL TBD]',
      image: `https://placehold.co/400x200/${encodeURIComponent('5d1c34')}/${encodeURIComponent('f0e9e3')}?text=Pythia+Expo`,
      pragmaUrl: EXTERNAL_LINKS.pragma
    },
    {
      title: 'Eureka Pitch Finals',
      category: 'Technical',
      description: 'The ultimate pitch battle. Top teams deliver extended pitches and face a rigorous Q&A session with judges.',
      teamSize: 'Team',
      prizePool: '[PRIZE POOL TBD]',
      image: `https://placehold.co/400x200/${encodeURIComponent('5d1c34')}/${encodeURIComponent('f0e9e3')}?text=Eureka+Pitch`,
      pragmaUrl: EXTERNAL_LINKS.pragma
    },
    {
      title: 'The Tribunal',
      category: 'Technical',
      description: 'Final Hackathon judging. Present your finalized builds and architectural decisions to the judging council.',
      teamSize: 'Team',
      prizePool: '[PRIZE POOL TBD]',
      image: `https://placehold.co/400x200/${encodeURIComponent('5d1c34')}/${encodeURIComponent('f0e9e3')}?text=The+Tribunal`,
      pragmaUrl: EXTERNAL_LINKS.pragma
    },
    {
      title: 'Pantheon Games',
      category: 'Open',
      description: 'Multi-genre gaming arena featuring FreeFire, COD Mobile, and BGMI. Competitive play for gaming veterans.',
      teamSize: 'Varies',
      prizePool: '[PRIZE POOL TBD]',
      image: `https://placehold.co/400x200/${encodeURIComponent('5d1c34')}/${encodeURIComponent('f0e9e3')}?text=Pantheon+Games`,
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
                  {/* Event banner placeholder */}
                  <div className="relative h-44 w-full overflow-hidden bg-[var(--color-bg)]">
                    <img 
                      src={event.image} 
                      alt="[EVENT BANNER PLACEHOLDER — 400x200 — replace with event poster]" 
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
                      <p className="text-xs text-[var(--color-text-body)] leading-relaxed line-clamp-3">
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
