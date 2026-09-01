import React, { useState, useEffect } from "react";
import { getStoredData } from "../data/portfolioData";
import { FolderGit2, ExternalLink, Smartphone, Globe, Palette, Layers } from "./Icons";

export default function Projects() {
  const [projectsList, setProjectsList] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  const loadProjects = () => {
    const data = getStoredData();
    setProjectsList(data.projects || []);
  };

  useEffect(() => {
    loadProjects();
    window.addEventListener("portfolio_data_updated", loadProjects);
    return () => window.removeEventListener("portfolio_data_updated", loadProjects);
  }, []);

  const filterTabs = [
    { id: "all", label: "All Projects", icon: Layers },
    { id: "mobile", label: "Mobile Apps", icon: Smartphone },
    { id: "web", label: "Web Systems", icon: Globe },
    { id: "design", label: "UI/UX & Branding", icon: Palette },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projectsList
      : projectsList.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-24 px-4 max-w-5xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-cyan-400 mb-3">
          <FolderGit2 size={13} />
          <span>03. FEATURED WORK</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          Projects & Portfolio
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
          Showcasing mobile applications, web platforms, and design systems.
        </p>
      </div>

      {projectsList.length > 0 ? (
        <>
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {filterTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? "bg-cyan-500 text-zinc-950 font-semibold shadow-lg shadow-cyan-500/25 scale-105"
                      : "bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/5"
                  }`}
                >
                  <Icon size={14} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
              >
                {project.image && (
                  <div className="relative h-52 w-full overflow-hidden bg-zinc-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-[#121216]/40 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/10 text-cyan-400 font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-xs font-medium text-cyan-400/90 mb-3 font-mono">
                        {project.subtitle}
                      </p>
                    )}
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {project.tech && project.tech.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] px-2.5 py-0.5 rounded bg-zinc-950/70 border border-white/5 text-zinc-300 font-mono"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-zinc-800 hover:bg-cyan-500 hover:text-zinc-950 px-4 py-2 rounded-lg border border-white/5 transition-all duration-200"
                      >
                        <span>{project.linkText || "View Project"}</span>
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* Empty State */
        <div className="glass-card rounded-3xl p-10 sm:p-14 text-center max-w-2xl mx-auto border border-white/5 flex flex-col items-center">
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
            <FolderGit2 size={26} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            Projects In Curation
          </h3>
          <p className="text-zinc-400 text-sm max-w-md mb-6 leading-relaxed">
            Engineering case studies and mobile architecture breakdowns are currently being updated.
          </p>
          <a
            href="https://github.com/ShravanSeth"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-800 hover:bg-cyan-500 hover:text-zinc-950 text-white font-semibold text-xs border border-white/10 transition-all shadow-md active:scale-95"
          >
            <span>Explore Code on GitHub</span>
            <ExternalLink size={13} />
          </a>
        </div>
      )}
    </section>
  );
}
