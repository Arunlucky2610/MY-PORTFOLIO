import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import CinematicChrome from "@/components/cinematic/CinematicChrome";
import { profile } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-white">
      <CinematicChrome />

      <nav className="portfolio-shell fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-black/35 px-4 py-3 backdrop-blur-2xl sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#hero" className="flex items-center gap-3" aria-label="Go to hero section">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-sm font-bold">AS</span>
            <span className="hidden text-sm font-semibold tracking-wide text-white/90 sm:block">{profile.fullName}</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-white/70 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <a href={profile.resume} download className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-sky-100">
            Resume
          </a>
        </div>
      </nav>

      <div className="portfolio-shell relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
