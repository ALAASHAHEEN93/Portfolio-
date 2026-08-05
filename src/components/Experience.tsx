import { personalInfo, experience, education, languages } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import "./Experience.css";

export default function Experience() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="cv" className="cv section">
      <div className="section__inner">
        <div ref={ref} className="cv__header reveal section-head">
          <span className="badge badge--accent">CV</span>
          <h2 className="section-title">Experience & education</h2>
          <p className="section-sub">
            A journey through design, development, and continuous learning.
          </p>
          <a
            href={personalInfo.resumeUrl}
            download="CV.pdf"
            className="btn btn--primary"
          >
            Download CV
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
            <h3 className="section-label">Experience</h3>
            <div className="cv__timeline">
              {experience.map((item) => (
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
            <h3 className="section-label">Education</h3>
            <div className="cv__cards">
              {education.map((item) => (
                <article key={`${item.institution}-${item.period}`} className="cv__card surface">
                  <span className="cv__card-period">{item.period}</span>
                  <h4 className="cv__card-title">{item.title}</h4>
                  <p className="cv__card-meta">{item.institution}</p>
                </article>
              ))}
            </div>

            <h3 className="section-label">Languages</h3>
            <div className="cv__langs">
              {languages.map((lang) => (
                <article key={lang.name} className="cv__lang">
                  <h4 className="cv__lang-name">{lang.name}</h4>
                  <p className="cv__lang-level">{lang.level}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
