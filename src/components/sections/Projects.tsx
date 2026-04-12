"use client";

import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "MoSPI Data Portal",
    description: "An advanced data visualization and analytics portal. Provides seamless APIs and beautiful representation of critical government statistics.",
    tags: ["FastAPI", "React", "PostgreSQL", "Recharts"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "AI Resume Screener",
    description: "Machine learning based tool to parse and rank resumes against specific job descriptions efficiently.",
    tags: ["Python", "NLP", "Flask"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "FinTech Transaction Engine",
    description: "A highly-scalable ledger system for secure and high-throughput financial transactions.",
    tags: ["Node.js", "Redis", "TypeScript"],
    github: "#",
    live: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10 w-full">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-gradient">Featured Work</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass p-8 rounded-3xl relative group overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-primary/20 ${
                project.featured ? "md:col-span-2 flex flex-col md:flex-row gap-8 items-center" : "flex flex-col flex-grow"
              }`}
            >
              {/* Optional: Project Image / Abstract background element */}
              <div className={`rounded-xl overflow-hidden bg-surface-hover ${project.featured ? 'md:w-1/2 w-full aspect-video' : 'w-full aspect-video mb-6'}`}>
                {/* Fallback abstract gradient pattern if no image */}
                <div className="w-full h-full bg-gradient-to-br from-surface to-surface-hover flex items-center justify-center relative">
                   <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-secondary via-background to-background" />
                   <h3 className="text-2xl font-bold text-white/50">{project.title}</h3>
                </div>
              </div>

              <div className={project.featured ? 'md:w-1/2 w-full flex flex-col h-full justify-center' : 'flex flex-col flex-grow'}>
                 {project.featured && (
                    <span className="text-brand-accent font-semibold tracking-wider text-sm mb-2">Featured Project</span>
                 )}
                 <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors">{project.title}</h3>
                 <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
                 
                 <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/10">
                        {tag}
                      </span>
                    ))}
                 </div>

                 <div className="flex gap-4">
                    <a href={project.github} className="p-2 bg-surface hover:bg-surface-hover rounded-full transition-colors text-white" aria-label="Source Code">
                      <Code size={20} />
                    </a>
                    <a href={project.live} className="p-2 bg-surface hover:bg-surface-hover rounded-full transition-colors text-white" aria-label="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
