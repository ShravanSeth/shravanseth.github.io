import React, { useState, useEffect, useRef } from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowDown, FileText, Smartphone, Globe, Layers, Terminal, Cpu } from "./Icons";
import spriteImg from "../assets/images/sprite.png";
import "./Hero.css";

export default function Hero() {
  const canvasRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [designerWidth, setDesignerWidth] = useState(420);
  const [coderWidth, setCoderWidth] = useState(420);
  const [designerLeft, setDesignerLeft] = useState(100);
  const [coderRight, setCoderRight] = useState(100);
  const [designerOpacity, setDesignerOpacity] = useState(1);
  const [coderOpacity, setCoderOpacity] = useState(1);
  const [activeSide, setActiveSide] = useState("center");

  const mousePosRef = useRef({ targetX: 520, currentX: 520 });
  const animFrameRef = useRef(null);

  // Responsive scale calculator for pixel-perfect 1040x600 canvas
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 1100) {
        const computedScale = Math.max(0.32, (w - 20) / 1040);
        setScale(computedScale);
      } else {
        setScale(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth lerp physics animation loop
  useEffect(() => {
    let isRunning = true;

    const updatePhysics = () => {
      if (!isRunning) return;

      const { targetX, currentX } = mousePosRef.current;
      const newX = currentX + (targetX - currentX) * 0.09;
      mousePosRef.current.currentX = newX;

      const diff = 520 - newX;
      
      const newDesignerW = Math.max(120, Math.min(720, 420 + diff * 0.5));
      const newCoderW = Math.max(120, Math.min(720, 420 - diff * 0.5));
      const newDesignerL = 100 + diff * 0.1;
      const newCoderR = 100 - diff * 0.1;
      const newDesignerOp = Math.max(0.15, Math.min(1, (1040 - newX) / 520));
      const newCoderOp = Math.max(0.15, Math.min(1, newX / 520));

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
  }, []);

  const handleMouseMove = (e) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / scale;
    const clampedX = Math.max(0, Math.min(1040, relX));
    mousePosRef.current.targetX = clampedX;
  };

  const handleMouseLeave = () => {
    mousePosRef.current.targetX = 520;
    setActiveSide("center");
  };

  const techBadges = [
    { label: "React Native", icon: Smartphone, color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5" },
    { label: "iOS & Android", icon: Layers, color: "text-blue-400 border-blue-500/20 bg-blue-500/5" },
    { label: "React & Next.js", icon: Globe, color: "text-indigo-400 border-indigo-500/20 bg-indigo-500/5" },
    { label: "Node.js & Python", icon: Terminal, color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5" },
    { label: "Architecture & Scale", icon: Cpu, color: "text-purple-400 border-purple-500/20 bg-purple-500/5" }
  ];

  return (
    <section className="hero-full-section w-full">
      {/* Dynamic Ambient Glows */}
      <div
        className={`absolute top-1/3 left-1/4 w-[550px] h-[400px] glow-purple blur-[140px] rounded-full pointer-events-none transition-all duration-700 ${
          activeSide === "designer" ? "opacity-35 scale-110" : "opacity-15"
        }`}
      />
      <div
        className={`absolute top-1/3 right-1/4 w-[550px] h-[400px] glow-cyan blur-[140px] rounded-full pointer-events-none transition-all duration-700 ${
          activeSide === "coder" ? "opacity-35 scale-110" : "opacity-15"
        }`}
      />

      {/* Status Pill */}
      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-700/60 shadow-lg shadow-black/40 text-xs font-medium text-zinc-300 mb-4 backdrop-blur-md hover:border-zinc-500/60 transition-all z-20">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-zinc-200 font-semibold">{personalInfo.roleAtCompany}</span>
        <span className="text-zinc-500">•</span>
        <span className="text-zinc-400">{personalInfo.location}</span>
      </div>

      {/* Full-Width Split Face Canvas Wrapper */}
      <div
        className="split-face-wrapper"
        style={{ height: `${600 * scale}px` }}
      >
        <div
          ref={canvasRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="split-face-canvas"
          style={{
            transform: `scale(${scale})`,
          }}
        >
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

          {/* Left Interactive Zone: Designer */}
          <a
            href="#about"
            className="hero-side-designer group"
            style={{ opacity: designerOpacity }}
          >
            <div className="hero-desc-designer transition-transform duration-300 group-hover:translate-x-2">
              <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold block mb-1">
                UI / UX Architect
              </span>
              <h1 className="text-6xl font-extrabold text-white tracking-tight leading-none group-hover:text-purple-300 transition-colors">
                Designer
              </h1>
              <p className="text-sm text-zinc-300 mt-3 leading-relaxed bg-zinc-950/70 p-3 rounded-2xl border border-white/5 backdrop-blur-md">
                Graphic designer specialising in intuitive UI/UX design, visual systems, and brand aesthetics.
              </p>
            </div>
          </a>

          {/* Right Interactive Zone: Coder */}
          <a
            href="#experience"
            className="hero-side-coder group"
            style={{ opacity: coderOpacity }}
          >
            <div className="hero-desc-coder transition-transform duration-300 group-hover:-translate-x-2">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold block mb-1">
                SDE @ Myntra
              </span>
              <h1 className="text-6xl font-extrabold text-white tracking-tight leading-none group-hover:text-cyan-300 transition-colors">
                &lt;Coder/&gt;
              </h1>
              <p className="text-sm text-zinc-300 mt-3 leading-relaxed bg-zinc-950/70 p-3 rounded-2xl border border-white/5 backdrop-blur-md">
                Full-Stack & Mobile SDE who writes clean, elegant, and highly performant code for scale.
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-6 mb-6 z-20">
        <a
          href="#experience"
          className="group px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          <span>Explore Timeline</span>
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

      {/* Tech Badges */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl z-20 px-4">
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
    </section>
  );
}
