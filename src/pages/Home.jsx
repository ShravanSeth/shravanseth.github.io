import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-[#09090b] text-zinc-100 selection:bg-cyan-500 selection:text-zinc-950 w-full overflow-x-hidden">
      <Hero />
      <About />
      <ExperienceTimeline />
      <Projects />
      <Contact />
    </main>
  );
}