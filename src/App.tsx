import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import ScrollToHash from "./components/ScrollToHash";
import IntroLoader from "./components/IntroLoader";
import Navbar from "./components/Navbar";
import AppLayout from "./components/AppLayout";
import { LanguageProvider } from "./i18n/LanguageContext";
import { ThemeProvider } from "./theme/ThemeContext";
import { usePageAnalytics } from "./hooks/usePageAnalytics";

const INTRO_KEY = "portfolio-intro-seen";

function shouldSkipIntro() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
  return sessionStorage.getItem(INTRO_KEY) === "1";
}

function AppShell() {
  const [ready, setReady] = useState(() => shouldSkipIntro());
  usePageAnalytics();

  const handleIntroDone = () => {
    sessionStorage.setItem(INTRO_KEY, "1");
    setReady(true);
  };

  return (
    <>
      {!ready && <IntroLoader onDone={handleIntroDone} />}
      <BrowserRouter>
        <Navbar />
        <div className={`app-shell${ready ? " is-ready" : ""}`}>
          <ScrollToHash />
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/project/:slug" element={<ProjectPage />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppShell />
      </LanguageProvider>
    </ThemeProvider>
  );
}
