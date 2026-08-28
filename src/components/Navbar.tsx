import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import LangToggle from "./LangToggle";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import { socialLinks } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";
import "./Logo.css";
import "./Navbar.css";

const SECTION_IDS = ["top", "work", "about", "cv", "contact"] as const;

export default function Navbar() {
  const { t } = useLanguage();
  const location = useLocation();
  const [active, setActive] = useState("top");
  const onProject = location.pathname.startsWith("/project/");

  const navLinks = useMemo(
    () => [
      { id: "top", label: t("navHome"), href: "/#top" },
      { id: "work", label: t("navWork"), href: "/#work" },
      { id: "about", label: t("navAbout"), href: "/#about" },
      { id: "cv", label: t("navCv"), href: "/#cv" },
      { id: "contact", label: t("navContact"), href: "/#contact" },
    ] as const,
    [t],
  );

  useEffect(() => {
    if (onProject) setActive("work");
  }, [location.pathname, onProject]);

  useEffect(() => {
    if (onProject) return;

    const fromHash = location.hash.replace("#", "");
    if (fromHash && SECTION_IDS.includes(fromHash as (typeof SECTION_IDS)[number])) {
      setActive(fromHash);
    }

    const observed = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!observed.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.2, 0.5] },
    );

    observed.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location.hash, onProject]);

  return (
    <header className="nav">
      <div className="nav__bar">
        <Link to="/" className="nav__bar-brand" aria-label="Alaa Shaheen home">
          <Logo />
        </Link>

        <nav className="nav__bar-links" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`nav__bar-link${active === link.id ? " is-active" : ""}`}
              onClick={() => setActive(link.id)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav__bar-actions">
          <ThemeToggle />
          <LangToggle />
          <Link to="/#contact" className="nav__bar-cta">
            {t("letsTalk")}
          </Link>
        </div>
      </div>

      <div id="nav-panel" className="nav__panel">
        <Link to="/" className="nav__logo" aria-label="Alaa Shaheen home">
          <Logo />
        </Link>

        <div className="nav__socials">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="nav__social"
              aria-label={link.label}
            >
              <SocialIcon name={link.label} />
            </a>
          ))}
        </div>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`nav__link${active === link.id ? " is-active" : ""}`}
              onClick={() => setActive(link.id)}
            >
              <span className="nav__icon" aria-hidden="true">
                <NavIcon id={link.id} />
              </span>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav__footer">
          <div className="nav__footer-tools">
            <ThemeToggle />
            <div className="nav__lang">
              <LangToggle />
            </div>
          </div>
          <Link to="/#contact" className="nav__cta">
            {t("letsTalk")}
          </Link>
        </div>
      </div>
    </header>
  );
}

function NavIcon({ id }: { id: (typeof SECTION_IDS)[number] }) {
  const svgProps = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (id) {
    case "top":
      return (
        <svg {...svgProps} aria-hidden="true">
          <path d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-5v-5.5H10V20H5a1 1 0 0 1-1-1v-8.5Z" />
        </svg>
      );
    case "work":
      return (
        <svg {...svgProps} aria-hidden="true">
          <rect x="3" y="7" width="18" height="14" rx="2" />
          <path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7" />
        </svg>
      );
    case "about":
      return (
        <svg {...svgProps} aria-hidden="true">
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5.5 20.5c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" />
        </svg>
      );
    case "cv":
      return (
        <svg {...svgProps} aria-hidden="true">
          <path d="M8 3h8l3 3v15H5V3h3Z" />
          <path d="M16 3v4h4M9 12h6M9 16h6" />
        </svg>
      );
    case "contact":
      return (
        <svg {...svgProps} aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
  }
}

function SocialIcon({ name }: { name: string }) {
  if (name === "GitHub") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-1.99 1.03-2.7-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.71 1.03 1.6 1.03 2.7 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    );
  }
  if (name === "LinkedIn") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.5H3.75V20h3.19V8.5ZM5.34 3.5A1.85 1.85 0 1 0 5.35 7.2 1.85 1.85 0 0 0 5.34 3.5ZM20.25 20h-3.18v-5.6c0-1.34-.02-3.06-1.86-3.06-1.86 0-2.15 1.45-2.15 2.96V20H9.88V8.5h3.05v1.57h.04c.42-.8 1.46-1.65 3.01-1.65 3.22 0 3.82 2.12 3.82 4.87V20Z" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8.2 10.9c1.6 0 2.7-.8 2.7-2.3 0-1.6-1.2-2.3-2.9-2.3H4v9.4h4.4c2 0 3.4-1 3.4-2.8 0-1.4-.9-2-2.5-2.3h-1.1v-2zm-2.4-3h1.9c.8 0 1.3.4 1.3 1.1S8.4 10 7.6 10H5.8V7.9zm2 7.3H5.8v-2.4h2.1c.9 0 1.5.4 1.5 1.2s-.6 1.2-1.6 1.2zM16.8 11.2c.1-1.3.9-2.1 2.1-2.1.9 0 1.6.4 1.9 1.1h2.2c-.5-2-2.2-3.1-4.2-3.1-2.8 0-4.7 2-4.7 4.6s1.9 4.7 4.7 4.7c1.9 0 3.4-.8 4.2-2.2l-2-1c-.4.8-1.1 1.3-2.1 1.3-1.1 0-1.9-.6-2.1-1.7h6.3c0-.2.1-.5.1-.8 0-2.7-1.7-4.5-4.4-4.5zm-.1 1.7c.2-1.1.9-1.7 1.9-1.7 1.1 0 1.8.6 1.9 1.7h-3.8zM14.6 6.3h6V8h-6V6.3z" />
    </svg>
  );
}
