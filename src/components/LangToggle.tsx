import { useLanguage } from "../i18n/LanguageContext";
import "./LangToggle.css";

export default function LangToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang" role="group" aria-label="Language">
      <button
        type="button"
        className={`lang__btn${lang === "en" ? " is-active" : ""}`}
        aria-pressed={lang === "en"}
        onClick={() => setLang("en")}
      >
        EN
      </button>
      <button
        type="button"
        className={`lang__btn${lang === "de" ? " is-active" : ""}`}
        aria-pressed={lang === "de"}
        onClick={() => setLang("de")}
      >
        DE
      </button>
    </div>
  );
}
