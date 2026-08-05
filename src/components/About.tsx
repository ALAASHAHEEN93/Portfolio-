import { personalInfo, focusAreas, skills } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import "./About.css";

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="about section">
      <div ref={ref} className="about__shell reveal section__inner">
        <div className="about__card">
          <div className="about__visual">
            <div className="about__avatar">
              <img src="/profile-original.png" alt={personalInfo.name} />
            </div>
          </div>

          <div className="about__text">
            <span className="badge badge--accent">About</span>
            <h2 className="section-title">
              Designing with empathy,
              <em>building with purpose</em>
            </h2>
            <p className="section-sub about__bio">
              With hands-on experience in web, mobile, and SaaS projects, I combine
              creativity and technical precision to transform complex ideas into
              simple, accessible interfaces.
            </p>

            <div className="about__stats">
              <div className="about__stat">
                <span className="section-label">Location</span>
                <span className="about__stat-value">{personalInfo.location}</span>
              </div>
              <div className="about__stat">
                <span className="section-label">Focus</span>
                <div className="about__tags">
                  {focusAreas.map((area) => (
                    <span key={area} className="chip">{area}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about__skills">
          <span className="section-label">Skills</span>
          <div className="about__skills-list">
            {skills.map((skill) => (
              <span key={skill} className="chip">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
