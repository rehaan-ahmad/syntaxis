# 🌌 SYNTAXIS 2026 

> The official single-page React application for **SYNTAXIS 2026**, the premier inter-college tech fest hosted by the Nexora Tech Club at R.D. Engineering College (RDEC), Ghaziabad.

---

## 🚀 Overview

This repository contains the front-end codebase for the SYNTAXIS 2026 website. Built to be highly performant, visually stunning, and fully responsive, the application serves as the primary hub for event information, schedules, speaker profiles, and registrations.

The site is deployed as a static bundle on the subdomain `syntaxis.rdec.ac.in`, integrating seamlessly with the **Pragma Event Management System (EMS)** for all backend operations and registrations.

## ✨ Key Features

- **Modern Tech Stack**: Built with Vite, React 19, and TypeScript.
- **Dynamic Styling**: Styled using Tailwind CSS v4 with custom design tokens (glassmorphism, vibrant accents, dark mode aesthetics).
- **WebGL Plasma Background**: Full-screen animated shader background with automatic mobile fallback.
- **Fluid Animations**: Smooth scroll animations and viewport-triggered entrance effects powered by Framer Motion.
- **Interactive UI Components**: Custom-built Accordions, countdown timers, interactive tabs, and swipeable mobile carousels (Embla).
- **Self-Contained**: All assets are local — no external CDN dependencies for images or fonts at runtime.

## 🛠️ Technology Stack

- **Framework**: React 19 (SPA)
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS v4, PostCSS, native CSS custom properties
- **Animations**: Framer Motion
- **Icons**: Lucide React & Custom Brand SVGs
- **Carousels**: Embla Carousel React
- **Contact Form**: Web3Forms API

## 📦 Project Structure

```text
syntaxis/
├── public/                 # Static public assets (Favicons, logos, placeholders)
├── src/
│   ├── assets/             # Images bundled by Vite
│   ├── components/         # Reusable UI components (Buttons, Cards, Nav, Footer)
│   ├── hooks/              # Custom React hooks (useCountdown)
│   ├── lib/                # Constants and utility functions
│   ├── sections/           # Major page sections (Hero, About, Events, Schedule...)
│   ├── App.tsx             # Root layout and section assembly
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles and Tailwind configuration
├── postcss.config.js       # PostCSS configuration for Tailwind v4
├── tailwind.config.ts      # Tailwind theme extensions
└── vite.config.ts          # Vite build configuration & chunk mapping
```

## 💻 Local Development

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

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
   The site will be available at `http://localhost:5173/`

4. **Build for production:**
   ```bash
   npm run build
   ```
   The optimized static files will be generated in the `dist/` directory.

## 🌐 Deployment (Private Server — Static Hosting)

This application builds to a fully static bundle that can be served by any web server (Nginx, Apache, Caddy, etc.).

### Quick Deploy

1. Run `npm run build`
2. Upload the contents of the `dist/` directory to your server's web root for `syntaxis.rdec.ac.in`
3. Configure your web server to serve the `dist/` directory and fallback all routes to `index.html` (SPA routing)

### Nginx Example Config

```nginx
server {
    listen 80;
    server_name syntaxis.rdec.ac.in;
    root /var/www/syntaxis/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|woff2?)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

### WordPress Subdirectory Alternative

If hosting within a WordPress installation at `rdec.ac.in/syntaxis`:
1. Update `base` in `vite.config.ts` to `'/syntaxis/'`
2. Rebuild and upload to `/wp-content/themes/[child-theme]/syntaxis-dist/`
3. Use the page template described in `AGENTS.md`

## 🔧 Pre-Launch Checklist

Before going public, ensure:
- [ ] Replace all `[PLACEHOLDER]` text in `src/lib/constants.ts` with real URLs
- [ ] Add Web3Forms access key in `src/sections/TeamContact.tsx`
- [ ] Replace placeholder images with real photos (events, speakers, team, sponsors)
- [ ] Verify contact form works end-to-end
- [ ] Test on mobile devices

## 🤝 Contributing

This project is maintained by the **Nexora Tech Club**. 
If you're part of the organizing team:
1. Ensure all placeholder images in `public/assets/` are replaced with final creatives before launch.
2. Update `src/lib/constants.ts` with correct event URLs and data.
3. Test layout integrity on mobile devices before pushing to the `main` branch.

---
*Built with ❤️ by the RDEC Tech Community.*
