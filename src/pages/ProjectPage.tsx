import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import type { CSSProperties } from "react";
import {
  getProjectBySlug,
  getBehanceProjectUrl,
  getProjectGallery,
  projects,
} from "../data/content";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ProjectPage.css";

const processSteps = [
  { label: "Discover", detail: "Research, flows, and problem framing" },
  { label: "Design", detail: "Wireframes, UI systems, and prototypes" },
  { label: "Build", detail: "Responsive front-end and polish" },
];

export default function ProjectPage() {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [progress, setProgress] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLightbox(null);
  }, [slug]);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? (doc.scrollTop / max) * 100 : 0);
      setShowTop(doc.scrollTop > 500);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  if (!project) return <Navigate to="/" replace />;

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const behanceUrl = getBehanceProjectUrl(project);
  const coverImage = project.image;
  const gallery = getProjectGallery(project).filter((src) => src !== coverImage);

  return (
    <>
      <Navbar />
      <div
        className="case__progress"
        style={{ width: `${progress}%`, "--case-color": project.color } as CSSProperties}
        aria-hidden="true"
      />
      <main
        className="case"
        style={{ "--case-color": project.color } as CSSProperties}
        key={project.slug}
      >
        <section className="case__hero">
          <div className="case__hero-glow" aria-hidden="true" />
          <div className="case__hero-mesh" aria-hidden="true" />
          <div className="case__hero-inner section__inner">
            <div className="case__hero-nav">
              <Link to="/#work" className="case__back">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M13 8H3M7 4L3 8l4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Work
              </Link>
              <div className="case__pager">
                <Link to={`/project/${prevProject.slug}`} className="case__pager-btn" aria-label="Previous project">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <span className="case__index">
                  {String(currentIndex + 1).padStart(2, "0")}
                  <span> / {String(projects.length).padStart(2, "0")}</span>
                </span>
                <Link to={`/project/${nextProject.slug}`} className="case__pager-btn" aria-label="Next project">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="case__hero-main">
              <div className="case__eyebrow">
                <span className="case__year">{project.year}</span>
                <span className="case__dot" aria-hidden="true" />
                <span className="case__tags-inline">{project.tags.join(" · ")}</span>
              </div>
              <div className="case__title-wrap">
                {project.logo ? (
                  <img
                    src={`${project.logo}?v=7`}
                    alt=""
                    className="case__title-logo"
                    aria-hidden="true"
                  />
                ) : (
                  <span className="case__title-letter" aria-hidden="true">
                    {project.title.charAt(0)}
                  </span>
                )}
                <h1 className="case__title">{project.title}</h1>
              </div>
              <p className="case__intro">{project.description}</p>

              <div className="case__actions">
                {behanceUrl && (
                  <a
                    href={behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary"
                  >
                    View on Behance
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
                {project.externalUrl && (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={behanceUrl ? "btn" : "btn btn--primary"}
                  >
                    Visit live site
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {coverImage && (
          <div className="case__cover section__inner">
            <button
              type="button"
              className="case__cover-frame"
              onClick={() => setLightbox(coverImage)}
            >
              <img src={coverImage} alt={`${project.title} preview`} />
            </button>
          </div>
        )}

        <section className="case__meta section__inner">
          <div className="case__meta-item">
            <span className="section-label">Role</span>
            <p>{project.role}</p>
          </div>
          <div className="case__meta-item">
            <span className="section-label">What I owned</span>
            <p>{project.owned}</p>
          </div>
          <div className="case__meta-item">
            <span className="section-label">Tools</span>
            <div className="case__chips">
              {project.tools.map((tool) => (
                <span key={tool} className="chip">{tool}</span>
              ))}
            </div>
          </div>
          <div className="case__meta-item">
            <span className="section-label">Outcome</span>
            <p>{project.outcome}</p>
          </div>
        </section>

        <section className="case__process section__inner">
          <h2 className="section-label">Approach</h2>
          <div className="case__process-track">
            {processSteps.map((step, i) => (
              <div key={step.label} className="case__process-step">
                <span className="case__process-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.label}</h3>
                <p>{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="case__story section__inner">
          {project.highlights && (
            <div className="case__features">
              <h2 className="section-label">Key features</h2>
              <ol className="case__feature-list">
                {project.highlights.map((item, i) => (
                  <li key={item} className="case__feature">
                    <span className="case__feature-num">{String(i + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div className="case__split">
            <article className="case__panel surface">
              <h2 className="section-label">Problem</h2>
              <p className="case__text">{project.problem}</p>
            </article>
            <article className="case__panel surface surface--soft">
              <h2 className="section-label">Solution</h2>
              <p className="case__text">{project.solution}</p>
            </article>
          </div>
        </section>

        {gallery.length > 0 && (
          <section className="case__gallery-wrap">
            <div className="section__inner">
              <h2 className="section-label">Design</h2>
              <div className="case__gallery">
                {gallery.map((src, i) => (
                  <button
                    type="button"
                    key={src}
                    className="case__gallery-item"
                    onClick={() => setLightbox(src)}
                  >
                    <img
                      src={`${src}?v=2`}
                      alt={`${project.title} design ${i + 1}`}
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {behanceUrl && (
          <section className="case__cta-band section__inner">
            <div className="case__cta-band-inner">
              <div>
                <h2>Want the full visual story?</h2>
                <p>See the complete case study, screens, and process on Behance.</p>
              </div>
              <a
                href={behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                Open Behance
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </section>
        )}

        <section className="case__strip section__inner">
          <span className="section-label">All projects</span>
          <div className="case__strip-list">
            {projects.map((p, i) => (
              <Link
                key={p.slug}
                to={`/project/${p.slug}`}
                className={`case__strip-item ${p.slug === project.slug ? "is-active" : ""}`}
                style={{ "--case-color": p.color } as CSSProperties}
              >
                <span className="case__strip-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="case__strip-title">{p.title}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="case__next section__inner">
          <span className="section-label">Next project</span>
          <Link
            to={`/project/${nextProject.slug}`}
            className="case__next-card"
            style={{ "--case-color": nextProject.color } as CSSProperties}
          >
            <span className="case__next-mark" aria-hidden="true">
              {nextProject.title.charAt(0)}
            </span>
            <div className="case__next-copy">
              <span className="case__next-title">{nextProject.title}</span>
              <span className="case__next-meta">
                {nextProject.year} · {nextProject.tags.slice(0, 2).join(" · ")}
              </span>
            </div>
            <span className="case__next-arrow" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </section>
      </main>

      {lightbox && (
        <div
          className="case__lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >
          <button type="button" className="case__lightbox-close" aria-label="Close image">
            ✕
          </button>
          <img src={lightbox} alt="" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <button
        type="button"
        className={`case__top ${showTop ? "is-visible" : ""}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 13V3M4 7l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <Footer />
    </>
  );
}
