import HeroImage from "../assets/heroImage.png";
import { HiOutlineDownload } from "react-icons/hi";
import { Link } from "react-scroll";
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: IMAGE SECTION */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm sm:max-w-md">
              {/* Backing decorative frame with offset */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-700/40 via-indigo-600/30 to-cyan-500/20 rounded-3xl blur-sm opacity-60 group-hover:opacity-100 transition duration-500"></div>
              
              <div className="relative rounded-3xl bg-gradient-to-b from-[#1b2a4e] to-[#121c36] p-4 sm:p-5 border border-slate-700/70 shadow-2xl overflow-hidden">
                <div className="rounded-2xl bg-[#0a1020]/60 p-2 sm:p-3 flex items-center justify-center">
                  <img
                    src={HeroImage}
                    alt="Bhuwan Chaudhary - About Me"
                    className="w-full h-auto object-cover rounded-xl filter drop-shadow-xl group-hover:scale-[1.02] transition duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: TEXT SECTION */}
          <div className="lg:col-span-7 flex flex-col justify-center">
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
                I'm a Full Stack Software Engineer DevOps Enthusiast with a diverse background in creating efficient and scalable infrastructure solutions. My expertise in automating processes and optimizing performance ensures that systems run smoothly and reliably.
              </p>

              <p>
                I develop seamless user experiences and robust backend systems with expertise in both front-end and back-end technologies. Through my work, I deliver comprehensive and cohesive applications that bring creative ideas to life with innovative solutions.
              </p>
            </div>

            {/* Core Competencies badges */}
            <div className="flex flex-wrap gap-2.5 mt-8">
              {[
                "Microservices & Monoliths",
                "IaC & CI/CD Pipelines",
                "Cloud Architecture",
                "Automated Testing & Monitoring",
                "Database Optimization",
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
                to="contact"
                smooth
                duration={500}
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
