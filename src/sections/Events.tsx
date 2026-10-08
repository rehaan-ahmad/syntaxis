import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import EventCarousel from '../components/carousel/EventCarousel';
import { openTicketWidget } from '../components/ui/KonfHubModal';
import { openTallyModal } from '../lib/tally';
import { SECTION_IDS, EXTERNAL_LINKS } from '../lib/constants';

export interface EventItem {
  title: string;
  category: 'Technical' | 'Non-Technical' | 'Workshop' | 'Open';
  description: string;
  teamSize: string;
  prizePool: string;
  price: string;
  image: string;
  isGenesis?: boolean;
  widgetUrl?: string;
  tallyId?: string;
  registrationUrl?: string;
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
      description: 'An intensive competitive programming suite bundling Heureka (DSA / Problem Solving), Agon (HackerRank contest), and Katharsis (Debugging Duel). Compete for the grand ₹12,000 prize pool.',
      teamSize: 'Individual & Duos',
      prizePool: 'Rs. 12,000',
      price: 'Rs. 200',
      image: `${import.meta.env.BASE_URL}assets/events/placeholder-event.svg`,
      widgetUrl: 'https://konfhub.com/widget/id/30b6342e-ec9d-4c41-a708-9fcbf904b2d2',
      registrationUrl: EXTERNAL_LINKS.konfhub
    },
    {
      title: 'Techne (Google Cloud)',
      category: 'Workshop',
      description: 'Comprehensive hands-on technical workshop series on Cloud & DevOps architecture, Docker containers, and earning verified Google Cloud Skill Badges with expert mentors.',
      teamSize: 'Individual',
      prizePool: 'Skill Badges & Swag',
      price: 'Rs. 100',
      image: `${import.meta.env.BASE_URL}assets/events/placeholder-event.svg`,
      widgetUrl: 'https://konfhub.com/widget/id/43c3c16f-48ac-4167-9435-3087ba35362a',
      registrationUrl: EXTERNAL_LINKS.konfhub
    },
    {
      title: 'Archithon (Hackathon)',
      category: 'Technical',
      description: 'The flagship 24-hour architecture and software development hackathon, featuring live mentorship, overnight campus stay, Pythia Expo project showcase, and The Tribunal grand jury defense.',
      teamSize: '2–4 Members',
      prizePool: 'Rs. 20,000',
      price: 'Rs. 800',
      image: `${import.meta.env.BASE_URL}assets/events/placeholder-event.svg`,
      widgetUrl: 'https://konfhub.com/widget/id/98f627ba-8118-4419-ae24-ef1d0d3edf0f',
      registrationUrl: EXTERNAL_LINKS.konfhub
    },
    {
      title: 'Genesis Track',
      category: 'Technical',
      description: 'Curated exclusively for school students in classes 9 to 12. Includes the Eureka Pitch automation competition across Day 2 and Day 3, plus Pythia Expo scientific prototyping.',
      teamSize: '2–3 Students',
      prizePool: 'Trophies & Mentorship',
      price: 'Free',
      image: `${import.meta.env.BASE_URL}assets/events/placeholder-genesis.svg`,
      isGenesis: true,
      tallyId: 'xXeyrr',
      registrationUrl: EXTERNAL_LINKS.konfhub
    },
    {
      title: 'Rhesis',
      category: 'Non-Technical',
      description: 'Visionary speakers delivering powerful ideas, keynote tech-talks, and live interactive Q&A on technology breakthroughs, leadership, and startup engineering.',
      teamSize: 'Open to All',
      prizePool: 'Open Discourse',
      price: 'Free',
      image: `${import.meta.env.BASE_URL}assets/events/placeholder-event.svg`,
      tallyId: '9qz8j5',
      registrationUrl: EXTERNAL_LINKS.konfhub
    },
    {
      title: 'Pantheon Games',
      category: 'Open',
      description: 'High-stakes mobile esports arena tournament featuring BGMI and FreeFire Max squad championship matches. Battle for gaming glory, in-game currency, and vouchers.',
      teamSize: 'Squad (4 Players)',
      prizePool: 'Currency + Vouchers',
      price: 'Rs. 200',
      image: `${import.meta.env.BASE_URL}assets/events/placeholder-event.svg`,
      widgetUrl: 'https://konfhub.com/widget/id/d99341d8-ab71-480c-a55d-437613be6466',
      registrationUrl: EXTERNAL_LINKS.konfhub
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
      className="max-w-7xl mx-auto px-6 py-20 sm:py-32 relative z-10"
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
                    <div className="absolute top-3 right-3 z-10 flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold text-white bg-[var(--color-accent)] px-2.5 py-0.5 rounded-full border border-white/20 shadow-sm">
                        {event.price}
                      </span>
                      <Badge variant="brand">
                        {event.category}
                      </Badge>
                    </div>
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
                      
                      {event.tallyId ? (
                        <button 
                          type="button"
                          data-tally-open={event.tallyId}
                          data-tally-layout="modal"
                          data-tally-width="500"
                          data-tally-emoji-text="👋"
                          data-tally-emoji-animation="wave"
                          onClick={() => event.tallyId && openTallyModal(event.tallyId)}
                          className="w-full py-2.5 text-center text-xs font-bold text-[var(--color-bg)] bg-[var(--color-brand)] rounded-[var(--radius-md)] hover:scale-[1.02] hover:shadow-[0_0_15px_var(--color-brand-glow)] transition-all duration-200 cursor-pointer"
                        >
                          Register for Free
                        </button>
                      ) : event.widgetUrl ? (
                        <button 
                          type="button"
                          onClick={() => event.widgetUrl && openTicketWidget(event.widgetUrl, event.title)}
                          className="w-full py-2.5 text-center text-xs font-bold text-[var(--color-bg)] bg-[var(--color-brand)] rounded-[var(--radius-md)] hover:scale-[1.02] hover:shadow-[0_0_15px_var(--color-brand-glow)] transition-all duration-200 cursor-pointer"
                        >
                          Get Ticket ({event.price})
                        </button>
                      ) : (
                        <a 
                          href={event.registrationUrl || EXTERNAL_LINKS.konfhub}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 text-center text-xs font-bold text-[var(--color-bg)] bg-[var(--color-brand)] rounded-[var(--radius-md)] hover:scale-[1.02] hover:shadow-[0_0_15px_var(--color-brand-glow)] transition-all duration-200"
                        >
                          Register Here
                        </a>
                      )}
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
