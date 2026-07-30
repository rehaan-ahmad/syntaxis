import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { ChevronDown, ArrowRight } from 'lucide-react';
import CountdownTimer from '../components/ui/CountdownTimer';
import { SECTION_IDS, EXTERNAL_LINKS, FEST_INFO, REVEAL_DATE } from '../lib/constants';
import { useIsRevealed } from '../hooks/useCountdown';

export function Hero() {
  const isRevealed = useIsRevealed(REVEAL_DATE);
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    },
  };

  return (
    <section
      id={SECTION_IDS.home}
      className="min-h-screen flex flex-col justify-center items-center relative z-10 px-4 pt-16 select-none"
    >
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="w-full max-w-6xl mx-auto text-center flex flex-col items-center gap-6 sm:gap-8"
      >
        {/* Top Header Logos Bar (Top of Page) */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-6xl mx-auto px-2 sm:px-6 mb-6 sm:mb-10 flex flex-col items-center gap-4"
        >
          {/* Banner Image Replacing College, AKTU, NAAC logos */}
          <img
            src={`${import.meta.env.BASE_URL}assets/logo/college-banner.png`}
            alt="College Banner"
            className="w-full max-h-48 object-contain hover:scale-105 transition-transform"
          />

          {/* Centered Syntaxis Logo below banner */}
          <img
            src={`${import.meta.env.BASE_URL}assets/logo/syntaxis-logo.png`}
            alt="Syntaxis Logo"
            className="h-36 sm:h-72 md:h-108 w-auto object-contain hover:scale-105 transition-transform"
          />
        </motion.div>

        {/* Fest Title */}
        <motion.div variants={itemVariants} className="flex flex-col items-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-widest text-[var(--color-text-pri)] font-heading leading-none">
            SYNTAXIS
          </h1>
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.25em] text-[var(--color-brand)] font-heading mt-2">
            2026
          </span>
        </motion.div>

        {/* Tagline / Subtitle */}
        <motion.div variants={itemVariants} className="flex flex-col gap-2 max-w-2xl">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--color-text-pri)] tracking-wide">
            {FEST_INFO.name} — PREMIER TECH FEST
          </p>
          <p className="text-sm sm:text-base text-[var(--color-text-sec)] font-medium tracking-widest uppercase">
            {FEST_INFO.dates} | {FEST_INFO.venue}
          </p>
          <p className="text-xs sm:text-sm text-[var(--color-text-body)] tracking-wide max-w-xl mx-auto mt-2 italic">
            Connecting {FEST_INFO.colleges} NCR Colleges | {FEST_INFO.participants} Participants
          </p>
        </motion.div>

        {/* Countdown Timer Block */}
        <motion.div
          variants={itemVariants}
          className="w-full bg-[var(--color-bg-glass)] border border-[var(--color-border)] p-4 sm:p-6 rounded-[var(--radius-lg)] shadow-2xl backdrop-blur-md"
        >
          <CountdownTimer />
        </motion.div>

        {/* Action Call-to-actions */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center items-center mt-2">
          {/* Primary CTA (Gold) */}
          <a
            href={EXTERNAL_LINKS.pragma}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[var(--color-brand)] text-[var(--color-bg)] font-bold px-8 py-3.5 rounded-[var(--radius-md)] hover:scale-105 hover:shadow-[0_0_20px_var(--color-brand-glow)] transition-all duration-200 whitespace-nowrap text-sm"
          >
            <span>Register on Pragma</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Secondary CTA (Outlined accent) */}
          <ScrollLink
            to={isRevealed ? SECTION_IDS.events : SECTION_IDS.about}
            smooth={true}
            duration={600}
            offset={-80}
            className="border border-[var(--color-accent)] text-[var(--color-text-pri)] font-semibold px-8 py-3.5 rounded-[var(--radius-md)] hover:bg-[var(--color-accent)] hover:text-white transition-all duration-200 cursor-pointer whitespace-nowrap text-sm text-center"
          >
            {isRevealed ? "Explore Events" : "Learn More"}
          </ScrollLink>
        </motion.div>

        {/* Bouncing Scroll indicator at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 flex flex-col items-center justify-center cursor-pointer"
        >
          <ScrollLink to={SECTION_IDS.about} smooth={true} duration={600} offset={-80} className="flex flex-col items-center gap-1 group">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[var(--color-text-sec)] group-hover:text-[var(--color-text-pri)] transition-colors">
              SCROLL DOWN
            </span>
            <ChevronDown className="w-5 h-5 text-[var(--color-brand)] animate-bounce mt-1" />
          </ScrollLink>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;