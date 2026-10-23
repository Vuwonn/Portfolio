import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { Link } from "react-scroll";
import resume from "../assets/resume.pdf";

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-[#060a12] via-[#091122] to-[#0d162b] text-white pt-24 md:pt-0 flex items-center relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/12 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/12 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between w-full h-full px-6 py-12 md:py-20 relative z-10 gap-10">
        
        {/* ------------ LEFT TEXT SECTION ------------ */}
        <div className="flex flex-col justify-center text-center md:text-left md:w-3/5">
          <div className="flex justify-center md:justify-start">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-blue-500/10 border border-blue-500/30 text-blue-300 mb-4 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Opportunities
            </span>
          </div>

          <h2 className="text-slate-400 font-medium text-lg sm:text-xl mb-1">
            Hi, I'm <span className="text-white font-semibold">Bhuwan Chaudhary</span>
          </h2>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            Full Stack Software Engineer{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 block sm:inline">
              | DevOps Enthusiast
            </span>
          </h1>

          <p className="text-slate-300 py-3 max-w-2xl text-base sm:text-lg leading-relaxed">
            Software Engineer with 2+ years of experience in software development with solid database knowledge and seasoned with IaC, CI/CD, monitoring, and automation. Proficient in designing and deploying cloud-based architectures on microservices, monoliths and monorepo with a focus on Agile methodologies and automation.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-6">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white px-6 py-3 flex items-center 
              rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 cursor-pointer shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 duration-300 font-medium"
            >
              View Portfolio
              <span className="group-hover:translate-x-1 duration-300">
                <MdOutlineKeyboardArrowRight size={22} className="ml-1" />
              </span>
            </Link>

            <Link
              to="about"
              smooth
              duration={500}
              className="text-slate-200 px-6 py-3 flex items-center rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-500 duration-300 font-medium cursor-pointer"
            >
              About Me
            </Link>

            <a
              href={resume}
              download="Bhuwan_Chaudhary_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-white px-5 py-3 flex items-center gap-2 rounded-xl border border-slate-700/80 hover:border-blue-500/60 hover:bg-blue-950/30 duration-300 font-medium"
            >
              <HiOutlineDocumentText size={20} className="text-blue-400" />
              Resume
            </a>
          </div>
        </div>

        {/* ------------ RIGHT IMAGE SECTION ------------ */}
        <div className="flex justify-center items-center md:w-2/5 relative">
          {/* Subtle Glow behind profile */}
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-blue-500/20 rounded-full blur-2xl -z-10 animate-pulse"></div>

          <div className="relative group">
            {/* Outer decorative border/card */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>

            <div className="relative bg-[#0d162b] p-2 rounded-3xl border border-slate-700/60 shadow-2xl">
              <img
                src={HeroImage}
                alt="Bhuwan Chaudhary - Full Stack Software Engineer"
                className="rounded-2xl w-60 sm:w-72 md:w-80 lg:w-96 object-cover drop-shadow-2xl hover:scale-[1.02] duration-300"
              />
            </div>

            {/* Floating pill 1: DevOps & CI/CD */}
            <div className="absolute -top-3 -left-4 sm:-left-6 bg-[#0f172a]/90 border border-slate-700/80 px-3.5 py-2 rounded-xl shadow-xl backdrop-blur-md text-xs sm:text-sm font-medium text-slate-200 flex items-center gap-2 hover:scale-105 duration-200">
              <span className="text-base">⚙️</span>
              <span>DevOps & CI/CD</span>
            </div>

            {/* Floating pill 2: Cloud Architectures */}
            <div className="absolute -bottom-3 -right-4 sm:-right-6 bg-[#0f172a]/90 border border-slate-700/80 px-3.5 py-2 rounded-xl shadow-xl backdrop-blur-md text-xs sm:text-sm font-medium text-slate-200 flex items-center gap-2 hover:scale-105 duration-200">
              <span className="text-base">☁️</span>
              <span>Cloud & Microservices</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
