# 🌌 SYNTAXIS 2026 

![Syntaxis 2026 Banner](https://placehold.co/1200x400/5d1c34/f0e9e3?text=SYNTAXIS+2026+-+Tech+Fest)

> The official single-page React application for **SYNTAXIS 2026**, the premier inter-college tech fest hosted by the Nexora Tech Club at R.D. Engineering College (RDEC), Ghaziabad.

---

## 🚀 Overview

This repository contains the front-end codebase for the SYNTAXIS 2026 website. Built to be highly performant, visually stunning, and fully responsive, the application serves as the primary hub for event information, schedules, speaker profiles, and registrations.

The site is designed to be hosted as a static bundle within a WordPress subdirectory (`rdec.ac.in/syntaxis`), integrating seamlessly with the **Pragma Event Management System (EMS)** for all backend operations and registrations.

## ✨ Key Features

- **Modern Tech Stack**: Built with Vite, React 18, and TypeScript.
- **Dynamic Styling**: Styled using Tailwind CSS v4 with custom design tokens (glassmorphism, vibrant accents, dark mode aesthetics).
- **Fluid Animations**: Smooth scroll animations and viewport-triggered entrance effects powered by Framer Motion.
- **Interactive UI Components**: Custom-built Accordions, countdown timers, interactive tabs, and swipeable mobile carousels (Embla).
- **Subdirectory Ready**: Configured explicitly to run from a `/syntaxis/` relative base without routing conflicts.

## 🛠️ Technology Stack

- **Framework**: React 18 (SPA)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4, PostCSS, native CSS custom properties
- **Animations**: Framer Motion, GSAP (Mouse effects)
- **Icons**: Lucide React & Custom Brand SVGs
- **Carousels**: Embla Carousel React

## 📦 Project Structure

```text
syntaxis-site/
├── public/                 # Static public assets (Favicons, etc.)
├── src/
│   ├── assets/             # Images, logos, event posters (Placeholder defaults)
│   ├── components/         # Reusable UI components (Buttons, Cards, Nav, Footer)
│   ├── hooks/              # Custom React hooks (useCountdown, etc.)
│   ├── lib/                # Constants and utility functions
│   ├── sections/           # Major page sections (Hero, About, Events, Schedule...)
│   ├── App.tsx             # Root layout and section assembly
│   ├── main.tsx            # Application entry point (Mounts to #root or #syntaxis-root)
│   └── index.css           # Global styles and Tailwind configuration
├── postcss.config.js       # PostCSS configuration for Tailwind v4
├── tailwind.config.ts      # Tailwind theme extensions
└── vite.config.ts          # Vite build configuration & chunk mapping
```

## 💻 Local Development

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone git@github.com:rehaan-ahmad/syntaxis.git
   cd syntaxis
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173/syntaxis/`

4. **Build for production:**
   ```bash
   npm run build
   ```
   The optimized static files will be generated in the `dist/` directory.

## 🌐 Deployment (WordPress Subdirectory)

This application is configured for a WordPress child theme integration. 

1. Run `npm run build`.
2. Upload the contents of the `dist/` directory to `/wp-content/themes/[child-theme]/syntaxis-dist/` on your server.
3. Use the provided page template (`page-syntaxis.php`) in WordPress to enqueue the generated `index.css` and `index.js` files.

## 🤝 Contributing

This project is maintained by the **Nexora Tech Club**. 
If you're part of the organizing team:
1. Ensure all placeholder images in `src/assets/` are replaced with final creatives before launch.
2. Update `src/lib/constants.ts` with correct event URLs and data.
3. Test layout integrity on mobile devices before pushing to the `main` branch.

---
*Built with ❤️ by the RDEC Tech Community.*
