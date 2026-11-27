import { useState, useEffect, useCallback, useRef } from 'react';
import { portfolio } from '../content/portfolio';
import { onScroll } from '../lib/scroll';
import { useTheme } from '../context/useTheme';
import { useLanguage } from '../i18n/useLanguage';
import Icon from '../components/Icon';

export default function Navbar({ scrollToSection }) {
  const { nav, identity } = portfolio;
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();

  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [sousseTime, setSousseTime] = useState('');
  const progressRef = useRef(null);

  /* ── Live Sousse Clock (Africa/Tunis, 24h, tabular-nums) ── */
  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Africa/Tunis',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });

    const updateClock = () => {
      setSousseTime(formatter.format(new Date()));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  /* ── Scroll handling: smooth elevation & whisper reading progress ── */
  useEffect(() => {
    const unsubscribe = onScroll(({ scroll, progress }) => {
      const scrolled = scroll > 15;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));

      if (progressRef.current) {
        const clampedProgress = Math.min(Math.max(progress, 0), 1);
        progressRef.current.style.transform = `scaleX(${clampedProgress})`;
      }
    });

    return unsubscribe;
  }, []);

  /* ── IntersectionObserver for active-link tracking ── */
  useEffect(() => {
    const ids = nav.links.map((l) => l.sectionId);
    const observers = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [nav.links]);

  const handleNavClick = useCallback(
    (e, id) => {
      scrollToSection(e, id);
      setMenuOpen(false);
    },
    [scrollToSection]
  );

  const targetLang = lang === 'en' ? 'FR' : 'EN';
  const targetThemeIcon = theme === 'dark' ? 'sun' : 'moon';
  const themeAria = t(nav.themeToggleAria, 'Switch to light/dark mode');
  const langAria = t(nav.langToggleAria, 'Switch language');

  return (
    <header
      className={`app-header ${isScrolled ? 'is-scrolled' : ''}`}
      role="banner"
    >
      <div className="app-header-inner">
        {/* Brand logo: JSX self-closing component tag format e.g. <haythem /> */}
        <a
          href="#hero"
          className="brand-tag font-mono"
          onClick={(e) => handleNavClick(e, 'hero')}
          aria-label="Scroll to top"
        >
          {`<${identity.brandTag || 'haythem'} />`}
        </a>

        {/* Primary navigation */}
        <nav aria-label="Primary navigation">
          <ul className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
            {nav.links.map((link) => (
              <li key={link.sectionId}>
                <button
                  type="button"
                  className={`nav-link ${activeSection === link.sectionId ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.sectionId)}
                >
                  {t(link.label)}
                </button>
              </li>
            ))}

            {/* Mobile menu controls: Theme toggle & Language switch */}
            <li className="nav-mobile-toggles-row">
              <button
                type="button"
                className="nav-toggle-btn"
                onClick={toggleTheme}
                aria-label={themeAria}
                title={themeAria}
              >
                <Icon name={targetThemeIcon} size={18} />
                <span className="font-mono">{theme === 'dark' ? 'Light' : 'Dark'}</span>
              </button>

              <button
                type="button"
                className="nav-toggle-btn"
                onClick={toggleLang}
                aria-label={langAria}
                title={langAria}
              >
                <Icon name="languages" size={18} />
                <span className="nav-lang-badge">{targetLang}</span>
              </button>
            </li>

            {/* Mobile menu replacement for CTA button */}
            <li className="nav-item-cta-mobile">
              <button
                type="button"
                className="btn btn-ghost nav-cta-btn nav-cta-btn-mobile"
                onClick={(e) => handleNavClick(e, 'contact')}
              >
                <Icon name="mail" size={18} />
                <span>{t(nav.ctaLabel, "Let's talk")}</span>
              </button>
            </li>
          </ul>
        </nav>

        {/* Desktop header actions: status badge, toggles & CTA button */}
        <div className="header-actions">
          <div className="header-status">
            <span
              className="sousse-meta font-mono"
              title={t(nav.sousseTimeLabel, 'Local time in Sousse, Tunisia')}
            >
              <span className="status-dot" aria-hidden="true" />
              <span className="sousse-tag">{t(nav.sousseLocation, 'Sousse, TN')}</span>
              <span className="sousse-clock" aria-hidden="true">
                {sousseTime || '··:··'}
              </span>
            </span>
          </div>

          {/* Theme and Language toggles */}
          <div className="nav-util-group">
            <button
              type="button"
              className="nav-toggle-btn"
              onClick={toggleTheme}
              aria-label={themeAria}
              title={themeAria}
            >
              <Icon name={targetThemeIcon} size={18} />
            </button>

            <button
              type="button"
              className="nav-toggle-btn"
              onClick={toggleLang}
              aria-label={langAria}
              title={langAria}
            >
              <Icon name="languages" size={18} />
              <span className="nav-lang-badge">{targetLang}</span>
            </button>
          </div>

          <button
            type="button"
            className="btn btn-ghost nav-cta-btn btn-talk-desktop"
            onClick={(e) => handleNavClick(e, 'contact')}
            aria-label={t(nav.ctaLabel, "Let's talk")}
          >
            <Icon name="mail" size={18} />
            <span>{t(nav.ctaLabel, "Let's talk")}</span>
          </button>
        </div>

        {/* Hamburger toggle (mobile with Lucide menu/x icon) */}
        <button
          type="button"
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={t(nav.toggleMenuAria, 'Toggle navigation menu')}
          aria-expanded={menuOpen}
        >
          <Icon name={menuOpen ? 'x' : 'menu'} size={24} />
        </button>
      </div>

      {/* Whisper reading progress indicator for non-intrusive scroll awareness */}
      <div
        ref={progressRef}
        className="nav-scroll-progress"
        aria-hidden="true"
      />
    </header>
  );
}
