"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Lock } from "lucide-react";

const cards = [
  { id: 1, title: "MOSPI", status: "LIVE", angle: 0, distance: 160 },
  { id: 2, title: "RapidSkill", status: "ACTIVE", angle: 51, distance: 180 },
  { id: 3, title: "MNRG", status: "LAUNCHING 2026", angle: 102, distance: 160 },
  { id: 4, title: "Student Intelligence", status: "ANALYZING", angle: 154, distance: 180 },
  { id: 5, title: "Career Prediction", status: "SYNCING", angle: 205, distance: 160 },
  { id: 6, title: "AI Analytics", status: "PROCESSING", angle: 257, distance: 180 },
  { id: 7, title: "████ CLASSIFIED ████", status: "Access Restricted", angle: 308, distance: 170, restricted: true },
];

function Card({ card, containerRef }: { card: typeof cards[0]; containerRef: React.RefObject<HTMLDivElement> }) {
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useMotionTemplate`${mouseY}deg`, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useMotionTemplate`${mouseX}deg`, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x * 0.05); // Tilt intensity
    mouseY.set(-(y * 0.05));
  };

  const rad = (card.angle * Math.PI) / 180;
  // base positions
  const baseX = Math.cos(rad) * card.distance;
  const baseY = Math.sin(rad) * card.distance;

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
      initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        x: baseX,
        y: baseY,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 1.5,
        delay: card.id * 0.1,
        ease: [0.16, 1, 0.3, 1], // expo out
      }}
      style={{
        rotateX,
        rotateY,
        perspective: 1000,
        x: baseX,
        y: baseY,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotateZ: [0, Math.sin(card.id) * 2, 0],
        }}
        transition={{
          duration: 4 + (card.id % 3),
          repeat: Infinity,
          ease: "easeInOut",
          delay: card.id * 0.2,
        }}
        className={`group relative flex w-48 flex-col items-center justify-center gap-1 overflow-hidden rounded-2xl border bg-black/40 p-4 shadow-2xl backdrop-blur-md transition-all duration-300 ${
          hovered ? "scale-110 border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.2)]" : "border-white/10"
        } ${card.restricted ? "border-red-500/30" : ""}`}
      >
        {/* Glow effect on hover */}
        <div
          className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
            card.restricted
              ? "bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.2),transparent_70%)]"
              : "bg-[radial-gradient(circle_at_center,rgba(125,211,252,0.15),transparent_70%)]"
          }`}
        />

        {card.restricted && (
          <Lock size={14} className="mb-1 text-red-500/80" />
        )}
        <h4
          className={`text-center text-sm font-black uppercase tracking-[0.1em] ${
            card.restricted ? "text-red-500/80" : "text-white"
          }`}
        >
          {card.title}
        </h4>

        {hovered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className={`mt-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest ${
              card.restricted ? "text-red-400" : "text-sky-300"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span
                className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${
                  card.restricted ? "bg-red-400" : "bg-sky-400"
                }`}
              />
              <span
                className={`relative inline-flex h-2 w-2 rounded-full ${
                  card.restricted ? "bg-red-500" : "bg-sky-500"
                }`}
              />
            </span>
            {card.status}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function MissionControl() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex h-[28rem] w-full items-center justify-center overflow-hidden rounded-[2.25rem] border border-white/10 bg-black shadow-2xl lg:min-h-[38rem]"
      style={{ perspective: 1200 }}
    >
      {/* Background Deep Space Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,1)_0%,rgba(0,0,0,1)_100%)]" />

      {/* Holographic Grid */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(125, 211, 252, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(125, 211, 252, 0.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          transform: "rotateX(60deg) scale(2)",
          transformOrigin: "center",
        }}
      />

      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[100px]" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-purple-500/15 blur-[100px]" />
      <div className="absolute top-1/2 left-0 h-64 w-64 -translate-y-1/2 rounded-full bg-cyan-500/15 blur-[100px]" />

      {/* Scanning Light */}
      <motion.div
        animate={{ y: ["-100%", "200%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent blur-xl"
      />

      {/* Moving Particles */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Subtle Light Trails (SVG) */}
      <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.ellipse
          cx="50"
          cy="50"
          rx="40"
          ry="15"
          fill="none"
          stroke="rgba(125,211,252,0.5)"
          strokeWidth="0.2"
          initial={{ strokeDasharray: "0 100" }}
          animate={{ strokeDasharray: ["0 100", "100 0"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "center", transform: "rotate(20deg)" }}
        />
        <motion.ellipse
          cx="50"
          cy="50"
          rx="35"
          ry="25"
          fill="none"
          stroke="rgba(192,132,252,0.5)"
          strokeWidth="0.2"
          initial={{ strokeDasharray: "0 100" }}
          animate={{ strokeDasharray: ["0 100", "100 0"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", direction: "reverse" }}
          style={{ transformOrigin: "center", transform: "rotate(-30deg)" }}
        />
      </svg>

      {/* Holographic AI Core */}
      <div className="absolute top-1/2 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        {/* Core Glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute h-40 w-40 rounded-full bg-cyan-400/30 blur-[40px]"
        />
        
        {/* Outer Ring 1 */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ rotate: { duration: 10, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute h-48 w-48 rounded-full border border-cyan-500/30 border-t-cyan-400/80 border-b-cyan-400/80"
        />

        {/* Outer Ring 2 */}
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.1, 1] }}
          transition={{ rotate: { duration: 15, repeat: Infinity, ease: "linear" }, scale: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute h-56 w-56 rounded-full border border-purple-500/20 border-r-purple-400/60 border-l-purple-400/60"
        />

        {/* Central Orb */}
        <motion.div
          className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-cyan-300/50 bg-black/50 shadow-[0_0_50px_rgba(34,211,238,0.5)] backdrop-blur-xl"
        >
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute h-16 w-16 rounded-full bg-cyan-400/40 blur-xl"
          />
          <span className="relative z-10 text-xs font-black uppercase tracking-[0.2em] text-cyan-100">
            SYSTEM
            <br />
            ONLINE
          </span>
        </motion.div>
      </div>

      {/* Floating Cards */}
      {cards.map((card) => (
        <Card key={card.id} card={card} containerRef={containerRef} />
      ))}
    </div>
  );
}
