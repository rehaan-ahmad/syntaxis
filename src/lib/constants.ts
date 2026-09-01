/**
 * Single source of truth for festival configuration, including
 * section navigation IDs, external resource links, and general event information.
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
  participants: '700–900',
}

export const REVEAL_DATE = new Date('2026-08-10T00:00:00+05:30').getTime();

