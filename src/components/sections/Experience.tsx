"use client";

import { achievements, experiences } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-orange-200/80">Experience & Achievements</p>
        <h2 className="mb-16 text-4xl font-bold tracking-tight sm:text-6xl">Momentum from internships, hackathons, and shipping.</h2>
        <div className="grid gap-10 lg:grid-cols-[1fr_.8fr]">
          <div className="space-y-5">
            {experiences.map((item, index) => (
              <motion.article key={item.company} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl border border-white/10 bg-slate-950/65 p-7 backdrop-blur-xl">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-sm text-sky-200/75">{item.duration}</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">0{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold">{item.role}</h3>
                <p className="mt-1 text-lg text-gradient-cinema">{item.company}</p>
                <p className="mt-4 leading-7 text-slate-300">{item.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.stack.map((tech) => <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{tech}</span>)}
                </div>
              </motion.article>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur-xl lg:sticky lg:top-28 lg:h-fit">
            <h3 className="mb-6 text-2xl font-bold">Achievements</h3>
            <div className="space-y-3">
              {achievements.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-slate-200">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
