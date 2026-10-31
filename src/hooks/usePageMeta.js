import { useEffect } from "react";
import { HOME_META } from "../seo/meta";

const imageType = (url = "") => {
  const ext = url.split("?")[0].split(".").pop()?.toLowerCase();
  if (ext === "jpg" || ext === "jpeg") return "image/jpeg";
  if (ext === "webp") return "image/webp";
  if (ext === "avif") return "image/avif";
  return "image/png";
};

const setMeta = (attribute, key, content) => {
  if (!content) return;
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const removeMeta = (attribute, key) => {
  const element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (element) element.remove();
};

const setCanonical = (href) => {
  if (!href) return;
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
};

const applyMeta = (meta) => {
  document.title = meta.title;
  setMeta("name", "title", meta.title);
  setMeta("name", "description", meta.description);
  setCanonical(meta.canonical);

  setMeta("property", "og:type", meta.ogType);
  setMeta("property", "og:title", meta.title);
  setMeta("property", "og:description", meta.description);
  setMeta("property", "og:url", meta.canonical);
  setMeta("property", "og:image", meta.image);
  setMeta("property", "og:image:secure_url", meta.image);
  setMeta("property", "og:image:type", imageType(meta.image));
  setMeta("property", "og:image:alt", meta.imageAlt);
  if (meta.imageWidth && meta.imageHeight) {
    setMeta("property", "og:image:width", String(meta.imageWidth));
    setMeta("property", "og:image:height", String(meta.imageHeight));
  } else {
    removeMeta("property", "og:image:width");
    removeMeta("property", "og:image:height");
  }

  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:url", meta.canonical);
  setMeta("name", "twitter:title", meta.title);
  setMeta("name", "twitter:description", meta.description);
  setMeta("name", "twitter:image", meta.image);
  setMeta("name", "twitter:image:alt", meta.imageAlt);

  let script = document.getElementById("page-schema");
  if (meta.jsonLd?.length) {
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "page-schema";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(meta.jsonLd);
  } else if (script) {
    script.remove();
  }
};

export const usePageMeta = (meta) => {
  const serialized = JSON.stringify(meta);

  useEffect(() => {
    applyMeta(JSON.parse(serialized));
    return () => applyMeta(HOME_META);
  }, [serialized]);
};
