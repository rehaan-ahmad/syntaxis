Goal: Build a responsive, visually stunning single-page React application for the SYNTAXIS 2026 tech fest at R.D. Engineering College (RDEC), Ghaziabad, hosted on the sub-domain syntaxis.rdec.ac.in.

Current State: Fully completed all Phases (0 to 17) of the site build checklist. Migrated from Vercel to private server hosting. Code review and cleanup completed — removed Vercel-specific configuration, localized all external placeholder images, added SEO meta tags, cleaned up boilerplate artifacts. The SPA compiles cleanly and packages warning-free production assets split into optimal manual chunks. The site has been transitioned from a 4-day to a 3-day event structure with updated schedules and participant counts.

Files in Flight: None.

Changed (Migration & Cleanup Session):
*   [vite.config.ts](file:///home/rehaanahmad/projects/syntaxis/vite.config.ts) — Removed `process.env.VERCEL` conditional; base set to `'/'` for subdomain hosting.
*   [package.json](file:///home/rehaanahmad/projects/syntaxis/package.json) — Renamed from `temp-init` to `syntaxis-2026`; added description, homepage, license, bumped to v1.0.0.
*   [index.html](file:///home/rehaanahmad/projects/syntaxis/index.html) — Added Open Graph, Twitter Card, theme-color, and canonical meta tags.
*   [Events.tsx](file:///home/rehaanahmad/projects/syntaxis/src/sections/Events.tsx) — Replaced 10 placehold.co URLs with local SVG placeholders.
*   [Speakers.tsx](file:///home/rehaanahmad/projects/syntaxis/src/sections/Speakers.tsx) — Replaced 4 placehold.co URLs with local SVG placeholders.
*   [TeamContact.tsx](file:///home/rehaanahmad/projects/syntaxis/src/sections/TeamContact.tsx) — Replaced 5 placehold.co URLs with local SVG placeholders; removed `console.error` leak.
*   [GenesisTrack.tsx](file:///home/rehaanahmad/projects/syntaxis/src/sections/GenesisTrack.tsx) — Fixed markdown `**text**` rendering as literal; replaced placehold.co URL.
*   [Sponsors.tsx](file:///home/rehaanahmad/projects/syntaxis/src/sections/Sponsors.tsx) — Fixed unused `_` variable in map callbacks.
*   [.gitignore](file:///home/rehaanahmad/projects/syntaxis/.gitignore) — Added `.vercel` and `.netlify` exclusions.
*   [README.md](file:///home/rehaanahmad/projects/syntaxis/README.md) — Rewritten for private server deployment with Nginx config example.
*   Added `public/robots.txt` and `public/sitemap.xml` for SEO.
*   Added branded SVG placeholders: `placeholder-event.svg`, `placeholder-speaker.svg`, `placeholder-team.svg`, `placeholder-genesis.svg`.
*   Deleted `src/assets/vite.svg` (Vite boilerplate leftover).

Failed Attempts:
*   Bulk `AllowMultiple` replace on template literals with trailing text left residual characters — fixed with targeted per-line cleanup.

Next Step: Replace placeholder external URLs in `constants.ts` with production values. Add Web3Forms API key. Replace placeholder images with real photos before final deployment.

Warnings: Web3Forms access key (`YOUR_ACCESS_KEY`) in TeamContact.tsx must be replaced before the contact form will function. External link placeholders in constants.ts (`PRAGMA_REGISTRATION_URL`, social media URLs) must be populated before public launch.
