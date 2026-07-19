import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { Linkedin, Twitter } from '../components/icons/SocialIcons';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import { SECTION_IDS } from '../lib/constants';

interface SpeakerItem {
  id: number;
  name: string;
  designation: string;
  organization: string;
  image: string;
}

export function Speakers() {
  const speakers: SpeakerItem[] = [
    {
      id: 1,
      name: '[SPEAKER NAME — TO BE CONFIRMED]',
      designation: '[DESIGNATION PLACEHOLDER]',
      organization: '[ORGANIZATION PLACEHOLDER]',
      image: `https://placehold.co/200x200/${encodeURIComponent('5d1c34')}/${encodeURIComponent('f0e9e3')}?text=Speaker+1`
    },
    {
      id: 2,
      name: '[SPEAKER NAME — TO BE CONFIRMED]',
      designation: '[DESIGNATION PLACEHOLDER]',
      organization: '[ORGANIZATION PLACEHOLDER]',
      image: `https://placehold.co/200x200/${encodeURIComponent('5d1c34')}/${encodeURIComponent('f0e9e3')}?text=Speaker+2`
    },
    {
      id: 3,
      name: '[SPEAKER NAME — TO BE CONFIRMED]',
      designation: '[DESIGNATION PLACEHOLDER]',
      organization: '[ORGANIZATION PLACEHOLDER]',
      image: `https://placehold.co/200x200/${encodeURIComponent('5d1c34')}/${encodeURIComponent('f0e9e3')}?text=Speaker+3`
    },
    {
      id: 4,
      name: '[SPEAKER NAME — TO BE CONFIRMED]',
      designation: '[DESIGNATION PLACEHOLDER]',
      organization: '[ORGANIZATION PLACEHOLDER]',
      image: `https://placehold.co/200x200/${encodeURIComponent('5d1c34')}/${encodeURIComponent('f0e9e3')}?text=Speaker+4`
    }
  ];

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
        id={SECTION_IDS.speakers} 
        className="max-w-7xl mx-auto px-6 py-20 sm:py-32 flex flex-col gap-16 relative z-10"
      >
        {/* Section Heading */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
        >
          <SectionHeading title="KEYNOTE SPEAKERS" subtitle="GUEST LECTURERS" />
        </motion.div>

        {/* Speakers Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            animate: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-center"
        >
          {speakers.map((speaker) => (
            <motion.div 
              key={speaker.id} 
              variants={fadeUpVariants}
              className="h-full"
            >
              <Card className="h-full flex flex-col items-center justify-between text-center bg-[#11100e]/60 backdrop-blur-sm border border-[#5d1c34]/40 hover:border-[var(--color-border-gold)] p-8 transition-colors duration-300">
                {/* Photo container */}
                <div className="relative w-40 h-40 rounded-full overflow-hidden border border-[var(--color-border)] mb-6 shrink-0 group">
                  {/* Photo Placeholder */}
                  <img 
                    src={speaker.image} 
                    alt="[SPEAKER PHOTO 200x200 circle — replace with actual photo]" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Watermark overlay */}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center pointer-events-none select-none">
                    <span className="bg-[var(--color-bg)]/80 text-[var(--color-brand)] border border-[var(--color-border-gold)] text-[9px] font-black tracking-widest px-2.5 py-1 uppercase rounded-full shadow-[0_0_10px_var(--color-brand-glow)]">
                      TO BE ANNOUNCED
                    </span>
                  </div>
                </div>

                {/* Speaker details */}
                <div className="flex flex-col gap-2 flex-1 justify-between w-full">
                  <div>
                    <h4 className="text-base font-bold font-heading text-[var(--color-text-pri)] tracking-wide mb-1 px-1">
                      {speaker.name}
                    </h4>
                    <p className="text-xs text-[var(--color-brand)] font-semibold tracking-wider uppercase mb-1">
                      {speaker.designation}
                    </p>
                    <p className="text-[10px] text-[var(--color-text-sec)] tracking-widest uppercase">
                      {speaker.organization}
                    </p>
                  </div>

                  {/* Social links */}
                  <div className="flex justify-center gap-4 mt-6 border-t border-[var(--color-border)]/50 pt-4">
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[var(--color-text-sec)] hover:text-[var(--color-brand)] transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[var(--color-text-sec)] hover:text-[var(--color-brand)] transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[var(--color-text-sec)] hover:text-[var(--color-brand)] transition-colors"
                      aria-label="Website"
                    >
                      <Globe className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

export default Speakers;
