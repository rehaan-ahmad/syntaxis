import { Mail } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import { Linkedin } from '../components/icons/SocialIcons';
import { SECTION_IDS, EXTERNAL_LINKS } from '../lib/constants';

interface SponsorLogoProps {
  tier: string;
  src: string;
  className?: string;
}

function SponsorLogo({ tier, src, className }: SponsorLogoProps) {
  return (
    <div className={`group relative flex items-center justify-center bg-[var(--color-bg-glass)] border border-[var(--color-border)] rounded-[var(--radius-md)] overflow-hidden transition-all duration-300 hover:border-[var(--color-brand)] hover:shadow-[0_0_15px_var(--color-brand-glow)] ${className}`}>
      <img
        src={src}
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
  return (
    <section
      id={SECTION_IDS.sponsors}
      className="max-w-7xl mx-auto px-6 py-20 sm:py-32 relative z-10 flex flex-col gap-16"
    >
      {/* Section Heading */}
      <SectionHeading title="SPONSORSHIP & PARTNERSHIPS" subtitle="OFFICIAL TIERS & BRAND OUTREACH" />

      {/* Intro Description */}
      <Reveal className="text-center max-w-2xl mx-auto">
        <p className="text-xs sm:text-sm text-[var(--color-text-body)] leading-relaxed">
          Partner with Syntaxis 2026 to showcase your brand to <strong>500–700+</strong> technical students across 25+ NCR colleges and partner school networks.
        </p>
      </Reveal>

      {/* Confirmed Partners Showcase Grid */}
      <div className="flex flex-col gap-10 max-w-5xl mx-auto w-full">
        <h3 className="text-center text-lg font-bold font-heading text-[var(--color-brand)] uppercase tracking-wider">
          Confirmed Partners
        </h3>

        <div className="flex flex-col gap-12 w-full">
          {/* Title Sponsor */}
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <div className="flex flex-col items-center gap-1">
              <span className="text-xs font-bold font-heading uppercase tracking-[0.25em] text-[var(--color-brand)]">
                Title Sponsor
              </span>
              <span className="text-[10px] font-mono text-[var(--color-text-sec)]">
                GeeksforGeeks
              </span>
            </div>
            <SponsorLogo
              tier="Title Sponsor"
              src={`${import.meta.env.BASE_URL}assets/sponsors/GeeksforGeeks.svg`}
              className="w-72 h-36 md:w-80 md:h-40"
            />
          </Reveal>

          {/* Co-Sponsor */}
          <Reveal className="flex flex-col items-center gap-4 text-center mt-2">
            <div className="flex flex-col items-center gap-1">
              <span className="text-xs font-bold font-heading uppercase tracking-[0.25em] text-[var(--color-text-pri)]">
                Co-Sponsor
              </span>
              <span className="text-[10px] font-mono text-[var(--color-text-sec)]">
                Coding Blocks
              </span>
            </div>
            <SponsorLogo
              tier="Co-Sponsor"
              src={`${import.meta.env.BASE_URL}assets/sponsors/CodingBlocks.webp`}
              className="w-56 h-28 md:w-64 md:h-32"
            />
          </Reveal>

          {/* Associate Sponsors */}
          <Reveal className="flex flex-col items-center gap-4 text-center mt-2">
            <div className="flex flex-col items-center gap-1">
              <span className="text-xs font-bold font-heading uppercase tracking-[0.25em] text-[var(--color-brand)]">
                Associate Sponsors
              </span>
              <span className="text-[10px] font-mono text-[var(--color-text-sec)]">
                TrueAQI • NovoInvent • Gabfest
              </span>
            </div>
            <div className="flex flex-wrap gap-6 justify-center w-full">
              <SponsorLogo
                tier="TrueAQI"
                src={`${import.meta.env.BASE_URL}assets/sponsors/TrueAQI.jpeg`}
                className="w-48 h-24 md:w-56 md:h-28"
              />
              <SponsorLogo
                tier="NovoInvent"
                src={`${import.meta.env.BASE_URL}assets/sponsors/NovoInvent.png`}
                className="w-48 h-24 md:w-56 md:h-28"
              />
              <SponsorLogo
                tier="Gabfest"
                src={`${import.meta.env.BASE_URL}assets/sponsors/GabFest.webp`}
                className="w-48 h-24 md:w-56 md:h-28"
              />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Become a Sponsor Lead Contact CTA */}
      <Reveal
        className="flex flex-col items-center text-center max-w-xl mx-auto mt-4 border border-[var(--color-brand)]/50 bg-[var(--color-bg-glass)] rounded-[var(--radius-xl)] p-8 backdrop-blur-[12px] shadow-[0_0_20px_var(--color-brand-glow)]"
      >
        <h4 className="text-xl font-extrabold font-heading text-[var(--color-text-pri)] tracking-wide mb-2 uppercase">
          Direct Sponsorship Lead Contact
        </h4>
        <p className="text-xs text-[var(--color-text-body)] mb-4 leading-relaxed">
          For sponsorship inquiries, corporate engagement, or archive records, contact our festival leadership directly or email our official desk.
        </p>

        {/* Lead Card */}
        <div className="w-full my-6 text-left max-w-sm mx-auto">
          {/* Lead: Fest Lead */}
          <div className="p-4 rounded-[var(--radius-lg)] bg-[var(--color-bg)]/60 border border-[var(--color-border)] flex flex-col gap-1.5">
            <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-[var(--color-brand)]">Fest Lead</span>
            <span className="text-sm font-bold text-[var(--color-text-pri)] font-heading">Rehaan Ahmad</span>
            <a
              href="https://www.linkedin.com/in/rehaan-ahmad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-[var(--color-text-sec)] hover:text-[var(--color-brand)] transition-colors mt-1 font-mono"
            >
              <Linkedin className="w-3.5 h-3.5 text-[var(--color-brand)]" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Centered Common Email */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[var(--color-text-pri)] font-semibold mb-6 bg-[var(--color-bg)]/40 px-6 py-2.5 rounded-full border border-[var(--color-border)] font-mono">
          <Mail className="w-4 h-4 text-[var(--color-brand)]" />
          <span>Official Desk:</span>
          <a href="mailto:syntaxis@rdec.in" className="text-[var(--color-brand)] hover:underline font-bold">syntaxis@rdec.in</a>
        </div>

        <a
          href={EXTERNAL_LINKS.email}
          className="flex items-center gap-2 border border-[var(--color-brand)] bg-[var(--color-brand)] text-[var(--color-bg)] font-extrabold px-8 py-3.5 rounded-[var(--radius-md)] transition-all duration-200 text-xs shadow-lg hover:scale-105 hover:shadow-[0_0_25px_var(--color-brand-glow)] cursor-pointer select-none font-heading uppercase"
        >
          <Mail className="w-4 h-4" />
          <span>Email Sponsorship Desk</span>
        </a>
      </Reveal>
    </section>
  );
}

export default Sponsors;
