import { ButtonLink } from "@/components/ui/ButtonLink";
import { PhotoCard } from "@/components/ui/PhotoCard";
import { TechIcon } from "@/components/ui/TechIcon";
import { site, socials, skills } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="py-16 sm:py-20">
      <div className="relative rounded-[28px] bg-white shadow-xl ring-1 ring-black/5">
        <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-r from-sky-50 via-white to-sky-50" />

        <div className="relative grid gap-10 p-8 sm:grid-cols-[280px_1fr] sm:gap-12 sm:p-12">
          <div className="flex justify-center sm:justify-start">
            <PhotoCard
              src="/leopic.jpg"
              alt="Profile"
              priority
              className="h-56 w-56 sm:h-64 sm:w-64"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {site.role}
              </h1>
              <span className="pb-1 text-sm font-semibold tracking-wide text-slate-500">
                {site.location}
              </span>
            </div>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
              {site.tagline}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map((s) => (
                <ButtonLink
                  key={s.label}
                  href={s.href}
                  variant={s.label === "Email" ? "solid" : "outline"}
                >
                  {s.label}
                </ButtonLink>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {skills.map((t) => (
                <TechIcon key={t.key} tech={t} size="md" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
