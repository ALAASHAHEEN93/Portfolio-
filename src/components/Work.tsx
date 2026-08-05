import { Link } from "react-router-dom";
import type { CSSProperties } from "react";
import { personalInfo, projects } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import "./Work.css";

export default function Work() {
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <section id="work" className="work section">
      <div className="section__inner">
        <div ref={headerRef} className="work__header reveal">
          <div className="section-head">
            <span className="badge badge--accent">Work</span>
            <h2 className="section-title">Selected projects</h2>
            <p className="section-sub">
              Case studies across mobile apps, branding, and front-end builds.
            </p>
          </div>
          <a
            href={personalInfo.socials.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Full profile on Behance
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="work__list">
          {projects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useReveal<HTMLAnchorElement>();

  return (
    <Link
      ref={ref}
      to={`/project/${project.slug}`}
      className={`work__row reveal reveal-delay-${(index % 4) + 1}`}
      style={{ "--row-color": project.color } as CSSProperties}
    >
      <span className="work__row-num">{String(index + 1).padStart(2, "0")}</span>

      <div className="work__row-letter" aria-hidden="true">
        {project.title[0]}
      </div>

      <div className="work__row-info">
        <div className="work__row-top">
          <h3 className="work__row-title">{project.title}</h3>
          <span className="work__row-year">{project.year}</span>
        </div>
        <p className="work__row-meta">
          {project.tags.slice(0, 2).join(" · ")}
        </p>
        <p className="work__row-desc">{project.description}</p>
      </div>

      <span className="work__row-arrow" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </Link>
  );
}
