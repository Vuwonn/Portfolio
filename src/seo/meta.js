import { projects } from "../data/projects.js";
import { posts } from "../data/blog.js";

export const SITE_URL = "https://www.bhuwanchaudhary.com.np";
export const PERSON_ID = `${SITE_URL}/#person`;
export const PERSON_NAME = "Bhuwan Chaudhary";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og/portfolio-preview.png`;
export const SITE_NAME = "Bhuwan Chaudhary";

const absolute = (path) => {
  if (!path) return DEFAULT_OG_IMAGE;
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

export const HOME_META = {
  title: "Bhuwan Chaudhary | Full Stack Developer",
  description:
    "Official portfolio of Bhuwan Chaudhary, Full Stack Developer based in Butwal, Nepal. Discover real-world experience building scalable web applications with React, Node.js, MongoDB and modern technologies.",
  canonical: `${SITE_URL}/`,
  ogType: "website",
  image: DEFAULT_OG_IMAGE,
  imageWidth: 1248,
  imageHeight: 832,
  imageAlt: "Bhuwan Chaudhary - Full Stack Developer",
  jsonLd: [],
};

const personRef = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: PERSON_NAME,
  url: `${SITE_URL}/`,
};

export const breadcrumbLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absolute(item.path),
  })),
});

export function buildProjectMeta(project) {
  const canonical = `${SITE_URL}/projects/${project.slug}`;
  const image = absolute(project.image);
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: project.title, path: `/projects/${project.slug}` },
  ];

  return {
    title: `${project.title} Case Study | ${PERSON_NAME}`,
    description: project.excerpt,
    canonical,
    ogType: "article",
    image,
    imageWidth: project.image ? project.imageWidth : 1248,
    imageHeight: project.image ? project.imageHeight : 832,
    imageAlt: project.imageAlt,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "@id": `${canonical}#case-study`,
        name: project.title,
        headline: project.tagline,
        description: project.excerpt,
        url: canonical,
        image,
        about: project.stack,
        keywords: project.stack.join(", "),
        author: personRef,
        creator: personRef,
        inLanguage: "en",
      },
      breadcrumbLd(breadcrumbs),
    ],
    breadcrumbs,
  };
}

export function buildPostMeta(post) {
  const canonical = `${SITE_URL}/blog/${post.slug}`;
  const image = absolute(post.cover);
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  return {
    title: `${post.title} | ${PERSON_NAME}`,
    description: post.excerpt,
    canonical,
    ogType: "article",
    image,
    imageWidth: 1248,
    imageHeight: 832,
    imageAlt: post.coverAlt,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `${canonical}#article`,
        headline: post.title,
        description: post.excerpt,
        url: canonical,
        image,
        datePublished: post.date,
        dateModified: post.updated,
        author: personRef,
        publisher: personRef,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonical,
        },
        articleSection: post.categories,
        keywords: post.tags.join(", "),
        inLanguage: "en",
      },
      breadcrumbLd(breadcrumbs),
    ],
    breadcrumbs,
  };
}

export function buildProjectsIndexMeta() {
  const canonical = `${SITE_URL}/projects`;
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
  ];

  return {
    title: `Projects | ${PERSON_NAME}`,
    description:
      "Project case studies by Bhuwan Chaudhary covering enterprise ERP systems, restaurant management, room booking, and e-commerce applications.",
    canonical,
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
    imageWidth: 1248,
    imageHeight: 832,
    imageAlt: "Bhuwan Chaudhary project case studies",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${canonical}#collection`,
        name: "Project case studies",
        url: canonical,
        description:
          "Project case studies by Bhuwan Chaudhary covering enterprise ERP systems, restaurant management, room booking, and e-commerce applications.",
        hasPart: projects.map((project) => ({
          "@type": "CreativeWork",
          name: project.title,
          url: `${SITE_URL}/projects/${project.slug}`,
        })),
      },
      breadcrumbLd(breadcrumbs),
    ],
    breadcrumbs,
  };
}

export function buildBlogIndexMeta() {
  const canonical = `${SITE_URL}/blog`;
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ];

  return {
    title: `Blog | ${PERSON_NAME}`,
    description:
      "Technical articles by Bhuwan Chaudhary on React, Next.js, NestJS, PostgreSQL, Docker, and enterprise application development.",
    canonical,
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
    imageWidth: 1248,
    imageHeight: 832,
    imageAlt: "Bhuwan Chaudhary technical blog",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": `${canonical}#blog`,
        name: "Bhuwan Chaudhary - Technical Blog",
        url: canonical,
        description:
          "Technical articles by Bhuwan Chaudhary on React, Next.js, NestJS, PostgreSQL, Docker, and enterprise application development.",
        author: personRef,
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          url: `${SITE_URL}/blog/${post.slug}`,
          datePublished: post.date,
          dateModified: post.updated,
        })),
      },
      breadcrumbLd(breadcrumbs),
    ],
    breadcrumbs,
  };
}

export function buildAboutMeta() {
  const canonical = `${SITE_URL}/about`;
  const description =
    "Learn about Bhuwan Chaudhary, a Full Stack Software Engineer and DevOps enthusiast based in Butwal, Nepal, building scalable applications and cloud infrastructure.";
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  return {
    title: `About | ${PERSON_NAME}`,
    description,
    canonical,
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
    imageWidth: 1248,
    imageHeight: 832,
    imageAlt: "About Bhuwan Chaudhary",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": `${canonical}#about-page`,
        url: canonical,
        name: `About ${PERSON_NAME}`,
        description,
        mainEntity: personRef,
        inLanguage: "en",
      },
      breadcrumbLd(breadcrumbs),
    ],
    breadcrumbs,
  };
}

export function buildExpertiseMeta() {
  const canonical = `${SITE_URL}/expertise`;
  const description =
    "Explore Bhuwan Chaudhary's technical expertise across full stack development, DevOps, cloud architecture, databases, security, networking, and system design.";
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Expertise", path: "/expertise" },
  ];

  return {
    title: `Expertise | ${PERSON_NAME}`,
    description,
    canonical,
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
    imageWidth: 1248,
    imageHeight: 832,
    imageAlt: "Bhuwan Chaudhary technical expertise",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${canonical}#expertise`,
        url: canonical,
        name: `Expertise | ${PERSON_NAME}`,
        description,
        mainEntity: personRef,
        about: [
          "Full Stack Development",
          "DevOps",
          "Cloud Architecture",
          "Databases",
          "Security",
          "Networking",
          "System Design",
        ],
        inLanguage: "en",
      },
      breadcrumbLd(breadcrumbs),
    ],
    breadcrumbs,
  };
}

export function buildExperienceMeta() {
  const canonical = `${SITE_URL}/experience`;
  const description =
    "Review Bhuwan Chaudhary's professional experience as a full stack developer working on enterprise software, ERP systems, and web applications.";
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/experience" },
  ];

  return {
    title: `Experience | ${PERSON_NAME}`,
    description,
    canonical,
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
    imageWidth: 1248,
    imageHeight: 832,
    imageAlt: "Bhuwan Chaudhary professional experience",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${canonical}#experience`,
        url: canonical,
        name: `Experience | ${PERSON_NAME}`,
        description,
        mainEntity: personRef,
        about: "Software Engineering",
        inLanguage: "en",
      },
      breadcrumbLd(breadcrumbs),
    ],
    breadcrumbs,
  };
}

export function buildContactMeta() {
  const canonical = `${SITE_URL}/contact`;
  const description =
    "Get in touch with Bhuwan Chaudhary for full stack development work, technical collaboration, or professional opportunities.";
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ];

  return {
    title: `Contact | ${PERSON_NAME}`,
    description,
    canonical,
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
    imageWidth: 1248,
    imageHeight: 832,
    imageAlt: "Contact Bhuwan Chaudhary",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": `${canonical}#contact-page`,
        url: canonical,
        name: `Contact ${PERSON_NAME}`,
        description,
        mainEntity: personRef,
        inLanguage: "en",
      },
      breadcrumbLd(breadcrumbs),
    ],
    breadcrumbs,
  };
}

export function getPrerenderRoutes() {
  return [
    { path: "/", meta: HOME_META },
    { path: "/about", meta: buildAboutMeta() },
    { path: "/expertise", meta: buildExpertiseMeta() },
    { path: "/experience", meta: buildExperienceMeta() },
    { path: "/contact", meta: buildContactMeta() },
    { path: "/projects", meta: buildProjectsIndexMeta() },
    ...projects.map((project) => ({
      path: `/projects/${project.slug}`,
      meta: buildProjectMeta(project),
    })),
    { path: "/blog", meta: buildBlogIndexMeta() },
    ...posts.map((post) => ({
      path: `/blog/${post.slug}`,
      meta: buildPostMeta(post),
    })),
  ];
}
