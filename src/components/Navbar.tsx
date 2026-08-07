import { Link } from "react-router-dom";
import { useState, useEffect, useRef, useMemo } from "react";
import LangToggle from "./LangToggle";
import Logo from "./Logo";
import { useLanguage } from "../i18n/LanguageContext";
import "./Logo.css";
import "./Navbar.css";

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const navLinks = useMemo(
    () => [
      { label: t("navWork"), href: "/#work" },
      { label: t("navAbout"), href: "/#about" },
      { label: t("navCv"), href: "/#cv" },
      { label: t("navContact"), href: "/#contact" },
    ],
    [t],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onPointer = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (navRef.current && !navRef.current.contains(target)) setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
    };
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      ref={navRef}
      className={`nav ${scrolled ? "nav--scrolled" : ""}${open ? " nav--open" : ""}`}
    >
      <Link
        to="/"
        className="nav__logo"
        aria-label="Alaa Shaheen home"
        onClick={() => setOpen(false)}
      >
        <Logo />
      </Link>

      <nav className="nav__links" aria-label="Primary">
        {navLinks.map((link) => (
          <Link key={link.href} to={link.href} className="nav__link">
            {link.label}
          </Link>
        ))}
      </nav>

      <LangToggle />

      <Link to="/#contact" className="nav__cta nav__cta--desktop">
        {t("letsTalk")}
      </Link>

      <button
        type="button"
        className="nav__toggle"
        aria-expanded={open}
        aria-controls="nav-menu"
        aria-label={open ? t("closeMenu") : t("openMenu")}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="nav__toggle-bar" />
        <span className="nav__toggle-bar" />
      </button>

      <div
        id="nav-menu"
        className={`nav__menu${open ? " is-open" : ""}`}
        hidden={!open}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="nav__menu-link"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          to="/#contact"
          className="nav__menu-cta"
          onClick={() => setOpen(false)}
        >
          {t("letsTalk")}
        </Link>
      </div>
    </header>
  );
}
