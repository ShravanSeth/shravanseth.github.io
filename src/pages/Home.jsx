import React from "react";
import Hero from "../components/Hero";
import AboutBento from "../components/AboutBento";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-[#09090b] text-zinc-100 selection:bg-cyan-500 selection:text-zinc-950">
      <Hero />
      <AboutBento />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}