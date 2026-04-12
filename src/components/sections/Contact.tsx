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
    <section id="contact" className="py-24 relative z-10 bg-surface/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Let&apos;s Connect</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Whether it&apos;s a new opportunity, an exciting project, or just a quick hello — my inbox is always open.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Details & Resume */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/3 flex flex-col gap-6"
          >
            <div className="glass p-6 rounded-2xl flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-transform duration-300">
               <Mail className="w-10 h-10 text-brand-primary" />
               <div>
                  <h3 className="font-bold text-white text-lg">Email Me</h3>
                  <a href="mailto:hello@example.com" className="text-gray-400 hover:text-brand-accent transition-colors">hello@example.com</a>
               </div>
            </div>

            <div className="glass p-6 rounded-2xl flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-transform duration-300">
               <Briefcase className="w-10 h-10 text-brand-secondary" />
               <div>
                  <h3 className="font-bold text-white text-lg">LinkedIn</h3>
                  <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors">Arun Sudhaveni</a>
               </div>
            </div>

            <button className="relative w-full glow-border p-[1px] rounded-full group mt-4">
              <div className="bg-surface group-hover:bg-surface-hover rounded-full px-6 py-4 flex items-center justify-center gap-3 transition-colors text-white font-semibold shadow-2xl">
                <Download size={20} className="text-brand-accent group-hover:animate-bounce" />
                Download Resume
              </div>
            </button>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-2/3 glass p-8 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 pl-1">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 pl-1">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 pl-1">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-white resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status !== "idle"}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {status === "idle" ? (
                  <>Send Message <Send size={18} /></>
                ) : status === "sending" ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  "Message Sent!"
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
