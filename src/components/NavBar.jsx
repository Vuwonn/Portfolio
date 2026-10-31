import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const SectionLink = ({ isHome, to, children, onClick }) => {
  if (isHome) {
    return (
      <ScrollLink to={to} smooth duration={500} offset={-80} onClick={onClick}>
        {children}
      </ScrollLink>
    );
  }
  return (
    <RouterLink to={`/#${to}`} onClick={onClick}>
      {children}
    </RouterLink>
  );
};

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const links = [
    { id: 1, link: "home", label: "Home" },
    { id: 2, link: "about", label: "About" },
    { id: 3, link: "expertise", label: "Expertise" },
    { id: 5, link: "experience", label: "Experience" },
    { id: 6, link: "contact", label: "Contact" },
  ];

  const closeMenu = () => setNav(false);

  return (
    <nav className="flex justify-between items-center w-full h-20 px-6 text-white bg-[#060a12]/85 backdrop-blur-md border-b border-slate-800/80 fixed top-0 z-50">
      <div>
        <h1 className="text-4xl sm:text-5xl font-signature ml-2">
          {isHome ? (
            <ScrollLink
              to="home"
              smooth
              duration={500}
              className="cursor-pointer hover:text-blue-400 transition duration-300"
            >
              Bhuwan<span className="text-blue-500">.</span>
            </ScrollLink>
          ) : (
            <RouterLink
              to="/"
              className="cursor-pointer hover:text-blue-400 transition duration-300"
            >
              Bhuwan<span className="text-blue-500">.</span>
            </RouterLink>
          )}
        </h1>
      </div>

      <ul className="hidden md:flex items-center gap-1">
        {links.map(({ id, link, label }) => (
          <li
            key={id}
            className="px-3.5 py-2 cursor-pointer font-medium text-slate-300 hover:text-blue-400 hover:scale-105 duration-200 transition-colors"
          >
            <SectionLink isHome={isHome} to={link}>{label}</SectionLink>
          </li>
        ))}
        <li className="px-3.5 py-2 font-medium text-slate-300 hover:text-blue-400 hover:scale-105 duration-200 transition-colors">
          <RouterLink to="/projects">Projects</RouterLink>
        </li>
        <li className="px-3.5 py-2 font-medium text-slate-300 hover:text-blue-400 hover:scale-105 duration-200 transition-colors">
          <RouterLink to="/blog">Blog</RouterLink>
        </li>

        <li className="ml-4">
          <SectionLink isHome={isHome} to="contact">
            <span className="inline-block px-5 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600 border border-blue-500/50 hover:border-blue-400 text-blue-300 hover:text-white text-sm font-semibold transition duration-300 cursor-pointer">
              Let's Talk
            </span>
          </SectionLink>
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
          {links.map(({ id, link, label }) => (
            <li
              key={id}
              className="cursor-pointer text-2xl font-medium hover:text-blue-400 transition duration-200"
            >
              <SectionLink isHome={isHome} to={link} onClick={closeMenu}>
                {label}
              </SectionLink>
            </li>
          ))}
          <li className="text-2xl font-medium hover:text-blue-400 transition duration-200">
            <RouterLink to="/projects" onClick={closeMenu}>
              Projects
            </RouterLink>
          </li>
          <li className="text-2xl font-medium hover:text-blue-400 transition duration-200">
            <RouterLink to="/blog" onClick={closeMenu}>
              Blog
            </RouterLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
