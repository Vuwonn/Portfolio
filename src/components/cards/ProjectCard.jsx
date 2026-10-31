import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-700/60 bg-[#0c1427]/90 shadow-xl transition duration-300 hover:border-blue-500/50 hover:shadow-2xl"
    >
      {project.image ? (
        <img
          src={project.image}
          alt={project.imageAlt}
          width="640"
          height="360"
          loading="lazy"
          className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-48 w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-blue-950 via-[#0b1428] to-indigo-950">
          <span className="text-3xl font-bold text-blue-300">{project.title}</span>
          <span className="text-xs uppercase tracking-widest text-slate-500">
            Screenshot pending
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
          {project.status}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm text-slate-300">{project.excerpt}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-slate-700/80 bg-slate-800/70 px-2.5 py-1 text-xs text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-transform duration-200 group-hover:translate-x-1">
          Read case study <span aria-hidden="true">-&gt;</span>
        </span>
      </div>
    </Link>
  );
};

export default ProjectCard;
