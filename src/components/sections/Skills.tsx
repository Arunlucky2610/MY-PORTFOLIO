"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Backend Development",
    icon: "⚡",
    bgGradient: "from-orange-600/20 via-orange-500/10 to-transparent",
    borderColor: "from-orange-500 to-red-500",
    skills: ["FastAPI", "Node.js", "Express.js", "REST APIs", "Microservices"],
    proficiency: 95,
  },
  {
    title: "Databases",
    icon: "🗄️",
    bgGradient: "from-cyan-600/20 via-cyan-500/10 to-transparent",
    borderColor: "from-cyan-500 to-blue-500",
    skills: ["PostgreSQL", "MongoDB", "Redis", "SQL", "Database Design"],
    proficiency: 88,
  },
  {
    title: "Programming Languages",
    icon: "🐍",
    bgGradient: "from-purple-600/20 via-purple-500/10 to-transparent",
    borderColor: "from-purple-500 to-pink-500",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "SQL"],
    proficiency: 90,
  },
  {
    title: "Data Structures & Algorithms",
    icon: "🔗",
    bgGradient: "from-rose-600/20 via-rose-500/10 to-transparent",
    borderColor: "from-rose-500 to-pink-500",
    skills: ["100+ LeetCode Problems", "DSA Fundamentals", "Arrays & Strings", "Trees & Graphs", "Dynamic Programming"],
    proficiency: 82,
  },
  {
    title: "Frontend Development",
    icon: "⚛️",
    bgGradient: "from-blue-600/20 via-blue-500/10 to-transparent",
    borderColor: "from-blue-500 to-cyan-500",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "UI Design"],
    proficiency: 85,
  },
  {
    title: "Data & Analytics",
    icon: "📊",
    bgGradient: "from-green-600/20 via-green-500/10 to-transparent",
    borderColor: "from-green-500 to-emerald-500",
    skills: ["Data Analysis", "Python Data Tools", "Visualization", "Statistical Analysis", "Insights"],
    proficiency: 90,
  },
  {
    title: "DevOps & Tools",
    icon: "🐳",
    bgGradient: "from-indigo-600/20 via-indigo-500/10 to-transparent",
    borderColor: "from-indigo-500 to-purple-500",
    skills: ["Docker", "Git", "GitHub", "CI/CD", "Linux"],
    proficiency: 82,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative z-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-brand-primary/10 to-brand-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-brand-accent/10 to-brand-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-brand-primary/50 bg-brand-primary/10">
            <span className="text-sm font-semibold text-brand-accent">Professional Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">Technical Mastery</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A proven track record in full-stack development, scalable architectures, and data-driven solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group relative h-full"
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur p-[1px]`}>
                <div className="absolute inset-0 rounded-2xl bg-background" />
              </div>

              {/* Card */}
              <div className={`relative h-full p-8 rounded-2xl bg-slate-900 border border-slate-700 group-hover:border-brand-primary/50 transition-all duration-500 overflow-hidden`}>
                {/* Icon */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"
                >
                  {category.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-accent transition-colors duration-300">
                  {category.title}
                </h3>

                {/* Proficiency Bar */}
                <div className="mb-6 pt-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-gray-400">Proficiency</span>
                    <span className="text-xs font-bold text-brand-accent">{category.proficiency}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${category.borderColor} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${category.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: idx * 0.1 }}
                    />
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + skillIdx * 0.04 }}
                      className="flex items-center gap-3 text-gray-300 group-hover:text-gray-100 transition-colors"
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent"
                        whileHover={{ scale: 1.5 }}
                      />
                      <span className="text-sm font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-20 border-t border-white/10"
        >
          {[
            { number: "100+", label: "LeetCode Problems Solved" },
            { number: "6", label: "Tech Categories" },
            { number: "Passionate", label: "Problem Solver" },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -5 }}
              className="relative p-8 rounded-2xl bg-slate-900 border border-slate-700 text-center group hover:border-brand-primary/50 transition-all duration-300"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl font-bold text-gradient mb-3"
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
