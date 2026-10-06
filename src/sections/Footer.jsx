import { portfolio } from '../content/portfolio';
import { useLanguage } from '../i18n/useLanguage';
import Icon from '../components/Icon';

const isRealUrl = (url) =>
  typeof url === 'string' &&
  url.trim().startsWith('http') &&
  !url.includes('[TODO:');

export default function Footer({ scrollToTop }) {
  const { socialLinks, identity, footer } = portfolio;
  const { t } = useLanguage();

  return (
    <footer className="app-footer" role="contentinfo">
      <div className="footer-left">
        <span>
          &copy; {new Date().getFullYear()} {identity.name}.
        </span>
        <span className="footer-tagline">{t(footer.tagline)}</span>
      </div>

      <div className="footer-center">
        {isRealUrl(socialLinks.github) && (
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="GitHub profile"
          >
            <Icon name="github" size={16} />
            <span>GitHub</span>
          </a>
        )}
        {isRealUrl(socialLinks.linkedin) && (
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="LinkedIn profile"
          >
            <Icon name="linkedin" size={16} />
            <span>LinkedIn</span>
          </a>
        )}
        {isRealUrl(socialLinks.facebook) && (
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="Facebook profile"
          >
            <Icon name="facebook" size={16} />
            <span>Facebook</span>
          </a>
        )}
        {isRealUrl(socialLinks.instagram) && (
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="Instagram profile"
          >
            <Icon name="instagram" size={16} />
            <span>Instagram</span>
          </a>
        )}
        {isRealUrl(socialLinks.other?.url) && (
          <a
            href={socialLinks.other.url}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label={t(socialLinks.other.label)}
          >
            <Icon name="globe" size={16} />
            <span>{t(socialLinks.other.label)}</span>
          </a>
        )}
      </div>

      <div className="footer-right">
        <button
          type="button"
          className="footer-top-link"
          onClick={scrollToTop}
          aria-label={t(footer.backToTopLabel, 'Scroll back to top')}
        >
          <span>{t(footer.backToTopLabel, 'Back to top')}</span>
          <Icon name="arrow-up" size={16} />
        </button>
      </div>
    </footer>
  );
}
