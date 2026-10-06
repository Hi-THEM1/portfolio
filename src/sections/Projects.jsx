import { portfolio } from '../content/portfolio';
import { useLanguage } from '../i18n/useLanguage';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';

const isRealUrl = (url) =>
  typeof url === 'string' &&
  url.trim().startsWith('http') &&
  !url.includes('[TODO:');

export default function Projects() {
  const { projects } = portfolio;
  const { t } = useLanguage();

  const handleCardClick = (e, targetUrl) => {
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
        <div className="section-label font-mono">{t(projects.sectionLabel)}</div>
        <h2 id="projects-heading" className="section-title">
          {t(projects.sectionTitle)}
        </h2>
      </Reveal>

      <div className="projects-grid">
        {projects.items.map((project, i) => {
          const projectName = t(project.name);
          const repoUrl = isRealUrl(project.githubUrl)
            ? project.githubUrl
            : 'https://github.com/Hi-THEM1/my_work';

          return (
            <Reveal
              key={i}
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
              aria-label={`Open ${projectName} on GitHub`}
            >
              {project.status && (
                <div
                  className={`project-badge ${project.isLoading ? 'is-loading' : ''}`}
                  aria-label={`Status: ${t(project.status)}`}
                >
                  <span className="project-badge-dot" aria-hidden="true" />
                  <span>{t(project.status)}</span>
                </div>
              )}

              <div className="project-card-header">
                <Icon name="folder-git-2" size={20} className="project-folder-icon" />
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-title-link"
                  aria-label={`${projectName} GitHub Repository`}
                >
                  <h3 className="project-title">{projectName}</h3>
                  <Icon name="arrow-up-right" size={16} className="project-title-arrow" />
                </a>
              </div>

              <p className="project-hook">{t(project.hook)}</p>
              <p className="project-description">{t(project.problem)}</p>

              <div className="project-tech-list">
                {project.builtWith.map((tech, techIdx) => (
                  <span key={techIdx} className="tech-pill">
                    {t(tech)}
                  </span>
                ))}
              </div>

              <div className="project-learned">
                <span className="learned-label">{t(projects.learnedLabel)}</span>
                <span className="learned-text">{t(project.learned)}</span>
              </div>

              <div className="project-links">
                {repoUrl && (
                  <a
                    href={repoUrl}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t(projects.githubLabel)}: ${projectName}`}
                  >
                    <Icon name="github" size={16} />
                    <span>{t(projects.githubLabel)} Repo</span>
                  </a>
                )}
                {isRealUrl(project.liveUrl) && (
                  <a
                    href={project.liveUrl}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t(projects.liveDemoLabel)}: ${projectName}`}
                  >
                    <Icon name="external-link" size={16} />
                    <span>{t(projects.liveDemoLabel)}</span>
                  </a>
                )}
                {project.isLoading && (
                  <span className="project-link-status" aria-label="Project in active development">
                    <Icon name="loader-2" size={14} className="spin-icon" />
                    <span>{t({ en: 'In Progress', fr: 'En cours' })}</span>
                  </span>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
