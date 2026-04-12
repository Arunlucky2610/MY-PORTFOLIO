"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Programming",
    items: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
      { name: "JavaScript/TypeScript", level: 80 },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "FastAPI", level: 95 },
      { name: "PostgreSQL", level: 85 },
      { name: "Node.js", level: 75 },
    ],
  },
  {
    category: "Data & ML",
    items: [
      { name: "Data Analytics", level: 90 },
      { name: "Machine Learning Basics", level: 70 },
      { name: "Data Visualization", level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 bg-surface/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-gradient">Technical Arsenal</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A blend of solid backend architecture capability combined with sophisticated data manipulation skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillsData.map((skillGroup, groupIdx) => (
            <div key={skillGroup.category} className="space-y-8">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIdx * 0.1 }}
                className="text-2xl font-semibold text-white border-b border-white/10 pb-4"
              >
                {skillGroup.category}
              </motion.h3>
              
              <div className="space-y-6">
                {skillGroup.items.map((skill, idx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-sm text-brand-accent">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-surface-hover rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-brand-primary to-brand-accent rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
