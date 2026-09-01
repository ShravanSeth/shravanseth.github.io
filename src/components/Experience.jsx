import React from "react";
import { experiences } from "../data/portfolioData";
import { Briefcase, Calendar, MapPin, ExternalLink, GraduationCap } from "./Icons";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 max-w-5xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-cyan-400 mb-3">
          <Briefcase size={13} />
          <span>02. CAREER & ROLES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          Work Experience & Education
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
          Track record of shipping production mobile applications, web platforms, and engineering systems.
        </p>
      </div>

      {/* Experience List */}
      <div className="space-y-6">
        {experiences.map((item) => {
          const isEducation = item.type === "Education";
          return (
            <div
              key={item.id}
              className={`glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-all ${
                item.current
                  ? "border-cyan-500/30 bg-zinc-900/80 shadow-lg shadow-cyan-950/20"
                  : "border-white/5 bg-zinc-900/40"
              }`}
            >
              {item.current && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-l from-cyan-500 to-blue-600 text-zinc-950 font-bold text-[10px] tracking-wider uppercase px-3 py-1 rounded-bl-xl shadow-md">
                    Current Position
                  </div>
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-3.5">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                      item.current
                        ? "bg-cyan-500/10 border border-cyan-500/30 text-cyan-400"
                        : isEducation
                        ? "bg-amber-500/10 border border-amber-500/20 text-amber-400"
                        : "bg-zinc-800 border border-zinc-700 text-zinc-300"
                    }`}
                  >
                    {isEducation ? <GraduationCap size={22} /> : <Briefcase size={20} />}
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2 flex-wrap">
                      <span>{item.role}</span>
                      <span className="text-zinc-500 text-sm font-normal">@</span>
                      <span className="text-cyan-400 font-semibold">{item.company}</span>
                    </h3>
                    {item.team && (
                      <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">
                        {item.team}
                      </p>
                    )}
                  </div>
                </div>

                {/* Period & Location Pills */}
                <div className="flex flex-wrap md:flex-col md:items-end gap-2 text-xs font-mono text-zinc-400">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-950/70 border border-white/5">
                    <Calendar size={12} className="text-zinc-500" />
                    <span>{item.period}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-950/70 border border-white/5">
                    <MapPin size={12} className="text-zinc-500" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl pl-0 sm:pl-14">
                {item.description}
              </p>

              {/* Footer with Tech Stack & Link */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/5 pl-0 sm:pl-14">
                <div className="flex flex-wrap gap-1.5">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-zinc-950/80 border border-white/5 text-zinc-300 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors shrink-0"
                  >
                    <span>{item.linkText || "View Project"}</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
