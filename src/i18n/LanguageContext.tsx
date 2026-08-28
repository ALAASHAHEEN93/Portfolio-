import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  education,
  experience,
  focusAreas,
  languages,
  personalInfo,
  projects,
  skills,
  designPrinciples,
  designPrinciplesDe,
  type Project,
} from "../data/content";
import {
  designPrinciplesAr,
  educationAr,
  experienceAr,
  focusAreasAr,
  languagesAr,
  personalInfoAr,
  projectsAr,
  skillsAr,
} from "./content.ar";
import {
  educationDe,
  experienceDe,
  languagesDe,
  personalInfoDe,
  projectsDe,
  skillsDe,
} from "./content.de";
import { isLang, LANG_STORAGE_KEY, type Lang } from "./types";
import { ui, type UiKey } from "./ui";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: UiKey) => string;
  personal: typeof personalInfo;
  experienceItems: typeof experience;
  educationItems: typeof education;
  languageItems: typeof languages;
  skillItems: string[];
  focusAreaItems: string[];
  principles: typeof designPrinciples;
  projectList: Project[];
  getProject: (slug: string) => Project | undefined;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem(LANG_STORAGE_KEY);
  if (isLang(stored)) return stored;
  const nav = navigator.language.toLowerCase();
  if (nav.startsWith("ar")) return "ar";
  if (nav.startsWith("de")) return "de";
  return "en";
}

function localizeProjects(lang: Lang): Project[] {
  if (lang === "en") return projects;
  const copyMap = lang === "de" ? projectsDe : projectsAr;
  return projects.map((project) => {
    const copy = copyMap[project.slug];
    return copy ? { ...project, ...copy } : project;
  });
}

function getLocalizedBundle(lang: Lang) {
  if (lang === "de") {
    return {
      personal: { ...personalInfo, ...personalInfoDe },
      experienceItems: experienceDe,
      educationItems: educationDe,
      languageItems: languagesDe,
      skillItems: skillsDe,
      focusAreaItems: focusAreas,
      principles: designPrinciplesDe,
    };
  }
  if (lang === "ar") {
    return {
      personal: { ...personalInfo, ...personalInfoAr },
      experienceItems: experienceAr,
      educationItems: educationAr,
      languageItems: languagesAr,
      skillItems: skillsAr,
      focusAreaItems: focusAreasAr,
      principles: designPrinciplesAr,
    };
  }
  return {
    personal: personalInfo,
    experienceItems: experience,
    educationItems: education,
    languageItems: languages,
    skillItems: skills,
    focusAreaItems: focusAreas,
    principles: designPrinciples,
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => readInitialLang());

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    localStorage.setItem(LANG_STORAGE_KEY, next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const value = useMemo<LanguageContextValue>(() => {
    const projectList = localizeProjects(lang);
    const bundle = getLocalizedBundle(lang);
    return {
      lang,
      setLang,
      t: (key) => ui[lang][key],
      ...bundle,
      projectList,
      getProject: (slug) => projectList.find((p) => p.slug === slug),
    };
  }, [lang, setLang]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
