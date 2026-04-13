"use client";

import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";
import Image from "next/image";

type ProjectType = {
  title: string;
  description: string;
  image?: string;
  fullDetails?: {
    problem: string;
    solution: string;
    impact: string;
  };
  highlights?: string[];
  features?: string[];
  tags: string[];
  github: string;
  live: string;
  featured: boolean;
};

const projects: ProjectType[] = [
  {
    title: "MoSPI Data Portal (Mopsi)",
    description: "AI-powered intelligent data platform serving Ministry of Statistics & Programme Implementation. Beyond dashboards—built a Survey AI Agent that doesn't just provide data access, it **understands, predicts, and recommends**. Users ask in plain English, LLMs convert to SQL, ML models analyze patterns and detect anomalies. Processes 415K+ government records with conversational AI querying, predictive analytics, and autonomous insights generation.",
    image: "/mospi-portal.png",
    fullDetails: {
      problem: "Government statistical data was fragmented and inaccessible. Manual analysis required hours of SQL queries. Real challenge: extracting meaning, patterns, and future insights from massive survey datasets to guide policy decisions.",
      solution: "Built a Production AI System Architecture: Intelligent Survey Agent powered by LLMs for natural language understanding + ML prediction models for trend forecasting. Combines FastAPI backend, PostgreSQL data warehouse, and React frontend with conversational AI interface. Automated data-to-insights pipeline with multi-dimensional filtering, role-based access, and real-time analytics.",
      impact: "Reduced analysis time from **hours to seconds**. Researchers, policymakers, and citizens now ask questions in plain English and get instant visual insights + AI-powered recommendations. 100K+ dataset integration enables data-driven decision making at scale.",
    },
    highlights: [
      "🤖 AI Survey Agent (LLM-powered natural language querying)",
      "📊 415K+ Government Records with ML Analysis",
      "🧠 Predictive Models for Trend Forecasting",
      "🔍 Pattern Detection & Anomaly Identification",
      "💡 Autonomous Insights & Recommendations",
      "⚡ Seconds vs Hours: From SQL to Answers",
      "🎯 Multi-dimensional Filtering & Analytics"
    ],
    features: [
      "Conversational AI Engine - Ask questions in plain English, AI generates SQL queries automatically",
      "LLM-powered Intent Understanding - Uses Large Language Models to understand user context and intent",
      "Real-time Predictive Analytics - ML models forecast future trends from historical data",
      "Pattern & Anomaly Detection - Automatically identifies insights, outliers, and problem areas in datasets",
      "Intelligent Recommendations - AI suggests improvements and actionable solutions based on data analysis",
      "Dynamic Visualization & Insights - Auto-generates relevant charts with AI-powered explanations",
      "Structured data ingestion with ETL pipelines from CSV/Excel datasets",
      "RESTful API with advanced query capabilities and multi-dimensional filtering",
      "Role-based access control (Public, Researcher, Premium) with JWT authentication",
      "Rate limiting, usage metering, and comprehensive OpenAPI/Swagger documentation",
      "Sub-millisecond query response times with optimized PostgreSQL indexing",
      "Scalable architecture handling 415K+ individual records with horizontal scaling"
    ],
    tags: ["FastAPI", "PostgreSQL", "React", "LLM APIs", "ML Models", "Next.js", "Recharts", "SQLAlchemy", "JWT Auth", "AI/ML", "Data Science"],
    github: "https://github.com/Chandu2815/STATAHON-PROJECT",
    live: "#",
    featured: true,
  },
  {
    title: "Ancient Text Translational Portal",
    description: "Full-stack web application that translates ancient Sanskrit text into multiple Indian languages (Telugu, English, Hindi, Kannada, Tamil, Malayalam) using AI-powered translation technologies. Features secure authentication, OCR image text extraction, PDF/document uploads, and complete translation history.",
    image: "/IMAGE.jpeg",
    tags: ["FastAPI", "React", "Python", "SQLAlchemy", "JWT Auth", "TesseractOCR", "PostgreSQL", "Translation APIs"],
    github: "https://github.com/Arunlucky2610/AI-Powered-Sanskrit-Story-Visual-Translator",
    live: "#",
    featured: false,
  },
  {
    title: "RapidSkill",
    description: "Modern EdTech platform redesign transforming the user experience with a dark-themed UI, improved visual hierarchy, and clear user flow. Focused on guiding users through the learning journey with intuitive navigation and strong call-to-actions. Demonstrates UX analysis, product-first design, and conversion optimization.",
    image: "/RapidSkill.png",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://rapidskill.in/",
    live: "https://rapidskill.in/",
    featured: false,
  },
  {
    title: "Personal Portfolio",
    description: "Premium full-stack portfolio website showcasing my journey as an AI Agent Builder and Full-Stack Developer. Interactive timeline spanning 2024-2026 with animated data visualizations, project showcase with GitHub integration, professional experience timeline, and comprehensive skill matrix. Built with Next.js, Framer Motion, and Recharts for engaging animations and responsive design.",
    image: "/Portfolio.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Recharts", "Vercel"],
    github: "#",
    live: "localhost:3000",
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
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
              className={`glass p-8 rounded-2xl relative group overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                project.featured ? "md:col-span-2 flex flex-col md:flex-row gap-8 items-center" : "flex flex-col flex-grow"
              }`}
            >
              {/* Optional: Project Image / Abstract background element */}
              <div className={`rounded-xl overflow-hidden bg-surface-hover relative ${project.featured ? 'md:w-1/2 w-full aspect-video' : 'w-full aspect-video mb-6'}`}>
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-surface to-surface-hover flex items-center justify-center relative">
                     <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-secondary via-background to-background" />
                     <h3 className="text-2xl font-bold text-white/50">{project.title}</h3>
                  </div>
                )}
              </div>

              <div className={project.featured ? 'md:w-1/2 w-full flex flex-col h-full justify-center' : 'flex flex-col flex-grow'}>
                 {project.featured && (
                    <span className="text-brand-accent font-semibold tracking-wider text-sm mb-2">🎯 Statathon 2025 Finalist (Final Round)</span>
                 )}
                 <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors">{project.title}</h3>
                 <p className="text-gray-400 mb-6 flex-grow leading-relaxed text-sm">{project.description}</p>
                 
                 {project.highlights && (
                    <div className="mb-6 space-y-2">
                      {project.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-2 text-sm text-gray-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                 )}
                 
                 <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800 text-gray-300 border border-slate-700 hover:border-brand-primary/70 transition-colors">
                        {tag}
                      </span>
                    ))}
                 </div>

                 <div className="flex gap-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-surface hover:bg-surface-hover rounded-full transition-colors text-white" 
                      aria-label="Source Code"
                    >
                      <Code size={20} />
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-surface hover:bg-surface-hover rounded-full transition-colors text-white" 
                      aria-label="Live Demo"
                    >
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
