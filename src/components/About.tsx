import SectionLabel from "./SectionLabel";
import SkillsGrid from "./SkillsGrid";
import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../i18n/LanguageContext";
import "./About.css";

export default function About() {
  const { t, personal, principles, focusAreaItems } = useLanguage();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="about section">
      <div ref={ref} className="about__shell reveal section__inner">
        <div className="about__card">
          <SectionLabel num="02" label={t("aboutBadge")} />
          <h2 className="section-title">
            {t("aboutTitle")}
            <em>{t("aboutTitleEm")}</em>
          </h2>
          <p className="section-sub about__bio">{t("aboutBio")}</p>

          <div className="about__stats">
            <div className="about__stat">
              <span className="section-label">{t("location")}</span>
              <span className="about__stat-value">{personal.location}</span>
            </div>
            <div className="about__stat">
              <span className="section-label">{t("focus")}</span>
              <div className="about__tags">
                {focusAreaItems.map((area) => (
                  <span key={area} className="chip">{area}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="about__principles">
          <span className="section-label">{t("principles")}</span>
          <div className="about__principles-grid">
            {principles.map((item) => (
              <article key={item.title} className="about__principle">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <SkillsGrid />
      </div>
    </section>
  );
}
