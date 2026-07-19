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
      title: 'Hackathon',
      category: 'Technical',
      description: 'A 24-hour code sprint to build innovative, functional software solutions answering real-world problem statements.',
      teamSize: '3-4 Members',
      prizePool: '[PRIZE POOL TBD]',
      image: `https://placehold.co/400x200/${encodeURIComponent('5d1c34')}/${encodeURIComponent('f0e9e3')}?text=Hackathon`,
      pragmaUrl: EXTERNAL_LINKS.pragma
    },
    {
      title: 'Code Battle',
      category: 'Technical',
      description: 'An intense algorithmic speed-coding contest. Test your logic, syntax speed, and complexity choices under pressure.',
      teamSize: 'Individual',
      prizePool: '[PRIZE POOL TBD]',
      image: `https://placehold.co/400x200/${encodeURIComponent('5d1c34')}/${encodeURIComponent('f0e9e3')}?text=Code+Battle`,
      pragmaUrl: EXTERNAL_LINKS.pragma
    },
    {
      title: 'Tech Debate',
      category: 'Non-Technical',
      description: 'Clash of opinions regarding artificial intelligence ethics, cybersecurity laws, and the socio-economic impacts of next-gen tech.',
      teamSize: '2 Members',
      prizePool: '[PRIZE POOL TBD]',
      image: `https://placehold.co/400x200/${encodeURIComponent('5d1c34')}/${encodeURIComponent('f0e9e3')}?text=Tech+Debate`,
      pragmaUrl: EXTERNAL_LINKS.pragma
    },
    {
      title: 'Lens Sprint',
      category: 'Non-Technical',
      description: 'On-campus photography and composition run. Capture the raw energy, structural angles, and human emotion of Syntaxis 2026.',
      teamSize: 'Individual',
      prizePool: '[PRIZE POOL TBD]',
      image: `https://placehold.co/400x200/${encodeURIComponent('5d1c34')}/${encodeURIComponent('f0e9e3')}?text=Lens+Sprint`,
      pragmaUrl: EXTERNAL_LINKS.pragma
    },
    {
      title: 'AI Workshop',
      category: 'Workshop',
      description: 'Interactive crash course on training large language models, prompt engineering, and visual generation APIs.',
      teamSize: 'Individual',
      prizePool: 'Certificates Offered',
      image: `https://placehold.co/400x200/${encodeURIComponent('5d1c34')}/${encodeURIComponent('f0e9e3')}?text=AI+Workshop`,
      pragmaUrl: EXTERNAL_LINKS.pragma
    },
    {
      title: 'Web Dev Bootcamp',
      category: 'Workshop',
      description: 'Hands-on session on advanced reactive states, caching strategies, CSS grid layout architectures, and bundler compilation.',
      teamSize: 'Individual',
      prizePool: 'Certificates Offered',
      image: `https://placehold.co/400x200/${encodeURIComponent('5d1c34')}/${encodeURIComponent('f0e9e3')}?text=Web+Dev+Bootcamp`,
      pragmaUrl: EXTERNAL_LINKS.pragma
    },
    {
      title: 'Arena Gaming',
      category: 'Open',
      description: 'Multiplayer tactical battleground arena. Teams compete in high-precision rounds to determine the ultimate champions.',
      teamSize: '5 Members',
      prizePool: '[PRIZE POOL TBD]',
      image: `https://placehold.co/400x200/${encodeURIComponent('5d1c34')}/${encodeURIComponent('f0e9e3')}?text=Arena+Gaming`,
      pragmaUrl: EXTERNAL_LINKS.pragma
    },
    {
      title: 'Trivia Quiz',
      category: 'Open',
      description: 'Rapid-fire technology, science, and history trivia tournament. Challenge your logical deductions and background knowledge.',
      teamSize: '2 Members',
      prizePool: '[PRIZE POOL TBD]',
      image: `https://placehold.co/400x200/${encodeURIComponent('5d1c34')}/${encodeURIComponent('f0e9e3')}?text=Trivia+Quiz`,
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
