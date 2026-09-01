import React from "react";
import { stats } from "../data/portfolioData";
import { Code2, MapPin, Sparkles, Terminal, Activity, CheckCircle2 } from "./Icons";

export default function AboutBento() {
  return (
    <section id="about" className="py-20 px-4 max-w-5xl mx-auto relative">
      {/* Section Tag */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-cyan-400 mb-3">
          <Terminal size={13} />
          <span>01. ABOUT & IMPACT</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          Engineering Philosophy & Journey
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
          A blend of software architecture, high-performance mobile engineering, and polished design.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* Main Narrative Card (2 cols on MD) */}
        <div className="md:col-span-2 glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/15 transition-colors" />
          
          <div>
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
              <Code2 size={20} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Building for Scale, Speed, and Stability
            </h3>
            <div className="space-y-3.5 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a Software Development Engineer with a strong foundation in Computer Science & Information Technology from the Institute of Engineering and Management (IEM), Kolkata.
              </p>
              <p>
                My focus centers on architecting resilient mobile client applications and high-throughput web systems. At <strong className="text-white font-semibold">Myntra</strong>, I work within the Apps Core team enhancing the native and React Native foundations that power the shopping journey for millions of concurrent users.
              </p>
              <p className="text-zinc-400 text-sm">
                Previously, at <strong className="text-zinc-200">CareerCarve</strong>, I led frontend engineering for AI resume generation tools and integrated real-time video communications from the ground up.
              </p>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/5 flex flex-wrap gap-2">
            {["High Scale Mobile Architecture", "Native Bridge Optimization", "Full-Stack Web Platforms", "UI/UX Precision"].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-zinc-900/80 border border-white/5 text-zinc-300 font-mono"
              >
                <CheckCircle2 size={12} className="text-emerald-400" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Card (1 col) */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
          <div>
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5">
              <Activity size={20} />
            </div>
            <h3 className="text-lg font-bold text-white mb-6">
              Impact at a Glance
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-zinc-900/50 border border-white/5">
                  <div className="text-2xl sm:text-3xl font-extrabold text-gradient-cyan tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-400 mt-1 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 3: Current Technical Focus (1 col) */}
        <div className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
              <Sparkles size={20} />
            </div>
            <h4 className="text-base font-bold text-white mb-2">Current Technical Focus</h4>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
              Diving deep into React Native architecture, Native C++ / TurboModules, bundle size reduction, and React 19 concurrent features.
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["React Native", "TurboModules", "iOS/Android", "React 19"].map((pill) => (
              <span
                key={pill}
                className="text-[11px] px-2 py-0.5 rounded bg-zinc-800/60 border border-white/5 text-zinc-300 font-mono"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Card 4: Location & Work Hub (2 cols on MD) */}
        <div className="md:col-span-2 glass-card rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <MapPin size={22} />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Based in India</h4>
              <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">
                Working across Bengaluru & Kolkata (IST / UTC +5:30)
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Active Engineering & Open Source</span>
          </div>
        </div>
      </div>
    </section>
  );
}
