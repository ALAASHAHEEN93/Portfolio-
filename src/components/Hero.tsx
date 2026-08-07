import { useLanguage } from "../i18n/LanguageContext";
import "./Hero.css";

export default function Hero() {
  const { t, personal } = useLanguage();

  return (
    <section className="hero section">
      <div className="hero__atmosphere" aria-hidden="true">
        <div className="hero__wash" />
        <div className="hero__rule" />
      </div>

      <div className="hero__layout section__inner">
        <div className="hero__content">
          <div className="hero__meta">
            <a
              href={`mailto:${personal.email}?subject=Hello%20Alaa`}
              className="badge badge--live"
            >
              <span className="badge__dot" />
              {t("available")}
            </a>
            <span className="hero__meta-text">{personal.location}</span>
          </div>

          <p className="hero__brand">{personal.name}</p>

          <h1 className="hero__title">
            <span className="hero__line">{t("heroLine1")}</span>
            <span className="hero__line hero__line--accent">{t("heroLine2")}</span>
          </h1>

          <p className="hero__sub">{personal.about}</p>

          <div className="hero__actions">
            <a href="#work" className="btn btn--primary">
              {t("viewWork")}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href={personal.socials.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Behance
            </a>
          </div>
        </div>

        <div className="hero__photo-wrap">
          <div className="hero__photo">
            <div className="hero__photo-frame">
              <img src="/profile-original.png" alt={personal.name} />
            </div>
            <p className="hero__photo-caption">{t("photoCaption")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
