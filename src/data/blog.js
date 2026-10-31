export const posts = [
  {
    slug: "react-vs-nextjs",
    title: "React vs Next.js: What Should You Choose?",
    excerpt:
      "A practical comparison of React and Next.js: rendering models, routing, data fetching, SEO, deployment, and when each one makes sense.",
    date: "2026-10-04",
    updated: "2026-10-31",
    author: "Bhuwan Chaudhary",
    cover: null,
    coverAlt: "React and Next.js comparison illustration placeholder",
    categories: ["React", "Next.js", "Frontend"],
    tags: ["react", "nextjs", "ssr", "seo", "routing"],
    draft: true,
    needsReview: [
      "Replace the general guidance with your own project examples if you want a personal angle.",
    ],
    relatedProjects: ["sajiloroom", "udbajar"],
    relatedArticles: ["docker-for-react-and-nodejs", "my-journey-learning-nestjs"],
    content: [
      {
        type: "p",
        text: "React is a UI library. Next.js is a framework built on top of React that adds routing, rendering strategies, and build tooling. The choice is less about which one is better and more about how much structure and server-side capability your application needs.",
      },
      { type: "h2", text: "The core difference" },
      {
        type: "p",
        text: "With React alone you choose your own router, data-fetching approach, and build setup. Vite is a common choice for a client-side React app. With Next.js, those decisions are mostly made for you: file-based routing, server rendering options, image optimization, and API routes are part of the framework.",
      },
      {
        type: "ul",
        items: [
          "React: a library for building interfaces. You compose the rest of the stack.",
          "Next.js: a React framework with conventions for routing, rendering, and deployment.",
        ],
      },
      { type: "h2", text: "Rendering models" },
      {
        type: "p",
        text: "A client-side React app ships JavaScript, mounts the app in the browser, and fetches data after that. Next.js can render pages on the server (SSR), generate them at build time (SSG), or stream them with React Server Components. Each model changes what the browser receives and when content becomes visible.",
      },
      {
        type: "ul",
        items: [
          "Client-side rendering (CSR): fast navigation after the first load, but a blank shell until JavaScript runs.",
          "Static generation (SSG): HTML is created at build time, which is excellent for content that changes infrequently.",
          "Server-side rendering (SSR): HTML is created per request, which suits personalized or frequently changing data.",
        ],
      },
      { type: "h2", text: "Routing" },
      {
        type: "p",
        text: "React needs a router such as React Router. Next.js uses the file system: a file under app or pages becomes a route. That convention makes routes predictable, but it also means the framework owns more of your project structure.",
      },
      { type: "h2", text: "Data fetching" },
      {
        type: "p",
        text: "In a client-side React app, data fetching is usually handled with fetch inside effects or a library like TanStack Query. In Next.js, data can be fetched on the server before rendering, which avoids a request waterfall in the browser and can improve the initial experience. The trade-off is that server data fetching has its own caching and revalidation rules.",
      },
      { type: "h2", text: "SEO and social metadata" },
      {
        type: "p",
        text: "Search engines can execute JavaScript, but not every crawler and social platform does. A client-rendered app can still rank, but per-page titles, descriptions, and Open Graph tags may not be visible to scrapers unless you prerender. Next.js makes server-rendered metadata the default path. With a plain React SPA you need a prerender step or a host that renders pages for you.",
      },
      { type: "h2", text: "When React alone is a good fit" },
      {
        type: "ul",
        items: [
          "The app is behind a login and SEO is not a priority.",
          "You already have a backend API and want a thin client.",
          "You want full control over routing and build tooling.",
          "You are building an internal dashboard or a single-page portfolio.",
        ],
      },
      { type: "h2", text: "When Next.js is a good fit" },
      {
        type: "ul",
        items: [
          "Public pages need fast first paint and reliable per-page metadata.",
          "You want file-based routing without assembling a stack.",
          "You need server rendering, image optimization, or API endpoints in one project.",
          "You want a deployment target with first-class support for the framework.",
        ],
      },
      { type: "h2", text: "A practical way to decide" },
      {
        type: "p",
        text: "Start with the rendering and SEO requirements, not the popularity of the tool. If the page must be crawlable and shareable without executing JavaScript, plan for server or build-time rendering from the beginning. Adding that later is a larger change than choosing it up front.",
      },
      {
        type: "note",
        text: "Draft: this is general technical guidance. Add your own project examples and trade-offs before publishing.",
      },
    ],
  },
  {
    slug: "my-journey-learning-nestjs",
    title: "My Journey Learning NestJS",
    excerpt:
      "A draft learning journal about picking up NestJS, the concepts that mattered most, and how the framework changes the way you structure a backend.",
    date: "2026-10-08",
    updated: "2026-10-31",
    author: "Bhuwan Chaudhary",
    cover: null,
    coverAlt: "NestJS learning journey cover placeholder",
    categories: ["NestJS", "Backend", "Learning"],
    tags: ["nestjs", "typescript", "backend", "learning"],
    draft: true,
    needsReview: [
      "Rewrite the timeline and challenges in your own words. The current text is a structural draft and does not invent specific dates or events.",
      "Add the projects or exercises you actually used while learning NestJS.",
      "Replace the bracketed placeholders with your own experiences.",
    ],
    relatedProjects: ["bcci-erp", "restro-erp"],
    relatedArticles: ["building-rest-apis-with-nestjs", "enterprise-erp-challenges"],
    content: [
      {
        type: "note",
        text: "Draft: this article is about personal experience. Replace the generic statements and [bracketed placeholders] with what actually happened. Do not publish until you have reviewed it.",
      },
      {
        type: "p",
        text: "NestJS was my introduction to a backend framework that is opinionated about structure. Coming from Express, where a route can live almost anywhere, NestJS asks you to decide where modules, controllers, and providers belong before you write much logic.",
      },
      { type: "h2", text: "The first thing that clicked" },
      {
        type: "p",
        text: "Dependency injection was the concept that changed how I read backend code. Instead of importing a database service directly, a class declares what it needs in its constructor and Nest provides it. That makes testing and replacing parts of the application much easier once the pattern is familiar.",
      },
      { type: "h2", text: "Modules as boundaries" },
      {
        type: "p",
        text: "A NestJS module groups related controllers and providers. The value is not the file structure itself; it is that a module gives you a place to decide what is shared and what stays private. In larger applications, those boundaries prevent every service from becoming globally available.",
      },
      { type: "h2", text: "What was harder than expected" },
      {
        type: "ul",
        items: [
          "Understanding when to use a pipe, a guard, or an interceptor.",
          "Keeping DTO validation and database models consistent.",
          "Choosing between synchronous and asynchronous providers.",
          "Testing with the Nest testing utilities instead of ad-hoc mocks.",
        ],
      },
      { type: "h2", text: "How I would learn it again" },
      {
        type: "ol",
        items: [
          "Build one small CRUD API with a controller, service, and module.",
          "Add validation with DTOs and class-validator.",
          "Add authentication with guards and a JWT strategy.",
          "Write unit tests for a service and an end-to-end test for a route.",
          "Connect a real database and handle migrations deliberately.",
        ],
      },
      {
        type: "p",
        text: "The framework rewards consistency. Once the module/controller/provider pattern is in place, adding a feature becomes a matter of repeating a known structure rather than inventing a new one.",
      },
      {
        type: "note",
        text: "Personal review needed: add the specific project, date range, and mistakes that were part of your actual learning process.",
      },
    ],
  },
  {
    slug: "building-rest-apis-with-nestjs",
    title: "Building REST APIs with NestJS",
    excerpt:
      "A practical walkthrough of a NestJS REST API: modules, controllers, services, DTO validation, guards, error handling, and testing.",
    date: "2026-10-12",
    updated: "2026-10-31",
    author: "Bhuwan Chaudhary",
    cover: null,
    coverAlt: "NestJS REST API architecture diagram placeholder",
    categories: ["NestJS", "Backend", "REST APIs"],
    tags: ["nestjs", "rest", "typescript", "validation", "testing"],
    draft: true,
    needsReview: [
      "Review the code samples against the NestJS version you use.",
      "Add a short paragraph about how you structure APIs in your own projects.",
    ],
    relatedProjects: ["bcci-erp", "restro-erp"],
    relatedArticles: ["my-journey-learning-nestjs", "enterprise-erp-challenges"],
    content: [
      {
        type: "p",
        text: "NestJS structures a REST API around modules, controllers, and services. Controllers handle HTTP, services hold business logic, and modules wire the two together. This article walks through the shape of a small but realistic API.",
      },
      { type: "h2", text: "Start with a module" },
      {
        type: "p",
        text: "A feature module declares its controller and providers. Keeping the module small makes it clear what the feature owns.",
      },
      {
        type: "code",
        language: "ts",
        code: `// users/users.module.ts
import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}`,
      },
      { type: "h2", text: "Controllers stay thin" },
      {
        type: "p",
        text: "A controller should translate HTTP into a method call and return the result. Database queries and business rules belong in the service.",
      },
      {
        type: "code",
        language: "ts",
        code: `// users/users.controller.ts
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(id);
  }
}`,
      },
      { type: "h2", text: "Validate input with DTOs" },
      {
        type: "p",
        text: "Validation is part of the API contract. DTOs plus class-validator keep invalid data out of your services. Enable a global ValidationPipe so the rules apply consistently.",
      },
      {
        type: "code",
        language: "ts",
        code: `// main.ts
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })
  );
  await app.listen(3000);
}
bootstrap();`,
      },
      {
        type: "code",
        language: "ts",
        code: `// users/dto/create-user.dto.ts
import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}`,
      },
      { type: "h2", text: "Return consistent errors" },
      {
        type: "p",
        text: "NestJS maps thrown HttpExceptions to HTTP responses. Use the built-in exceptions for expected failures and an exception filter if you need a consistent error envelope across the API.",
      },
      {
        type: "code",
        language: "ts",
        code: `throw new NotFoundException("User not found");`,
      },
      { type: "h2", text: "Authentication with guards" },
      {
        type: "p",
        text: "Guards run before the route handler. A JWT guard reads the token, verifies it, and attaches the user to the request. Apply it per route or globally and opt out for public endpoints.",
      },
      { type: "h2", text: "Test the contract" },
      {
        type: "p",
        text: "Unit tests cover the service logic; end-to-end tests cover routing, validation, and guards. If both pass, the API is far less likely to break when a controller changes.",
      },
      {
        type: "ul",
        items: [
          "Unit test the service with the repository mocked.",
          "E2E test the route with a test database or an in-memory adapter.",
          "Test the failure cases, not only the happy path.",
        ],
      },
      { type: "h2", text: "Checklist before shipping" },
      {
        type: "ul",
        items: [
          "Validation enabled globally.",
          "Errors mapped to meaningful status codes.",
          "Authentication and authorization separated.",
          "Pagination and filtering defined for list endpoints.",
          "Migrations tracked in version control.",
        ],
      },
      {
        type: "note",
        text: "Draft: verify the examples against your installed NestJS version and add how you organize modules in your own projects.",
      },
    ],
  },
  {
    slug: "enterprise-erp-challenges",
    title: "Building Enterprise ERP Systems: Challenges and Solutions",
    excerpt:
      "Common engineering challenges in ERP systems: shared data models, role-based access, audit trails, transactions, reporting, and upgrades.",
    date: "2026-10-16",
    updated: "2026-10-31",
    author: "Bhuwan Chaudhary",
    cover: null,
    coverAlt: "Enterprise ERP system architecture cover placeholder",
    categories: ["ERP", "Backend", "System Design"],
    tags: ["erp", "system-design", "rbac", "audit", "databases"],
    draft: true,
    needsReview: [
      "Add verified details from your own ERP work only where you can support them.",
      "The challenges below are general; remove anything that does not match your experience.",
    ],
    relatedProjects: ["bcci-erp", "restro-erp"],
    relatedArticles: ["building-rest-apis-with-nestjs", "postgresql-joins-explained"],
    content: [
      {
        type: "p",
        text: "ERP systems are difficult because they are not one application. They are several business domains sharing the same people, organizations, permissions, and financial records. The hard parts are usually at the boundaries between those domains.",
      },
      { type: "h2", text: "One database, many workflows" },
      {
        type: "p",
        text: "Membership, HR, elections, and finance often depend on the same core entities. A change to how an organization or member is modeled can affect every module. Keeping a single well-defined core model and building modules around it is usually more maintainable than duplicating records per feature.",
      },
      { type: "h2", text: "Roles and permissions" },
      {
        type: "p",
        text: "ERP permissions are rarely a single admin flag. Users may manage one module but only read another, and access can depend on the organization or branch. Role-based access control works best when permissions are explicit and checked on the server for every operation, not only in the UI.",
      },
      { type: "h2", text: "Auditability" },
      {
        type: "p",
        text: "Business users need to know who changed a record and when. Audit tables, immutable event records, or a combination of both make it possible to answer those questions later. Designing for auditability after launch is much harder than capturing changes from the start.",
      },
      { type: "h2", text: "Transactions and consistency" },
      {
        type: "p",
        text: "Approvals, elections, and financial records often involve several related writes. Wrap them in a transaction so a failure cannot leave a half-finished state. For long-running workflows, an explicit state machine is easier to reason about than scattered status flags.",
      },
      { type: "h2", text: "Reporting without slowing the app" },
      {
        type: "p",
        text: "Reports can be expensive. Running them against the same tables that serve the application can degrade the user experience. Options include read replicas, summary tables, and scheduled exports, chosen based on how fresh the report must be.",
      },
      { type: "h2", text: "Upgrades and migrations" },
      {
        type: "ul",
        items: [
          "Version every schema change and keep migrations in source control.",
          "Make migrations reversible where practical.",
          "Test against a copy of realistic data, not only an empty database.",
          "Plan for modules that are deployed independently.",
        ],
      },
      { type: "h2", text: "What to get right early" },
      {
        type: "ol",
        items: [
          "Model the shared core entities carefully.",
          "Decide the permission model before building screens.",
          "Capture audit data from day one.",
          "Keep business rules in services, not controllers or components.",
          "Document the workflows that cross module boundaries.",
        ],
      },
      {
        type: "note",
        text: "Draft: this article describes general ERP engineering challenges. Add only the details you can verify from your own projects before publishing.",
      },
    ],
  },
  {
    slug: "postgresql-joins-explained",
    title: "PostgreSQL JOINs Explained with Practical Examples",
    excerpt:
      "INNER, LEFT, RIGHT, FULL, and CROSS JOIN in PostgreSQL, with examples, filtering rules, and performance notes.",
    date: "2026-10-20",
    updated: "2026-10-31",
    author: "Bhuwan Chaudhary",
    cover: null,
    coverAlt: "PostgreSQL JOIN types diagram placeholder",
    categories: ["PostgreSQL", "Databases", "SQL"],
    tags: ["postgresql", "sql", "joins", "performance"],
    draft: true,
    needsReview: [
      "Run the examples against a PostgreSQL instance and confirm the output on your version.",
    ],
    relatedProjects: ["bcci-erp", "udbajar"],
    relatedArticles: ["enterprise-erp-challenges", "docker-for-react-and-nodejs"],
    content: [
      {
        type: "p",
        text: "A JOIN combines rows from two tables using a related column. The join type decides which rows survive when there is no match. The examples below use a small orders and customers schema.",
      },
      {
        type: "code",
        language: "sql",
        code: `CREATE TABLE customers (
  id      bigserial PRIMARY KEY,
  name    text NOT NULL
);

CREATE TABLE orders (
  id          bigserial PRIMARY KEY,
  customer_id bigint REFERENCES customers(id),
  total       numeric(10, 2) NOT NULL
);`,
      },
      { type: "h2", text: "INNER JOIN" },
      {
        type: "p",
        text: "An inner join returns only rows where the condition matches on both sides. If a customer has no orders, that customer is excluded.",
      },
      {
        type: "code",
        language: "sql",
        code: `SELECT c.name, o.id AS order_id, o.total
FROM customers c
INNER JOIN orders o ON o.customer_id = c.id;`,
      },
      { type: "h2", text: "LEFT JOIN" },
      {
        type: "p",
        text: "A left join keeps every row from the left table and fills the right side with NULLs when there is no match. This is the usual choice for reports where you want customers with zero orders too.",
      },
      {
        type: "code",
        language: "sql",
        code: `SELECT c.name, COUNT(o.id) AS order_count
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.id
GROUP BY c.id, c.name;`,
      },
      {
        type: "note",
        text: "Filtering a left join matters: a condition in WHERE on the right table turns it into an inner join. Put the condition in the ON clause when you want to keep unmatched left rows.",
      },
      {
        type: "code",
        language: "sql",
        code: `-- Keeps customers even when they have no large orders
SELECT c.name, o.total
FROM customers c
LEFT JOIN orders o
  ON o.customer_id = c.id AND o.total > 100;`,
      },
      { type: "h2", text: "RIGHT JOIN and FULL JOIN" },
      {
        type: "p",
        text: "A right join is the mirror of a left join. A full join keeps unmatched rows from both sides. Right joins are uncommon because you can usually rewrite them as a left join by swapping the tables, which is easier to read.",
      },
      {
        type: "code",
        language: "sql",
        code: `SELECT c.name, o.id
FROM customers c
FULL JOIN orders o ON o.customer_id = c.id;`,
      },
      { type: "h2", text: "CROSS JOIN" },
      {
        type: "p",
        text: "A cross join produces the Cartesian product: every row from the first table paired with every row from the second. It is useful for generating combinations, but it grows quickly and is rarely what you want by accident.",
      },
      {
        type: "code",
        language: "sql",
        code: `SELECT c.name, d.month
FROM customers c
CROSS JOIN (VALUES ('2026-09'), ('2026-10')) AS d(month);`,
      },
      { type: "h2", text: "Indexes and performance" },
      {
        type: "ul",
        items: [
          "Index the columns used in join conditions; for orders that is customer_id.",
          "Use EXPLAIN (ANALYZE, BUFFERS) to see the actual plan and row counts.",
          "Avoid functions on the joined column in the ON clause when an index could be used.",
          "A join is not automatically slow; a missing index or a bad plan is the usual cause.",
        ],
      },
      {
        type: "code",
        language: "sql",
        code: `CREATE INDEX idx_orders_customer_id ON orders(customer_id);

EXPLAIN (ANALYZE, BUFFERS)
SELECT c.name, o.id
FROM customers c
JOIN orders o ON o.customer_id = c.id
WHERE c.id = 42;`,
      },
      { type: "h2", text: "A quick decision guide" },
      {
        type: "ul",
        items: [
          "Only matched rows: INNER JOIN.",
          "All left rows plus matches: LEFT JOIN.",
          "All right rows plus matches: RIGHT JOIN (or swap to LEFT JOIN).",
          "Everything from both sides: FULL JOIN.",
          "Every combination: CROSS JOIN.",
        ],
      },
      {
        type: "note",
        text: "Draft: verify the examples and EXPLAIN output against your PostgreSQL version before publishing.",
      },
    ],
  },
  {
    slug: "docker-for-react-and-nodejs",
    title: "Docker for React and Node.js Applications",
    excerpt:
      "How to containerize a React frontend and a Node.js API: multi-stage builds, Nginx, Docker Compose, environment variables, and smaller images.",
    date: "2026-10-24",
    updated: "2026-10-31",
    author: "Bhuwan Chaudhary",
    cover: null,
    coverAlt: "Docker containers for React and Node.js cover placeholder",
    categories: ["Docker", "DevOps", "React", "Node.js"],
    tags: ["docker", "nodejs", "react", "nginx", "deployment"],
    draft: true,
    needsReview: [
      "Check the Dockerfiles against your actual Node and Nginx versions.",
      "Add the deployment environment you use if you want a specific example.",
    ],
    relatedProjects: ["udbajar", "restro-erp"],
    relatedArticles: ["react-vs-nextjs", "building-rest-apis-with-nestjs"],
    content: [
      {
        type: "p",
        text: "A React frontend and a Node.js API have different runtime needs. React compiles to static files that can be served by any web server; Node needs a long-running process. Multi-stage Docker builds let you keep build tools out of the final image.",
      },
      { type: "h2", text: "A Node.js API image" },
      {
        type: "p",
        text: "Install dependencies in a build stage, then copy only what the runtime needs. Use a lockfile install so the image matches local installs.",
      },
      {
        type: "code",
        language: "dockerfile",
        code: `# api/Dockerfile
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:22-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/main.js"]`,
      },
      { type: "h2", text: "A React image served by Nginx" },
      {
        type: "p",
        text: "Build the static bundle, then copy it into an Nginx image. The build stage needs the toolchain; the final image does not.",
      },
      {
        type: "code",
        language: "dockerfile",
        code: `# web/Dockerfile
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine AS runner
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`,
      },
      {
        type: "p",
        text: "If the frontend uses client-side routing, configure Nginx to fall back to index.html so a refresh on /projects does not return 404.",
      },
      {
        type: "code",
        language: "nginx",
        code: `location / {
  try_files $uri $uri/ /index.html;
}`,
      },
      { type: "h2", text: "Docker Compose for local development" },
      {
        type: "p",
        text: "Compose is useful for running the API, the database, and the frontend together. Mount source code for hot reload in development and keep production settings separate.",
      },
      {
        type: "code",
        language: "yaml",
        code: `services:
  api:
    build: ./api
    environment:
      DATABASE_URL: postgres://app:secret@db:5432/app
    ports:
      - "3000:3000"
    depends_on:
      db:
        condition: service_healthy

  web:
    build: ./web
    ports:
      - "8080:80"
    depends_on:
      - api

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: app
      POSTGRES_PASSWORD: secret
      POSTGRES_DB: app
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U app"]
      interval: 5s
      timeout: 5s
      retries: 5`,
      },
      { type: "h2", text: "Keep secrets out of images" },
      {
        type: "p",
        text: "Do not bake API keys into a Dockerfile. Pass configuration at runtime with environment variables or a secret manager, and add a .dockerignore so local environment files never enter the build context.",
      },
      {
        type: "code",
        language: "text",
        code: `node_modules
dist
.env
.env.*
.git`,
      },
      { type: "h2", text: "Smaller, safer images" },
      {
        type: "ul",
        items: [
          "Use Alpine or slim base images.",
          "Run as a non-root user.",
          "Pin major versions instead of using latest.",
          "Use multi-stage builds to exclude build tools.",
          "Scan images and rebuild regularly for security updates.",
        ],
      },
      {
        type: "note",
        text: "Draft: verify the Dockerfiles against your Node/Nginx versions and the way your project builds.",
      },
    ],
  },
];

export const getPostBySlug = (slug) => posts.find((post) => post.slug === slug);
export const getPublishedPosts = () => posts;
