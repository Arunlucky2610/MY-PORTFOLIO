"use client";

import { motion } from "framer-motion";
import { Trophy, Code2, Database, Rocket } from "lucide-react";

const highlights = [
  {
    icon: <Trophy className="w-8 h-8 text-brand-primary" />,
    title: "SIH Top 4 Finalist",
    description: "Smart India Hackathon national-level finalist.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-brand-accent" />,
    title: "₹50K Seed Funding",
    description: "Secured initial seed funding for an EdTech startup.",
  },
  {
    icon: <Code2 className="w-8 h-8 text-green-400" />,
    title: "Backend Specialist",
    description: "Architecting scalable systems with FastAPI & PostgreSQL.",
  },
  {
    icon: <Database className="w-8 h-8 text-brand-secondary" />,
    title: "Data Analytics",
    description: "Turning complex data into actionable insights.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 w-full overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row gap-16 items-center"
        >
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">About Me</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a passionate <strong className="text-white">Data Analyst</strong> and <strong className="text-white">Backend Developer</strong> who thrives at the intersection of robust backend architectures and data-driven insights. I love building high-performance systems and turning raw data into meaningful stories.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey involves competing at national levels, building products from scratch, and constantly pushing my limits to create elite-quality software.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass glass-hover p-6 rounded-2xl flex flex-col gap-4"
              >
                <div className="p-3 bg-white/5 rounded-xl w-fit">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
