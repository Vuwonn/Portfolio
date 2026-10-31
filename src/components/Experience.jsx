import React, { useState } from "react";
import { Link } from "react-router-dom";
import { experienceData } from "../data/experiencedata";

const Experience = () => {
  // Hub IT Group (id: 1) expanded by default
  const [expandedProjects, setExpandedProjects] = useState({
    1: true,
  });

  const toggleProjects = (id) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      name="experience"
      className="w-full py-20 lg:py-28 bg-gradient-to-b from-[#080d1a] via-[#0b1326] to-[#060a14] text-white relative overflow-hidden"
    >
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ============ HEADER SECTION ============ */}
        <div className="relative flex flex-col md:flex-row items-center justify-center mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight text-center">
            Experience
          </h2>

          <div className="mt-5 md:mt-0 md:absolute md:right-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-blue-500/50 bg-blue-950/20 hover:bg-blue-600/25 hover:border-blue-400 text-blue-400 hover:text-white font-medium text-sm transition-all duration-300 shadow-lg shadow-blue-950/20 cursor-pointer group"
            >
              <span>Get in Touch</span>
              <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </Link>
          </div>
        </div>

        {/* ============ TIMELINE & EXPERIENCE CARDS ============ */}
        <div className="relative pl-6 sm:pl-10 md:pl-12">
          
          {/* Continuous Vertical Timeline Rail */}
          <div className="absolute left-[11px] sm:left-[19px] md:left-[23px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-blue-500/60 via-blue-500/30 to-blue-500/10"></div>

          <div className="space-y-12 sm:space-y-16">
            {experienceData.map((exp) => {
              const hasProjects = exp.projects && exp.projects.length > 0;
              const isProjectsOpen = !!expandedProjects[exp.id];

              return (
                <div key={exp.id} className="relative group">
                  
                  {/* Timeline Node & Connector */}
                  <div className="absolute -left-[30px] sm:-left-[38px] md:-left-[42px] top-7 flex items-center">
                    {/* Outer Ring & Inner Dot */}
                    <div className="relative flex items-center justify-center w-5 h-5 rounded-full bg-[#080d1a] border-2 border-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.6)] group-hover:scale-110 group-hover:border-blue-300 transition-all duration-300">
                      <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    </div>

                    {/* Horizontal Connector to Card */}
                    <div className="w-4 sm:w-6 h-[2px] bg-gradient-to-r from-blue-500/50 to-blue-500/20"></div>
                  </div>

                  {/* Main Card */}
                  <div className="rounded-2xl sm:rounded-3xl bg-[#0c1427]/85 backdrop-blur-md border border-slate-700/60 p-6 sm:p-8 lg:p-10 shadow-2xl hover:border-blue-500/40 hover:bg-[#0e182e]/90 transition-all duration-300">
                    
                    {/* Period Badge */}
                    <div className="inline-block px-3.5 py-1 rounded-full bg-blue-950/70 border border-blue-800/50 text-blue-400 text-xs font-semibold tracking-wider uppercase">
                      {exp.period}
                    </div>

                    {/* Role Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mt-4 tracking-tight">
                      {exp.role}
                    </h3>

                    {/* Company & Location */}
                    <p className="text-slate-400 text-sm sm:text-base mt-1.5 mb-6 font-normal">
                      {exp.company}
                      {exp.location ? `, ${exp.location}` : ""}
                    </p>

                    {/* Responsibilities & Achievements */}
                    <ul className="space-y-3 sm:space-y-3.5 text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3 group/item">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></span>
                          <span className="text-slate-300 hover:text-slate-100 transition-colors">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* ============ PROJECTS TOGGLE & LIST ============ */}
                    {hasProjects && (
                      <div className="mt-6 pt-2">
                        {/* Toggle Button */}
                        <button
                          type="button"
                          onClick={() => toggleProjects(exp.id)}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-950/50 hover:bg-blue-900/50 border border-blue-500/40 text-blue-400 hover:text-white text-xs sm:text-sm font-medium transition duration-200 shadow-sm cursor-pointer"
                        >
                          <span>{isProjectsOpen ? "Hide Projects" : "View Projects"}</span>
                          <span className="text-xs">
                            {isProjectsOpen ? "▲" : "▼"}
                          </span>
                        </button>

                        {/* Projects Subcards List */}
                        {isProjectsOpen && (
                          <div className="mt-4 space-y-3.5 animate-fadeIn">
                            {exp.projects.map((proj, pIdx) => (
                              <div
                                key={pIdx}
                                className="rounded-xl bg-[#0b1328]/95 border border-slate-700/60 hover:border-blue-500/50 hover:bg-[#0f1b38] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 transition-all duration-200 group/proj shadow-md"
                              >
                                <div className="space-y-1">
                                  <h4 className="text-white font-semibold text-sm sm:text-base tracking-tight group-hover/proj:text-blue-300 transition-colors">
                                    {proj.title}
                                  </h4>
                                  <p className="text-slate-400 font-mono text-xs sm:text-[13px] tracking-wide">
                                    {proj.technologies}
                                  </p>
                                </div>

                                {proj.link && (
                                  <a
                                    href={proj.link}
                                    target={proj.link !== "#" ? "_blank" : undefined}
                                    rel="noreferrer"
                                    className="text-blue-400 hover:text-blue-300 font-medium text-xs sm:text-sm flex items-center gap-1.5 transition-colors whitespace-nowrap self-end sm:self-center"
                                  >
                                    <span>View</span>
                                    <span className="transition-transform duration-200 group-hover/proj:translate-x-1">
                                      →
                                    </span>
                                  </a>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
