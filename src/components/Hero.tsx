import { useLanguage } from "../i18n/LanguageContext";
import "./Hero.css";

export default function Hero() {
  const { t, personal, projectList } = useLanguage();

  const panels = [
    {
      label: t("heroPanelPractice"),
      title: t("heroPanelPracticeTitle"),
      detail: t("heroPanelPracticeDetail"),
    },
    {
      label: t("heroPanelOpenTo"),
      title: t("heroPanelOpenToTitle"),
      detail: t("heroPanelOpenToDetail"),
    },
    {
      label: t("heroPanelCurrently"),
      title: `${projectList.length} ${t("heroCaseStudies")}`,
      detail: t("heroPanelCurrentlyDetail"),
    },
  ];

  return (
    <section id="top" className="hero section">
      <div className="hero__inner section__inner">
        <div className="hero__layout">
          <div className="hero__content">
            <h1 className="hero__headline">
              {t("heroTitleLead")} <em>{t("heroTitleEm")}</em> {t("heroTitleRest")}
            </h1>

            <p className="hero__intro">{t("heroIntro")}</p>

            <div className="hero__actions">
              <a href="#work" className="btn btn--primary">
                {t("heroViewProjects")}
              </a>
              <a href={personal.resumeUrl} className="btn btn--outline" download>
                {t("downloadCv")}
              </a>
              <a
                href={personal.socials.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
              >
                {t("viewBehance")}
              </a>
              <a href="#contact" className="btn btn--outline">
                {t("heroContactMe")}
              </a>
            </div>
          </div>

          <aside className="hero__aside">
            <div className="hero__card">
              <div className="hero__photo">
                <img src={personal.photo} alt={personal.name} />
              </div>
              <p className="hero__card-name">{personal.name}</p>
              <p className="hero__card-role">{personal.title}</p>
              <p className="hero__card-location">{personal.location}</p>
              <span className="hero__card-badge badge badge--live">
                <span className="badge__dot" />
                {t("available")}
              </span>
            </div>
          </aside>
        </div>

        <div className="hero__panels">
          {panels.map((panel) => (
            <article key={panel.label} className="hero__panel">
              <span className="hero__panel-label">{panel.label}</span>
              <p className="hero__panel-title">
                <strong>{panel.title}</strong>
              </p>
              <p className="hero__panel-detail">{panel.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
