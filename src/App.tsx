import { useState, useEffect } from 'react';
import MouseEffects from './components/effects/MouseEffects';
import ScrollProgress from './components/ui/ScrollProgress';
import ScrollToTop from './components/ui/ScrollToTop';
import Navbar from './components/nav/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Events from './sections/Events';
import GenesisTrack from './sections/GenesisTrack';
import Schedule from './sections/Schedule';
import Speakers from './sections/Speakers';
import Sponsors from './sections/Sponsors';
import Register from './sections/Register';
import FAQ from './sections/FAQ';
import TeamContact from './sections/TeamContact';
import Footer from './components/Footer';
import PragmaModal from './components/ui/PragmaModal';
import NotFound from './components/ui/NotFound';
import { REVEAL_DATE } from './lib/constants';
import { useIsRevealed } from './hooks/useCountdown';

// Use the fluid-bg web component via dangerouslySetInnerHTML to avoid TypeScript issues
const FluidBg = () => (
  <div
    aria-hidden="true"
    style={{
      position: 'fixed',
      inset: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      pointerEvents: 'none',
      overflow: 'hidden',
    }}
    dangerouslySetInnerHTML={{
      __html: '<fluid-bg fixed hash="#p=0.58,1.25,0,0.14,1,19,0,8,68.5,0.8,0.85,1,0,0,21,0,0,0,0,0,6102068,10911045,69902,13482925,0,0,0,0,0,3,73" style="position:fixed;inset:0;width:100vw;height:100vh;z-index:-1;"></fluid-bg>',
    }}
  />
);


export function App() {
  const isRevealed = useIsRevealed(REVEAL_DATE);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    const baseUrl = import.meta.env.BASE_URL || '/';
    // Remove base URL prefix from path
    const relativePath = path.startsWith(baseUrl) ? path.slice(baseUrl.length) : path;
    const cleanPath = relativePath.replace(/^\/+|\/+$/g, '');

    // If path is not empty, not index.html, and not a known section hash, mark as 404
    if (cleanPath && cleanPath !== 'index.html' && cleanPath !== '404') {
      setIsNotFound(true);
    }
  }, []);

  if (isNotFound) {
    return (
      <>
        <FluidBg />
        <NotFound />
      </>
    );
  }

  return (
    <>
      {/* fluid-bg animated background */}
      <FluidBg />

      {/* Sniper cursor reticle effects on user click */}
      <MouseEffects 
        interactionMode="sniper"
        color="#a67d45"
        showLabel={false}
        effectSize={70}
        duration={0.4}
        strokeWidth={1.5}
      />

      {/* Thin scroll indicator at top of window */}
      <ScrollProgress />

      {/* Notch navigation bar */}
      <Navbar />

      {/* Section segments flow */}
      <main className="relative z-10 w-full overflow-x-hidden">
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        {isRevealed && (
          <section id="events">
            <Events />
          </section>
        )}
        
        <section id="genesis">
          <GenesisTrack />
        </section>
        
        <section id="schedule">
          <Schedule />
        </section>
        
        {isRevealed && (
          <>
            <section id="speakers">
              <Speakers />
            </section>
            
            <section id="sponsors">
              <Sponsors />
            </section>
          </>
        )}
        
        <section id="register">
          <Register />
        </section>
        
        <section id="faq">
          <FAQ />
        </section>
        
        <section id="contact">
          <TeamContact />
        </section>
      </main>

      {/* Footer bar */}
      <Footer />

      {/* Scroll to Top floating action button */}
      <ScrollToTop />
      
      {/* Modals */}
      <PragmaModal />
    </>
  );
}

export default App;
