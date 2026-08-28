import { useLanguage } from "../i18n/LanguageContext";
import { trackEvent } from "../lib/analytics";
import type { Lang } from "../i18n/types";
import "./LangToggle.css";

const LANGS: { id: Lang; label: string }[] = [
  { id: "en", label: "EN" },
  { id: "de", label: "DE" },
  { id: "ar", label: "AR" },
];

export default function LangToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang" role="group" aria-label="Language">
      {LANGS.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          className={`lang__btn${lang === id ? " is-active" : ""}`}
          aria-pressed={lang === id}
          onClick={() => {
            setLang(id);
            trackEvent("Language", { lang: id });
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
