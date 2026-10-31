import { useMemo } from "react";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import ProjectCard from "../components/cards/ProjectCard";
import { projects } from "../data/projects";
import { usePageMeta } from "../hooks/usePageMeta";
import { buildProjectsIndexMeta } from "../seo/meta";

const ProjectsPage = () => {
  const meta = useMemo(() => buildProjectsIndexMeta(), []);
  usePageMeta(meta);

  return (
    <div className="bg-gradient-to-b from-[#060a12] via-[#080d1a] to-[#060a12] text-white">
      <div className="mx-auto max-w-screen-xl px-6 py-16 sm:py-20">
        <Breadcrumbs items={meta.breadcrumbs} />

        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            Work
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight">
            Project case studies
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            Case studies of the systems I have worked on, including enterprise
            ERP software, restaurant operations, room booking, and e-commerce.
            Each page separates confirmed technical details from information
            that still needs review.
          </p>
        </header>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
