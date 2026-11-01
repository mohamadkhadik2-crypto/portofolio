"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Award, X, Code2, Database, Cpu, Cloud, Wrench, Layout } from "lucide-react";
import { projects } from "@/data/projects";
import { certificates, techStack } from "@/data/site";

const PER_PAGE = 6;
const tabs = ["Projects", "Certificates", "Tech Stack"] as const;
const groupIcons = [Code2, Layout, Database, Cpu, Cloud, Wrench];

export default function Portfolio() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Projects");
  const [page, setPage] = useState(0);
  const [zoom, setZoom] = useState<string | null>(null);
  const pages = Math.ceil(projects.length / PER_PAGE);
  const shown = projects.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section id="portfolio" className="wrap py-16">
      <h2 className="text-3xl font-extrabold text-white sm:text-5xl">Portofolio</h2>
      <div role="tablist" className="glass mt-6 inline-flex rounded-full p-1">
        {tabs.map((t) => (
          <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition sm:px-6 ${tab === t ? "bg-brand text-white" : "text-slate-300 hover:text-white"}`}>{t}</button>
        ))}
      </div>

      <div key={tab} className="fade mt-8">
        {tab === "Projects" && (
          <>
            <div key={page} className="fade grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {shown.map((p) => (
                <article key={p.slug} className="card flex flex-col overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={p.image || `/projects/${p.slug}.png`} 
                    alt={`Ilustrasi proyek ${p.title}`} 
                    loading="lazy" 
                    className="aspect-video w-full object-cover" 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.src.endsWith(".jpg")) {
                        target.src = `/projects/${p.slug}.jpg`;
                      }
                    }}
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-bold text-white">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{p.desc}</p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {p.tags.slice(0, 4).map((t) => <li key={t} className="rounded-md bg-brand/15 px-2 py-1 text-xs text-sky">{t}</li>)}
                    </ul>
                    <Link href={`/projects/${p.slug}`} className="btn-ghost mt-4 py-2">Lihat Detail</Link>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8 flex items-center justify-center gap-4">
              <button onClick={() => setPage((page - 1 + pages) % pages)} aria-label="Halaman sebelumnya" className="glass grid h-11 w-11 place-items-center rounded-full text-white hover:border-brand/60"><ChevronLeft /></button>
              <span className="text-sm font-semibold text-slate-300" aria-live="polite">{page + 1} / {pages}</span>
              <button onClick={() => setPage((page + 1) % pages)} aria-label="Halaman berikutnya" className="glass grid h-11 w-11 place-items-center rounded-full text-white hover:border-brand/60"><ChevronRight /></button>
            </div>
          </>
        )}

        {tab === "Certificates" && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.length === 0
              ? [1, 2, 3].map((i) => (
                  <div key={i} className="card grid aspect-video place-items-center p-4 text-center">
                    <div><Award className="mx-auto mb-2 text-sky" /><p className="text-sm font-semibold text-white">Sertifikat belum ditambahkan</p>
                      <p className="mt-1 text-xs text-slate-400">Isi di <code>data/site.ts</code></p></div>
                  </div>))
              : certificates.map((c) => (
                  <button key={c.src} onClick={() => setZoom(c.src)} className="card overflow-hidden text-left" aria-label={`Perbesar ${c.title}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.src} alt={c.title} loading="lazy" className="aspect-video w-full object-cover" />
                    <p className="p-3 text-sm font-semibold text-white">{c.title}</p>
                  </button>))}
          </div>
        )}

        {tab === "Tech Stack" && (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {techStack.map((g, i) => {
              const Icon = groupIcons[i % groupIcons.length];
              return (
                <div key={g.group} className="card p-5">
                  <h3 className="flex items-center gap-2 font-bold text-white"><Icon size={18} className="text-sky" /> {g.group}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">{g.items.map((t) => <li key={t} className="glass rounded-lg px-3 py-1.5 text-sm text-slate-200">{t}</li>)}</ul>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {zoom && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-[60] grid place-items-center bg-black/85 p-4" onClick={() => setZoom(null)}>
          <button className="absolute right-4 top-4 text-white" aria-label="Tutup"><X /></button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={zoom} alt="Sertifikat diperbesar" className="max-h-full max-w-full rounded-lg" />
        </div>
      )}
    </section>
  );
}