import React from "react";
import { skillCategories } from "../data/portfolioData";
import { Cpu, Smartphone, Globe, Server, Wrench } from "./Icons";

export default function Skills() {
  const categoryIcons = [
    Smartphone,
    Globe,
    Server,
    Wrench
  ];

  return (
    <section id="skills" className="py-20 px-4 max-w-5xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-cyan-400 mb-3">
          <Cpu size={13} />
          <span>04. TECHNICAL ARSENAL</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          Skills, Tools & Technologies
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
          Core competencies developed across mobile engineering, high-scale architectures, and design systems.
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => {
          const Icon = categoryIcons[index % categoryIcons.length];
          return (
            <div
              key={category.title}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-white/5 relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Icon size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900/60 border border-white/5 hover:border-zinc-700 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-medium text-zinc-200">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-800/80 text-cyan-400 font-semibold border border-white/5">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
