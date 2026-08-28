import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import type { CSSProperties } from "react";
import {
  getBehanceProjectUrl,
  getProjectGallery,
  getProjectOgImage,
} from "../data/content";
import Footer from "../components/Footer";
import { useLanguage } from "../i18n/LanguageContext";
import { usePageMeta } from "../hooks/usePageMeta";
import { trackEvent } from "../lib/analytics";
import "./ProjectPage.css";

export default function ProjectPage() {
  const { slug } = useParams();
  const { t, lang, personal, projectList, getProject } = useLanguage();
  const project = slug ? getProject(slug) : undefined;
  const [progress, setProgress] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [showTop, setShowTop] = useState(false);

  usePageMeta({
    title: project
      ? `${project.title} | ${personal.name}`
      : `${personal.name} | Portfolio`,
    description: project
      ? project.description
      : lang === "de"
        ? "Portfolio von Alaa Shaheen"
        : lang === "ar"
          ? "معرض أعمال الاء شاهين"
          : "Alaa Shaheen portfolio",
    image: project ? getProjectOgImage(project) : "/og.png",
    path: project ? `/project/${project.slug}` : "/",
  });

  useEffect(() => {
    if (project) {
      trackEvent("Project View", { slug: project.slug, title: project.title });
    }
  }, [project?.slug]);

  const processSteps = useMemo(
    () => [
      { label: t("discover"), detail: t("discoverDetail") },
      { label: t("design"), detail: t("designDetail") },
      { label: t("build"), detail: t("buildDetail") },
    ],
    [t],
  );

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

  const currentIndex = projectList.findIndex((p) => p.slug === project.slug);
  const nextProject = projectList[(currentIndex + 1) % projectList.length];
  const prevProject =
    projectList[(currentIndex - 1 + projectList.length) % projectList.length];
  const behanceUrl = getBehanceProjectUrl(project);
  const gallery = getProjectGallery(project);

  return (
    <>
      <div
        className="case__progress"
        style={{ width: `${progress}%`, "--case-color": project.color } as CSSProperties}
        aria-hidden="true"
      />
      <main
        className="case"
        style={{ "--case-color": project.color } as CSSProperties}
        key={`${project.slug}`}
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
                {t("backToWork")}
              </Link>
              <div className="case__pager">
                <Link
                  to={`/project/${prevProject.slug}`}
                  className="case__pager-btn"
                  aria-label={t("prevProject")}
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <span className="case__index">
                  {String(currentIndex + 1).padStart(2, "0")}
                  <span> / {String(projectList.length).padStart(2, "0")}</span>
                </span>
                <Link
                  to={`/project/${nextProject.slug}`}
                  className="case__pager-btn"
                  aria-label={t("nextProjectAria")}
                >
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
                    src={`${project.logo}?v=15`}
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
                    {t("viewBehance")}
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
                    {t("visitLive")}
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="case__meta section__inner">
          <div className="case__meta-item">
            <span className="section-label">{t("role")}</span>
            <p>{project.role}</p>
          </div>
          <div className="case__meta-item">
            <span className="section-label">{t("owned")}</span>
            <p>{project.owned}</p>
          </div>
          <div className="case__meta-item">
            <span className="section-label">{t("tools")}</span>
            <div className="case__chips">
              {project.tools.map((tool) => (
                <span key={tool} className="chip">{tool}</span>
              ))}
            </div>
          </div>
          <div className="case__meta-item">
            <span className="section-label">{t("outcome")}</span>
            <p>{project.outcome}</p>
          </div>
        </section>

        <section className="case__process section__inner">
          <h2 className="section-label">{t("approach")}</h2>
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
              <h2 className="section-label">{t("keyFeatures")}</h2>
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
              <h2 className="section-label">{t("problem")}</h2>
              <p className="case__text">{project.problem}</p>
            </article>
            <article className="case__panel surface surface--soft">
              <h2 className="section-label">{t("solution")}</h2>
              <p className="case__text">{project.solution}</p>
            </article>
          </div>
        </section>

        {gallery.length > 0 && (
          <section className="case__gallery-wrap">
            <div className="section__inner">
              <h2 className="section-label">{t("designGallery")}</h2>
              <div className="case__gallery">
                {gallery.map((src, i) => (
                  <button
                    type="button"
                    key={src}
                    className="case__gallery-item"
                    onClick={() => setLightbox(src)}
                  >
                    <img
                      src={`${src}?v=17`}
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
                <h2>{t("fullStoryTitle")}</h2>
                <p>{t("fullStorySub")}</p>
              </div>
              <a
                href={behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                {t("openBehance")}
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </section>
        )}

        <section className="case__strip section__inner">
          <span className="section-label">{t("allProjects")}</span>
          <div className="case__strip-list">
            {projectList.map((p, i) => (
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
          <span className="section-label">{t("nextProject")}</span>
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
          <button type="button" className="case__lightbox-close" aria-label={t("closeImage")}>
            ✕
          </button>
          <img src={lightbox} alt="" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <button
        type="button"
        className={`case__top ${showTop ? "is-visible" : ""}`}
        aria-label={t("backToTop")}
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
