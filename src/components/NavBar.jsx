import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link as RouterLink } from "react-router-dom";

const links = [
  { id: 1, to: "/", label: "Home", end: true },
  { id: 2, to: "/about", label: "About" },
  { id: 3, to: "/expertise", label: "Expertise" },
  { id: 5, to: "/experience", label: "Experience" },
  { id: 6, to: "/contact", label: "Contact" },
  { id: 7, to: "/projects", label: "Projects" },
  { id: 8, to: "/blog", label: "Blog" },
];

const desktopLinkClass = ({ isActive }) =>
  `inline-block font-medium transition-colors duration-200 ${
    isActive ? "text-blue-400" : "text-slate-300 hover:text-blue-400"
  }`;

const mobileLinkClass = ({ isActive }) =>
  `text-2xl font-medium transition-colors duration-200 ${
    isActive ? "text-blue-400" : "text-slate-300 hover:text-blue-400"
  }`;

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const closeMenu = () => setNav(false);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <nav className="flex justify-between items-center w-full h-20 px-6 text-white bg-[#060a12]/85 backdrop-blur-md border-b border-slate-800/80 fixed top-0 z-50">
      <div>
        <h1 className="text-4xl sm:text-5xl font-signature ml-2">
          <RouterLink
            to="/"
            onClick={scrollToTop}
            className="cursor-pointer hover:text-blue-400 transition duration-300"
          >
            Bhuwan<span className="text-blue-500">.</span>
          </RouterLink>
        </h1>
      </div>

      <ul className="hidden md:flex items-center gap-1">
        {links.map(({ id, to, label, end }) => (
          <li
            key={id}
            className="px-3.5 py-2 font-medium hover:scale-105 duration-200 transition-transform"
          >
            <NavLink to={to} end={end} className={desktopLinkClass}>
              {label}
            </NavLink>
          </li>
        ))}

        <li className="ml-4">
          <RouterLink
            to="/contact"
            className="inline-block px-5 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600 border border-blue-500/50 hover:border-blue-400 text-blue-300 hover:text-white text-sm font-semibold transition duration-300"
          >
            Let's Talk
          </RouterLink>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-2 z-50 text-slate-400 hover:text-white md:hidden"
      >
        {nav ? <FaTimes size={26} /> : <FaBars size={26} />}
      </div>

      {/* Mobile Dropdown */}
      {nav && (
        <ul className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-[#070b14]/98 backdrop-blur-xl text-slate-300 z-40 space-y-6">
          {links.map(({ id, to, label, end }) => (
            <li key={id}>
              <NavLink
                to={to}
                end={end}
                onClick={closeMenu}
                className={mobileLinkClass}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <RouterLink
              to="/contact"
              onClick={closeMenu}
              className="inline-block px-6 py-3 rounded-xl bg-blue-600/20 hover:bg-blue-600 border border-blue-500/50 hover:border-blue-400 text-blue-300 hover:text-white text-lg font-semibold transition duration-300"
            >
              Let's Talk
            </RouterLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
