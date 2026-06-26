"use client";

import { motion } from "framer-motion";

const aboutCards = [
  {
    icon: "🏆",
    title: "Statathon 2025 Finalist",
  },
  {
    icon: "💼",
    title: "7+ Months Full Stack Experience",
  },
  {
    icon: "🤖",
    title: "AI & Full Stack Engineer",
  },
  {
    icon: "🚀",
    title: "10+ Production Projects",
  },
];

const paragraphs = [
  "I'm Arun Sudhaveni, a Full Stack Developer and AI/ML Engineer passionate about building intelligent software, scalable platforms, and AI-powered products that solve real-world problems.",
  "I specialize in React, Next.js, FastAPI, PostgreSQL, Docker, and AI technologies. My focus is creating high-performance applications with exceptional UI/UX and production-ready architecture.",
  "My biggest achievement is building Survey AI for the Ministry of Statistics (MoSPI) during Statathon 2025, transforming complex government datasets into AI-powered insights through natural language.",
  "Beyond coding, I enjoy leading teams, learning emerging AI technologies, solving challenging problems, and building products that create real impact.",
];

export default function About() {
  return (
    <section id="about" className="relative w-full overflow-hidden px-6 py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(251,146,60,.16),transparent_28%),radial-gradient(circle_at_86%_34%,rgba(56,189,248,.16),transparent_30%)]" />
      <div className="entry-particles pointer-events-none absolute inset-0 opacity-35" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-sky-200/70">About</p>
          <h2 className="text-5xl font-black tracking-tight text-gradient-cinema sm:text-7xl">
            About Me
          </h2>
          <div className="mt-8 space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {aboutCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: index * 0.08, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative min-h-44 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-2xl"
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_0%,rgba(255,255,255,.16),transparent_34%),linear-gradient(135deg,rgba(251,146,60,.16),transparent_42%,rgba(56,189,248,.16))]" />
              <div className="absolute inset-px rounded-[23px] border border-white/5" />
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-3xl shadow-[0_0_40px_rgba(56,189,248,.14)]">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold leading-snug text-white">{card.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
