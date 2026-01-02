"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { projects, skills } from "@/content/site";

type ProjectFilter = "all" | "frontend" | "fullstack" | "games";

const FILTERS: Array<{ key: ProjectFilter; label: string }> = [
  { key: "all", label: "All Projects" },
  { key: "frontend", label: "Front End" },
  { key: "fullstack", label: "Full Stack" },
  { key: "games", label: "Games" },
];

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.73.5.75 5.6.75 12c0 5.12 3.29 9.46 7.86 11-.02-.42-.02-.93.01-1.49.03-.51.33-3.2.33-3.2s-1.35.29-1.63.29c-.82 0-1.08-.38-1.08-.38-.73-1.88-1.79-2.38-1.79-2.38-1.46-1.03.11-1.01.11-1.01 1.61.12 2.46 1.7 2.46 1.7 1.43 2.52 3.74 1.79 4.65 1.37.14-1.06.56-1.79 1.02-2.2-2.56-.3-5.25-1.33-5.25-5.92 0-1.31.45-2.38 1.2-3.22-.12-.3-.52-1.52.11-3.17 0 0 .98-.33 3.2 1.23.93-.26 1.93-.39 2.93-.39 1 0 2 .13 2.93.39 2.22-1.56 3.2-1.23 3.2-1.23.63 1.65.23 2.87.11 3.17.75.84 1.2 1.91 1.2 3.22 0 4.6-2.69 5.62-5.26 5.91.57.5 1.07 1.49 1.07 3.01v4.46c0 .31.21.68.8.57 4.58-1.53 7.88-5.88 7.88-11C23.25 5.6 18.27.5 12 .5Z" />
    </svg>
  );
}

function TechIcons({ techKeys }: { techKeys: string[] }) {
  const map = new Map(skills.map((s) => [s.key, s]));
  return (
    <div className="flex items-center gap-3">
      {techKeys
        .map((k) => map.get(k))
        .filter(Boolean)
        .map((t) => (
          <span
            key={t!.key}
            title={t!.label}
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-2 py-1 text-[18px] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:scale-110"
          >
            <i className={t!.iconClass} aria-hidden="true" />
            <span className="sr-only">{t!.label}</span>
          </span>
        ))}
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("all");

  const filteredProjects = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="py-12 sm:py-16">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
      </div>

      <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
        {FILTERS.map((f) => {
          const active = filter === f.key;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={active}
              className={[
                "rounded-full border px-3 py-1.5 text-sm font-medium transition",
                "focus:outline-none focus:ring-2 focus:ring-slate-400/50",
                active
                  ? "border-slate-900 bg-slate-900 text-white shadow-sm"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50",
              ].join(" ")}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {filteredProjects.map((p) => (
          <article key={p.name} className="relative">
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${p.name} website`}
              className="group block overflow-hidden rounded-[22px] bg-white shadow-xl ring-1 ring-slate-200/60 transition hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <div className="relative h-56 w-full bg-slate-200">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-sky-50/20 via-white/0 to-indigo-50/20" />
                <Image
                  src={p.image.src}
                  alt={p.image.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.06]"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-2 text-slate-600">{p.description}</p>

                <div className="mt-5 flex items-center justify-between gap-4 pr-14">
                  <TechIcons techKeys={p.tech} />
                </div>
              </div>
            </a>

            {p.repo ? (
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${p.name} GitHub repository`}
                className="absolute bottom-5 right-5 z-10 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/85 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <GitHubIcon className="h-5 w-5 text-slate-800" />
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
