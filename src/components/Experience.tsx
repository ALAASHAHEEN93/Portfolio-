import SectionLabel from "./SectionLabel";
import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../i18n/LanguageContext";
import { certificates } from "../data/content";
import type { Lang } from "../i18n/types";
import "./Experience.css";

function certLabel<T extends Record<Lang, string>>(map: T, lang: Lang) {
  return map[lang];
}

export default function Experience() {
  const {
    t,
    lang,
    personal,
    experienceItems,
    educationItems,
    languageItems,
  } = useLanguage();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="cv" className="cv section">
      <div className="section__inner">
        <div ref={ref} className="cv__header reveal section-head">
          <SectionLabel num="03" label={t("cvBadge")} />
          <h2 className="section-title">{t("cvTitle")}</h2>
          <p className="section-sub">{t("cvSub")}</p>
          <a
            href={personal.resumeUrl}
            download="CV.pdf"
            className="btn btn--primary"
          >
            {t("downloadCv")}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M8 3v8M5 8l3 3 3-3M3 13h10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="cv__grid">
          <div className="cv__column">
            <h3 className="section-label">{t("experience")}</h3>
            <div className="cv__timeline">
              {experienceItems.map((item) => (
                <article key={`${item.company}-${item.period}`} className="cv__item">
                  <div className="cv__item-marker" aria-hidden="true" />
                  <div className="cv__item-body">
                    <span className="cv__item-period">{item.period}</span>
                    <h4 className="cv__item-title">{item.title}</h4>
                    <p className="cv__item-company">{item.company}</p>
                    <ul className="cv__item-list">
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="cv__column cv__column--side">
            <h3 className="section-label">{t("education")}</h3>
            <div className="cv__cards">
              {educationItems.map((item) => (
                <article key={`${item.institution}-${item.period}`} className="cv__card surface">
                  <span className="cv__card-period">{item.period}</span>
                  <h4 className="cv__card-title">{item.title}</h4>
                  <p className="cv__card-meta">{item.institution}</p>
                </article>
              ))}
            </div>

            <h3 className="section-label">{t("languages")}</h3>
            <div className="cv__langs">
              {languageItems.map((langItem) => (
                <article key={langItem.name} className="cv__lang">
                  <h4 className="cv__lang-name">{langItem.name}</h4>
                  <p className="cv__lang-level">{langItem.level}</p>
                </article>
              ))}
            </div>

            <h3 className="section-label">{t("certificates")}</h3>
            <div className="cv__certs">
              {certificates.map((cert) => (
                <article key={cert.id} className="cv__cert surface">
                  <span className="cv__card-period">{cert.year}</span>
                  <h4 className="cv__card-title">{certLabel(cert.title, lang)}</h4>
                  <p className="cv__card-meta">{certLabel(cert.issuer, lang)}</p>
                  <div className="cv__cert-links">
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cv__cert-link"
                    >
                      {t("viewCertificate")}
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path
                          d="M4 12L12 4M12 4H6M12 4v6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cv__cert-link cv__cert-link--secondary"
                      >
                        {cert.linkLabel ? certLabel(cert.linkLabel, lang) : t("viewOnLinkedIn")}
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path
                            d="M4 12L12 4M12 4H6M12 4v6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
