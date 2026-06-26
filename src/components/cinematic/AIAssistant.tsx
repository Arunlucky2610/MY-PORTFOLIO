"use client";

import { profile } from "@/data/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Download, Mail, Sparkles, X } from "lucide-react";
import { useState } from "react";

const answers: Record<string, string> = {
  "Tell me about Survey AI":
    "Survey AI is Arun's flagship project: an LLM-powered analytics platform that lets users ask government survey questions in plain English and turns 415K+ records into visual insights.",
  "Show skills": "Arun works across React, Next.js, FastAPI, PostgreSQL, LLM APIs, ML models, analytics dashboards, Docker, Git, and deployment workflows.",
  "Download resume": "Opening the resume now.",
  "Contact Arun": `You can reach Arun at ${profile.email}.`,
};

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState("Ask me about Arun's work.");

  const choose = (question: string) => {
    setAnswer(answers[question]);
    if (question === "Download resume") window.open(profile.resume, "_blank", "noopener,noreferrer");
    if (question === "Contact Arun") window.location.href = `mailto:${profile.email}`;
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.94 }}
            className="mb-4 w-[min(22rem,calc(100vw-2.5rem))] rounded-2xl border border-white/15 bg-slate-950/85 p-4 shadow-2xl shadow-sky-950/40 backdrop-blur-2xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Sparkles className="text-orange-300" size={16} /> Arun AI Assistant
              </div>
              <button onClick={() => setOpen(false)} className="rounded-full p-1 text-white/70 hover:bg-white/10" aria-label="Close assistant">
                <X size={16} />
              </button>
            </div>
            <p className="mb-4 rounded-xl bg-white/8 p-3 text-sm leading-6 text-slate-200">{answer}</p>
            <div className="grid gap-2">
              {Object.keys(answers).map((question) => (
                <button key={question} onClick={() => choose(question)} className="rounded-xl border border-white/10 px-3 py-2 text-left text-sm text-slate-200 hover:border-sky-300/50 hover:bg-sky-400/10">
                  {question}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen((value) => !value)}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white text-black shadow-[0_0_50px_rgba(56,189,248,.4)] transition hover:scale-105"
        aria-label="Open AI assistant"
      >
        {open ? <Mail size={22} /> : <Bot size={24} />}
      </button>
    </div>
  );
}
