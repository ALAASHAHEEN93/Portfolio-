import { personalInfo } from "../data/content";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero section">
      <div className="hero__blobs" aria-hidden="true">
        <div className="blob blob--1" />
        <div className="blob blob--2" />
      </div>

      <div className="hero__layout section__inner">
        <div className="hero__content">
          <p className="hero__brand">{personalInfo.name}</p>

          <div className="hero__meta">
            <a
              href={`mailto:${personalInfo.email}?subject=Hello%20Alaa`}
              className="badge badge--live"
            >
              <span className="badge__dot" />
              Available for work
            </a>
            <span className="hero__meta-text">{personalInfo.location}</span>
          </div>

          <h1 className="hero__title">
            <span className="hero__line">Crafting</span>
            <span className="hero__line hero__line--accent">digital</span>
            <span className="hero__line">experiences</span>
          </h1>

          <p className="hero__sub">{personalInfo.about}</p>

          <div className="hero__actions">
            <a href="#work" className="btn btn--primary">
              View work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href={personalInfo.socials.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Behance
            </a>
          </div>
        </div>

        <div className="hero__photo-wrap">
          <div className="hero__photo">
            <div className="hero__photo-glow" />
            <div className="hero__photo-frame">
              <img src="/profile-original.png" alt={personalInfo.name} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
