import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import DraftNotice from "../components/ui/DraftNotice";
import ProjectCard from "../components/cards/ProjectCard";
import { getProjectBySlug, projects } from "../data/projects";
import { getPostBySlug } from "../data/blog";
import { usePageMeta } from "../hooks/usePageMeta";
import { buildProjectMeta, HOME_META } from "../seo/meta";
import NotFoundPage from "./NotFoundPage";

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const meta = useMemo(
    () => (project ? buildProjectMeta(project) : HOME_META),
    [project]
  );
  usePageMeta(meta);

  if (!project) return <NotFoundPage />;

  const relatedProjects = projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 2);
  const relatedPosts = (project.relatedArticles || [])
    .map((postSlug) => getPostBySlug(postSlug))
    .filter(Boolean);

  return (
    <div className="bg-gradient-to-b from-[#060a12] via-[#080d1a] to-[#060a12] text-white">
      <article className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <Breadcrumbs items={meta.breadcrumbs} />

        <header>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            {project.status}
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight">
            {project.title}
          </h1>
          <p className="mt-4 text-lg sm:text-xl font-medium text-slate-200">
            {project.tagline}
          </p>
          <p className="mt-4 max-w-3xl text-base sm:text-lg text-slate-300 leading-relaxed">
            {project.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:scale-105"
              >
                Live demo
              </a>
            )}
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-slate-700 bg-slate-800/70 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-slate-500"
              >
                Repository
              </a>
            )}
            <Link
              to="/projects"
              className="text-sm font-medium text-blue-400 transition hover:text-blue-300"
            >
              All projects
            </Link>
          </div>
        </header>

        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-700/60">
          {project.image ? (
            <img
              src={project.image}
              alt={project.imageAlt}
              width={project.imageWidth || 1200}
              height={project.imageHeight || 630}
              loading="lazy"
              className="h-auto w-full object-cover"
            />
          ) : (
            <div className="flex h-56 sm:h-72 w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-blue-950 via-[#0b1428] to-indigo-950">
              <span className="text-2xl font-bold text-blue-300">
                {project.title}
              </span>
              <span className="text-xs uppercase tracking-widest text-slate-500">
                Screenshot pending
              </span>
            </div>
          )}
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Overview
              </h2>
              <div className="mt-4 space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                {project.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Key features
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-slate-700/60 bg-[#0c1427]/90 p-5"
                  >
                    <h3 className="text-base font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                My contributions
              </h2>
              <ul className="mt-4 space-y-3 text-base text-slate-300 leading-relaxed">
                {project.contributions.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Technical challenges
              </h2>
              <ul className="mt-4 space-y-3 text-base text-slate-300 leading-relaxed">
                {project.challenges.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <DraftNotice
              items={project.needsReview}
              title="Details pending review"
            />
          </div>

          <aside className="space-y-8">
            <div className="rounded-2xl border border-slate-700/60 bg-[#0c1427]/90 p-5">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Technology
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-lg border border-slate-700/80 bg-slate-800/70 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-700/60 bg-[#0c1427]/90 p-5">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Role
              </h2>
              <p className="mt-3 text-sm text-slate-200">{project.role}</p>
            </div>

            {relatedPosts.length > 0 && (
              <div className="rounded-2xl border border-slate-700/60 bg-[#0c1427]/90 p-5">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Related articles
                </h2>
                <ul className="mt-3 space-y-3">
                  {relatedPosts.map((post) => (
                    <li key={post.slug}>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-sm text-slate-200 transition hover:text-blue-400"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>

        <section className="mt-16 border-t border-slate-800 pt-10">
          <h2 className="text-2xl font-bold tracking-tight">More projects</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {relatedProjects.map((item) => (
              <ProjectCard key={item.slug} project={item} />
            ))}
          </div>
        </section>
      </article>
    </div>
  );
};

export default ProjectDetailPage;
