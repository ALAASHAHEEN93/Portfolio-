import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { CSSProperties } from "react";
import {
  personalInfo,
  projects,
  workFilters,
  projectMatchesFilter,
} from "../data/content";
import type { Project, WorkFilter } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import "./Work.css";

export default function Work() {
  const headerRef = useReveal<HTMLDivElement>();
  const [filter, setFilter] = useState<WorkFilter>("All");

  const featured = useMemo(
    () => projects.find((p) => p.featured && projectMatchesFilter(p, filter)),
    [filter],
  );

  const list = useMemo(
    () =>
      projects.filter(
        (p) => projectMatchesFilter(p, filter) && p.slug !== featured?.slug,
      ),
    [filter, featured],
  );

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
            Behance
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="work__filters" role="tablist" aria-label="Filter projects">
          {workFilters.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={filter === item}
              className={`work__filter${filter === item ? " is-active" : ""}`}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {featured && (
          <ProjectCard project={featured} index={0} featured />
        )}

        <div className="work__grid">
          {list.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  const ref = useReveal<HTMLAnchorElement>();
  const darkMedia = project.slug === "coffee-lab";
  const logoSrc = darkMedia
    ? "/projects/coffee-lab/logo-light.svg"
    : project.logo;

  return (
    <Link
      ref={ref}
      to={`/project/${project.slug}`}
      className={`work__card reveal reveal-delay-${(index % 4) + 1}${darkMedia ? " work__card--dark" : ""}${featured ? " work__card--featured" : ""}`}
      style={{ "--card-color": project.color } as CSSProperties}
    >
      <div className="work__media">
        {logoSrc ? (
          <img
            src={`${logoSrc}?v=7`}
            alt=""
            className="work__logo"
            loading="lazy"
          />
        ) : (
          <span className="work__letter">{project.title[0]}</span>
        )}
      </div>

      <div className="work__body">
        <div className="work__meta">
          {featured && <span className="work__featured-tag">Featured</span>}
          <span className="work__year">{project.year}</span>
          <span className="work__tags">{project.tags.slice(0, 2).join(" · ")}</span>
        </div>
        <h3 className="work__title">{project.title}</h3>
        <p className="work__desc">{project.description}</p>
      </div>
    </Link>
  );
}
