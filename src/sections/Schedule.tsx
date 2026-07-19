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
      dateLabel: 'Sep 21, 2026',
      events: [
        {
          time: '09:30 AM',
          title: '[INAUGURAL CEREMONY PLACEHOLDER]',
          venue: 'Venue: [MAIN AUDITORIUM PLACEHOLDER]',
          duration: 'Duration: [1.5 HOURS PLACEHOLDER]',
          notes: '[Schedule TBD — to be updated by organizing team]'
        },
        {
          time: '11:30 AM',
          title: '[HACKATHON LAUNCH PLACEHOLDER]',
          venue: 'Venue: [SEMINAR HALL PLACEHOLDER]',
          duration: 'Duration: [1 HOUR PLACEHOLDER]',
          notes: '[Schedule TBD — to be updated by organizing team]'
        },
        {
          time: '02:00 PM',
          title: '[CODE BATTLE PRELIMS PLACEHOLDER]',
          venue: 'Venue: [LAB 3 PLACEHOLDER]',
          duration: 'Duration: [2 HOURS PLACEHOLDER]',
          notes: '[Schedule TBD — to be updated by organizing team]'
        }
      ]
    },
    {
      dayLabel: 'Day 2',
      dateLabel: 'Sep 22, 2026',
      events: [
        {
          time: '10:00 AM',
          title: '[AI WORKSHOP SESSION 1 PLACEHOLDER]',
          venue: 'Venue: [SEMINAR HALL PLACEHOLDER]',
          duration: 'Duration: [3 HOURS PLACEHOLDER]',
          notes: '[Schedule TBD — to be updated by organizing team]'
        },
        {
          time: '02:00 PM',
          title: '[TECH DEBATE ROUND 1 PLACEHOLDER]',
          venue: 'Venue: [ROOM 204 PLACEHOLDER]',
          duration: 'Duration: [2 HOURS PLACEHOLDER]',
          notes: '[Schedule TBD — to be updated by organizing team]'
        }
      ]
    },
    {
      dayLabel: 'Day 3',
      dateLabel: 'Sep 23, 2026',
      events: [
        {
          time: '10:00 AM',
          title: '[GENESIS TRACK HACK PLACEHOLDER]',
          venue: 'Venue: [JUNIOR LAB PLACEHOLDER]',
          duration: 'Duration: [4 HOURS PLACEHOLDER]',
          notes: '[Schedule TBD — to be updated by organizing team]'
        },
        {
          time: '01:30 PM',
          title: '[ARENA GAMING QUARTERS PLACEHOLDER]',
          venue: 'Venue: [MAIN HALL PLACEHOLDER]',
          duration: 'Duration: [3 HOURS PLACEHOLDER]',
          notes: '[Schedule TBD — to be updated by organizing team]'
        }
      ]
    },
    {
      dayLabel: 'Day 4',
      dateLabel: 'Sep 24, 2026',
      events: [
        {
          time: '09:30 AM',
          title: '[HACKATHON FINAL EVALUATION PLACEHOLDER]',
          venue: 'Venue: [CS CONFERENCE ROOM PLACEHOLDER]',
          duration: 'Duration: [3.5 HOURS PLACEHOLDER]',
          notes: '[Schedule TBD — to be updated by organizing team]'
        },
        {
          time: '02:30 PM',
          title: '[VALEDICTORY & PRIZE DISTRIBUTION PLACEHOLDER]',
          venue: 'Venue: [MAIN AUDITORIUM PLACEHOLDER]',
          duration: 'Duration: [2 HOURS PLACEHOLDER]',
          notes: '[Schedule TBD — to be updated by organizing team]'
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
