import { useState } from 'react';
import { portfolio } from '../content/portfolio';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';

function getInitials(name) {
  if (!name || typeof name !== 'string') return 'HC';
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'HC';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function About() {
  const { identity, about } = portfolio;
  const [photoError, setPhotoError] = useState(false);
  const [photoLoaded, setPhotoLoaded] = useState(false);

  const initials = getInitials(identity.name);
  const altText = identity.photoAlt || `Portrait of ${identity.name}`;
  const showFallback = photoError || !identity.photo || !photoLoaded;

  return (
    <section
      id="about"
      className="content-section about-section"
      aria-labelledby="about-heading"
      tabIndex={-1}
    >
      <Reveal className="section-header">
        <div className="section-label font-mono">{about.sectionLabel}</div>
        <h2 id="about-heading" className="section-title">
          {about.sectionTitle}
        </h2>
      </Reveal>

      <div className="about-grid">
        <Reveal className="about-photo-col" delay={0}>
          <div className="about-photo-frame">
            {Boolean(identity.photo) && !photoError && (
              <img
                src={identity.photo}
                alt={altText}
                loading="lazy"
                decoding="async"
                className={`about-photo-img ${photoLoaded ? 'is-loaded' : 'is-loading'}`}
                onLoad={() => setPhotoLoaded(true)}
                onError={() => setPhotoError(true)}
              />
            )}

            {showFallback && (
              <div
                className="about-photo-monogram"
                role="img"
                aria-label={altText}
              >
                <div className="monogram-circle" aria-hidden="true">
                  <span className="monogram-initials font-mono">{initials}</span>
                </div>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal className="glass-panel about-panel" delay={120}>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="about-paragraph">
              {p}
            </p>
          ))}
          <div className="currently-learning">
            <Icon name="graduation" size={20} className="currently-icon" />
            <div className="currently-text-wrap">
              {about.currentlyLabel && (
                <span className="currently-label font-mono">
                  {about.currentlyLabel}
                </span>
              )}
              <span className="currently-text">{about.currently}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
