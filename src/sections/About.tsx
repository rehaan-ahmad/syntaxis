import { motion } from 'framer-motion';
import { Zap, Users, Award } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Reveal from '../components/ui/Reveal';
import { staggerContainerVariants, fadeUpVariants } from '../lib/animations';
import { SECTION_IDS, FEST_INFO } from '../lib/constants';

export function About() {
  const stats = [
    { value: FEST_INFO.colleges, label: 'NCR Colleges Participating' },
    { value: FEST_INFO.participants, label: 'Expected Participants' },
    { value: '3 Days', label: 'Tech & Non-Tech Events' }
  ];

  const pillars = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Pushing the boundaries of creativity and technology. Bringing together coders, designers, and thinkers to build forward-looking solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Building bridges between students from 25+ campuses. Exchanging ideas, networking with industry veterans, and hacking in team battles.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Celebrating high standards of performance and competitive spirit. Striving for precision, speed, and clean implementations in every track.'
    }
  ];

  return (
    <div className="bg-[var(--color-bg-glass)] backdrop-blur-[12px] border-y border-[var(--color-border)]">
      <section
        id={SECTION_IDS.about}
        className="max-w-7xl mx-auto px-6 py-20 sm:py-32 flex flex-col gap-16 relative z-10"
      >
        {/* Section Heading */}
        <Reveal>
          <SectionHeading title="ABOUT SYNTAXIS" subtitle="OUR IDENTITY" />
        </Reveal>

        {/* Stats Grid */}
        <Reveal
          variants={staggerContainerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={fadeUpVariants}
            >
              <Card className="flex flex-col items-center justify-center text-center p-8 border border-[var(--color-accent)] hover:border-[var(--color-brand)] transition-colors duration-300">
                <span className="text-4xl sm:text-5xl font-black text-[var(--color-brand)] mb-2 drop-shadow-[0_0_10px_var(--color-brand-glow)]">
                  {stat.value}
                </span>
                <span className="text-sm font-semibold text-[var(--color-text-sec)] uppercase tracking-wider">
                  {stat.label}
                </span>
              </Card>
            </motion.div>
          ))}
        </Reveal>

        {/* Description and Image grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-4">
          {/* Narrative */}
          <Reveal className="flex flex-col gap-6 text-[var(--color-text-body)]">
            <p className="text-lg sm:text-xl font-heading text-[var(--color-text-pri)] leading-relaxed italic text-gold">
              Inspired by the Greek root representing order, arrangement, and systematic coordination.
            </p>
            <p className="text-base leading-relaxed">
              SYNTAXIS 2026 is the flag-bearer tech event of R.D. Engineering College (RDEC), Ghaziabad. We host NCR’s sharpest programmers, creative designers, logical debaters, and gaming veterans over three days of rigorous competition.
            </p>
            <p className="text-base leading-relaxed">
              From automated hackathons and cybersecurity drills to workshops on Artificial Intelligence and non-technical creative sprints, the festival provides a platform for participants to showcase their expertise, connect with tech leaders, and win massive prizes.
            </p>
          </Reveal>

          {/* Atmosphere Image Showcase */}
          <Reveal className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-accent)] to-transparent rounded-[var(--radius-lg)] blur-md opacity-20" />
            <img
              src={`${import.meta.env.BASE_URL}assets/about-atmosphere.PNG`}
              alt="Syntaxis Fest Atmosphere"
              className="w-full h-auto object-cover rounded-[var(--radius-lg)] border border-[var(--color-border)] shadow-2xl relative z-10"
              loading="lazy"
            />
          </Reveal>
        </div>

        {/* Core Pillars */}
        <div className="flex flex-col gap-8 mt-8">
          <h3 className="text-2xl font-bold uppercase font-heading text-center text-[var(--color-text-pri)] tracking-wider">
            THE THREE PILLARS
          </h3>
          <Reveal
            variants={staggerContainerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          >
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpVariants}
              >
                <Card className="h-full border border-[var(--color-border)] p-6 flex flex-col gap-4 hover:shadow-[0_0_20px_rgba(93,28,52,0.25)] transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/50 rounded-[var(--radius-md)] text-[var(--color-brand)] mb-2">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold font-heading text-[var(--color-text-pri)] tracking-wide">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-[var(--color-text-body)] leading-relaxed">
                    {pillar.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </Reveal>
        </div>

      </section>
    </div>
  );
}

export default About;
