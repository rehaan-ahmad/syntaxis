# SYNTAXIS 2026 — Project Handover & Architecture Record

> **Archive Notice:** This document is the finalized handover and operational overview for SYNTAXIS 2026. The project is concluded and archived.

---

## 1. Project Goal & Result
- **Goal:** Build and deploy a high-performance, single-page web portal for SYNTAXIS 2026, the premier inter-college tech fest of R.D. Engineering College (RDEC), Ghaziabad.
- **Result:** Successfully developed, maintained across festival operations, and transitioned into a permanent post-fest media and archive state.
- **Leadership:** Directed by Rehaan Ahmad & Diya Sharma.
- **Primary URL:** `https://syntaxis.rdec.ac.in` (Base URL: `/syntaxis/`)
- **Code Repository:** `https://github.com/rehaan-ahmad/syntaxis`

---

## 2. Technical Stack Summary
- **UI Framework:** React 19 + TypeScript (strict mode, zero errors).
- **Bundler & Tooling:** Vite 8, Rollup manual chunking (`vendor-react`, `vendor-motion`, `vendor-carousel`), oxlint static analysis.
- **Styling & Tokens:** Tailwind CSS v4, CSS custom properties (`:root`), glassmorphism overlays with `backdrop-filter: blur(12px)`.
- **Motion & FX:** Framer Motion (`whileInView`, viewport triggers), custom sniper click effect (`MouseEffects.tsx`), `<fluid-bg>` animated background canvas.
- **Ticketing & Forms:** KonfHub checkout widget modals (`KonfHubModal.tsx`), Tally embed forms (`lib/tally.ts`), and Web3Forms serverless messaging.
- **Navigation:** Single-page scroll management via `react-scroll` with sticky notch navigation (`Navbar.tsx`).

---

## 3. Project Directory Map

```
syntaxis/
├── docs/
│   └── archived/                  # Historical planning documents
│       ├── AGENTS.md              # Engineering rules and constraint reference
│       ├── Event Schedule [3-Day].md # Full chronological schedule
│       ├── HANDOVER.md            # Handover document (this file)
│       ├── SITECHANGES.md         # Operational change log
│       └── Sponsorship Tiers.md   # Partner packages & confirmed sponsors
├── public/
│   ├── assets/
│   │   ├── logo/                  # College, NAAC, and Syntaxis branding
│   │   ├── events/                # Event graphics
│   │   ├── sponsors/              # Confirmed partner logos (GeeksforGeeks, Coding Blocks, etc.)
│   │   └── team/                  # Core committee photos
│   ├── docs/
│   │   └── archithon-consent.html # Printable overnight hackathon guardian consent
│   └── favicon.svg
├── src/
│   ├── App.tsx                    # Root layout orchestrator
│   ├── main.tsx                   # Entry point
│   ├── index.css                  # Design system tokens and reset rules
│   ├── components/
│   │   ├── bg/FluidBg.tsx         # Animated fluid canvas component
│   │   ├── carousel/              # Responsive Embla event carousel
│   │   ├── effects/               # Interactive cursor effects
│   │   ├── nav/Navbar.tsx         # Notch navigation bar with mobile sheet
│   │   ├── ui/                    # Modals, banners, countdown, cards, buttons
│   │   └── Footer.tsx             # Post-fest footer with credits & repo link
│   ├── sections/                  # 9 full-screen content sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Events.tsx
│   │   ├── Schedule.tsx
│   │   ├── Speakers.tsx           # Hidden post-fest
│   │   ├── Sponsors.tsx
│   │   ├── Register.tsx           # Closed ticket cards
│   │   ├── Media.tsx              # Google Drive photo/video archive
│   │   ├── FAQ.tsx
│   │   └── TeamContact.tsx
│   ├── hooks/                     # Countdown and viewport trigger hooks
│   └── lib/                       # Constants, animations, and Tally helper
├── vite.config.ts
├── tailwind.config.ts
└── package.json
```

---

## 4. Key Maintenance & Hosting Instructions
1. **Building for Production:**
   ```bash
   npm run build
   ```
   Outputs static assets to `dist/` with relative `/syntaxis/` base pathing.
2. **Web Server Deployment:**
   Deploy contents of `dist/` to web server root `/syntaxis/` or WordPress child theme asset directory. Ensure Gzip or Brotli compression is enabled.
3. **Contact Inquiries:**
   General support: `syntaxis@rdec.in`
