import { useLanguage } from "../i18n/LanguageContext";
import "./Marquee.css";

export default function Marquee() {
  const { skillItems } = useLanguage();
  const items = [...skillItems, ...skillItems];

  return (
    <div className="marquee">
      <div className="marquee__track">
        {items.map((skill, i) => (
          <span key={`${skill}-${i}`} className="marquee__item">
            {skill}
            <span className="marquee__shape" />
          </span>
        ))}
      </div>
    </div>
  );
}
