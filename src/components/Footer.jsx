import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="text-center p-6 py-12 bg-black footer">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">
          <Link to="/" className="transition-colors hover:text-blue-400">
            Home
          </Link>
          <Link to="/projects" className="transition-colors hover:text-blue-400">
            Projects
          </Link>
          <Link to="/blog" className="transition-colors hover:text-blue-400">
            Blog
          </Link>
          <a
            href="https://github.com/Vuwonn"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-blue-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bhuwan-chaudhary-b31073296/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-blue-400"
          >
            LinkedIn
          </a>
        </nav>

        <p className="text-sm text-slate-500">
          <span className="text-white">
            &copy; Copyright - {new Date().getFullYear()}
          </span>{" "}
          <Link
            to="/"
            className="link-underline font-bold text-white transition-colors hover:text-blue-400"
          >
            Bhuwan Chaudhary
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
