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
import NotFound from './components/ui/NotFound';
import PrivacyPolicy from './components/ui/PrivacyPolicy';
import KonfHubModal from './components/ui/KonfHubModal';
import FluidBg from './components/bg/FluidBg';



export function App() {

  const [isPrivacy, setIsPrivacy] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const checkRoute = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      const baseUrl = import.meta.env.BASE_URL || '/';
      // Remove base URL prefix from path
      const relativePath = path.startsWith(baseUrl) ? path.slice(baseUrl.length) : path;
      const cleanPath = relativePath.replace(/^\/+|\/+$/g, '');

      const privacyHashes = [
        '#privacy', '#privacy-policy', '#preamble', '#collection', '#purpose',
        '#payments', '#media', '#ip', '#thirdparty', '#rights', '#security',
        '#cookies', '#minors', '#grievance'
      ];

      if (
        privacyHashes.includes(hash) ||
        cleanPath === 'privacy' ||
        cleanPath === 'privacy-policy'
      ) {
        setIsPrivacy(true);
        setIsNotFound(false);
      } else if (cleanPath && cleanPath !== 'index.html' && cleanPath !== '404') {
        setIsNotFound(true);
        setIsPrivacy(false);
      } else {
        setIsPrivacy(false);
        setIsNotFound(false);
      }
    };

    checkRoute();
    window.addEventListener('popstate', checkRoute);
    window.addEventListener('hashchange', checkRoute);

    return () => {
      window.removeEventListener('popstate', checkRoute);
      window.removeEventListener('hashchange', checkRoute);
    };
  }, []);

  if (isPrivacy) {
    return (
      <>
        <FluidBg />
        <MouseEffects 
          interactionMode="sniper"
          color="#a67d45"
          showLabel={false}
          effectSize={70}
          duration={0.4}
          strokeWidth={1.5}
        />
        <PrivacyPolicy
          onBack={() => {
            window.location.hash = '';
            setIsPrivacy(false);
          }}
        />
        <ScrollToTop />
      </>
    );
  }

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
        
        <section id="events">
          <Events />
        </section>
        
        <section id="genesis">
          <GenesisTrack />
        </section>
        
        <section id="schedule">
          <Schedule />
        </section>
        
        <section id="speakers">
          <Speakers />
        </section>
        
        <section id="sponsors">
          <Sponsors />
        </section>
        
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
      
      {/* KonfHub Ticket Checkout Modal */}
      <KonfHubModal />
    </>
  );
}

export default App;
