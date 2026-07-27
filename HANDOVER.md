Goal: Build a responsive, visually stunning single-page React application for the SYNTAXIS 2026 tech fest at R.D. Engineering College (RDEC), Ghaziabad, hosted on the sub-domain syntaxis.rdec.ac.in.

Current State: Fully completed all Phases (0 to 17) of the site build checklist. The SPA compiles cleanly and packages warning-free production assets split into optimal manual chunks. The site has been transitioned from a 4-day to a 3-day event structure with updated schedules and participant counts.

Files in Flight: None.

Changed:
*   [Hero.tsx](file:///home/rehaanahmad/projects/syntaxis/src/sections/Hero.tsx) — Main landing layout, countdown timer, stats, and action CTAs.
*   [About.tsx](file:///home/rehaanahmad/projects/syntaxis/src/sections/About.tsx) — Updated to reflect 3-day duration, 25+ NCR colleges, and 700-900 participants.
*   [Events.tsx](file:///home/rehaanahmad/projects/syntaxis/src/sections/Events.tsx) — Tab-based event filters now synchronized with the finalized 3-day schedule.
*   [EventCarousel.tsx](file:///home/rehaanahmad/projects/syntaxis/src/components/carousel/EventCarousel.tsx) — Embla-based mobile-responsive carousel.
*   [GenesisTrack.tsx](file:///home/rehaanahmad/projects/syntaxis/src/sections/GenesisTrack.tsx) — Junior division expanded to include students from classes 9 to 12.
*   [Schedule.tsx](file:///home/rehaanahmad/projects/syntaxis/src/sections/Schedule.tsx) — Symmetric timeline schedule updated to strictly follow the official 3-day event flow.
*   [Speakers.tsx](file:///home/rehaanahmad/projects/syntaxis/src/sections/Speakers.tsx) — Keynote speaker cards now hidden behind a reveal countdown (expires August 15, 2026).
*   [Sponsors.tsx](file:///home/rehaanahmad/projects/syntaxis/src/sections/Sponsors.tsx) — Sponsor tier catalog now hidden behind a reveal countdown (expires August 15, 2026).
*   [RevealCountdown.tsx](file:///home/rehaanahmad/projects/syntaxis/src/components/ui/RevealCountdown.tsx) — New utility component for time-gated content reveals.
*   [Register.tsx](file:///home/rehaanahmad/projects/syntaxis/src/sections/Register.tsx) — High-contrast crimson registration call block.
*   [FAQ.tsx](file:///home/rehaanahmad/projects/syntaxis/src/sections/FAQ.tsx) — Updated eligibility for Genesis Track (9-12) and valedictory ceremony date (Sept 20).
*   [TeamContact.tsx](file:///home/rehaanahmad/projects/syntaxis/src/sections/TeamContact.tsx) — Profiles grid and controlled contact form with Web3Forms integration and Abstergo loading spinner.
*   [SocialIcons.tsx](file:///home/rehaanahmad/projects/syntaxis/src/components/icons/SocialIcons.tsx) — Brand logos SVG Mock icons (LinkedIn, Instagram, Twitter).
*   [Footer.tsx](file:///home/rehaanahmad/projects/syntaxis/src/components/Footer.tsx) — Navigation, contact info, and copyright bar.
*   [App.tsx](file:///home/rehaanahmad/projects/syntaxis/src/App.tsx) — Grid flow mounts.
*   [main.tsx](file:///home/rehaanahmad/projects/syntaxis/src/main.tsx) — Mounting dual targets (#root & #syntaxis-root).
*   [vite.config.ts](file:///home/rehaanahmad/projects/syntaxis/vite.config.ts) — Base URL updated to '/' for sub-domain hosting.
*   [postcss.config.js](file:///home/rehaanahmad/projects/syntaxis/postcss.config.js) — Tailwind v4 PostCSS compilation updates.
*   [index.css](file:///home/rehaanahmad/projects/syntaxis/src/index.css) — Repositioned CSS imports.
*   Cleaned up scaffolded CSS and unused asset placeholders.

Failed Attempts:
*   Importing `Linkedin`, `Instagram`, and `Twitter` from `lucide-react` failed because modern versions of Lucide omit brand logos. Resolved by building custom SVG components under `SocialIcons.tsx`.
*   Passing `manualChunks` as an object inside `vite.config.ts` threw Rollup validation errors. Resolved by rewriting it as a standard function mapper.
*   Standard Tailwind v4 configurations failed to load through standard PostCSS. Resolved by installing `@tailwindcss/postcss` and updating `postcss.config.js`.
*   Framer Motion transition strings failed type inference. Resolved by adding `as const` type assertions.

Next Step: Review the compiled production files under the `dist/` directory and deploy to the `syntaxis.rdec.ac.in` sub-domain.

Warnings: Keep the base URL configured as `/` in `vite.config.ts` for the new sub-domain deployment.

Verification Run:
Output of `npm run build` checking:
```
vite v8.1.5 building client environment for production...
transforming (422) node_modules/motion-dom/dist/es/projection/styles/scale-box-s
transforming (2227) index.html
transforming (2229) src/index.css
✓ 2229 modules transformed.
rendering chunks (2)...
rendering chunks (5)...
rendering chunks (6)...

computing gzip size...
dist/index.html                             1.15 kB │ gzip:  0.53 kB
dist/assets/index-DrnK8bcA.css             51.45 kB │ gzip:  8.86 kB
dist/assets/rolldown-runtime-CNC7AqOf.js    0.87 kB │ gzip:  0.50 kB
dist/assets/vendor-carousel-Dh6-hklY.js    20.18 kB │ gzip:  7.99 kB
dist/assets/vendor-motion-BWs1dZgC.js      40.36 kB │ gzip: 13.88 kB
dist/assets/index-DBiv_BXy.js              84.88 kB │ gzip: 19.27 kB
dist/assets/vendor-B2j_cCty.js             99.81 kB │ gzip: 33.29 kB
dist/assets/vendor-react-CatZn0RE.js      212.33 kB │ gzip: 64.71 kB
✓ built in 791ms
```
