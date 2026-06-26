"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Server, Sparkles, Database, ArrowRight } from "lucide-react";
import { useState } from "react";

type Tech = {
  name: string;
  slug: string;
  label: string;
  percentage: number;
};

type TechGroup = {
  id: string;
  name: string;
  icon: any;
  technologies: Tech[];
  usedIn: string[];
  description: string;
};

const groups: TechGroup[] = [
  {
    id: "frontend",
    name: "Frontend",
    icon: Monitor,
    description: "Architecting fluid, component-driven interfaces with rich motion and precision styling.",
    usedIn: ["RapidSkill", "Survey AI Dashboard", "Portfolio"],
    technologies: [
      { name: "React", slug: "react", label: "Primary", percentage: 90 },
      { name: "Next.js", slug: "nextdotjs", label: "Production", percentage: 80 },
      { name: "TypeScript", slug: "typescript", label: "Daily", percentage: 75 },
      { name: "Tailwind", slug: "tailwindcss", label: "Daily", percentage: 90 },
      { name: "Framer", slug: "framer", label: "Current", percentage: 80 },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: Server,
    description: "Building resilient microservices, high-throughput APIs, and secure authentication flows.",
    usedIn: ["Survey AI APIs", "MNRG Backend"],
    technologies: [
      { name: "Python", slug: "python", label: "Primary", percentage: 85 },
      { name: "FastAPI", slug: "fastapi", label: "Production", percentage: 85 },
      { name: "Node.js", slug: "nodedotjs", label: "Current", percentage: 75 },
    ],
  },
  {
    id: "ai",
    name: "AI",
    icon: Sparkles,
    description: "Integrating large language models for autonomous decision making and data synthesis.",
    usedIn: ["MNRG Brain", "Survey Intelligence", "Oral Health AI"],
    technologies: [
      { name: "OpenAI", slug: "openai", label: "Production", percentage: 75 },
      { name: "Gemini", slug: "googlegemini", label: "Current", percentage: 75 },
    ],
  },
  {
    id: "data",
    name: "Data",
    icon: Database,
    description: "Designing structured relational models and optimized vector storage for context retrieval.",
    usedIn: ["MoSPI Data Portal", "Survey AI Analytics"],
    technologies: [
      { name: "PostgreSQL", slug: "postgresql", label: "Primary", percentage: 80 },
      { name: "Docker", slug: "docker", label: "Current", percentage: 60 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Skills() {
  const [activeGroupId, setActiveGroupId] = useState<string | null>(null);
  const activeGroup = groups.find(g => g.id === activeGroupId);

  return (
    <section id="skills" className="flex min-h-screen items-center bg-black px-6 py-32 sm:py-48 font-sans">
      <div className="mx-auto w-full max-w-[1400px]">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <h2 className="mb-6 text-5xl font-semibold tracking-tight text-white sm:text-7xl lg:text-8xl">
            Technologies.
          </h2>
          <p className="mb-20 max-w-2xl text-xl font-light tracking-wide text-neutral-400 sm:text-3xl leading-relaxed">
            Building thoughtful digital products with modern technologies.
          </p>
        </motion.div>

        {/* Layout Split */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

          {/* Left: Technology Categories */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col flex-1"
          >
            {groups.map((group) => {
              const Icon = group.icon;
              const isActive = activeGroupId === group.id;

              return (
                <motion.div
                  key={group.id}
                  variants={itemVariants}
                  onClick={() => setActiveGroupId(isActive ? null : group.id)}
                  className={`group relative flex flex-col py-8 transition-all duration-700 ease-out hover:py-12 sm:flex-row cursor-pointer ${isActive ? "px-6" : "px-2"}`}
                >
                  {/* Large Faint Background Word */}
                  <div className="pointer-events-none absolute inset-0 -z-20 flex items-center overflow-hidden">
                    <span className="text-[6rem] sm:text-[10rem] lg:text-[12rem] font-black uppercase leading-none tracking-tighter text-white/[0.015] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:text-white/[0.03] -ml-4 sm:-ml-12">
                      {group.name}
                    </span>
                  </div>

                  {/* Subtle Glass Blur (Active Row Only) */}
                  <div className={`absolute inset-0 -z-10 transition-all duration-700 ease-out rounded-2xl ${isActive ? "bg-white/[0.03] backdrop-blur-md" : "opacity-0 group-hover:bg-white/[0.01]"}`} />

                  {/* Animated Gradient Divider (Top) */}
                  <div className="absolute left-0 top-0 h-[1px] w-full bg-white/5 overflow-hidden">
                    <div className="h-full w-full -translate-x-[101%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-[101%]" />
                  </div>

                  {/* Category Title & Icon */}
                  <div className="relative z-10 mb-8 flex w-56 shrink-0 flex-col sm:mb-0 justify-center">
                    <div className="flex items-center gap-4 text-neutral-500 transition-colors duration-500 group-hover:text-neutral-300">
                      <Icon className={`h-5 w-5 transition-colors duration-500 ${isActive ? "text-white" : ""}`} strokeWidth={1.5} />
                      <h3 className={`text-xl font-medium tracking-wide transition-colors duration-500 ${isActive ? "text-white" : ""}`}>{group.name}</h3>
                    </div>
                    {/* Hover Hint */}
                    <div className="mt-3 flex items-center gap-2 opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400">View usage</span>
                      <ArrowRight className="h-3 w-3 text-neutral-400" />
                    </div>
                  </div>

                  {/* Technologies List */}
                  <div className="relative z-10 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 flex-1">
                    {group.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="tech-item group/tech flex items-start gap-4 transition-all duration-500 hover:-translate-y-1"
                      >
                        {/* Official Tech Icon (Monochrome) */}
                        <div className="relative flex h-8 w-8 shrink-0 items-center justify-center mt-1">
                          <img
                            src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${tech.slug}.svg`}
                            alt={`${tech.name} icon`}
                            className="relative z-10 h-6 w-6 opacity-40 grayscale transition-all duration-500 group-hover/tech:opacity-100 group-hover/tech:brightness-200"
                            style={{ filter: 'invert(1)' }}
                          />
                        </div>

                        <div className="flex w-full flex-col pt-1">
                          {/* Name and Percentage */}
                          <div className="flex items-baseline justify-between mb-2">
                            <span className="text-xl font-light text-neutral-400 transition-colors duration-500 group-hover/tech:text-white">
                              {tech.name}
                            </span>
                            <span className="text-[11px] font-mono text-neutral-600 transition-colors duration-500 group-hover/tech:text-neutral-300">
                              {tech.percentage}%
                            </span>
                          </div>

                          {/* Minimal Thin Line Progress */}
                          <div className="h-[1px] w-full bg-white/5 overflow-hidden mb-2">
                            <motion.div
                              className="h-full bg-neutral-600 transition-colors duration-500 group-hover/tech:bg-neutral-200"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${tech.percentage}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                            />
                          </div>

                          {/* Sub Labels */}
                          <span className="text-[9px] font-medium uppercase tracking-widest text-neutral-600 transition-colors duration-500 group-hover/tech:text-neutral-400">
                            {tech.label}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}

            {/* Final closing border */}
            <motion.div variants={itemVariants} className="relative h-[1px] w-full bg-white/5 mt-4" />
          </motion.div>

          {/* Right: Dynamic Preview Panel */}
          <div className="w-full lg:w-96 shrink-0 relative">
            <AnimatePresence mode="wait">
              {activeGroup ? (
                <motion.div
                  key={activeGroup.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="sticky top-48 flex flex-col pt-8 lg:pt-12"
                >
                  <div className="mb-6 flex items-center gap-3 text-neutral-400">
                    <activeGroup.icon strokeWidth={1.5} className="h-5 w-5" />
                    <span className="text-sm font-medium tracking-wider uppercase">{activeGroup.name} Architecture</span>
                  </div>

                  <p className="mb-12 text-lg font-light leading-relaxed text-neutral-300">
                    {activeGroup.description}
                  </p>

                  <div>
                    <h4 className="mb-6 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                      Deployed Projects
                    </h4>
                    <ul className="space-y-5">
                      {activeGroup.usedIn.map((project) => (
                        <li key={project} className="group flex items-center gap-4 cursor-default">
                          <ArrowRight className="h-4 w-4 text-neutral-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" strokeWidth={1.5} />
                          <span className="text-neutral-300 transition-colors duration-300 group-hover:text-white">{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="sticky top-48 flex h-full items-start pt-12 text-neutral-600"
                >
                  <p className="text-sm font-light tracking-wide">
                    Select an architecture layer to view deployment details.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
