import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { CSSProperties } from "react";
import {
  projectMatchesFilter,
  getProjectGallery,
} from "../data/content";
import type { Project, WorkFilter } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../i18n/LanguageContext";
import "./Work.css";

const filterKeys = ["All", "Web", "Mobile", "Branding"] as const;

function getCardVisual(project: Project): { type: "image" | "logo"; src: string } {
  if (project.logo) return { type: "logo", src: project.logo };
  const gallery = getProjectGallery(project);
  if (gallery[0]) return { type: "image", src: gallery[0] };
  return { type: "logo", src: "" };
}

export default function Work() {
  const { t, personal, projectList } = useLanguage();
  const headerRef = useReveal<HTMLDivElement>();
  const [filter, setFilter] = useState<WorkFilter>("All");

  const filterLabels: Record<WorkFilter, string> = {
    All: t("filterAll"),
    Web: t("filterWeb"),
    Mobile: t("filterMobile"),
    Branding: t("filterBranding"),
  };

  const featured = useMemo(
    () => projectList.find((p) => p.featured && projectMatchesFilter(p, filter)),
    [filter, projectList],
  );

  const list = useMemo(
    () =>
      projectList.filter(
        (p) => projectMatchesFilter(p, filter) && p.slug !== featured?.slug,
      ),
    [filter, featured, projectList],
  );

  return (
    <section id="work" className="work section">
      <div className="section__inner">
        <div ref={headerRef} className="work__header reveal">
          <div className="section-head">
            <span className="badge badge--accent">{t("workBadge")}</span>
            <h2 className="section-title">{t("workTitle")}</h2>
            <p className="section-sub">{t("workSub")}</p>
          </div>
          <a
            href={personal.socials.behance}
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
          {filterKeys.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={filter === item}
              className={`work__filter${filter === item ? " is-active" : ""}`}
              onClick={() => setFilter(item)}
            >
              {filterLabels[item]}
            </button>
          ))}
        </div>

        {featured && <ProjectCard project={featured} index={0} featured />}

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
  const { t } = useLanguage();
  const ref = useReveal<HTMLAnchorElement>();
  const visual = getCardVisual(project);
  const darkMedia = false;
  const creamMedia =
    visual.type === "logo" && project.slug === "fermentfreude";
  const coffeeMedia =
    visual.type === "logo" && project.slug === "coffee-lab";

  return (
    <Link
      ref={ref}
      to={`/project/${project.slug}`}
      className={`work__card reveal reveal-delay-${(index % 4) + 1}${darkMedia ? " work__card--dark" : ""}${creamMedia ? " work__card--cream" : ""}${coffeeMedia ? " work__card--coffee" : ""}${featured ? " work__card--featured" : ""}${visual.type === "image" ? " work__card--shot" : ""}`}
      style={{ "--card-color": project.color } as CSSProperties}
    >
      <div className="work__media">
        {visual.src ? (
          <img
            src={`${visual.src}?v=16`}
            alt=""
            className={visual.type === "logo" ? "work__logo" : "work__shot"}
            loading="lazy"
          />
        ) : (
          <span className="work__letter">{project.title[0]}</span>
        )}
      </div>

      <div className="work__body">
        <div className="work__meta">
          {featured && <span className="work__featured-tag">{t("featured")}</span>}
          <span className="work__year">{project.year}</span>
          <span className="work__tags">{project.tags.slice(0, 2).join(" · ")}</span>
        </div>
        <h3 className="work__title">{project.title}</h3>
        <p className="work__desc">{project.description}</p>
        <span className="work__link">{t("viewCase")}</span>
      </div>
    </Link>
  );
}
