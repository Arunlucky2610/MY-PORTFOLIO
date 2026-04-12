"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls, Environment } from "@react-three/drei";
import { gsap } from "gsap";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.5}>
      <MeshDistortMaterial
        color="#8b5cf6"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

export default function Hero() {
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (subtitleRef.current) {
      const text = "Data Analyst | Backend Developer | Hackathon Finalist";
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
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background 3D Canvas */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          <Environment preset="city" />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
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
                rotation: [0, 2, -2, 0],
                scale: [1, 1.02, 0.98, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-full h-full rounded-full bg-surface-hover flex items-center justify-center text-4xl font-bold bg-cover bg-center overflow-hidden relative border-2 border-transparent group-hover:border-cyan-400 transition-colors duration-300"
            >
              <Image src="/ong-image.png" alt="Arun Sudhaveni" fill className="object-cover" priority />
              {/* Shine effect on hover */}
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
              />
            </motion.div>
          </motion.div>
        </motion.div>

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
          className="text-xl md:text-2xl text-gray-300 font-medium h-8 mb-10"
        />

        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
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
