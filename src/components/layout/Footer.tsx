export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/5 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-black/60">
        © {year} Leonardo Uranga.
      </div>
    </footer>
  );
}
