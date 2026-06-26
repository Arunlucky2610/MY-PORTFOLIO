"use client";

import { AnimatePresence, motion } from "framer-motion";
// video controls removed — intro plays and ends automatically
import { useCallback, useEffect, useRef, useState } from "react";

type CinematicIntroProps = {
  onActiveChange?: (active: boolean) => void;
  videoSrc?: string;
};

export const INTRO_SEEN_KEY = "arun-portfolio-entry-flow-v2-seen";
const REPLAY_EVENT = "portfolio:replay-intro";
const REPLAY_GLOBAL = "__replayArunCinematicIntro";
const loadingLines = ["Initializing Arun AI Portfolio...", "Loading Projects...", "Preparing Experience..."];

type IntroPhase = "loading" | "video";

export default function CinematicIntro({ onActiveChange, videoSrc = "/assets/intro.mp4" }: CinematicIntroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState<IntroPhase>("loading");
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [muted, setMuted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const finishIntro = useCallback(() => {
    sessionStorage.setItem(INTRO_SEEN_KEY, "true");
    setVisible(false);
    setPlaying(false);
  }, []);

  const replayIntro = useCallback(() => {
    sessionStorage.removeItem(INTRO_SEEN_KEY);
    setFailed(false);
    setReady(false);
    setMuted(false);
    setPlaying(false);
    setPhase("video");
    setVisible(true);
    requestAnimationFrame(() => {
      const video = videoRef.current;
      if (!video) return;
      video.currentTime = 0;
      video.muted = false;
      void video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    });
  }, []);

  useEffect(() => {
    setVisible(sessionStorage.getItem(INTRO_SEEN_KEY) !== "true");
    (window as typeof window & Record<typeof REPLAY_GLOBAL, () => void>)[REPLAY_GLOBAL] = replayIntro;
    window.addEventListener(REPLAY_EVENT, replayIntro);
    return () => {
      delete (window as typeof window & Partial<Record<typeof REPLAY_GLOBAL, () => void>>)[REPLAY_GLOBAL];
      window.removeEventListener(REPLAY_EVENT, replayIntro);
    };
  }, [replayIntro]);

  useEffect(() => {
    onActiveChange?.(visible);
  }, [onActiveChange, visible]);

  useEffect(() => {
    const video = videoRef.current;
    if (!visible || phase !== "video" || !video || failed) return;
    video.muted = muted;
    if (playing) {
      void video.play().catch(() => setPlaying(false));
    } else {
      video.pause();
    }
  }, [failed, muted, phase, playing, visible]);

  const enterPortfolio = () => {
    const video = videoRef.current;
    setFailed(false);
    setReady(false);
    setMuted(false);
    setPlaying(true);
    setPhase("video");
    if (video) {
      video.currentTime = 0;
      video.muted = false;
      void video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const toggleMuted = () => {
    setMuted((current) => {
      const next = !current;
      if (videoRef.current) videoRef.current.muted = next;
      return next;
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.section
          className="group fixed inset-0 z-[100] overflow-hidden bg-black text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          aria-label="Cinematic portfolio intro"
        >
          {!failed && (
            <video
              ref={videoRef}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${phase === "video" && ready ? "opacity-100" : "opacity-0"}`}
              muted={muted}
              playsInline
              preload="auto"
              poster="/Portfolio.png"
              controls={false}
              onCanPlay={() => setReady(true)}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={finishIntro}
              onError={() => setFailed(true)}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}

          {phase === "loading" ? (
            <div className="relative flex min-h-screen items-center justify-center px-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(251,146,60,.22),transparent_30%),radial-gradient(circle_at_82%_28%,rgba(56,189,248,.2),transparent_34%),linear-gradient(180deg,#02030a,#000_50%,#02030a)]" />
              <div className="absolute inset-0 cinematic-grid opacity-25" />
              <div className="entry-particles absolute inset-0" />
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 w-full max-w-2xl text-center">
                <p className="mb-5 text-xs uppercase tracking-[0.5em] text-sky-200/70">Portfolio 2026</p>
                <div className="mb-7 space-y-3 font-mono text-sm uppercase tracking-[0.24em] text-white/80 sm:text-base">
                  {loadingLines.map((line, index) => (
                    <motion.p key={line} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.28 }}>
                      {line}
                    </motion.p>
                  ))}
                </div>
                <div className="mx-auto mb-10 h-1.5 max-w-md overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-orange-300 via-white to-sky-300"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1.65, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
                <button
                  onClick={enterPortfolio}
                  className="rounded-full border border-white/15 bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.24em] text-black shadow-[0_0_70px_rgba(56,189,248,.24)] transition hover:scale-[1.02] hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-200"
                >
                  Enter Portfolio
                </button>
              </motion.div>
            </div>
          ) : !failed ? (
            <>
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.62),rgba(0,0,0,.10)_42%,rgba(0,0,0,.28)),linear-gradient(180deg,rgba(0,0,0,.18),rgba(0,0,0,.06)_42%,rgba(0,0,0,.5))]" />
              <motion.div initial={{ opacity: 0, x: -22 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="absolute left-6 top-1/2 z-10 max-w-[22rem] -translate-y-1/2 sm:left-10 lg:left-16">
                <p className="mb-3 text-xs uppercase tracking-[0.45em] text-sky-100/75">PORTFOLIO 2026</p>
                <h2 className="text-4xl font-black uppercase leading-none tracking-normal sm:text-6xl">ARUN SUDHAVENI</h2>
                <p className="mt-5 text-sm font-medium text-white/75 sm:text-base">Full Stack Developer · AI Engineer · Statathon Finalist</p>
              </motion.div>
            </>
          ) : (
            <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-xl">
                <p className="mb-8 text-3xl font-semibold tracking-tight text-white sm:text-5xl">Intro video coming soon</p>
                <button onClick={finishIntro} className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-sky-100">
                  Skip Intro
                </button>
              </motion.div>
            </div>
          )}


        </motion.section>
      )}
    </AnimatePresence>
  );
}

export function replayCinematicIntro() {
  const replay = (window as typeof window & Partial<Record<typeof REPLAY_GLOBAL, () => void>>)[REPLAY_GLOBAL];
  if (replay) {
    replay();
    return;
  }
  window.dispatchEvent(new Event(REPLAY_EVENT));
}
