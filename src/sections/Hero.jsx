import { useState, useEffect, useRef, useMemo } from 'react';
import { portfolio } from '../content/portfolio';
import { useLanguage } from '../i18n/useLanguage';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';

const DEFAULT_CYCLING_PHRASES = [
  'Digital Solutions',
  'Modern Web Apps',
  'Connected IoT Systems',
  'Practical Software',
];

const DEFAULT_METRICS = [
  { value: 3, suffix: '+', label: { en: 'Shipped Projects', fr: 'Projets Déployés' } },
  { value: 6, suffix: '+', label: { en: 'Core Technologies', fr: 'Technologies Maîtrisées' } },
  { value: 100, suffix: '%', label: { en: 'Commitment to Quality', fr: 'Engagement Qualité' } },
];

export default function Hero({ scrollToSection }) {
  const { hero, identity } = portfolio;
  const { t } = useLanguage();

  const phrases = useMemo(() => {
    const raw = hero.cyclingPhrases || DEFAULT_CYCLING_PHRASES;
    return raw.map((p) => t(p));
  }, [hero.cyclingPhrases, t]);

  const metrics = useMemo(
    () => hero.metrics || DEFAULT_METRICS,
    [hero.metrics]
  );

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const currentIndexRef = useRef(0);

  const [counts, setCounts] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? (hero.metrics || DEFAULT_METRICS).map((m) => m.value)
      : (hero.metrics || DEFAULT_METRICS).map(() => 0)
  );
  const [hasCounted, setHasCounted] = useState(false);
  const heroSectionRef = useRef(null);
  const primaryCtaRef = useRef(null);

  // Status availability check
  const [isAvailable] = useState(() => {
    if (!identity.availableUntil) return true;
    return new Date(identity.availableUntil).getTime() > Date.now();
  });

  const statusLabel = isAvailable
    ? t(identity.status)
    : `${t(identity.title)} · ${t(identity.location)}`;

  /* ── Motion Preference Listener ── */
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e) => setPrefersReducedMotion(e.matches);

    if (mq.addEventListener) {
      mq.addEventListener('change', handler);
      return () => mq.removeEventListener('change', handler);
    }
    mq.addListener(handler);
    return () => mq.removeListener(handler);
  }, []);

  /* ── Smooth Parallel Word Transition (3000ms hold -> 550ms parallel cross-glide) ── */
  useEffect(() => {
    if (prefersReducedMotion || phrases.length <= 1) return;

    let isMounted = true;
    let holdTimer = null;
    let transitionTimer = null;

    const cycle = () => {
      holdTimer = setTimeout(() => {
        if (!isMounted) return;

        const prev = currentIndexRef.current;
        const next = (prev + 1) % phrases.length;
        currentIndexRef.current = next;

        setPrevIndex(prev);
        setCurrentIndex(next);
        setIsTransitioning(true);

        transitionTimer = setTimeout(() => {
          if (!isMounted) return;
          setIsTransitioning(false);
          setPrevIndex(null);
          cycle();
        }, 550);
      }, 3000);
    };

    cycle();

    return () => {
      isMounted = false;
      if (holdTimer) clearTimeout(holdTimer);
      if (transitionTimer) clearTimeout(transitionTimer);
    };
  }, [prefersReducedMotion, phrases]);

  /* ── Metric Count-up on Intersection ── */
  useEffect(() => {
    if (prefersReducedMotion || hasCounted) return;

    const section = heroSectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasCounted(true);
          observer.disconnect();

          const duration = 900;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            setCounts(metrics.map((m) => Math.round(m.value * ease)));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [hasCounted, metrics, prefersReducedMotion]);

  /* ── Primary CTA Magnetic Effect (Clamped to 4px max) ── */
  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (prefersReducedMotion || !isFinePointer) return;

    const btn = primaryCtaRef.current;
    if (!btn) return;

    const handlePointerMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const btnCenterX = rect.left + rect.width / 2;
      const btnCenterY = rect.top + rect.height / 2;

      const distX = e.clientX - btnCenterX;
      const distY = e.clientY - btnCenterY;
      const distance = Math.hypot(distX, distY);

      const triggerRadius = 80;

      if (distance < triggerRadius) {
        const pull = (triggerRadius - distance) / triggerRadius;
        const maxOffset = 4;
        const targetX = (distX / distance) * pull * maxOffset;
        const targetY = (distY / distance) * pull * maxOffset;
        btn.style.transform = `translate(${targetX.toFixed(2)}px, ${targetY.toFixed(2)}px)`;
      } else {
        btn.style.transform = '';
      }
    };

    const handlePointerLeave = () => {
      btn.style.transform = '';
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    btn.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      btn.removeEventListener('pointerleave', handlePointerLeave);
      btn.style.transform = '';
    };
  }, [prefersReducedMotion]);

  return (
    <section
      id="hero"
      ref={heroSectionRef}
      className="hero-section"
      aria-labelledby="hero-heading"
      tabIndex={-1}
    >
      {/* Status Chip (Anchor to #contact with pulsating live signal) */}
      <Reveal
        as="a"
        href="#contact"
        className="status-chip glass-panel"
        onClick={(e) => scrollToSection(e, 'contact')}
        aria-label={`Availability: ${statusLabel}. Click to contact.`}
      >
        <span className="live-dot-wrap" aria-hidden="true">
          <span className="live-dot" />
          <span className="live-ring" />
        </span>
        <span className="status-chip-text">{statusLabel}</span>
        <Icon name="arrow-right" size={14} className="status-chip-arrow" />
      </Reveal>

      {/* Accessible Title with Visual Headline Cycler */}
      <Reveal>
        <h1 id="hero-heading" className="hero-title">
          <span className="sr-only">
            {t(hero.headline)} {phrases.join(', ')} {t(hero.headlineEnd)}
          </span>
          <span aria-hidden="true" className="hero-title-visual">
            <span className="hero-title-prefix">{t(hero.headline)}</span>
            {prefersReducedMotion ? (
              <span className="cycling-phrase-container">
                <span className="cycling-phrase gradient-text phrase-idle">
                  {phrases[0]}
                </span>
              </span>
            ) : (
              <span className="cycling-phrase-container">
                {prevIndex !== null && (
                  <span
                    key={`prev-${prevIndex}`}
                    className="cycling-phrase phrase-exit gradient-text"
                  >
                    {phrases[prevIndex]}
                  </span>
                )}
                <span
                  key={`curr-${currentIndex}`}
                  className={`cycling-phrase gradient-text ${isTransitioning ? 'phrase-enter' : 'phrase-idle'}`}
                >
                  {phrases[currentIndex]}
                </span>
              </span>
            )}
            <span className="hero-title-suffix">{t(hero.headlineEnd)}</span>
          </span>
        </h1>
      </Reveal>

      <Reveal as="p" className="hero-description">
        {t(hero.subheadline)}
      </Reveal>

      {/* CTAs with Magnetic primary & Lucide icons */}
      <Reveal className="hero-actions">
        <a
          ref={primaryCtaRef}
          href="#projects"
          className="btn btn-primary btn-magnetic"
          onClick={(e) => scrollToSection(e, 'projects')}
        >
          <span>{t(hero.primaryCta)}</span>
          <Icon name="arrow-down" size={18} />
        </a>
        <a
          href="#contact"
          className="btn btn-outline"
          onClick={(e) => scrollToSection(e, 'contact')}
        >
          <Icon name="mail" size={18} />
          <span>{t(hero.secondaryCta)}</span>
        </a>
        {identity.resumeUrl && (
          <a
            href={identity.resumeUrl}
            download="Haythem-Chabbeh-CV.pdf"
            className="btn btn-outline"
            aria-label="Download my CV (PDF)"
          >
            <Icon name="download" size={18} />
            <span>{t(hero.resumeCta, 'Download CV')}</span>
          </a>
        )}
      </Reveal>

      {/* Quick Metric Row */}
      <Reveal className="hero-metrics-row">
        {metrics.map((metric, i) => (
          <div key={i} className="metric-card glass-panel">
            <span className="metric-value font-mono">
              {counts[i]}
              {metric.suffix}
            </span>
            <span className="metric-label font-mono">{t(metric.label)}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
