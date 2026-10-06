import { portfolio } from '../content/portfolio';
import { useLanguage } from '../i18n/useLanguage';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';

export default function Skills() {
  const { skills } = portfolio;
  const { t } = useLanguage();

  const cards = [
    {
      title: skills.coreTitle || { en: 'Core Stack', fr: 'Technologies Clés' },
      icon: skills.coreIcon || 'code-2',
      items: skills.core,
    },
    {
      title: skills.learningTitle || { en: 'Currently Learning', fr: 'En Cours d’Apprentissage' },
      icon: skills.learningIcon || 'cpu',
      items: skills.learning,
    },
    {
      title: skills.toolsTitle || { en: 'Tools & Platforms', fr: 'Outils & Plateformes' },
      icon: skills.toolsIcon || 'wrench',
      items: skills.tools,
    },
  ];

  return (
    <section
      id="skills"
      className="content-section skills-section"
      aria-labelledby="skills-heading"
      tabIndex={-1}
    >
      <Reveal className="section-header">
        <div className="section-label font-mono">{t(skills.sectionLabel)}</div>
        <h2 id="skills-heading" className="section-title">
          {t(skills.sectionTitle)}
        </h2>
      </Reveal>

      <div className="feature-grid">
        {cards.map((card, idx) => (
          <Reveal
            key={idx}
            className="glass-panel feature-card"
            delay={idx * 100}
          >
            <div className="card-icon" aria-hidden="true">
              <Icon name={card.icon} size={24} />
            </div>
            <h3 className="card-title">{t(card.title)}</h3>
            <div className="skills-pill-list">
              {card.items.map((item, itemIdx) => (
                <span key={itemIdx} className="tech-pill">
                  {t(item)}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
