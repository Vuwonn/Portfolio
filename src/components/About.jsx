import { HiOutlineDownload } from "react-icons/hi";
import { Link } from "react-router-dom";
import resume from "../assets/resume.pdf";

const About = () => {
  const stats = [
    {
      id: 1,
      value: "2+",
      label: "YEARS EXPERIENCE",
    },
    {
      id: 2,
      value: "50+",
      label: "PROJECTS DEPLOYED",
    },
    {
      id: 3,
      value: "20+",
      label: "TECHNOLOGIES MASTERED",
    },
  ];

  return (
    <div
      name="about"
      className="w-full py-20 bg-gradient-to-b from-[#0d162b] via-[#0a1020] to-[#0c1326] text-white relative overflow-hidden"
    >
      {/* Background subtle glow */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-screen-xl mx-auto px-6 flex flex-col justify-center">
        
        {/* ============ TOP 3 STATS CARDS ============ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 sm:mb-20">
          {stats.map(({ id, value, label }) => (
            <div
              key={id}
              className="rounded-2xl bg-[#0f1932]/90 border border-slate-700/60 p-6 sm:p-8 flex items-center justify-center gap-4 sm:gap-5 shadow-xl hover:border-blue-500/50 hover:bg-[#132242] transition-all duration-300 group"
            >
              <span className="text-4xl sm:text-5xl font-extrabold text-blue-500 tracking-tight group-hover:scale-105 transition-transform duration-300">
                {value}
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase leading-snug">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* ============ MAIN ABOUT ME CONTENT ============ */}
        <div className="max-w-4xl">
          <div className="flex flex-col justify-center">
            <div className="mb-4">
              <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">
                Who I Am
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-1 mb-6">
                About Me
              </h2>
            </div>

            <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                I'm a Full Stack Software Engineer and DevOps Enthusiast with a strong foundation in building scalable, resilient infrastructure and high-performance web applications. My expertise spans both frontend and backend architectures, with a keen focus on automating deployments, optimizing databases, and orchestrating cloud services.
              </p>

              <p>
                Alongside production engineering, I am an active <span className="text-white font-medium">Tech Content Creator</span> and <span className="text-white font-medium">Full Stack Tutor</span>. I create educational video content and guide aspiring developers through hands-on full-stack development, breaking down complex programming concepts into practical, production-ready skills.
              </p>
            </div>

            {/* Core Competencies badges */}
            <div className="flex flex-wrap gap-2.5 mt-8">
              {[
                "Microservices & Monoliths",
                "IaC & CI/CD Pipelines",
                "Cloud Architecture",
                "Full Stack Tutoring & Mentorship",
                "Tech Content Creation",
                "Database Optimization",
                "Automated Testing & Monitoring",
                "Agile Methodologies",
              ].map((pill, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:border-blue-500/50 transition-colors"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href={resume}
                download="Bhuwan_Chaudhary_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium flex items-center gap-2 shadow-lg shadow-blue-500/20 hover:scale-105 duration-200"
              >
                <HiOutlineDownload size={20} />
                Download CV
              </a>

              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-800/60 hover:bg-slate-700/60 text-slate-200 font-medium cursor-pointer transition duration-200"
              >
                Get In Touch
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default About;
