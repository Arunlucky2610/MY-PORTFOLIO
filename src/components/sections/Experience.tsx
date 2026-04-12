"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Backend & Data Engineer",
    company: "EasyLearnova",
    duration: "2023 - Present",
    description: "Architected scalable backend infrastructure and integrated complex data pipelines for a fast-growing EdTech startup. Raised ₹50K seed funding.",
  },
  {
    role: "Hackathon Finalist",
    company: "Smart India Hackathon",
    duration: "2022",
    description: "Ranked Top 4 nationally. Developed an innovative solution for real-time analytics reducing latency by 40%.",
  },
  {
    role: "Open Source Contributor",
    company: "100 Days of Code",
    duration: "2021",
    description: "Committed to 100 days of continuous backend and ML coding, contributing to various Python repositories.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10 w-full overflow-hidden bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Journey & Experience</span>
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:pl-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 relative pl-8 md:pl-0 md:w-1/2 md:odd:pr-12 md:even:pl-12 md:odd:ml-auto md:even:mr-auto"
            >
              <div 
                className={`absolute w-5 h-5 bg-background border-4 border-brand-primary rounded-full top-0 md:top-1/2 shadow-[0_0_15px_rgba(139,92,246,0.6)] ${
                  index % 2 === 0 ? "md:-left-2.5 -left-[27px]" : "md:-left-2.5 -left-[27px]"
                } md:-mt-2.5`} 
              />
              
              <div className="glass p-6 rounded-2xl relative custom-glow group-hover:scale-105 transition-transform">
                 <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                 <div className="text-brand-accent font-medium mb-3 flex items-center justify-between">
                    <span>{exp.company}</span>
                    <span className="text-sm text-gray-500 bg-white/5 px-2 py-1 rounded">{exp.duration}</span>
                 </div>
                 <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[2px] bg-white/10 -translate-x-1/2"></div>
        </div>
      </div>
    </section>
  );
}
