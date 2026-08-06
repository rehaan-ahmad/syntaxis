# SYNTAXIS 2026 — Project Handover

## Goal
Build a responsive, visually stunning single-page React application for the SYNTAXIS 2026 tech fest at R.D. Engineering College (RDEC), Ghaziabad, hosted on the sub-domain syntaxis.rdec.ac.in.

## Current State
- All build phases complete. Site is production-ready for private server deployment.  
- Deep code review passed — all 15 AGENTS.md quality rules verified; oxlint reports 0 warnings/0 errors; `npm run build` compiles cleanly.  
- Web3Forms email integration is live with access key `a1e5eb6a-cabe-4409-b289-9a30811d8f7d`.  
- All 6 team member photos are now real images (no placeholders remaining).  
- `README.md` has been rewritten for the GitHub repository.

## Files in Flight
None.

## Changed (Latest Session — August 1, 2026)
- **HANDOVER.md** — Updated session date and documented the removal of legacy documentation and task management files (`Changes.md`, `TODO.md`).

## Previously Changed (July 31, 2026)
- **TeamContact.tsx** — Updated remaining team member image paths: Palak Tyagi (`palak.png`) and Prabhati Pandey (`prabhati.png`) now use real photos instead of `placeholder-team.svg`. Web3Forms access key updated from `YOUR_ACCESS_KEY` placeholder to production key `a1e5eb6a-cabe-4409-b289-9a30811d8f7d`.
- **README.md** — Complete rewrite with GitHub badges, architecture diagram, design system documentation, tech stack table, bundle analysis, deployment guide (including Nginx example config), pre-launch checklist, and team credits.
- **lib/constants.ts** — Added `REVEAL_DATE` constant representing August 10, 2026.
- **hooks/useCountdown.ts** — Implemented `useIsRevealed` custom hook to track and dynamically update reveal state.
- **App.tsx** — Conditionally render Events, Speakers, and Sponsors sections only after the reveal date.
- **Navbar.tsx** & **Footer.tsx** — Conditionally render link targets pointing to events/sponsors sections to avoid navigation bugs.
- **Hero.tsx** & **Register.tsx** — Conditionally route CTAs to "About" (“Learn More” / “View Details”) instead of “Events” prior to August 10.
- **lib/utils/validation.ts** — Added robust email/domain validation utilities.
- **.env.example** — Added placeholder environment‑variable template for local development and Vercel deployment, emphasizing that `WEB3FORMS_ACCESS_KEY` must remain server‑side only.
- **php/submit.php** — Implemented server‑side proxy with Cloudflare Turnstile verification, rate limiting, and Web3Forms submission; env‑var placeholders added for `TURNSTILE_SECRET_KEY` and `WEB3FORMS_ACCESS_KEY`.

## Next Step
- Replace placeholder external URLs in `constants.ts` with production values (`PRAGMA_REGISTRATION_URL`, social media URLs).  
- Replace placeholder event images, speaker photos, and sponsor logos with real assets before public launch.  
- Populate `[PRIZE POOL TBD]` values across event cards.  
- Verify end‑to‑end form submission on the production domain (`syntaxis.rdec.ac.in`).  

## Warnings
- External link placeholders in `constants.ts` (`PRAGMA_REGISTRATION_URL`, `SYNTAXIS_INSTAGRAM_URL`, `SYNTAXIS_LINKEDIN_URL`, `SYNTAXIS_TWITTER_URL`) must be populated before public launch.  
- Event images, speaker photos, and sponsor logos still use SVG placeholders.  
- Ensure that `TURNSTILE_SECRET_KEY` and `WEB3FORMS_ACCESS_KEY` are set on the server environment (e.g., `/etc/environment` or Apache `.htaccess`) before deploying to production.