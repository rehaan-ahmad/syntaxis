/**
 * Single source of truth for festival configuration, including
 * section navigation IDs, external resource links, pass pricing, and general event information.
 */

export const SECTION_IDS = {
  home:     'home',
  about:    'about',
  events:   'events',
  genesis:  'genesis',
  schedule: 'schedule',
  speakers: 'speakers',
  sponsors: 'sponsors',
  register: 'register',
  faq:      'faq',
  contact:  'contact',
} as const

export const EXTERNAL_LINKS = {
  konfhub:      'https://konfhub.com/syntaxis-2026',
  college:      'https://rdec.ac.in',
  instagram:    'https://www.instagram.com/rdengineeringcollege/',
  linkedin:     'https://www.linkedin.com/company/rd-engineering-college/',
  email:        'mailto:syntaxis@rdec.in',
  genesisEmail: 'mailto:rehaan24ai077@rdec.in',
  rdecGmaps:    'https://maps.app.goo.gl/PEvYLJkc59h9BBZg7',
}

export const FEST_INFO = {
  name:     'SYNTAXIS 2026',
  dates:    'October 29–31, 2026',
  venue:    'R.D. Engineering College, Ghaziabad',
  target:   new Date('2026-10-29T09:00:00+05:30'),
  colleges: '25+',
  participants: '500–700',
}

export const TALLY_FORMS = {
  genesis:  'xXeyrr',
  rhesis:   '9qz8j5',
  contact:  'ZjBZro',
} as const;

export const PASS_PRICES = {
  taxRate: '3.75%',
  taxNote: '+ 3.75% platform fee applicable at checkout',
  fallbackUrl: 'https://konfhub.com/syntaxis-2026',
  passes: [
    {
      id: 'archithon',
      title: 'Archithon',
      price: 'Rs. 800',
      badge: 'Flagship Hackathon',
      popular: true,
      prizePool: 'Prize Pool: Rs. 20,000',
      description: 'The premier 24-hour architecture and software development hackathon. Build, innovate, and pitch to the grand jury.',
      widgetUrl: 'https://konfhub.com/widget/id/98f627ba-8118-4419-ae24-ef1d0d3edf0f',
      isFree: false
    },
    {
      id: 'contest-package',
      title: 'Contest Package',
      price: 'Rs. 200',
      badge: 'Code Trilogy',
      popular: false,
      prizePool: 'Prize Pool: Rs. 12,000',
      description: 'Full competitive programming package bundling Heureka (DSA / Problem Solving), Agon (HackerRank contest), and Katharsis (Debugging Duel).',
      widgetUrl: 'https://konfhub.com/widget/id/30b6342e-ec9d-4c41-a708-9fcbf904b2d2',
      isFree: false
    },
    {
      id: 'techne',
      title: 'Techne',
      price: 'Rs. 100',
      badge: 'Cloud & DevOps Workshop',
      popular: false,
      prizePool: 'Google Cloud Skill Badges',
      description: 'Hands-on Cloud & DevOps workshop series featuring Google Cloud Skill Badges, live architecture, and deployment.',
      widgetUrl: 'https://konfhub.com/widget/id/43c3c16f-48ac-4167-9435-3087ba35362a',
      isFree: false
    },
    {
      id: 'pantheon-games',
      title: 'Pantheon Games',
      price: 'Rs. 200',
      badge: 'Esports Arena (Free Fire)',
      popular: false,
      prizePool: 'In-Game Diamonds + Vouchers',
      description: 'Pantheon mobile esports tournament arena entry for Free Fire squads. Battle for gaming prestige, diamonds, and sponsor vouchers.',
      widgetUrl: 'https://konfhub.com/widget/id/a1d6c4f0-668d-4719-a7c1-06cdb3c75012',
      isFree: false
    },
    {
      id: 'genesis-track',
      title: 'Genesis Track',
      price: 'Free',
      badge: 'School Program (9–12)',
      popular: false,
      prizePool: 'Certificates & Perks',
      description: 'Exclusive school outreach wing organized on Day 2 only. Top 3 finalists invited with Principal & Parents on Day 3 for prize distribution.',
      tallyId: 'xXeyrr',
      isFree: true
    },
    {
      id: 'rhesis',
      title: 'Rhesis',
      price: 'Free',
      badge: 'Keynote & Tech-Talks',
      popular: false,
      prizePool: 'Open Discourse',
      description: 'Visionary speakers delivering powerful ideas, keynote tech-talks, and live Q&A sessions on the future of tech.',
      tallyId: '9qz8j5',
      isFree: true
    }
  ]
};

// Revealed on 20th October 2026
export const REVEAL_DATE = new Date('2026-10-20T00:00:00+05:30').getTime();

