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
  pragma:     'PRAGMA_REGISTRATION_URL',     // TODO: Replace with production registration URL upon launch
  college:    'https://rdec.ac.in',
  instagram:  'SYNTAXIS_INSTAGRAM_URL',      // TODO: Replace with production Instagram URL
  linkedin:   'SYNTAXIS_LINKEDIN_URL',       // TODO: Replace with production LinkedIn URL
  twitter:    'SYNTAXIS_TWITTER_URL',        // TODO: Replace with production Twitter URL
  email:      'mailto:syntaxis@rdec.in',
}

export const FEST_INFO = {
  name:     'SYNTAXIS 2026',
  dates:    'September 21–24, 2026',
  venue:    'R.D. Engineering College, Ghaziabad',
  target:   new Date('2026-09-21T09:00:00+05:30'),
  colleges: '15+',
  participants: '500–900',
}
