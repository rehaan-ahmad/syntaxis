Goal: Build a responsive, visually stunning single-page React application for the SYNTAXIS 2026 tech fest at R.D. Engineering College (RDEC), Ghaziabad, hosted in a WordPress subdirectory at rdec.ac.in/syntaxis.

Current State: Fully completed all Phases (0 to 17) of the site build checklist. The SPA compiles cleanly and packages warning-free production assets split into optimal manual chunks.

Files in Flight: None (all layouts are completed, tested, and saved).

Changed:
*   [Hero.tsx](file:///home/rehaanahmad/projects/syntaxis/src/sections/Hero.tsx) — Main landing layout, countdown timer, stats, and action CTAs.
*   [About.tsx](file:///home/rehaanahmad/projects/syntaxis/src/sections/About.tsx) — Pillars grid, college descriptions, and campus atmosphere.
*   [Events.tsx](file:///home/rehaanahmad/projects/syntaxis/src/sections/Events.tsx) — Tab-based event filters switching dynamically to mobile swipe slider.
*   [EventCarousel.tsx](file:///home/rehaanahmad/projects/syntaxis/src/components/carousel/EventCarousel.tsx) — Embla-based mobile-responsive carousel.
*   [GenesisTrack.tsx](file:///home/rehaanahmad/projects/syntaxis/src/sections/GenesisTrack.tsx) — Junior division section with gold themes.
*   [Schedule.tsx](file:///home/rehaanahmad/projects/syntaxis/src/sections/Schedule.tsx) — Symmetric timeline schedule divided by event days.
*   [Speakers.tsx](file:///home/rehaanahmad/projects/syntaxis/src/sections/Speakers.tsx) — Watermarked keynote speaker cards.
*   [Sponsors.tsx](file:///home/rehaanahmad/projects/syntaxis/src/sections/Sponsors.tsx) — Grayscale-to-color tier catalog.
*   [Register.tsx](file:///home/rehaanahmad/projects/syntaxis/src/sections/Register.tsx) — High-contrast crimson registration call block.
*   [FAQ.tsx](file:///home/rehaanahmad/projects/syntaxis/src/sections/FAQ.tsx) — Accordion queries block.
*   [TeamContact.tsx](file:///home/rehaanahmad/projects/syntaxis/src/sections/TeamContact.tsx) — Profiles grid and controlled contact form with Web3Forms integration and Abstergo loading spinner.
*   [SocialIcons.tsx](file:///home/rehaanahmad/projects/syntaxis/src/components/icons/SocialIcons.tsx) — Brand logos SVG Mock icons (LinkedIn, Instagram, Twitter).
*   [Footer.tsx](file:///home/rehaanahmad/projects/syntaxis/src/components/Footer.tsx) — Navigation, contact info, and copyright bar.
*   [App.tsx](file:///home/rehaanahmad/projects/syntaxis/src/App.tsx) — Grid flow mounts.
*   [main.tsx](file:///home/rehaanahmad/projects/syntaxis/src/main.tsx) — Mounting dual targets (#root & #syntaxis-root).
*   [vite.config.ts](file:///home/rehaanahmad/projects/syntaxis/vite.config.ts) — Manual chunk rollups using function mapping.
*   [postcss.config.js](file:///home/rehaanahmad/projects/syntaxis/postcss.config.js) — Tailwind v4 PostCSS compilation updates.
*   [index.css](file:///home/rehaanahmad/projects/syntaxis/src/index.css) — Repositioned CSS imports.
*   Cleaned up scaffolded CSS and unused asset placeholders.

Failed Attempts:
*   Importing `Linkedin`, `Instagram`, and `Twitter` from `lucide-react` failed because modern versions of Lucide omit brand logos. Resolved by building custom SVG components under `SocialIcons.tsx`.
*   Passing `manualChunks` as an object inside `vite.config.ts` threw Rollup validation errors. Resolved by rewriting it as a standard function mapper.
*   Standard Tailwind v4 configurations failed to load through standard PostCSS. Resolved by installing `@tailwindcss/postcss` and updating `postcss.config.js`.
*   Framer Motion transition strings failed type inference. Resolved by adding `as const` type assertions.

Next Step: Review the compiled production files under the `dist/` directory and enqueue the enqueued build files inside the WordPress child theme templates.

Warnings: Keep the base URL configured as `/syntaxis/` in `vite.config.ts`. Do not use absolute paths starting with `/` or browser storage, which are blocked on the WP subdirectory.

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
