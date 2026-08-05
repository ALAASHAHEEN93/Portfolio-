import { Link } from "react-router-dom";
import { socialLinks } from "../data/content";
import Logo from "./Logo";
import "./Logo.css";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="footer__brand" aria-label="Alaa Shaheen home">
        <Logo />
      </Link>

      <div className="footer__socials">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social"
          >
            {link.label}
          </a>
        ))}
      </div>

      <p className="footer__tag">
        &copy; {new Date().getFullYear()} Alaa Shaheen
      </p>
    </footer>
  );
}
