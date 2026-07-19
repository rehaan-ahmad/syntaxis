import PlasmaBackground from './components/bg/PlasmaBackground';
import MouseEffects from './components/effects/MouseEffects';
import ScrollProgress from './components/ui/ScrollProgress';
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

export function App() {
  return (
    <>
      {/* Background canvas plasma shader or static radial fallback on mobile */}
      <PlasmaBackground />

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
    </>
  );
}

export default App;
