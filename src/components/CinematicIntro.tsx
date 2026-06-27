"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

type CinematicIntroProps = {
  onActiveChange?: (active: boolean) => void;
  videoSrc?: string;
};

export const INTRO_SEEN_KEY = "arun-portfolio-entry-flow-v2-seen";
const REPLAY_EVENT = "portfolio:replay-intro";
const REPLAY_GLOBAL = "__replayArunCinematicIntro";

const LOADING_STEPS = [
  { label: "Initializing Arun AI Portfolio...", pct: 20 },
  { label: "Loading Projects...", pct: 45 },
  { label: "Preparing Experience...", pct: 70 },
  { label: "Compiling Skills Stack...", pct: 88 },
  { label: "System Ready.", pct: 100 },
];

type IntroPhase = "loading" | "video";

// ── SVG circle math ──────────────────────────────────────────────────────────
const RADIUS = 88;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
function progressToDash(pct: number) {
  return (pct / 100) * CIRCUMFERENCE;
}

// ── Orbit dots ───────────────────────────────────────────────────────────────
const ORBIT_DOTS = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  angle: (360 / 6) * i,
  dur: 6 + i * 0.4,
  size: i % 2 === 0 ? 5 : 3,
}));

// ── Background particles ─────────────────────────────────────────────────────
const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  r: 1 + Math.random() * 1.5,
  dur: 5 + Math.random() * 7,
  delay: Math.random() * 5,
}));

// ── Circular Progress Ring ───────────────────────────────────────────────────
function CircularProgress({ progress }: { progress: number }) {
  const dashOffset = CIRCUMFERENCE - progressToDash(progress);

  return (
    <div className="relative flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64">
      {/* Outer halo glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{ boxShadow: [`0 0 40px rgba(56,189,248,0.15)`, `0 0 80px rgba(56,189,248,0.3)`, `0 0 40px rgba(56,189,248,0.15)`] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* SVG ring */}
      <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 200 200">
        {/* Track ring */}
        <circle
          cx="100" cy="100" r={RADIUS}
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="8"
        />
        {/* Glowing progress arc */}
        <motion.circle
          cx="100" cy="100" r={RADIUS}
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          animate={{ strokeDashoffset: dashOffset }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ filter: "drop-shadow(0 0 8px rgba(56,189,248,0.9))" }}
        />
        {/* Gradient definition */}
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Orbit dots */}
      {ORBIT_DOTS.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute"
          style={{
            width: dot.size,
            height: dot.size,
            borderRadius: "50%",
            background: dot.id % 2 === 0 ? "rgba(56,189,248,0.9)" : "rgba(167,139,250,0.8)",
            boxShadow: `0 0 8px ${dot.id % 2 === 0 ? "rgba(56,189,248,0.8)" : "rgba(167,139,250,0.8)"}`,
          }}
          animate={{
            rotate: [dot.angle, dot.angle + 360],
          }}
          transition={{
            duration: dot.dur,
            repeat: Infinity,
            ease: "linear",
          }}
          // Position on orbit path via CSS transform-origin trick
          // We rotate a wrapper and counter-translate
        >
          <div
            style={{
              transform: `rotate(${dot.angle}deg) translateX(115px) rotate(-${dot.angle}deg)`,
            }}
          />
        </motion.div>
      ))}

      {/* Orbit ring (decorative thin ring) */}
      <div
        className="absolute rounded-full border border-white/[0.06]"
        style={{ width: "232px", height: "232px" }}
      />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <motion.span
          key={progress}
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-5xl font-black tabular-nums tracking-tight text-white sm:text-6xl"
          style={{ textShadow: "0 0 30px rgba(56,189,248,0.5)" }}
        >
          {progress}
          <span className="text-2xl text-sky-400 sm:text-3xl">%</span>
        </motion.span>
        <div className="mt-2 flex items-center gap-1.5">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-sky-400"
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-sky-400/70">Loading</span>
        </div>
      </div>
    </div>
  );
}

export default function CinematicIntro({ onActiveChange, videoSrc = "/assets/intro.mp4" }: CinematicIntroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState<IntroPhase>("loading");
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [playing, setPlaying] = useState(false);

  const [stepIndex, setStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [ripple, setRipple] = useState(false);
  const [exiting, setExiting] = useState(false);

  // Advance loading steps
  useEffect(() => {
    if (phase !== "loading" || !visible) return;
    let idx = 0;
    const tick = () => {
      setVisibleLines((prev) => [...prev, idx]);
      setStepIndex(idx);
      const target = LOADING_STEPS[idx].pct;
      const start0 = idx === 0 ? 0 : LOADING_STEPS[idx - 1].pct;
      const dur = 700;
      const t0 = performance.now();
      const anim = (now: number) => {
        const t = Math.min((now - t0) / dur, 1);
        setProgress(Math.round(start0 + (target - start0) * t));
        if (t < 1) requestAnimationFrame(anim);
      };
      requestAnimationFrame(anim);
      idx++;
      if (idx < LOADING_STEPS.length) setTimeout(tick, 900);
    };
    const t = setTimeout(tick, 300);
    return () => clearTimeout(t);
  }, [phase, visible]);

  const finishIntro = useCallback(() => {
    sessionStorage.setItem(INTRO_SEEN_KEY, "true");
    setVisible(false);
    setPlaying(false);
  }, []);

  const replayIntro = useCallback(() => {
    sessionStorage.removeItem(INTRO_SEEN_KEY);
    setFailed(false); setReady(false); setPlaying(false);
    setPhase("video"); setVisible(true);
    requestAnimationFrame(() => {
      const v = videoRef.current;
      if (!v) return;
      v.currentTime = 0; v.muted = false;
      void v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    });
  }, []);

  useEffect(() => {
    setVisible(sessionStorage.getItem(INTRO_SEEN_KEY) !== "true");
    (window as any)[REPLAY_GLOBAL] = replayIntro;
    window.addEventListener(REPLAY_EVENT, replayIntro);
    return () => {
      delete (window as any)[REPLAY_GLOBAL];
      window.removeEventListener(REPLAY_EVENT, replayIntro);
    };
  }, [replayIntro]);

  useEffect(() => { onActiveChange?.(visible); }, [onActiveChange, visible]);

  useEffect(() => {
    const v = videoRef.current;
    if (!visible || phase !== "video" || !v || failed) return;
    v.muted = false;
    if (playing) void v.play().catch(() => setPlaying(false));
    else v.pause();
  }, [failed, phase, playing, visible]);

  const enterPortfolio = () => {
    if (exiting) return;
    setRipple(true);
    setTimeout(() => setRipple(false), 600);
    setExiting(true);
    setTimeout(() => {
      const v = videoRef.current;
      setFailed(false); setReady(false); setPlaying(true); setPhase("video");
      if (v) {
        v.currentTime = 0; v.muted = false;
        void v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
      }
      setExiting(false);
    }, 600);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.section
          className="fixed inset-0 z-[100] overflow-hidden bg-[#020613] text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)", scale: 1.04 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          aria-label="Cinematic portfolio intro"
        >
          {/* Hidden video */}
          {!failed && (
            <video
              ref={videoRef}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${phase === "video" && ready ? "opacity-100" : "opacity-0"}`}
              muted playsInline preload="auto" poster="/Portfolio.png" controls={false}
              onCanPlay={() => setReady(true)}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={finishIntro}
              onError={() => setFailed(true)}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}

          {/* ── LOADING PHASE ─────────────────────────────────────────── */}
          {phase === "loading" && (
            <div className="relative flex min-h-screen flex-col items-center justify-center gap-0 px-4 py-12">

              {/* Background atmosphere */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,rgba(56,189,248,0.07),transparent)]" />
                <motion.div
                  className="absolute -bottom-40 -left-40 h-[550px] w-[550px] rounded-full bg-orange-500/8 blur-[130px]"
                  animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.9, 0.5] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-sky-500/8 blur-[130px]"
                  animate={{ scale: [1, 1.22, 1], opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
                <div className="absolute inset-0 cinematic-grid opacity-[0.15]" />
                <motion.div
                  className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/25 to-transparent"
                  animate={{ top: ["0%", "100%"] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                />
                <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                  {PARTICLES.map((p) => (
                    <motion.circle
                      key={p.id} cx={`${p.x}%`} cy={`${p.y}%`} r={p.r}
                      fill="rgba(148,163,184,0.3)"
                      animate={{ cy: [`${p.y}%`, `${p.y - 7}%`, `${p.y}%`], opacity: [0.15, 0.6, 0.15] }}
                      transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
                    />
                  ))}
                </svg>
              </div>

              {/* Top label */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative z-10 mb-10 text-center"
              >
                <div className="mb-2 flex items-center justify-center gap-2">
                  <span className="rounded border border-sky-400/30 bg-sky-400/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-sky-300">
                    PORTFOLIO 2026
                  </span>
                  <motion.span className="h-1.5 w-1.5 rounded-full bg-green-400" animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-green-400/70">LIVE</span>
                </div>
                <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Arun Sudhaveni</h1>
                <p className="mt-1 text-sm font-light tracking-wide text-neutral-400">Full Stack Developer · AI Engineer · Statathon Finalist</p>
              </motion.div>

              {/* Circular Progress */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 mb-8"
              >
                {/* Outer orbit ring (decorative) */}
                <div className="relative flex items-center justify-center">
                  {/* Spinning orbit dots around the circle */}
                  <div className="absolute" style={{ width: 248, height: 248 }}>
                    {ORBIT_DOTS.map((dot) => (
                      <motion.div
                        key={dot.id}
                        className="absolute left-1/2 top-1/2"
                        style={{ width: 0, height: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: dot.dur, repeat: Infinity, ease: "linear", delay: dot.id * 0.5 }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            width: dot.size,
                            height: dot.size,
                            borderRadius: "50%",
                            background: dot.id % 2 === 0 ? "rgba(56,189,248,0.95)" : "rgba(167,139,250,0.85)",
                            boxShadow: `0 0 ${dot.size * 3}px ${dot.id % 2 === 0 ? "rgba(56,189,248,0.8)" : "rgba(167,139,250,0.8)"}`,
                            transform: `translate(-50%, -124px)`,
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Main SVG Ring */}
                  <div className="relative flex h-56 w-56 items-center justify-center sm:h-60 sm:w-60">
                    {/* Pulse glow */}
                    <motion.div
                      className="absolute inset-4 rounded-full bg-sky-500/5"
                      animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />

                    <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 200 200">
                      <defs>
                        <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#38bdf8" />
                          <stop offset="50%" stopColor="#818cf8" />
                          <stop offset="100%" stopColor="#f472b6" />
                        </linearGradient>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      {/* Background track */}
                      <circle cx="100" cy="100" r={RADIUS} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="10" />

                      {/* Secondary dim arc (track highlight) */}
                      <circle cx="100" cy="100" r={RADIUS} fill="none" stroke="rgba(56,189,248,0.08)" strokeWidth="10"
                        strokeDasharray={CIRCUMFERENCE} strokeDashoffset="0" />

                      {/* Main progress arc */}
                      <motion.circle
                        cx="100" cy="100" r={RADIUS}
                        fill="none"
                        stroke="url(#arcGrad)"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeDasharray={CIRCUMFERENCE}
                        animate={{ strokeDashoffset: CIRCUMFERENCE - progressToDash(progress) }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        filter="url(#glow)"
                      />
                    </svg>

                    {/* Center % display */}
                    <div className="relative z-10 flex flex-col items-center">
                      <motion.div
                        key={progress}
                        initial={{ opacity: 0.6, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.25 }}
                        className="text-5xl font-black tabular-nums leading-none tracking-tight text-white sm:text-6xl"
                        style={{ textShadow: "0 0 40px rgba(56,189,248,0.6)" }}
                      >
                        {progress}
                        <span className="text-2xl font-bold text-sky-400">%</span>
                      </motion.div>
                      <div className="mt-2 flex items-center gap-1.5">
                        <motion.span className="h-1 w-1 rounded-full bg-sky-400" animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 0.8, repeat: Infinity }} />
                        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-sky-400/60">SYSTEM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Current step label */}
              <motion.div
                className="relative z-10 mb-6 text-center"
                animate={{ opacity: 1 }}
              >
                <AnimatePresence mode="wait">
                  <motion.p
                    key={stepIndex}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.35 }}
                    className="font-mono text-xs uppercase tracking-[0.25em] text-white/50 sm:text-sm"
                  >
                    <span className="text-sky-400/80">›</span> {LOADING_STEPS[stepIndex]?.label}
                  </motion.p>
                </AnimatePresence>
              </motion.div>

              {/* Completed steps list */}
              <div className="relative z-10 mb-8 flex flex-col items-center gap-1.5">
                {LOADING_STEPS.slice(0, -1).map((step, i) => (
                  <AnimatePresence key={step.label}>
                    {visibleLines.includes(i) && i < stepIndex && (
                      <motion.div
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35 }}
                        className="flex items-center gap-2 font-mono text-[10px] text-white/25 sm:text-xs"
                      >
                        <span className="text-green-400/70">✓</span>
                        <span>{step.label}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                ))}
              </div>

              {/* Enter Portfolio Button */}
              <motion.button
                onClick={enterPortfolio}
                disabled={exiting}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                className="group relative z-10 w-full max-w-xs overflow-hidden rounded-xl border border-white/10 bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-[0.2em] text-black shadow-[0_0_40px_rgba(255,255,255,0.08)] transition-shadow duration-300 hover:shadow-[0_0_60px_rgba(56,189,248,0.25)] focus:outline-none focus:ring-2 focus:ring-sky-400/50 disabled:opacity-60"
              >
                {ripple && (
                  <motion.span
                    className="absolute inset-0 rounded-xl bg-sky-300/25"
                    initial={{ scale: 0, opacity: 0.9 }}
                    animate={{ scale: 2.5, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                )}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-sky-100/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">{exiting ? "Launching..." : "Enter Portfolio"}</span>
              </motion.button>
            </div>
          )}

          {/* ── VIDEO PHASE ── */}
          {phase === "video" && !failed && (
            <>
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.62),rgba(0,0,0,.10)_42%,rgba(0,0,0,.28)),linear-gradient(180deg,rgba(0,0,0,.18),rgba(0,0,0,.06)_42%,rgba(0,0,0,.5))]" />
              <motion.div
                initial={{ opacity: 0, x: -22 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="absolute left-6 top-1/2 z-10 max-w-[22rem] -translate-y-1/2 sm:left-10 lg:left-16"
              >
                <p className="mb-3 text-xs uppercase tracking-[0.45em] text-sky-100/75">PORTFOLIO 2026</p>
                <h2 className="text-4xl font-black uppercase leading-none sm:text-6xl">ARUN SUDHAVENI</h2>
                <p className="mt-5 text-sm font-medium text-white/75 sm:text-base">Full Stack Developer · AI Engineer · Statathon Finalist</p>
              </motion.div>
            </>
          )}

          {/* ── FAILED FALLBACK ── */}
          {failed && (
            <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-xl">
                <p className="mb-8 text-3xl font-semibold tracking-tight text-white sm:text-5xl">Intro video coming soon</p>
                <button onClick={finishIntro} className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-sky-100">
                  Enter Portfolio
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
  const replay = (window as any)[REPLAY_GLOBAL];
  if (replay) { replay(); return; }
  window.dispatchEvent(new Event(REPLAY_EVENT));
}
