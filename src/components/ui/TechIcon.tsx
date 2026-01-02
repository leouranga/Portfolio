import type { Tech } from "@/types";
import { cn } from "@/lib/utils";

type Size = "sm" | "md" | "lg";

const sizeStyles: Record<Size, { wrap: string; icon: string }> = {
  sm: { wrap: "rounded-xl p-2", icon: "text-lg" },
  md: { wrap: "rounded-2xl p-2.5", icon: "text-2xl" },
  lg: { wrap: "rounded-2xl p-3", icon: "text-3xl" },
};

type Props = {
  tech: Tech;
  size?: Size;
  className?: string;
};

export function TechIcon({ tech, size = "md", className }: Props) {
  const s = sizeStyles[size];

  return (
    <span
      title={tech.label}
      tabIndex={0}
      className={cn(
        "group relative inline-flex outline-none",
        "focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2",
        "focus-visible:ring-offset-slate-100 rounded-2xl",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -inset-3 rounded-3xl opacity-0 blur-xl transition",
          "bg-[radial-gradient(closest-side,rgba(56,189,248,0.25),transparent)]",
          "group-hover:opacity-100 group-focus-visible:opacity-100",
          "motion-reduce:transition-none",
        )}
      />

      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition",
          "bg-gradient-to-r from-sky-200/70 via-white/0 to-indigo-200/70",
          "group-hover:opacity-100 group-focus-visible:opacity-100",
          "motion-reduce:transition-none",
        )}
      />

      <span
        className={cn(
          "relative inline-flex items-center justify-center bg-white/80 ring-1 ring-black/5 backdrop-blur",
          "transition duration-300",
          "group-hover:-translate-y-0.5 group-hover:scale-[1.08] group-hover:shadow-lg group-hover:ring-black/10",
          "group-focus-visible:-translate-y-0.5 group-focus-visible:scale-[1.08] group-focus-visible:shadow-lg",
          "motion-reduce:transform-none motion-reduce:transition-none",
          s.wrap,
        )}
      >
        <i className={cn(tech.iconClass, s.icon)} aria-hidden="true" />
        <span className="sr-only">{tech.label}</span>
      </span>
    </span>
  );
}
