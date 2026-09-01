import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { Mail, Copy, Check, Github, Linkedin, Twitter, Instagram, Send, MessageSquare, ArrowUpRight } from "./Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: personalInfo.socials.github,
      icon: Github,
      color: "hover:border-zinc-500 hover:text-white"
    },
    {
      name: "LinkedIn",
      url: personalInfo.socials.linkedin,
      icon: Linkedin,
      color: "hover:border-cyan-500 hover:text-cyan-400"
    },
    {
      name: "Twitter / X",
      url: personalInfo.socials.twitter,
      icon: Twitter,
      color: "hover:border-sky-500 hover:text-sky-400"
    },
    {
      name: "Instagram",
      url: personalInfo.socials.instagram,
      icon: Instagram,
      color: "hover:border-pink-500 hover:text-pink-400"
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 max-w-4xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-cyan-400 mb-3">
          <MessageSquare size={13} />
          <span>04. REACH OUT & CONNECT</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          Let's Connect & Talk Tech
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
          Interested in mobile architecture, full-stack systems, or technology? Feel free to reach out.
        </p>
      </div>

      {/* Main Contact Card */}
      <div className="glass-card rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden border border-white/5 shadow-2xl flex flex-col items-center justify-center">
        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
          <Mail size={28} />
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Drop a Line via Email
        </h3>
        <p className="text-zinc-400 text-sm max-w-md mb-8">
          Whether it's discussing React Native, mobile architecture, or software engineering — my inbox is always open.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-sm font-medium text-white transition-all shadow-md active:scale-95"
          >
            {copied ? (
              <>
                <Check size={16} className="text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Email Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy size={16} className="text-cyan-400" />
                <span>{personalInfo.email}</span>
              </>
            )}
          </button>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-zinc-950 text-sm font-semibold transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
          >
            <Send size={15} />
            <span>Send Direct Email</span>
          </a>
        </div>

        {/* Single-Line Social Media Links */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
            Connect on Social Media:
          </span>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/80 border border-white/5 text-xs font-medium text-zinc-300 transition-all duration-200 hover:scale-105 active:scale-95 ${social.color}`}
                >
                  <Icon size={16} />
                  <span>{social.name}</span>
                  <ArrowUpRight size={12} className="opacity-60" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
