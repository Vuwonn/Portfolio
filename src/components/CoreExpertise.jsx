import React, { useState } from "react";

const CoreExpertise = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const pills = [
    { id: "all", label: "✨ All Capabilities", emoji: "✨" },
    { id: "software", label: "Software Development", emoji: "💻" },
    { id: "devops", label: "DevOps & CI/CD", emoji: "⚙️" },
    { id: "cloud", label: "Cloud Infrastructure", emoji: "☁️" },
    { id: "database", label: "Database Architecture", emoji: "🗄️" },
    { id: "security", label: "Security & Networking", emoji: "🔒" },
    { id: "system", label: "System Design", emoji: "🎯" },
  ];

  const skillGroups = [
    {
      id: "software",
      title: "SOFTWARE DEVELOPMENT",
      categoryMatches: ["software", "all"],
      skills: [
        "Node.js, NestJS, PHP Laravel, React, Angular",
        "TypeScript, Javascript, Python, PHP",
        "API Design, Microservices Architecture",
      ],
    },
    {
      id: "database",
      title: "DATABASES & CACHING",
      categoryMatches: ["database", "all"],
      skills: [
        "MySQL, MongoDB, PostgreSQL",
        "Redis, RabbitMQ",
      ],
    },
    {
      id: "cloud-devops",
      title: "CLOUD & DEVOPS",
      categoryMatches: ["devops", "cloud", "all"],
      skills: [
        "Microsoft Azure, AWS",
        "Docker, Docker Swarm, Jenkins, Github Actions, ArgoCD, Helm",
        "Ansible, Prometheus, Grafana, Node Exporter",
      ],
    },
    {
      id: "infra",
      title: "INFRASTRUCTURE & PRACTICES",
      categoryMatches: ["security", "system", "devops", "all"],
      skills: [
        "NGINX, Apache",
        "Advanced Computer Networking",
        "Version Control (Github, Gitlab)",
        "Code Refactoring, System Design",
      ],
    },
  ];

  return (
    <div
      name="expertise"
      className="w-full py-20 bg-gradient-to-b from-[#0c1326] via-[#090e1c] to-[#070b16] text-white relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-screen-xl mx-auto px-6 flex flex-col justify-center">
        
        {/* ============ HEADER ============ */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 tracking-tight">
            Core Expertise
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg max-w-xl mx-auto">
            Specialized skill set across modern technology stack
          </p>
        </div>

        {/* ============ PILL BADGES ============ */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto mb-12">
          {pills.map(({ id, label, emoji }) => {
            const isActive = activeFilter === id;
            return (
              <button
                key={id}
                onClick={() => setActiveFilter(id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 shadow-md ${
                  isActive
                    ? "bg-blue-600/30 border-blue-400 text-white shadow-blue-500/20 shadow-lg scale-105 border"
                    : "bg-[#141e36]/90 hover:bg-[#1a2848] text-slate-200 border border-slate-700/70 hover:border-slate-500 hover:scale-102"
                }`}
              >
                <span>{emoji}</span>
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* ============ SKILLS CARD CONTAINER ============ */}
        <div className="rounded-3xl border border-slate-700/60 bg-[#0c1427]/90 backdrop-blur-md p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {skillGroups.map((group) => {
              const isHighlighted =
                activeFilter === "all" ||
                group.categoryMatches.includes(activeFilter);

              return (
                <div
                  key={group.id}
                  className={`flex flex-col transition-all duration-300 ${
                    group.id === "infra" ? "lg:col-span-3 md:col-span-2" : ""
                  } ${
                    isHighlighted
                      ? "opacity-100"
                      : "opacity-35 hover:opacity-80"
                  }`}
                >
                  {/* Category Header with Divider Line */}
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xs sm:text-sm font-bold tracking-wider text-slate-400 uppercase">
                      {group.title}
                    </h3>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-700 via-slate-700/60 to-transparent"></div>
                  </div>

                  {/* Skills Bullet List */}
                  <ul className="space-y-3.5">
                    {group.skills.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed hover:text-white transition-colors"
                      >
                        <span className="text-blue-400 font-bold text-lg leading-none mt-1 select-none">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CoreExpertise;
