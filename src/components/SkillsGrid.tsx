import { skillCategories } from "../data/content";
import { skillCategoryTitlesAr, skillLabelsAr } from "../i18n/content.ar";
import { useLanguage } from "../i18n/LanguageContext";
import type { Lang } from "../i18n/types";
import "./SkillsGrid.css";

function categoryTitle(id: string, lang: Lang, fallback: string) {
  if (lang === "ar") return skillCategoryTitlesAr[id] ?? fallback;
  return fallback;
}

function itemLabel(id: string, lang: Lang, fallback: string) {
  if (lang === "ar") return skillLabelsAr[id] ?? fallback;
  return fallback;
}

export default function SkillsGrid() {
  const { lang, t } = useLanguage();
  const skillLang = lang === "ar" ? "en" : lang;

  return (
    <div className="skills-grid">
      <span className="section-label">{t("skills")}</span>
      <div className="skills-grid__columns">
        {skillCategories.map((category) => (
          <div key={category.id} className="skills-grid__col">
            <h3 className="skills-grid__heading">
              {categoryTitle(category.id, lang, category.title[skillLang])}
            </h3>
            <ul className="skills-grid__list">
              {category.items.map((item) => (
                <li key={item.id} className="skill-row">
                  <div className="skill-row__head">
                    <span className="skill-row__icon" aria-hidden="true">
                      <SkillIcon id={item.id} />
                    </span>
                    <span className="skill-row__name">
                      {itemLabel(item.id, lang, item.label[skillLang])}
                    </span>
                    <span className="skill-row__pct">{item.level}%</span>
                  </div>
                  <div className="skill-row__track">
                    <span
                      className="skill-row__fill"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillIcon({ id }: { id: string }) {
  const props = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (id) {
    case "figma":
      return (
        <svg {...props}>
          <path d="M8 3h8v6a4 4 0 0 1-8 0V3Z" />
          <path d="M8 9a4 4 0 0 0 8 0" />
          <path d="M12 13v8" />
          <path d="M8 17h8" />
        </svg>
      );
    case "react":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="2.2" />
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </svg>
      );
    case "javascript":
    case "typescript":
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 16v-4.5c0-1 .8-1.5 1.6-1 .6.4.9.3 1.4 0 .5-.3 1-.3 1.4.2.5.5.6 1.2.6 1.8V16" />
          <path d="M15 11.5V16" />
        </svg>
      );
    case "html":
      return (
        <svg {...props}>
          <path d="M4 3l2 17 6 2 6-2 2-17H4Z" />
          <path d="M8 8h8M9.5 12h5" />
        </svg>
      );
    case "webflow":
      return (
        <svg {...props}>
          <path d="M4 7h16M4 12h10M4 17h14" />
        </svg>
      );
    case "accessibility":
      return (
        <svg {...props}>
          <circle cx="12" cy="4.5" r="2" />
          <path d="M7 8h10M12 8v5M9 20l3-7 3 7" />
        </svg>
      );
    case "teamwork":
      return (
        <svg {...props}>
          <circle cx="9" cy="8" r="2.5" />
          <circle cx="16" cy="9" r="2" />
          <path d="M4 18c0-2.2 2.2-4 5-4M14 18c0-1.8 1.6-3.2 3.5-3.5" />
        </svg>
      );
    case "ux":
      return (
        <svg {...props}>
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" />
        </svg>
      );
    case "wireframe":
      return (
        <svg {...props}>
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <path d="M8 9h8M8 13h5" />
        </svg>
      );
    case "prototype":
      return (
        <svg {...props}>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 17h6" />
        </svg>
      );
    case "systems":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="8" height="8" rx="1.5" />
          <rect x="13" y="3" width="8" height="8" rx="1.5" />
          <rect x="3" y="13" width="8" height="8" rx="1.5" />
          <rect x="13" y="13" width="8" height="8" rx="1.5" />
        </svg>
      );
    case "flows":
      return (
        <svg {...props}>
          <path d="M5 6h4v4H9V6H5Z" />
          <path d="M15 14h4v4h-4v-4Z" />
          <path d="M9 8l6 6" />
        </svg>
      );
    case "handoff":
      return (
        <svg {...props}>
          <path d="M12 3v12" />
          <path d="m8 11 4 4 4-4" />
          <path d="M5 19h14" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M9 12h6" />
        </svg>
      );
  }
}
