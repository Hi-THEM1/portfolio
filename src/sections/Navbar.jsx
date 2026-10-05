import { useState, useEffect, useCallback } from 'react';
import { portfolio } from '../content/portfolio';
import { onScroll } from '../lib/scroll';
import Icon from '../components/Icon';

export default function Navbar({ scrollToSection }) {
  const { nav, identity } = portfolio;
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [sousseTime, setSousseTime] = useState('');

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

  /* ── Scroll handling for auto-hide & background elevation ── */
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const unsubscribe = onScroll(({ scroll, direction }) => {
      // Hairline bottom border & background appears only once scrolled past 10px
      setIsScrolled(scroll > 10);

      if (!prefersReducedMotion) {
        if (direction === 1 && scroll > 320) {
          setIsHidden(true);
        } else if (direction === -1 || scroll <= 320) {
          setIsHidden(false);
        }
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

  return (
    <header
      className={`app-header ${isScrolled ? 'is-scrolled' : ''} ${isHidden ? 'is-hidden' : ''}`}
      role="banner"
    >
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
                {link.label}
              </button>
            </li>
          ))}

          {/* Mobile menu replacement for CTA button */}
          <li className="nav-item-cta-mobile">
            <button
              type="button"
              className="btn btn-ghost nav-cta-btn nav-cta-btn-mobile"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              <Icon name="mail" size={18} />
              <span>{nav.ctaLabel || "Let's talk"}</span>
            </button>
          </li>
        </ul>
      </nav>

      {/* Desktop header actions: status badge & right-aligned CTA button */}
      <div className="header-actions">
        <div className="header-status">
          <span
            className="sousse-meta font-mono"
            title={nav.sousseTimeLabel || 'Local time in Sousse, Tunisia'}
          >
            <span className="status-dot" aria-hidden="true" />
            <span className="sousse-tag">{nav.sousseLocation || 'Sousse, TN'}</span>
            <span className="sousse-clock" aria-hidden="true">
              {sousseTime || '··:··'}
            </span>
          </span>
        </div>

        <button
          type="button"
          className="btn btn-ghost nav-cta-btn btn-talk-desktop"
          onClick={(e) => handleNavClick(e, 'contact')}
          aria-label="Contact — Let's talk"
        >
          <Icon name="mail" size={18} />
          <span>{nav.ctaLabel || "Let's talk"}</span>
        </button>
      </div>

      {/* Hamburger toggle (mobile with Lucide menu/x icon) */}
      <button
        type="button"
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen((v) => !v)}
        aria-label={nav.toggleMenuAria || 'Toggle navigation menu'}
        aria-expanded={menuOpen}
      >
        <Icon name={menuOpen ? 'x' : 'menu'} size={24} />
      </button>
    </header>
  );
}
