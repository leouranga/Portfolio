import Image from "next/image";
import type { Project, Tech } from "@/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { TechIcon } from "@/components/ui/TechIcon";

type Props = {
  project: Project;
  techIndex: Map<string, Tech>;
};

export function ProjectCard({ project, techIndex }: Props) {
  return (
    <article
      className={[
        "group relative overflow-hidden rounded-[22px] bg-white shadow-xl ring-1 ring-black/5",
        "transition duration-300",
        "hover:-translate-y-1 hover:shadow-2xl hover:ring-black/10",
        "motion-reduce:transform-none motion-reduce:transition-none",
      ].join(" ")}
    >
      <div
        aria-hidden="true"
        className={[
          "pointer-events-none absolute -inset-24 opacity-0 blur-2xl transition duration-500",
          "bg-[radial-gradient(closest-side,rgba(56,189,248,0.20),transparent)]",
          "group-hover:opacity-100",
          "motion-reduce:transition-none",
        ].join(" ")}
      />

      <div className="relative h-56 w-full bg-slate-200 overflow-hidden">
        <div
          aria-hidden="true"
          className={[
            "pointer-events-none absolute inset-0 z-10 opacity-0 transition duration-500",
            "bg-gradient-to-tr from-slate-900/0 via-slate-900/0 to-slate-900/0",
            "group-hover:opacity-100 group-hover:from-sky-50/20 group-hover:to-indigo-50/20",
            "motion-reduce:transition-none",
          ].join(" ")}
        />
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          className={[
            "object-cover transition duration-500",
            "group-hover:scale-[1.06]",
            "motion-reduce:transform-none motion-reduce:transition-none",
          ].join(" ")}
        />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>
            <p className="mt-2 text-slate-600">{project.description}</p>
          </div>

          <div
            aria-hidden="true"
            className={[
              "mt-1 h-10 w-10 rounded-2xl opacity-0 transition duration-300",
              "bg-gradient-to-br from-sky-200/70 to-indigo-200/70",
              "group-hover:opacity-100",
              "motion-reduce:transition-none",
            ].join(" ")}
          />
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {project.tech
              .map((k) => techIndex.get(k))
              .filter((t): t is Tech => Boolean(t))
              .map((t) => (
                <TechIcon key={t.key} tech={t} size="sm" />
              ))}
          </div>

          <div className="flex items-center gap-2">
            {project.repo ? (
              <ButtonLink
                href={project.repo}
                variant="outline"
                ariaLabel={`${project.name} repository`}
              >
                GitHub
              </ButtonLink>
            ) : null}

            {project.href ? (
              <ButtonLink
                href={project.href}
                variant="solid"
                ariaLabel={`${project.name} live site`}
              >
                Live
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
