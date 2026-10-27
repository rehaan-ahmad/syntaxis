import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Reveal from '../components/ui/Reveal';
import { Linkedin } from '../components/icons/SocialIcons';

interface OrganizerAbout {
  slug: string;
  name: string;
  post: string;
  image: string;
  linkedin: string;
  about: string[];
}

const ORGANIZERS: OrganizerAbout[] = [
  {
    slug: 'rehaan-ahmad',
    name: 'Rehaan Ahmad',
    post: 'Fest Director',
    image: `${import.meta.env.BASE_URL}assets/team/rehaan.png`,
    linkedin: 'https://www.linkedin.com/in/rehaan-ahmad',
    about: [
      "I'm Rehaan Ahmad, Fest Director of Syntaxis 2026. I study Computer Science (AI/ML) at R.D. Engineering College in Ghaziabad, and I'm based in Delhi.",
      'Most of what I do outside class is community work. I\'m President of Nexora, our college tech club, and a GeeksforGeeks Campus Mantri, which means I help run a community of 400+ students. I\'m also a Google Student Ambassador for 2026.',
      'Syntaxis is the biggest thing I\'ve taken on so far. It\'s a three-day inter-college tech fest, organized jointly by the student community at RDEC. The Greek names for our days and events are on purpose. I think they give the fest a personality of its own.',
      'I still write code. I compete on Codeforces and CodeChef, and I like building tools, a few of which now run parts of the fest. When I\'m not doing either, I\'m probably racing in Assetto Corsa.',
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
      'Right now, a big part of my focus goes into campus events. I\'m serving as the Operational Director for SYNTAXIS 2026, where I handle the planning, coordination, and day-to-day execution to keep everything running smoothly. Working alongside student teams to bring a tech fest to life has been one of the best ways to test my leadership and organizational skills.',
      'Looking ahead, my goal is to become a Data Scientist. I want to use machine learning, artificial intelligence, and data-driven insights to tackle actual problems and make a tangible impact. When I\'m not managing events or studying, I\'m usually sharpening my technical skills and looking for new ways to work with data.'
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
      'Beyond my core coursework, I\'m actively exploring how artificial intelligence and large language models can be integrated into practical software applications. When I\'m not writing code or studying, I\'m usually leading the Spotlight Club as president, which gives me plenty of hands-on experience in communication, teamwork, and organizing people.'
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
      'Right now, a lot of my focus goes into learning by building. I work with Python, C, and Java, while expanding my foundation in full-stack development and natural-language data tools. Some of the projects I\'ve been working on include a Universal Query Dashboard that turns everyday questions into database queries and charts, a smart monitoring and inspection app called NETRA, and a civic-tech platform focused on public infrastructure transparency.',
      'For me, it\'s all about breaking complex problems into manageable pieces and keeping code clean and useful. I\'m actively working toward roles in software development and data science where I can build practical applications. If you want to connect, feel free to check out my GitHub or drop me an email.'
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
      'I like diving into hackathons and practical projects. One of the builds I am most proud of is our SIH 2025 Antarctic iceberg prediction system.',
      'Outside of coding, I spend a lot of time on the creative side of things—graphic design, working with Canva, putting together posters, and helping plan college tech fests. I\'ve always preferred straightforward explanations and hands-on work over complicated theory. I\'m naturally curious about how systems work under the hood, and I\'m just focused on keeping momentum, building cool things, and learning as I go.'
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
      'On the technical side, I\'m working toward becoming a Software Engineer. I\'m drawn to building intelligent, scalable software that tackles real problems rather than just looking good on paper. For me, the sweet spot is where technical engineering meets practical execution, turning complex ideas into working code. Whether I\'m managing a major tech fest or mapping out software logic, I like focusing on the details that make systems work reliably.'
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
      'Outside of coding and classes, I serve as President of the Mehfil Club. Running student events and working with teams has taught me a lot about leadership, communication, and keeping things organized under pressure. Ultimately, my goal is to work as a software engineer, building practical applications that solve real-world problems.'
    ]
  }
];

export function OrganizerAbout() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  useEffect(() => {
    const parse = () => {
      const hash = window.location.hash;
      const qIdx = hash.indexOf('?');
      if (qIdx === -1) {
        setActiveSlug(null);
        return;
      }
      const params = new URLSearchParams(hash.slice(qIdx + 1));
      setActiveSlug(params.get('member') || null);
    };

    parse();
    window.addEventListener('hashchange', parse);
    return () => window.removeEventListener('hashchange', parse);
  }, []);

  const organizer = activeSlug ? ORGANIZERS.find((o) => o.slug === activeSlug) : null;

  if (!organizer) {
    return null;
  }

  return (
    <section id="organizer-about" className="max-w-7xl mx-auto px-6 py-20 sm:py-32 relative z-10">
      <SectionHeading title="MESSAGE FROM ORGANIZER" subtitle="ABOUT ME" />

      <Reveal className="flex flex-col gap-10 max-w-4xl mx-auto w-full">
        <Card className="flex flex-col lg:flex-row gap-8 p-0 bg-[var(--color-bg-glass)] border border-[var(--color-border)] rounded-[var(--radius-xl)] shadow-2xl backdrop-blur-[12px] overflow-hidden">
          <div className="shrink-0 w-full lg:w-72 h-72 lg:h-auto">
            <img
              src={organizer.image}
              alt={`[${organizer.name} — Profile Photo]`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-4 p-8 sm:p-10 lg:p-12 flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-3xl font-bold font-heading text-[var(--color-text-pri)] tracking-wide">
                  {organizer.name}
                </h2>
                <span className="text-sm text-[var(--color-brand)] font-semibold uppercase tracking-wider">
                  {organizer.post}
                </span>
              </div>
              <a
                href={organizer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[var(--color-text-sec)] hover:text-[var(--color-brand)] transition-colors"
                aria-label={`${organizer.name} LinkedIn`}
              >
                {Linkedin ? <Linkedin className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                <span className="text-xs hidden sm:inline">Connect on LinkedIn</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
            <div className="mt-4 space-y-4 text-[var(--color-text-body)] leading-relaxed">
              {organizer.about.map((para, idx) => (
                <p key={idx} className="text-sm sm:text-base first:mt-0">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </Card>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => {
              window.location.hash = '';
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-brand)] text-[var(--color-bg)] font-bold font-heading uppercase tracking-wider text-sm rounded-[var(--radius-md)] hover:scale-105 hover:shadow-[0_0_20px_var(--color-brand-glow)] transition-all duration-200 cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
            <span>Back to Team</span>
          </button>
        </div>
      </Reveal>
    </section>
  );
}

export default OrganizerAbout;
