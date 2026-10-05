import { useState, useEffect, useCallback } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Skills from './sections/Skills';
import SoftSkills from './sections/SoftSkills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import SectionRail from './components/SectionRail';
import GhostFibers from './components/GhostFibers';
import Icon from './components/Icon';
import { portfolio } from './content/portfolio';
import { initScroll, destroyScroll, scrollTo, onScroll } from './lib/scroll';
import { initRevealObserver } from './lib/reveal';
import './App.css';

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  /* ── Centralized scroll engine & reveal observer ── */
  useEffect(() => {
    initScroll();
    const disconnectReveal = initRevealObserver();

    const unsubscribe = onScroll(({ scroll }) => {
      setShowBackToTop(scroll > 350);
    });

    return () => {
      unsubscribe();
      destroyScroll();
      if (disconnectReveal) disconnectReveal();
    };
  }, []);

  const scrollToSection = useCallback((targetOrEvent, maybeId) => {
    let targetId = maybeId;
    if (typeof targetOrEvent === 'string') {
      targetId = targetOrEvent;
    } else if (targetOrEvent?.preventDefault) {
      targetOrEvent.preventDefault();
    }
    if (!targetId) return;

    scrollTo(targetId.startsWith('#') ? targetId : `#${targetId}`);
  }, []);

  const scrollToTop = useCallback(() => {
    scrollTo(0);
  }, []);

  return (
    <div className="app-root">
      {/* Global Fixed GhostFibers WebGL Background */}
      <div className="ghost-fibers-bg" aria-hidden="true">
        <GhostFibers
          lineColor="#ff2d55"
          glowColor="#8b5cf6"
          speed={0.18}
          scale={2.2}
          rotation={0}
          rotationSpeed={0.2}
          layers={4}
          waveAmplitude={0.015}
          waveFrequency={3}
          waveSpeed={0.15}
          layerSpeed={0.08}
          twist={0.1}
          twistFrequency={5}
          twistSpeed={1.2}
          lineFrequency={5}
          lineSpacing={2}
          lineSharpness={16}
          glowFalloff={10}
          glowIntensity={1.5}
          brightness={1.9}
          blueBoost={1.25}
          vignette={0.8}
          grain={0.05}
          dpr={1}
        />
        <div className="ghost-fibers-overlay" />
      </div>

      {/* WCAG: Skip to Content link for keyboard accessibility */}
      <a href="#main-content" className="skip-link">
        {portfolio.nav.skipToContent || 'Skip to main content'}
      </a>

      {/* Desktop Section Rail (>= 1280px) */}
      <SectionRail />

      <div className="app-container">
        {/* 1. Navbar */}
        <Navbar scrollToSection={scrollToSection} />

        {/* Semantic main content area */}
        <main id="main-content" tabIndex={-1}>
          {/* 2. Hero */}
          <Hero scrollToSection={scrollToSection} />
          {/* 3. About */}
          <About />
          {/* 4. Education */}
          <Education />
          {/* 5. Skills */}
          <Skills />
          {/* 6. Soft Skills */}
          <SoftSkills />
          {/* 7. Projects */}
          <Projects />
          {/* 8. Contact */}
          <Contact />
        </main>

        {/* 9. Footer */}
        <Footer scrollToTop={scrollToTop} />
      </div>

      {/* Floating Back-to-Top Button */}
      <button
        type="button"
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label={portfolio.footer.backToTopLabel || 'Scroll back to top'}
      >
        <Icon name="arrow-up" size={18} />
      </button>
    </div>
  );
}
