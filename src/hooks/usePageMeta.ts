import { useEffect } from "react";

type PageMeta = {
  title: string;
  description: string;
  image?: string;
  path?: string;
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function usePageMeta({ title, description, image = "/og.png", path = "/" }: PageMeta) {
  useEffect(() => {
    const previous = document.title;
    document.title = title;
    document.documentElement.lang = document.documentElement.lang || "en";

    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", path.startsWith("/project/") ? "article" : "website");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);

    const origin = window.location.origin;
    const absoluteImage = image.startsWith("http") ? image : `${origin}${image}`;
    upsertMeta("property", "og:image", absoluteImage);
    upsertMeta("name", "twitter:image", absoluteImage);
    upsertMeta("property", "og:url", `${origin}${path}`);

    return () => {
      document.title = previous;
    };
  }, [title, description, image, path]);
}
