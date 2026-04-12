"use client";

import { motion } from "framer-motion";
import { Mail, Briefcase, Download, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Let&apos;s Connect</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Whether it&apos;s a new opportunity, an exciting project, or just a quick hello — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="group"
          >
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-brand-primary/70 transition-all duration-300 h-full flex flex-col items-center justify-center text-center space-y-4 group-hover:-translate-y-2 shadow-lg shadow-black/20">
              <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-brand-primary" />
              </div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">Email</h3>
                <a href="mailto:arunlucky2609@gmail.com" className="text-gray-400 hover:text-brand-accent transition-colors text-sm">
                  arunlucky2609@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* LinkedIn Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group"
          >
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-brand-secondary/70 transition-all duration-300 h-full flex flex-col items-center justify-center text-center space-y-4 group-hover:-translate-y-2 shadow-lg shadow-black/20">
              <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-8 h-8 text-brand-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/arun-sudhaveni-072a3a2b4/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent transition-colors text-sm">
                  Arun Sudhaveni
                </a>
              </div>
            </div>
          </motion.div>

          {/* Resume Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group"
          >
            <a href="/Arun-Resume.pdf" download="Arun-Resume.pdf" className="block">
              <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-brand-accent/70 transition-all duration-300 h-full flex flex-col items-center justify-center text-center space-y-4 group-hover:-translate-y-2 cursor-pointer shadow-lg shadow-black/20">
                <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:animate-bounce">
                  <Download className="w-8 h-8 text-brand-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-xl mb-2">Download Resume</h3>
                  <p className="text-gray-400 text-sm">
                    Get my full CV
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-10 shadow-lg shadow-black/20">
            <h3 className="text-2xl font-bold text-white mb-8">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-white placeholder:text-gray-500"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-white placeholder:text-gray-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-white resize-none placeholder:text-gray-500"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <button
                type="submit"
                disabled={status !== "idle"}
                className="w-full py-4 rounded-lg bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent text-white font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 disabled:opacity-50 group"
              >
                {status === "idle" ? (
                  <>
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                ) : status === "sending" ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  "✓ Message Sent!"
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
