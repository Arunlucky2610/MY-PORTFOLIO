"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import gsap from "gsap";

// Dynamically import Canvas3D to prevent SSR issues
const Canvas3D = dynamic(() => import("@/components/layout/Canvas3D"), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-to-b from-background/50 to-background" />
});

export default function Hero() {
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (subtitleRef.current) {
      const text = "Full Stack Developer | AI Agent Builder | AI/ML Enthusiast | Data Analyst | Statathon 2025 Finalist";
      subtitleRef.current.innerHTML = "";
      
      const chars = text.split("");
      chars.forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = "0";
        subtitleRef.current?.appendChild(span);
      });

      gsap.to(subtitleRef.current.children, {
        opacity: 1,
        stagger: 0.05,
        delay: 0.5,
        duration: 0.1,
        ease: "power2.inOut",
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-40 pb-20">
      {/* Enhanced Background 3D Canvas */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] z-0 opacity-60 pointer-events-none overflow-hidden rounded-full">
        <Canvas3D />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, y: [0, -15, 0] }}
          transition={{ 
            scale: { duration: 0.8, ease: "easeOut" },
            opacity: { duration: 0.8, ease: "easeOut" },
            y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
          }}
          whileHover={{ scale: 1.1 }}
          className="mb-10 lg:mb-12 relative group cursor-pointer"
        >
          {/* Animated rotating border */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl"
          />
          
          {/* Pulsing glow */}
          <motion.div
            animate={{ 
              boxShadow: [
                "0_0_50px_rgba(139,92,246,0.3)",
                "0_0_100px_rgba(6,182,212,0.6)",
                "0_0_50px_rgba(139,92,246,0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full glow-border p-2 relative"
          >
            <motion.div 
              animate={{ 
                rotate: [0, 2, -2, 0],
                scale: [1, 1.02, 0.98, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-full h-full rounded-full bg-surface-hover flex items-center justify-center text-4xl font-bold bg-cover bg-center overflow-hidden relative border-2 border-transparent group-hover:border-cyan-400 transition-colors duration-300"
            >
              <Image src="/ong-image.png" alt="Arun Sudhaveni" fill className="object-cover" priority sizes="(max-width: 768px) 150px, 200px" />
              {/* Shine effect on hover */}
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Technical Elements - Positioned on sides */}
        {/* Removed for cleaner design */}

        {/* Corner accent elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-32 h-32 border border-purple-400/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20 w-40 h-40 border border-cyan-400/20 rounded-full"
        />

        {/* Featured Tech Icons in Workspace */}
        {[
          { icon: '🐍', label: 'Python', top: '15%', left: '8%', delay: 0 },
          { icon: '⚛️', label: 'React', top: '20%', right: '9%', delay: 0.2 },
          { icon: '🔷', label: 'Django', top: '70%', left: '10%', delay: 0.4 },
          { icon: '🌶️', label: 'Flask', top: '72%', right: '11%', delay: 0.6 },
          { icon: '🟩', label: 'Node.js', top: '42%', right: '6%', delay: 0.8 },
        ].map((tech, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 5 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: tech.delay,
            }}
            whileHover={{
              scale: 1.25,
              boxShadow: "0 0 30px rgba(139, 92, 246, 0.8)",
            }}
            className="absolute group cursor-pointer"
            style={{
              top: tech.top,
              left: tech.left,
              right: tech.right,
            }}
          >
            {/* Glowing circle background */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 15px rgba(139, 92, 246, 0.4)",
                  "0 0 35px rgba(6, 182, 212, 0.7)",
                  "0 0 15px rgba(139, 92, 246, 0.4)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/25 to-cyan-500/25"
              style={{ width: '70px', height: '70px' }}
            />

            {/* Icon container */}
            <div className="relative w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-3xl group-hover:border-brand-primary/70 transition-all duration-300">
              {tech.icon}
            </div>

            {/* Label tooltip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: -35 }}
              transition={{ duration: 0.2 }}
              className="absolute left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-white text-xs font-semibold whitespace-nowrap"
            >
              {tech.label}
            </motion.div>

            {/* Pulse ring */}
            <motion.div
              animate={{
                scale: [1, 1.6, 2.2],
                opacity: [1, 0.5, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: tech.delay,
              }}
              className="absolute inset-0 rounded-full border-2 border-cyan-400/60"
              style={{ width: '70px', height: '70px' }}
            />
          </motion.div>
        ))}

        {/* Animated connecting lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none [filter:drop-shadow(0_0_2px_rgba(139,92,246,0.3))]">
          <motion.circle
            cx="50%"
            cy="50%"
            r="80"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1"
            opacity="0.3"
            animate={{ r: [80, 100, 80] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.circle
            cx="50%"
            cy="50%"
            r="120"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="0.5"
            opacity="0.2"
            animate={{ r: [120, 140, 120] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>

        <motion.h1 
          className="text-5xl md:text-8xl font-extrabold tracking-tight mb-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Arun Sudhaveni
        </motion.h1>

        <p 
          ref={subtitleRef} 
          className="text-xl md:text-2xl text-gray-300 font-medium mb-12"
        />

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 mb-20"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <a href="#projects" className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform duration-300 flex justify-center">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full glass glass-hover text-white font-semibold flex justify-center items-center">
            Contact Me
          </a>
        </motion.div>

        {/* AI Agent Builder Badge - Positioned Below Buttons */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="inline-block">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(139, 92, 246, 0.5)",
                  "0 0 40px rgba(168, 85, 247, 0.8)",
                  "0 0 20px rgba(139, 92, 246, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="px-6 py-3 rounded-full bg-slate-900 border-2 border-slate-700 hover:border-brand-primary/70 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">🤖</span>
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  AI Agent Builder
                </span>
                <span className="ml-2 px-3 py-1 rounded-full bg-purple-500/50 text-sm font-semibold text-white">
                  Featured
                </span>
              </div>
              <p className="text-sm text-gray-300 mt-1">Survey AI Agent • LLM Integration • ML Predictive Analytics</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator down */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-sm text-gray-400 mb-2 uppercase tracking-widest">Scroll</span>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-brand-primary to-transparent"
          animate={{ height: ["0px", "48px", "0px"], y: [0, 24, 48] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
