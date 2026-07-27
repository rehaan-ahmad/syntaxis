import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Mail } from 'lucide-react';
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
        alt={`[SPONSOR LOGO — replace with actual — ${tier}]`}
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

  const [isMobile, setIsMobile] = useState(false);
  const [emblaRef] = useEmblaCarousel({ loop: true, slidesToScroll: 1 }, [
    Autoplay({ delay: 2500, stopOnInteraction: false })
  ]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fadeUpVariants = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const }
    }
  };

  const associateSponsors = Array.from({ length: 6 }).map((_, idx) => `Tier 5 Associate ${idx + 1}`);

  return (
    <section
      id={SECTION_IDS.sponsors}
      className="max-w-7xl mx-auto px-6 py-20 sm:py-32 relative z-10 bg-[var(--color-bg)] flex flex-col gap-16"
    >
      {/* Section Heading */}
      <SectionHeading title="FEST SPONSORS" subtitle="OUR PARTNERS" />

      {!isExpired ? (
        <RevealCountdown
          targetDate={revealDate}
          label="Sponsors Reveal In"
        />
      ) : (
        <>
          {/* Sponsors Layout hierarchy */}
          <div className="flex flex-col gap-12 max-w-5xl mx-auto w-full">

            {/* Tier 1: Title Sponsor (1 Logo) */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              className="flex flex-col items-center gap-4 text-center"
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-brand)]">Title Sponsor</span>
              <SponsorLogo tier="Title" className="w-72 h-36 md:w-80 md:h-40" />
            </motion.div>

            {/* Tier 2: Platinum Sponsors (Up to 2) */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              className="flex flex-col items-center gap-4 text-center mt-4"
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-text-pri)]">Platinum Partners</span>
              <div className="flex flex-wrap gap-6 justify-center w-full">
                <SponsorLogo tier="Platinum" className="w-56 h-28 md:w-64 md:h-32" />
                <SponsorLogo tier="Platinum" className="w-56 h-28 md:w-64 md:h-32" />
              </div>
            </motion.div>

            {/* Tier 3: Gold Sponsors (Up to 3) */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              className="flex flex-col items-center gap-4 text-center mt-4"
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-brand)]">Gold Partners</span>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-center w-full max-w-3xl">
                <SponsorLogo tier="Gold" className="w-full h-24 md:h-28" />
                <SponsorLogo tier="Gold" className="w-full h-24 md:h-28" />
                <SponsorLogo tier="Gold" className="w-full h-24 md:h-28 col-span-2 md:col-span-1 max-w-[240px] md:max-w-none mx-auto w-full" />
              </div>
            </motion.div>

            {/* Tier 4: Silver Sponsors (Up to 4) */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              className="flex flex-col items-center gap-4 text-center mt-4"
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-text-sec)]">Silver Partners</span>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 justify-center w-full max-w-4xl">
                <SponsorLogo tier="Silver" className="w-full h-20 md:h-24" />
                <SponsorLogo tier="Silver" className="w-full h-20 md:h-24" />
                <SponsorLogo tier="Silver" className="w-full h-20 md:h-24" />
                <SponsorLogo tier="Silver" className="w-full h-20 md:h-24" />
              </div>
            </motion.div>

            {/* Tier 5: Associate Sponsors (Up to 6) */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              className="flex flex-col items-center gap-4 text-center mt-4"
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-text-sec)]/80">Associate Sponsors</span>

              {isMobile ? (
                <div className="w-full overflow-hidden" ref={emblaRef}>
                  <div className="flex -ml-4">
                    {associateSponsors.map((_, idx) => (
                      <div key={idx} className="flex-[0_0_40%] min-w-0 pl-4">
                        <SponsorLogo tier="Associate" className="w-full h-16" />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 justify-center w-full max-w-5xl">
                  {associateSponsors.map((_, idx) => (
                    <SponsorLogo key={idx} tier="Associate" className="w-full h-16 md:h-20" />
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}

      {/* Become a Sponsor CTA */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariants}
        className="flex flex-col items-center text-center max-w-md mx-auto mt-8 border border-[var(--color-border)] bg-[var(--color-bg-glass)] rounded-[var(--radius-lg)] p-6 backdrop-blur-sm"
      >
        <h4 className="text-lg font-bold font-heading text-[var(--color-text-pri)] tracking-wide mb-2 uppercase">
          Partner With Us
        </h4>
        <p className="text-xs text-[var(--color-text-body)] mb-6 leading-relaxed">
          Expose your brand to 700-900 tech-focused students and future developers from NCR colleges. Let's build collaborative outreach campaigns.
        </p>
        <a
          href={EXTERNAL_LINKS.email}
          className="flex items-center gap-2 border border-[var(--color-brand)] text-[var(--color-brand)] hover:bg-[var(--color-brand)] hover:text-[var(--color-bg)] font-bold px-6 py-3 rounded-[var(--radius-md)] transition-all duration-200 text-xs shadow-md cursor-pointer select-none outline-none font-heading uppercase"
        >
          <Mail className="w-4 h-4" />
          <span>Become a Sponsor</span>
        </a>
      </motion.div>
    </section>
  );
}

export default Sponsors;
