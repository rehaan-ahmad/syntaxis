import { motion } from 'framer-motion';
import { Award, ShieldAlert, GraduationCap, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Reveal from '../components/ui/Reveal';
import { staggerContainerVariants, fadeUpVariants } from '../lib/animations';
import { SECTION_IDS, EXTERNAL_LINKS } from '../lib/constants';

export function GenesisTrack() {
  const juniorEvents = [
    {
      title: 'Eureka Pitch (Round 1 & Finals)',
      description: 'The flagship school innovation competition. Teams pitch everyday-life automation themes in Round 1 on Day 2, with shortlisted teams advancing to the extended Pitch Finals & Q&A on Day 3.',
      teamSize: '2-3 Students',
      prize: '[PRIZE POOL TBD]'
    },
    {
      title: 'Pythia Expo (Genesis Parallel Track)',
      description: 'Science-fair style exhibition on Day 3 where school teams showcase their physical prototypes and software models in a dedicated parallel zone.',
      teamSize: '2-3 Students',
      prize: '[PRIZE POOL TBD]'
    }
  ];

  return (
    <div 
      className="border-y border-[var(--color-border-gold)]"
      style={{
        background: 'linear-gradient(to bottom, rgba(17, 16, 14, 0.85), rgba(26, 22, 17, 0.9))',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)'
      }}
    >
      <section 
        id={SECTION_IDS.genesis} 
        className="max-w-7xl mx-auto px-6 py-20 sm:py-32 flex flex-col gap-16 relative z-10"
      >
        {/* Section Heading with Outreach Badge */}
        <Reveal className="flex flex-col items-center">
          {/* School outreach ribbon badge */}
          <Badge variant="brand" className="mb-4 bg-[var(--color-brand)]/20 border-[var(--color-brand)] text-[var(--color-brand)] px-4 py-1 tracking-[0.2em] font-semibold text-[10px] rounded-full animate-pulse shadow-[0_0_15px_var(--color-brand-glow)]">
            School Outreach Wing
          </Badge>
          <SectionHeading title="GENESIS TRACK" subtitle="FOR CLASSES 9 TO 12" />
        </Reveal>

        {/* 2-Column: Details and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Description info */}
          <Reveal className="flex flex-col gap-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[var(--color-brand)] tracking-wider">
              NURTURING JUNIOR GENIUSES
            </h3>
            <p className="text-base text-[var(--color-text-body)] leading-relaxed">
              Curated exclusively for students in grades 9 to 12, the <strong>Genesis Track</strong> provides school students an introduction to the inter-college tech ecosystem. This dedicated wing features the flagship <strong>Eureka Pitch</strong> across two rounds (Day 2 Round 1 & Day 3 Finals).
            </p>

            {/* Why Join Points */}
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-[var(--color-brand)]/15 border border-[var(--color-brand)]/40 rounded-[var(--radius-md)] flex items-center justify-center text-[var(--color-brand)]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-text-pri)] font-heading">STEM Foundations</h4>
                  <p className="text-xs text-[var(--color-text-body)] mt-1">Develop key problem-solving skills, basic logic constructs, and algorithms.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-[var(--color-brand)]/15 border border-[var(--color-brand)]/40 rounded-[var(--radius-md)] flex items-center justify-center text-[var(--color-brand)]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-text-pri)] font-heading">Mentorship</h4>
                  <p className="text-xs text-[var(--color-text-body)] mt-1">Receive guidance from RDEC tech mentors and college computer science professors.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-[var(--color-brand)]/15 border border-[var(--color-brand)]/40 rounded-[var(--radius-md)] flex items-center justify-center text-[var(--color-brand)]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-text-pri)] font-heading">5+ Partnered Schools</h4>
                  <p className="text-xs text-[var(--color-text-body)] mt-1">Join students from partnered schools across NCR in this exclusive track.</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Image Showcase — 4:3 aspect ratio per requirement */}
          <Reveal className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand)] to-transparent rounded-[var(--radius-lg)] blur-md opacity-25" />
            <img
              src={`${import.meta.env.BASE_URL}assets/events/placeholder-genesis.svg`}
              alt="[Genesis Track — 4:3 Banner Photo]"
              className="w-full max-w-md mx-auto aspect-[4/3] object-cover rounded-[var(--radius-lg)] border border-[var(--color-border-gold)] shadow-2xl relative z-10"
              loading="lazy"
            />
          </Reveal>
        </div>

        {/* Junior Event Cards Section */}
        <div className="flex flex-col gap-8 mt-4">
          <h4 className="text-xl font-bold uppercase font-heading text-center text-[var(--color-text-pri)] tracking-wider">
            GENESIS EVENT SLATE
          </h4>
          <Reveal
            variants={staggerContainerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto w-full"
          >
            {juniorEvents.map((event, idx) => (
              <motion.div key={idx} variants={fadeUpVariants}>
                <Card className="h-full border border-[var(--color-border-gold)] p-8 flex flex-col justify-between hover:shadow-[0_0_20px_var(--color-brand-glow)] transition-all duration-300">
                  <div className="flex flex-col gap-4">
                    <Badge variant="brand" className="w-fit">Junior Division</Badge>
                    <h5 className="text-2xl font-bold font-heading text-[var(--color-brand)] tracking-wide">
                      {event.title}
                    </h5>
                    <p className="text-sm text-[var(--color-text-body)] leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-[var(--color-text-sec)] font-bold tracking-wider mt-6 border-t border-[var(--color-border-gold)]/40 pt-4">
                    <span>TEAM: {event.teamSize}</span>
                    <span>PRIZE: {event.prize}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </Reveal>
        </div>

        {/* Eligibility criteria box and parent CTA */}
        <Reveal
          className="bg-[var(--color-bg)]/80 border border-[var(--color-border-gold)] p-6 sm:p-8 rounded-[var(--radius-lg)] flex flex-col md:flex-row justify-between items-center gap-6 max-w-4xl mx-auto w-full mt-4"
        >
          <div className="flex gap-4">
            <div className="w-10 h-10 shrink-0 bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/50 rounded-full flex items-center justify-center text-[var(--color-text-pri)]">
              <ShieldAlert className="w-5 h-5 text-[var(--color-brand)]" />
            </div>
            <div>
              <h5 className="font-bold text-[var(--color-text-pri)] font-heading">Eligibility Criteria</h5>
              <ul className="text-xs text-[var(--color-text-body)] mt-1 list-disc list-inside flex flex-col gap-1 pr-4">
                <li>Strictly limited to current class 9 to 12 students.</li>
                <li>Official school nomination letter or valid school ID card is mandatory.</li>
                <li>Zero registration fees for all qualified participants.</li>
              </ul>
            </div>
          </div>

          <a
            href={EXTERNAL_LINKS.pragma}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[var(--color-brand)] text-[var(--color-bg)] font-bold px-6 py-3 rounded-[var(--radius-md)] hover:scale-105 transition-transform duration-200 text-xs shrink-0 whitespace-nowrap"
          >
            <span>Learn More on Pragma</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </Reveal>

      </section>
    </div>
  );
}

export default GenesisTrack;
