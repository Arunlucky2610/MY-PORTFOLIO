"use client";

import { Suspense, lazy } from "react";
import dynamic from "next/dynamic";

const Canvas3DClient = dynamic(() => import("./Canvas3DClient"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full" />
  ),
});

export default function Canvas3D() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full" />
      }
    >
      <Canvas3DClient />
    </Suspense>
  );
}
