import { portfolio } from '../content/portfolio';
import { useLanguage } from '../i18n/useLanguage';
import Icon from '../components/Icon';
import { getSoftSkillIcon } from '../components/iconUtils';
import Reveal from '../components/Reveal';

export default function SoftSkills() {
  const { softSkills } = portfolio;
  const { t } = useLanguage();

  return (
    <section
      id="soft-skills"
      className="content-section soft-skills-section"
      aria-labelledby="soft-skills-heading"
      tabIndex={-1}
    >
      <Reveal className="section-header">
        <div className="section-label font-mono">{t(softSkills.sectionLabel)}</div>
        <h2 id="soft-skills-heading" className="section-title">
          {t(softSkills.sectionTitle)}
        </h2>
        {softSkills.sectionSubtitle && (
          <p className="section-subtitle">{t(softSkills.sectionSubtitle)}</p>
        )}
      </Reveal>

      <div className="soft-skills-grid">
        {softSkills.items.map((skill, idx) => {
          const skillName = t(skill.name);
          const iconName = getSoftSkillIcon(skillName, skill.icon);

          return (
            <Reveal
              key={idx}
              as="article"
              className="glass-panel soft-skill-card"
              delay={idx * 80}
            >
              <div className="soft-skill-header">
                <span className="soft-skill-icon" aria-hidden="true">
                  <Icon name={iconName} size={18} />
                </span>
                <h3 className="soft-skill-name">{skillName}</h3>
              </div>
              <p className="soft-skill-evidence">{t(skill.evidence)}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
