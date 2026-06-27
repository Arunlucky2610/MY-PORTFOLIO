"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Database, Monitor, Server, Zap } from "lucide-react";

/* ─── Data ─────────────────────────────────────────────────────────────────── */
const STATS = [
  { value: "15+", label: "Technologies" },
  { value: "3",   label: "AI Projects" },
  { value: "7mo", label: "Experience" },
  { value: "FS+AI", label: "Engineering" },
];

type Skill = { name: string; pct?: number };

type Category = {
  id: string;
  title: string;
  icon: any;
  accent: string;
  glow: string;
  primary: Skill[];   // shown with thin bar
  chips: string[];    // shown as compact pills
};

const CATEGORIES: Category[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Monitor,
    accent: "from-cyan-500 to-blue-600",
    glow: "rgba(56,189,248,0.20)",
    primary: [
      { name: "React",         pct: 95 },
      { name: "Next.js",       pct: 90 },
      { name: "TypeScript",    pct: 90 },
    ],
    chips: ["Tailwind CSS", "Framer Motion", "Responsive UI"],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    accent: "from-emerald-500 to-teal-600",
    glow: "rgba(52,211,153,0.20)",
    primary: [
      { name: "Python",  pct: 95 },
      { name: "FastAPI", pct: 95 },
      { name: "Node.js", pct: 80 },
    ],
    chips: ["PostgreSQL", "SQLAlchemy", "Database Design", "REST APIs", "JWT Auth"],
  },
  {
    id: "ai",
    title: "AI Engineering",
    icon: Brain,
    accent: "from-violet-500 to-purple-700",
    glow: "rgba(167,139,250,0.20)",
    primary: [
      { name: "OpenAI API",  pct: 95 },
      { name: "Gemini AI",   pct: 90 },
      { name: "LangChain",   pct: 80 },
    ],
    chips: ["Prompt Engineering", "RAG", "AI Analytics", "Computer Vision"],
  },
  {
    id: "devops",
    title: "Cloud & DevOps",
    icon: Database,
    accent: "from-orange-500 to-pink-600",
    glow: "rgba(251,146,60,0.20)",
    primary: [
      { name: "Docker",    pct: 85 },
      { name: "Vercel",    pct: 90 },
      { name: "VPS/Linux", pct: 80 },
    ],
    chips: ["GitHub", "Firebase", "Swagger/OpenAPI", "Database Management"],
  },
];

/* ─── Tiny Progress Bar ─────────────────────────────────────────────────────── */
function MiniBar({ skill, accent, delay }: { skill: Skill; accent: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-neutral-300">{skill.name}</span>
        <span className="font-mono text-xs text-neutral-500">{skill.pct}%</span>
      </div>
      <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${accent}`}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.pct}%` : 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay }}
        />
      </div>
    </div>
  );
}

/* ─── Category Card ─────────────────────────────────────────────────────────── */
function CategoryCard({ cat, index }: { cat: Category; index: number }) {
  const Icon = cat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d1117]/80 p-6 backdrop-blur-xl transition-all duration-500 hover:border-white/[0.12]"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 48px ${cat.glow}`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {/* Corner glow */}
      <div className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${cat.accent} opacity-[0.06] blur-2xl transition-opacity duration-500 group-hover:opacity-[0.13]`} />

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${cat.accent}`}>
          <Icon size={18} className="text-white" />
        </div>
        <h3 className="text-base font-bold tracking-tight text-white">{cat.title}</h3>
        <div className="ml-auto flex items-center gap-1.5">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-green-400"
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
          <span className="font-mono text-[9px] uppercase tracking-widest text-green-400/60">Active</span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/[0.05]" />

      {/* Primary skills with mini bars */}
      <div className="flex flex-col gap-3">
        {cat.primary.map((skill, i) => (
          <MiniBar key={skill.name} skill={skill} accent={cat.accent} delay={i * 0.07 + index * 0.04} />
        ))}
      </div>

      {/* Chip row */}
      <div className="flex flex-wrap gap-2">
        {cat.chips.map((chip) => (
          <span
            key={chip}
            className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-neutral-400 transition-colors hover:text-neutral-200"
          >
            {chip}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Section ───────────────────────────────────────────────────────────────── */
export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#030712] px-4 py-24 sm:px-6 sm:py-32 font-sans">

      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-10 h-[500px] w-[500px] rounded-full bg-sky-900/15 blur-[140px]" />
        <div className="absolute -right-48 bottom-10 h-[500px] w-[500px] rounded-full bg-violet-900/15 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-neutral-400">
            <Zap size={12} className="text-sky-400" />
            Tech Ecosystem
          </div>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base font-light text-neutral-500">
            Tools and technologies I use to build intelligent, production-grade products.
          </p>
        </motion.div>

        {/* Stat strip */}
        <div className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-1 rounded-xl border border-white/[0.06] bg-white/[0.02] py-4"
            >
              <span className="text-2xl font-black text-white">{s.value}</span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-neutral-600">{s.label}</span>
            </motion.div>
          ))}
        </div>

        {/* 2×2 grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-10 text-center text-sm font-light text-neutral-700"
        >
          Building thoughtful digital products with modern technologies.
        </motion.p>
      </div>
    </section>
  );
}
