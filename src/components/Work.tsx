import SectionLabel from "./SectionLabel";
import { useCallback, useMemo, useState, type CSSProperties, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import {
  projectMatchesFilter,
  getProjectGallery,
  countProjectsByFilter,
} from "../data/content";
import type { Project, WorkFilter } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../i18n/LanguageContext";
import type { Lang } from "../i18n/types";
import "./Work.css";

const filterKeys = ["All", "Web", "Mobile", "Branding"] as const;
const MAX_PREVIEW = 5;

type FanSlot = { r: number; x: number; y: number; z: number };

const FAN_5: FanSlot[] = [
  { r: -12, x: -98, y: 6, z: 1 },
  { r: -6, x: -49, y: 3, z: 2 },
  { r: 0, x: 0, y: 0, z: 3 },
  { r: 6, x: 49, y: 3, z: 4 },
  { r: 12, x: 98, y: 6, z: 5 },
];

function getFanSlots(count: number): FanSlot[] {
  if (count >= 5) return FAN_5;
  if (count === 4) return [FAN_5[0], FAN_5[1], FAN_5[3], FAN_5[4]];
  if (count === 3) return [FAN_5[1], FAN_5[2], FAN_5[3]];
  if (count === 2) return [FAN_5[1], FAN_5[3]];
  return [FAN_5[2]];
}

function getPreviewImages(project: Project): string[] {
  const gallery = getProjectGallery(project);
  if (gallery.length >= MAX_PREVIEW) {
    const step = Math.max(1, Math.floor(gallery.length / MAX_PREVIEW));
    return Array.from({ length: MAX_PREVIEW }, (_, i) => gallery[Math.min(i * step, gallery.length - 1)]);
  }
  if (gallery.length) return gallery;
  if (project.logo) return [project.logo];
  return [];
}

function pieceLabel(count: number, lang: Lang): string {
  if (lang === "de") return count === 1 ? "1 Stück" : `${count} Stücke`;
  if (lang === "ar") return count === 1 ? "عنصر واحد" : `${count} عناصر`;
  return count === 1 ? "1 piece" : `${count} pieces`;
}

export default function Work() {
  const { t, personal, projectList, lang } = useLanguage();
  const headerRef = useReveal<HTMLDivElement>();
  const [filter, setFilter] = useState<WorkFilter>("All");
  const [hover, setHover] = useState<{
    slug: string;
    x: number;
    y: number;
    isLogo: boolean;
  } | null>(null);

  const filterLabels: Record<WorkFilter, string> = {
    All: t("filterAll"),
    Web: t("filterWeb"),
    Mobile: t("filterMobile"),
    Branding: t("filterBranding"),
  };

  const filterCounts = useMemo(
    () =>
      Object.fromEntries(
        filterKeys.map((key) => [key, countProjectsByFilter(projectList, key)]),
      ) as Record<WorkFilter, number>,
    [projectList],
  );

  const visible = useMemo(
    () => projectList.filter((p) => projectMatchesFilter(p, filter)),
    [filter, projectList],
  );

  const previewProject = useMemo(
    () => (hover ? projectList.find((p) => p.slug === hover.slug) : undefined),
    [hover, projectList],
  );

  const previewImages = previewProject ? getPreviewImages(previewProject) : [];
  const fanSlots = getFanSlots(previewImages.length);

  const handleRowMove = useCallback(
    (slug: string, isLogo: boolean, e: MouseEvent<HTMLAnchorElement>) => {
      setHover({ slug, x: e.clientX, y: e.clientY, isLogo });
    },
    [],
  );

  const handleRowEnter = useCallback(
    (slug: string, isLogo: boolean, e: MouseEvent<HTMLAnchorElement>) => {
      setHover({ slug, x: e.clientX, y: e.clientY, isLogo });
    },
    [],
  );

  const handleRowLeave = useCallback(() => {
    setHover(null);
  }, []);

  return (
    <section id="work" className="work section">
      <div className="section__inner">
        <div ref={headerRef} className="work__header reveal">
          <div className="section-head">
            <SectionLabel num="01" label={t("workBadge")} />
            <h2 className="section-title">{t("workTitle")}</h2>
            <p className="section-sub">{t("workSub")}</p>
          </div>
          <a
            href={personal.socials.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            {t("openBehance")}
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="work__filters" role="tablist" aria-label="Filter projects">
          {filterKeys.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={filter === item}
              className={`work__filter${filter === item ? " is-active" : ""}`}
              onClick={() => setFilter(item)}
            >
              {filterLabels[item]}
              <span className="work__filter-count" aria-hidden="true">
                {filterCounts[item]}
              </span>
            </button>
          ))}
        </div>

        <ul className="work__list">
          {visible.map((project, index) => {
            const gallery = getProjectGallery(project);
            const pieceCount = gallery.length || (project.logo ? 1 : 0);
            const isLogo = gallery.length === 0 && Boolean(project.logo);

            return (
              <WorkRow
                key={project.slug}
                project={project}
                index={index}
                pieceCount={pieceCount}
                pieceLabel={pieceLabel(pieceCount, lang)}
                isLogo={isLogo}
                isHovered={hover?.slug === project.slug}
                onEnter={handleRowEnter}
                onMove={handleRowMove}
                onLeave={handleRowLeave}
              />
            );
          })}
        </ul>
      </div>

      {hover && previewImages.length > 0 && (
        <div
          className="work-preview"
          style={{ left: hover.x, top: hover.y }}
          aria-hidden="true"
        >
          {previewImages.map((src, i) => {
            const slot = fanSlots[i];
            if (!slot) return null;
            return (
              <div
                key={`${src}-${i}`}
                className={`work-preview__card${hover.isLogo ? " work-preview__card--logo" : ""}`}
                style={
                  {
                    "--r": `${slot.r}deg`,
                    "--x": `${slot.x}px`,
                    "--y": `${slot.y}px`,
                    "--z": slot.z,
                    "--i": i,
                    "--card-color": previewProject?.color,
                  } as CSSProperties
                }
              >
                <img src={src} alt="" loading="eager" decoding="async" />
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

function WorkRow({
  project,
  index,
  pieceCount,
  pieceLabel,
  isLogo,
  isHovered,
  onEnter,
  onMove,
  onLeave,
}: {
  project: Project;
  index: number;
  pieceCount: number;
  pieceLabel: string;
  isLogo: boolean;
  isHovered: boolean;
  onEnter: (slug: string, isLogo: boolean, e: MouseEvent<HTMLAnchorElement>) => void;
  onMove: (slug: string, isLogo: boolean, e: MouseEvent<HTMLAnchorElement>) => void;
  onLeave: () => void;
}) {
  const { t } = useLanguage();
  const ref = useReveal<HTMLLIElement>();

  return (
    <li ref={ref} className={`work__item reveal reveal-delay-${(index % 4) + 1}`}>
      <Link
        to={`/project/${project.slug}`}
        className={`work__row${isHovered ? " is-hovered" : ""}`}
        onMouseEnter={(e) => onEnter(project.slug, isLogo, e)}
        onMouseMove={(e) => onMove(project.slug, isLogo, e)}
        onMouseLeave={onLeave}
      >
        <div className="work__row-main">
          <h3 className="work__row-title">{project.title}</h3>
          <p className="work__row-desc">{project.description}</p>
        </div>
        <div className="work__row-meta">
          {project.featured && (
            <span className="work__featured-tag">{t("featured")}</span>
          )}
          {pieceCount > 0 && (
            <span className="work__row-pieces">{pieceLabel}</span>
          )}
          <span className="work__row-year">{project.year}</span>
          <span className="work__row-arrow" aria-hidden="true">→</span>
        </div>
      </Link>
    </li>
  );
}
