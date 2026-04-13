"use client";

import { motion } from "framer-motion";
import { Briefcase, Award, Code, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "RapidSkill",
    duration: "Jan 2026 - Present",
    status: "Current",
    description: "Transformed EdTech platform with modern dark-themed UI redesign and architecture optimization. Built responsive React components, optimized API performance, and improved user experience. Led frontend-backend integration for seamless learning experience across 10K+ learners.",
    icon: Briefcase,
    gradient: "from-cyan-500 to-blue-500",
    achievements: ["UI/UX Redesign", "API Optimization", "10K+ Learners"],
  },
  {
    role: "Project Finalist",
    company: "Statathon 2025 (Central Government Project)",
    duration: "July 2025 - Jun 2026",
    status: "Current",
    description: "All India Top 4 finalist developing innovative solution for central government project. Contributing to architecture design and strategic planning. Successfully secured ₹50K seed funding and advancing to national finals in June 3rd week.",
    icon: Award,
    gradient: "from-yellow-500 to-orange-500",
    achievements: ["All India Top 4", "₹50K Seed Funding", "Finals June 2026"],
  },
  {
    role: "Full-Stack Developer",
    company: "EasyLearnova",
    duration: "2024 - 2025",
    status: "Past",
    description: "Developed end-to-end learning platform combining responsive React frontend with robust FastAPI backend. Built real-time course progress tracking, user authentication, and payment integration. Optimized database queries reducing load time by 35%.",
    icon: Code,
    gradient: "from-purple-500 to-pink-500",
    achievements: ["React Frontend", "FastAPI Backend", "35% Performance Gain"],
  },
  {
    role: "Innovation Award Winner",
    company: "ICIC Innovation Event - CMR Technical Campus",
    duration: "Feb 19, 2025",
    status: "Past",
    description: "won 3rd Prize for AI Health Chatbot - An intelligent healthcare assistant powered by NLP and machine learning. Competed with 50+ teams and secured top 3 position. Built a conversational AI that provides health recommendations, symptom analysis, and medical guidance using advanced language models.",
    icon: Award,
    gradient: "from-amber-500 to-yellow-500",
    achievements: ["3rd Prize Winner", "AI Health Chatbot", "50+ Teams", "CMR Technical Campus"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10 w-full overflow-hidden bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">My Journey & Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">2021 to Present - A journey of continuous learning and growth</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Central Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-accent"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-28"
              >
                {/* Timeline Node */}
                <motion.div
                  whileInView={{ scale: [0.8, 1.15, 1] }}
                  transition={{ duration: 0.5 }}
                  className={`absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br ${exp.gradient} p-0.5 flex items-center justify-center shadow-2xl -translate-x-24 top-2`}
                >
                  <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                    <exp.icon size={28} className="text-white" />
                  </div>
                </motion.div>

                {/* Card */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className={`glass p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 group relative overflow-hidden`}
                >
                  {/* Gradient background effect */}
                  <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${exp.gradient} opacity-5 blur-3xl group-hover:opacity-15 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    {/* Status & Duration */}
                    <div className="flex items-center justify-between mb-3">
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        exp.status === 'Current' 
                          ? 'bg-green-900 text-green-300 border border-green-700' 
                          : 'bg-slate-800 text-gray-300 border border-slate-700'
                      }`}>
                        {exp.status}
                      </div>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Calendar size={14} /> {exp.duration}
                      </span>
                    </div>

                    {/* Title and Company */}
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-brand-primary transition-colors">{exp.role}</h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent mb-4`}>{exp.company}</p>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed text-sm">{exp.description}</p>

                    {/* Achievements */}
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, i) => (
                        <span 
                          key={i}
                          className={`px-2 py-1 text-xs font-medium rounded-lg bg-gradient-to-r ${exp.gradient} bg-opacity-20 border border-white/10 text-gray-200 group-hover:border-white/30 transition-colors`}
                        >
                          ✓ {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
