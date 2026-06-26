"use client";

import { motion } from "framer-motion";
import { ArrowRight, Trophy, Code, Award, Target, Rocket, Briefcase, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Experience() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="experience" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020617] px-6 py-28">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,23,42,0.8)_0%,rgba(0,0,0,1)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(56,189,248,0.06),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,0.06),transparent_40%)]" />
      <div className="absolute inset-0 cinematic-grid opacity-10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="mb-4 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-cyan-400/80">
            <Target size={16} /> Mission Logs
          </p>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
            Career <span className="text-gradient-cinema">Journey</span>
          </h2>
        </div>

        {/* Mission Board Grid */}
        <div className="grid gap-6 lg:grid-cols-3 lg:grid-rows-[auto_auto]">
          
          {/* Main Hero: Statathon (Left/Center, spans 2 columns, 2 rows) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHovered("statathon")}
            onMouseLeave={() => setHovered(null)}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-cyan-500/40 hover:bg-cyan-950/20 hover:shadow-[0_0_50px_rgba(34,211,238,0.15)] lg:col-span-2 lg:row-span-2 lg:p-12"
          >
            {/* Animated Glow & Scanline */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent blur-xl"
            />
            
            {/* Badges Row */}
            <div className="relative z-10 mb-8 flex flex-wrap gap-3">
              <span className="flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                <Trophy size={14} /> Top Finalist
              </span>
              <span className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-400">
                <Code size={14} /> Gov Data AI
              </span>
              <span className="flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-purple-400">
                <Award size={14} /> National Level
              </span>
            </div>

            <div className="relative z-10 mb-12">
              <h3 className="text-[2.5rem] font-black leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Statathon 2025 <br />
                <span className="text-gradient-cinema">National Finalist</span>
              </h3>
              <p className="mt-6 max-w-2xl text-xl font-medium leading-relaxed text-slate-300 sm:text-2xl">
                Built <span className="font-bold text-white">Survey AI</span> for MoSPI data intelligence.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
                Engineered an LLM-powered analytics pipeline that transformed hundreds of thousands of government survey records into visual insights using natural language processing, reaching the top finals at the national level.
              </p>
            </div>

            <div className="relative z-10 mt-auto">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">Core Impact Metrics</p>
              <div className="flex flex-wrap gap-3">
                {["AI Analytics", "FastAPI", "PostgreSQL", "India Data", "Dashboard"].map((metric) => (
                  <span
                    key={metric}
                    className="rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-slate-300 backdrop-blur-md transition-colors group-hover:border-cyan-500/30 group-hover:bg-cyan-950/40 group-hover:text-cyan-100"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Decorative Corner Elements */}
            <div className="absolute right-6 top-6 h-16 w-16 opacity-30">
              <div className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-cyan-400" />
            </div>
            <div className="absolute bottom-6 left-6 h-16 w-16 opacity-30">
              <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-cyan-400" />
            </div>
          </motion.div>

          {/* Secondary: RapidSkill Promotion (Top Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 shadow-xl backdrop-blur-2xl transition-all duration-500 hover:border-purple-500/40 hover:bg-purple-950/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            
            <div className="relative z-10 mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-purple-400 transition-colors group-hover:bg-purple-500/20">
                <Briefcase size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Career Advancement</p>
                <h4 className="text-xl font-bold text-white">RapidSkill</h4>
              </div>
            </div>

            <div className="relative z-10 flex flex-col gap-4">
              <div className="rounded-xl border border-white/5 bg-black/40 p-4 transition-colors group-hover:border-purple-500/20">
                <p className="text-xs uppercase tracking-widest text-slate-400">Started As</p>
                <p className="mt-1 text-lg font-bold text-slate-300">Full Stack Intern</p>
              </div>
              
              <div className="flex justify-center text-purple-400 opacity-50 group-hover:opacity-100 group-hover:animate-pulse">
                <ArrowRight size={24} className="rotate-90 sm:rotate-0" />
              </div>
              
              <div className="rounded-xl border border-purple-500/30 bg-purple-500/10 p-4 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                <p className="text-xs uppercase tracking-widest text-purple-300">Promoted To</p>
                <p className="mt-1 text-lg font-bold text-white">Full Stack Developer</p>
              </div>
            </div>
          </motion.div>

          {/* Tertiary: Achievement Badges (Bottom Right) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 shadow-xl backdrop-blur-2xl transition-all duration-500 hover:border-blue-500/40 hover:bg-blue-950/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            
            <div className="relative z-10 mb-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Milestones</p>
              <h4 className="mt-1 text-xl font-bold text-white">Achievement Badges</h4>
            </div>

            <div className="relative z-10 grid gap-3">
              {[
                { label: "15+ Projects Shipped", icon: Rocket, color: "text-blue-400", bg: "bg-blue-500/10" },
                { label: "8 Hackathons Joined", icon: Code, color: "text-emerald-400", bg: "bg-emerald-500/10" },
                { label: "3 Major Awards", icon: Trophy, color: "text-amber-400", bg: "bg-amber-500/10" },
              ].map((badge) => {
                const Icon = badge.icon;
                return (
                  <div key={badge.label} className="flex items-center gap-4 rounded-xl border border-white/5 bg-black/40 p-3 transition-colors group-hover:border-white/10">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${badge.bg} ${badge.color}`}>
                      <Icon size={18} />
                    </div>
                    <p className="text-sm font-semibold text-slate-200">{badge.label}</p>
                  </div>
                );
              })}
            </div>
            
            <div className="relative z-10 mt-auto pt-6 flex items-center justify-end text-xs font-bold uppercase tracking-widest text-blue-400 opacity-0 transition-opacity group-hover:opacity-100">
              View Records <ChevronRight size={14} className="ml-1" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
