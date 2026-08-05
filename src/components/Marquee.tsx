import { skills } from "../data/content";
import "./Marquee.css";

export default function Marquee() {
  const items = [...skills, ...skills];

  return (
    <div className="marquee">
      <div className="marquee__track">
        {items.map((skill, i) => (
          <span key={i} className="marquee__item">
            {skill}
            <span className="marquee__shape" />
          </span>
        ))}
      </div>
    </div>
  );
}
