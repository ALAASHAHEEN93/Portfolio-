declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

const DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN;

let loaded = false;

export function initAnalytics() {
  if (!DOMAIN || loaded || typeof document === "undefined") return;
  loaded = true;
  const script = document.createElement("script");
  script.defer = true;
  script.dataset.domain = DOMAIN;
  script.src = "https://plausible.io/js/script.js";
  document.head.appendChild(script);
}

export function trackPageview() {
  if (!DOMAIN) return;
  window.plausible?.("pageview");
}

export function trackEvent(name: string, props?: Record<string, string>) {
  if (!DOMAIN) return;
  window.plausible?.(name, props ? { props } : undefined);
}

export function isAnalyticsEnabled() {
  return Boolean(DOMAIN);
}
