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
  konfhub:    'https://konfhub.com/syntaxis-2026',
  college:    'https://rdec.ac.in',
  instagram:  'https://www.instagram.com/rdengineeringcollege/',
  linkedin:   'https://www.linkedin.com/company/rd-engineering-college/',
  email:      'mailto:syntaxis@rdec.in',
}

export const FEST_INFO = {
  name:     'SYNTAXIS 2026',
  dates:    'October 29–31, 2026',
  venue:    'R.D. Engineering College, Ghaziabad',
  target:   new Date('2026-10-29T09:00:00+05:30'),
  colleges: '25+',
  participants: '500–700',
}

export const PASS_PRICES = {
  taxRate: '3%',
  taxNote: '+ 3% additional tax applicable at checkout',
  fallbackUrl: 'https://konfhub.com/syntaxis-2026',
  passes: [
    {
      id: 'archithon',
      title: 'Archithon',
      price: 'Price TBD',
      badge: 'Flagship Hackathon',
      popular: true,
      description: 'The premier 24-hour architecture and software development hackathon under the Genesis Track. Build, innovate, and pitch to jury.',
      widgetUrl: 'https://konfhub.com/widget/id/f63c7ac5-fcc5-49d7-8c29-afcb10aa875d'
    },
    {
      id: 'contests-pass',
      title: 'Contests Pass',
      price: '₹400',
      badge: 'Athlon Sprint',
      popular: false,
      description: 'Full competitive programming package bundling Heureka (DSA / Problem Solving), Agon (HackerRank contest), and Katharsis (Debugging Duel).',
      widgetUrl: 'https://konfhub.com/widget/id/e3e10a39-84a8-4a7b-9624-33d2f52941ed'
    },
    {
      id: 'workshops-talks',
      title: 'Workshops & Talks',
      price: '₹20 Onwards',
      badge: 'Masterclasses',
      popular: false,
      description: 'Hands-on technical workshop series (Syndesis FastAPI, Logika Data Structures) and visionary Rhesis industry talks.',
      widgetUrl: 'https://konfhub.com/widget/id/d938e1c0-6045-4dbb-b343-04e8694b44e6'
    },
    {
      id: 'esports',
      title: 'E-Sports',
      price: '₹200 / team',
      badge: 'Pantheon Games',
      popular: false,
      description: 'Pantheon esports tournament arena entry (₹200 per team for each title: FreeFireMax, BGMI, and CODM).',
      widgetUrl: 'https://konfhub.com/widget/id/fed9126b-ab98-4879-9a9b-74680ebe61c8'
    }
  ]
};

// Revealed on 20th October 2026
export const REVEAL_DATE = new Date('2026-10-20T00:00:00+05:30').getTime();
