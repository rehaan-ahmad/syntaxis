import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import RevealCountdown from '../components/ui/RevealCountdown';
import { useCountdown } from '../hooks/useCountdown';
import { SECTION_IDS, EXTERNAL_LINKS } from '../lib/constants';

interface SponsorLogoProps {
  tier: string;
  className?: string;
}

function SponsorLogo({ tier, className }: SponsorLogoProps) {
  return (
    <div className={`group relative flex items-center justify-center bg-[var(--color-bg-glass)] border border-[var(--color-border)] rounded-[var(--radius-md)] overflow-hidden transition-all duration-300 hover:border-[var(--color-brand)] hover:shadow-[0_0_15px_var(--color-brand-glow)] ${className}`}>
      {/* Grayscale overlay and hover transition */}
      <img
        src={`${import.meta.env.BASE_URL}assets/sponsors/placeholder-sponsor.svg`}
        alt={`[SPONSOR LOGO — ${tier}]`}
        className="w-full h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 scale-90"
        loading="lazy"
      />
      <div className="absolute bottom-1 right-2 text-[8px] font-bold text-[var(--color-text-sec)] opacity-40 group-hover:opacity-100 uppercase tracking-widest pointer-events-none select-none">
        {tier}
      </div>
    </div>
  );
}

export function Sponsors() {
  const revealDate = new Date('2026-08-15T00:00:00+05:30').getTime();
  const { isExpired } = useCountdown(revealDate);

  const fadeUpVariants = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' as const }
    }
  };

  return (
    <section
      id={SECTION_IDS.sponsors}
      className="max-w-7xl mx-auto px-6 py-20 sm:py-32 relative z-10 bg-[var(--color-bg)] flex flex-col gap-16"
    >
      {/* Section Heading */}
      <SectionHeading title="SPONSORSHIP & PARTNERSHIPS" subtitle="OFFICIAL TIERS & BRAND OUTREACH" />

      {/* Intro Description */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariants}
        className="text-center max-w-2xl mx-auto"
      >
        <p className="text-xs sm:text-sm text-[var(--color-text-body)] leading-relaxed">
          Partner with Syntaxis 2026 to showcase your brand to <strong>500–700+</strong> technical students across 25+ NCR colleges and partner school networks.
        </p>
      </motion.div>

      {/* Confirmed Partners Showcase Grid */}
      <div className="flex flex-col gap-10 max-w-5xl mx-auto w-full">
        <h3 className="text-center text-lg font-bold font-heading text-[var(--color-brand)] uppercase tracking-wider">
          Official Sponsorship Tiers & Partner Grid
        </h3>

        {!isExpired ? (
          <RevealCountdown
            targetDate={revealDate}
            label="Partner Reveal In"
          />
        ) : (
          <div className="flex flex-col gap-12 w-full">
            {/* Archimedes Tier (Title Partner Slot - 1 Slot) */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              className="flex flex-col items-center gap-4 text-center"
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs font-bold font-heading uppercase tracking-[0.25em] text-[var(--color-brand)]">
                  Archimedes Tier (Title Partner)
                </span>
                <span className="text-[10px] font-mono text-[var(--color-text-sec)]">
                  1 Slot Available | ₹1,20,000
                </span>
              </div>
              <SponsorLogo tier="Archimedes Title" className="w-72 h-36 md:w-80 md:h-40" />
            </motion.div>

            {/* Euclid Tier (Co-Sponsor Slots - 2 Slots) */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              className="flex flex-col items-center gap-4 text-center mt-2"
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs font-bold font-heading uppercase tracking-[0.25em] text-[var(--color-text-pri)]">
                  Euclid Tier (Co-Sponsors)
                </span>
                <span className="text-[10px] font-mono text-[var(--color-text-sec)]">
                  2 Slots Available | ₹70,000 Each
                </span>
              </div>
              <div className="flex flex-wrap gap-6 justify-center w-full">
                <SponsorLogo tier="Euclid Co-Sponsor 1" className="w-56 h-28 md:w-64 md:h-32" />
                <SponsorLogo tier="Euclid Co-Sponsor 2" className="w-56 h-28 md:w-64 md:h-32" />
              </div>
            </motion.div>
          </div>
        )}
      </div>

      {/* Become a Sponsor Lead Contact CTA */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariants}
        className="flex flex-col items-center text-center max-w-xl mx-auto mt-4 border border-[var(--color-brand)]/50 bg-[var(--color-bg-glass)] rounded-[var(--radius-xl)] p-8 backdrop-blur-[12px] shadow-[0_0_20px_var(--color-brand-glow)]"
      >
        <h4 className="text-xl font-extrabold font-heading text-[var(--color-text-pri)] tracking-wide mb-2 uppercase">
          Direct Sponsorship Lead Contact
        </h4>
        <p className="text-xs text-[var(--color-text-body)] mb-4 leading-relaxed">
          Contact our fest leadership to request official sponsorship proposals, customized deliverables, or discuss stall activations.
        </p>

        <div className="flex flex-col gap-1.5 text-xs text-[var(--color-text-sec)] font-semibold mb-6">
          <span className="text-[var(--color-brand)] font-bold">Rehaan Ahmad (Lead Organizer)</span>
          <span className="flex items-center justify-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-[var(--color-brand)]" />
            <a href="mailto:syntaxis@rdec.in" className="hover:underline">syntaxis@rdec.in</a> | <a href="mailto:rehaan24ai077@rdec.in" className="hover:underline">rehaan24ai077@rdec.in</a>
          </span>
          <span className="flex items-center justify-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[var(--color-brand)]" />
            +91 99108 34975
          </span>
        </div>

        <a
          href={EXTERNAL_LINKS.email}
          className="flex items-center gap-2 border border-[var(--color-brand)] bg-[var(--color-brand)] text-[var(--color-bg)] font-extrabold px-8 py-3.5 rounded-[var(--radius-md)] transition-all duration-200 text-xs shadow-lg hover:scale-105 hover:shadow-[0_0_25px_var(--color-brand-glow)] cursor-pointer select-none font-heading uppercase"
        >
          <Mail className="w-4 h-4" />
          <span>Connect With Fest Lead</span>
        </a>
      </motion.div>
    </section>
  );
}

export default Sponsors;
