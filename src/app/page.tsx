import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Dashboard from "@/components/sections/Dashboard";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-10 sm:pb-16 md:pb-20 lg:pb-0">
      
      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-t-0 border-x-0 border-slate-700 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center transition-all duration-300 bg-background/80">
        <div className="font-bold text-sm sm:text-base lg:text-xl tracking-tighter flex items-center gap-2">
          <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white/90 text-xs sm:text-sm">AS</div>
          <span className="hidden sm:inline">ARUN <span className="text-brand-accent">SUDHAVENI</span></span>
          <span className="sm:hidden text-xs">ARUN<span className="text-brand-accent">.</span></span>
        </div>
        <div className="hidden md:flex gap-6 lg:gap-8 text-xs lg:text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#dashboard" className="hover:text-white transition-colors">Dashboard</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a href="#contact" className="hidden md:block px-4 lg:px-5 py-2 text-xs lg:text-sm rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
          Get in touch
        </a>
        <div className="md:hidden glass p-2 sm:p-2.5 rounded-lg cursor-pointer hover:border-brand-primary/50 transition-colors">
          {/* Menu icon SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </div>
      </nav>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Dashboard />
      <Experience />
      <Contact />

      <footer className="w-full text-center py-8 sm:py-10 md:py-12 border-t border-slate-700 mt-12 sm:mt-16 md:mt-20 relative z-10">
         <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 tracking-tighter">ARUN <span className="text-brand-accent">SUDHAVENI</span></h2>
            <p className="text-gray-500 text-xs sm:text-sm mb-5 sm:mb-6 max-w-sm mx-auto">
              Crafting premium backends and driving intelligent data analytics.
            </p>
            <div className="flex justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
               <a href="https://www.linkedin.com/in/arun-sudhaveni-072a3a2b4/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">LinkedIn</a>
               <a href="https://github.com/Arunlucky2610" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">GitHub</a>
               <a href="#" className="hover:text-brand-primary transition-colors">Twitter</a>
            </div>
            <div className="mt-12 text-xs text-gray-600">
              © {new Date().getFullYear()} Arun Sudhaveni. All rights reserved.
            </div>
         </div>
      </footer>
    </main>
  );
}
