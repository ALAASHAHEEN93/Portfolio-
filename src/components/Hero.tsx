import { useEffect, useRef, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import "./Hero.css";

function BrandChars({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <>
      {text.split("").map((char, i) => (
        <span
          key={`${char}-${i}`}
          className="hero__char"
          style={{ animationDelay: `${delay + i * 0.035}s` }}
        >
          {char}
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  const { t, personal, projectList } = useLanguage();
  const [firstName, lastName] = personal.name.split(" ");
  const heroRef = useRef<HTMLElement>(null);
  const peek = projectList.filter((p) => p.logo).slice(0, 3);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduceMotion || coarse) return;

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const tick = () => {
      curX += (targetX - curX) * 0.07;
      curY += (targetY - curY) * 0.07;
      el.style.setProperty("--mx", curX.toFixed(3));
      el.style.setProperty("--my", curY.toFixed(3));
      raf = requestAnimationFrame(tick);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero__atmosphere" aria-hidden="true">
        <div className="hero__wash hero__wash--a" />
        <div className="hero__wash hero__wash--b" />
        <div className="hero__wash hero__wash--c" />
        <div className="hero__grid" />
        <div className="hero__arc-layer">
          <div className="hero__arc" />
        </div>
      </div>

      <div className="hero__stage">
        <div className="hero__content">
          <div className="hero__meta">
            <a
              href={`mailto:${personal.email}?subject=Hello%20Alaa`}
              className="badge badge--live"
            >
              <span className="badge__dot" />
              {t("available")}
            </a>
            <span className="hero__meta-rule" />
            <span className="hero__meta-text">{personal.location}</span>
          </div>

          <h1 className="hero__brand">
            <span className="hero__brand-line">
              <span className="hero__brand-word">
                <BrandChars text={firstName} delay={0.06} />
              </span>
            </span>
            <span className="hero__brand-line hero__brand-line--accent">
              <span className="hero__brand-word">
                <BrandChars text={lastName} delay={0.22} />
              </span>
            </span>
          </h1>

          <div className="hero__copy">
            <p className="hero__title">
              <span className="hero__line">{t("heroLine1")}</span>
              <span className="hero__line hero__line--accent">{t("heroLine2")}</span>
            </p>
            <p className="hero__sub">{t("heroSub")}</p>
          </div>

          <div className="hero__actions">
            <a href="#work" className="btn btn--primary">
              {t("viewWork")}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href={personal.socials.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Behance
            </a>
          </div>

          {peek.length > 0 && (
            <div className="hero__peek">
              <span className="hero__peek-label">{t("featured")}</span>
              <div className="hero__peek-row">
                {peek.map((project) => (
                  <Link
                    key={project.slug}
                    to={`/project/${project.slug}`}
                    className="hero__peek-item"
                    aria-label={project.title}
                    style={{ "--peek-color": project.color } as CSSProperties}
                  >
                    <img src={project.logo} alt="" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="hero__visual">
          <div className="hero__visual-shift">
            <div className="hero__visual-frame">
              <div className="hero__visual-plane">
                <img src="/profile-original.png" alt={personal.name} />
                <span className="hero__visual-tint" aria-hidden="true" />
              </div>
              <div className="hero__visual-ring" aria-hidden="true" />
            </div>
            <p className="hero__visual-caption">
              <span>{t("photoCaption")}</span>
            </p>
          </div>
        </aside>
      </div>

      <a href="#work" className="hero__scroll" aria-label={t("viewWork")}>
        <span className="hero__scroll-label">Scroll</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}
