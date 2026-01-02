import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export function PhotoCard({ src, alt, priority, className }: Props) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-black/5",
        "transition duration-300",
        "hover:-translate-y-1 hover:shadow-xl hover:ring-black/10",
        "motion-reduce:transform-none motion-reduce:transition-none",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -inset-16 opacity-0 blur-2xl transition duration-500",
          "bg-[radial-gradient(closest-side,rgba(99,102,241,0.20),transparent)]",
          "group-hover:opacity-100",
          "motion-reduce:transition-none",
        )}
      />

      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition duration-500",
          "bg-gradient-to-tr from-sky-50/40 via-white/0 to-indigo-50/40",
          "group-hover:opacity-100",
          "motion-reduce:transition-none",
        )}
      />

      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition duration-700",
          "bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.6),transparent)]",
          "-translate-x-[120%] group-hover:translate-x-[120%] group-hover:opacity-100",
          "motion-reduce:hidden",
        )}
      />

      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={cn(
          "object-cover transition duration-500",
          "group-hover:scale-[1.06]",
          "motion-reduce:transform-none motion-reduce:transition-none",
        )}
      />

      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/30 opacity-0 transition",
          "group-hover:opacity-100",
          "motion-reduce:transition-none",
        )}
      />
    </div>
  );
}
