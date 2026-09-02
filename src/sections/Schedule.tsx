import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { SECTION_IDS } from '../lib/constants';

interface TimelineItem {
  time: string;
  title: string;
  venue: string;
  duration?: string;
  notes: string;
  category?: 'main' | 'athlon' | 'genesis' | 'telos';
}

interface DaySchedule {
  dayLabel: string;
  dateLabel: string;
  title: string;
  description: string;
  events: TimelineItem[];
}

export function Schedule() {
  const [activeDay, setActiveDay] = useState<number>(0);
  const [day2Filter, setDay2Filter] = useState<'all' | 'athlon' | 'genesis'>('all');

  const scheduleData: DaySchedule[] = [
    {
      dayLabel: 'Day 1: GENESIS',
      dateLabel: 'Oct 29, 2026',
      title: 'Origin & Workshop Package',
      description: 'Day 1 births the fest, establishing the technical foundation with the Workshop Package, keynotes, and Archithon reveal.',
      events: [
        {
          time: '09:30 AM',
          title: 'The Kindling (Inauguration)',
          venue: 'RDEC Campus Auditorium',
          duration: '1.5 Hours',
          notes: 'Lamp lighting, welcome address, and official fest reveal. Sponsor acknowledgements and opening keynote.',
          category: 'main'
        },
        {
          time: '11:00 AM',
          title: 'Workshop Package Part 1: Syndesis (API Building)',
          venue: 'RDEC Campus Labs',
          duration: '1.5 Hours',
          notes: 'Hands-on session building live FastAPI endpoints in Python. BYOD Policy: Bring your own laptop; high-speed Wi-Fi and charging provided.',
          category: 'main'
        },
        {
          time: '12:30 PM',
          title: 'Lunch Break',
          venue: 'Campus Food Court & Vendor Zone',
          duration: '1 Hour',
          notes: 'Lunch break. Meals are not provided by management, but a variety of food & beverages are available for purchase from campus vendors.',
          category: 'main'
        },
        {
          time: '01:30 PM',
          title: 'Workshop Package Part 2: Logika (DSA & Logic)',
          venue: 'RDEC Campus Labs',
          duration: '1.75 Hours',
          notes: 'Intensive session on Data Structures and Algorithms focusing on pure logical thinking.',
          category: 'main'
        },
        {
          time: '03:15 PM',
          title: 'Rhesis (TEDx-style Talks) + Archithon Problem Statements',
          venue: 'Main Auditorium / Stream',
          duration: '1.5 Hours',
          notes: 'Visionary speakers delivering ideas and spoken discourse. Official release of problem statements for the Hackathon Package (Archithon).',
          category: 'main'
        },
        {
          time: '05:30 PM',
          title: 'End of Day 1',
          venue: 'RDEC Campus',
          duration: 'Closing',
          notes: 'Day 1 sessions wrap up.',
          category: 'main'
        }
      ]
    },
    {
      dayLabel: 'Day 2: ATHLON',
      dateLabel: 'Oct 30, 2026',
      title: 'Contest Package & Eureka Pitch Round 1',
      description: 'Day 2 is dedicated strictly to the Contest Package (Heureka, Agon, Katharsis) and Eureka Pitch Round 1 for school geniuses.',
      events: [
        {
          time: '09:00 AM',
          title: 'Contest Package Part 1: Heureka (DSA Sprint)',
          venue: 'Online Coding Arena',
          duration: '2.5 Hours',
          notes: 'Individual algorithmic problem solving sprint. BYOD Policy strictly enforced; power outlets & Wi-Fi supplied.',
          category: 'athlon'
        },
        {
          time: '09:00 AM',
          title: 'Genesis Track Arrival & Orientation',
          venue: 'Dedicated Genesis Zone',
          duration: '30 Mins',
          notes: 'Class 9 to 12 school participants arrive for orientation.',
          category: 'genesis'
        },
        {
          time: '09:30 AM',
          title: 'Eureka Pitch — Round 1 (Genesis Track)',
          venue: 'Genesis Seminar Hall',
          duration: '2.5 Hours',
          notes: 'School student teams deliver initial pitches on everyday-life automation themes for Round 1 judging.',
          category: 'genesis'
        },
        {
          time: '11:30 AM',
          title: 'Contest Package Part 2: Agon (Competitive Programming)',
          venue: 'HackerRank Platform',
          duration: '1.5 Hours',
          notes: 'Individual high-speed algorithmic programming contest on HackerRank.',
          category: 'athlon'
        },
        {
          time: '12:00 PM',
          title: 'Genesis Lunch & Shortlist Announcement',
          venue: 'Vendor Court',
          duration: '1 Hour',
          notes: 'Top school teams shortlisted for Day 3 Pitch Finals. Meals available for purchase from vendors.',
          category: 'genesis'
        },
        {
          time: '01:00 PM',
          title: 'Lunch Break (Athlon Track)',
          venue: 'Campus Vendor Zone',
          duration: '1.5 Hours',
          notes: 'Lunch & rest period for competitors. Meals not provided by management; available for purchase from campus vendors.',
          category: 'athlon'
        },
        {
          time: '02:30 PM',
          title: 'Contest Package Part 3: Katharsis (Debugging Duel)',
          venue: 'RDEC Computer Labs',
          duration: '1.5 Hours',
          notes: 'Duo competition focused on purging bugs from broken code under tight constraints.',
          category: 'athlon'
        },
        {
          time: '04:00 PM',
          title: 'Networking Session / Alumni Meet',
          venue: 'Main Auditorium',
          duration: '1.25 Hours',
          notes: 'Connect with peers and gain guidance from college alumni.',
          category: 'athlon'
        },
        {
          time: '05:15 PM',
          title: 'Results & Leaderboard Update',
          venue: 'Main Arena',
          duration: '15 Mins',
          notes: 'Daily standing updates and leaderboard reveals.',
          category: 'athlon'
        },
        {
          time: '05:30 PM',
          title: 'End of Day 2 & Genesis Departure',
          venue: 'Campus Departure Zone',
          duration: 'Closing',
          notes: 'School students and non-hackathon participants depart campus safely.',
          category: 'genesis'
        }
      ]
    },
    {
      dayLabel: 'Day 3: TELOS',
      dateLabel: 'Oct 31, 2026',
      title: 'Hackathon Package Finals & Valediction',
      description: 'Day 3 concludes the fest with the Hackathon Package judging, Pythia Expo, Eureka Pitch Finals, and Apotheosis ceremony.',
      events: [
        {
          time: '09:00 AM',
          title: 'Genesis Track Arrival',
          venue: 'Exhibition Zone',
          duration: '30 Mins',
          notes: 'School teams arrive for science-fair style exhibition.',
          category: 'telos'
        },
        {
          time: '09:00 AM - 02:00 PM',
          title: 'Pantheon Games',
          venue: 'Esports Arena',
          duration: '5 Hours',
          notes: 'Multi-genre gaming tournament featuring FreeFire, Call of Duty Mobile, and BGMI.',
          category: 'telos'
        },
        {
          time: '09:30 AM',
          title: 'Hackathon Package: Archithon Code Freeze',
          venue: 'Hackathon Base',
          duration: 'Deadline',
          notes: 'The development clock ends. Code repositories and hardware prototypes freeze.',
          category: 'telos'
        },
        {
          time: '10:00 AM',
          title: 'Hackathon Package: Pythia Expo',
          venue: 'College Grounds & Genesis Zone',
          duration: '4.5 Hours',
          notes: 'Project exhibition open for all existing participants to attend and view! Projects displayed for industry judges.',
          category: 'telos'
        },
        {
          time: '10:00 AM',
          title: 'Eureka Pitch Finals (Genesis Track)',
          venue: 'Main Auditorium',
          duration: '4.5 Hours',
          notes: 'Shortlisted school teams deliver extended 3-minute pitches + 3-minute Q&A in the final round.',
          category: 'telos'
        },
        {
          time: '02:30 PM',
          title: 'Hackathon Package: The Tribunal (Judging)',
          venue: 'Grand Jury Hall',
          duration: '1.5 Hours',
          notes: 'Archithon teams present finalized builds to jury council. Open for existing participants to view.',
          category: 'telos'
        },
        {
          time: '04:00 PM',
          title: 'Results & Genesis Departure',
          venue: 'Main Stage',
          duration: '30 Mins',
          notes: 'Final results compiled. School students depart campus safely.',
          category: 'telos'
        },
        {
          time: '04:30 PM',
          title: 'Apotheosis (Valediction Ceremony)',
          venue: 'Grand Amphitheatre',
          duration: '1 Hour',
          notes: 'Highest honors awarded. Trophy and prize distribution for all Syntaxis 2026 packages.',
          category: 'telos'
        },
        {
          time: '05:30 PM',
          title: 'Epilogos',
          venue: 'Main Stage',
          duration: 'Closing',
          notes: 'Final closing remarks. Syntaxis 2026 officially ends.',
          category: 'telos'
        }
      ]
    }
  ];

  const containerVariants = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: 'easeOut' as const }
    },
    exit: { opacity: 0, y: -15, transition: { duration: 0.2 } }
  };

  const currentDayEvents = scheduleData[activeDay].events.filter(event => {
    if (activeDay !== 1) return true;
    if (day2Filter === 'all') return true;
    if (day2Filter === 'athlon') return event.category === 'athlon' || event.category === 'main';
    if (day2Filter === 'genesis') return event.category === 'genesis';
    return true;
  });

  return (
    <section
      id={SECTION_IDS.schedule}
      className="max-w-7xl mx-auto px-6 py-20 sm:py-32 relative z-10 bg-[var(--color-bg)]"
    >
      {/* Section Heading */}
      <SectionHeading title="EVENT SCHEDULE" subtitle="OFFICIAL 3-DAY TIMELINE" />

      {/* Days Tabs */}
      <div className="flex justify-center gap-3 sm:gap-6 mb-8 select-none max-w-4xl mx-auto flex-wrap">
        {scheduleData.map((day, idx) => (
          <button
            key={idx}
            onClick={() => setActiveDay(idx)}
            className={`px-6 py-3.5 rounded-[var(--radius-lg)] border text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer outline-none flex flex-col items-center gap-1 ${
              activeDay === idx
                ? 'bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-brand)] border-[var(--color-brand)] text-[var(--color-text-pri)] shadow-[0_0_20px_var(--color-brand-glow)] scale-105'
                : 'bg-[var(--color-bg-glass)] border-[var(--color-border)]/50 text-[var(--color-text-sec)] hover:border-[var(--color-brand)] hover:text-[var(--color-text-pri)]'
            }`}
          >
            <span className="font-heading uppercase tracking-wider">{day.dayLabel}</span>
            <span className="text-[10px] font-medium opacity-80 font-mono tracking-widest">{day.dateLabel}</span>
          </button>
        ))}
      </div>

      {/* Day Overview Description */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h3 className="text-lg font-bold font-heading text-[var(--color-brand)] tracking-wider uppercase mb-1">
          {scheduleData[activeDay].title}
        </h3>
        <p className="text-xs text-[var(--color-text-body)] italic">
          {scheduleData[activeDay].description}
        </p>

        {/* Day 2 Track Filter Toggle */}
        {activeDay === 1 && (
          <div className="flex justify-center items-center gap-2 mt-6 p-1.5 bg-[var(--color-bg-glass)] border border-[var(--color-border)] rounded-[var(--radius-pill)] w-fit mx-auto shadow-md">
            <button
              onClick={() => setDay2Filter('all')}
              className={`px-4 py-1.5 rounded-[var(--radius-pill)] text-[11px] font-semibold transition-all ${
                day2Filter === 'all'
                  ? 'bg-[var(--color-brand)] text-[var(--color-bg)] font-bold shadow-sm'
                  : 'text-[var(--color-text-sec)] hover:text-[var(--color-text-pri)]'
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setDay2Filter('athlon')}
              className={`px-4 py-1.5 rounded-[var(--radius-pill)] text-[11px] font-semibold transition-all ${
                day2Filter === 'athlon'
                  ? 'bg-[var(--color-brand)] text-[var(--color-bg)] font-bold shadow-sm'
                  : 'text-[var(--color-text-sec)] hover:text-[var(--color-text-pri)]'
              }`}
            >
              Athlon Track (College)
            </button>
            <button
              onClick={() => setDay2Filter('genesis')}
              className={`px-4 py-1.5 rounded-[var(--radius-pill)] text-[11px] font-semibold transition-all ${
                day2Filter === 'genesis'
                  ? 'bg-[var(--color-brand)] text-[var(--color-bg)] font-bold shadow-sm'
                  : 'text-[var(--color-text-sec)] hover:text-[var(--color-text-pri)]'
              }`}
            >
              Genesis Track (School)
            </button>
          </div>
        )}
      </div>

      {/* Timeline wrapper */}
      <div className="max-w-3xl mx-auto relative px-4">
        {/* Vertical Timeline bar line */}
        <div className="absolute left-[21px] sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-brand)] to-[var(--color-accent)] -translate-x-1/2 opacity-70" />

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeDay}-${day2Filter}`}
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col gap-6 w-full"
          >
            {currentDayEvents.map((event, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center w-full ${
                  idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline node dot */}
                <div className="absolute left-[5px] sm:left-1/2 w-4 h-4 rounded-full bg-[var(--color-brand)] border-2 border-[var(--color-bg)] shadow-[0_0_12px_var(--color-brand)] -translate-x-1/2 z-10" />

                {/* Card Container */}
                <div className="w-full sm:w-1/2 pl-10 sm:pl-0 sm:px-8">
                  <div className={`group flex flex-col bg-[var(--color-bg-glass)] border border-[var(--color-border)] hover:border-[var(--color-brand)] hover:shadow-[0_0_20px_var(--color-brand-glow)] p-5 rounded-[var(--radius-lg)] shadow-lg backdrop-blur-[12px] transition-all duration-300 ${
                    idx % 2 === 0 ? 'sm:text-right' : 'sm:text-left'
                  }`}>
                    {/* Header bar: time + category tag */}
                    <div className={`flex items-center gap-2 mb-1.5 ${
                      idx % 2 === 0 ? 'sm:justify-end' : 'sm:justify-start'
                    }`}>
                      <span className="text-[11px] font-bold text-[var(--color-brand)] tracking-widest font-mono uppercase bg-[var(--color-accent)]/30 px-2 py-0.5 rounded-[var(--radius-sm)] border border-[var(--color-border)]">
                        {event.time}
                      </span>
                      {event.category === 'genesis' && (
                        <span className="text-[9px] font-bold text-[var(--color-text-sec)] tracking-wider uppercase bg-[var(--color-accent)] px-2 py-0.5 rounded-full text-white">
                          Genesis Track
                        </span>
                      )}
                    </div>

                    <h4 className="text-base sm:text-lg font-bold font-heading text-[var(--color-text-pri)] tracking-wide mb-2 uppercase group-hover:text-[var(--color-brand)] transition-colors">
                      {event.title}
                    </h4>

                    <div className={`flex flex-wrap gap-x-3 gap-y-1 text-xs text-[var(--color-text-sec)] font-semibold mb-2 ${
                      idx % 2 === 0 ? 'sm:justify-end' : 'sm:justify-start'
                    }`}>
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] inline-block" />
                        {event.venue}
                      </span>
                      {event.duration && (
                        <>
                          <span className="hidden sm:inline opacity-40">|</span>
                          <span className="text-[var(--color-text-body)] font-normal font-mono">{event.duration}</span>
                        </>
                      )}
                    </div>

                    <p className="text-xs text-[var(--color-text-body)] italic opacity-90 leading-relaxed">
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
