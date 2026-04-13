"use client";

import { Suspense, lazy } from "react";
import dynamic from "next/dynamic";

const Canvas3DClient = dynamic(() => import("./Canvas3DClient"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-purple-900/30 via-transparent to-indigo-900/20" />
  ),
});

export default function Canvas3D() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full bg-gradient-to-br from-purple-900/30 via-transparent to-indigo-900/20" />
      }
    >
      <Canvas3DClient />
    </Suspense>
  );
}
