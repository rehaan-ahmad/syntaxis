# AGENTS.md — Syntaxis 2026 Site
> Instructions for any AI agent building this site.
> Read this file completely before writing a single line of code.

---

## 1. PROJECT IDENTITY

**Site:** SYNTAXIS 2026 — Inter-college Tech Fest  
**College:** R.D. Engineering College (RDEC), Ghaziabad  
**Dates:** September 11-13, 2026  
**Scale:** 25+ NCR Colleges, 700–900 participants  
**Contact:** syntaxis@rdec.in  
**EMS:** Pragma (separate system — link only, do not build here)

**Deployment target:** Subdomain: syntaxis.rdec.ac.in  

---

## 2. CRITICAL CONSTRAINTS

```
NEVER use:
- "use client" directive (not Next.js)
- import Link from "next/link" (not Next.js)
- import { useTheme } from "next-themes" (not Next.js)
- import { useRouter } from "next/navigation" (not Next.js)
- @/ path aliases unless configured in vite.config.ts
- BrowserRouter or any React Router (no routing — single page)
- localStorage or sessionStorage (WP host may block)
- <form> HTML tags → use <div> + fetch POST pattern
- window.location.href changes (breaks subdirectory)
- absolute paths starting with / (breaks subdirectory — use BASE_URL)
```

```
ALWAYS use:
- import clsx from "clsx" to replace cn()
- react-scroll <Link> for all in-page navigation
- <a href="URL" target="_blank" rel="noopener noreferrer"> for external links
- import.meta.env.BASE_URL for all asset paths
- Framer Motion for animations (already in deps)
- CSS custom properties (vars) for all colors — never hardcode hex except in tokens file
```

---

## 3. DESIGN TOKENS

### CSS Custom Properties — define in `src/index.css` under `:root`

```css
:root {
  /* BRAND PALETTE */
  --color-bg:          #11100e;   /* Primary Background */
  --color-accent:      #5d1c34;   /* Accent / Crimson */
  --color-brand:       #a67d45;   /* Hero Brand / Gold */
  --color-text-sec:    #899581;   /* Secondary Text / Sage */
  --color-text-body:   #cdbbad;   /* Body Text / Parchment */
  --color-text-pri:    #f0e9e3;   /* Primary Text / Ivory */

  /* DERIVED */
  --color-bg-glass:    rgba(17, 16, 14, 0.80);
  --color-accent-glow: rgba(93, 28, 52, 0.40);
  --color-brand-glow:  rgba(166, 125, 69, 0.30);
  --color-border:      rgba(93, 28, 52, 0.40);
  --color-border-gold: rgba(166, 125, 69, 0.40);

  /* SPACING */
  --space-unit: 8px;
  --section-pad: clamp(4rem, 8vw, 8rem);

  /* TYPOGRAPHY */
  --font-heading: 'Cinzel', 'Georgia', 'Raleway SemiBold' serif;     /* Placeholder — confirm with Rehaan */
  --font-body:    'Inter', 'system-ui', sans-serif;
  --font-mono:    'JetBrains Mono', monospace;

  /* RADIUS */
  --radius-sm:  4px;
  --radius-md:  8px;
  --radius-lg:  16px;
  --radius-xl:  24px;
  --radius-pill: 9999px;

  /* Z-INDEX STACK */
  --z-plasma:   0;
  --z-sections: 10;
  --z-glass:    5;
  --z-nav:      50;
  --z-modal:    100;
  --z-effects:  20;
}
```

### Tailwind Config — `tailwind.config.ts`

```ts
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:       'var(--color-bg)',
        accent:   'var(--color-accent)',
        brand:    'var(--color-brand)',
        'text-sec':  'var(--color-text-sec)',
        'text-body': 'var(--color-text-body)',
        'text-pri':  'var(--color-text-pri)',
      },
      fontFamily: {
        heading: 'var(--font-heading)',
        body:    'var(--font-body)',
      },
      backdropBlur: { glass: '12px' },
    },
  },
}
```

---

## 4. FILE STRUCTURE

```
syntaxis-site/
├── public/
│   ├── favicon.svg                    [PLACEHOLDER — initials SVG]
│   └── assets/
│       ├── logo/
│       │   └── syntaxis-logo.svg      [PLACEHOLDER]
│       ├── events/
│       │   └── placeholder-event.jpg  [PLACEHOLDER — 400x200]
│       ├── speakers/
│       │   └── placeholder-speaker.jpg [PLACEHOLDER — 200x200]
│       ├── sponsors/
│       │   └── placeholder-sponsor.svg [PLACEHOLDER per tier]
│       └── team/
│           └── placeholder-team.jpg   [PLACEHOLDER — 150x150]
├── src/
│   ├── index.css                      Global tokens + base styles
│   ├── main.tsx                       Vite entry
│   ├── App.tsx                        Root: BG + Nav + Sections + Footer
│   ├── components/
│   │   ├── bg/
│   │   │   ├── ClosingPlasma.tsx      WebGL plasma (adapted)
│   │   │   ├── StaticGradientFallback.tsx  Mobile fallback
│   │   │   └── PlasmaBackground.tsx   Wrapper with mobile check
│   │   ├── nav/
│   │   │   └── Navbar.tsx             NotchNavbar (adapted)
│   │   ├── effects/
│   │   │   └── MouseEffects.tsx       Sniper click effect (adapted)
│   │   ├── ui/
│   │   │   ├── Button.tsx             Primary / secondary / outline variants
│   │   │   ├── Card.tsx               Glass card base component
│   │   │   ├── Badge.tsx              Category / tier badge
│   │   │   ├── Accordion.tsx          FAQ accordion
│   │   │   ├── CountdownTimer.tsx     Days/hours/mins/secs to Sept 21
│   │   │   ├── ScrollProgress.tsx     Top-of-page progress bar
│   │   │   └── SectionHeading.tsx     Consistent heading style
│   │   ├── carousel/
│   │   │   └── EventCarousel.tsx      Skiper54 carousel (adapted)
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Events.tsx
│   │   ├── GenesisTrack.tsx
│   │   ├── Schedule.tsx
│   │   ├── Speakers.tsx
│   │   ├── Sponsors.tsx
│   │   ├── Register.tsx
│   │   ├── FAQ.tsx
│   │   └── TeamContact.tsx
│   ├── hooks/
│   │   ├── useCountdown.ts
│   │   └── useInView.ts              Framer Motion viewport trigger
│   └── lib/
│       └── constants.ts              Section IDs, Pragma URL, etc.
├── vite.config.ts
├── tailwind.config.ts
└── index.html
```

---

## 5. APP.TSX STRUCTURE

```tsx
// App.tsx — Root layout
export default function App() {
  return (
    <>
      <PlasmaBackground />              {/* z-0 fixed */}
      <MouseEffects ... />              {/* z-20 global */}
      <ScrollProgress />                {/* z-50 thin top bar */}
      <Navbar />                        {/* z-50 fixed */}

      <main className="relative z-10">
        <section id="home">   <Hero />         </section>
        <section id="about">  <About />        </section>
        <section id="events"> <Events />       </section>
        <section id="genesis"><GenesisTrack /> </section>
        <section id="schedule"><Schedule />    </section>
        <section id="speakers"><Speakers />    </section>
        <section id="sponsors"><Sponsors />    </section>
        <section id="register"><Register />    </section>
        <section id="faq">    <FAQ />          </section>
        <section id="contact"><TeamContact />  </section>
      </main>

      <Footer />
    </>
  )
}
```

---

## 6. COMPONENT ADAPTATION GUIDE

### ClosingPlasma (from Componentry)
```
REMOVE:  "use client" (line 1)
REPLACE: import { cn } from "@/lib/utils"
WITH:    import clsx from "clsx"
REPLACE: cn( → clsx(
SET COLORS:
  darkColorA="#11100e"
  darkColorB="#5d1c34"
  darkColorC="#a67d45"
  themeMode="dark"
  speed={0.8}
  turbulence={1.1}
  sparkle={1.2}
  mouseInfluence={0.8}
  grain={0.6}
ADD: Mobile check before render
```

### NotchNavbar (from VenganceUI)
```
REMOVE:  "use client"
REMOVE:  import Link from "next/link"
REMOVE:  import { useTheme } from "next-themes"
REMOVE:  import LogoIcon from '@/assets/logo/logo-icon'
REMOVE:  ThemeToggle, Login, Signup
REPLACE: <Link href="..."> → <ScrollLink to="..." smooth duration={600} offset={-80}>
REPLACE: LogoIcon → inline SVG or <img src={`${import.meta.env.BASE_URL}assets/logo/syntaxis-logo.svg`} />
REPLACE: nav items with Syntaxis sections (see TODO §PHASE 3)
ADD:     backdrop-blur to header background
KEEP:    AnimatePresence mobile menu (framer-motion stays)
KEEP:    hamburger menu logic
```

### MouseEffects (from Originkit)
```
REMOVE:  "use client"
KEEP:    all GSAP logic
SET:     interactionMode="sniper"
SET:     color="#a67d45"
SET:     showLabel={false}
SET:     effectSize={70}
SET:     duration={0.4}
SET:     strokeWidth={1.5}
MOUNT:   globally in App.tsx, not inside any single section
```

### Carousel_006 / Skiper54 (from SkiperUI)
```
REMOVE:  "use client"
REPLACE: @/ imports → relative imports
REPLACE: image srcs → import.meta.env.BASE_URL + 'assets/events/placeholder-event.jpg'
ADAPT:   images prop type to accept { src, alt, title, category? }
USE FOR: Events section on mobile, Sponsors lower tiers
```

### Abstergo Loader (from UIverse CSS)
```
ADD TO:  src/index.css (paste CSS variables + keyframes)
USE AS:  Form submit loading state in TeamContact.tsx
WRAP IN: <div className="ui-abstergo"> JSX equivalent
```

### Theme Switch (from UIverse CSS)
```
STATUS:  Reserved for V2 — dark mode only in V1
ADD:     CSS to index.css but do not mount component yet
```

---

## 7. SECTION IMPLEMENTATION RULES

### Every section MUST:
- Have an `id` matching the nav `to` prop exactly
- Use `padding: var(--section-pad) 1rem` vertically
- Use `max-w-7xl mx-auto` for content container
- Use `<SectionHeading>` component for consistency
- Use `whileInView={{ opacity:1, y:0 }}` from Framer Motion
- Use `viewport={{ once: true, margin: "-100px" }}` on Framer wrappers

### Glass overlay for sections:
```tsx
// Use on sections that need readable text over plasma
<div className="bg-[var(--color-bg-glass)] backdrop-blur-[12px]">
```

### Section alternation (visual rhythm):
```
Hero:         transparent (plasma fully visible)
About:        glass overlay
Events:       dark solid #11100e + subtle texture
Genesis:      glass overlay with gold tint
Schedule:     dark solid
Speakers:     glass overlay
Sponsors:     dark solid
Register:     solid #5d1c34 (accent color — full break)
FAQ:          dark solid
TeamContact:  glass overlay
Footer:       #0a0908 (deepest dark)
```

---

## 8. PLACEHOLDER CONVENTIONS

Use these EXACT placeholder formats so they're easy to find-replace later:

```tsx
// Images
<img src={`${import.meta.env.BASE_URL}assets/events/placeholder-event.jpg`}
     alt="[EVENT NAME PLACEHOLDER]" />

// Text placeholders
<p>[SPEAKER NAME — TO BE CONFIRMED]</p>
<p>[ANSWER PLACEHOLDER — Fill before launch]</p>
<span>[PRIZE POOL TBD]</span>

// URLs
href="PRAGMA_REGISTRATION_URL"    // Pragma link
href="SYNTAXIS_INSTAGRAM_URL"     // Social links

// Dimensions reference for designer
// [PLACEHOLDER: 400×200 — Event poster landscape]
// [PLACEHOLDER: 200×200 circle — Speaker headshot]
// [PLACEHOLDER: 150×150 circle — Team member photo]
// [PLACEHOLDER: 500×400 — Fest atmosphere landscape]
```

Placeholder image for development:
```tsx
// Use placehold.co during dev — swap to real assets before launch
src={`https://placehold.co/400x200/${encodeURIComponent('5d1c34')}/${encodeURIComponent('f0e9e3')}?text=Event+Poster`}
```

---

## 9. BUTTON VARIANTS

```tsx
// Primary CTA — gold
<button className="
  bg-[var(--color-brand)] text-[var(--color-bg)]
  font-semibold px-8 py-3 rounded-[var(--radius-md)]
  hover:scale-105 hover:shadow-[0_0_20px_var(--color-brand-glow)]
  transition-all duration-200
">

// Secondary CTA — outlined accent
<button className="
  border border-[var(--color-accent)] text-[var(--color-text-pri)]
  font-semibold px-8 py-3 rounded-[var(--radius-md)]
  hover:bg-[var(--color-accent)] hover:text-white
  transition-all duration-200
">

// Ghost — text only
<button className="
  text-[var(--color-brand)] underline-offset-4
  hover:underline transition-colors
">
```

---

## 10. COUNTDOWN TIMER

```tsx
// src/hooks/useCountdown.ts
const TARGET = new Date('2026-09-21T09:00:00+05:30') // IST

export function useCountdown() {
  // returns { days, hours, minutes, seconds, isExpired }
}

// src/components/ui/CountdownTimer.tsx
// Display: DD : HH : MM : SS
// Labels: DAYS | HOURS | MINUTES | SECONDS
// Colors: numbers = var(--color-brand), labels = var(--color-text-sec)
```

---

## 11. CONTACT FORM — Web3Forms

```tsx
// DO NOT use <form> tag
// Use <div> with controlled inputs + fetch POST

const handleSubmit = async () => {
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: 'YOUR_ACCESS_KEY',  // [PLACEHOLDER — add from web3forms.com]
      name,
      email,
      institution,
      message,
      subject: 'Syntaxis 2026 — Contact Form',
    })
  })
  const data = await res.json()
  // handle data.success
}
```

---

## 12. CONSTANTS FILE

```ts
// src/lib/constants.ts

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
  pragma:     'PRAGMA_REGISTRATION_URL',     // [PLACEHOLDER]
  college:    'https://rdec.ac.in',
  instagram:  'SYNTAXIS_INSTAGRAM_URL',      // [PLACEHOLDER]
  linkedin:   'SYNTAXIS_LINKEDIN_URL',       // [PLACEHOLDER]
  twitter:    'SYNTAXIS_TWITTER_URL',        // [PLACEHOLDER]
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
```

---

## 13. VITE CONFIG

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/syntaxis/',        // CRITICAL for WP subdirectory
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react':   ['react', 'react-dom'],
          'vendor-motion':  ['framer-motion'],
          'vendor-gsap':    ['gsap'],
          'vendor-carousel':['embla-carousel-react'],
        }
      }
    }
  }
})
```

---

## 14. WP INTEGRATION

### Child theme page template
Create `page-syntaxis.php` in WP child theme:
```php
<?php
/* Template Name: Syntaxis Fest 2026 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>
<body>
<div id="syntaxis-root"></div>
<?php wp_footer(); ?>
</body>
</html>
```

### functions.php enqueue (child theme)
```php
function syntaxis_enqueue() {
  if (is_page_template('page-syntaxis.php')) {
    // Enqueue built CSS
    wp_enqueue_style('syntaxis-css',
      get_stylesheet_directory_uri() . '/syntaxis-dist/assets/index.css',
      [], '1.0.0'
    );
    // Enqueue built JS
    wp_enqueue_script('syntaxis-js',
      get_stylesheet_directory_uri() . '/syntaxis-dist/assets/index.js',
      [], '1.0.0', true
    );
  }
}
add_action('wp_enqueue_scripts', 'syntaxis_enqueue');
```

### Upload path
```
/wp-content/themes/[child-theme]/syntaxis-dist/
  ├── assets/
  │   ├── index.js
  │   ├── index.css
  │   └── [chunk files]
  └── [public assets copied here]
```

---

## 15. MOBILE PERFORMANCE RULES

```
IF viewport width <= 768px:
  - Render StaticGradientFallback instead of ClosingPlasma
  - Disable MouseEffects (pointer: coarse check)
  - Use swipeable carousel instead of grid for Events
  - Reduce animation durations by 30%
  - Disable backdrop-filter blur on low-end detection

GPU fallback check:
  const isMobile = window.matchMedia('(max-width: 768px)').matches
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

IF prefersReducedMotion:
  - Disable all Framer Motion animations
  - Disable plasma animation (static frame only)
  - Disable MouseEffects entirely
```

---

## 16. WHAT NOT TO BUILD

```
NOT in scope for this repo:
- Pragma EMS (separate Laravel + React PWA repo)
- Registration forms (handled by Pragma)
- Payment flows (handled by Pragma)
- Admin dashboard
- Any server-side logic
- CMS or database
- Authentication
- Live updates / WebSockets
- Gallery (no past edition content yet)
- Merchandise store
```

---

## 17. QUALITY CHECKLIST — Before Marking Any Phase Complete

- [ ] No `"use client"` in any file
- [ ] No Next.js imports in any file
- [ ] No `<form>` tags — fetch-based contact form only
- [ ] All colors use CSS vars — no hardcoded hex except in tokens
- [ ] All images use `import.meta.env.BASE_URL` prefix
- [ ] All external links have `target="_blank" rel="noopener noreferrer"`
- [ ] All placeholder text uses `[PLACEHOLDER]` convention
- [ ] All sections have correct `id` matching nav scroll targets
- [ ] Framer Motion `viewport={{ once: true }}` on all scroll animations
- [ ] Mobile GPU fallback in place for plasma
- [ ] `npm run build` passes with zero errors
