"use client";

import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const performanceData = [
  { name: "2024", leetcode: 45, projects: 8 },
  { name: "2025", leetcode: 110, projects: 12 },
  { name: "2026", leetcode: 120, projects: 15 },
];

const stats = [
  { label: "Total Projects", value: "15" },
  { label: "LeetCode Solved", value: "120+" },
  { label: "GitHub Commits", value: "4.8K" },
  { label: "Hackathons", value: "8" },
];

export default function Dashboard() {
  return (
    <section id="dashboard" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="text-gradient">My Journey: 2024-2026</span>
            </motion.h2>
            <p className="text-gray-400 max-w-2xl">
              From aspiring developer to AI Agent Builder. My growth story showcasing <span className="text-brand-accent font-semibold">120+ LeetCode problems solved</span>, <span className="text-brand-primary font-semibold">7 professional skill categories</span>, and <span className="text-brand-secondary font-semibold">15 full-stack projects</span> spanning AI/ML, Data Science, Web Development, and Cloud Infrastructure. Finalist in Statathon 2025. Passionate about solving complex problems with elegant code.
            </p>
          </div>
          
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
               <div className="w-3 h-3 rounded-full bg-brand-primary"></div>
               <span className="text-sm text-gray-300">LeetCode Problems</span>
            </div>
            <div className="flex items-center gap-2">
               <div className="w-3 h-3 rounded-full bg-brand-accent"></div>
               <span className="text-sm text-gray-300">Projects Built</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Stats Grid */}
          <div className="lg:col-span-1 grid grid-cols-2 lg:grid-cols-1 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass p-6 rounded-2xl flex flex-col justify-center border-l-4 border-l-brand-primary"
              >
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Chart Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-3 glass p-6 sm:p-8 rounded-2xl min-h-[400px] relative overflow-hidden w-full"
          >
            <div className="w-full h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorLeetcode" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorProjects" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                  <XAxis dataKey="name" stroke="#9ca3af" tick={{ fill: '#9ca3af', fontSize: 12 }} axisLine={false} tickLine={false} dy={10} />
                  <YAxis stroke="#9ca3af" tick={{ fill: '#9ca3af', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="leetcode" 
                    stroke="#8b5cf6" 
                    strokeWidth={3} 
                    fillOpacity={1} 
                    fill="url(#colorLeetcode)"
                    isAnimationActive={true}
                    animationDuration={2500}
                    animationEasing="ease-in-out"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="projects" 
                    stroke="#06b6d4" 
                    strokeWidth={3} 
                    fillOpacity={1} 
                    fill="url(#colorProjects)"
                    isAnimationActive={true}
                    animationDuration={2800}
                    animationEasing="ease-in-out"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
