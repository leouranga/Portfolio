import Image from "next/image";
import { about } from "@/content/site";

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16">
      <div className="rounded-[28px] bg-white p-8 shadow-xl ring-1 ring-black/5 sm:p-12">
        <div className="grid items-center gap-10 sm:grid-cols-2 sm:gap-12">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">{about.title}</h2>

            <div className="mt-5 space-y-5 text-slate-700">
              {about.text.map((p) => (
                <p key={p} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="flex justify-center sm:justify-end">
            <div className="group relative h-72 w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-black/10 motion-reduce:transform-none motion-reduce:transition-none sm:h-80">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-16 opacity-0 blur-2xl transition duration-500 motion-reduce:transition-none group-hover:opacity-100 bg-[radial-gradient(closest-side,rgba(99,102,241,0.20),transparent)]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 motion-reduce:transition-none group-hover:opacity-100 bg-gradient-to-tr from-sky-50/40 via-white/0 to-indigo-50/40"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 -translate-x-[120%] transition duration-700 group-hover:translate-x-[120%] group-hover:opacity-100 motion-reduce:hidden bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.6),transparent)]"
              />

              <Image
                src={about.image.src}
                alt={about.image.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.06] motion-reduce:transform-none motion-reduce:transition-none"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition motion-reduce:transition-none group-hover:opacity-100 ring-1 ring-inset ring-white/30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
