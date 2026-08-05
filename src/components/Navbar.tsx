import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { navLinks } from "../data/content";
import Logo from "./Logo";
import "./Logo.css";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <Link to="/" className="nav__logo" aria-label="Alaa Shaheen home">
        <Logo />
      </Link>
      <nav className="nav__links">
        {navLinks.map((link) => (
          <Link key={link.href} to={link.href} className="nav__link">
            {link.label}
          </Link>
        ))}
      </nav>
      <Link to="/#contact" className="nav__cta">
        Let's talk
      </Link>
    </header>
  );
}
