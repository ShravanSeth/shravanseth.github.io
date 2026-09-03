import React, { useState, useEffect } from "react";
import { personalInfo, getStoredData } from "../data/portfolioData";
import { Github, Linkedin, Twitter, FileText, Menu, X, ArrowUpRight } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [hasProjects, setHasProjects] = useState(false);
  const [info, setInfo] = useState(() => getStoredData().personalInfo || personalInfo);

  useEffect(() => {
    const checkData = () => {
      const data = getStoredData();
      setHasProjects(data.projects && data.projects.length > 0);
      setInfo(data.personalInfo || personalInfo);
    };
    checkData();
    window.addEventListener("portfolio_data_updated", checkData);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "experience", "projects", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("portfolio_data_updated", checkData);
    };
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    ...(hasProjects ? [{ name: "Projects", href: "#projects" }] : []),
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-6 transition-all duration-300">
      <nav
        className={`w-full max-w-5xl rounded-full transition-all duration-300 px-4 md:px-6 py-2.5 flex items-center justify-between ${
          scrolled
            ? "glass-panel bg-zinc-900/80 shadow-2xl shadow-black/50 border border-white/10"
            : "bg-zinc-950/40 backdrop-blur-md border border-white/5"
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#top"
          className="flex items-center gap-2 group text-white font-semibold text-base tracking-tight"
        >
          <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center text-zinc-950 font-bold text-sm shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            SS
          </span>
          <span className="hidden sm:inline-block group-hover:text-cyan-400 transition-colors">
            Shravan Seth
          </span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1 bg-zinc-900/60 p-1 rounded-full border border-white/5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-white/10 text-white shadow-sm"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Right CTA / Socials */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"
            title="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-400 hover:text-cyan-400 hover:bg-white/5 rounded-full transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={info.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-full bg-zinc-100 text-zinc-900 hover:bg-cyan-400 hover:text-zinc-950 transition-all duration-200 shadow-sm"
          >
            <FileText size={13} />
            <span>Resume</span>
            <ArrowUpRight size={12} className="opacity-70" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 rounded-2xl glass-panel bg-zinc-950/95 border border-white/10 p-5 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-white rounded-lg"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-cyan-400 rounded-lg"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-sky-400 rounded-lg"
              >
                <Twitter size={18} />
              </a>
            </div>
            <a
              href={info.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-400 text-zinc-950 hover:bg-cyan-300"
            >
              <FileText size={14} />
              <span>Resume PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
