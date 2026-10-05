import { portfolio } from '../content/portfolio';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';

export default function Skills() {
  const { skills } = portfolio;

  const cards = [
    {
      title: skills.coreTitle || 'Core Stack',
      icon: skills.coreIcon || 'code',
      items: skills.core,
    },
    {
      title: skills.learningTitle || 'Currently Learning',
      icon: skills.learningIcon || 'cpu',
      items: skills.learning,
    },
    {
      title: skills.toolsTitle || 'Tools & Platforms',
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
        <div className="section-label font-mono">{skills.sectionLabel}</div>
        <h2 id="skills-heading" className="section-title">
          {skills.sectionTitle}
        </h2>
      </Reveal>

      <div className="feature-grid">
        {cards.map((card, idx) => (
          <Reveal
            key={card.title}
            className="glass-panel feature-card"
            delay={idx * 100}
          >
            <div className="card-icon" aria-hidden="true">
              <Icon name={card.icon} size={24} />
            </div>
            <h3 className="card-title">{card.title}</h3>
            <div className="skills-pill-list">
              {card.items.map((item) => (
                <span key={item} className="tech-pill">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
