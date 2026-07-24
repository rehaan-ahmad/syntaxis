import { Link as ScrollLink } from 'react-scroll';
import { Mail } from 'lucide-react';
import { Instagram, Linkedin, Twitter } from './icons/SocialIcons';
import { SECTION_IDS, EXTERNAL_LINKS, FEST_INFO } from '../lib/constants';

export function Footer() {
  return (
    <footer className="bg-deep border-t border-[var(--color-accent)]/40 relative z-10 select-none py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
          {/* Col 1: Branding and Socials */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src={`${import.meta.env.BASE_URL}assets/logo/syntaxis-logo.png`}
                alt="Syntaxis Logo"
                className="h-8 w-auto object-contain"
              />
              <span className="text-xl font-bold font-heading text-[var(--color-text-pri)] tracking-wider">
                SYNTAXIS 2026
              </span>
            </div>
            <p className="text-xs text-[var(--color-text-body)] leading-relaxed max-w-sm">
              {FEST_INFO.name} — R.D. Engineering College (RDEC) Ghaziabad. Join the NCR's ultimate inter-college tech fest from {FEST_INFO.dates}.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 items-center mt-2">
              <a
                href={EXTERNAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[var(--color-border)]/50 bg-bg flex items-center justify-center text-[var(--color-text-sec)] hover:text-[var(--color-brand)] hover:border-[var(--color-brand)] transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={EXTERNAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[var(--color-border)]/50 bg-bg flex items-center justify-center text-[var(--color-text-sec)] hover:text-[var(--color-brand)] hover:border-[var(--color-brand)] transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={EXTERNAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[var(--color-border)]/50 bg-bg flex items-center justify-center text-[var(--color-text-sec)] hover:text-[var(--color-brand)] hover:border-[var(--color-brand)] transition-colors cursor-pointer"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand)] font-heading">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
              <ScrollLink
                to={SECTION_IDS.home}
                smooth={true}
                duration={600}
                offset={-80}
                className="text-[var(--color-text-sec)] hover:text-[var(--color-text-pri)] transition-colors cursor-pointer w-fit"
              >
                Home
              </ScrollLink>
              <ScrollLink
                to={SECTION_IDS.about}
                smooth={true}
                duration={600}
                offset={-80}
                className="text-[var(--color-text-sec)] hover:text-[var(--color-text-pri)] transition-colors cursor-pointer w-fit"
              >
                About
              </ScrollLink>
              <ScrollLink
                to={SECTION_IDS.events}
                smooth={true}
                duration={600}
                offset={-80}
                className="text-[var(--color-text-sec)] hover:text-[var(--color-text-pri)] transition-colors cursor-pointer w-fit"
              >
                Events
              </ScrollLink>
              <ScrollLink
                to={SECTION_IDS.genesis}
                smooth={true}
                duration={600}
                offset={-80}
                className="text-[var(--color-text-sec)] hover:text-[var(--color-text-pri)] transition-colors cursor-pointer w-fit"
              >
                Genesis Track
              </ScrollLink>
              <ScrollLink
                to={SECTION_IDS.register}
                smooth={true}
                duration={600}
                offset={-80}
                className="text-[var(--color-text-sec)] hover:text-[var(--color-text-pri)] transition-colors cursor-pointer w-fit"
              >
                Register
              </ScrollLink>
              <ScrollLink
                to={SECTION_IDS.contact}
                smooth={true}
                duration={600}
                offset={-80}
                className="text-[var(--color-text-sec)] hover:text-[var(--color-text-pri)] transition-colors cursor-pointer w-fit"
              >
                Organizing Team
              </ScrollLink>
            </div>
          </div>

          {/* Col 3: Support Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand)] font-heading">
              Support & Help
            </h4>
            <p className="text-xs text-[var(--color-text-body)] leading-relaxed">
              Have questions regarding event guidelines, registrations, or timelines?
            </p>
            <a
              href={EXTERNAL_LINKS.email}
              className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-pri)] hover:text-[var(--color-brand)] transition-colors w-fit mt-1"
            >
              <Mail className="w-4 h-4 text-[var(--color-brand)]" />
              <span>syntaxis@rdec.in</span>
            </a>
          </div>

        </div>

        {/* Footer Bottom copyright details */}
        <div className="border-t border-[var(--color-border)]/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-semibold text-[var(--color-text-sec)] uppercase tracking-widest text-center md:text-left">
          <span>
            &copy; 2026 Nexora — RDEC Tech Club. All rights reserved.
          </span>
          <span className="flex items-center gap-1.5">
            <span>Powered by</span>
            <a 
              href={EXTERNAL_LINKS.pragma}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-brand)] hover:underline"
            >
              Pragma EMS
            </a>
          </span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
