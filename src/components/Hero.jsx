import React, { useState, useEffect, useRef } from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowDown, FileText, Smartphone, Globe, Layers, Terminal, Cpu } from "./Icons";
import spriteImg from "../assets/images/sprite.png";
import finalImg from "../assets/images/final2.png";
import "./Hero.css";

export default function Hero() {
  const containerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(true);
  const [designerWidth, setDesignerWidth] = useState(420);
  const [coderWidth, setCoderWidth] = useState(420);
  const [designerLeft, setDesignerLeft] = useState(100);
  const [coderRight, setCoderRight] = useState(100);
  const [designerOpacity, setDesignerOpacity] = useState(1);
  const [coderOpacity, setCoderOpacity] = useState(1);
  const [activeSide, setActiveSide] = useState("center"); // 'designer', 'coder', 'center'

  const mousePosRef = useRef({ targetX: 520, currentX: 520 });
  const animFrameRef = useRef(null);

  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  // Smooth 60-120fps physics loop using requestAnimationFrame and lerp
  useEffect(() => {
    if (!isDesktop) return;

    let isRunning = true;

    const updatePhysics = () => {
      if (!isRunning) return;

      const { targetX, currentX } = mousePosRef.current;
      const newX = currentX + (targetX - currentX) * 0.08;
      mousePosRef.current.currentX = newX;

      // Calculate styles based on smoothed mouse position (0 to 1040)
      // Center is 520
      const diff = 520 - newX;
      
      const newDesignerW = Math.max(160, Math.min(680, 420 + diff * 0.5));
      const newCoderW = Math.max(160, Math.min(680, 420 - diff * 0.5));
      const newDesignerL = 100 + diff * 0.1;
      const newCoderR = 100 - diff * 0.1;
      const newDesignerOp = Math.max(0.2, Math.min(1, (1040 - newX) / 520));
      const newCoderOp = Math.max(0.2, Math.min(1, newX / 520));

      setDesignerWidth(newDesignerW);
      setCoderWidth(newCoderW);
      setDesignerLeft(newDesignerL);
      setCoderRight(newCoderR);
      setDesignerOpacity(newDesignerOp);
      setCoderOpacity(newCoderOp);

      if (diff > 80) {
        setActiveSide("designer");
      } else if (diff < -80) {
        setActiveSide("coder");
      } else {
        setActiveSide("center");
      }

      animFrameRef.current = requestAnimationFrame(updatePhysics);
    };

    animFrameRef.current = requestAnimationFrame(updatePhysics);

    return () => {
      isRunning = false;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isDesktop]);

  const handleMouseMove = (e) => {
    if (!containerRef.current || !isDesktop) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    // Map mouse to 0..1040
    const scaledX = Math.max(0, Math.min(1040, (relX / rect.width) * 1040));
    mousePosRef.current.targetX = scaledX;
  };

  const handleMouseLeave = () => {
    if (!isDesktop) return;
    mousePosRef.current.targetX = 520;
    setActiveSide("center");
  };

  const techBadges = [
    { label: "React Native", icon: Smartphone, color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5" },
    { label: "iOS & Android", icon: Layers, color: "text-blue-400 border-blue-500/20 bg-blue-500/5" },
    { label: "React 19 & Next.js", icon: Globe, color: "text-indigo-400 border-indigo-500/20 bg-indigo-500/5" },
    { label: "Node.js & Python", icon: Terminal, color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5" },
    { label: "Architecture & Scale", icon: Cpu, color: "text-purple-400 border-purple-500/20 bg-purple-500/5" }
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Dynamic Ambient Glows */}
      <div
        className={`absolute top-1/3 left-1/4 w-[450px] h-[350px] glow-purple blur-[140px] rounded-full pointer-events-none transition-opacity duration-700 ${
          activeSide === "designer" ? "opacity-35 scale-110" : "opacity-15"
        }`}
      />
      <div
        className={`absolute top-1/3 right-1/4 w-[450px] h-[350px] glow-cyan blur-[140px] rounded-full pointer-events-none transition-opacity duration-700 ${
          activeSide === "coder" ? "opacity-35 scale-110" : "opacity-15"
        }`}
      />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-700/60 shadow-lg shadow-black/40 text-xs font-medium text-zinc-300 mb-6 backdrop-blur-md hover:border-zinc-500/60 transition-all">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-zinc-200 font-semibold">{personalInfo.roleAtCompany}</span>
          <span className="text-zinc-500 hidden sm:inline">•</span>
          <span className="text-zinc-400 hidden sm:inline">{personalInfo.location}</span>
        </div>

        {/* Interactive Split Face Widget */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="split-face-container relative my-2 overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-zinc-900/40 via-zinc-950/80 to-[#09090b] shadow-2xl backdrop-blur-sm"
        >
          {/* Desktop Interactive Sprites */}
          {isDesktop ? (
            <>
              {/* Designer Sprite Layer */}
              <div
                className="face-sprite-designer"
                style={{
                  backgroundImage: `url(${spriteImg})`,
                  width: `${designerWidth}px`,
                  left: `${designerLeft}px`,
                }}
              />

              {/* Coder Sprite Layer */}
              <div
                className="face-sprite-coder"
                style={{
                  backgroundImage: `url(${spriteImg})`,
                  width: `${coderWidth}px`,
                  right: `${coderRight}px`,
                }}
              />

              {/* Designer Background Layer */}
              <div
                className="face-bg-designer"
                style={{
                  backgroundImage: `url(${spriteImg})`,
                  width: `${designerWidth}px`,
                  left: `${designerLeft}px`,
                  opacity: designerOpacity,
                }}
              />

              {/* Coder Background Layer */}
              <div
                className="face-bg-coder"
                style={{
                  backgroundImage: `url(${spriteImg})`,
                  width: `${coderWidth}px`,
                  right: `${coderRight}px`,
                  opacity: coderOpacity,
                }}
              />
            </>
          ) : (
            /* Mobile & Tablet Static Face Illustration */
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <img
                src={finalImg}
                alt="Shravan Seth - Designer & Coder"
                className="max-h-full max-w-full object-contain opacity-90"
              />
            </div>
          )}

          {/* Left Interactive Zone: Designer */}
          <a
            href="#projects"
            className="side-designer group"
            style={{ opacity: isDesktop ? designerOpacity : 1 }}
          >
            <div className="max-w-[280px] sm:max-w-xs transition-transform duration-300 group-hover:translate-x-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-purple-400 font-semibold block mb-1">
                UI / UX Architect
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-none group-hover:text-purple-300 transition-colors">
                Designer
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed hidden sm:block bg-zinc-950/60 p-2.5 rounded-xl border border-white/5 backdrop-blur-md">
                Crafting intuitive visual design systems, brand identities, and high-fidelity user experiences.
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 group-hover:underline">
                <span>View Design Work</span>
                <span className="text-sm">→</span>
              </div>
            </div>
          </a>

          {/* Right Interactive Zone: Coder */}
          <a
            href="#experience"
            className="side-coder group"
            style={{ opacity: isDesktop ? coderOpacity : 1 }}
          >
            <div className="max-w-[280px] sm:max-w-xs transition-transform duration-300 group-hover:-translate-x-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold block mb-1">
                Mobile & Full-Stack SDE
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-none group-hover:text-cyan-300 transition-colors">
                &lt;Coder/&gt;
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed hidden sm:block bg-zinc-950/60 p-2.5 rounded-xl border border-white/5 backdrop-blur-md">
                Building scalable mobile architecture at Myntra, React Native platforms, and robust backend systems.
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:underline">
                <span>Explore Engineering</span>
                <span className="text-sm">→</span>
              </div>
            </div>
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8 mb-8">
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
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl">
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
