import { useState } from 'react';
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, ArrowUpRight, Home, User, Calendar, Zap, Clock, Globe } from "lucide-react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { SECTION_IDS, EXTERNAL_LINKS } from "../../lib/constants";

// Helper component for navigation links (scroll-based)
const NavLink = ({ to, icon: Icon, label }: { to: string; icon: React.ComponentType<{ className?: string }>; label: string }) => (
  <ScrollLink 
    to={to} 
    smooth={true}
    duration={600}
    offset={-80}
    spy={true}
    activeClass="text-[var(--color-brand)] font-semibold"
    className="group flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-sec)] hover:text-[var(--color-text-pri)] transition-colors whitespace-nowrap cursor-pointer"
  >
    <Icon className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
    <span>{label}</span>
  </ScrollLink>
)

export function Navbar({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation items configuration
  const items = {
    left: [
      { label: "Home", to: SECTION_IDS.home, icon: Home },
      { label: "About", to: SECTION_IDS.about, icon: User },
      { label: "Events", to: SECTION_IDS.events, icon: Calendar },
      { label: "Genesis Track", to: SECTION_IDS.genesis, icon: Zap }
    ],
    right: [
      { label: "Schedule", to: SECTION_IDS.schedule, icon: Clock },
      { label: "Sponsors", to: SECTION_IDS.sponsors, icon: Globe }
    ]
  };

  return (
    <>
      <header className={clsx("fixed top-0 inset-x-0 z-50 h-16 flex px-0", className)} {...props}>
        
        {/* Left Side Bar - Flexible width */}
        <div className="flex-1 h-10 bg-[var(--color-bg-glass)] backdrop-blur-[12px] border-b border-[var(--color-border)] z-20 relative min-w-0 flex items-center px-2 sm:px-4">
          <a 
            href={EXTERNAL_LINKS.college} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
            title="R.D. Engineering College"
          >
            <img 
              src={`${import.meta.env.BASE_URL}assets/logo/college-logo.png`} 
              alt="College Logo" 
              className="h-6 sm:h-7 md:h-8 w-auto object-contain" 
            />
          </a>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <line x1="0" y1="39.5" x2="100%" y2="39.5" stroke="var(--color-border)" strokeOpacity={0.5} strokeWidth={0.5} />
          </svg>
        </div>

        {/* Responsive Notch Container - 3 Slices */}
        <div className="flex h-16 relative z-10 shrink-0 -ml-px">
          
          {/* Left Slice (Corner) */}
          <div className="w-[50px] h-full relative shrink-0">
            {/* Glass Background */}
            <div className="absolute inset-0 bg-[var(--color-bg-glass)] backdrop-blur-[12px] border-b border-[var(--color-border)]" style={{ clipPath: "path('M0 0 H50 V64 C25 64 25 40 0 40 Z')" }} />
            {/* Outlines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 50 64">
              <path d="M0 39.5 C25 39.5 25 63.5 50 63.5" fill="none" stroke="var(--color-border)" strokeOpacity={0.5} strokeWidth={0.5} />
            </svg>
          </div>

          {/* Center Slice (Flexible Content Area) */}
          <div className="flex-1 h-full relative min-w-[500px] md:min-w-[700px] lg:min-w-[850px] -ml-px">
             {/* Background & Lines Layer */}
             <div className="absolute inset-0 bg-[var(--color-bg-glass)] backdrop-blur-[12px]">
                 <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                   <line x1="0" y1="63.5" x2="100%" y2="63.5" stroke="var(--color-border)" strokeOpacity={0.5} strokeWidth={0.5} />
                 </svg>
             </div>

             {/* Content Layer */}
             <div className="relative w-full h-full flex items-end justify-between pb-2 px-4 md:px-8">
               
               {/* Desktop Left Nav */}
               <nav className="hidden md:flex gap-6 mb-1 shrink-0">
                {items.left.map(item => (
                  <NavLink key={item.label} {...item} />
                ))}
              </nav>

              {/* Mobile Menu Button (Left) */}
              <button 
                className="md:hidden mb-1 p-1 text-[var(--color-text-sec)] hover:text-[var(--color-text-pri)] transition-colors cursor-pointer"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

              {/* Logo (Center) */}
              <div className="flex justify-center shrink-0 mx-2 md:mx-4 mt-1">
                <ScrollLink to="home" smooth={true} duration={600} className="flex items-center justify-center relative group cursor-pointer">
                  <img 
                    src={`${import.meta.env.BASE_URL}assets/logo/syntaxis-logo.png`} 
                    alt="Syntaxis Logo" 
                    className="h-7 md:h-8 w-auto hover:scale-105 transition-transform object-contain" 
                  />
                </ScrollLink>
              </div>

              {/* Desktop Right Nav */}
              <nav className="hidden md:flex gap-6 items-center shrink-0">
                {items.right.map(item => (
                  <NavLink key={item.label} {...item} />
                ))}
                
                <div className="flex gap-4 pl-4 border-l border-[var(--color-border)] shrink-0 items-center">
                  {/* College Home link */}
                  <a 
                    href={EXTERNAL_LINKS.college} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-[var(--color-text-sec)] hover:text-[var(--color-text-pri)] transition-colors whitespace-nowrap"
                  >
                    <span>College</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>
                  {/* Register CTA Button */}
                  <a 
                    href={EXTERNAL_LINKS.pragma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 text-xs font-semibold text-[var(--color-bg)] bg-[var(--color-brand)] rounded-[var(--radius-md)] hover:scale-105 hover:shadow-[0_0_15px_var(--color-brand-glow)] transition-all duration-200 whitespace-nowrap"
                  >
                    Register
                  </a>
                </div>
              </nav>

              {/* Mobile Right Actions */}
              <div className="md:hidden flex items-center gap-2 mb-1">
                <a 
                  href={EXTERNAL_LINKS.pragma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-semibold text-[var(--color-bg)] bg-[var(--color-brand)] rounded-[var(--radius-md)] whitespace-nowrap"
                >
                  Register
                </a>
              </div>

             </div>
          </div>

          {/* Right Slice (Corner) */}
          <div className="w-[50px] h-full relative shrink-0 -ml-px">
            {/* Glass Background */}
            <div className="absolute inset-0 bg-[var(--color-bg-glass)] backdrop-blur-[12px] border-b border-[var(--color-border)]" style={{ clipPath: "path('M0 0 H50 V40 C25 40 25 64 0 64 Z')" }} />
            {/* Outlines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 50 64">
              <path d="M0 63.5 C25 63.5 25 39.5 50 39.5" fill="none" stroke="var(--color-border)" strokeOpacity={0.5} strokeWidth={0.5} />
            </svg>
          </div>

        </div>

        {/* Right Side Bar - Flexible width */}
        <div className="flex-1 h-10 bg-[var(--color-bg-glass)] backdrop-blur-[12px] border-b border-[var(--color-border)] z-20 relative min-w-0 -ml-px flex items-center justify-end px-2 sm:px-4 gap-2 sm:gap-3">
          <img 
            src={`${import.meta.env.BASE_URL}assets/logo/aktu-logo.png`} 
            alt="AKTU Logo" 
            className="h-5 sm:h-6 md:h-7 w-auto object-contain" 
            title="Dr. A.P.J. Abdul Kalam Technical University"
          />
          <img 
            src={`${import.meta.env.BASE_URL}assets/logo/naac-logo.png`} 
            alt="NAAC Logo" 
            className="h-5 sm:h-6 md:h-7 w-auto object-contain" 
            title="NAAC Accredited"
          />
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <line x1="0" y1="39.5" x2="100%" y2="39.5" stroke="var(--color-border)" strokeOpacity={0.5} strokeWidth={0.5} />
          </svg>
        </div>

      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-[var(--color-bg-glass)] backdrop-blur-[16px] border-b border-[var(--color-border)] p-4 md:hidden shadow-lg"
          >
             <nav className="flex flex-col gap-2">
               {/* Combine all left items */}
               {items.left.map(item => (
                 <ScrollLink 
                   key={item.label} 
                   to={item.to}
                   smooth={true}
                   duration={600}
                   offset={-80}
                   className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--color-accent)]/20 transition-colors cursor-pointer"
                   onClick={() => setIsMobileMenuOpen(false)}
                 >
                   <item.icon className="w-5 h-5 text-[var(--color-brand)]" />
                   <span className="font-medium text-[var(--color-text-pri)]">{item.label}</span>
                 </ScrollLink>
               ))}
               
               {/* Combine all right items */}
               {items.right.map(item => (
                 <ScrollLink 
                   key={item.label} 
                   to={item.to}
                   smooth={true}
                   duration={600}
                   offset={-80}
                   className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--color-accent)]/20 transition-colors cursor-pointer"
                   onClick={() => setIsMobileMenuOpen(false)}
                 >
                   <item.icon className="w-5 h-5 text-[var(--color-brand)]" />
                   <span className="font-medium text-[var(--color-text-pri)]">{item.label}</span>
                 </ScrollLink>
               ))}

               <div className="h-px bg-[var(--color-border)] my-2" />
               <div className="flex flex-col gap-2">
                 <a 
                    href={EXTERNAL_LINKS.college}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-[var(--color-accent)]/20 transition-colors font-medium text-[var(--color-text-pri)]"
                    onClick={() => setIsMobileMenuOpen(false)}
                 >
                   <span>College Home</span>
                   <ArrowUpRight className="w-4 h-4" />
                 </a>
                 <a 
                    href={EXTERNAL_LINKS.pragma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-lg bg-[var(--color-brand)] text-[var(--color-bg)] font-semibold mt-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                 >
                   Register Now
                 </a>
               </div>
             </nav>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
