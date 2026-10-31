import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getPrerenderRoutes, SITE_URL } from "../src/seo/meta.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const templatePath = path.join(dist, "index.html");

if (!fs.existsSync(templatePath)) {
  throw new Error("dist/index.html not found. Run vite build first.");
}

const template = fs.readFileSync(templatePath, "utf8");
const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const escapeXml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const replaceAttr = (html, source, key, value) => {
  const pattern = new RegExp(
    `(<meta\\s+${source}="${escapeRegExp(key)}"\\s+content=")[^"]*(")`
  );
  if (!pattern.test(html)) {
    return html.replace(
      "</head>",
      `    <meta ${source}="${key}" content="${value}" />\n  </head>`
    );
  }
  return html.replace(pattern, (match, start, end) => `${start}${value}${end}`);
};

const replaceLink = (html, rel, value) => {
  const pattern = new RegExp(`(<link\\s+rel="${rel}"\\s+href=")[^"]*(")`);
  return html.replace(pattern, (match, start, end) => `${start}${value}${end}`);
};

const imageType = (url = "") => {
  const ext = url.split("?")[0].split(".").pop()?.toLowerCase();
  if (ext === "jpg" || ext === "jpeg") return "image/jpeg";
  if (ext === "webp") return "image/webp";
  if (ext === "avif") return "image/avif";
  return "image/png";
};

const imageSize = (url) => {
  try {
    const relative = url.replace(SITE_URL, "").split("?")[0];
    const file = path.join(root, "public", relative);
    const buffer = fs.readFileSync(file);
    if (buffer[0] === 0x89 && buffer[1] === 0x50) {
      return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
    }
    if (buffer[0] === 0xff && buffer[1] === 0xd8) {
      let offset = 2;
      while (offset < buffer.length) {
        if (buffer[offset] !== 0xff) {
          offset += 1;
          continue;
        }
        const marker = buffer[offset + 1];
        if (
          marker === 0xd8 ||
          marker === 0xd9 ||
          marker === 0x01 ||
          (marker >= 0xd0 && marker <= 0xd7)
        ) {
          offset += 2;
          continue;
        }
        const length = buffer.readUInt16BE(offset + 2);
        if (
          marker >= 0xc0 &&
          marker <= 0xcf &&
          marker !== 0xc4 &&
          marker !== 0xc8 &&
          marker !== 0xcc
        ) {
          return {
            height: buffer.readUInt16BE(offset + 5),
            width: buffer.readUInt16BE(offset + 7),
          };
        }
        offset += 2 + length;
      }
    }
  } catch {
    return null;
  }
  return null;
};

const renderHtml = (meta) => {
  let html = template;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`);
  html = replaceAttr(html, "name", "title", meta.title);
  html = replaceAttr(html, "name", "description", meta.description);
  html = replaceLink(html, "canonical", meta.canonical);
  html = replaceAttr(html, "property", "og:type", meta.ogType);
  html = replaceAttr(html, "property", "og:title", meta.title);
  html = replaceAttr(html, "property", "og:description", meta.description);
  html = replaceAttr(html, "property", "og:url", meta.canonical);
  html = replaceAttr(html, "property", "og:image", meta.image);
  html = replaceAttr(html, "property", "og:image:secure_url", meta.image);
  html = replaceAttr(html, "property", "og:image:type", imageType(meta.image));
  html = replaceAttr(html, "property", "og:image:alt", meta.imageAlt);
  html = replaceAttr(html, "name", "twitter:card", "summary_large_image");
  html = replaceAttr(html, "name", "twitter:url", meta.canonical);
  html = replaceAttr(html, "name", "twitter:title", meta.title);
  html = replaceAttr(html, "name", "twitter:description", meta.description);
  html = replaceAttr(html, "name", "twitter:image", meta.image);
  html = replaceAttr(html, "name", "twitter:image:alt", meta.imageAlt);

  const size = imageSize(meta.image);
  if (size) {
    html = replaceAttr(html, "property", "og:image:width", String(size.width));
    html = replaceAttr(html, "property", "og:image:height", String(size.height));
  }

  if (meta.jsonLd?.length) {
    const schema = JSON.stringify(meta.jsonLd, null, 2);
    html = html.replace(
      "</head>",
      `    <script type="application/ld+json" id="page-schema">\n${schema}\n    </script>\n  </head>`
    );
  }

  return html;
};

const routes = getPrerenderRoutes();

for (const route of routes) {
  const outputDir = path.join(dist, route.path);
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, "index.html"), renderHtml(route.meta));
}

const today = new Date().toISOString().slice(0, 10);
const sitemapRoutes = [
  { loc: `${SITE_URL}/`, priority: "1.0", changefreq: "monthly" },
  ...routes.map((route) => ({
    loc: `${SITE_URL}${route.path}`,
    priority: "0.8",
    changefreq: "monthly",
  })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapRoutes
  .map(
    (route) => `  <url>
    <loc>${escapeXml(route.loc)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);

console.log(`Prerendered ${routes.length} routes and regenerated dist/sitemap.xml`);
