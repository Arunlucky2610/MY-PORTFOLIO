"use client";

import { Canvas, useFrame, RootState } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Environment } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state: RootState) => {
    if (meshRef.current) {
      // Normal rotation
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2 + mousePos.y * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3 + mousePos.x * 0.3;
      
      // Smooth bobbing
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
      
      // Subtle scale pulse
      const scale = 1.5 + Math.sin(state.clock.getElapsedTime() * 0.8) * 0.1;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <>
      {/* Enhanced lighting for depth */}
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#8b5cf6" />
      <pointLight position={[-10, -10, 10]} intensity={1} color="#06b6d4" />
      <pointLight position={[0, 0, 20]} intensity={0.8} color="#3b82f6" />
      
      <ambientLight intensity={0.6} />
      
      <Sphere ref={meshRef} args={[1, 128, 128]} scale={1.5}>
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.15}
          speed={1.5}
          roughness={0.3}
          metalness={0.6}
          emissive="#6d28d9"
          emissiveIntensity={0.5}
          transparent
          opacity={0.85}
        />
      </Sphere>
      
      <Environment preset="city" />
    </>
  );
}

export default function Canvas3DClient() {
  return (
    <Canvas 
      gl={{ 
        antialias: true, 
        powerPreference: "high-performance",
        alpha: true,
      }}
      camera={{ position: [0, 0, 2.5], fov: 75 }}
      style={{
        filter: "drop-shadow(0 0 30px rgba(139, 92, 246, 0.3))",
        background: "transparent",
        display: "block",
      }}
    >
      <AnimatedSphere />
    </Canvas>
  );
}
