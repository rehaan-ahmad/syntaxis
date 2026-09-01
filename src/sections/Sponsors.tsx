import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Mail, CheckCircle2, ShieldCheck, Phone, Sparkles } from 'lucide-react';
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
      transition: { duration: 0.7, ease: 'easeOut' as const }
    }
  };

  const associateSponsors = Array.from({ length: 6 }).map((_, idx) => `Associate Sponsor ${idx + 1}`);

  return (
    <section
      id={SECTION_IDS.sponsors}
      className="max-w-7xl mx-auto px-6 py-20 sm:py-32 relative z-10 bg-[var(--color-bg)] flex flex-col gap-16"
    >
      {/* Section Heading */}
      <SectionHeading title="SPONSORSHIP & PARTNERSHIPS" subtitle="OFFICIAL TIERS & BRAND OUTREACH" />

      {/* Official Sponsorship Tiers Breakdown Cards */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariants}
        className="flex flex-col gap-8 w-full"
      >
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-bold font-heading text-[var(--color-text-pri)] tracking-wider uppercase mb-2">
            Sponsorship Tier Packages
          </h3>
          <p className="text-xs text-[var(--color-text-body)] leading-relaxed">
            Partner with Syntaxis 2026 to showcase your brand to 700–900+ technical students across 25+ NCR colleges and partner school networks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
          {/* Tier 1: Archimedes Tier (Title Sponsor) */}
          <div className="group relative flex flex-col justify-between bg-gradient-to-b from-[var(--color-accent)]/20 via-[var(--color-bg-glass)] to-[var(--color-bg-glass)] border-2 border-[var(--color-brand)]/80 hover:border-[var(--color-brand)] p-8 rounded-[var(--radius-xl)] shadow-[0_0_25px_var(--color-brand-glow)] backdrop-blur-[12px] transition-all duration-300 hover:scale-[1.02]">
            <div className="absolute top-4 right-4 bg-[var(--color-brand)] text-[var(--color-bg)] text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-widest shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Premier Tier
            </div>

            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-brand)]">Tier 1 Sponsorship</span>
              <h4 className="text-2xl font-extrabold font-heading text-[var(--color-text-pri)] tracking-wide mt-1 uppercase">
                Archimedes Tier
              </h4>
              <p className="text-xs text-[var(--color-text-sec)] font-semibold mt-1">Title Sponsor</p>

              <div className="my-6 py-3 border-y border-[var(--color-border)]/60 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold font-mono text-[var(--color-brand)]">₹1,20,000</span>
                <span className="text-xs text-[var(--color-text-body)] font-medium">/ Fest Title Partner</span>
              </div>

              <h5 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-pri)] mb-3 font-heading">
                What We Offer:
              </h5>
              <ul className="flex flex-col gap-2.5 text-xs text-[var(--color-text-body)] leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-brand)] shrink-0 mt-0.5" />
                  <span><strong>Co-Branding:</strong> "[Brand] and RDEC presents SYNTAXIS 2026"</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-brand)] shrink-0 mt-0.5" />
                  <span><strong>Prominent Print Visibility:</strong> Prime logo on all banners, flex, ID cards & certificates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-brand)] shrink-0 mt-0.5" />
                  <span><strong>Stage Announcements:</strong> Brand announced by name at every single event across all 3 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-brand)] shrink-0 mt-0.5" />
                  <span><strong>Contest Naming:</strong> Name one full contest or workshop (e.g., "[Brand] Archithon")</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-brand)] shrink-0 mt-0.5" />
                  <span><strong>Digital Reach:</strong> 8+ dedicated social media posts + minimum 5 total mentions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-brand)] shrink-0 mt-0.5" />
                  <span><strong>Stall & Reel:</strong> 3-day dedicated stall space + fest highlight reel opening credits + post-event report</span>
                </li>
              </ul>
            </div>

            <a
              href={EXTERNAL_LINKS.email}
              className="mt-8 w-full py-3.5 px-6 rounded-[var(--radius-md)] bg-[var(--color-brand)] text-[var(--color-bg)] font-bold text-xs uppercase tracking-wider text-center hover:shadow-[0_0_20px_var(--color-brand-glow)] hover:scale-105 transition-all duration-200"
            >
              Lock Archimedes Tier
            </a>
          </div>

          {/* Tier 2: Euclid Tier (Co-Sponsor) */}
          <div className="group relative flex flex-col justify-between bg-[var(--color-bg-glass)] border border-[var(--color-border)] hover:border-[var(--color-brand)] p-8 rounded-[var(--radius-xl)] shadow-lg backdrop-blur-[12px] transition-all duration-300 hover:scale-[1.02]">
            <div className="absolute top-4 right-4 bg-[var(--color-accent)] text-[var(--color-text-pri)] text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-widest border border-[var(--color-border)]">
              Secondary Tier
            </div>

            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-text-sec)]">Tier 2 Sponsorship</span>
              <h4 className="text-2xl font-extrabold font-heading text-[var(--color-text-pri)] tracking-wide mt-1 uppercase">
                Euclid Tier
              </h4>
              <p className="text-xs text-[var(--color-text-sec)] font-semibold mt-1">Co-Sponsor</p>

              <div className="my-6 py-3 border-y border-[var(--color-border)]/60 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold font-mono text-[var(--color-text-pri)]">₹70,000</span>
                <span className="text-xs text-[var(--color-text-body)] font-medium">/ Fest Co-Sponsor</span>
              </div>

              <h5 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-pri)] mb-3 font-heading">
                What We Offer:
              </h5>
              <ul className="flex flex-col gap-2.5 text-xs text-[var(--color-text-body)] leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-text-sec)] shrink-0 mt-0.5" />
                  <span><strong>Co-Branding:</strong> "In association with [Brand]"</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-text-sec)] shrink-0 mt-0.5" />
                  <span><strong>Print Visibility:</strong> Secondary logo position on all physical banners and backdrops</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-text-sec)] shrink-0 mt-0.5" />
                  <span><strong>Key Announcements:</strong> Brand announcement at Inauguration & Valediction ceremonies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-text-sec)] shrink-0 mt-0.5" />
                  <span><strong>Digital Outreach:</strong> Minimum 3 dedicated social media posts across RDEC & GfG channels</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-text-sec)] shrink-0 mt-0.5" />
                  <span><strong>Stall & Reel:</strong> Dedicated stall space for all 3 days + highlight reel feature</span>
                </li>
              </ul>
            </div>

            <a
              href={EXTERNAL_LINKS.email}
              className="mt-8 w-full py-3.5 px-6 rounded-[var(--radius-md)] border border-[var(--color-brand)] text-[var(--color-brand)] hover:bg-[var(--color-brand)] hover:text-[var(--color-bg)] font-bold text-xs uppercase tracking-wider text-center transition-all duration-200"
            >
              Lock Euclid Tier
            </a>
          </div>
        </div>
      </motion.div>

      {/* Sponsorship Terms & Agreements */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariants}
        className="max-w-5xl mx-auto w-full bg-[var(--color-bg-glass)] border border-[var(--color-border)] rounded-[var(--radius-xl)] p-6 sm:p-8 backdrop-blur-[12px]"
      >
        <div className="flex items-center gap-2 mb-4">
          <ShieldCheck className="w-5 h-5 text-[var(--color-brand)]" />
          <h4 className="text-base font-bold font-heading text-[var(--color-text-pri)] uppercase tracking-wider">
            Sponsorship Operating Terms
          </h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[var(--color-text-body)]">
          <div className="p-3.5 bg-[var(--color-bg)]/50 rounded-[var(--radius-md)] border border-[var(--color-border)]/40">
            <span className="font-bold text-[var(--color-brand)] block mb-1">Payment Method:</span>
            Bank transfer or UPI only. Official account details provided securely once tier agreement is signed.
          </div>
          <div className="p-3.5 bg-[var(--color-bg)]/50 rounded-[var(--radius-md)] border border-[var(--color-border)]/40">
            <span className="font-bold text-[var(--color-brand)] block mb-1">In-Kind Contributions:</span>
            Monetary value must equal or exceed tier minimum. Digital goods require min. 3-month post-fest validity.
          </div>
          <div className="p-3.5 bg-[var(--color-bg)]/50 rounded-[var(--radius-md)] border border-[var(--color-border)]/40">
            <span className="font-bold text-[var(--color-brand)] block mb-1">Formal Agreement:</span>
            Issued on official RDEC letterhead. Collateral production commences upon signed agreement and payment.
          </div>
          <div className="p-3.5 bg-[var(--color-bg)]/50 rounded-[var(--radius-md)] border border-[var(--color-border)]/40">
            <span className="font-bold text-[var(--color-brand)] block mb-1">Non-Refundable Policy:</span>
            Contributions locked once processed. In force majeure, full post-date digital visibility package is executed.
          </div>
        </div>
      </motion.div>

      {/* Confirmed Partners Showcase */}
      <div className="flex flex-col gap-10 max-w-5xl mx-auto w-full">
        <h3 className="text-center text-lg font-bold font-heading text-[var(--color-brand)] uppercase tracking-wider">
          Revealed Partners & Brand Grid
        </h3>

        {!isExpired ? (
          <RevealCountdown
            targetDate={revealDate}
            label="Partner Reveal In"
          />
        ) : (
          <div className="flex flex-col gap-12 w-full">
            {/* Title Partner Slot */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              className="flex flex-col items-center gap-4 text-center"
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-brand)]">Title Partner Slot</span>
              <SponsorLogo tier="Archimedes Title" className="w-72 h-36 md:w-80 md:h-40" />
            </motion.div>

            {/* Co-Sponsor Slots */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              className="flex flex-col items-center gap-4 text-center mt-2"
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-text-pri)]">Co-Sponsor Partners</span>
              <div className="flex flex-wrap gap-6 justify-center w-full">
                <SponsorLogo tier="Euclid Co-Sponsor" className="w-56 h-28 md:w-64 md:h-32" />
                <SponsorLogo tier="Euclid Co-Sponsor" className="w-56 h-28 md:w-64 md:h-32" />
              </div>
            </motion.div>

            {/* Associate Slots */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              className="flex flex-col items-center gap-4 text-center mt-2"
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-text-sec)]">Associate Partners</span>

              {isMobile ? (
                <div className="w-full overflow-hidden" ref={emblaRef}>
                  <div className="flex -ml-4">
                    {associateSponsors.map((_label, idx) => (
                      <div key={idx} className="flex-[0_0_40%] min-w-0 pl-4">
                        <SponsorLogo tier="Associate" className="w-full h-16" />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 justify-center w-full max-w-5xl">
                  {associateSponsors.map((_label, idx) => (
                    <SponsorLogo key={idx} tier="Associate" className="w-full h-16 md:h-20" />
                  ))}
                </div>
              )}
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

