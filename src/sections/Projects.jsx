import { portfolio } from '../content/portfolio';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';

const isRealUrl = (url) =>
  typeof url === 'string' &&
  url.trim().startsWith('http') &&
  !url.includes('[TODO:');

export default function Projects() {
  const { projects } = portfolio;

  const handleCardClick = (e, targetUrl) => {
    // If the click came directly from an interactive anchor, let the anchor handle it
    if (e.target.closest('a')) return;
    if (targetUrl) {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section
      id="projects"
      className="content-section projects-section"
      aria-labelledby="projects-heading"
      tabIndex={-1}
    >
      <Reveal className="section-header">
        <div className="section-label font-mono">{projects.sectionLabel}</div>
        <h2 id="projects-heading" className="section-title">
          {projects.sectionTitle}
        </h2>
      </Reveal>

      <div className="projects-grid">
        {projects.items.map((project, i) => {
          const repoUrl = isRealUrl(project.githubUrl)
            ? project.githubUrl
            : 'https://github.com/Hi-THEM/my_work';

          return (
            <Reveal
              key={project.name}
              as="article"
              className="glass-panel project-card project-card-interactive"
              delay={i * 120}
              onClick={(e) => handleCardClick(e, repoUrl)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(e, repoUrl);
                }
              }}
              aria-label={`Open ${project.name} on GitHub`}
            >
              <div className="project-card-header">
                <Icon name="folder" size={22} className="project-folder-icon" />
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-title-link"
                  aria-label={`${project.name} GitHub Repository`}
                >
                  <h3 className="project-title">{project.name}</h3>
                  <Icon name="arrow-up-right" size={16} className="project-title-arrow" />
                </a>
              </div>

              <p className="project-hook">{project.hook}</p>
              <p className="project-description">{project.problem}</p>

              <div className="project-tech-list">
                {project.builtWith.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-learned">
                <span className="learned-label">{projects.learnedLabel}</span>
                <span className="learned-text">{project.learned}</span>
              </div>

              <div className="project-links">
                {repoUrl && (
                  <a
                    href={repoUrl}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${projects.githubLabel}: ${project.name}`}
                  >
                    <Icon name="github" size={16} />
                    <span>{projects.githubLabel} Repo</span>
                  </a>
                )}
                {isRealUrl(project.liveUrl) && (
                  <a
                    href={project.liveUrl}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${projects.liveDemoLabel}: ${project.name}`}
                  >
                    <Icon name="external-link" size={16} />
                    <span>{projects.liveDemoLabel}</span>
                  </a>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
