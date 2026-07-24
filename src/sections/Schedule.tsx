import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { SECTION_IDS } from '../lib/constants';

interface TimelineItem {
  time: string;
  title: string;
  venue: string;
  duration: string;
  notes: string;
}

interface DaySchedule {
  dayLabel: string;
  dateLabel: string;
  events: TimelineItem[];
}

export function Schedule() {
  const [activeDay, setActiveDay] = useState<number>(0);

  const scheduleData: DaySchedule[] = [
    {
      dayLabel: 'Day 1',
      dateLabel: 'Sep 11, 2026',
      events: [
        {
          time: '09:30 AM',
          title: 'The Kindling (Inauguration)',
          venue: 'Venue: RDEC Campus',
          duration: 'Duration: 1.5 Hours',
          notes: 'Lamp lighting, welcome address, and official fest reveal. Sponsor acknowledgements and opening keynote.'
        },
        {
          time: '11:00 AM',
          title: 'Syndesis (API Building with FastAPI)',
          venue: 'Venue: RDEC Campus',
          duration: 'Duration: 1.5 Hours',
          notes: 'Building a Python script to build and test a live endpoint. Hybrid enabled.'
        },
        {
          time: '12:30 PM',
          title: 'Lunch Break',
          venue: 'Venue: Campus',
          duration: 'Duration: 1 Hour',
          notes: 'Mid-day break and networking.'
        },
        {
          time: '01:30 PM',
          title: 'Logika (DSA Workshop)',
          venue: 'Venue: RDEC Campus',
          duration: 'Duration: 1.75 Hours',
          notes: 'Intensive session on Data Structures and Algorithms focusing on pure logical thinking. Hybrid enabled.'
        },
        {
          time: '03:15 PM',
          title: 'Rhesis (TEDx-style Talks) + Archithon Problem Statements',
          venue: 'Venue: RDEC Campus',
          duration: 'Duration: 1.5 Hours',
          notes: '2 speakers delivering ideas and spoken discourse. 45 minutes per speaker. Hybrid setup, streamed via YouTube Live.'
        }
      ]
    },
    {
      dayLabel: 'Day 2',
      dateLabel: 'Sep 12, 2026',
      events: [
        {
          time: '09:00 AM',
          title: 'Heureka (DSA/Problem Solving)',
          venue: 'Venue: RDEC Campus',
          duration: 'Duration: 2.5 Hours',
          notes: 'Individual competition hosted on the GeeksforGeeks platform.'
        },
        {
          time: '11:30 AM',
          title: 'Agon (Competitive Programming)',
          venue: 'Venue: RDEC Campus',
          duration: 'Duration: 1.5 Hours',
          notes: 'Individual competitive programming contest hosted on HackerRank.'
        },
        {
          time: '01:00 PM',
          title: 'Lunch Break & Pantheon Games',
          venue: 'Venue: Campus',
          duration: 'Duration: 1.5 Hours',
          notes: 'Mid-day break followed by multi-genre gaming competitions.'
        },
        {
          time: '02:30 PM',
          title: 'Katharsis (Debugging Duel)',
          venue: 'Venue: RDEC Campus',
          duration: 'Duration: 1.5 Hours',
          notes: 'Duo competition focused on purging bugs from broken code. Manual submission.'
        },
        {
          time: '04:00 PM',
          title: 'Networking Session / Alumni Meet',
          venue: 'Venue: RDEC Campus',
          duration: 'Duration: 1.25 Hours',
          notes: 'Participants can connect with each other and gain guidance from college alumni.'
        },
        {
          time: '05:15 PM',
          title: 'Results & Leaderboard Update',
          venue: 'Venue: RDEC Campus',
          duration: 'Duration: 15 Mins',
          notes: 'Daily standing update and result announcements.'
        }
      ]
    },
    {
      dayLabel: 'Day 3',
      dateLabel: 'Sep 13, 2026',
      events: [
        {
          time: '09:00 AM',
          title: 'Genesis Track Arrival',
          venue: 'Venue: RDEC Campus',
          duration: 'Duration: 30 Mins',
          notes: 'School students arrive for the science-fair style exhibition.'
        },
        {
          time: '09:30 AM',
          title: 'Archithon Final Submissions',
          venue: 'Venue: RDEC Campus',
          duration: 'Duration: 30 Mins',
          notes: 'The development clock ends. Code and hardware freezes.'
        },
        {
          time: '10:00 AM',
          title: 'Pythia Expo (Parallel Tracks)',
          venue: 'Venue: College Grounds',
          duration: 'Duration: 4.5 Hours',
          notes: 'College Track: Projects displayed for industry judges. Genesis Track: School projects displayed in parallel zone.'
        },
        {
          time: '10:00 AM',
          title: 'Eureka Pitch Finals',
          venue: 'Venue: RDEC Campus',
          duration: 'Duration: 4.5 Hours',
          notes: 'Top 5 college and top 3 school teams deliver extended 3-minute pitches + 3-minute Q&A.'
        },
        {
          time: '02:30 PM',
          title: 'The Tribunal (Hackathon Judging)',
          venue: 'Venue: RDEC Campus',
          duration: 'Duration: 1.5 Hours',
          notes: 'Archithon teams present their finalized builds to the judging council.'
        },
        {
          time: '04:00 PM',
          title: 'Results & Genesis Departure',
          venue: 'Venue: RDEC Campus',
          duration: 'Duration: 30 Mins',
          notes: 'Final results compiled. School students depart campus safely.'
        },
        {
          time: '04:30 PM',
          title: 'Apotheosis (Valediction)',
          venue: 'Venue: RDEC Campus',
          duration: 'Duration: 1 Hour',
          notes: 'Highest honors awarded. Prize distribution for all events.'
        },
        {
          time: '05:30 PM',
          title: 'Epilogos',
          venue: 'Venue: RDEC Campus',
          duration: 'Duration: 30 Mins',
          notes: 'Final closing remarks. Syntaxis 2026 officially ends.'
        }
      ]
    }
  ];

  const containerVariants = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, x: -30 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' as const }
    },
    exit: { opacity: 0, x: 20, transition: { duration: 0.2 } }
  };

  return (
    <section 
      id={SECTION_IDS.schedule} 
      className="max-w-7xl mx-auto px-6 py-20 sm:py-32 relative z-10 bg-[var(--color-bg)]"
    >
      {/* Section Heading */}
      <SectionHeading title="EVENT SCHEDULE" subtitle="TIMELINE FLOW" />

      {/* Tabs */}
      <div className="flex justify-center gap-2 sm:gap-4 mb-16 select-none max-w-3xl mx-auto flex-wrap">
        {scheduleData.map((day, idx) => (
          <button
            key={idx}
            onClick={() => setActiveDay(idx)}
            className={`px-5 py-2.5 rounded-[var(--radius-md)] border text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer outline-none ${
              activeDay === idx
                ? 'bg-[var(--color-accent)] border-[var(--color-accent)] text-[var(--color-text-pri)] shadow-md scale-105'
                : 'border-[var(--color-border)]/50 text-[var(--color-text-sec)] hover:border-[var(--color-brand)] hover:text-[var(--color-text-pri)]'
            }`}
          >
            <span>{day.dayLabel}</span>
            <span className="block text-[9px] font-medium opacity-70 tracking-wider mt-0.5">{day.dateLabel}</span>
          </button>
        ))}
      </div>

      {/* Timeline wrapper */}
      <div className="max-w-3xl mx-auto relative px-4">
        {/* Vertical Timeline bar line */}
        <div className="absolute left-[21px] sm:left-1/2 top-4 bottom-4 w-0.5 bg-[var(--color-accent)] -translate-x-1/2" />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col gap-8 w-full"
          >
            {scheduleData[activeDay].events.map((event, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center w-full ${
                  idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline node dot */}
                <div className="absolute left-[5px] sm:left-1/2 w-3.5 h-3.5 rounded-full bg-[var(--color-brand)] border border-[var(--color-bg)] shadow-[0_0_10px_var(--color-brand)] -translate-x-1/2 z-10" />

                {/* Left or Right column container */}
                <div className="w-full sm:w-1/2 pl-10 sm:pl-0 sm:px-8">
                  <div className={`flex flex-col bg-[var(--color-bg-glass)] border border-[var(--color-border)] p-5 rounded-[var(--radius-lg)] shadow-lg backdrop-blur-sm ${
                    idx % 2 === 0 ? 'sm:text-right' : 'sm:text-left'
                  }`}>
                    {/* Time indicator badge */}
                    <span className="text-[10px] font-bold text-[var(--color-brand)] tracking-widest uppercase mb-1 font-mono">
                      {event.time}
                    </span>
                    <h4 className="text-lg font-bold font-heading text-[var(--color-text-pri)] tracking-wide mb-2 uppercase">
                      {event.title}
                    </h4>
                    
                    <div className={`flex flex-wrap gap-x-3 gap-y-1 text-xs text-[var(--color-text-sec)] font-semibold mb-2 ${
                      idx % 2 === 0 ? 'sm:justify-end' : 'sm:justify-start'
                    }`}>
                      <span>{event.venue}</span>
                      <span className="hidden sm:inline opacity-40">|</span>
                      <span>{event.duration}</span>
                    </div>

                    <p className="text-xs text-[var(--color-text-body)] italic opacity-85 leading-relaxed">
                      {event.notes}
                    </p>
                  </div>
                </div>

                {/* Empty buffer box for desktop symmetry */}
                <div className="hidden sm:block w-1/2" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
}

export default Schedule;
