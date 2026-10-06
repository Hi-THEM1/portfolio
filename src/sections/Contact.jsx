import { useState } from 'react';
import { portfolio } from '../content/portfolio';
import { useLanguage } from '../i18n/useLanguage';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';

export default function Contact() {
  const { contact, identity } = portfolio;
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  /* ── Accessible copy-to-clipboard with fallback ── */
  const handleCopyEmail = async (e) => {
    if (e?.preventDefault) e.preventDefault();
    if (e?.stopPropagation) e.stopPropagation();

    const email = identity.email;
    if (!email) return;

    let success = false;
    if (window.isSecureContext && navigator?.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(email);
        success = true;
      } catch {
        success = false;
      }
    }

    if (!success) {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        textarea.style.top = '0';
        textarea.style.left = '0';
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        success = document.execCommand('copy');
        document.body.removeChild(textarea);
      } catch {
        success = false;
      }
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const methods = contact.methods || [];
  const emailMethod = methods.find((m) => m.id === 'email') || {
    id: 'email',
    label: { en: 'Direct Email', fr: 'E-mail Direct' },
    value: identity.email,
    url: `mailto:${identity.email}`,
    icon: 'mail',
  };
  const socialMethods = methods.filter((m) => m.id !== 'email');

  return (
    <section
      id="contact"
      className="content-section contact-section"
      aria-labelledby="contact-heading"
      tabIndex={-1}
    >
      <Reveal className="section-header">
        <div className="section-label font-mono">{t(contact.sectionLabel)}</div>
        <h2 id="contact-heading" className="section-title">
          {t(contact.heading)}
        </h2>
        <p className="section-subtitle">{t(contact.subtitle)}</p>
      </Reveal>

      <Reveal className="contact-layout contact-layout-direct">
        {/* Primary Contact Channels Grid */}
        <div className="contact-methods-grid" aria-label="Social and developer profiles">
          {socialMethods.map((method, idx) => {
            const isDownload = Boolean(method.download || method.id === 'cv');
            return (
              <Reveal
                key={method.id}
                as="a"
                href={method.url}
                download={isDownload ? (method.download || 'Haythem-Chabbeh-CV.pdf') : undefined}
                target={isDownload ? undefined : '_blank'}
                rel={isDownload ? undefined : 'noopener noreferrer'}
                className={`glass-panel contact-method-card ${isDownload ? 'contact-method-cv' : ''}`}
                aria-label={isDownload ? 'Download my CV (PDF)' : `${t(method.label)}: ${t(method.value)}`}
                delay={idx * 60}
              >
                <div className="method-main">
                  <div className="method-icon-wrap" aria-hidden="true">
                    <Icon name={method.icon} size={20} />
                  </div>
                  <div className="method-info">
                    <span className="method-label">{t(method.label)}</span>
                    <span className="method-value font-mono">{t(method.value)}</span>
                  </div>
                </div>
                <div className="method-arrow" aria-hidden="true">
                  <Icon name={isDownload ? 'download' : 'arrow-up-right'} size={18} />
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Executive Email Card with Copy & Direct Mail */}
        <div
          className="glass-panel contact-method-card contact-method-email"
          onClick={handleCopyEmail}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleCopyEmail(e);
            }
          }}
          aria-label={`Copy email: ${identity.email}`}
        >
          <div className="method-main">
            <div className="method-icon-wrap" aria-hidden="true">
              <Icon name="mail" size={20} />
            </div>
            <div className="method-info">
              <span className="method-label">{t(emailMethod.label)}</span>
              <span className="method-value font-mono">
                {copied
                  ? t({ en: 'Copied to clipboard!', fr: 'Copié dans le presse-papier !' })
                  : identity.email}
              </span>
            </div>
          </div>

          <div className="email-actions-group">
            <button
              type="button"
              className={`icon-action-btn ${copied ? 'is-active' : ''}`}
              onClick={handleCopyEmail}
              aria-label={
                copied
                  ? t({ en: 'Email copied', fr: 'E-mail copié' })
                  : t({ en: 'Copy email address', fr: "Copier l'adresse e-mail" })
              }
              title={
                copied
                  ? t({ en: 'Email copied', fr: 'E-mail copié' })
                  : t({ en: 'Copy email address', fr: "Copier l'adresse e-mail" })
              }
            >
              <Icon name={copied ? 'check' : 'copy'} size={18} />
              <span className="tooltip-feedback" role="status">
                {copied
                  ? t({ en: 'Copied!', fr: 'Copié !' })
                  : t({ en: 'Copy', fr: 'Copier' })}
              </span>
            </button>

            <a
              href={`mailto:${identity.email}`}
              className="icon-action-btn"
              aria-label={t({ en: 'Open mail app', fr: 'Ouvrir messagerie' })}
              title={t({ en: 'Open mail application', fr: 'Ouvrir application de messagerie' })}
              onClick={(e) => e.stopPropagation()}
            >
              <Icon name="arrow-up-right" size={18} />
            </a>
          </div>
        </div>

        {/* Location & Timezone Meta */}
        <div className="contact-meta-line font-mono">
          <Icon name="activity" size={16} />
          <span>
            {t(identity.location)} ({identity.timezone}) · {t(contact.responseTimePromise)}
          </span>
        </div>
      </Reveal>
    </section>
  );
}
