import Hero from "../components/Hero";
import Work from "../components/Work";
import About from "../components/About";
import Experience from "../components/Experience";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useLanguage } from "../i18n/LanguageContext";
import { usePageMeta } from "../hooks/usePageMeta";
import "../App.css";

export default function Home() {
  const { lang, personal } = useLanguage();

  usePageMeta({
    title:
      lang === "de"
        ? `${personal.name} | UI/UX Designerin`
        : lang === "ar"
          ? `${personal.name} | مصممة واجهات وتجربة مستخدم`
          : `${personal.name} | UI/UX Designer`,
    description:
      lang === "de"
        ? "Portfolio von Alaa Shaheen. UI/UX Design und Front-end in Köln. Mobile Apps, Branding und Web."
        : lang === "ar"
          ? "معرض أعمال الاء شاهين. تصميم واجهات وتطويرها في كولونيا. تطبيقات وعلامات وويب."
          : "Alaa Shaheen. UI/UX Designer in Cologne. Portfolio of mobile apps, branding, and front-end work.",
    image: "/og.png",
    path: "/",
  });

  return (
    <>
      <main>
        <Hero />
        <Work />
        <About />
        <Experience />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
