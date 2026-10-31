export const projects = [
  {
    slug: "bcci-erp",
    title: "BCCI ERP",
    tagline: "Enterprise ERP for a chamber of commerce and industry",
    excerpt:
      "A case study of an enterprise ERP covering organization profiles, membership management, AGM surveys, elections, and HRMS.",
    role: "Full Stack Developer",
    status: "Production ERP",
    image: null,
    imageAlt: "BCCI ERP project screenshot placeholder",
    stack: ["React", "TypeScript", "Express.js", "MySQL", "REST APIs", "Docker", "GitHub Actions"],
    links: { demo: null, repo: null },
    overview: [
      "BCCI ERP is an enterprise resource planning application built for a chamber of commerce and industry. It brings organization-level workflows into a single system instead of maintaining separate tools for membership, events, HR, and internal operations.",
      "The application covers organization profiles and membership management, AGM (Annual General Meeting) surveys and election management, and HRMS functionality for the organization.",
    ],
    features: [
      {
        title: "Organization profiles",
        description:
          "Structured profiles for the organization and its members, forming the base record for the rest of the platform.",
      },
      {
        title: "Membership management",
        description:
          "Management of member records and related organizational workflows from a single dashboard.",
      },
      {
        title: "AGM surveys",
        description:
          "Survey workflows used around the Annual General Meeting process.",
      },
      {
        title: "Election management",
        description:
          "Election-related workflows for the organization's annual election process.",
      },
      {
        title: "HRMS",
        description:
          "Human resource management features and related organizational modules.",
      },
    ],
    contributions: [
      "Built full-stack features with React, TypeScript, and REST APIs.",
      "Worked on organizational modules including profile, membership, AGM surveys, elections, and HRMS.",
      "Implemented and integrated backend APIs backed by a relational database.",
    ],
    challenges: [
      "Enterprise modules share the same member and organization data, so changes to one workflow affect several others.",
      "Election and survey workflows need clear state transitions and reliable record keeping.",
    ],
    outcomes: [],
    hasCredentials: false,
    relatedArticles: ["enterprise-erp-challenges", "building-rest-apis-with-nestjs"],
    needsReview: [
      "Project screenshot or dashboard image for the case study and social preview.",
      "Your exact role title and the period you worked on BCCI ERP.",
      "Team size and whether you worked on the frontend, backend, or both.",
      "Confirm the backend stack: existing portfolio data lists Express.js and MySQL; this case study also lists TypeScript and REST APIs.",
      "Any verified, measurable outcomes (do not add numbers that cannot be supported).",
      "Public demo or repository link, if one can be shared.",
    ],
  },
  {
    slug: "restro-erp",
    title: "Restro ERP",
    tagline: "Restaurant and room management system with QR ordering",
    excerpt:
      "A restaurant and room management system with QR-based ordering, Cloudinary image uploads, and thermal printer integration.",
    role: "Full Stack Developer",
    status: "Web application",
    image: "/images/projects/restro-erp.jpg",
    imageWidth: 1200,
    imageHeight: 543,
    imageAlt: "Restro ERP restaurant management system interface",
    stack: ["React", "Node.js", "MongoDB", "Cloudinary", "Thermal printer integration"],
    links: {
      demo: "https://restro-erp.onrender.com",
      repo: "https://github.com/Vuwonn/restro-erp",
    },
    overview: [
      "Restro ERP is a restaurant management system that combines ordering, room management, and day-to-day operations in one application. Guests can order from their table by scanning a QR code, and staff manage orders and rooms from the same system.",
      "The project also handles image uploads for menu and room content, and prints order tickets through a thermal printer integration.",
    ],
    features: [
      {
        title: "QR-based ordering",
        description:
          "Guests scan a QR code at the table to open the ordering flow without installing an app.",
      },
      {
        title: "Room management",
        description:
          "Management of rooms and related booking or availability information.",
      },
      {
        title: "Cloudinary image uploads",
        description:
          "Images for menu items and rooms are uploaded to and served from Cloudinary instead of the application server.",
      },
      {
        title: "Thermal printer integration",
        description:
          "Order tickets are sent to a thermal printer for kitchen and counter workflows.",
      },
    ],
    contributions: [
      "Developed the restaurant management features with React, Node.js, and MongoDB.",
      "Implemented QR-based ordering and room management flows.",
      "Integrated Cloudinary for image uploads and a thermal printer for order tickets.",
    ],
    challenges: [
      "QR ordering requires the guest flow and staff flow to stay in sync in real time.",
      "Thermal printers expect specific formats, so order output has to be formatted for the printer rather than the browser.",
    ],
    outcomes: [],
    hasCredentials: false,
    relatedArticles: ["docker-for-react-and-nodejs", "building-rest-apis-with-nestjs"],
    needsReview: [
      "Screenshot or short screen recording of the QR ordering and room management flows.",
      "The period you worked on Restro ERP and your exact role title.",
      "Which thermal printer model or protocol was used (for example ESC/POS over USB or network).",
      "Confirm the demo URL still works; it is a Render deployment and may sleep.",
      "Any verified, measurable outcomes (do not add numbers that cannot be supported).",
    ],
  },
  {
    slug: "sajiloroom",
    title: "SajiloRoom",
    tagline: "Room discovery and booking without broker fees",
    excerpt:
      "A hackathon project for discovering verified rooms and booking them directly, without paying broker fees.",
    role: "Full Stack Developer",
    status: "Hackathon project",
    image: null,
    imageAlt: "SajiloRoom room discovery platform screenshot placeholder",
    stack: ["JWT authentication"],
    links: { demo: null, repo: null },
    overview: [
      "SajiloRoom is a room discovery and booking platform. The core idea is to help people find verified rooms and book directly, avoiding the broker fees that are common in the rental market.",
      "The project was developed as a hackathon project, with JWT-based authentication for user accounts.",
    ],
    features: [
      {
        title: "Room discovery",
        description:
          "Browse available rooms and view the details needed to decide whether to book.",
      },
      {
        title: "Verified rooms",
        description:
          "The product focuses on verified listings rather than unmoderated posts.",
      },
      {
        title: "No broker fees",
        description:
          "The booking flow is designed to connect the renter and the room directly.",
      },
      {
        title: "JWT authentication",
        description:
          "User authentication is handled with JSON Web Tokens.",
      },
    ],
    contributions: [
      "Built the project as a hackathon submission.",
      "Implemented JWT-based authentication.",
    ],
    challenges: [
      "A hackathon timeline forces trade-offs between verification, booking, and the core search experience.",
    ],
    outcomes: [],
    hasCredentials: false,
    relatedArticles: ["react-vs-nextjs", "building-rest-apis-with-nestjs"],
    needsReview: [
      "Confirm the full technology stack (only JWT authentication is confirmed so far).",
      "The hackathon name, date, and whether the project won or was shortlisted.",
      "Your exact contributions and team size.",
      "Whether rooms were manually verified and how.",
      "Screenshots, demo URL, or repository link.",
    ],
  },
  {
    slug: "udbajar",
    title: "Udbajar",
    tagline: "MERN stack e-commerce application",
    excerpt:
      "A MERN e-commerce application with authentication, product management, search, cart, checkout, JWT authentication, and payment integration.",
    role: "Full Stack Developer",
    status: "Web application",
    image: "/images/projects/udbajar.jpg",
    imageWidth: 1200,
    imageHeight: 547,
    imageAlt: "Udbajar e-commerce application storefront",
    stack: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Payment integration"],
    links: {
      demo: "https://udbajar.com/",
      repo: "https://github.com/Vuwonn",
    },
    overview: [
      "Udbajar is a MERN stack e-commerce application. It includes the core storefront flow: browsing products, searching, adding items to a cart, and checking out.",
      "The backend covers authentication, product management, and payment integration, with JWT used for authenticated requests.",
    ],
    features: [
      {
        title: "Authentication",
        description:
          "Account authentication backed by JSON Web Tokens.",
      },
      {
        title: "Product management",
        description:
          "Management of product records used by the storefront.",
      },
      {
        title: "Search",
        description:
          "Search across the product catalogue.",
      },
      {
        title: "Cart and checkout",
        description:
          "Cart handling and a checkout flow for placing orders.",
      },
      {
        title: "Payment integration",
        description:
          "Payment provider integration in the checkout flow.",
      },
    ],
    contributions: [
      "Built the application on the MERN stack with authentication, product management, search, cart, and checkout.",
      "Implemented JWT authentication and integrated a payment provider.",
    ],
    challenges: [
      "Checkout has to keep cart state, stock, and payments consistent across the client and server.",
      "Authenticated flows need consistent token handling on both the storefront and the admin side.",
    ],
    outcomes: [],
    hasCredentials: false,
    relatedArticles: ["docker-for-react-and-nodejs", "enterprise-erp-challenges"],
    needsReview: [
      "The live demo at udbajar.com should be checked; confirm it is still deployed.",
      "The repository link currently points to your GitHub profile, not a repository. Provide the exact repo URL if it is public.",
      "Name the payment provider (for example eSewa, Khalti, Stripe) if it can be shared.",
      "Screenshots of the product page, cart, and checkout.",
      "Your exact role, period, and team size.",
      "Any verified, measurable outcomes (do not add numbers that cannot be supported).",
    ],
  },
];

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);
