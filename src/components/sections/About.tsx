"use client";

import { motion } from "framer-motion";
import { Trophy, Code2, Database, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: <Trophy className="w-8 h-8 text-brand-primary" />,
    title: "Statathon 2025 Finalist",
    description: "National-level finalist at Statathon 2025 - A Data Journey for Viksit Bharat. Competing among top teams in data analytics.",
  },
  {
    icon: <Users className="w-8 h-8 text-cyan-400" />,
    title: "Team Leader",
    description: "Led high-performing teams across multiple national hackathons. Drive innovation, execution, and deliver under pressure.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-brand-accent" />,
    title: "₹50K Seed Funding",
    description: "Secured seed funding for an innovative startup. Successfully pitched to investors and validated product-market fit.",
  },
  {
    icon: <Database className="w-8 h-8 text-brand-secondary" />,
    title: "Full Stack Builder",
    description: "End-to-end development expertise: FastAPI backends, PostgreSQL databases, React frontends, and scalable architectures.",
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
              I'm <strong className="text-white">Arun Sudhaveni</strong> — a developer driven by curiosity, creativity, and the desire to build things that actually matter. I don't just write code — I design <strong className="text-white">solutions</strong>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My work sits at the intersection of <strong className="text-white">web development, data systems, and AI</strong>, where I focus on transforming complex ideas into simple, powerful, and user-friendly products. I enjoy taking messy problems and turning them into clean, scalable systems that people can rely on.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              One of my defining experiences was building <strong className="text-white">Mopsi Data Portal</strong>, a project aimed at making government data accessible and meaningful. It was recognized as a <strong className="text-white">Top 4 finalist in a national-level hackathon</strong> and backed with seed funding — validating not just the idea, but the impact it can create.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed font-semibold mt-4">
              <span className="text-brand-primary">What sets me apart:</span> I learn fast and build faster. I focus on real-world impact, not just theory. I constantly push my limits through hands-on projects. As a <strong className="text-white">team leader in hackathons</strong>, I've honed my ability to lead high-performing teams, drive innovation, and deliver under pressure.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass glass-hover p-6 rounded-2xl flex flex-col gap-4 h-full"
              >
                <div className="p-3 bg-slate-800 rounded-lg w-fit">
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
