"use client";

import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const performanceData = [
  { name: "2020", commits: 120, projects: 2 },
  { name: "2021", commits: 350, projects: 5 },
  { name: "2022", commits: 680, projects: 12 },
  { name: "2023", commits: 1200, projects: 18 },
  { name: "2024", commits: 2500, projects: 24 },
];

const stats = [
  { label: "Total Projects", value: "24+" },
  { label: "Hackathons", value: "8" },
  { label: "GitHub Commits", value: "4.8K" },
  { label: "Cups of Coffee", value: "∞" },
];

export default function Dashboard() {
  return (
    <section id="dashboard" className="py-24 relative z-10 bg-surface/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="text-gradient">Data-Driven Developer</span>
            </motion.h2>
            <p className="text-gray-400 max-w-xl">
              Numbers that speak. A visual representation of my continuous growth and open-source contributions over the years.
            </p>
          </div>
          
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
               <div className="w-3 h-3 rounded-full bg-brand-primary"></div>
               <span className="text-sm text-gray-300">Commits</span>
            </div>
            <div className="flex items-center gap-2">
               <div className="w-3 h-3 rounded-full bg-brand-accent"></div>
               <span className="text-sm text-gray-300">Projects</span>
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
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 glass p-6 sm:p-8 rounded-3xl h-[400px] flex items-center justify-center relative overflow-hidden"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorCommits" x1="0" y1="0" x2="0" y2="1">
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
                <Area type="monotone" dataKey="commits" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorCommits)" />
                <Area type="monotone" dataKey="projects" stroke="#06b6d4" strokeWidth={3} fillOpacity={1} fill="url(#colorProjects)" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
