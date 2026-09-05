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
  pragma:     'https://pragma.rdec.ac.in',
  college:    'https://rdec.ac.in',
  instagram:  'https://www.instagram.com/rdengineeringcollege/',
  twitter:    'https://x.com/rdec_ghaziabad',
  linkedin:   'https://www.linkedin.com/company/rd-engineering-college/',
  youtube:    'https://www.youtube.com/@RDEngineeringCollegeOfficial',
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
  taxNote: '+ 3% additional tax applicable on all passes',
  passes: [
    {
      id: 'all-3-days',
      title: 'All 3 Days Package',
      price: '₹1,000',
      badge: 'Best Value',
      popular: true,
      description: 'Complete 3-day all-access pass for workshops, Athlon contest sprint, hackathon, esports & valediction.'
    },
    {
      id: 'last-2-days',
      title: 'Last 2 Days Package',
      price: '₹800',
      badge: 'Popular',
      description: 'Full access to Day 2 Athlon competitive contests and Day 3 hackathon finals, expo & gaming arena.'
    },
    {
      id: 'day-1',
      title: 'Day 1 Pass',
      price: '₹200',
      rdecDiscount: '₹50 for RDEC Students (after promo code)',
      description: 'Day 1 access featuring Inauguration, Syndesis & Logika Workshop Package, and Rhesis talks.'
    },
    {
      id: 'day-2',
      title: 'Day 2 Pass',
      price: '₹400',
      description: 'Day 2 access featuring the Athlon Contest Package (Heureka DSA, Agon CP, Katharsis Debugging Duel).'
    },
    {
      id: 'day-3-esports',
      title: 'Day 3 Gaming Passes',
      price: 'From ₹100',
      isGaming: true,
      description: 'Day 3 Pantheon Games arena entry per esports title:',
      gamingTitles: [
        { title: 'FreeFireMax', price: '₹200' },
        { title: 'BGMI', price: '₹200' },
        { title: 'CODM', price: '₹100' }
      ]
    }
  ]
};

export const REVEAL_DATE = new Date('2026-08-10T00:00:00+05:30').getTime();
