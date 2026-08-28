import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../i18n/LanguageContext";
import SectionLabel from "./SectionLabel";
import "./Faq.css";

export default function Faq() {
  const { t } = useLanguage();
  const ref = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(0);

  const items = [
    { q: t("faq1Q"), a: t("faq1A") },
    { q: t("faq2Q"), a: t("faq2A") },
    { q: t("faq3Q"), a: t("faq3A") },
    { q: t("faq4Q"), a: t("faq4A") },
  ];

  return (
    <section id="faq" className="faq section">
      <div ref={ref} className="faq__inner reveal section__inner">
        <SectionLabel num="04" label={t("faqBadge")} />
        <div className="faq__head section-head">
          <h2 className="section-title">{t("faqTitle")}</h2>
          <p className="section-sub">{t("faqSub")}</p>
        </div>
        <div className="faq__list">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className={`faq__item${isOpen ? " is-open" : ""}`}>
                <button
                  type="button"
                  className="faq__question"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq__icon" aria-hidden="true" />
                </button>
                <div className="faq__answer" hidden={!isOpen}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
