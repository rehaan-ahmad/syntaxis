import { motion } from 'framer-motion';
import { Mail, MessageSquare } from 'lucide-react';
import { Linkedin } from '../components/icons/SocialIcons';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Reveal from '../components/ui/Reveal';
import { staggerContainerVariants, fadeUpVariants } from '../lib/animations';
import { SECTION_IDS } from '../lib/constants';

declare global {
  interface Window {
    Tally?: {
      openPopup: (formId: string, options?: Record<string, unknown>) => void;
      closePopup: (formId: string) => void;
    };
  }
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

export function TeamContact() {
  const team: TeamMember[] = [
    {
      id: 1,
      name: 'Rehaan Ahmad',
      role: 'Technical Director',
      image: `${import.meta.env.BASE_URL}assets/team/rehaan.png`,
      linkedin: 'https://www.linkedin.com/in/rehaan-ahmad'
    },
    {
      id: 2,
      name: 'Anurag Kumar',
      role: 'Operations Director',
      image: `${import.meta.env.BASE_URL}assets/team/anurag.png`,
      linkedin: 'https://www.linkedin.com/in/anurag-kumar002'
    },
    {
      id: 3,
      name: 'Palak Tyagi',
      role: 'Executive Director',
      image: `${import.meta.env.BASE_URL}assets/team/palak.png`,
      linkedin: 'https://www.linkedin.com/in/palak-tyagi-'
    },
    {
      id: 4,
      name: 'Priyanshi Garg',
      role: 'Marketing Head',
      image: `${import.meta.env.BASE_URL}assets/team/priyanshi.png`,
      linkedin: 'https://www.linkedin.com/in/priyanshi-garg-a34835325'
    },
    {
      id: 5,
      name: 'Prabhati Pandey',
      role: 'Creative Head',
      image: `${import.meta.env.BASE_URL}assets/team/prabhati.png`,
      linkedin: 'https://www.linkedin.com/in/prabhati-pandey-12p'
    },
    {
      id: 6,
      name: 'Priya Sharma',
      role: 'Documentation Head',
      image: `${import.meta.env.BASE_URL}assets/team/priya.png`,
      linkedin: 'https://www.linkedin.com/in/priya-sharma-48b247330'
    }
  ];

  // Helper to trigger Tally popup with dynamic script loader fallback
  const handleOpenTally = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const tallyUrl = 'https://tally.so/r/ZjBZro';

    const triggerPopup = () => {
      if (typeof window !== 'undefined' && window.Tally && typeof window.Tally.openPopup === 'function') {
        window.Tally.openPopup('ZjBZro', {
          layout: 'modal',
          width: 700,
          hideTitle: true,
          emoji: {
            text: '👋',
            animation: 'wave'
          }
        });
        return true;
      }
      return false;
    };

    if (!triggerPopup()) {
      // If Tally widget script is not yet initialized, load it dynamically
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      script.onload = () => {
        if (!triggerPopup()) {
          window.open(tallyUrl, '_blank', 'noopener,noreferrer');
        }
      };
      script.onerror = () => {
        window.open(tallyUrl, '_blank', 'noopener,noreferrer');
      };
      document.head.appendChild(script);
    }
  };

  return (
    <div className="bg-[var(--color-bg-glass)] backdrop-blur-[12px] border-y border-[var(--color-border)]">
      <section 
        id={SECTION_IDS.contact} 
        className="max-w-7xl mx-auto px-6 py-20 sm:py-32 flex flex-col gap-24 relative z-10"
      >
        
        {/* Sub-Section 1: Organizing Team */}
        <div className="flex flex-col gap-12">
          <Reveal>
            <SectionHeading title="ORGANIZING TEAM" subtitle="Nexora Tech Club" />
          </Reveal>

          <Reveal
            variants={staggerContainerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-center"
          >
            {team.map((member) => (
              <motion.div key={member.id} variants={fadeUpVariants}>
                <Card className="flex flex-col items-center text-center p-6 border border-[var(--color-border)] hover:border-[var(--color-border-gold)] transition-colors duration-300">
                  {/* 1:1 Aspect Ratio profile avatar */}
                  <div className="w-28 h-28 aspect-square rounded-full overflow-hidden border border-[var(--color-border)] mb-4 shrink-0">
                    <img
                      src={member.image}
                      alt={`[${member.name} — 1:1 Profile Photo]`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h5 className="font-bold text-[var(--color-text-pri)] font-heading tracking-wide mb-1 px-1">
                    {member.name}
                  </h5>
                  <span className="text-xs text-[var(--color-brand)] font-semibold uppercase tracking-wider mb-4">
                    {member.role}
                  </span>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-text-sec)] hover:text-[var(--color-brand)] transition-colors mt-auto"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Card>
              </motion.div>
            ))}
          </Reveal>
        </div>

        {/* Sub-Section 2: Contact Section */}
        <div className="flex flex-col gap-12 max-w-2xl mx-auto w-full">
          <Reveal>
            <SectionHeading title="GET IN TOUCH" subtitle="SEND US A MESSAGE" />
          </Reveal>

          <Reveal
            className="flex flex-col bg-bg/50 border border-[var(--color-border)] p-6 sm:p-10 rounded-[var(--radius-lg)] shadow-2xl backdrop-blur-sm text-center"
          >
            <div className="flex flex-col items-center gap-4 p-6 bg-gradient-to-b from-[var(--color-accent)]/30 to-[var(--color-bg)]/80 border border-[var(--color-brand)]/60 rounded-[var(--radius-md)] shadow-[0_0_20px_var(--color-brand-glow)]">
              <MessageSquare className="w-10 h-10 text-[var(--color-brand)]" />
              <h4 className="text-lg font-bold font-heading text-[var(--color-text-pri)] uppercase tracking-wider">
                Inquiry & Communication Portal
              </h4>
              <p className="text-xs text-[var(--color-text-body)] leading-relaxed max-w-md">
                Have questions or want to collaborate with Syntaxis 2026? Reach out directly to our team below.
              </p>

              <button
                onClick={handleOpenTally}
                data-tally-open="ZjBZro"
                data-tally-layout="modal"
                data-tally-width="700"
                data-tally-hide-title="1"
                data-tally-emoji-text="👋"
                data-tally-emoji-animation="wave"
                className="w-full py-4 px-6 bg-[var(--color-brand)] text-[var(--color-bg)] font-extrabold text-sm uppercase tracking-wider font-heading rounded-[var(--radius-md)] hover:scale-105 hover:shadow-[0_0_25px_var(--color-brand-glow)] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 select-none"
              >
                <span>Get In Touch</span>
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </Reveal>
        </div>

      </section>
    </div>
  );
}

export default TeamContact;
