"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft, ExternalLink, GitFork, Search, Star,
  Clock, Code2, RefreshCw, AlertCircle,
} from "lucide-react";

/* ─── Types ─────────────────────────────────────────────────────────────────── */
type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
  visibility: string;
  topics: string[];
};

/* ─── Config ─────────────────────────────────────────────────────────────────── */
const GITHUB_USERNAME = "Arunlucky2610";

const PINNED = [
  "Statathon-2025-Project",
  "MY-PORTFOLIO",
  "AI-traffic-signal-mangment-System",
  "AI-Powered-Sanskrit-Story-Visual-Translator",
];

// Override the GitHub URL for specific repos (e.g. team repos hosted elsewhere)
const REPO_URL_OVERRIDES: Record<string, string> = {
  "statathon-2025-project": "https://github.com/Chandu2815/STATAHON-PROJECT",
};

const LANG_COLORS: Record<string, string> = {
  TypeScript:  "#3178C6",
  JavaScript:  "#F7DF1E",
  Python:      "#3776AB",
  HTML:        "#E34F26",
  CSS:         "#1572B6",
  "Jupyter Notebook": "#DA5B0B",
  Vue:         "#4FC08D",
  Go:          "#00ADD8",
  Rust:        "#DEA584",
  Java:        "#ED8B00",
};

/* ─── Helpers ────────────────────────────────────────────────────────────────── */
function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 30)  return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

/* ─── Skeleton Card ──────────────────────────────────────────────────────────── */
function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 space-y-4">
      <div className="h-4 w-2/3 rounded bg-white/10" />
      <div className="h-3 w-full rounded bg-white/[0.06]" />
      <div className="h-3 w-4/5 rounded bg-white/[0.06]" />
      <div className="flex gap-3 pt-2">
        <div className="h-5 w-16 rounded-full bg-white/[0.06]" />
        <div className="h-5 w-10 rounded-full bg-white/[0.06]" />
        <div className="h-5 w-10 rounded-full bg-white/[0.06]" />
      </div>
    </div>
  );
}

/* ─── Repo Card ─────────────────────────────────────────────────────────────── */
function RepoCard({ repo, pinned, index }: { repo: Repo; pinned: boolean; index: number }) {
  const langColor = repo.language ? (LANG_COLORS[repo.language] ?? "#94a3b8") : "#475569";
  // Use custom URL override if defined, otherwise fall back to repo's own URL
  const repoUrl = REPO_URL_OVERRIDES[repo.name.toLowerCase()] ?? repo.html_url;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: index * 0.04 }}
      className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d1117]/80 p-5 backdrop-blur-xl transition-all duration-400 hover:border-white/[0.14]"
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(56,189,248,0.12)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
    >
      {/* Hover corner glow */}
      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-sky-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Top row */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          {pinned && (
            <Star size={12} className="shrink-0 text-amber-400 fill-amber-400" />
          )}
          <h3 className="truncate text-sm font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors duration-300">
            {repo.name.replace(/-/g, " ")}
          </h3>
        </div>
        {repo.archived && (
          <span className="shrink-0 rounded-full border border-amber-400/25 bg-amber-400/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber-400">
            Archived
          </span>
        )}
        {!repo.archived && (
          <span className="shrink-0 rounded-full border border-green-400/25 bg-green-400/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-green-400">
            {repo.visibility}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-xs leading-relaxed text-neutral-500 line-clamp-2 min-h-[2.5rem]">
        {repo.description ?? "No description provided."}
      </p>

      {/* Topics */}
      {repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {repo.topics.slice(0, 4).map((t) => (
            <span key={t} className="rounded-md border border-sky-400/20 bg-sky-400/[0.07] px-2 py-0.5 text-[9px] font-medium text-sky-400">
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="mt-auto flex items-center justify-between gap-2 border-t border-white/[0.05] pt-3">
        <div className="flex items-center gap-3 text-neutral-500">
          {repo.language && (
            <span className="flex items-center gap-1.5 text-[11px] font-medium">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: langColor }} />
              {repo.language}
            </span>
          )}
          {repo.stargazers_count > 0 && (
            <span className="flex items-center gap-1 text-[11px]">
              <Star size={10} /> {repo.stargazers_count}
            </span>
          )}
          {repo.forks_count > 0 && (
            <span className="flex items-center gap-1 text-[11px]">
              <GitFork size={10} /> {repo.forks_count}
            </span>
          )}
          <span className="flex items-center gap-1 text-[11px]">
            <Clock size={10} /> {timeAgo(repo.updated_at)}
          </span>
        </div>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 rounded-lg border border-white/[0.07] bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-400 transition-all hover:border-sky-400/30 hover:bg-sky-400/10 hover:text-sky-400"
        >
          <ExternalLink size={10} /> GitHub
        </a>
      </div>
    </motion.div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────────── */
export default function ProjectsPage() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [langFilter, setLangFilter] = useState("All");

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`)
      .then((r) => {
        if (!r.ok) throw new Error("API error");
        return r.json();
      })
      .then((data: Repo[]) => {
        // Sort: pinned first, then by updated_at
        const pinSet = new Set(PINNED.map((n) => n.toLowerCase()));
        const pinned = data.filter((r) => pinSet.has(r.name.toLowerCase()));
        const rest = data.filter((r) => !pinSet.has(r.name.toLowerCase()));
        // Sort pinned by PINNED order
        pinned.sort((a, b) =>
          PINNED.findIndex((n) => n.toLowerCase() === a.name.toLowerCase()) -
          PINNED.findIndex((n) => n.toLowerCase() === b.name.toLowerCase())
        );
        setRepos([...pinned, ...rest]);
        setLoading(false);
      })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  // Unique languages for filter
  const languages = useMemo(() => {
    const langs = new Set(repos.map((r) => r.language).filter(Boolean) as string[]);
    return ["All", ...Array.from(langs).sort()];
  }, [repos]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return repos.filter((r) => {
      const matchSearch = !q || r.name.toLowerCase().includes(q) || (r.description ?? "").toLowerCase().includes(q);
      const matchLang = langFilter === "All" || r.language === langFilter;
      return matchSearch && matchLang;
    });
  }, [repos, search, langFilter]);

  const pinnedNames = new Set(PINNED.map((n) => n.toLowerCase()));

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#030712] font-sans text-white"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-sky-900/15 blur-[130px]" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-900/15 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6">

        {/* Back */}
        <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-2 text-sm font-medium text-neutral-400 backdrop-blur transition-colors hover:text-white"
          >
            <ArrowLeft size={14} /> Back to Portfolio
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 mb-10"
        >
          <div className="mb-3 flex items-center gap-2">
            <Code2 size={16} className="text-sky-400" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-sky-400/70">GitHub · {GITHUB_USERNAME}</span>
          </div>
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            All{" "}
            <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="mt-3 text-base font-light text-neutral-500">
            {loading ? "Fetching repositories..." : `${repos.length} public repositories from GitHub`}
          </p>
        </motion.div>

        {/* Search + Filter */}
        {!loading && !error && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mb-8 flex flex-col gap-3 sm:flex-row"
          >
            <div className="relative flex-1">
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search repositories..."
                className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] py-2.5 pl-9 pr-4 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-sky-400/40 focus:ring-1 focus:ring-sky-400/20 backdrop-blur"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLangFilter(lang)}
                  className={`rounded-xl border px-3 py-2 text-xs font-semibold transition-all ${
                    langFilter === lang
                      ? "border-sky-400/50 bg-sky-400/15 text-sky-300"
                      : "border-white/[0.07] bg-white/[0.03] text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  {lang === "All" && <span>All ({repos.length})</span>}
                  {lang !== "All" && (
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: LANG_COLORS[lang] ?? "#94a3b8" }} />
                      {lang}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* States */}
        {loading && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-4 py-24 text-center"
          >
            <AlertCircle size={40} className="text-neutral-600" />
            <p className="text-lg font-semibold text-neutral-400">Couldn't load repositories</p>
            <p className="text-sm text-neutral-600">GitHub API may be rate limited. Try again shortly.</p>
            <button
              onClick={() => { setError(false); setLoading(true); }}
              className="mt-2 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white"
            >
              <RefreshCw size={14} /> Retry
            </button>
          </motion.div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="py-24 text-center text-neutral-500"
          >
            No repositories match your search.
          </motion.div>
        )}

        {/* Pinned Section */}
        {!loading && !error && filtered.some((r) => pinnedNames.has(r.name.toLowerCase())) && (
          <div className="mb-10">
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400/80">
              <Star size={12} className="fill-amber-400 text-amber-400" /> Featured Repositories
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered
                .filter((r) => pinnedNames.has(r.name.toLowerCase()))
                .map((repo, i) => (
                  <RepoCard key={repo.id} repo={repo} pinned index={i} />
                ))}
            </div>
          </div>
        )}

        {/* Other Repos */}
        {!loading && !error && filtered.some((r) => !pinnedNames.has(r.name.toLowerCase())) && (
          <div>
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-600">
              All Repositories
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered
                .filter((r) => !pinnedNames.has(r.name.toLowerCase()))
                .map((repo, i) => (
                  <RepoCard key={repo.id} repo={repo} pinned={false} index={i} />
                ))}
            </div>
          </div>
        )}
      </div>
    </motion.main>
  );
}
