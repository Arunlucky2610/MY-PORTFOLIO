"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Code, ExternalLink, Lock, Sparkles, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const statathonRepo = "https://github.com/Chandu2815/STATAHON-PROJECT";

const projects = [
  {
    id: "mnrg",
    title: "MNRG",
    status: "LAUNCHING 2026",
    tagline: "AI-Powered Student Intelligence OS",
    description: "A private system in development. Built to understand student potential, connect hidden signals, and reveal the next move only when the path is ready. Vision under development.",
    type: "Private System",
    image: "/Portfolio.png", // Or a blurred suspenseful image
    locked: true,
    badges: [],
    tech: ["AI Core", "Neural Networks", "Data Sync", "Growth OS"],
    links: [
      { label: "Request Early Access", url: "#contact", icon: Lock },
    ]
  },
  {
    id: "survey-ai",
    title: "Statathon 2025",
    status: "FEATURED",
    tagline: "Survey AI / MoSPI Data Portal",
    description: "Government Data Intelligence Platform built for MoSPI Statathon 2025. Turns statistical data into accessible, decision-ready intelligence for research and policy teams.",
    type: "Featured Project",
    image: "/mospi-portal.png",
    locked: false,
    badges: ["🏆 Featured Project", "🇮🇳 Built for MoSPI", "🤖 AI Powered", "🥇 National Finalist"],
    tech: ["AI", "FastAPI", "PostgreSQL", "React", "Docker"],
    links: [
      { label: "Case Study", url: "#", icon: ExternalLink },
      { label: "View Repository", url: statathonRepo, icon: Code },
    ]
  },
  {
    id: "rapidskill",
    title: "RapidSkill",
    status: "ACTIVE",
    tagline: "Production Full-Stack Platform",
    description: "Production full-stack platform built during internship. Contributed across UI/UX redesign, learning flow polish, and responsive product system presentation.",
    type: "Internship Build",
    image: "/RapidSkill.png",
    locked: false,
    badges: [],
    tech: ["React", "Tailwind CSS", "Framer Motion", "UI/UX", "Responsive Design"],
    links: [
      { label: "Visit Platform", url: "#", icon: ExternalLink },
    ]
  },
  {
    id: "portfolio",
    title: "Portfolio '26",
    status: "ONLINE",
    tagline: "Cinematic Mission Control",
    description: "An immersive, AI-agent styled portfolio designed as a secret operating system. Features cinematic intros, 3D interactions, and dark glassmorphism.",
    type: "Personal Project",
    image: "/Portfolio.png", // Using a placeholder for portfolio
    locked: false,
    badges: [],
    tech: ["Next.js", "Framer Motion", "GSAP", "React Three Fiber"],
    links: [
      { label: "View Source", url: "#", icon: Code },
    ]
  }
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(projects[1]);

  return (
    <section id="projects" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-28">
      {/* Deep Space Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(15,23,42,0.6)_0%,rgba(0,0,0,1)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(251,146,60,.08),transparent_30%),radial-gradient(circle_at_82%_28%,rgba(56,189,248,.08),transparent_32%)]" />
      <div className="entry-particles pointer-events-none absolute inset-0 opacity-20" />
      <div className="absolute inset-0 cinematic-grid opacity-10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        
        <div className="mb-16">
          <p className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-cyan-400/80">
            <Sparkles size={16} /> Classified Archives
          </p>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
            Project Case <span className="text-gradient-cinema">Files</span>
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[400px_1fr] lg:gap-16">
          
          {/* Left Column: Vertical Timeline */}
          <div className="flex flex-col space-y-4">
            {projects.map((project, index) => {
              const isActive = activeProject.id === project.id;
              
              return (
                <div
                key={project.id}
                onMouseEnter={() => setActiveProject(project)}
                  onClick={() => {
                    setActiveProject(project);
                    if (project.id === "survey-ai") {
                      window.open(statathonRepo, "_blank", "noopener,noreferrer");
                    }
                  }}
                  className={`group relative cursor-pointer overflow-hidden rounded-2xl border p-5 transition-all duration-500 ${
                    isActive 
                      ? project.id === "survey-ai"
                        ? "border-amber-300/60 bg-amber-950/15 shadow-[0_0_42px_rgba(251,191,36,0.18)] backdrop-blur-xl"
                        : "border-cyan-500/50 bg-cyan-950/20 shadow-[0_0_30px_rgba(34,211,238,0.15)] backdrop-blur-xl" 
                      : "border-white/5 bg-white/[0.02] hover:bg-white/[0.05]"
                  }`}
                >
                  {/* Active highlight bar */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTimelineBar"
                      className={`absolute left-0 top-0 h-full w-1 ${project.id === "survey-ai" ? "bg-gradient-to-b from-amber-200 to-orange-500" : "bg-gradient-to-b from-cyan-400 to-blue-600"}`}
                    />
                  )}

                  <div className="flex items-center justify-between">
                    <p className={`text-[10px] font-black uppercase tracking-widest ${
                      isActive ? project.id === "survey-ai" ? "text-amber-300" : "text-cyan-400" : "text-slate-500 group-hover:text-slate-400"
                    }`}>
                      {String(index + 1).padStart(2, "0")} // {project.type}
                    </p>
                    <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                      project.locked 
                        ? "bg-red-500/10 text-red-400 border border-red-500/20" 
                        : isActive
                          ? project.id === "survey-ai" ? "bg-amber-400/10 text-amber-200 border border-amber-300/25" : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                          : "bg-white/5 text-slate-400 border border-white/10"
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className={`mt-3 text-2xl font-bold tracking-tight transition-colors ${
                    isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                  }`}>
                    {project.title}
                  </h3>

                  {project.id === "survey-ai" && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.badges.map((badge) => (
                        <span key={badge} className="rounded-full border border-amber-200/20 bg-amber-300/10 px-2 py-1 text-[9px] font-bold text-amber-100">
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className={`mt-3 grid transition-all duration-500 ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="text-sm leading-relaxed text-slate-400 line-clamp-2">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  <div className={`absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                    isActive ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  }`}>
                    <ChevronRight className="text-cyan-400" size={20} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Project Preview */}
          <div className="relative min-h-[500px] lg:min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                whileHover={activeProject.id === "survey-ai" ? { y: -6, scale: 1.01 } : undefined}
                onClick={() => {
                  if (activeProject.id === "survey-ai") {
                    window.open(statathonRepo, "_blank", "noopener,noreferrer");
                  }
                }}
                className={`absolute inset-0 flex flex-col overflow-hidden rounded-[2rem] border bg-black/40 shadow-2xl backdrop-blur-2xl ${
                  activeProject.id === "survey-ai"
                    ? "cursor-pointer border-amber-300/35 shadow-[0_0_70px_rgba(251,191,36,.16)]"
                    : "border-white/10"
                }`}
              >
                {activeProject.id === "mnrg" ? (
                  <div className="relative flex h-full flex-col overflow-hidden p-8 lg:p-10 bg-slate-950">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.15),transparent_50%)]" />
                    <motion.div
                      animate={{ y: ["-100%", "300%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent blur-xl"
                    />
                    
                    <div className="relative z-10 mb-8 flex items-center justify-between border-b border-white/10 pb-6">
                      <div className="flex items-center gap-3">
                        <span className="relative flex h-3 w-3">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
                        </span>
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-red-500 sm:tracking-[0.3em]">Confidential Clearance</span>
                      </div>
                      <div className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)] sm:text-xs">
                        Coming Soon • 2026
                      </div>
                    </div>

                    <div className="relative z-10">
                      <h3 className="mb-1 text-5xl font-black tracking-tight text-white">MNRG</h3>
                      <h4 className="mb-5 text-xl font-bold text-cyan-400">Student Intelligence Operating System</h4>
                      <p className="mb-6 border-l-2 border-cyan-500/50 pl-4 text-lg font-medium italic text-slate-300">
                        "The AI platform that understands students before they understand themselves."
                      </p>

                      <p className="mb-8 text-sm leading-relaxed text-slate-400">
                        MNRG is an AI-powered Student Intelligence Operating System designed to analyze academic performance, skills, interests, behavior, achievements, career goals, and hidden potential. It continuously learns from student activity to generate personalized career roadmaps, project recommendations, internship matching, skill-gap analysis, AI mentorship, and predictive career intelligence. Instead of showing raw data, MNRG becomes a private decision engine that guides every student's next move.
                      </p>

                      <div className="mb-8 flex flex-wrap gap-2">
                        {["AI Career Prediction", "Skill DNA", "Smart Roadmaps", "Internship Match", "Hidden Potential", "AI Mentor", "Predictive Analytics", "Growth Timeline"].map((feature) => (
                          <span key={feature} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300 backdrop-blur-md">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="relative z-10 mt-auto flex flex-col gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">Development Status</p>
                        <div className="font-mono text-sm text-cyan-400">
                          <span className="text-cyan-500">████████</span><span className="text-slate-700">░░</span> 82%
                        </div>
                        <p className="mt-1 text-xs font-semibold text-slate-400">Launching 2026</p>
                      </div>

                      <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-500 bg-cyan-500/10 px-8 py-3 text-sm font-bold uppercase tracking-wider text-cyan-400 transition-all hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
                      >
                        Request Early Access
                        <Lock size={16} />
                      </a>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Image Section */}
                    <div className="group relative h-1/2 min-h-[250px] w-full overflow-hidden border-b border-white/10 bg-slate-900">
                      <Image 
                        src={activeProject.image} 
                        alt={activeProject.title} 
                        fill 
                        className={`object-cover object-top transition-transform duration-700 group-hover:scale-105 ${activeProject.locked ? "opacity-30 blur-sm grayscale" : "opacity-80"}`} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                      
                      {activeProject.locked && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-red-500">
                          <div className="rounded-full border border-red-500/30 bg-black/50 p-6 backdrop-blur-xl">
                            <Lock size={32} className="mb-2" />
                            <p className="text-center text-xs font-black uppercase tracking-widest text-red-400">Classified</p>
                          </div>
                        </div>
                      )}

                      {/* Scanning line effect */}
                      <motion.div
                        animate={{ y: ["-100%", "300%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent blur-xl"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-1 flex-col p-8 lg:p-10">
                      <div className="mb-6 flex flex-wrap gap-2">
                        {activeProject.badges?.map((badge) => (
                          <span key={badge} className="rounded-full border border-amber-200/20 bg-amber-300/10 px-3 py-1.5 text-xs font-bold text-amber-100 shadow-[0_0_20px_rgba(251,191,36,.08)] backdrop-blur-md">
                            {badge}
                          </span>
                        ))}
                        {activeProject.tech.map((tech) => (
                          <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300 backdrop-blur-md">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <h3 className="mb-2 text-4xl font-black tracking-tight text-white">{activeProject.title}</h3>
                      <p className="mb-6 text-lg font-medium text-cyan-400">{activeProject.tagline}</p>
                      
                      <p className="mb-8 max-w-2xl text-base leading-7 text-slate-400">
                        {activeProject.description}
                      </p>

                      <div className="mt-auto flex flex-wrap gap-4">
                        {activeProject.links.map((link, i) => {
                          const Icon = link.icon;
                          return (
                            <a
                              key={i}
                              href={link.url}
                              target={link.url.startsWith("http") ? "_blank" : undefined}
                              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                              onClick={(event) => event.stopPropagation()}
                              className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 ${
                                activeProject.locked && i === 0
                                  ? "border-red-500/50 bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]"
                                  : i === 0 
                                    ? "border-cyan-500 bg-cyan-500 text-black hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
                                    : "border-white/20 bg-white/5 text-white hover:bg-white/10"
                              }`}
                            >
                              {link.label}
                              <Icon size={16} />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </>
                )}
                
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
