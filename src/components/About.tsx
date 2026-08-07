import { focusAreas } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../i18n/LanguageContext";
import "./About.css";

export default function About() {
  const { t, personal, skillItems, principles } = useLanguage();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="about section">
      <div ref={ref} className="about__shell reveal section__inner">
        <div className="about__card">
          <div className="about__visual">
            <div className="about__avatar">
              <img src="/profile-original.png" alt={personal.name} />
            </div>
          </div>

          <div className="about__text">
            <span className="badge badge--accent">{t("aboutBadge")}</span>
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
                  {focusAreas.map((area) => (
                    <span key={area} className="chip">{area}</span>
                  ))}
                </div>
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

        <div className="about__skills">
          <span className="section-label">{t("skills")}</span>
          <div className="about__skills-list">
            {skillItems.map((skill) => (
              <span key={skill} className="chip">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
