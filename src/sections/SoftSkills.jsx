import { portfolio } from '../content/portfolio';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';

export default function SoftSkills() {
  const { softSkills } = portfolio;

  return (
    <section
      id="soft-skills"
      className="content-section soft-skills-section"
      aria-labelledby="soft-skills-heading"
      tabIndex={-1}
    >
      <Reveal className="section-header">
        <div className="section-label font-mono">{softSkills.sectionLabel}</div>
        <h2 id="soft-skills-heading" className="section-title">
          {softSkills.sectionTitle}
        </h2>
        {softSkills.sectionSubtitle && (
          <p className="section-subtitle">{softSkills.sectionSubtitle}</p>
        )}
      </Reveal>

      <div className="soft-skills-grid">
        {softSkills.items.map((skill, idx) => (
          <Reveal
            key={skill.name}
            as="article"
            className="glass-panel soft-skill-card"
            delay={idx * 80}
          >
            <div className="soft-skill-header">
              <span className="soft-skill-icon" aria-hidden="true">
                <Icon name={skill.icon} size={20} />
              </span>
              <h3 className="soft-skill-name">{skill.name}</h3>
            </div>
            <p className="soft-skill-evidence">{skill.evidence}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
