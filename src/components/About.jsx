import React from "react";
import { personalInfo } from "../data/portfolioData";
import { Code2, Terminal, CheckCircle2, FileText } from "./Icons";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-5xl mx-auto relative">
      {/* Section Tag */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-cyan-400 mb-3">
          <Terminal size={13} />
          <span>01. ABOUT ME</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          Engineering & Design Journey
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
          Crafting robust digital experiences through clean architecture, high-performance mobile development, and modern UI.
        </p>
      </div>

      {/* Main Narrative Card */}
      <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden group border border-white/5 shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/15 transition-colors" />

        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
            <Code2 size={24} />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Software Engineer & Designer
            </h3>
            <p className="text-xs font-mono text-cyan-400 mt-0.5">
              {personalInfo.roleAtCompany} • {personalInfo.location}
            </p>
          </div>
        </div>

        <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed max-w-4xl">
          <p>
            I am a Software Development Engineer with a strong foundation in Computer Science & Information Technology from the Institute of Engineering and Management (IEM).
          </p>
          <p>
            My focus centers on architecting resilient mobile client applications and high-throughput web systems. At <strong className="text-white font-semibold">Myntra</strong>, I work on enhancing the mobile application foundations that power the shopping experience for millions of concurrent users.
          </p>
          <p>
            Previously, at <strong className="text-white font-semibold">CareerCarve</strong>, I spearheaded frontend engineering for AI-powered resume tools, real-time video conferencing platforms, and scalable mobile apps using React, React Native, Node.js, and cloud services.
          </p>
          <p className="text-zinc-400 text-base">
            I believe that great software lives at the intersection of robust backend performance, seamless mobile client architecture, and thoughtful UI/UX design.
          </p>
        </div>

        <div className="pt-8 mt-8 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex flex-wrap gap-2">
            {[
              "Mobile Architecture",
              "React Native & React",
              "Full-Stack Web Systems",
              "UI/UX Design Systems"
            ].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-white/5 text-zinc-300 font-mono"
              >
                <CheckCircle2 size={13} className="text-emerald-400" />
                {tag}
              </span>
            ))}
          </div>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-100 text-zinc-950 font-semibold text-xs hover:bg-cyan-400 transition-all shrink-0"
          >
            <FileText size={14} />
            <span>Download Resume PDF</span>
          </a>
        </div>
      </div>
    </section>
  );
}
