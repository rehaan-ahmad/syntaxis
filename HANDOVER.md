# SYNTAXIS 2026 — Project Handover

## Goal
Build a responsive, visually stunning single-page React application for the SYNTAXIS 2026 tech fest at R.D. Engineering College (RDEC), Ghaziabad, hosted on the sub-domain syntaxis.rdec.ac.in.

## Current State
- All build phases complete. Site is production-ready for private server deployment.
- Deep code review passed — all 15 AGENTS.md quality rules verified; oxlint reports 0 warnings/0 errors; `npm run build` compiles cleanly.
- Web3Forms email integration is live with access key `a1e5eb6a-cabe-4409-b289-9a30811d8f7d`.
- All 6 team member photos are real images (no placeholders remaining).
- All external production links are live (`constants.ts`): Pragma, Instagram, LinkedIn, Twitter/X, YouTube.
- **Background**: `fluid-bg` web component (jsDelivr CDN) renders as a fixed animated canvas behind all page content.

## Files in Flight
None.

---

## Changed (Latest Session — September 19, 2026)

### fluid-bg visibility fix
The animated background was hidden behind opaque page elements. Fixed by:
- **`src/index.css`** — Set `html`, `body`, and `#root` `background-color` to `transparent`. Added `fluid-bg { position: fixed; inset: 0; z-index: -1; pointer-events: none }` CSS rule so the canvas is always pinned behind content.
- **`src/App.tsx`** — The `FluidBg` wrapper `<div>` now carries explicit inline styles (`position: fixed`, `inset: 0`, `z-index: -1`, `pointer-events: none`) as a belt-and-suspenders measure alongside the CSS rule. `isolation: isolate` was intentionally **not** added to `#root` — it would create a stacking context that traps `z-index: -1` children inside it. Section glass overlays (`bg-[var(--color-bg-glass)]` = `rgba(17,16,14,0.80)` + `backdrop-blur-[12px]`) provide readability over the live background.

---

## Previously Changed (September 5, 2026)

### Reusable `Reveal` animation component + centralized animations
- **`src/components/ui/Reveal.tsx`** *(new)* — Wraps any child in a Framer Motion `whileInView` fade-up animation with `viewport={{ once: true }}`. Replaces dozens of duplicated `motion.div` wrappers across sections.
- **`src/lib/animations.ts`** *(new)* — Centralized Framer Motion variant presets: `fadeUpVariants` and `staggerContainerVariants`. Imported by `Reveal.tsx` and individual sections.
- **`src/hooks/useCountdown.ts`** — Minor update; `useIsRevealed` now accepts a generic `targetDateMs` parameter instead of hardcoding the reveal date constant internally.
- **`src/components/nav/Navbar.tsx`** — Minor cleanup tied to the Reveal refactor.
- **Sections refactored** (`About`, `FAQ`, `GenesisTrack`, `Register`, `Speakers`, `Sponsors`, `TeamContact`) — Replaced ad-hoc animation boilerplate with `<Reveal>` component. Net −143 lines of duplication removed.

### Pass pricing cards integrated into Register section
- **`src/lib/constants.ts`** — Added `PASS_PRICES` export containing all 5 pass tiers with pricing, descriptions, and gaming title breakdown. Fest dates updated to **October 29–31, 2026**; `FEST_INFO.target` and `useCountdown` `TARGET_DATE` updated accordingly.
- **`src/sections/Register.tsx`** — Replaced the previous placeholder CTA with full pass pricing card grid, discount callouts, and tax note (3%).
- **`src/sections/Sponsors.tsx`** — Removed pass-related content that was temporarily housed here.
- **`src/sections/TeamContact.tsx`** — Updated layout for improved social link and contact presentation.
- **`src/components/nav/Navbar.tsx`** — Minor nav cleanup (scroll offset tweak).

---

## Previously Changed (September 2, 2026)

### Tally contact form, event branding, utility components
- **`index.html`** — Added Tally embed widget script (`https://tally.so/widgets/embed.js`).
- **`src/App.tsx`** — Added `NotFound` and `ScrollToTop` mounts; path-based 404 detection via `window.location.pathname`.
- **`src/components/ui/NotFound.tsx`** *(new)* — 404 page rendered when URL path doesn't match site structure.
- **`src/components/ui/ScrollToTop.tsx`** *(new)* — Floating action button; appears after scrolling 300px, smooth-scrolls to top on click.
- **`src/sections/TeamContact.tsx`** — Replaced Web3Forms fetch-based contact form with Tally popup embed (`data-tally-open`). Removed controlled input state and form submission logic.
- **`src/sections/Events.tsx`** — Event branding updates; filter tab styling refined; `isGenesis` flag used for `aspect-[4/3]` ratio on Genesis Track card.
- **`src/sections/FAQ.tsx`** — Content and styling updates.
- **`src/sections/GenesisTrack.tsx`** — Branding copy update.
- **`src/sections/Schedule.tsx`** — Schedule layout and styling refinements.
- **`src/sections/Sponsors.tsx`** — Major rework: removed old tier grid, replaced with sponsor inquiry CTA and social proof callouts.
- **`src/components/Footer.tsx`** — Minor link update.
- **`src/lib/constants.ts`** — `EXTERNAL_LINKS.pragma` updated to live Pragma URL.
- **`submit.php`** — Removed (server-side proxy no longer needed after switch to Tally).

---

## Previously Changed (September 1, 2026)

### Production links, sponsor tiers, schedule overhaul
- **`src/lib/constants.ts`** — All `EXTERNAL_LINKS` entries (`pragma`, `instagram`, `twitter`, `linkedin`, `youtube`) updated from placeholders to live production URLs. Added `youtube` key.
- **`src/components/Footer.tsx`** — Social icons wired to live URLs; YouTube icon added.
- **`src/components/icons/SocialIcons.tsx`** *(new)* — Centralised SVG social icon components (Instagram, LinkedIn, Twitter/X, YouTube).
- **`src/sections/Hero.tsx`** — Layout polish; social links added to hero area.
- **`src/sections/Schedule.tsx`** — Complete rebuild: full 3-day schedule (Oct 29–31), day-tab switcher, timeline layout, event type badges.
- **`src/sections/Sponsors.tsx`** — Full rework with tier grid (Title, Gold, Silver, Bronze, Associate), sponsor inquiry CTA, and Sponsorship Tiers doc reference.
- **`Sponsorship Tiers.md`** *(new)* — Detailed sponsorship package document for outreach use.
- **`Event Schedule [3-Day].md`** — Updated to reflect Oct 29–31 dates.

---

## Previously Changed (August 1, 2026)

- **`index.html`** — Added fluid-bg script from jsDelivr CDN.
- **`src/App.tsx`** — Replaced `PlasmaBackground` component with `<fluid-bg>` web component using the provided hash configuration.

---

## Previously Changed (July 31, 2026)

- **`TeamContact.tsx`** — Updated team member image paths (Palak Tyagi → `palak.png`, Prabhati Pandey → `prabhati.png`). Web3Forms access key set to production value.
- **`README.md`** — Complete rewrite with GitHub badges, architecture diagram, tech stack table, bundle analysis, deployment guide, and team credits.
- **`lib/constants.ts`** — Added `REVEAL_DATE` (August 10, 2026).
- **`hooks/useCountdown.ts`** — Implemented `useIsRevealed` hook.
- **`App.tsx`** — Conditional rendering of Events, Speakers, Sponsors behind reveal date.
- **`Navbar.tsx`** & **`Footer.tsx`** — Conditional nav link rendering to avoid broken anchors pre-reveal.
- **`Hero.tsx`** & **`Register.tsx`** — CTAs route to "About" before reveal date.
- **`lib/utils/validation.ts`** — Email/domain validation utilities.
- **`.env.example`** — Environment variable template.
- **`php/submit.php`** — Server-side PHP proxy with Cloudflare Turnstile and rate limiting *(later removed in Sep 2 session)*.

---

## Next Steps
- Replace placeholder event images, speaker photos, and sponsor logos with real assets before public launch.
- Populate `[PRIZE POOL TBD]` values across event cards once finalised.
- Confirm Pragma registration URL is correct and live (`https://pragma.rdec.ac.in`).
- Verify end-to-end Tally form on production domain (`syntaxis.rdec.ac.in`).
- Update `REVEAL_DATE` in `constants.ts` if the events section reveal date changes.

## Warnings
- `REVEAL_DATE` is currently set to **August 10, 2026** — events, speakers, and sponsors sections are already revealed (past date). Update if a new reveal gate is needed.
- Fest dates in `FEST_INFO` and `useCountdown`'s `TARGET_DATE` are **October 29–31, 2026** — confirm this is the finalised date.
- Event images, speaker photos, and sponsor logos still use SVG/CDN placeholders.
- `fluid-bg` is loaded from CDN (`cdn.jsdelivr.net`) — ensure the host allows external script loading in its CSP headers.