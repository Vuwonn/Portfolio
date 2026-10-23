import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      label: "Home",
    },
    {
      id: 2,
      link: "about",
      label: "About",
    },
    {
      id: 3,
      link: "expertise",
      label: "Expertise",
    },
    {
      id: 4,
      link: "portfolio",
      label: "Portfolio",
    },
    {
      id: 5,
      link: "experience",
      label: "Experience",
    },
    {
      id: 6,
      link: "contact",
      label: "Contact",
    },
  ];

  return (
    <nav className="flex justify-between items-center w-full h-20 px-6 text-white bg-[#060a12]/85 backdrop-blur-md border-b border-slate-800/80 fixed top-0 z-50">
      <div>
        <h1 className="text-4xl sm:text-5xl font-signature ml-2">
          <Link
            to="home"
            smooth
            duration={500}
            className="cursor-pointer hover:text-blue-400 transition duration-300"
          >
            Bhuwan<span className="text-blue-500">.</span>
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex items-center gap-1">
        {links.map(({ id, link, label }) => (
          <li
            key={id}
            className="px-3.5 py-2 cursor-pointer font-medium text-slate-300 hover:text-blue-400 hover:scale-105 duration-200 transition-colors"
          >
            <Link to={link} smooth duration={500} offset={-80}>
              {label}
            </Link>
          </li>
        ))}

        <li className="ml-4">
          <Link
            to="contact"
            smooth
            duration={500}
            offset={-80}
            className="px-5 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600 border border-blue-500/50 hover:border-blue-400 text-blue-300 hover:text-white text-sm font-semibold transition duration-300 cursor-pointer"
          >
            Let's Talk
          </Link>
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
              <Link
                onClick={() => setNav(false)}
                to={link}
                smooth
                duration={500}
                offset={-80}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
