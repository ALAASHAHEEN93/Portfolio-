import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      if (pathname === "/") return;
      window.scrollTo(0, 0);
      return;
    }

    const id = hash.replace("#", "");
    const timer = window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 60);

    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
