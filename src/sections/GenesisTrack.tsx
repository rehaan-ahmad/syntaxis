import { motion } from 'framer-motion';
import { Award, ShieldAlert, GraduationCap, ArrowRight, ExternalLink, Download, Mail } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Reveal from '../components/ui/Reveal';
import { staggerContainerVariants, fadeUpVariants } from '../lib/animations';
import { openTallyModal } from '../lib/tally';
import { SECTION_IDS, EXTERNAL_LINKS } from '../lib/constants';

export function GenesisTrack() {
  const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    openTallyModal('xXeyrr');
  };

  const juniorEvents = [
    {
      title: 'Eureka Pitch (Day 2 Flagship)',
      description: 'The flagship school innovation showcase held on Day 2. Teams pitch everyday-life automation and applied STEM ideas to academic and technical mentors. The Top 3 finalists will be invited on Day 3 for the grand felicitation.',
      teamSize: '2–3 Students',
      prize: 'Certificates & Perks'
    },
    {
      title: 'STEM Discovery & Mentorship',
      description: 'Direct interactive mentorship sessions with engineering faculty, lab tours, and exposure to cutting-edge software and hardware development on the RDEC campus.',
      teamSize: 'Classes 9–12',
      prize: 'Participation Badges'
    }
  ];

  return (
    <div 
      className="border-y border-[var(--color-border-gold)]"
      style={{
        background: 'linear-gradient(to bottom, rgba(17, 16, 14, 0.85), rgba(26, 22, 17, 0.9))',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)'
      }}
    >
      <section 
        id={SECTION_IDS.genesis} 
        className="max-w-7xl mx-auto px-6 py-20 sm:py-32 flex flex-col gap-16 relative z-10"
      >
        {/* Section Heading with Outreach Badge */}
        <Reveal className="flex flex-col items-center">
          {/* School outreach ribbon badge */}
          <Badge variant="brand" className="mb-4 bg-[var(--color-brand)]/20 border-[var(--color-brand)] text-[var(--color-brand)] px-4 py-1 tracking-[0.2em] font-semibold text-[10px] rounded-full animate-pulse shadow-[0_0_15px_var(--color-brand-glow)]">
            School Outreach Wing
          </Badge>
          <SectionHeading title="GENESIS TRACK" subtitle="FOR CLASSES 9 TO 12 • DAY 2 ONLY" />
        </Reveal>

        {/* 2-Column: Details and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Description info */}
          <Reveal className="flex flex-col gap-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[var(--color-brand)] tracking-wider">
              NURTURING JUNIOR GENIUSES
            </h3>
            <p className="text-base text-[var(--color-text-body)] leading-relaxed">
              Curated exclusively for students in grades 9 to 12, the <strong>Genesis Track</strong> is organized on <strong>Day 2 ONLY</strong>. Students get their first taste of the collegiate tech arena through the <strong>Eureka Pitch</strong> competition.
            </p>
            <p className="text-sm text-[var(--color-text-sec)] leading-relaxed bg-[var(--color-bg)]/60 border-l-2 border-[var(--color-brand)] p-3 rounded-r-[var(--radius-md)]">
              <strong>Grand Day 3 Valedictory:</strong> The Top 3 qualifying teams will be officially invited on <strong>Day 3</strong> along with their <strong>Principal / Vice-Principal and Parents</strong> for the stage felicitation ceremony. All participants receive verified certificates and perks.
            </p>

            {/* Why Join Points */}
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-[var(--color-brand)]/15 border border-[var(--color-brand)]/40 rounded-[var(--radius-md)] flex items-center justify-center text-[var(--color-brand)]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-text-pri)] font-heading">STEM Foundations</h4>
                  <p className="text-xs text-[var(--color-text-body)] mt-1">Develop key problem-solving skills, basic logic constructs, and engineering workflows.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-[var(--color-brand)]/15 border border-[var(--color-brand)]/40 rounded-[var(--radius-md)] flex items-center justify-center text-[var(--color-brand)]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-text-pri)] font-heading">Faculty Mentorship</h4>
                  <p className="text-xs text-[var(--color-text-body)] mt-1">Receive direct feedback from RDEC computer science professors and industry mentors.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-[var(--color-brand)]/15 border border-[var(--color-brand)]/40 rounded-[var(--radius-md)] flex items-center justify-center text-[var(--color-brand)]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-text-pri)] font-heading">4 Partnered Schools</h4>
                  <p className="text-xs text-[var(--color-text-body)] mt-1">Join talented student innovators from our 4 partnered schools across NCR.</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Image Showcase */}
          <Reveal className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand)] to-transparent rounded-[var(--radius-lg)] blur-md opacity-25" />
            <img
              src={`${import.meta.env.BASE_URL}assets/events/placeholder-genesis.svg`}
              alt="[Genesis Track — 4:3 Banner Photo]"
              className="w-full max-w-md mx-auto aspect-[4/3] object-cover rounded-[var(--radius-lg)] border border-[var(--color-border-gold)] shadow-2xl relative z-10"
              loading="lazy"
            />
          </Reveal>
        </div>

        {/* Junior Event Cards Section */}
        <div className="flex flex-col gap-8 mt-4">
          <h4 className="text-xl font-bold uppercase font-heading text-center text-[var(--color-text-pri)] tracking-wider">
            GENESIS EVENT SLATE (DAY 2 ONLY)
          </h4>
          <Reveal
            variants={staggerContainerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto w-full"
          >
            {juniorEvents.map((event, idx) => (
              <motion.div key={idx} variants={fadeUpVariants}>
                <Card className="h-full border border-[var(--color-border-gold)] p-8 flex flex-col justify-between hover:shadow-[0_0_20px_var(--color-brand-glow)] transition-all duration-300">
                  <div className="flex flex-col gap-4">
                    <Badge variant="brand" className="w-fit">Junior Division</Badge>
                    <h5 className="text-2xl font-bold font-heading text-[var(--color-brand)] tracking-wide">
                      {event.title}
                    </h5>
                    <p className="text-sm text-[var(--color-text-body)] leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-[var(--color-text-sec)] font-bold tracking-wider mt-6 border-t border-[var(--color-border-gold)]/40 pt-4">
                    <span>TEAM: {event.teamSize}</span>
                    <span>AWARDS: {event.prize}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </Reveal>
        </div>

        {/* Mandatory School Consent Letter Download Card */}
        <Reveal className="max-w-4xl mx-auto w-full bg-[var(--color-bg-glass)] border border-[var(--color-border-gold)] p-6 sm:p-8 rounded-[var(--radius-lg)] shadow-2xl backdrop-blur-[12px] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/30 border border-[var(--color-border)] flex items-center justify-center text-[var(--color-brand)] shrink-0">
              <Download className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold font-mono uppercase bg-[var(--color-accent)] text-white px-2 py-0.5 rounded">MANDATORY FORM</span>
                <h4 className="text-base sm:text-lg font-bold font-heading text-[var(--color-text-pri)]">
                  Genesis School Consent & Indemnity Letter
                </h4>
              </div>
              <p className="text-xs text-[var(--color-text-body)] mt-1.5 leading-relaxed">
                Download the official printable consent letter. It must be filled, signed by parents/teacher, stamped with the official <strong>School / Principal Seal</strong>, and emailed to both official desks:
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs font-mono font-semibold text-[var(--color-brand)]">
                <a href={EXTERNAL_LINKS.email} className="hover:underline flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5" /> syntaxis@rdec.in
                </a>
                <span className="text-white/40">•</span>
                <a href={EXTERNAL_LINKS.genesisEmail} className="hover:underline flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5" /> rehaan24ai077@rdec.in
                </a>
              </div>
            </div>
          </div>

          <a
            href={`${import.meta.env.BASE_URL}docs/genesis-consent.html`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-transparent border border-[var(--color-brand)] text-[var(--color-brand)] hover:bg-[var(--color-brand)] hover:text-[var(--color-bg)] font-bold px-6 py-3 rounded-[var(--radius-md)] text-xs transition-all duration-200 shrink-0 uppercase tracking-wider font-heading cursor-pointer shadow-md hover:shadow-[0_0_15px_var(--color-brand-glow)]"
          >
            <Download className="w-4 h-4" />
            <span>Download Consent Form</span>
          </a>
        </Reveal>

        {/* Eligibility criteria box and Register CTAs */}
        <Reveal
          className="bg-[var(--color-bg)]/80 border border-[var(--color-border-gold)] p-6 sm:p-8 rounded-[var(--radius-lg)] flex flex-col md:flex-row justify-between items-center gap-6 max-w-4xl mx-auto w-full mt-2"
        >
          <div className="flex gap-4">
            <div className="w-10 h-10 shrink-0 bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/50 rounded-full flex items-center justify-center text-[var(--color-text-pri)]">
              <ShieldAlert className="w-5 h-5 text-[var(--color-brand)]" />
            </div>
            <div>
              <h5 className="font-bold text-[var(--color-text-pri)] font-heading">Eligibility & Guidelines</h5>
              <ul className="text-xs text-[var(--color-text-body)] mt-1 list-disc list-inside flex flex-col gap-1 pr-4">
                <li>Strictly limited to current class 9 to 12 students.</li>
                <li>Organized on Day 2 only; Top 3 teams return on Day 3 for prize distribution.</li>
                <li>Official school nomination letter or valid school ID card is mandatory.</li>
                <li>Zero registration fees for all qualified participants.</li>
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleRegister}
              data-tally-open="xXeyrr"
              data-tally-layout="modal"
              data-tally-width="500"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
              className="flex items-center gap-2 bg-[var(--color-brand)] text-[var(--color-bg)] font-bold px-6 py-3 rounded-[var(--radius-md)] hover:scale-105 transition-transform duration-200 text-xs shrink-0 whitespace-nowrap cursor-pointer uppercase font-heading"
            >
              <span>Register for Genesis</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href="https://tally.so/r/xXeyrr"
              target="_blank"
              rel="noopener noreferrer"
              title="Open form in new tab"
              className="p-3 rounded-[var(--radius-md)] border border-[var(--color-border-gold)] bg-[var(--color-bg-glass)] text-[var(--color-brand)] hover:bg-[var(--color-brand)] hover:text-[var(--color-bg)] transition-colors duration-200 cursor-pointer"
              aria-label="Open Genesis registration form in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </Reveal>

      </section>
    </div>
  );
}

export default GenesisTrack;
