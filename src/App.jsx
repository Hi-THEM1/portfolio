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
import Topography from './components/Topography';
import Icon from './components/Icon';
import { portfolio } from './content/portfolio';
import { useTheme } from './context/useTheme';
import { useLanguage } from './i18n/useLanguage';
import { initScroll, destroyScroll, scrollTo, onScroll } from './lib/scroll';
import { initRevealObserver } from './lib/reveal';
import './App.css';

export default function App() {
  const { theme } = useTheme();
  const { t } = useLanguage();
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

  const isLight = theme === 'light';

  return (
    <div className="app-root">
      {/* Global Fixed Topography WebGL Background */}
      <div className="topography-bg" aria-hidden="true">
        <Topography
          lowColor={isLight ? '#F0FDFA' : '#0B1120'}
          midColor={isLight ? '#0F766E' : '#22D3EE'}
          highColor={isLight ? '#0F766E' : '#FFFFFF'}
          speed={0.18}
          morphAmount={1.8}
          morphSpeed={0.06}
          bands={1.6}
          thickness={0.008}
          scale={1.0}
          pixelSize={1.0}
          glow={isLight ? 0.15 : 0.25}
          colorMode="elevation"
          contrast={isLight ? 2.2 : 2.5}
          brightness={1.0}
          fillBands={false}
          opacity={isLight ? 0.38 : 0.50}
          grain={true}
          grainIntensity={0.03}
          mouseInteraction={true}
          mouseRadius={0.22}
          mouseStrength={0.20}
          lightMode={isLight}
        />
        <div className="topography-overlay" />
      </div>

      {/* Scrim Overlay between background layer (z:0) and content (z:2) */}
      <div className="theme-scrim-overlay" aria-hidden="true" />

      {/* WCAG: Skip to Content link for keyboard accessibility */}
      <a href="#main-content" className="skip-link">
        {t(portfolio.nav.skipToContent, 'Skip to main content')}
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
        aria-label={t(portfolio.footer.backToTopLabel, 'Scroll back to top')}
      >
        <Icon name="arrow-up" size={18} />
      </button>
    </div>
  );
}
