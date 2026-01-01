import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Github, 
  Twitter, 
  ExternalLink, 
  Terminal,
  ArrowUpRight,
  Fingerprint,
  Radio,
  Share2
} from 'lucide-react';

// --- CONFIGURATION ---
const PROFILE = {
  name: "Muhammad Noman",
  alias: "Web3 Ambivert",
  title: "Researcher • Moderator • Nerd",
  age: 21,
  dob: "30.09",
  traits: ["Shy", "Ambivert", "Nerd"],
  bio: "A systematic researcher deciphering the noise of the decentralized web. I turn complex data into actionable alpha and build resilient digital communities.",
  socials: {
    x: "https://x.com/0xAmbivert",
    farcaster: "https://warpcast.com/ambivert", // Updated to warpcast standard
    github: "https://github.com/0xAmbivert"
  }
};

const DAPPS = [
  {
    title: "BASED",
    link: "https://based.ambivert.linea.eth.limo",
    type: "Infrastructure",
    color: "#bef264" 
  },
  {
    title: "LFSONEIUM",
    link: "https://lfsoneium.ambivert.linea.eth.limo",
    type: "Ecosystem Tool",
    color: "#22d3ee" 
  },
  {
    title: "INKODAPP",
    link: "https://inkodapp.ambivert.linea.eth.limo",
    type: "Experimental",
    color: "#a855f7" 
  }
];

const SKILLS = [
  "Discord Moderator",
  "Web3 Researcher",
  "Alpha Finder",
  "Tech Savvy",
  "Crypto Strategy"
];

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const springY = useSpring(yRange, { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0a0a0a] text-white font-mono selection:bg-[#bef264] selection:text-black overflow-x-hidden">
      
      {/* Scanline Effect Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

      {/* Noise Background */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Header / Nav */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-40 mix-blend-difference">
        <div className="flex items-center gap-2">
          <Fingerprint className="text-[#bef264]" size={24} />
          <span className="font-black tracking-tighter text-xl uppercase italic">AMBIVERT.SYS</span>
        </div>
        <div className="flex gap-6 text-[10px] tracking-[0.2em] font-bold uppercase">
          <a href="#work" className="hover:text-[#bef264] transition-colors hidden md:block">Archive</a>
          <a href={PROFILE.socials.x} target="_blank" className="hover:text-[#bef264] transition-colors">X.com</a>
          <a href={PROFILE.socials.farcaster} target="_blank" className="hover:text-[#bef264] transition-colors">Farcaster</a>
          <a href={PROFILE.socials.github} target="_blank" className="hover:text-[#bef264] transition-colors">GitHub</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center px-6 lg:px-24">
        <motion.div style={{ y: springY }} className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#bef264]" />
            <span className="text-[#bef264] text-xs font-bold tracking-[0.3em] uppercase">User Profile Identified</span>
          </div>
          
          <h1 className="text-[12vw] leading-[0.8] font-black uppercase italic tracking-tighter mb-8">
            {PROFILE.alias}<br/>
            <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
              NOMAN
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
            <p className="text-lg text-neutral-400 leading-relaxed max-w-md">
              {PROFILE.bio}
            </p>
            <div className="flex flex-col justify-end gap-2 text-xs uppercase tracking-widest text-[#bef264]">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Subject:</span> <span>{PROFILE.name}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Class:</span> <span>{PROFILE.traits.join(' // ')}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>DOB:</span> <span>{PROFILE.dob}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Socials Matrix */}
      <section className="px-6 lg:px-24 mb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href={PROFILE.socials.x} target="_blank" className="border border-white/10 p-8 flex flex-col items-center gap-4 hover:bg-[#bef264]/10 hover:border-[#bef264] transition-all group">
            <Twitter size={32} className="group-hover:text-[#bef264]" />
            <span className="text-[10px] font-bold tracking-widest uppercase">Twitter / X</span>
          </a>
          <a href={PROFILE.socials.farcaster} target="_blank" className="border border-white/10 p-8 flex flex-col items-center gap-4 hover:bg-[#bef264]/10 hover:border-[#bef264] transition-all group">
            <Radio size={32} className="group-hover:text-[#bef264]" />
            <span className="text-[10px] font-bold tracking-widest uppercase">Farcaster</span>
          </a>
          <a href={PROFILE.socials.github} target="_blank" className="border border-white/10 p-8 flex flex-col items-center gap-4 hover:bg-[#bef264]/10 hover:border-[#bef264] transition-all group">
            <Github size={32} className="group-hover:text-[#bef264]" />
            <span className="text-[10px] font-bold tracking-widest uppercase">GitHub</span>
          </a>
          <div className="border border-white/10 p-8 flex flex-col items-center justify-center gap-4 opacity-50 italic">
            <Share2 size={32} />
            <span className="text-[10px] font-bold tracking-widest uppercase">More Soon</span>
          </div>
        </div>
      </section>

      {/* Lab / Skills Section */}
      <section id="lab" className="py-32 px-6 lg:px-24 bg-white/5 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-black uppercase mb-12 flex items-center gap-4">
              <Terminal className="text-[#bef264]" /> Core Matrix
            </h2>
            <div className="space-y-4">
              {SKILLS.map((skill, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 20 }}
                  className="group flex items-center justify-between p-6 border border-white/10 hover:border-[#bef264] hover:bg-[#bef264]/5 transition-all cursor-crosshair"
                >
                  <span className="text-xl font-bold uppercase tracking-tighter italic">{skill}</span>
                  <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity text-[#bef264]">0{i+1} // ACTIVE</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="bg-black p-8 border border-white/10 rounded-sm relative overflow-hidden">
            <div className="font-mono text-[12px] text-neutral-500 space-y-4">
              <p className="text-[#bef264] underline font-bold">RESEARCH_LOG_v2.04</p>
              <p>{">"} INITIALIZING ALPHA_FINDER ENGINE...</p>
              <p className="text-white">{">"} [STATUS] MULTIPLE ALPHA SIGNALS DETECTED.</p>
              <p>{">"} MODERATING DISCORD INSTANCES: 100% HEALTH.</p>
              <p>{">"} SOCIAL PROTOCOLS LINKED: X, FARCASTER, GITHUB.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio / dApps Section */}
      <section id="work" className="py-32 px-6 lg:px-24">
        <h2 className="text-7xl font-black uppercase tracking-tighter mb-20 text-center">
          DApp <span className="text-[#bef264]">Hub</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {DAPPS.map((dapp, i) => (
            <motion.a
              key={i}
              href={dapp.link}
              target="_blank"
              whileHover={{ backgroundColor: "rgba(190, 242, 100, 0.05)" }}
              className="p-12 aspect-square flex flex-col justify-between group transition-colors bg-[#0a0a0a]"
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-40 group-hover:text-[#bef264]">Project_0{i+1}</span>
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all" />
              </div>
              <h3 className="text-4xl font-black uppercase tracking-tighter">{dapp.title}</h3>
            </motion.a>
          ))}
        </div>
      </section>

      <footer className="py-24 px-6 lg:px-24 border-t border-white/10 text-center">
        <p className="opacity-30 text-[10px] uppercase font-bold tracking-widest">© 2025 AMBIVERT_DATA_SYSTEMS</p>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        .stroke-text { color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,0.2); }
        html { scroll-behavior: smooth; }
      `}} />
    </div>
  );
}

