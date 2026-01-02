import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  external?: boolean;
  className?: string;
  ariaLabel?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">;

export function ButtonLink({
  href,
  children,
  variant = "solid",
  external,
  className,
  ariaLabel,
  ...rest
}: Props) {
  const isExternal =
    external ?? (href.startsWith("http") || href.startsWith("mailto:"));

  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden " +
    "rounded-xl px-4 py-2 text-sm font-semibold " +
    "transition duration-300 " +
    "active:scale-[0.99] " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 " +
    "hover:-translate-y-[1px] hover:shadow-lg " +
    "motion-reduce:transform-none motion-reduce:transition-none";

  const styles =
    variant === "solid"
      ? "bg-slate-900 text-white ring-1 ring-black/10 hover:bg-slate-800"
      : "bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50";

  const Effects = (
    <>
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -inset-6 opacity-0 blur-xl transition duration-500",
          "bg-[radial-gradient(closest-side,rgba(56,189,248,0.22),transparent)]",
          "group-hover:opacity-100",
          "motion-reduce:transition-none",
        )}
      />

      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300",
          "bg-gradient-to-r from-sky-200/70 via-white/0 to-indigo-200/70",
          "group-hover:opacity-100",
          "motion-reduce:transition-none",
        )}
      />

      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0",
          "bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.55),transparent)]",
          "-translate-x-[120%] transition duration-700",
          "group-hover:translate-x-[120%] group-hover:opacity-100",
          "motion-reduce:hidden",
        )}
      />
      <span className="relative z-10">{children}</span>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        aria-label={ariaLabel}
        className={cn(base, styles, className)}
        {...rest}
      >
        {Effects}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={cn(base, styles, className)}>
      {Effects}
    </Link>
  );
}
