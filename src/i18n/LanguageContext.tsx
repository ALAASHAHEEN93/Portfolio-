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
  languages,
  personalInfo,
  projects,
  skills,
  designPrinciples,
  designPrinciplesDe,
  type Project,
} from "../data/content";
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
  principles: typeof designPrinciples;
  projectList: Project[];
  getProject: (slug: string) => Project | undefined;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem(LANG_STORAGE_KEY);
  if (isLang(stored)) return stored;
  return navigator.language.toLowerCase().startsWith("de") ? "de" : "en";
}

function localizeProjects(lang: Lang): Project[] {
  if (lang === "en") return projects;
  return projects.map((project) => {
    const copy = projectsDe[project.slug];
    return copy ? { ...project, ...copy } : project;
  });
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => readInitialLang());

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    localStorage.setItem(LANG_STORAGE_KEY, next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LanguageContextValue>(() => {
    const projectList = localizeProjects(lang);
    return {
      lang,
      setLang,
      t: (key) => ui[lang][key],
      personal:
        lang === "de"
          ? { ...personalInfo, ...personalInfoDe }
          : personalInfo,
      experienceItems: lang === "de" ? experienceDe : experience,
      educationItems: lang === "de" ? educationDe : education,
      languageItems: lang === "de" ? languagesDe : languages,
      skillItems: lang === "de" ? skillsDe : skills,
      principles: lang === "de" ? designPrinciplesDe : designPrinciples,
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
