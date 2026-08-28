import { useCallback, useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { useLanguage } from "../i18n/LanguageContext";
import "./Logo.css";
import "./IntroLoader.css";

type Props = {
  onDone: () => void;
};

export default function IntroLoader({ onDone }: Props) {
  const { t, personal } = useLanguage();
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const doneRef = useRef(false);

  const finish = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    setProgress(100);
    setExiting(true);
    window.setTimeout(onDone, 480);
  }, [onDone]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      finish();
      return;
    }

    const duration = 2000;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const tNorm = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - tNorm) ** 2.2;
      setProgress(Math.round(eased * 100));

      if (tNorm < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        finish();
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [finish]);

  return (
    <div
      className={`intro${exiting ? " intro--exit" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label={t("introLabel")}
    >
      <button type="button" className="intro__skip" onClick={finish}>
        {t("introSkip")}
      </button>

      <div className="intro__content">
        <div className="intro__logo" aria-hidden="true">
          <Logo />
        </div>
        <p className="intro__label">{t("introLabel")}</p>
        <p className="intro__name">{personal.name}</p>

        <div className="intro__progress">
          <div className="intro__bar">
            <span className="intro__bar-fill" style={{ width: `${progress}%` }} />
          </div>
          <span className="intro__percent">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
