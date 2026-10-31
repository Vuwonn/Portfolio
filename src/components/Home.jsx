import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { Link } from "react-router-dom";
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

          <p className="text-slate-400 font-medium text-lg sm:text-xl mb-1">
            Hi, I'm
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-2 tracking-tight">
            Bhuwan Chaudhary - Full Stack Developer
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 mb-3">
            Full Stack Software Engineer{" "}
            <span className="text-slate-500 font-normal">|</span> DevOps Enthusiast
          </h2>

          <p className="text-slate-300 py-3 max-w-xl text-base sm:text-lg leading-relaxed">
            Building scalable systems, high-performance web applications, and modern cloud architectures with clean code and robust engineering.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-6">
            <Link
              to="/experience"
              className="group text-white px-6 py-3 flex items-center 
              rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 cursor-pointer shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 duration-300 font-medium"
            >
              View Experience
              <span className="group-hover:translate-x-1 duration-300">
                <MdOutlineKeyboardArrowRight size={22} className="ml-1" />
              </span>
            </Link>

            <Link
              to="/about"
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
            {/* Outer decorative gradient ring */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>

            <div className="relative bg-[#0d162b] p-2 rounded-full border border-slate-700/60 shadow-2xl">
              <img
                src={HeroImage}
                alt="Bhuwan Chaudhary - Full Stack Developer portrait"
                width="384"
                height="384"
                loading="eager"
                className="rounded-full w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover object-top drop-shadow-2xl group-hover:scale-[1.02] duration-300"
              />
            </div>
          </div>
        </div>

      </div>
      </div>
  );
};

export default Home;
