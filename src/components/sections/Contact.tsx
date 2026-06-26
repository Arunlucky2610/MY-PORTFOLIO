"use client";

import { profile } from "@/data/portfolio";
import { Briefcase, Code, Download, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-sky-200/70">Contact</p>
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">Let&apos;s build something intelligent.</h2>
            <div className="mt-8 space-y-3">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-slate-200 hover:bg-white/10"><Mail size={18} /> {profile.email}</a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-slate-200 hover:bg-white/10"><Code size={18} /> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-slate-200 hover:bg-white/10"><Briefcase size={18} /> LinkedIn</a>
              <a href={profile.resume} download className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-slate-200 hover:bg-white/10"><Download size={18} /> Resume</a>
              <p className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-slate-200"><MapPin size={18} /> {profile.location}</p>
            </div>
          </div>
          <form
            className="space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
          >
            <input required aria-label="Name" placeholder="Name" className="w-full rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/60" />
            <input required type="email" aria-label="Email" placeholder="Email" className="w-full rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/60" />
            <textarea required rows={7} aria-label="Message" placeholder="Message" className="w-full resize-none rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/60" />
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-bold text-black transition hover:bg-sky-100">
              {sent ? "Message Ready" : "Send Message"} <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
