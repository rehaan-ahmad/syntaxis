import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { ArrowRight, Calendar, Compass, Ticket, Check, Sparkles, Tag } from 'lucide-react';
import CountdownTimer from '../components/ui/CountdownTimer';
import { SECTION_IDS, EXTERNAL_LINKS, FEST_INFO, REVEAL_DATE, PASS_PRICES } from '../lib/constants';
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
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-14 text-center">
        
        {/* Title Header */}
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="flex flex-col items-center gap-3"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading tracking-wider leading-tight uppercase">
            {FEST_INFO.name} — PASSES & REGISTRATION
          </h2>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[var(--color-text-pri)]/90 opacity-90">
            <Calendar className="w-4 h-4" />
            <span>{FEST_INFO.dates} | {FEST_INFO.venue}</span>
          </div>
        </motion.div>

        {/* Countdown Timer Block */}
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="w-full max-w-4xl bg-bg/30 border border-white/10 p-6 rounded-[var(--radius-lg)] shadow-2xl backdrop-blur-sm"
        >
          <CountdownTimer />
        </motion.div>

        {/* Pass Pricing Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="w-full flex flex-col gap-6"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[var(--color-brand)] font-heading">
              <Ticket className="w-4 h-4" />
              <span>OFFICIAL DAY PASSES & PACKAGES</span>
            </div>
            <span className="text-[11px] font-mono text-white/70 bg-black/20 px-3 py-1 rounded-full border border-white/10">
              * All pass prices are subject to additional {PASS_PRICES.taxRate} tax at checkout
            </span>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-2">
            {PASS_PRICES.passes.map((pass) => (
              <div 
                key={pass.id}
                className={`relative flex flex-col justify-between p-6 rounded-[var(--radius-xl)] backdrop-blur-md transition-all duration-300 ${
                  pass.popular 
                    ? 'bg-gradient-to-b from-[var(--color-brand)]/30 via-bg/80 to-bg/90 border-2 border-[var(--color-brand)] shadow-[0_0_30px_var(--color-brand-glow)] scale-[1.02]'
                    : 'bg-bg/40 border border-white/15 hover:border-[var(--color-brand)]/60 shadow-lg'
                }`}
              >
                {pass.badge && (
                  <span className="absolute -top-3 right-4 bg-[var(--color-brand)] text-[var(--color-bg)] text-[9px] font-black uppercase px-3 py-1 rounded-full tracking-widest flex items-center gap-1 shadow-md">
                    <Sparkles className="w-3 h-3" /> {pass.badge}
                  </span>
                )}

                <div>
                  <h3 className="text-lg font-bold font-heading uppercase text-white tracking-wide">
                    {pass.title}
                  </h3>
                  <div className="my-3 flex items-baseline gap-2 border-b border-white/10 pb-3">
                    <span className="text-3xl font-extrabold font-mono text-[var(--color-brand)]">{pass.price}</span>
                    <span className="text-[10px] text-white/70 font-mono">+ 3% tax</span>
                  </div>

                  {pass.rdecDiscount && (
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-[var(--radius-sm)] mb-3">
                      <Tag className="w-3.5 h-3.5 shrink-0" />
                      <span>{pass.rdecDiscount}</span>
                    </div>
                  )}

                  <p className="text-xs text-white/80 leading-relaxed mb-4">
                    {pass.description}
                  </p>

                  {pass.isGaming && pass.gamingTitles && (
                    <div className="flex flex-col gap-1.5 my-3 bg-black/20 p-3 rounded-[var(--radius-md)] border border-white/10">
                      {pass.gamingTitles.map((g, idx) => (
                        <div key={idx} className="flex justify-between items-center text-xs font-mono">
                          <span className="text-white/90 font-bold">• {g.title}</span>
                          <span className="text-[var(--color-brand)] font-bold">{g.price} <span className="text-[9px] text-white/60">+ 3%</span></span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <a 
                  href={EXTERNAL_LINKS.pragma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 w-full py-2.5 px-4 rounded-[var(--radius-md)] text-xs font-bold uppercase tracking-wider text-center font-heading transition-all duration-200 flex items-center justify-center gap-2 ${
                    pass.popular
                      ? 'bg-[var(--color-brand)] text-[var(--color-bg)] hover:scale-105 hover:shadow-[0_0_20px_var(--color-brand-glow)]'
                      : 'border border-[var(--color-brand)] text-[var(--color-brand)] hover:bg-[var(--color-brand)] hover:text-[var(--color-bg)]'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Get Pass on Pragma</span>
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="flex flex-wrap gap-4 justify-center items-center mt-2"
        >
          {/* Gold button */}
          <a 
            href={EXTERNAL_LINKS.pragma}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[var(--color-brand)] text-[var(--color-bg)] font-bold px-8 py-3.5 rounded-[var(--radius-md)] hover:scale-105 hover:shadow-[0_0_25px_var(--color-brand-glow)] transition-all duration-200 text-sm uppercase tracking-wider font-heading"
          >
            <span>Proceed to Pragma Portal</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          
          {/* Scroll link */}
          <ScrollLink 
            to={isRevealed ? SECTION_IDS.events : SECTION_IDS.about}
            smooth={true}
            duration={600}
            offset={-80}
            className="flex items-center gap-2 border border-white text-white hover:bg-white hover:text-[var(--color-accent)] font-semibold px-8 py-3.5 rounded-[var(--radius-md)] transition-all duration-200 cursor-pointer text-sm uppercase tracking-wider font-heading text-center"
          >
            <Compass className="w-4 h-4" />
            <span>{isRevealed ? "View Events Sprint" : "View Details"}</span>
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
          * All registrations and pass issuances are powered by Pragma Event Management System. Prices subject to 3% tax.
        </motion.p>
      </div>
    </section>
  );
}

export default Register;
