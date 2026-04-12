import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Dashboard from "@/components/sections/Dashboard";
import Experience from "@/components/sections/Experience";
import ONG from "@/components/sections/ONG";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-20 sm:pb-0">
      
      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-t-0 border-x-0 border-white/10 px-6 py-4 flex justify-between items-center transition-all duration-300">
        <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white/90 text-sm">AS</div>
          <span>ARUN <span className="text-brand-accent">SUDHAVENI</span></span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#dashboard" className="hover:text-white transition-colors">Dashboard</a>
          <a href="#ong" className="hover:text-white transition-colors">ONG</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a href="#contact" className="hidden md:block px-5 py-2 text-sm rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
          Get in touch
        </a>
        <div className="md:hidden glass p-2 rounded-lg border-white/5 cursor-pointer hover:bg-white/10">
          {/* Menu icon SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </div>
      </nav>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Dashboard />
      <Experience />
      <Contact />

      <footer className="w-full text-center py-12 border-t border-white/5 mt-20 relative z-10">
         <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4 tracking-tighter">ARUN.<span className="text-brand-accent">DEV</span></h2>
            <p className="text-gray-500 text-sm mb-6 max-w-sm mx-auto">
              Crafting premium backends and driving intelligent data analytics.
            </p>
            <div className="flex justify-center gap-6 text-sm text-gray-400">
               <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
               <a href="#" className="hover:text-white transition-colors">GitHub</a>
               <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>
            <div className="mt-12 text-xs text-gray-600">
              © {new Date().getFullYear()} Arun Sudhaveni. All rights reserved.
            </div>
         </div>
      </footer>
    </main>
  );
}
