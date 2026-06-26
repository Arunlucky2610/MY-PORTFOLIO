"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function ParticleField() {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const vertices = new Float32Array(1200 * 3);
    for (let i = 0; i < vertices.length; i += 3) {
      vertices[i] = (Math.random() - 0.5) * 12;
      vertices[i + 1] = (Math.random() - 0.5) * 8;
      vertices[i + 2] = (Math.random() - 0.5) * 8;
    }
    return vertices;
  }, []);

  useFrame(({ clock, mouse }) => {
    if (!points.current) return;
    points.current.rotation.y = clock.elapsedTime * 0.045 + mouse.x * 0.12;
    points.current.rotation.x = mouse.y * 0.08;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.018} color="#7dd3fc" transparent opacity={0.72} sizeAttenuation depthWrite={false} />
    </points>
  );
}

export default function CinematicBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-80">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 1.5]}>
        <color attach="background" args={["#02030a"]} />
        <fog attach="fog" args={["#02030a", 5, 13]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[-3, 2, 4]} color="#fb923c" intensity={3} />
        <pointLight position={[4, -1, 4]} color="#38bdf8" intensity={3.4} />
        <ParticleField />
      </Canvas>
    </div>
  );
}

