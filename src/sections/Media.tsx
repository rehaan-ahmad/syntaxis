import { ExternalLink, Images, Film, Folder } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import Card from '../components/ui/Card';

const MEDIA_DRIVE_URL = 'https://drive.google.com/drive/folders/13Rub1wxVaKiAO7EEhOR7QL-whivDs5c1?usp=drive_link';

const mediaCategories = [
  {
    icon: Images,
    label: 'Photos',
    description: 'High-resolution photographs from all three days of Syntaxis 2026.',
  },
  {
    icon: Film,
    label: 'Videos',
    description: 'Event highlights, keynote recordings, and competition coverage.',
  },
  {
    icon: Folder,
    label: 'All Media',
    description: 'Browse the complete Syntaxis 2026 media archive on Google Drive.',
  },
];

export function Media() {
  return (
    <section
      id="media"
      className="max-w-7xl mx-auto px-6 py-20 sm:py-32 relative z-10"
    >
      <SectionHeading title="MEDIA GALLERY" subtitle="Relive Syntaxis 2026" />

      <Reveal className="flex flex-col items-center gap-10 mt-4">
        {/* Info row */}
        <p className="text-sm sm:text-base text-[var(--color-text-body)] text-center max-w-2xl leading-relaxed">
          Syntaxis 2026 was three unforgettable days of innovation, competition, and community.
          Explore the full photo and video collection from across all venues on our official media drive.
        </p>

        {/* Category tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
          {mediaCategories.map(({ icon: Icon, label, description }) => (
            <a
              key={label}
              href={MEDIA_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="flex flex-col items-center text-center gap-3 p-6 border border-[var(--color-border)] group-hover:border-[var(--color-border-gold)] transition-colors duration-300 h-full">
                <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--color-brand)]/15 border border-[var(--color-brand)]/30 flex items-center justify-center text-[var(--color-brand)] group-hover:bg-[var(--color-brand)]/25 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold font-heading text-[var(--color-text-pri)] tracking-wide uppercase text-sm">
                  {label}
                </h3>
                <p className="text-xs text-[var(--color-text-body)] leading-relaxed">
                  {description}
                </p>
              </Card>
            </a>
          ))}
        </div>

        {/* Primary CTA button */}
        <a
          href={MEDIA_DRIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-[var(--color-brand)] text-[var(--color-bg)] font-bold font-heading uppercase tracking-wider px-8 py-3.5 rounded-[var(--radius-md)] hover:scale-105 hover:shadow-[0_0_25px_var(--color-brand-glow)] transition-all duration-200 text-sm"
        >
          <Images className="w-4 h-4" />
          <span>Open Media Drive</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        <p className="text-[11px] font-mono text-[var(--color-text-sec)] text-center">
          Hosted on Google Drive · Syntaxis 2026 Official Media Archive
        </p>
      </Reveal>
    </section>
  );
}

export default Media;

