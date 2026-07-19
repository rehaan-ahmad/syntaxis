# SYNTAXIS 2026 — Site Build TODO
>
> Single-page React app. Hosted at `rdec.ac.in/syntaxis` (WP subdirectory).
> No Next.js. No router. Scroll-based navigation only.

---

## SESSION MANAGEMENT PROTOCOL

Start of Session (Initialization):
Before writing any code, running any commands, or answering structural questions, you must read the HANDOVER.md file in the project root. Acknowledge the "Current State" and "Next Step" to align context before proceeding.

End of Session (Termination):
Whenever the keyword "HANDOVER" is triggered, you must immediately halt feature development and generate (or overwrite) HANDOVER.md in the project root. The file must strictly follow this exact format:

Goal: [What we're trying to achieve/build]
Current State: [Where the work stands right now]
Files in Flight: [Active files being modified, if any]
Changed: [What's been touched this session]
Failed Attempts: [What didn't work and why]
Next Step: [The single next thing to try]
---

## PHASE 0 — Project Setup

- [ ] Init Vite + React + TypeScript

  ```bash
  npm create vite@latest syntaxis-site -- --template react-ts
  cd syntaxis-site
  ```

- [ ] Configure `vite.config.ts` with subdirectory base

  ```ts
  export default defineConfig({
    base: '/syntaxis/',
    build: { outDir: 'dist' }
  })
  ```

- [ ] Install all dependencies

  ```bash
  npm install react-scroll framer-motion gsap clsx lucide-react embla-carousel-react embla-carousel-autoplay
  npm install -D tailwindcss postcss autoprefixer @types/react-scroll
  npx tailwindcss init -p
  ```

- [ ] Configure Tailwind with brand tokens (see AGENTS.md §TOKENS)
- [ ] Create global `index.css` with CSS custom properties
- [ ] Set `<title>SYNTAXIS 2026 | RDEC Ghaziabad</title>` in `index.html`
- [ ] Set `<meta name="description">` for SEO

---

## PHASE 1 — Design Tokens & Global Styles

- [ ] Define CSS variables in `:root` — full palette from brand spec
- [ ] Set `body { background: #11100e; color: #f0e9e3; }`
- [ ] Import Google Fonts (heading + body — TBD with Rehaan; placeholder: `Cinzel` heading, `Inter` body)
- [ ] Configure Tailwind `theme.extend` to reference CSS vars
- [ ] Add global scrollbar styles (thin, accent-colored)
- [ ] Add `html { scroll-behavior: smooth; }`
- [ ] Set up ThemeContext (dark-only for V1; toggle reserved for future)

---

## PHASE 2 — Fixed Background Layer

Component: `ClosingPlasma` (WebGL GLSL shader — Componentry)

- [ ] Copy `ClosingPlasma` source into `src/components/bg/ClosingPlasma.tsx`
- [ ] Remove `"use client"` directive (line 1)
- [ ] Replace `import { cn } from "@/lib/utils"` → `import clsx from "clsx"`, replace `cn(` → `clsx(`
- [ ] Set plasma colors to brand palette:

  ```tsx
  darkColorA="#11100e"   // Primary BG
  darkColorB="#5d1c34"   // Accent
  darkColorC="#a67d45"   // Hero Brand
  ```

- [ ] Set `position: fixed`, `top:0`, `left:0`, `w-screen h-screen`, `z-index: 0`
- [ ] Add mobile GPU fallback:

  ```tsx
  const isMobile = window.matchMedia('(max-width: 768px)').matches
  // Render <StaticGradientFallback /> instead on mobile
  ```

- [ ] Create `StaticGradientFallback` component:

  ```tsx
  // CSS radial-gradient using same brand colors, no WebGL
  background: radial-gradient(ellipse at 20% 50%, #5d1c34 0%, #11100e 60%)
  ```

- [ ] Wrap in `<PlasmaBackground />` wrapper that handles the mobile check

---

## PHASE 3 — Navbar

Component: `NotchNavbar` (VenganceUI — adapted)

- [ ] Copy NotchNavbar source into `src/components/nav/Navbar.tsx`
- [ ] Remove `"use client"`, `import Link from "next/link"`, `useTheme` from next-themes, `LogoIcon` import
- [ ] Replace all `<Link href="#section">` → `<ScrollLink to="section" smooth duration={600} offset={-80}>`
- [ ] Replace `ThemeToggle` with placeholder `<div />` (dark-only for V1)
- [ ] Remove Login/Signup buttons — replace right nav with:
  - `Register` → opens Pragma URL (external `<a target="_blank">`)
  - `College Home` → `rdec.ac.in` external link
- [ ] Replace `LogoIcon` with inline SVG placeholder: `[LOGO PLACEHOLDER — replace with actual SVG]`
- [ ] Update nav items:

  ```ts
  left:  [Home, About, Events, Genesis Track]
  right: [Schedule, Sponsors, Register → Pragma]
  ```

- [ ] Fix mobile menu: replace framer-motion AnimatePresence (keep), replace next/link with `<a>` tags
- [ ] Add `z-index: 50` on header
- [ ] Add `backdrop-filter: blur(16px)` + `bg-[#11100e]/80` on navbar background
- [ ] Test mobile hamburger open/close

---

## PHASE 4 — Hero Section

- [ ] Create `src/sections/Hero.tsx`
- [ ] Set `id="home"`, `min-h-screen`, `flex items-center justify-center`, `relative z-10`
- [ ] Background: transparent (plasma shows through)
- [ ] Content layout:

  ```
  [LOGO PLACEHOLDER — 200x200 — replace with Syntaxis logo]
  SYNTAXIS
  2026
  "Premier Tech Fest | RDEC Ghaziabad"
  Sept 21–24 | 15+ NCR Colleges | 500–900 Participants
  [CTA Button → Register on Pragma] [CTA Button → Explore Events]
  [Countdown Timer — Sept 21 target]
  ```

- [ ] Animate entry: Framer Motion `initial={{ opacity:0, y:40 }}` → `animate={{ opacity:1, y:0 }}`
- [ ] Stagger children animations (100ms between each)
- [ ] CTA primary button: `bg-[#a67d45]` gold, hover lift + glow
- [ ] CTA secondary: outline `border-[#5d1c34]`, hover fill
- [ ] Countdown timer: days/hours/minutes/seconds using `useEffect` interval
- [ ] Add `MouseEffects` component (Originkit) with `interactionMode="sniper"`, `color="#a67d45"`, `showLabel={false}`
- [ ] Scroll indicator arrow at bottom of hero (bouncing animation)

---

## PHASE 5 — About Section

- [ ] Create `src/sections/About.tsx`
- [ ] Set `id="about"`, `min-h-screen`, `relative z-10`
- [ ] Section background: `bg-[#11100e]/80 backdrop-blur-md` (glass over plasma)
- [ ] Content:

  ```
  [Section heading: ABOUT SYNTAXIS]
  [3 stat cards: 15+ Colleges | 500–900 Participants | 4 Days]
  [2-column: Left = fest description text | Right = [IMAGE PLACEHOLDER 500x400 — college/fest photo]]
  [Greek theme narrative paragraph]
  [3 pillars: Innovation | Collaboration | Excellence — icon cards]
  ```

- [ ] Stat cards: border `#5d1c34`, number color `#a67d45`, animate count-up on scroll
- [ ] Pillar cards: hover glow `box-shadow: 0 0 20px #5d1c3440`
- [ ] Animate on scroll: use Framer Motion `whileInView` with `viewport={{ once: true }}`
- [ ] Image placeholder: `[IMAGE PLACEHOLDER — 500x400 — Fest atmosphere photo]`

---

## PHASE 6 — Events Section

- [ ] Create `src/sections/Events.tsx`
- [ ] Set `id="events"`, `relative z-10`
- [ ] Section background: alternating subtle from About (add slight texture or gradient overlay)
- [ ] Content:

  ```
  [Section heading: EVENTS]
  [Filter tabs: All | Technical | Non-Technical | Workshop]
  [Event cards grid — 3 columns desktop, 2 tablet, 1 mobile]
  ```

- [ ] Each event card contains:

  ```
  [EVENT BANNER PLACEHOLDER — 400x200 — replace with event poster]
  Event Name
  Category badge
  Short description (2 lines max)
  Team size + Prize pool (placeholder: TBD)
  [Register → Pragma] button
  ```

- [ ] Placeholder events (8 total, 2 per category):
  - Tech: `Hackathon`, `Code Battle`
  - Non-Tech: `Debate`, `Photography`
  - Workshop: `AI Workshop`, `Web Dev Bootcamp`
  - Open: `Gaming`, `Quiz`
- [ ] Filter tabs: active state `bg-[#5d1c34]`, inactive `border-[#899581]`
- [ ] Card hover: lift + border glow
- [ ] Cards animate in on scroll (stagger)
- [ ] Use Carousel_006 (Skiper54) for mobile view — swipeable events carousel
- [ ] Adapt Skiper54: remove `@/` imports, replace image srcs with placeholder `/assets/events/placeholder-event.jpg`

---

## PHASE 7 — Genesis Track Section

- [ ] Create `src/sections/GenesisTrack.tsx`
- [ ] Set `id="genesis"`, `relative z-10`
- [ ] Dedicated section — NOT inside Events (separate nav link)
- [ ] Content:

  ```
  [Section heading: GENESIS TRACK]
  [Subtitle: Exclusively for Class 9–10 Students]
  [2-column: Left = description + why join | Right = [IMAGE PLACEHOLDER 400x400]]
  [Event cards for Genesis Track events — 2 cards]
  [Eligibility criteria]
  [Parent-friendly CTA: Learn More → Pragma Genesis Track page]
  ```

- [ ] Use warmer color tone for this section (`#a67d45` gold accents more prominent)
- [ ] Add school outreach badge/ribbon on section header
- [ ] Genesis event cards: same card component as Events but `border-[#a67d45]` instead of accent

---

## PHASE 8 — Schedule Timeline

> Content TBD — build structure, populate with placeholders

- [ ] Create `src/sections/Schedule.tsx`
- [ ] Set `id="schedule"`, `relative z-10`
- [ ] Content:

  ```
  [Section heading: SCHEDULE]
  [Day tabs: Day 1 (Sep 21) | Day 2 (Sep 22) | Day 3 (Sep 23) | Day 4 (Sep 24)]
  [Vertical timeline per day]
  ```

- [ ] Each timeline item:

  ```
  [TIME PLACEHOLDER] — [EVENT NAME PLACEHOLDER]
  [Venue: PLACEHOLDER] | [Duration: PLACEHOLDER]
  ```

- [ ] Timeline visual: left line `bg-[#5d1c34]`, dot `bg-[#a67d45]`
- [ ] Active day tab: `bg-[#5d1c34]`
- [ ] Animate timeline items on tab switch (framer-motion slide in)
- [ ] Placeholder text on all items: `[Schedule TBD — to be updated]`

---

## PHASE 9 — Speakers / Guests

> Content TBD — build structure, populate with placeholders

- [ ] Create `src/sections/Speakers.tsx`
- [ ] Set `id="speakers"`, `relative z-10`
- [ ] Content:

  ```
  [Section heading: SPEAKERS & GUESTS]
  [Cards grid — 4 columns desktop, 2 tablet, 1 mobile]
  ```

- [ ] Each speaker card:

  ```
  [SPEAKER PHOTO PLACEHOLDER — 200x200 circle — replace with actual photo]
  [SPEAKER NAME PLACEHOLDER]
  [DESIGNATION PLACEHOLDER]
  [ORGANIZATION PLACEHOLDER]
  [Social icon links — placeholder hrefs]
  ```

- [ ] 4 placeholder speaker cards
- [ ] Card: glassmorphism `bg-[#11100e]/60 backdrop-blur-sm border border-[#5d1c34]/40`
- [ ] Hover: photo scale-up, border glow
- [ ] Add `[TO BE ANNOUNCED]` watermark overlay on placeholder photos

---

## PHASE 10 — Sponsors

> Content TBD — build tier structure, populate with placeholders

- [ ] Create `src/sections/Sponsors.tsx`
- [ ] Set `id="sponsors"`, `relative z-10`
- [ ] 5 tiers (from fest docs) — display hierarchy top to bottom:

  ```
  Tier 1 (Title): 1 logo — largest
  Tier 2 (Platinum): up to 2 logos
  Tier 3 (Gold): up to 3 logos
  Tier 4 (Silver): up to 4 logos
  Tier 5 (Associate): up to 6 logos
  ```

- [ ] Each logo: `[SPONSOR LOGO PLACEHOLDER — replace with actual — Tier N]`
- [ ] Placeholder: gray box with tier label text, sized by tier importance
- [ ] Add `Become a Sponsor` CTA → `mailto:syntaxis@rdec.in`
- [ ] Sponsor logos: grayscale by default, color on hover
- [ ] Carousel_006 for lower-tier sponsors on mobile

---

## PHASE 11 — Register CTA

- [ ] Create `src/sections/Register.tsx`
- [ ] Set `id="register"`, `relative z-10`
- [ ] Full-width CTA block — high contrast, no glass
- [ ] Content:

  ```
  [SYNTAXIS 2026 — REGISTER NOW]
  [Dates: Sept 21–24, 2026]
  [Countdown Timer — same as Hero, shared component]
  [Register on Pragma →] button (primary gold)
  [View Events →] scroll link
  [Note: Registration powered by Pragma EMS]
  ```

- [ ] Background: `bg-[#5d1c34]` — breaks visual monotony from dark BG
- [ ] Button: `bg-[#a67d45]` + hover scale
- [ ] External link: opens Pragma in new tab

---

## PHASE 12 — FAQs

- [ ] Create `src/sections/FAQ.tsx`
- [ ] Set `id="faq"`, `relative z-10`
- [ ] Accordion pattern — one open at a time
- [ ] Content (placeholder questions):

  ```
  Q: Who can participate?
  Q: How do I register?
  Q: Is there a registration fee?
  Q: Can outstation students participate?
  Q: What is the Genesis Track?
  Q: How many events can one team enter?
  Q: Where is RDEC located?
  Q: When will winners be announced?
  ```

- [ ] Accordion: Framer Motion `AnimatePresence` for smooth open/close
- [ ] Active item: border-left `4px solid #a67d45`
- [ ] Chevron icon rotates on open
- [ ] All answers: `[ANSWER PLACEHOLDER — to be filled by organizing team]`

---

## PHASE 13 — Team + Contact

- [ ] Create `src/sections/TeamContact.tsx`
- [ ] Set `id="contact"`, `relative z-10`
- [ ] Two sub-sections:

### Team Grid

```
[Section heading: ORGANIZING TEAM]
[Cards — 3 columns desktop, 2 tablet, 1 mobile]
Each card:
  [TEAM MEMBER PHOTO PLACEHOLDER — 150x150 circle]
  [NAME PLACEHOLDER]
  [ROLE PLACEHOLDER]
  [LinkedIn icon — placeholder href]
```

- [ ] 6 placeholder team cards

### Contact Form

```
[Section heading: GET IN TOUCH]
Name field
Email field
Institution field
Message textarea
[Send Message] button
```

- [ ] Wire to Web3Forms:

  ```tsx
  action="https://api.web3forms.com/submit"
  // access_key hidden field → add actual key from web3forms.com
  // to: syntaxis@rdec.in (configured in Web3Forms dashboard)
  ```

- [ ] Form validation: required fields, email format check
- [ ] Submit state: show Abstergo loader (UIverse CSS) during send
- [ ] Success: "Message sent! We'll get back to you soon."
- [ ] Error: "Something went wrong. Email us at <syntaxis@rdec.in>"
- [ ] No `<form>` tag — use `<div>` + `onSubmit` handler via fetch POST

---

## PHASE 14 — Footer

- [ ] Create `src/components/Footer.tsx`
- [ ] Content:

  ```
  [SYNTAXIS LOGO PLACEHOLDER]
  SYNTAXIS 2026 | RDEC Ghaziabad
  Sept 21–24, 2026
  [Social icons: Instagram | LinkedIn | Twitter — placeholder hrefs]
  [Quick links: Home | About | Events | Register]
  Contact: syntaxis@rdec.in
  © 2026 Nexora — RDEC Tech Club. All rights reserved.
  Powered by Pragma EMS
  ```

- [ ] Background: `bg-[#0a0908]` (darker than main BG)
- [ ] Border-top: `1px solid #5d1c3460`

---

## PHASE 15 — Global Interactivity

- [ ] Add `MouseEffects` globally in `App.tsx`:

  ```tsx
  <MouseEffects
    interactionMode="sniper"
    color="#a67d45"
    showLabel={false}
    effectSize={70}
    duration={0.4}
  />
  ```

- [ ] Remove GSAP dependency from MouseEffects if GSAP not otherwise used (use CSS animation fallback)
- [ ] Add Abstergo loader CSS to `index.css` — used on form submit
- [ ] Add scroll progress bar at top of page (thin `#a67d45` line)

---

## PHASE 16 — Responsive Audit

- [ ] Mobile (< 640px): single column, hamburger nav, swipeable carousels
- [ ] Tablet (640–1024px): 2-column grids, notch navbar collapses
- [ ] Desktop (> 1024px): full layout
- [ ] Test on:
  - [ ] iPhone SE (375px)
  - [ ] Galaxy A (412px)
  - [ ] iPad (768px)
  - [ ] Laptop (1280px)
  - [ ] Desktop (1920px)
- [ ] Fix any overflow-x issues (common with plasma canvas)
- [ ] Verify touch scroll not blocked by canvas

---

## PHASE 17 — Performance

- [ ] Plasma GPU fallback on mobile (Phase 2)
- [ ] Lazy load all section images with `loading="lazy"`
- [ ] Split heavy sections into separate chunks (Vite code splitting)
- [ ] GSAP: import only used plugins, not full gsap bundle
- [ ] Verify no memory leaks: plasma RAF cancelled on unmount ✓ (built-in)
- [ ] Lighthouse score target: Performance > 80 mobile

---

## PHASE 18 — WP Integration

- [ ] Set `vite.config.ts` `base: '/syntaxis/'`
- [ ] Set `PUBLIC_URL=/syntaxis` in env
- [ ] Verify all asset paths use `import.meta.env.BASE_URL`
- [ ] Create WP child theme page template (see AGENTS.md §WP-TEMPLATE)
- [ ] Create `.htaccess` inside `/syntaxis/` if `mod_rewrite` available
- [ ] Test: `rdec.ac.in/syntaxis` loads correctly
- [ ] Test: all anchor scroll links work within subdirectory

---

## PHASE 19 — Final QA Checklist

- [ ] All placeholder text tagged `[PLACEHOLDER]` — search and list before handoff
- [ ] All placeholder images tagged with replacement instructions
- [ ] Web3Forms access key added
- [ ] Pragma URL linked correctly
- [ ] All external links open in `target="_blank" rel="noopener noreferrer"`
- [ ] Meta tags complete (OG image, description, title)
- [ ] Favicon set (placeholder: initials SVG)
- [ ] Build passes: `npm run build`
- [ ] Dist folder uploaded to `/syntaxis/` on college server

---

## Placeholder Registry

Track all placeholders here as they're added:

| Location | Placeholder | Replace With |
|---|---|---|
| Navbar | `[LOGO PLACEHOLDER]` | Syntaxis SVG logo |
| Hero | `[LOGO PLACEHOLDER 200x200]` | Syntaxis logo |
| About | `[IMAGE PLACEHOLDER 500x400]` | Fest atmosphere photo |
| Genesis | `[IMAGE PLACEHOLDER 400x400]` | Genesis Track photo |
| Events (×8) | `[EVENT BANNER 400x200]` | Event-specific poster |
| Speakers (×4) | `[SPEAKER PHOTO 200x200]` | Speaker headshots |
| Sponsors (×5 tiers) | `[SPONSOR LOGO — Tier N]` | Sponsor brand logos |
| Team (×6) | `[TEAM MEMBER PHOTO 150x150]` | Team headshots |
| Schedule | `[Schedule TBD]` | Finalized schedule |
| All FAQ answers | `[ANSWER PLACEHOLDER]` | Final answers from team |
| Web3Forms | `YOUR_ACCESS_KEY` | Actual key |
| Pragma URL | `PRAGMA_REGISTRATION_URL` | Actual Pragma URL |
| Social links | `#` | Actual social URLs |
