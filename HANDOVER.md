Goal: Build a responsive, visually stunning single-page React application for the SYNTAXIS 2026 tech fest at R.D. Engineering College (RDEC), Ghaziabad, hosted on the sub-domain syntaxis.rdec.ac.in.

Current State: Fully completed all Phases (0 to 17) of the site build checklist. Migrated from Vercel to private server hosting. Code review, cleanup, and layout adjustments completed — removed Vercel-specific configuration, localized all external placeholder images, added SEO meta tags, and implemented conditional visibility for Events, Speakers, and Sponsors sections until August 10, 2026. The SPA compiles cleanly and packages warning-free production assets split into optimal manual chunks.

Files in Flight: None.

Changed (Migration, Cleanup & Visibility Adjustments):
*   [lib/constants.ts](file:///home/rehaanahmad/projects/syntaxis/src/lib/constants.ts) — Added `REVEAL_DATE` constant representing August 10, 2026.
*   [hooks/useCountdown.ts](file:///home/rehaanahmad/projects/syntaxis/src/hooks/useCountdown.ts) — Implemented `useIsRevealed` custom hook to track and dynamically update reveal state.
*   [App.tsx](file:///home/rehaanahmad/projects/syntaxis/src/App.tsx) — Conditionally render Events, Speakers, and Sponsors sections only after the reveal date.
*   [Navbar.tsx](file:///home/rehaanahmad/projects/syntaxis/src/components/nav/Navbar.tsx) & [Footer.tsx](file:///home/rehaanahmad/projects/syntaxis/src/components/Footer.tsx) — Conditionally render link targets pointing to events/sponsors sections to avoid navigation bugs.
*   [Hero.tsx](file:///home/rehaanahmad/projects/syntaxis/src/sections/Hero.tsx) & [Register.tsx](file:///home/rehaanahmad/projects/syntaxis/src/sections/Register.tsx) — Conditionally route CTAs to "About" ("Learn More" / "View Details") instead of "Events" prior to August 10.
*   [TeamContact.tsx](file:///home/rehaanahmad/projects/syntaxis/src/sections/TeamContact.tsx) — Updated team member image paths for Anurag Kumar, Priyanshi Garg, and Priya Sharma to point to their newly placed photos (`anurag.png`, `priyanshi.png`, `priya.png`).

Next Step: Replace placeholder external URLs in `constants.ts` with production values. Add Web3Forms API key. Replace placeholder images with real photos before final deployment.

Warnings: Web3Forms access key (`YOUR_ACCESS_KEY`) in TeamContact.tsx must be replaced before the contact form will function. External link placeholders in constants.ts (`PRAGMA_REGISTRATION_URL`, social media URLs) must be populated before public launch.
