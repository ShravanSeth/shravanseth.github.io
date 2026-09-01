import React from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowDown, FileText, Terminal, Layers, Smartphone, Globe, Cpu } from "./Icons";

export default function Hero() {
  const techBadges = [
    { label: "React Native", icon: Smartphone, color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5" },
    { label: "Mobile Apps (iOS & Android)", icon: Layers, color: "text-blue-400 border-blue-500/20 bg-blue-500/5" },
    { label: "React 19 & Next.js", icon: Globe, color: "text-indigo-400 border-indigo-500/20 bg-indigo-500/5" },
    { label: "Node.js & Python", icon: Terminal, color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5" },
    { label: "Architecture & Scale", icon: Cpu, color: "text-purple-400 border-purple-500/20 bg-purple-500/5" }
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] glow-cyan blur-[120px] rounded-full pointer-events-none opacity-20" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[300px] glow-purple blur-[140px] rounded-full pointer-events-none opacity-20" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-700/60 shadow-lg shadow-black/40 text-xs font-medium text-zinc-300 mb-8 backdrop-blur-md hover:border-zinc-500/60 transition-all">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-zinc-200 font-semibold">{personalInfo.roleAtCompany}</span>
          <span className="text-zinc-500 hidden sm:inline">•</span>
          <span className="text-zinc-400 hidden sm:inline">{personalInfo.location}</span>
        </div>

        {/* Main Pitch */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
          Engineering{" "}
          <span className="text-gradient-cyan">
            High-Performance Mobile
          </span>{" "}
          & Scalable Systems
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed mb-10">
          Hi, I'm <strong className="text-zinc-100 font-semibold">Shravan Seth</strong>. Software Engineer specializing in mobile architecture, React Native for iOS & Android, and full-stack cloud applications engineered for high scale.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#projects"
            className="group px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Explore Projects</span>
            <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-sm border border-zinc-700/60 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <FileText size={16} className="text-cyan-400" />
            <span>Download Resume</span>
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-zinc-950/60 hover:bg-zinc-900 text-zinc-400 hover:text-zinc-100 font-medium text-sm border border-white/5 transition-all"
          >
            <span>Let's Connect</span>
          </a>
        </div>

        {/* Interactive Tech Badges Grid */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-2xl">
          {techBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.label}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium backdrop-blur-sm transition-all hover:scale-105 ${badge.color}`}
              >
                <Icon size={14} />
                <span>{badge.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
