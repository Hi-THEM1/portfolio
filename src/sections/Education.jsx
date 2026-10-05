import { portfolio } from '../content/portfolio';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';

export default function Education() {
  const { education } = portfolio;
  const present = education.present || {
    tag: 'Higher Education',
    status: 'Current Studies (In Progress)',
    degree: education.degree,
    institution: education.university,
    period: education.period,
    location: 'Sousse, Tunisia',
    courseworkLabel: education.courseworkLabel || 'Core Coursework',
    coursework: education.coursework || [],
  };

  const bac = education.bac || {
    tag: 'Secondary Education',
    status: 'Graduated / Completed',
    degree: 'Baccalaureate in Mathematics',
    institution: 'Tunisian Ministry of Education',
    period: '2024',
    location: 'Tunisia',
    focusLabel: 'Academic Foundation',
    focus:
      'Rigorous mathematical analysis, algorithmic thinking, physics, and scientific problem-solving.',
  };

  return (
    <section
      id="education"
      className="content-section education-section"
      aria-labelledby="education-heading"
      tabIndex={-1}
    >
      <Reveal className="section-header">
        <div className="section-label font-mono">{education.sectionLabel}</div>
        <h2 id="education-heading" className="section-title">
          {education.sectionTitle}
        </h2>
      </Reveal>

      <div className="education-grid">
        {/* 1. Present Higher Education Studies */}
        <Reveal as="article" className="glass-panel education-card education-card-current" delay={0}>
          <div className="education-card-badge-row">
            <span className="education-stage-badge font-mono">
              <span className="education-live-dot" aria-hidden="true" />
              {present.status}
            </span>
            <span className="education-period font-mono">{present.period}</span>
          </div>

          <div className="education-card-main">
            <div className="education-icon-wrap" aria-hidden="true">
              <Icon name="graduation" size={24} />
            </div>
            <div>
              <h3 className="education-degree-title">{present.degree}</h3>
              <p className="education-institution">{present.institution}</p>
              {present.location && (
                <div className="education-location-line font-mono">
                  <Icon name="map-pin" size={14} />
                  <span>{present.location}</span>
                </div>
              )}
            </div>
          </div>

          {present.coursework && present.coursework.length > 0 && (
            <div className="education-coursework">
              <h4 className="coursework-label">{present.courseworkLabel}</h4>
              <ul className="coursework-list">
                {present.coursework.map((course) => (
                  <li key={course} className="tech-pill">
                    {course}
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
              {bac.status}
            </span>
            <span className="education-period font-mono">{bac.period}</span>
          </div>

          <div className="education-card-main">
            <div className="education-icon-wrap education-icon-wrap-bac" aria-hidden="true">
              <Icon name="award" size={24} />
            </div>
            <div>
              <h3 className="education-degree-title">{bac.degree}</h3>
              <p className="education-institution">{bac.institution}</p>
              {bac.location && (
                <div className="education-location-line font-mono">
                  <Icon name="map-pin" size={14} />
                  <span>{bac.location}</span>
                </div>
              )}
            </div>
          </div>

          <div className="education-coursework">
            <h4 className="coursework-label">{bac.focusLabel || 'Academic Foundation'}</h4>
            <p className="education-bac-focus">{bac.focus}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
