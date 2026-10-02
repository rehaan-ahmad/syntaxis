import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  ArrowLeft,
  Lock,
  FileText,
  Eye,
  Camera,
  CreditCard,
  UserCheck,
  Server,
  Building,
  Mail,
  Scale,
  CheckCircle2,
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
    { id: 'preamble', title: '1. Regulatory Framework & Fiduciary Scope', icon: Scale },
    { id: 'collection', title: '2. Personal Data We Collect', icon: FileText },
    { id: 'purpose', title: '3. Legal Grounds & Processing Purposes', icon: Eye },
    { id: 'payments', title: '4. Financial & Payment Processing', icon: CreditCard },
    { id: 'media', title: '5. Photography, Recording & Media Release', icon: Camera },
    { id: 'ip', title: '6. Intellectual Property Protection', icon: Lock },
    { id: 'thirdparty', title: '7. Third-Party Service Providers & Non-Sale', icon: Server },
    { id: 'rights', title: '8. Participant Rights (DPDPA 2023)', icon: UserCheck },
    { id: 'security', title: '9. Security Measures & Data Retention', icon: ShieldCheck },
    { id: 'cookies', title: '10. Cookies & Anonymous Telemetry', icon: CheckCircle2 },
    { id: 'minors', title: '11. Protection of Minors', icon: AlertTriangle },
    { id: 'grievance', title: '12. Grievance Redressal & Jurisdiction', icon: Building },
  ];

  return (
    <div className="min-h-screen w-full relative z-20 text-[var(--color-text-body)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        
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
            <span>DOC-ID: SYN-PRIV-2026</span>
            <span>•</span>
            <span>EFFECTIVE: OCTOBER 2026</span>
          </div>
        </motion.div>

        {/* Hero Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="p-6 sm:p-10 border-2 border-[var(--color-brand)]/60 bg-[var(--color-bg-glass)] backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.7)] flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-accent)]/30 border border-[var(--color-border)] flex items-center justify-center text-[var(--color-brand)] shrink-0 shadow-[0_0_20px_var(--color-accent-glow)]">
                <ShieldCheck className="w-8 h-8 text-[var(--color-brand)]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase font-mono tracking-widest text-[var(--color-brand)]">
                  R.D. Engineering College (RDEC) • Official Legal Notice
                </span>
                <h1 className="text-2xl sm:text-4xl font-extrabold font-heading text-[var(--color-text-pri)] tracking-wide">
                  SYNTAXIS 2026 PRIVACY POLICY
                </h1>
              </div>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-[var(--color-text-pri)]/90 border-l-2 border-[var(--color-brand)] pl-4 italic">
              This Privacy Policy governs the collection, storage, processing, and protection of personal data gathered in connection with <strong>SYNTAXIS 2026</strong> ("Festival"), organized and managed by <strong>R.D. Engineering College (RDEC), Ghaziabad</strong>. By accessing our official website (<a href="https://syntaxis.rdec.ac.in" className="text-[var(--color-brand)] underline">syntaxis.rdec.ac.in</a>), registering for competitions, or participating in festival tracks, you acknowledge and agree to the practices described in this document.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
              <div className="p-3 rounded-[var(--radius-sm)] bg-[var(--color-bg)]/60 border border-[var(--color-border)] flex flex-col">
                <span className="text-[var(--color-text-sec)]">Data Fiduciary</span>
                <span className="text-[var(--color-text-pri)] font-bold font-sans">R.D. Engineering College</span>
              </div>
              <div className="p-3 rounded-[var(--radius-sm)] bg-[var(--color-bg)]/60 border border-[var(--color-border)] flex flex-col">
                <span className="text-[var(--color-text-sec)]">Governing Statute</span>
                <span className="text-[var(--color-text-pri)] font-bold font-sans">DPDP Act 2023 & IT Act 2000</span>
              </div>
              <div className="p-3 rounded-[var(--radius-sm)] bg-[var(--color-bg)]/60 border border-[var(--color-border)] flex flex-col">
                <span className="text-[var(--color-text-sec)]">Grievance Desk</span>
                <span className="text-[var(--color-text-pri)] font-bold font-sans">syntaxis@rdec.in</span>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Quick Navigation Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col gap-3"
        >
          <span className="text-xs uppercase font-mono tracking-widest text-[var(--color-text-sec)]">
            Jump to Section:
          </span>
          <div className="flex flex-wrap gap-2">
            {sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="px-3 py-1.5 rounded-[var(--radius-pill)] bg-[var(--color-bg-glass)] border border-[var(--color-border)] text-xs text-[var(--color-text-sec)] hover:text-[var(--color-text-pri)] hover:border-[var(--color-brand)] transition-colors cursor-pointer"
              >
                {sec.title}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Detailed Legal Clauses */}
        <div className="flex flex-col gap-8 text-sm leading-relaxed">
          
          {/* Section 1 */}
          <section id="preamble" className="scroll-mt-24">
            <Card className="p-6 sm:p-8 bg-[var(--color-bg-glass)] border border-[var(--color-border)] flex flex-col gap-4">
              <div className="flex items-center gap-3 border-b border-[var(--color-border)]/40 pb-3">
                <Scale className="w-5 h-5 text-[var(--color-brand)] shrink-0" />
                <h2 className="text-lg sm:text-xl font-bold font-heading text-[var(--color-text-pri)]">
                  1. Regulatory Framework & Fiduciary Scope
                </h2>
              </div>
              <p>
                This Policy is drafted in strict compliance with the statutory provisions of the <strong>Digital Personal Data Protection Act, 2023 (Act No. 22 of 2023)</strong> of India, the <strong>Information Technology Act, 2000 (as amended)</strong>, and the <strong>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong>.
              </p>
              <p>
                R.D. Engineering College (RDEC) operates as the primary <em>Data Fiduciary</em> with respect to personal data provided directly through this web application. For registrations and transactions routed through designated event management software (such as Pragma EMS or external payment aggregators), those entities process data in accordance with their respective compliance frameworks while adhering to our institutional terms of engagement.
              </p>
            </Card>
          </section>

          {/* Section 2 */}
          <section id="collection" className="scroll-mt-24">
            <Card className="p-6 sm:p-8 bg-[var(--color-bg-glass)] border border-[var(--color-border)] flex flex-col gap-4">
              <div className="flex items-center gap-3 border-b border-[var(--color-border)]/40 pb-3">
                <FileText className="w-5 h-5 text-[var(--color-brand)] shrink-0" />
                <h2 className="text-lg sm:text-xl font-bold font-heading text-[var(--color-text-pri)]">
                  2. Personal Data We Collect
                </h2>
              </div>
              <p>
                We only collect data necessary to organize, verify, administer, and secure the fest:
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2 pl-2">
                <li>
                  <strong className="text-[var(--color-text-pri)]">Identity & Educational Credentials:</strong> Full name, institutional email address, personal contact phone number, name of college/university, academic department/branch, current year of study, and official student registration/roll number for campus entry validation.
                </li>
                <li>
                  <strong className="text-[var(--color-text-pri)]">Event & Competition Specific Data:</strong> Team names, team rosters, GitHub/GitLab repository URLs, Devpost or project portfolio profiles, Discord or Telegram identifiers, and in-game usernames/Player UIDs for esports tournaments (e.g., FreeFireMax, BGMI, CODM).
                </li>
                <li>
                  <strong className="text-[var(--color-text-pri)]">Technical & Telemetry Data:</strong> IP address, browser type and version, device hardware specifications, operating system, network referrers, request timestamps, and interaction logs collected automatically for system load management and DDoS mitigation.
                </li>
                <li>
                  <strong className="text-[var(--color-text-pri)]">Recruitment & Resume Submissions:</strong> Resumes, CVs, and project links submitted optionally for sponsor recruitment hackathon tracks.
                </li>
              </ul>
            </Card>
          </section>

          {/* Section 3 */}
          <section id="purpose" className="scroll-mt-24">
            <Card className="p-6 sm:p-8 bg-[var(--color-bg-glass)] border border-[var(--color-border)] flex flex-col gap-4">
              <div className="flex items-center gap-3 border-b border-[var(--color-border)]/40 pb-3">
                <Eye className="w-5 h-5 text-[var(--color-brand)] shrink-0" />
                <h2 className="text-lg sm:text-xl font-bold font-heading text-[var(--color-text-pri)]">
                  3. Legal Grounds & Processing Purposes
                </h2>
              </div>
              <p>
                We process your personal data under the lawful bases of <strong>Consent</strong> and <strong>Legitimate Uses</strong> as recognized under Section 4 and Section 7 of the DPDPA 2023:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                <div className="p-4 rounded-[var(--radius-md)] bg-[var(--color-bg)]/80 border border-[var(--color-border)]/60">
                  <h3 className="font-bold text-[var(--color-brand)] text-xs uppercase tracking-wider mb-1 font-mono">
                    Accreditation & Badging
                  </h3>
                  <p className="text-xs">
                    Issuing festival entry passes, verifying student authenticity, and enforcing campus security access protocols at RDEC gates.
                  </p>
                </div>
                <div className="p-4 rounded-[var(--radius-md)] bg-[var(--color-bg)]/80 border border-[var(--color-border)]/60">
                  <h3 className="font-bold text-[var(--color-brand)] text-xs uppercase tracking-wider mb-1 font-mono">
                    Tournament & Track Operations
                  </h3>
                  <p className="text-xs">
                    Organizing contest sprints (Heureka DSA, Agon CP, Katharsis), hackathon brackets (Genesis Track), and managing esports lobbies.
                  </p>
                </div>
                <div className="p-4 rounded-[var(--radius-md)] bg-[var(--color-bg)]/80 border border-[var(--color-border)]/60">
                  <h3 className="font-bold text-[var(--color-brand)] text-xs uppercase tracking-wider mb-1 font-mono">
                    Prize & Certificate Issuance
                  </h3>
                  <p className="text-xs">
                    Disbursing cash prize pools, sponsor credits, computing leaderboards, and generating cryptographically verifiable digital certificates.
                  </p>
                </div>
                <div className="p-4 rounded-[var(--radius-md)] bg-[var(--color-bg)]/80 border border-[var(--color-border)]/60">
                  <h3 className="font-bold text-[var(--color-brand)] text-xs uppercase tracking-wider mb-1 font-mono">
                    Operational Communications
                  </h3>
                  <p className="text-xs">
                    Sending emergency schedule changes, workshop venue allocations, and essential event announcements via email or SMS.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* Section 4 */}
          <section id="payments" className="scroll-mt-24">
            <Card className="p-6 sm:p-8 bg-[var(--color-bg-glass)] border border-[var(--color-border)] flex flex-col gap-4">
              <div className="flex items-center gap-3 border-b border-[var(--color-border)]/40 pb-3">
                <CreditCard className="w-5 h-5 text-[var(--color-brand)] shrink-0" />
                <h2 className="text-lg sm:text-xl font-bold font-heading text-[var(--color-text-pri)]">
                  4. Financial & Payment Processing
                </h2>
              </div>
              <p>
                <strong>Zero Storage of Sensitive Card or UPI Data:</strong> The official Syntaxis website does not directly capture, store, or process any Credit Card numbers, Debit Card CVVs, Internet Banking credentials, or UPI MPINs.
              </p>
              <p>
                All festival pass sales and registration fee collections (including All 3 Days Package, Day Passes, and Esports Title Passes) are routed through certified, PCI-DSS Level 1 compliant payment gateways and event management systems (Pragma EMS). Transaction records retained by RDEC are limited solely to order IDs, transaction timestamps, payment status (Success/Failed), pass category, and nominal tax records (3% statutory tax).
              </p>
            </Card>
          </section>

          {/* Section 5 */}
          <section id="media" className="scroll-mt-24">
            <Card className="p-6 sm:p-8 bg-[var(--color-bg-glass)] border border-[var(--color-border)] flex flex-col gap-4">
              <div className="flex items-center gap-3 border-b border-[var(--color-border)]/40 pb-3">
                <Camera className="w-5 h-5 text-[var(--color-brand)] shrink-0" />
                <h2 className="text-lg sm:text-xl font-bold font-heading text-[var(--color-text-pri)]">
                  5. Photography, Recording & Campus Media Release
                </h2>
              </div>
              <p>
                Syntaxis 2026 is an accredited public inter-collegiate event taking place across RDEC auditoriums, outdoor arenas, computing centers, and exhibition halls.
              </p>
              <p>
                By entering the festival premises, attendees acknowledge that official photographers and videographers will capture crowd scenes, keynote sessions, stage presentations, hackathon floors, and prize ceremonies. This media may be broadcast on institutional websites, livestream channels, festival recap aftermovies, and official social channels (YouTube, Instagram, LinkedIn, Twitter/X).
              </p>
              <p className="text-xs text-[var(--color-text-sec)]">
                * Attendees wishing to opt out of solo portrait features in promotional material may inform the Media Registration Desk or write to <a href="mailto:syntaxis@rdec.in" className="text-[var(--color-brand)] underline">syntaxis@rdec.in</a> with their badge identifier.
              </p>
            </Card>
          </section>

          {/* Section 6 */}
          <section id="ip" className="scroll-mt-24">
            <Card className="p-6 sm:p-8 bg-[var(--color-bg-glass)] border border-[var(--color-border)] flex flex-col gap-4">
              <div className="flex items-center gap-3 border-b border-[var(--color-border)]/40 pb-3">
                <Lock className="w-5 h-5 text-[var(--color-brand)] shrink-0" />
                <h2 className="text-lg sm:text-xl font-bold font-heading text-[var(--color-text-pri)]">
                  6. Intellectual Property Protection
                </h2>
              </div>
              <p>
                <strong>100% Participant Ownership:</strong> All participating students and hackathon teams in the Genesis Track and technical contests retain full, unencumbered intellectual property (IP) rights, patent rights, copyright, and trade secret ownership over the source code, prototypes, designs, and pitch presentations developed during the fest.
              </p>
              <p>
                Neither RDEC nor fest sponsors claim any equity or proprietary ownership over participant projects, unless a separate, bilateral licensing agreement is willingly entered into between a student team and an interested sponsor/incubator.
              </p>
            </Card>
          </section>

          {/* Section 7 */}
          <section id="thirdparty" className="scroll-mt-24">
            <Card className="p-6 sm:p-8 bg-[var(--color-bg-glass)] border border-[var(--color-border)] flex flex-col gap-4">
              <div className="flex items-center gap-3 border-b border-[var(--color-border)]/40 pb-3">
                <Server className="w-5 h-5 text-[var(--color-brand)] shrink-0" />
                <h2 className="text-lg sm:text-xl font-bold font-heading text-[var(--color-text-pri)]">
                  7. Third-Party Service Providers & Non-Sale Policy
                </h2>
              </div>
              <p>
                <strong>Strict Non-Sale Guarantee:</strong> We do NOT sell, rent, monetize, or trade participant personal data with commercial data brokers, marketing agencies, or unsolicited third parties.
              </p>
              <p>
                We engage select technical sub-processors under strict non-disclosure obligations solely to deliver website functionality:
              </p>
              <ul className="list-disc list-inside flex flex-col gap-1.5 pl-2 text-xs sm:text-sm">
                <li><strong>Tally.so:</strong> Secure embedded forms for team inquiries, sponsor proposals, and support communications.</li>
                <li><strong>Cloudflare & Web3Forms:</strong> Edge security, SSL encryption, rate limiting, and encrypted notification dispatch.</li>
                <li><strong>Official Corporate Sponsors:</strong> Resumes and portfolio links are shared with sponsoring companies for internship and job opportunities <em>only</em> when participants explicitly opt in during hackathon submission.</li>
                <li><strong>Statutory Authorities:</strong> Disclosures mandated under lawful summons, court orders, or emergency police requests in compliance with Indian law.</li>
              </ul>
            </Card>
          </section>

          {/* Section 8 */}
          <section id="rights" className="scroll-mt-24">
            <Card className="p-6 sm:p-8 bg-[var(--color-bg-glass)] border border-[var(--color-border)] flex flex-col gap-4">
              <div className="flex items-center gap-3 border-b border-[var(--color-border)]/40 pb-3">
                <UserCheck className="w-5 h-5 text-[var(--color-brand)] shrink-0" />
                <h2 className="text-lg sm:text-xl font-bold font-heading text-[var(--color-text-pri)]">
                  8. Participant Rights (DPDPA 2023)
                </h2>
              </div>
              <p>
                Under Chapter III of the Digital Personal Data Protection Act, 2023, you enjoy the following rights as a <em>Data Principal</em>:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-[var(--radius-sm)] bg-[var(--color-bg)]/60 border border-[var(--color-border)]">
                  <strong className="text-[var(--color-text-pri)] block mb-1">Right to Access Information</strong>
                  <span>Obtain a summary of personal data held and details of third parties with whom data was shared.</span>
                </div>
                <div className="p-3.5 rounded-[var(--radius-sm)] bg-[var(--color-bg)]/60 border border-[var(--color-border)]">
                  <strong className="text-[var(--color-text-pri)] block mb-1">Right to Correction & Erasure</strong>
                  <span>Request correction of inaccurate credentials or deletion of personal data once event purposes expire.</span>
                </div>
                <div className="p-3.5 rounded-[var(--radius-sm)] bg-[var(--color-bg)]/60 border border-[var(--color-border)]">
                  <strong className="text-[var(--color-text-pri)] block mb-1">Right of Grievance Redressal</strong>
                  <span>Access an expedited institutional grievance redressal mechanism before approaching the Data Protection Board.</span>
                </div>
                <div className="p-3.5 rounded-[var(--radius-sm)] bg-[var(--color-bg)]/60 border border-[var(--color-border)]">
                  <strong className="text-[var(--color-text-pri)] block mb-1">Right to Nominate</strong>
                  <span>Nominate an individual to exercise data rights in the event of death or incapacity.</span>
                </div>
              </div>
            </Card>
          </section>

          {/* Section 9 */}
          <section id="security" className="scroll-mt-24">
            <Card className="p-6 sm:p-8 bg-[var(--color-bg-glass)] border border-[var(--color-border)] flex flex-col gap-4">
              <div className="flex items-center gap-3 border-b border-[var(--color-border)]/40 pb-3">
                <ShieldCheck className="w-5 h-5 text-[var(--color-brand)] shrink-0" />
                <h2 className="text-lg sm:text-xl font-bold font-heading text-[var(--color-text-pri)]">
                  9. Security Measures & Data Retention
                </h2>
              </div>
              <p>
                We employ comprehensive technical and organizational measures to safeguard your information, including 256-bit TLS encryption in transit, isolated server infrastructure, role-based access restrictions (RBAC) limited to authorized organizing heads, and automated DDoS filtering.
              </p>
              <p>
                <strong>Data Retention Timeline:</strong> Active registration and tournament telemetry is securely archived during festival operations and purged within <strong>180 days</strong> following the conclusion of Syntaxis 2026. Minimal cryptographic validation hashes (for certificate verification) and statutory accounting records are retained as required by Indian institutional auditing standards.
              </p>
            </Card>
          </section>

          {/* Section 10 */}
          <section id="cookies" className="scroll-mt-24">
            <Card className="p-6 sm:p-8 bg-[var(--color-bg-glass)] border border-[var(--color-border)] flex flex-col gap-4">
              <div className="flex items-center gap-3 border-b border-[var(--color-border)]/40 pb-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-brand)] shrink-0" />
                <h2 className="text-lg sm:text-xl font-bold font-heading text-[var(--color-text-pri)]">
                  10. Cookies & Anonymous Telemetry
                </h2>
              </div>
              <p>
                The Syntaxis web application does <strong>not</strong> deploy third-party advertising cookies or cross-site tracking pixels. We utilize only essential session-level technical cookies and anonymous performance telemetry required for fluid graphical rendering, scroll restoration, and navigation state.
              </p>
            </Card>
          </section>

          {/* Section 11 */}
          <section id="minors" className="scroll-mt-24">
            <Card className="p-6 sm:p-8 bg-[var(--color-bg-glass)] border border-[var(--color-border)] flex flex-col gap-4">
              <div className="flex items-center gap-3 border-b border-[var(--color-border)]/40 pb-3">
                <AlertTriangle className="w-5 h-5 text-[var(--color-brand)] shrink-0" />
                <h2 className="text-lg sm:text-xl font-bold font-heading text-[var(--color-text-pri)]">
                  11. Protection of Minors
                </h2>
              </div>
              <p>
                Syntaxis 2026 is designed for college and university students. Attendees under the age of 18 (e.g., senior secondary school participants) must register with the authorization of their school administration or legal guardian. We do not knowingly profile, track, or direct targeted commercial outreach to minor participants.
              </p>
            </Card>
          </section>

          {/* Section 12 */}
          <section id="grievance" className="scroll-mt-24">
            <Card className="p-6 sm:p-8 bg-[var(--color-bg-glass)] border-2 border-[var(--color-brand)]/70 flex flex-col gap-5 shadow-[0_0_30px_var(--color-brand-glow)]">
              <div className="flex items-center gap-3 border-b border-[var(--color-border)]/40 pb-3">
                <Building className="w-5 h-5 text-[var(--color-brand)] shrink-0" />
                <h2 className="text-lg sm:text-xl font-bold font-heading text-[var(--color-text-pri)]">
                  12. Grievance Redressal & Jurisdiction
                </h2>
              </div>
              <p>
                In compliance with Section 19 of the DPDPA 2023 and the Information Technology Rules, any inquiries, complaints, data access requests, or privacy grievances should be addressed to our designated Grievance Officer:
              </p>

              <div className="p-5 rounded-[var(--radius-md)] bg-[var(--color-bg)]/90 border border-[var(--color-border-gold)]/60 flex flex-col gap-2 font-mono text-xs">
                <span className="text-[var(--color-brand)] font-bold text-sm font-heading">
                  DATA GRIEVANCE OFFICER — SYNTAXIS 2026
                </span>
                <span className="text-[var(--color-text-pri)]">
                  Faculty Convener & Organizing Committee
                </span>
                <span className="text-[var(--color-text-sec)]">
                  R.D. Engineering College (RDEC)
                </span>
                <span className="text-[var(--color-text-sec)]">
                  8th KM Mile Stone, NH-58, Delhi-Meerut Road, Ghaziabad, Uttar Pradesh — 201206, India
                </span>
                <div className="flex items-center gap-2 mt-2 pt-2 border-t border-[var(--color-border)]/40">
                  <Mail className="w-4 h-4 text-[var(--color-brand)]" />
                  <a
                    href="mailto:syntaxis@rdec.in?subject=Privacy%20Grievance%20-%20Syntaxis%202026"
                    className="text-[var(--color-text-pri)] hover:text-[var(--color-brand)] underline font-bold"
                  >
                    syntaxis@rdec.in
                  </a>
                </div>
              </div>

              <div className="text-xs text-[var(--color-text-sec)] leading-relaxed flex flex-col gap-2">
                <p>
                  <strong>Service Level Agreement (SLA):</strong> The Grievance Desk will acknowledge receipt within <strong>24 to 48 hours</strong> and provide formal resolution within <strong>7 business days</strong>.
                </p>
                <p>
                  <strong>Governing Law & Jurisdiction:</strong> This Privacy Policy and all related interactions are governed by the laws of the Republic of India. Any legal dispute or proceeding arising under this Policy shall be subject to the exclusive jurisdiction of the competent courts in <strong>Ghaziabad, Uttar Pradesh, India</strong>.
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--color-border)]/40 flex justify-end">
                <button
                  onClick={handleReturn}
                  className="px-6 py-2.5 rounded-[var(--radius-md)] bg-[var(--color-brand)] text-[var(--color-bg)] text-xs font-bold font-heading uppercase tracking-wider hover:scale-105 hover:shadow-[0_0_20px_var(--color-brand-glow)] transition-all cursor-pointer flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Return to Syntaxis Fest</span>
                </button>
              </div>
            </Card>
          </section>

        </div>

        {/* Footer Credit Bar */}
        <div className="text-center text-xs text-[var(--color-text-sec)] font-mono py-6 border-t border-[var(--color-border)]/20">
          <span>SYNTAXIS 2026 • R.D. ENGINEERING COLLEGE GHAZIABAD • LEGAL GOVERNANCE</span>
        </div>

      </div>
    </div>
  );
}

export default PrivacyPolicy;
