"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return;
    const els = ["home", "about", "music", "education", "portfolio", "contact"]
      .map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const map: Record<string, string> = { music: "about", education: "portfolio" };
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(map[e.target.id] ?? e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  const current = pathname === "/" ? active : pathname.startsWith("/projects") ? "portfolio" : "";

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav aria-label="Navigasi utama" className="glass relative w-full max-w-md rounded-full px-3 py-2 sm:w-auto sm:max-w-none">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <Link href="/#home" className="px-3 text-lg font-extrabold text-white">K<span className="text-sky">.</span></Link>
          <ul className="hidden items-center gap-1 sm:flex">
            {nav.map((n) => (
              <li key={n.id}>
                <Link href={`/#${n.id}`} aria-current={current === n.id ? "page" : undefined}
                  className={`block rounded-full px-4 py-2 text-sm font-semibold transition ${current === n.id ? "bg-brand/25 text-white ring-1 ring-brand/50" : "text-slate-300 hover:text-white"}`}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <button className="rounded-full p-2 text-white sm:hidden" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <ul className="glass absolute left-0 right-0 top-14 rounded-2xl bg-ink/90 p-2 sm:hidden">
            {nav.map((n) => (
              <li key={n.id}>
                <Link href={`/#${n.id}`} onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-semibold ${current === n.id ? "bg-brand/25 text-white" : "text-slate-300"}`}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
