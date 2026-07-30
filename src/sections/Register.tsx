import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { ArrowRight, Calendar, Compass } from 'lucide-react';
import CountdownTimer from '../components/ui/CountdownTimer';
import { SECTION_IDS, EXTERNAL_LINKS, FEST_INFO, REVEAL_DATE } from '../lib/constants';
import { useIsRevealed } from '../hooks/useCountdown';

export function Register() {
  const isRevealed = useIsRevealed(REVEAL_DATE);

  const fadeUpVariants = {
    initial: { opacity: 0, y: 35 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' as const }
    }
  };

  return (
    <section 
      id={SECTION_IDS.register} 
      className="relative z-10 bg-[var(--color-accent)] text-[var(--color-text-pri)] py-20 sm:py-28 select-none border-y border-[var(--color-accent)]/80"
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-10 text-center">
        
        {/* Title Header */}
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="flex flex-col items-center gap-3"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading tracking-wider leading-tight uppercase">
            {FEST_INFO.name} — REGISTER NOW
          </h2>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[var(--color-text-pri)]/90 opacity-90">
            <Calendar className="w-4 h-4" />
            <span>{FEST_INFO.dates} | {FEST_INFO.venue}</span>
          </div>
        </motion.div>

        {/* Countdown Timer Block (No Glass overlay in this block, or simple high contrast container) */}
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="w-full bg-bg/30 border border-white/10 p-6 rounded-[var(--radius-lg)] shadow-2xl backdrop-blur-sm"
        >
          <CountdownTimer />
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="flex flex-wrap gap-4 justify-center items-center"
        >
          {/* Gold button */}
          <a 
            href={EXTERNAL_LINKS.pragma}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[var(--color-brand)] text-[var(--color-bg)] font-bold px-8 py-3.5 rounded-[var(--radius-md)] hover:scale-105 hover:shadow-[0_0_25px_var(--color-brand-glow)] transition-all duration-200 text-sm uppercase tracking-wider font-heading"
          >
            <span>Register on Pragma</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          
          {/* Scroll link (white outline button) */}
          <ScrollLink 
            to={isRevealed ? SECTION_IDS.events : SECTION_IDS.about}
            smooth={true}
            duration={600}
            offset={-80}
            className="flex items-center gap-2 border border-white text-white hover:bg-white hover:text-[var(--color-accent)] font-semibold px-8 py-3.5 rounded-[var(--radius-md)] transition-all duration-200 cursor-pointer text-sm uppercase tracking-wider font-heading text-center"
          >
            <Compass className="w-4 h-4" />
            <span>{isRevealed ? "View Events" : "View Details"}</span>
          </ScrollLink>
        </motion.div>

        {/* Powered by Pragma footnote */}
        <motion.p 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="text-[10px] sm:text-xs font-semibold tracking-widest text-white/60 uppercase"
        >
          * Registration operations are powered by Pragma Event Management System.
        </motion.p>
      </div>
    </section>
  );
}

export default Register;
