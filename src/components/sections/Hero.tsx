"use client";

import { replayCinematicIntro } from "@/components/CinematicIntro";
import { profile } from "@/data/portfolio";
import gsap from "gsap";
import { ArrowDown, Mail, Play, Sparkles } from "lucide-react";
import Image from "next/image";
import type { MouseEvent } from "react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const featuredCard = useRef<HTMLDivElement>(null);
  const featuredImage = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", { y: 36, opacity: 0, duration: 1, stagger: 0.12, ease: "power3.out" });
    }, root);
    return () => ctx.revert();
  }, []);

  const handleFeaturedMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!featuredCard.current || !featuredImage.current) return;
    const bounds = featuredCard.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    gsap.to(featuredImage.current, {
      scale: 1.07,
      x: x * 12,
      y: y * 10,
      duration: 0.55,
      ease: "power3.out",
    });
  };

  const handleFeaturedLeave = () => {
    if (!featuredImage.current) return;
    gsap.to(featuredImage.current, {
      scale: 1,
      x: 0,
      y: 0,
      duration: 0.75,
      ease: "power3.out",
    });
  };

  return (
    <section id="hero" ref={root} className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(251,146,60,.18),transparent_30%),radial-gradient(circle_at_76%_40%,rgba(14,165,233,.18),transparent_33%)]" />
      <div className="absolute inset-0 cinematic-grid opacity-30" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <div className="relative z-10">
          <div className="hero-reveal mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-sky-100 backdrop-blur-xl">
            <Sparkles size={16} className="text-orange-300" /> AI cinematic workspace online
          </div>
          <h1 className="hero-reveal max-w-5xl text-[clamp(3.3rem,10vw,8.5rem)] font-black uppercase leading-[0.88] tracking-normal">
            Arun <span className="block text-gradient-cinema">Sudhaveni</span>
          </h1>
          <p className="hero-reveal mt-8 max-w-4xl text-lg font-semibold leading-8 text-white/85 sm:text-2xl">
            Full Stack Developer | AI Agent Builder | AI/ML Enthusiast | Data Analyst | Statathon 2025 Finalist
          </p>
          <p className="hero-reveal mt-5 max-w-2xl text-xl leading-8 text-slate-300 sm:text-3xl sm:leading-10">{profile.tagline}</p>
          <div className="hero-reveal mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="rounded-full bg-white px-7 py-4 text-center font-bold text-black transition hover:scale-[1.02] hover:bg-sky-100">View Projects</a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 font-bold text-white transition hover:border-orange-300/60">
              <Mail size={18} /> Contact
            </a>
            <button onClick={replayCinematicIntro} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/8 px-5 py-4 text-sm font-semibold text-white transition hover:bg-white/15" aria-label="Replay intro video">
              <Play size={16} /> Replay Intro
            </button>
          </div>
        </div>

        <div
          ref={featuredCard}
          onMouseMove={handleFeaturedMove}
          onMouseLeave={handleFeaturedLeave}
          className="relative min-h-[30rem] overflow-hidden rounded-3xl shadow-[0_0_90px_rgba(56,189,248,.22)]"
        >
          <Image
            ref={featuredImage}
            src="/ong-image.png"
            alt="Featured Build visual"
            fill
            priority
            className="absolute inset-0 h-full w-full object-cover object-center"
            sizes="(max-width: 1024px) 90vw, 640px"
          />
        </div>
      </div>
      <a href="#about" className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/15 bg-white/10 p-3 text-white backdrop-blur-xl" aria-label="Scroll to about">
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
