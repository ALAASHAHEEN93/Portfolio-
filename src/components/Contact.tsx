import { personalInfo, socialLinks } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import "./Contact.css";

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="contact section">
      <div ref={ref} className="contact__card reveal section__inner">
        <div className="contact__orb contact__orb--1" aria-hidden="true" />
        <div className="contact__orb contact__orb--2" aria-hidden="true" />

        <div className="contact__content">
          <span className="badge badge--accent">Contact</span>
          <h2 className="section-title">
            Let's create
            <em>something great</em>
          </h2>
          <p className="section-sub">
            Open to new opportunities in UI/UX design and front-end development.
          </p>
        </div>

        <div className="contact__aside">
          <a
            href={personalInfo.resumeUrl}
            download="CV.pdf"
            className="contact__resume"
          >
            <span className="contact__email-label">Download CV</span>
            <span className="contact__email-value">PDF resume</span>
            <span className="contact__email-arrow" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 4v9M7 10l3 3 3-3M4 16h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>

          <a href={`mailto:${personalInfo.email}`} className="contact__email">
            <span className="contact__email-label">Email me</span>
            <span className="contact__email-value">{personalInfo.email}</span>
            <span className="contact__email-arrow" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>

          <div className="contact__socials">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
