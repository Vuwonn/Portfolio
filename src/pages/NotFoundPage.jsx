import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#060a12] via-[#080d1a] to-[#060a12] text-white">
      <div className="mx-auto flex max-w-2xl flex-col items-start px-6 py-24 sm:py-32">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
          404
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight">
          Page not found
        </h1>
        <p className="mt-5 text-slate-300 leading-relaxed">
          The page you are looking for does not exist or has moved.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/"
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:scale-105"
          >
            Back to home
          </Link>
          <Link
            to="/projects"
            className="rounded-xl border border-slate-700 bg-slate-800/70 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500"
          >
            View projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
