import { useState, useEffect, useRef } from 'react';
import { portfolio } from '../content/portfolio';
import { useLanguage } from '../i18n/useLanguage';
import { onScroll, scrollTo } from '../lib/scroll';

export default function SectionRail() {
  const { nav } = portfolio;
  const { t } = useLanguage();
  const sections = nav.links;
  const [activeSection, setActiveSection] = useState('about');
  const lineFillRef = useRef(null);

  useEffect(() => {
    // Active section tracking via IntersectionObserver
    const observers = [];
    sections.forEach(({ sectionId }) => {
      const el = document.getElementById(sectionId);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        { rootMargin: '-30% 0px -50% 0px', threshold: 0 }
      );

      obs.observe(el);
      observers.push(obs);
    });

    // Connecting line fill tracking
    const unsub = onScroll(({ progress }) => {
      if (lineFillRef.current) {
        lineFillRef.current.style.transform = `scaleY(${Math.min(Math.max(progress, 0), 1)})`;
      }
    });

    return () => {
      observers.forEach((o) => o.disconnect());
      unsub();
    };
  }, [sections]);

  const handleDotClick = (sectionId) => {
    scrollTo(`#${sectionId}`);
  };

  return (
    <aside className="section-rail" aria-label="Section navigation rail">
      <div className="rail-track">
        {/* Hairline track and active scroll fill */}
        <div className="rail-line" aria-hidden="true">
          <div ref={lineFillRef} className="rail-line-fill" />
        </div>

        {/* Section Dots */}
        <ul className="rail-dots">
          {sections.map(({ label, sectionId }) => {
            const isActive = activeSection === sectionId;
            const localizedLabel = t(label);
            return (
              <li key={sectionId} className="rail-dot-item">
                <button
                  type="button"
                  className={`rail-dot ${isActive ? 'is-active' : ''}`}
                  onClick={() => handleDotClick(sectionId)}
                  aria-label={`Go to ${localizedLabel}`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <span className="rail-tooltip font-mono">{localizedLabel}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
