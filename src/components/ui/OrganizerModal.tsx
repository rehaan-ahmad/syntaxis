import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ArrowRight, User } from 'lucide-react';
import Card from './Card';
import { Linkedin } from '../icons/SocialIcons';

export interface OrganizerDetail {
  slug: string;
  name: string;
  post: string;
  image: string;
  linkedin: string;
  about: string[];
}

export const ORGANIZERS: OrganizerDetail[] = [
  {
    slug: 'rehaan-ahmad',
    name: 'Rehaan Ahmad',
    post: 'Fest Director',
    image: `${import.meta.env.BASE_URL}assets/team/rehaan.png`,
    linkedin: 'https://www.linkedin.com/in/rehaan-ahmad',
    about: [
      "I'm Rehaan Ahmad, Fest Director of Syntaxis 2026. I study Computer Science (AI/ML) at R.D. Engineering College in Ghaziabad, and I'm based in Delhi.",
      "Most of what I do outside class is community work. I'm President of Nexora, our college tech club, and a GeeksforGeeks Campus Mantri, which means I help run a community of 400+ students. I'm also a Google Student Ambassador for 2026.",
      "Syntaxis is the biggest thing I've taken on so far. It's a three-day inter-college tech fest, organized jointly by the student community at RDEC. The Greek names for our days and events are on purpose. I think they give the fest a personality of its own.",
      "I still write code. I compete on Codeforces and CodeChef, and I like building tools, a few of which now run parts of the fest. When I'm not doing either, I'm probably racing in Assetto Corsa.",
      "If you're coming to Syntaxis, whether to compete, learn, or just look around, I want you to leave glad you showed up. Say hi if you spot me."
    ]
  },
  {
    slug: 'anurag-kumar',
    name: 'Anurag Kumar',
    post: 'Operations Director',
    image: `${import.meta.env.BASE_URL}assets/team/anurag.png`,
    linkedin: 'https://www.linkedin.com/in/anurag-kumar002',
    about: [
      "I'm Anurag Kumar, studying Computer Science with a specialization in Data Science. I've always been drawn to technology, problem-solving, and figuring out how to turn complex ideas into practical solutions.",
      "Right now, a big part of my focus goes into campus events. I'm serving as the Operational Director for SYNTAXIS 2026, where I handle the planning, coordination, and day-to-day execution to keep everything running smoothly. Working alongside student teams to bring a tech fest to life has been one of the best ways to test my leadership and organizational skills.",
      "Looking ahead, my goal is to become a Data Scientist. I want to use machine learning, artificial intelligence, and data-driven insights to tackle actual problems and make a tangible impact. When I'm not managing events or studying, I'm usually sharpening my technical skills and looking for new ways to work with data."
    ]
  },
  {
    slug: 'priyanshi-garg',
    name: 'Priyanshi Garg',
    post: 'Marketing Head',
    image: `${import.meta.env.BASE_URL}assets/team/priyanshi.png`,
    linkedin: 'https://www.linkedin.com/in/priyanshi-garg-a34835325',
    about: [
      "I'm Priyanshi Garg, a third-year computer science student specializing in AI and machine learning at R.D. Engineering College in Ghaziabad. I'm focusing heavily on backend development with Java and Spring Boot, working toward a career as a Java Full Stack Developer.",
      "Beyond my core coursework, I'm actively exploring how artificial intelligence and large language models can be integrated into practical software applications. When I'm not writing code or studying, I'm usually leading the Spotlight Club as president, which gives me plenty of hands-on experience in communication, teamwork, and organizing people."
    ]
  },
  {
    slug: 'diya-sharma',
    name: 'Diya Sharma',
    post: 'Organizing Lead',
    image: `${import.meta.env.BASE_URL}assets/team/diya.png`,
    linkedin: 'https://www.linkedin.com/in/diya-sharma-433b1b37b/',
    about: [
      "I'm Diya Sharma, studying Computer Science Engineering with a focus on Data Science. I've always enjoyed building things where software development, data, and AI meet—turning ideas into actual digital experiences that solve real-world friction.",
      "Right now, a lot of my focus goes into learning by building. I work with Python, C, and Java, while expanding my foundation in full-stack development and natural-language data tools. Some of the projects I've been working on include a Universal Query Dashboard that turns everyday questions into database queries and charts, a smart monitoring and inspection app called NETRA, and a civic-tech platform focused on public infrastructure transparency.",
      "For me, it's all about breaking complex problems into manageable pieces and keeping code clean and useful. I'm actively working toward roles in software development and data science where I can build practical applications. If you want to connect, feel free to check out my GitHub or drop me an email."
    ]
  },
  {
    slug: 'priya-sharma',
    name: 'Priya Sharma',
    post: 'Documentation Head',
    image: `${import.meta.env.BASE_URL}assets/team/priya.png`,
    linkedin: 'https://www.linkedin.com/in/priya-sharma-48b247330',
    about: ['[ABOUT ME — TO BE CONFIRMED]']
  },
  {
    slug: 'prabhati-pandey',
    name: 'Prabhati Pandey',
    post: 'Creative Head',
    image: `${import.meta.env.BASE_URL}assets/team/prabhati.png`,
    linkedin: 'https://www.linkedin.com/in/prabhati-pandey-12p',
    about: [
      "I'm Prabhati Pandey, a third-year Computer Science Engineering student. My main focus right now is tech, artificial intelligence, and cybersecurity, while sharpening my core programming skills in Python, Java, C, and Data Structures to get ready for placements.",
      "I like diving into hackathons and practical projects. One of the builds I am most proud of is our SIH 2025 Antarctic iceberg prediction system.",
      "Outside of coding, I spend a lot of time on the creative side of things—graphic design, working with Canva, putting together posters, and helping plan college tech fests. I've always preferred straightforward explanations and hands-on work over complicated theory. I'm naturally curious about how systems work under the hood, and I'm just focused on keeping momentum, building cool things, and learning as I go."
    ]
  },
  {
    slug: 'palak-tyagi',
    name: 'Palak Tyagi',
    post: 'Executive Director',
    image: `${import.meta.env.BASE_URL}assets/team/palak.png`,
    linkedin: 'https://www.linkedin.com/in/palak-tyagi-',
    about: [
      "I'm Palak Tyagi, and I currently serve as the Executive Director of Syntaxis. A lot of my day-to-day focus goes into the organizational side of things, handling strategy, coordination, and working with teams to make sure large-scale projects actually come together.",
      "On the technical side, I'm working toward becoming a Software Engineer. I'm drawn to building intelligent, scalable software that tackles real problems rather than just looking good on paper. For me, the sweet spot is where technical engineering meets practical execution, turning complex ideas into working code. Whether I'm managing a major tech fest or mapping out software logic, I like focusing on the details that make systems work reliably."
    ]
  },
  {
    slug: 'shikhar-singh',
    name: 'Shikhar Singh',
    post: 'Volunteer Head/Incharge',
    image: `${import.meta.env.BASE_URL}assets/team/shikhar.png`,
    linkedin: 'https://www.linkedin.com/in/shikhar-20306-singh/',
    about: [
      "I'm Shikhar Singh, a third-year Computer Science student specializing in AI and ML at R.D. Engineering College in Ghaziabad. My main focus is software and full-stack development, alongside artificial intelligence. I prefer learning by building, and some of the projects I've worked on include EduAI, AgriShare, and an AI Scam Detector.",
      "Outside of coding and classes, I serve as President of the Mehfil Club. Running student events and working with teams has taught me a lot about leadership, communication, and keeping things organized under pressure. Ultimately, my goal is to work as a software engineer, building practical applications that solve real-world problems."
    ]
  }
];

export function OrganizerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [organizer, setOrganizer] = useState<OrganizerDetail | null>(null);

  useEffect(() => {
    const handleOpen = (e: CustomEvent<{ slug?: string }>) => {
      if (e.detail?.slug) {
        const found = ORGANIZERS.find((o) => o.slug === e.detail.slug);
        if (found) {
          setOrganizer(found);
          setIsOpen(true);
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    // Check initial hash or hash changes for #organizer-about?member=slug
    const checkHash = () => {
      const hash = window.location.hash;
      if (hash.includes('organizer-about')) {
        const qIdx = hash.indexOf('?');
        if (qIdx !== -1) {
          const params = new URLSearchParams(hash.slice(qIdx + 1));
          const member = params.get('member');
          if (member) {
            const found = ORGANIZERS.find((o) => o.slug === member);
            if (found) {
              setOrganizer(found);
              setIsOpen(true);
            }
          }
        }
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    window.addEventListener('openOrganizerModal' as any, handleOpen);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('hashchange', checkHash);
      window.removeEventListener('openOrganizerModal' as any, handleOpen);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    if (window.location.hash.includes('organizer-about')) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && organizer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-3xl z-10 my-auto"
          >
            <Card className="p-0 border-2 border-[var(--color-brand)]/80 bg-[var(--color-bg)] rounded-[var(--radius-xl)] shadow-[0_0_50px_var(--color-brand-glow)] overflow-hidden flex flex-col max-h-[90vh]">
              
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)] bg-[var(--color-bg-glass)] shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-brand)]/20 border border-[var(--color-brand)]/40 flex items-center justify-center text-[var(--color-brand)]">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold font-heading text-[var(--color-text-pri)] uppercase tracking-wide">
                      {organizer.name}
                    </h3>
                    <span className="text-[10px] font-mono text-[var(--color-brand)] uppercase tracking-wider">
                      {organizer.post}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={organizer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[var(--color-text-sec)] hover:text-[var(--color-brand)] font-semibold transition-colors px-2.5 py-1 rounded-md border border-[var(--color-border)] hover:border-[var(--color-brand)]"
                    title="Connect on LinkedIn"
                  >
                    {Linkedin ? <Linkedin className="w-3 h-3" /> : <ExternalLink className="w-3 h-3" />}
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                  <button
                    onClick={handleClose}
                    className="p-1.5 text-[var(--color-text-sec)] hover:text-[var(--color-text-pri)] hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="overflow-y-auto p-6 sm:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-[var(--radius-lg)] overflow-hidden border-2 border-[var(--color-border)] shrink-0 mx-auto md:mx-0 shadow-lg">
                  <img
                    src={organizer.image}
                    alt={`[${organizer.name} — Profile Photo]`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1 flex flex-col gap-3">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-[var(--color-border)]/50 pb-2">
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold font-heading text-[var(--color-text-pri)]">
                        {organizer.name}
                      </h4>
                      <p className="text-xs sm:text-sm font-semibold text-[var(--color-brand)] uppercase tracking-wider">
                        {organizer.post}
                      </p>
                    </div>
                  </div>

                  <div className="mt-2 space-y-3 text-[var(--color-text-body)] text-xs sm:text-sm leading-relaxed">
                    {organizer.about.map((para, idx) => (
                      <p key={idx} className="first:mt-0">
                        {para}
                      </p>
                    ))}
                  </div>

                  <div className="pt-3 block sm:hidden">
                    <a
                      href={organizer.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[var(--color-brand)] font-semibold hover:underline"
                    >
                      {Linkedin ? <Linkedin className="w-3.5 h-3.5" /> : null}
                      <span>Connect on LinkedIn</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between px-6 py-3 border-t border-[var(--color-border)] bg-[var(--color-bg-glass)] text-[11px] text-[var(--color-text-sec)] font-mono shrink-0">
                <span>Syntaxis 2026 Core Organizing Committee</span>
                <button
                  onClick={handleClose}
                  className="text-[var(--color-brand)] hover:underline cursor-pointer"
                >
                  Close
                </button>
              </div>

            </Card>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function openOrganizerModal(slug: string) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('openOrganizerModal', {
        detail: { slug },
      })
    );
  }
}

export default OrganizerModal;

