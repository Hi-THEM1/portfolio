import { portfolio } from '../content/portfolio';
import { useLanguage } from '../i18n/useLanguage';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';

export default function Education() {
  const { education } = portfolio;
  const { t } = useLanguage();

  const present = education.present || {
    tag: { en: 'Higher Education', fr: 'Enseignement Supérieur' },
    status: { en: 'Current Studies (In Progress)', fr: 'En cours (En progression)' },
    degree: education.degree,
    institution: education.university,
    period: education.period,
    location: { en: 'Sousse, Tunisia', fr: 'Sousse, Tunisie' },
    courseworkLabel: education.courseworkLabel || { en: 'Core Coursework', fr: 'Enseignements Clés' },
    coursework: education.coursework || [],
  };

  const bac = education.bac || {
    tag: { en: 'Secondary Education', fr: 'Enseignement Secondaire' },
    status: { en: 'Graduated / Completed', fr: 'Diplômé / Obtenu' },
    degree: { en: 'Baccalaureate in Mathematics', fr: 'Baccalauréat en Mathématiques' },
    institution: { en: 'Tunisian Ministry of Education', fr: "Ministère de l'Éducation Tunisien" },
    period: '2024',
    location: { en: 'Tunisia', fr: 'Tunisie' },
    focusLabel: { en: 'Academic Foundation', fr: 'Socle Académique' },
    focus: {
      en: 'Rigorous mathematical analysis, algorithmic thinking, physics, and scientific problem-solving.',
      fr: 'Analyse mathématique rigoureuse, pensée algorithmique, physique et résolution de problèmes scientifiques.',
    },
  };

  return (
    <section
      id="education"
      className="content-section education-section"
      aria-labelledby="education-heading"
      tabIndex={-1}
    >
      <Reveal className="section-header">
        <div className="section-label font-mono">{t(education.sectionLabel)}</div>
        <h2 id="education-heading" className="section-title">
          {t(education.sectionTitle)}
        </h2>
      </Reveal>

      <div className="education-grid">
        {/* 1. Present Higher Education Studies */}
        <Reveal as="article" className="glass-panel education-card education-card-current" delay={0}>
          <div className="education-card-badge-row">
            <span className="education-stage-badge font-mono">
              <span className="education-live-dot" aria-hidden="true" />
              {t(present.status)}
            </span>
            <span className="education-period font-mono">{t(present.period)}</span>
          </div>

          <div className="education-card-main">
            <div className="education-icon-wrap" aria-hidden="true">
              <Icon name="layers" size={22} />
            </div>
            <div>
              <h3 className="education-degree-title">{t(present.degree)}</h3>
              <p className="education-institution">{t(present.institution)}</p>
              {present.location && (
                <div className="education-location-line font-mono">
                  <Icon name="globe" size={14} />
                  <span>{t(present.location)}</span>
                </div>
              )}
            </div>
          </div>

          {present.coursework && present.coursework.length > 0 && (
            <div className="education-coursework">
              <h4 className="coursework-label">{t(present.courseworkLabel)}</h4>
              <ul className="coursework-list">
                {present.coursework.map((course, idx) => (
                  <li key={idx} className="tech-pill">
                    {t(course)}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Reveal>

        {/* 2. Baccalaureate / Secondary Education */}
        <Reveal as="article" className="glass-panel education-card education-card-bac" delay={120}>
          <div className="education-card-badge-row">
            <span className="education-stage-badge education-stage-badge-completed font-mono">
              <Icon name="check" size={12} />
              {t(bac.status)}
            </span>
            <span className="education-period font-mono">{t(bac.period)}</span>
          </div>

          <div className="education-card-main">
            <div className="education-icon-wrap education-icon-wrap-bac" aria-hidden="true">
              <Icon name="shield-check" size={22} />
            </div>
            <div>
              <h3 className="education-degree-title">{t(bac.degree)}</h3>
              <p className="education-institution">{t(bac.institution)}</p>
              {bac.location && (
                <div className="education-location-line font-mono">
                  <Icon name="globe" size={14} />
                  <span>{t(bac.location)}</span>
                </div>
              )}
            </div>
          </div>

          <div className="education-coursework">
            <h4 className="coursework-label">{t(bac.focusLabel, 'Academic Foundation')}</h4>
            <p className="education-bac-focus">{t(bac.focus)}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
