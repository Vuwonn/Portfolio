import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import ProjectCard from "../cards/ProjectCard";

const FeaturedProjects = () => {
  return (
    <section
      name="projects"
      className="w-full py-20 bg-gradient-to-b from-[#070b16] via-[#0a1022] to-[#080d1a] text-white relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-10">
          <div>
            <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-blue-500">
              Case Studies
            </p>
            <p className="py-4 text-slate-300 max-w-2xl">
              Detailed write-ups of the systems I build, the technical decisions
              behind them, and the parts still being verified.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
          >
            View all projects <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
