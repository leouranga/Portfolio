import Link from "next/link";
import { site } from "@/content/site";

const nav = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-slate-600 text-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#top" className="text-lg font-semibold tracking-tight">
          {site.name}
        </Link>

        <nav className="flex items-center gap-8 text-sm font-medium">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="opacity-90 transition hover:opacity-100"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
