import React from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowUp, Github, Linkedin, Twitter } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 border-t border-white/5 bg-zinc-950/90 backdrop-blur-md relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left Info */}
        <div className="flex flex-col sm:items-start items-center text-center sm:text-left">
          <div className="text-sm font-bold text-white">
            {personalInfo.name}
          </div>
          <p className="text-xs text-cyan-400 font-mono mt-0.5">
            {personalInfo.roleAtCompany} • {personalInfo.location}
          </p>
          <p className="text-[11px] text-zinc-500 mt-2">
            © {new Date().getFullYear()} Shravan Seth. All rights reserved.
          </p>
        </div>

        {/* Center Socials */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900/60 border border-white/5 transition-colors"
            title="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-400 hover:text-cyan-400 rounded-full bg-zinc-900/60 border border-white/5 transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={personalInfo.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-400 hover:text-sky-400 rounded-full bg-zinc-900/60 border border-white/5 transition-colors"
            title="Twitter"
          >
            <Twitter size={16} />
          </a>
        </div>

        {/* Right: Back to top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-medium border border-white/5 transition-all"
        >
          <span>Back to top</span>
          <ArrowUp size={13} />
        </button>
      </div>
    </footer>
  );
}
