import SectionLabel from "./SectionLabel";
import { socialLinks } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../i18n/LanguageContext";
import "./Contact.css";

export default function Contact() {
  const { t, personal } = useLanguage();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="contact section">
      <div ref={ref} className="contact__card reveal section__inner">
        <div className="contact__orb contact__orb--1" aria-hidden="true" />
        <div className="contact__orb contact__orb--2" aria-hidden="true" />

        <div className="contact__content">
          <SectionLabel num="05" label={t("contactBadge")} />
          <h2 className="section-title">
            {t("contactTitle")}
            <em>{t("contactTitleEm")}</em>
          </h2>
          <p className="section-sub">{t("contactSub")}</p>
        </div>

        <div className="contact__aside">
          <a
            href={personal.resumeUrl}
            download="CV.pdf"
            className="contact__resume"
          >
            <span className="contact__email-label">{t("downloadCvLabel")}</span>
            <span className="contact__email-value">{t("pdfResume")}</span>
            <span className="contact__email-arrow" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 4v9M7 10l3 3 3-3M4 16h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>

          <a href={`mailto:${personal.email}`} className="contact__email">
            <span className="contact__email-label">{t("emailMe")}</span>
            <span className="contact__email-value">{personal.email}</span>
            <span className="contact__email-arrow" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>

          <div className="contact__socials">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
