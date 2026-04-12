"use client";

import { motion } from "framer-motion";
import { Brain, Zap, TrendingUp, MessageSquare, Lightbulb, BarChart3 } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "Conversational AI",
    description: "Ask questions in plain English. LLMs convert natural language to intelligent SQL queries automatically.",
    color: "from-purple-500 to-violet-600"
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "ML models forecast future trends and patterns from historical government data with high accuracy.",
    color: "from-cyan-500 to-blue-600"
  },
  {
    icon: Lightbulb,
    title: "Smart Recommendations",
    description: "AI suggests actionable improvements and solutions based on deep data analysis.",
    color: "from-amber-500 to-orange-600"
  },
  {
    icon: BarChart3,
    title: "Anomaly Detection",
    description: "Automatically identifies outliers, problems, and unusual patterns in datasets.",
    color: "from-rose-500 to-red-600"
  },
  {
    icon: MessageSquare,
    title: "Intent Understanding",
    description: "Advanced NLP understands complex user context and generates contextually relevant responses.",
    color: "from-emerald-500 to-green-600"
  },
  {
    icon: Zap,
    title: "Real-time Insights",
    description: "Instant analysis and visualization. From query to answer in seconds, not hours.",
    color: "from-yellow-500 to-lime-600"
  },
];

const impact = [
  { before: "Hours", after: "Seconds", metric: "Analysis Time" },
  { before: "Manual", after: "Automated", metric: "Data Processing" },
  { before: "Limited", after: "AI-Powered", metric: "Insights" },
  { before: "Static", after: "Predictive", metric: "Analytics" },
];

export default function AIAgent() {
  return (
    <section id="ai-agent" className="py-24 relative z-10 w-full">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/50 text-purple-300 text-sm font-semibold">
              🤖 AI-Powered Intelligence
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-gradient">Survey AI Agent</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl leading-relaxed"
          >
            Built an intelligent system powered by LLMs and machine learning that transforms how we analyze government data. 
            It doesn't just answer queries—it <span className="text-cyan-400 font-semibold">understands, learns, predicts, and recommends.</span>
          </motion.p>
        </div>

        {/* Impact Transformation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {impact.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-2xl text-center border border-white/10 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="text-sm text-gray-400 mb-2">{item.metric}</div>
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="text-lg text-gray-400">{item.before}</span>
                <span className="text-purple-400">→</span>
                <span className="text-xl font-bold text-gradient">{item.after}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Capabilities */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-12 text-center"
          >
            Core <span className="text-gradient">AI Capabilities</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group glass p-8 rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-300"
                >
                  {/* Icon with gradient background */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${cap.color} p-3 mb-6 flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                  >
                    <Icon size={28} />
                  </motion.div>

                  <h4 className="text-lg font-bold text-white mb-3">{cap.title}</h4>
                  <p className="text-gray-400 leading-relaxed text-sm">{cap.description}</p>

                  {/* Decorative accent */}
                  <div className={`mt-4 h-1 w-0 group-hover:w-12 bg-gradient-to-r ${cap.color} rounded-full transition-all duration-300`} />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 glass p-8 rounded-3xl border border-white/10"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="text-2xl">⚙️</span>
            Technology Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {["FastAPI", "PostgreSQL", "LLM APIs", "ML Models", "React/Next.js", "Recharts", "NLP", "Python", "Data Science"].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-sm font-semibold text-gray-200 hover:border-cyan-400/60 transition-all duration-300 cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 mb-6">
            Want to learn more about the AI Agent architecture?
          </p>
          <a
            href="#projects"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            View Full Project →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
