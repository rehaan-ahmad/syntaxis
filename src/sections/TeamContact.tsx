import { motion } from 'framer-motion';
import { ExternalLink, MessageSquare } from 'lucide-react';
import { Linkedin } from '../components/icons/SocialIcons';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
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

  // Tally popup trigger with fallback redirect
  const handleOpenTally = () => {
    const tallyUrl = 'https://tally.so/r/ZjBZro';
    try {
      if (window.Tally && typeof window.Tally.openPopup === 'function') {
        window.Tally.openPopup('ZjBZro', {
          layout: 'modal',
          width: 700,
          hideTitle: true,
          emoji: {
            text: '👋',
            animation: 'wave'
          },
          autoClose: 3000
        });
      } else {
        window.open(tallyUrl, '_blank', 'noopener,noreferrer');
      }
    } catch {
      window.open(tallyUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const fadeUpVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const }
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
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
          >
            <SectionHeading title="ORGANIZING TEAM" subtitle="Nexora Tech Club" />
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              animate: { transition: { staggerChildren: 0.1 } }
            }}
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
          </motion.div>
        </div>

        {/* Sub-Section 2: Contact Section with Tally Popup */}
        <div className="flex flex-col gap-12 max-w-2xl mx-auto w-full">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
          >
            <SectionHeading title="GET IN TOUCH" subtitle="SEND US A MESSAGE" />
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="flex flex-col bg-bg/50 border border-[var(--color-border)] p-6 sm:p-10 rounded-[var(--radius-lg)] shadow-2xl backdrop-blur-sm gap-8 text-center"
          >
            {/* Tally Interactive Form Launch Portal */}
            <div className="flex flex-col items-center gap-4 p-6 bg-gradient-to-b from-[var(--color-accent)]/30 to-[var(--color-bg)]/80 border border-[var(--color-brand)]/60 rounded-[var(--radius-md)] shadow-[0_0_20px_var(--color-brand-glow)]">
              <MessageSquare className="w-10 h-10 text-[var(--color-brand)] animate-bounce" />
              <h4 className="text-lg font-bold font-heading text-[var(--color-text-pri)] uppercase tracking-wider">
                Official Inquiry & Feedback Portal
              </h4>
              <p className="text-xs text-[var(--color-text-body)] leading-relaxed max-w-md">
                Click below to launch our instant interactive inquiry form. For quick response, submit your query directly to our team.
              </p>
              
              <button
                onClick={handleOpenTally}
                data-tally-open="ZjBZro"
                data-tally-width="700"
                data-tally-hide-title="1"
                data-tally-emoji-text="👋"
                data-tally-emoji-animation="wave"
                data-tally-auto-close="2500"
                className="w-full py-4 px-6 bg-[var(--color-brand)] text-[var(--color-bg)] font-extrabold text-sm uppercase tracking-wider font-heading rounded-[var(--radius-md)] hover:scale-105 hover:shadow-[0_0_25px_var(--color-brand-glow)] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 select-none"
              >
                <span>Get In Touch (Launch Form)</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>

      </section>
    </div>
  );
}

export default TeamContact;
