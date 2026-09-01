import React, { useState } from "react";
import { projects } from "../data/portfolioData";
import { FolderGit2, ExternalLink, Smartphone, Globe, Palette, Layers } from "./Icons";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const filterTabs = [
    { id: "all", label: "All Projects", icon: Layers },
    { id: "mobile", label: "Mobile Apps", icon: Smartphone },
    { id: "web", label: "Web Systems", icon: Globe },
    { id: "design", label: "UI/UX & Branding", icon: Palette },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-20 px-4 max-w-5xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-cyan-400 mb-3">
          <FolderGit2 size={13} />
          <span>03. PORTFOLIO & WORK</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          Featured Engineering & Design
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
          Selected mobile applications, full-stack web platforms, and design systems.
        </p>
      </div>

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
            {/* Project Image Preview with Gradient Overlay */}
            <div className="relative h-52 w-full overflow-hidden bg-zinc-900">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-[#121216]/40 to-transparent" />
              
              {/* Category Pill on image */}
              <div className="absolute top-3 left-3">
                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/10 text-cyan-400 font-semibold">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-cyan-400/90 mb-3 font-mono">
                  {project.subtitle}
                </p>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Chips */}
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

                {/* Card Action Link */}
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
    </section>
  );
}
