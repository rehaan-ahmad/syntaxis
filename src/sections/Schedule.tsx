import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { SECTION_IDS } from '../lib/constants';

interface TimelineItem {
  time: string;
  title: string;
  discipline: string;
  venue: string;
  notes?: string;
  category?: 'all' | 'main' | 'hackathon' | 'code' | 'workshop' | 'genesis' | 'esports' | 'talk';
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
  const [day2Filter, setDay2Filter] = useState<'all' | 'hackathon' | 'genesis' | 'arena'>('all');

  const scheduleData: DaySchedule[] = [
    {
      dayLabel: 'Day 1: Thursday',
      dateLabel: 'Oct 29, 2026',
      title: 'Inauguration, Techne & Code Trilogy Round 1',
      description: 'Day 1 establishes the fest foundation: participant check-in, official inauguration ceremony, Google Cloud skill badge workshop, and Heureka problem solving.',
      events: [
        {
          time: '08:30 AM – 10:00 AM',
          title: 'Participant Check-In & Badge Collection',
          discipline: 'General Registration',
          venue: 'Main Gate & Reception',
          notes: 'Registration verification, official lanyard & welcome badge distribution, and campus venue directions.',
          category: 'main'
        },
        {
          time: '10:00 AM – 11:30 AM',
          title: 'The Kindling (Inauguration Ceremony)',
          discipline: 'Fest Ceremony',
          venue: 'Main Auditorium',
          notes: 'Lamp lighting ceremony, keynote welcome address by institute leadership, and the official unveiling of Syntaxis 2026.',
          category: 'main'
        },
        {
          time: '11:30 AM – 01:30 PM',
          title: 'Techne (Google Cloud Skill Badges)',
          discipline: 'Cloud & DevOps Workshop',
          venue: 'Seminar Hall',
          notes: 'Hands-on cloud architecture workshop focused on earning Google Cloud Skill Badges, Docker containers, and live deployment.',
          category: 'workshop'
        },
        {
          time: '01:30 PM – 04:30 PM',
          title: 'Code Trilogy — Round 1: HEUREKA',
          discipline: 'DSA & Problem Solving (200 → 100 Cut)',
          venue: 'B-Block Computer Labs',
          notes: 'High-octane algorithmic problem-solving sprint. Top 100 fastest & most optimal problem solvers advance to Round 2 (Agon).',
          category: 'code'
        },
        {
          time: '04:30 PM – 05:30 PM',
          title: 'Day 1 Closing & R2 Qualifier Announcements',
          discipline: 'Announcements & Networking',
          venue: 'Main Auditorium',
          notes: 'Declaration of Heureka qualifiers advancing to Agon, Day 1 closing remarks, and technical networking mixer.',
          category: 'main'
        }
      ]
    },
    {
      dayLabel: 'Day 2: Friday',
      dateLabel: 'Oct 30, 2026',
      title: 'Archithon 24H Kickoff, Genesis, Pantheon & Rhesis',
      description: 'Day 2 ignites the 24-hour Archithon development clock, school Genesis Track presentations, Pantheon mobile esports battles, and Rhesis keynote discourses.',
      events: [
        {
          time: '09:00 AM – 10:00 AM',
          title: 'Archithon: Problem Statement Release',
          discipline: 'Hackathon Orientation',
          venue: 'Main Auditorium',
          notes: 'Official release of the multi-track hackathon problem statements, evaluation criteria, and mentor introductions.',
          category: 'hackathon'
        },
        {
          time: '10:00 AM (Starts)',
          title: 'Archithon: 24-Hour Hackathon Hacking Window',
          discipline: 'Full-Stack / AI Development',
          venue: 'Hackathon Arenas (B-Block)',
          notes: '24-hour non-stop hacking window begins! Teams design architecture, code full-stack & AI pipelines, and consult industry mentors.',
          category: 'hackathon'
        },
        {
          time: '11:00 AM – 01:30 PM',
          title: 'Genesis Track (incl. Eureka Pitch)',
          discipline: 'School Program (Classes 9–12)',
          venue: 'Seminar Hall',
          notes: 'Dedicated school outreach track where classes 9–12 students pitch automation and STEM ideas in the Eureka Pitch round.',
          category: 'genesis'
        },
        {
          time: '02:30 PM – 05:30 PM',
          title: 'Pantheon Games',
          discipline: 'Mobile Esports (BGMI & FF Max Squads)',
          venue: 'Gaming Zone (Student Center)',
          notes: 'Squad arena tournament showdown for BGMI and FreeFire Max. Compete for gaming prestige, in-game currency, and vouchers.',
          category: 'esports'
        },
        {
          time: '05:30 PM – 07:00 PM',
          title: 'Rhesis',
          discipline: 'Keynote Tech-Talks & Q&A',
          venue: 'Main Auditorium',
          notes: 'Visionary industry tech-leaders deliver keynotes and hold live interactive discourse on next-gen tech engineering.',
          category: 'talk'
        },
        {
          time: 'Overnight Session',
          title: 'Archithon: Continuous Dev & Midnight Reviews',
          discipline: 'Overnight Campus Stay',
          venue: 'Hackathon Arenas (B-Block)',
          notes: 'Overnight stay in campus arenas. Midnight mentor checkpoint evaluations, developer refueling, and continuous build progress.',
          category: 'hackathon'
        }
      ]
    },
    {
      dayLabel: 'Day 3: Saturday',
      dateLabel: 'Oct 31, 2026',
      title: 'Hackathon Freeze, Agon, Katharsis & Apotheosis',
      description: 'Day 3 brings the grand crescendo: Archithon repo freeze, Pythia Expo jury defense, Code Trilogy finals, and the Apotheosis valediction ceremony.',
      events: [
        {
          time: '10:00 AM – 04:00 PM',
          title: 'Pythia Expo & The Tribunal',
          discipline: 'Project Exhibition & Hackathon Judging',
          venue: 'Exhibition Hall & B-Block',
          notes: 'Public project exhibition open to all attendees, accompanied by The Tribunal live jury defense and prototype evaluations.',
          category: 'hackathon'
        },
        {
          time: '11:00 AM (Deadline)',
          title: 'Archithon: Code Freeze & Repo Submissions',
          discipline: 'Submission Deadline',
          venue: 'Custom Online Form',
          notes: 'Hard development deadline. All repository commits, live preview deployments, and pitch deck links freeze.',
          category: 'hackathon'
        },
        {
          time: '11:30 AM – 01:30 PM',
          title: 'Code Trilogy — Round 2: AGON',
          discipline: 'Speed CP Sprint (100 → 50 Cut)',
          venue: 'B-Block Computer Labs',
          notes: 'Speed algorithmic contest on HackerRank. 100 qualifiers compete under intense time pressure for the top 50 finals spots.',
          category: 'code'
        },
        {
          time: '01:30 PM – 02:30 PM',
          title: 'Lunch & Finalist Briefing',
          discipline: 'Break',
          venue: 'Central Cafeteria',
          notes: 'Lunch interval and technical setup briefing for the top 50 qualifiers entering the Katharsis live debugging finals.',
          category: 'main'
        },
        {
          time: '02:30 PM – 04:00 PM',
          title: 'Code Trilogy — Round 3: KATHARSIS',
          discipline: 'Real-Time Debugging Finals',
          venue: 'B-Block Computer Labs',
          notes: 'Ultimate debugging championship duel. Identifying, patching, and stabilizing complex broken codebases under ticking clocks.',
          category: 'code'
        },
        {
          time: '04:30 PM – 06:30 PM',
          title: 'Apotheosis (Valedictory & Prize Distribution)',
          discipline: 'Fest Finale & Awarding',
          venue: 'Main Auditorium',
          notes: 'Grand closing ceremony, felicitation of partners, and prize distribution celebrating champions across all tracks.',
          category: 'main'
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
    if (day2Filter === 'hackathon') return event.category === 'hackathon';
    if (day2Filter === 'genesis') return event.category === 'genesis';
    if (day2Filter === 'arena') return event.category === 'esports' || event.category === 'talk';
    return true;
  });

  return (
    <section
      id={SECTION_IDS.schedule}
      className="max-w-7xl mx-auto px-6 py-20 sm:py-32 relative z-10"
    >
      {/* Section Heading */}
      <SectionHeading title="EVENT SCHEDULE" subtitle="OFFICIAL 3-DAY MASTER TIMELINE" />

      {/* Venues Pill Strip */}
      <div className="flex flex-wrap justify-center items-center gap-2 max-w-4xl mx-auto mb-8 text-[11px] font-mono text-[var(--color-text-sec)]">
        <span className="px-3 py-1 rounded-full bg-[var(--color-bg-glass)] border border-[var(--color-border)]">🏛️ Main Auditorium</span>
        <span className="px-3 py-1 rounded-full bg-[var(--color-bg-glass)] border border-[var(--color-border)]">💻 B-Block Computer Labs</span>
        <span className="px-3 py-1 rounded-full bg-[var(--color-bg-glass)] border border-[var(--color-border)]">🎤 Seminar Hall</span>
        <span className="px-3 py-1 rounded-full bg-[var(--color-bg-glass)] border border-[var(--color-border)]">🎮 Designated Gaming Zone</span>
      </div>

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
          <div className="flex flex-wrap justify-center items-center gap-2 mt-6 p-1.5 bg-[var(--color-bg-glass)] border border-[var(--color-border)] rounded-[var(--radius-pill)] w-fit mx-auto shadow-md">
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
              onClick={() => setDay2Filter('hackathon')}
              className={`px-4 py-1.5 rounded-[var(--radius-pill)] text-[11px] font-semibold transition-all ${
                day2Filter === 'hackathon'
                  ? 'bg-[var(--color-brand)] text-[var(--color-bg)] font-bold shadow-sm'
                  : 'text-[var(--color-text-sec)] hover:text-[var(--color-text-pri)]'
              }`}
            >
              Archithon (24H)
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
            <button
              onClick={() => setDay2Filter('arena')}
              className={`px-4 py-1.5 rounded-[var(--radius-pill)] text-[11px] font-semibold transition-all ${
                day2Filter === 'arena'
                  ? 'bg-[var(--color-brand)] text-[var(--color-bg)] font-bold shadow-sm'
                  : 'text-[var(--color-text-sec)] hover:text-[var(--color-text-pri)]'
              }`}
            >
              Esports & Keynote
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
                    {/* Header bar: time + discipline tag */}
                    <div className={`flex flex-wrap items-center gap-2 mb-2 ${
                      idx % 2 === 0 ? 'sm:justify-end' : 'sm:justify-start'
                    }`}>
                      <span className="text-[11px] font-bold text-[var(--color-brand)] tracking-widest font-mono uppercase bg-[var(--color-accent)]/30 px-2 py-0.5 rounded-[var(--radius-sm)] border border-[var(--color-border)]">
                        {event.time}
                      </span>
                      {event.discipline && (
                        <span className="text-[10px] font-semibold text-[var(--color-text-pri)] tracking-wide bg-[var(--color-accent)]/60 border border-[var(--color-border-gold)]/40 px-2.5 py-0.5 rounded-full">
                          {event.discipline}
                        </span>
                      )}
                    </div>

                    <h4 className="text-base sm:text-lg font-bold font-heading text-[var(--color-text-pri)] tracking-wide mb-2 uppercase group-hover:text-[var(--color-brand)] transition-colors">
                      {event.title}
                    </h4>

                    <div className={`flex flex-wrap gap-x-3 gap-y-1 text-xs text-[var(--color-text-sec)] font-semibold mb-2 ${
                      idx % 2 === 0 ? 'sm:justify-end' : 'sm:justify-start'
                    }`}>
                      <span className="flex items-center gap-1.5 text-[var(--color-brand)] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] inline-block shadow-[0_0_8px_var(--color-brand)]" />
                        {event.venue}
                      </span>
                    </div>

                    {event.notes && (
                      <p className="text-xs text-[var(--color-text-body)] italic opacity-90 leading-relaxed">
                        {event.notes}
                      </p>
                    )}
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
