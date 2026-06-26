"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

type StackSection = {
  icon: string;
  title: string;
  description: string;
  logos: string[];
  skills: string[];
  projects: string[];
};

const stackSections: StackSection[] = [
  {
    icon: "⚛️",
    title: "Frontend",
    description: "Premium interfaces, responsive layouts, and motion-rich product experiences.",
    logos: ["React", "Next.js", "TS", "Tailwind", "Motion"],
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive UI", "Component Systems"],
    projects: ["Portfolio", "Survey AI Dashboard", "RapidSkill"],
  },
  {
    icon: "⚡",
    title: "Backend",
    description: "Fast APIs, secure auth, and scalable architecture for production applications.",
    logos: ["Python", "FastAPI", "REST", "JWT", "API"],
    skills: ["Python", "FastAPI", "REST API", "JWT Auth", "Pydantic", "OpenAPI", "Microservices"],
    projects: ["Survey AI", "Translation Portal", "Learning Platforms"],
  },
  {
    icon: "🤖",
    title: "AI",
    description: "Applied AI systems for natural language, analytics, automation, and vision.",
    logos: ["AI/ML", "LLMs", "OpenAI", "Gemini", "Vision"],
    skills: ["AI/ML", "LLMs", "OpenAI", "Gemini", "Computer Vision", "Prompt Engineering", "AI Agents"],
    projects: ["Survey AI", "AI Traffic System", "Oral Health AI"],
  },
  {
    icon: "🗄️",
    title: "Database",
    description: "Structured data models, reliable querying, and analytics-ready storage.",
    logos: ["Postgres", "SQL", "ETL", "Indexes", "Data"],
    skills: ["PostgreSQL", "SQL", "Data Modeling", "Indexes", "ETL Pipelines", "Analytics Schemas"],
    projects: ["MoSPI Data Portal", "Survey AI", "Dashboards"],
  },
  {
    icon: "🚀",
    title: "DevOps",
    description: "Practical deployment workflows, containers, source control, and Linux tooling.",
    logos: ["Docker", "Git", "GitHub", "Linux", "CI/CD"],
    skills: ["Docker", "Git", "GitHub", "Linux", "CI/CD", "Deployment", "Environment Setup"],
    projects: ["Portfolio", "Survey AI APIs", "Production Backends"],
  },
];

const currentlyBuilding = ["Survey AI", "MoSPI Data Portal", "AI Traffic System", "Oral Health AI"];

export default function Skills() {
  const [active, setActive] = useState<StackSection | null>(null);

  return (
    <section id="skills" className="relative overflow-hidden px-6 py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,.14),transparent_30%),radial-gradient(circle_at_82%_42%,rgba(251,146,60,.12),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-sky-200/70">Skills</p>
          <h2 className="text-4xl font-black tracking-tight text-gradient-cinema sm:text-6xl">Tech Stack</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            A focused engineering stack for building intelligent products with clean UI, fast APIs, and production-ready systems.
          </p>
        </div>

        <div className="space-y-4">
          {stackSections.map((section, index) => (
            <motion.button
              key={section.title}
              type="button"
              onClick={() => setActive(section)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="group relative w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] p-5 text-left shadow-2xl shadow-black/20 backdrop-blur-2xl transition hover:border-sky-200/30 sm:p-6"
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[linear-gradient(120deg,rgba(255,255,255,.12),transparent_38%,rgba(56,189,248,.12))]" />
              <div className="relative grid gap-5 lg:grid-cols-[4rem_1fr_auto_auto] lg:items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-4xl shadow-[0_0_45px_rgba(56,189,248,.12)]">
                  {section.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                  <p className="mt-2 max-w-2xl leading-7 text-slate-300">{section.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 lg:justify-end">
                  {section.logos.map((logo) => (
                    <span key={logo} className="rounded-full border border-white/10 bg-black/25 px-3 py-2 text-xs font-semibold text-slate-300 transition group-hover:text-white">
                      {logo}
                    </span>
                  ))}
                </div>
                <div className="w-fit rounded-full border border-white/10 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-black">
                  {section.skills.length} Tech
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl"
        >
          <h3 className="text-xl font-bold text-white">Currently Building</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {currentlyBuilding.map((project) => (
              <span key={project} className="rounded-full border border-white/10 bg-black/25 px-4 py-3 text-sm font-semibold text-slate-300">
                {project}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 px-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/95 p-7 shadow-2xl shadow-black/50"
            >
              <button onClick={() => setActive(null)} className="absolute right-5 top-5 rounded-full border border-white/10 p-2 text-white/70 hover:bg-white/10" aria-label="Close tech stack modal">
                <X size={18} />
              </button>
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-4xl">
                  {active.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-sky-200/70">Tech Area</p>
                  <h3 className="mt-1 text-4xl font-black text-white">{active.title}</h3>
                </div>
              </div>
              <p className="mt-6 leading-7 text-slate-300">{active.description}</p>

              <div className="mt-7">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-white/70">All Skills</p>
                <div className="flex flex-wrap gap-2">
                  {active.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-white/70">Related Projects</p>
                <div className="grid gap-2 sm:grid-cols-3">
                  {active.projects.map((project) => (
                    <div key={project} className="rounded-2xl border border-white/10 bg-black/25 p-4 text-sm font-semibold text-slate-300">
                      {project}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
