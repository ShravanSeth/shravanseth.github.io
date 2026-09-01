import React from "react";
import { getStoredData } from "../data/portfolioData";
import { Briefcase, Calendar, MapPin, ExternalLink, GraduationCap } from "./Icons";

export default function ExperienceTimeline() {
  const data = getStoredData();
  const experiences = data.experiences || [];

  return (
    <section id="experience" className="py-24 px-4 max-w-5xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-20">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-cyan-400 mb-3">
          <Briefcase size={13} />
          <span>02. TIMELINE & ROLES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          Work Experience & Education
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
          A timeline of engineering mobile platforms, full-stack systems, and academic foundation.
        </p>
      </div>

      {/* Vertical Animated Timeline Container */}
      <div className="relative">
        {/* Glowing Center Line (Desktop) / Left Line (Mobile) */}
        <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-zinc-800 shadow-[0_0_12px_rgba(56,189,248,0.5)]" />

        <div className="space-y-12 md:space-y-16">
          {experiences.map((item, index) => {
            const isEducation = item.type === "Education";
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id || index}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                } gap-6 md:gap-12 pl-10 md:pl-0 group`}
              >
                {/* Center Node Dot / Icon */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-4 md:top-1/2 md:-translate-y-1/2 z-20">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 group-hover:scale-110 shadow-lg ${
                      item.current
                        ? "bg-cyan-500 border-white text-zinc-950 shadow-cyan-500/50"
                        : isEducation
                        ? "bg-zinc-900 border-amber-400/80 text-amber-400 shadow-amber-500/20"
                        : "bg-zinc-900 border-cyan-500/60 text-cyan-400 shadow-cyan-500/20"
                    }`}
                  >
                    {isEducation ? <GraduationCap size={18} /> : <Briefcase size={16} />}
                  </div>
                </div>

                {/* Timeline Card */}
                <div className="w-full md:w-[calc(50%-2.5rem)]">
                  <div
                    className={`glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden transition-all duration-300 group-hover:border-cyan-500/40 group-hover:shadow-2xl group-hover:shadow-cyan-950/30 ${
                      item.current
                        ? "border-cyan-500/40 bg-zinc-900/90 shadow-xl shadow-cyan-950/20"
                        : "border-white/5 bg-zinc-900/40"
                    }`}
                  >
                    {/* Current Position Tag */}
                    {item.current && (
                      <div className="absolute top-0 right-0">
                        <div className="bg-gradient-to-l from-cyan-500 to-blue-600 text-zinc-950 font-bold text-[10px] tracking-wider uppercase px-3 py-1 rounded-bl-xl shadow-md">
                          Current Role
                        </div>
                      </div>
                    )}

                    {/* Header */}
                    <div className="mb-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                        <Calendar size={12} />
                        <span>{item.period}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-zinc-300 font-medium mt-0.5">
                        <span className="text-white font-semibold">{item.company}</span>
                        {item.location && (
                          <>
                            <span className="text-zinc-500">•</span>
                            <span className="text-zinc-400 text-xs flex items-center gap-1">
                              <MapPin size={11} />
                              {item.location}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Tech Badges & Link */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/5">
                      <div className="flex flex-wrap gap-1.5">
                        {item.tech &&
                          item.tech.map((t) => (
                            <span
                              key={t}
                              className="text-[11px] px-2.5 py-0.5 rounded bg-zinc-950/80 border border-white/5 text-zinc-300 font-mono"
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
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <span>{item.linkText || "View Link"}</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating side on desktop */}
                <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
