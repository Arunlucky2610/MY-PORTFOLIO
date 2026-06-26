"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";

const CinematicIntro = dynamic(() => import("@/components/CinematicIntro"), { ssr: false });
const CinematicBackground = dynamic(() => import("./CinematicBackground"), { ssr: false });
const AIAssistant = dynamic(() => import("./AIAssistant"), { ssr: false });

export default function CinematicChrome() {
  const [introActive, setIntroActive] = useState(false);

  const updateIntroActive = useCallback((active: boolean) => {
    setIntroActive(active);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.introActive = introActive ? "true" : "false";
  }, [introActive]);

  return (
    <>
      <CinematicIntro onActiveChange={updateIntroActive} videoSrc="/assets/intro.mp4" />
      <CinematicBackground />
      <div className="portfolio-shell">
        <AIAssistant />
      </div>
    </>
  );
}
