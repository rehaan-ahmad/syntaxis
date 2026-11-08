# AGENTS.md — Historical Engineering Constraints & Guidelines

> **Archive Notice:** This document is preserved in `docs/archived/` as the architectural rule set followed by AI engineering agents during active development of SYNTAXIS 2026.

---

## 1. Project Identity
- **Site:** SYNTAXIS 2026 — Inter-College Tech Fest
- **College:** R.D. Engineering College (RDEC), Ghaziabad
- **Dates:** October 29 – 31, 2026
- **Leadership:** Rehaan Ahmad & Diya Sharma
- **Contact:** `syntaxis@rdec.in`
- **Target URL:** `syntaxis.rdec.ac.in`

---

## 2. Core Constraints
```
PROHIBITED:
- "use client" directive (Not Next.js)
- Next.js packages (next/link, next-themes, next/navigation)
- React Router (Single-page scroll layout)
- Direct hardcoded absolute asset paths (Must use import.meta.env.BASE_URL)
- Hardcoded hex colors in components (Must use CSS variables from src/index.css)
- Direct <form> submission tags (Use controlled divs and serverless/Tally integrations)
```

```
REQUIRED:
- clsx for class joining
- react-scroll <Link> for internal navigation
- target="_blank" rel="noopener noreferrer" for external anchors
- Framer Motion for scroll triggers (viewport={{ once: true }})
- Zero TypeScript build errors
```

---

## 3. Design Tokens Reference (`src/index.css`)
- `--color-bg`: `#11100e` (Deep Obsidian)
- `--color-accent`: `#5d1c34` (Crimson Wine)
- `--color-brand`: `#a67d45` (Gold)
- `--color-text-pri`: `#f0e9e3` (Ivory)
- `--color-text-sec`: `#899581` (Sage)
- `--color-text-body`: `#cdbbad` (Parchment)
- `--color-bg-glass`: `rgba(17, 16, 14, 0.80)`
