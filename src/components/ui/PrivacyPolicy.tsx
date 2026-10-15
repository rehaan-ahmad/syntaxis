import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  ArrowLeft,
  Lock,
  FileText,
  Camera,
  CreditCard,
  Building,
  Mail,
  AlertTriangle
} from 'lucide-react';
import Card from './Card';

export interface PrivacyPolicyProps {
  onBack?: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleReturn = () => {
    if (onBack) {
      onBack();
    } else {
      window.location.hash = '';
      window.location.pathname = import.meta.env.BASE_URL || '/';
    }
  };

  const sections = [
    { id: 'scope', title: '1. Event Scope & Identity', icon: Building },
    { id: 'collection', title: '2. Information We Collect', icon: FileText },
    { id: 'ticketing', title: '3. Registration & Payments', icon: CreditCard },
    { id: 'media', title: '4. Photography & Media Release', icon: Camera },
    { id: 'consent', title: '5. Student Undertaking & Minor Protection', icon: AlertTriangle },
    { id: 'security', title: '6. Data Protection & Non-Disclosure', icon: Lock },
    { id: 'contact', title: '7. Queries & Grievances', icon: Mail },
  ];

  return (
    <div className="min-h-screen w-full relative z-20 text-[var(--color-text-body)] py-12 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        
        {/* Top Return Navigation Bar */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--color-border)]/60 pb-6"
        >
          <button
            onClick={handleReturn}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[var(--radius-md)] bg-[var(--color-bg-glass)] border border-[var(--color-border-gold)]/40 text-xs sm:text-sm font-bold font-heading text-[var(--color-brand)] hover:bg-[var(--color-brand)] hover:text-[var(--color-bg)] hover:shadow-[0_0_15px_var(--color-brand-glow)] transition-all duration-200 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Syntaxis Home</span>
          </button>

          <div className="flex items-center gap-3 text-xs text-[var(--color-text-sec)] font-mono">
            <span>SYNTAXIS 2026</span>
            <span>•</span>
            <span>RDEC GHAZIABAD</span>
          </div>
        </motion.div>

        {/* Hero Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="p-6 sm:p-10 border border-[var(--color-border-gold)] bg-[var(--color-bg-glass)] backdrop-blur-xl shadow-2xl flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/30 border border-[var(--color-border)] flex items-center justify-center text-[var(--color-brand)] shrink-0 shadow-md">
                <ShieldCheck className="w-7 h-7 text-[var(--color-brand)]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[var(--color-brand)]">
                  R.D. Engineering College (RDEC) • Official Policy
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-[var(--color-text-pri)] tracking-wide">
                  SYNTAXIS 2026 PRIVACY POLICY
                </h1>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[var(--color-text-body)] leading-relaxed mt-2 border-t border-[var(--color-border)] pt-4">
              This Privacy Policy explains how <strong>SYNTAXIS 2026</strong> and <strong>R.D. Engineering College</strong> collect, process, and protect participant data across all technical events, hackathons, workshops, and school innovation tracks. We are committed to transparency, data minimization, and student safety.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-[11px] font-mono font-medium px-3 py-1 rounded-full bg-[var(--color-bg)]/80 border border-[var(--color-border)] text-[var(--color-text-sec)] hover:text-[var(--color-brand)] hover:border-[var(--color-brand)] transition-colors"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Main Content Sections */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          {/* Section 1 */}
          <section id="scope" className="p-6 rounded-[var(--radius-lg)] bg-[var(--color-bg-glass)] border border-[var(--color-border)] backdrop-blur-sm flex flex-col gap-3">
            <div className="flex items-center gap-2 text-[var(--color-brand)] font-heading font-bold text-base sm:text-lg">
              <Building className="w-5 h-5 shrink-0" />
              <h2>1. Event Scope & Institutional Identity</h2>
            </div>
            <p className="text-xs sm:text-sm text-[var(--color-text-body)] leading-relaxed">
              SYNTAXIS 2026 is the annual inter-college technical festival hosted by <strong>R.D. Engineering College (RDEC)</strong>, located on the Delhi-Meerut Expressway, Duhai, Ghaziabad, Uttar Pradesh. This policy applies to all visitors, student participants, school delegates, and attendees registering through our website, ticketing portal, or on-campus helpdesks.
            </p>
          </section>

          {/* Section 2 */}
          <section id="collection" className="p-6 rounded-[var(--radius-lg)] bg-[var(--color-bg-glass)] border border-[var(--color-border)] backdrop-blur-sm flex flex-col gap-3">
            <div className="flex items-center gap-2 text-[var(--color-brand)] font-heading font-bold text-base sm:text-lg">
              <FileText className="w-5 h-5 shrink-0" />
              <h2>2. Information We Collect</h2>
            </div>
            <p className="text-xs sm:text-sm text-[var(--color-text-body)] leading-relaxed">
              To administer competitions, ensure campus security, and issue verified achievement certificates, we collect limited personal details:
            </p>
            <ul className="text-xs sm:text-sm text-[var(--color-text-body)] list-disc list-inside space-y-1.5 ml-2">
              <li><strong>Contact Information:</strong> Full name, institutional email address, phone number, and WhatsApp contact.</li>
              <li><strong>Academic Verification:</strong> Name of enrolled college or school, degree/branch, class/year, and student ID or Aadhar number for physical gate check-in.</li>
              <li><strong>Emergency Logistics:</strong> Relative/Guardian mobile number and emergency contacts for participants remaining on campus during hackathons or workshops.</li>
              <li><strong>Event Submissions:</strong> Code repositories, presentation pitch decks, project abstracts, and in-game gamer tags (for Free Fire mobile esports).</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="ticketing" className="p-6 rounded-[var(--radius-lg)] bg-[var(--color-bg-glass)] border border-[var(--color-border)] backdrop-blur-sm flex flex-col gap-3">
            <div className="flex items-center gap-2 text-[var(--color-brand)] font-heading font-bold text-base sm:text-lg">
              <CreditCard className="w-5 h-5 shrink-0" />
              <h2>3. Registration & Secure Payment Processing</h2>
            </div>
            <p className="text-xs sm:text-sm text-[var(--color-text-body)] leading-relaxed">
              Official event ticketing is processed through <strong>KonfHub</strong> (an industry-standard event management service). All payments are subject to the standard 3.75% platform fee borne by the participant:
            </p>
            <ul className="text-xs sm:text-sm text-[var(--color-text-body)] list-disc list-inside space-y-1.5 ml-2">
              <li><strong>No Financial Data Stored:</strong> SYNTAXIS and RDEC do not collect, view, or store payment card numbers, UPI PINs, or net banking credentials. Transactions are handled entirely through RBI-compliant, PCI-DSS certified payment gateways integrated by KonfHub.</li>
              <li><strong>Free Events:</strong> Events designated as Free (Genesis Track, Rhesis Keynotes) collect registration data via secure Tally forms without requiring payment details.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="media" className="p-6 rounded-[var(--radius-lg)] bg-[var(--color-bg-glass)] border border-[var(--color-border)] backdrop-blur-sm flex flex-col gap-3">
            <div className="flex items-center gap-2 text-[var(--color-brand)] font-heading font-bold text-base sm:text-lg">
              <Camera className="w-5 h-5 shrink-0" />
              <h2>4. Photography, Video & Media Release</h2>
            </div>
            <p className="text-xs sm:text-sm text-[var(--color-text-body)] leading-relaxed">
              As a public collegiate celebration, official photography and video recording take place across college grounds, seminar halls, and auditoriums. By entering the event premises, participants grant permission to RDEC and Syntaxis to use non-defamatory photos and recap videos for promotional broadcasts, websites, social media, and institution archives.
            </p>
          </section>

          {/* Section 5 */}
          <section id="consent" className="p-6 rounded-[var(--radius-lg)] bg-[var(--color-bg-glass)] border border-[var(--color-border)] backdrop-blur-sm flex flex-col gap-3">
            <div className="flex items-center gap-2 text-[var(--color-brand)] font-heading font-bold text-base sm:text-lg">
              <AlertTriangle className="w-5 h-5 shrink-0" />
              <h2>5. Student Undertaking & Minor Protection</h2>
            </div>
            <p className="text-xs sm:text-sm text-[var(--color-text-body)] leading-relaxed">
              Safety, institutional discipline, and participant accountability are top priorities:
            </p>
            <ul className="text-xs sm:text-sm text-[var(--color-text-body)] list-disc list-inside space-y-1.5 ml-2">
              <li><strong>Archithon Consent Form:</strong> All team members entering the 24-hour hackathon must fill, sign, and email the mandatory printable consent and undertaking form in a single submission to <strong className="text-white underline">syntaxis@rdec.in</strong>.</li>
              <li><strong>Genesis Track Minor Protection:</strong> High school participants (classes 9 to 12) require written parental/guardian consent and official faculty coordinator endorsement, sealed by their School Principal/Headmaster.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="security" className="p-6 rounded-[var(--radius-lg)] bg-[var(--color-bg-glass)] border border-[var(--color-border)] backdrop-blur-sm flex flex-col gap-3">
            <div className="flex items-center gap-2 text-[var(--color-brand)] font-heading font-bold text-base sm:text-lg">
              <Lock className="w-5 h-5 shrink-0" />
              <h2>6. Data Protection, Retention & Non-Disclosure</h2>
            </div>
            <p className="text-xs sm:text-sm text-[var(--color-text-body)] leading-relaxed">
              Participant data is stored on secured servers and accessed strictly on a need-to-know basis by authorized organizing committees.
            </p>
            <ul className="text-xs sm:text-sm text-[var(--color-text-body)] list-disc list-inside space-y-1.5 ml-2">
              <li><strong>No Sale or Commercial Renting:</strong> We will never sell, rent, or trade your contact information to third-party telemarketers or external advertisers.</li>
              <li><strong>Retention:</strong> Operational data is retained only for the duration required to verify entry, distribute awards/certificates, and fulfill institutional audit compliance.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section id="contact" className="p-6 rounded-[var(--radius-lg)] bg-[var(--color-bg-glass)] border border-[var(--color-border)] backdrop-blur-sm flex flex-col gap-3">
            <div className="flex items-center gap-2 text-[var(--color-brand)] font-heading font-bold text-base sm:text-lg">
              <Mail className="w-5 h-5 shrink-0" />
              <h2>7. Official Desk & Grievance Redressal</h2>
            </div>
            <p className="text-xs sm:text-sm text-[var(--color-text-body)] leading-relaxed">
              For any privacy questions, data correction requests, or form verification inquiries, please contact our official desk:
            </p>
            <div className="mt-2 p-4 rounded-[var(--radius-md)] bg-[var(--color-bg)]/80 border border-[var(--color-border-gold)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono">
              <div>
                <p className="font-bold text-[var(--color-brand)]">SYNTAXIS ORGANIZING COMMITTEE</p>
                <p className="text-[var(--color-text-sec)]">R.D. Engineering College (RDEC), Ghaziabad</p>
                <p className="text-white mt-1">Official Email: <a href="mailto:syntaxis@rdec.in" className="underline hover:text-[var(--color-brand)]">syntaxis@rdec.in</a></p>
              </div>
              <button
                onClick={handleReturn}
                className="px-4 py-2 rounded bg-[var(--color-brand)] text-[var(--color-bg)] font-bold font-heading text-xs uppercase tracking-wider hover:scale-105 transition-transform cursor-pointer"
              >
                Return to Home
              </button>
            </div>
          </section>
        </motion.div>

      </div>
    </div>
  );
}

export default PrivacyPolicy;
