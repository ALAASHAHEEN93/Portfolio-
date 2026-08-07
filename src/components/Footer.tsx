import { Link } from "react-router-dom";
import { socialLinks } from "../data/content";
import Logo from "./Logo";
import { useLanguage } from "../i18n/LanguageContext";
import "./Logo.css";
import "./Footer.css";

export default function Footer() {
  const { t, personal } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand-block">
          <Link to="/" className="footer__brand" aria-label="Alaa Shaheen home">
            <Logo />
          </Link>
          <div className="footer__copy">
            <p className="footer__name">{personal.name}</p>
            <a
              href={`mailto:${personal.email}?subject=Hello%20Alaa`}
              className="footer__available"
            >
              <span className="footer__dot" aria-hidden="true" />
              {t("footerAvailable")}
            </a>
          </div>
        </div>

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
      </div>
    </footer>
  );
}
