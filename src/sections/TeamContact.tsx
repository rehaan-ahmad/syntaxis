import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, AlertTriangle, CheckCircle } from 'lucide-react';
import { Linkedin } from '../components/icons/SocialIcons';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { SECTION_IDS } from '../lib/constants';

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

  // Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [institution, setInstitution] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    // Basic validations
    if (!name.trim() || !email.trim() || !institution.trim() || !message.trim()) {
      setError("All fields are required.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'a1e5eb6a-cabe-4409-b289-9a30811d8f7d',
          name,
          email,
          institution,
          message,
          subject: 'Syntaxis 2026 — Contact Form',
        })
      });
      const data = await res.json();
      
      if (data.success) {
        setSuccess(true);
        setName('');
        setEmail('');
        setInstitution('');
        setMessage('');
      } else {
        setError(data.message || "Something went wrong. Email us at syntaxis@rdec.in");
      }
    } catch {
      setError("Something went wrong. Email us at syntaxis@rdec.in");
    } finally {
      setLoading(false);
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
                  <div className="w-28 h-28 rounded-full overflow-hidden border border-[var(--color-border)] mb-4 shrink-0">
                    <img 
                      src={member.image} 
                      alt="[TEAM MEMBER PHOTO 150x150 circle]" 
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

        {/* Sub-Section 2: Contact Form */}
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
            className="flex flex-col bg-bg/50 border border-[var(--color-border)] p-6 sm:p-10 rounded-[var(--radius-lg)] shadow-2xl backdrop-blur-sm gap-6 mt-4"
          >
            {/* NO FORM TAGS - CONTROLLED DIV INPUT WORKFLOW */}
            <div className="flex flex-col gap-4">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-[var(--color-text-sec)] uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="bg-bg/80 border border-[var(--color-border)] text-[var(--color-text-pri)] rounded-[var(--radius-sm)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-brand)] transition-colors"
                  disabled={loading}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-[var(--color-text-sec)] uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-bg/80 border border-[var(--color-border)] text-[var(--color-text-pri)] rounded-[var(--radius-sm)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-brand)] transition-colors"
                  disabled={loading}
                />
              </div>

              {/* Institution */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-[var(--color-text-sec)] uppercase tracking-wider">Institution / College</label>
                <input
                  type="text"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  placeholder="Enter your college name"
                  className="bg-bg/80 border border-[var(--color-border)] text-[var(--color-text-pri)] rounded-[var(--radius-sm)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-brand)] transition-colors"
                  disabled={loading}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-[var(--color-text-sec)] uppercase tracking-wider">Your Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your query here..."
                  rows={4}
                  className="bg-bg/80 border border-[var(--color-border)] text-[var(--color-text-pri)] rounded-[var(--radius-sm)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-brand)] transition-colors resize-none"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 text-xs font-semibold text-red-500 bg-red-500/10 border border-red-500/30 p-3 rounded-[var(--radius-sm)]">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-500 bg-emerald-500/10 border border-emerald-500/30 p-3 rounded-[var(--radius-sm)]">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>Message sent! We'll get back to you soon.</span>
              </div>
            )}

            {/* Submit state: Abstergo Loader spinner overlay or Standard submit button */}
            <div className="flex flex-col items-center justify-center mt-2">
              {loading ? (
                <div className="ui-abstergo">
                  <div className="abstergo-loader"></div>
                </div>
              ) : (
                <Button 
                  onClick={handleSubmit}
                  className="w-full flex justify-center items-center gap-2 py-3 bg-[var(--color-brand)] text-[var(--color-bg)] font-bold text-sm tracking-wider uppercase font-heading"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </Button>
              )}
            </div>

          </motion.div>
        </div>

      </section>
    </div>
  );
}

export default TeamContact;
