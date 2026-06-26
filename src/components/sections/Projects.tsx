"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Code, ExternalLink, Sparkles } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const surveyStack = ["AI", "FastAPI", "PostgreSQL", "React", "Docker"];
const rapidStack = ["React", "Tailwind CSS", "Framer Motion", "UI/UX", "Responsive Design"];
const mnrgFlow = [
  { label: "Student Profile", note: "Signal detected", x: 12, y: 18 },
  { label: "AI Brain", note: "Core reasoning", x: 50, y: 14 },
  { label: "Smart Roadmap", note: "Path forming", x: 82, y: 26 },
  { label: "Projects", note: "Locked module", x: 18, y: 74 },
  { label: "Placement Readiness", note: "Coming soon", x: 54, y: 84 },
  { label: "Growth OS", note: "Vision under development", x: 84, y: 68 },
];

function ProjectVisual({
  alt,
  image,
  reverse = false,
}: {
  alt: string;
  image: string;
  reverse?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reverse ? [34, -34] : [-34, 34]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative min-h-[22rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/35 lg:min-h-[34rem]"
    >
      <Image src={image} alt={alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 58vw" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.05),rgba(0,0,0,.36)),radial-gradient(circle_at_30%_15%,rgba(255,255,255,.14),transparent_34%)]" />
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-6 py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(251,146,60,.14),transparent_30%),radial-gradient(circle_at_82%_28%,rgba(56,189,248,.14),transparent_32%)]" />
      <div className="entry-particles pointer-events-none absolute inset-0 opacity-25" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-sky-200/70">Featured Projects</p>
          <h2 className="text-4xl font-black tracking-tight text-gradient-cinema sm:text-6xl">Product launch stories, not project cards.</h2>
        </div>

        <article className="relative grid min-h-screen gap-12 py-20 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            className="lg:sticky lg:top-28 lg:h-fit"
          >
            <p className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-orange-200/80">
              <Sparkles size={16} /> Project 01 · Currently Building
            </p>
            <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.22em] text-black shadow-[0_0_50px_rgba(255,255,255,.14)]">
              Launching 2026
            </div>
            <h3 className="text-6xl font-black tracking-tight text-white sm:text-8xl">MNRG</h3>
            <p className="mt-5 max-w-2xl text-2xl font-semibold leading-9 text-slate-200">
              AI-Powered Student Intelligence OS
            </p>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              A private system in development. Built to understand student potential, connect hidden signals, and reveal the next move only when the path is ready.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-black hover:bg-sky-100">
                Enter the Vision <ExternalLink size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-bold text-white hover:bg-white/10">
                Request Early Access
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            whileHover={{ scale: 1.015 }}
            className="relative min-h-[28rem] overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.055] p-4 shadow-2xl shadow-black/35 backdrop-blur-2xl lg:min-h-[38rem]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(147,197,253,.2),transparent_28%),radial-gradient(circle_at_24%_20%,rgba(251,191,36,.13),transparent_26%),linear-gradient(135deg,rgba(88,28,135,.22),rgba(2,6,23,.86)_48%,rgba(14,165,233,.12))]" />
            <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="absolute -bottom-24 left-14 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.34),rgba(125,211,252,.18)_34%,transparent_68%)] blur-xl" />
            <div className="entry-particles absolute inset-0 opacity-30" />

            <div className="relative h-full min-h-[26rem] overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/20">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                {mnrgFlow.map((node, index) => {
                  const next = mnrgFlow[(index + 1) % mnrgFlow.length];
                  return (
                    <motion.line
                      key={`${node.label}-${next.label}`}
                      x1={node.x}
                      y1={node.y}
                      x2={next.x}
                      y2={next.y}
                      stroke="rgba(125,211,252,.35)"
                      strokeWidth="0.22"
                      strokeDasharray="1 1.4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: index * 0.12 }}
                    />
                  );
                })}
              </svg>

              <motion.div
                animate={{ scale: [1, 1.06, 1], opacity: [0.72, 1, 0.72] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-center text-xs font-black uppercase tracking-[0.18em] text-white shadow-[0_0_80px_rgba(125,211,252,.35)] backdrop-blur-2xl"
              >
                AI<br />Core
              </motion.div>

              {mnrgFlow.map((node, index) => (
                <motion.div
                  key={node.label}
                  initial={{ opacity: 0, scale: 0.86 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ scale: 1.08, y: -6 }}
                  className="group absolute z-10 w-36 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-black/35 p-3 text-center shadow-2xl backdrop-blur-xl sm:w-44 sm:p-4"
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  <div className="mx-auto mb-2 h-2 w-2 rounded-full bg-sky-200 shadow-[0_0_18px_rgba(125,211,252,.9)]" />
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-white sm:text-sm">{node.label}</p>
                  <p className="mt-2 max-h-0 overflow-hidden text-[11px] leading-5 text-slate-300 opacity-0 transition-all duration-300 group-hover:max-h-16 group-hover:opacity-100">{node.note}</p>
                </motion.div>
              ))}

              <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-sky-100/80 backdrop-blur-xl">
                System loading...
              </div>
              <div className="absolute bottom-6 right-6 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-orange-100/80 backdrop-blur-xl">
                Vision under development
              </div>
            </div>
          </motion.div>
        </article>

        <article id="featured" className="relative grid min-h-screen gap-12 py-20 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            className="lg:sticky lg:top-28 lg:h-fit"
          >
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-orange-200/80">Project 02</p>
            <h3 className="text-5xl font-black tracking-tight text-white sm:text-7xl">Survey AI <span className="block text-gradient-cinema">(MoSPI)</span></h3>
            <p className="mt-6 max-w-xl text-xl leading-8 text-slate-300">
              Government Data Intelligence Platform built for MoSPI Statathon 2025.
            </p>
            <div className="mt-8 space-y-4">
              {[
                ["Problem", "Government datasets were complex, fragmented, and difficult to explore without technical query knowledge."],
                ["Solution", "A natural-language AI analytics experience that converts questions into insight workflows."],
                ["Impact", "Turns statistical data into accessible, decision-ready intelligence for research and policy teams."],
              ].map(([label, copy]) => (
                <motion.div key={label} whileHover={{ x: 6 }} className="rounded-3xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl">
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-200/70">{label}</p>
                  <p className="mt-3 leading-7 text-slate-300">{copy}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {surveyStack.map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-slate-200">{tech}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#featured" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-black hover:bg-sky-100">
                <ExternalLink size={18} /> Case Study
              </a>
              <a href="https://github.com/Chandu2815/STATAHON-PROJECT" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-bold text-white hover:bg-white/10">
                <Code size={18} /> GitHub
              </a>
            </div>
          </motion.div>
          <ProjectVisual image="/mospi-portal.png" alt="Survey AI MoSPI interface" />
        </article>

        <article className="relative grid min-h-screen gap-12 py-20 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div className="lg:order-1">
            <ProjectVisual image="/RapidSkill.png" alt="RapidSkill laptop mockup" reverse />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            className="lg:order-2"
          >
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-sky-200/70">Project 03</p>
            <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white">
              RapidSkill Internship
            </div>
            <h3 className="text-5xl font-black tracking-tight text-white sm:text-7xl">RapidSkill</h3>
            <p className="mt-6 max-w-xl text-xl leading-8 text-slate-300">
              Production full-stack platform built during internship.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["UI redesign", "Learning flow polish", "Responsive product system"].map((item) => (
                <motion.div key={item} whileHover={{ y: -6 }} className="rounded-3xl border border-white/10 bg-white/[0.055] p-5 text-sm font-semibold text-slate-200 backdrop-blur-xl">
                  {item}
                </motion.div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {rapidStack.map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-slate-200">{tech}</span>
              ))}
            </div>
            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-200/70">Internship Timeline</p>
              <p className="mt-3 leading-7 text-slate-300">Contributed across UI/UX redesign, frontend implementation, and product presentation improvements during the RapidSkill internship.</p>
            </div>
          </motion.div>
        </article>
      </div>
    </section>
  );
}
