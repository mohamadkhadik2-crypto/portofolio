import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, Github } from "lucide-react";
import { projects } from "@/data/projects";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const p = projects.find((x) => x.slug === params.slug);
  return p ? { title: `${p.title} | Mohamad Kadik`, description: p.desc } : {};
}

export default function ProjectPage({ params }: Props) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) notFound();

  return (
    <main className="wrap pb-20 pt-32">
      <Link href="/#portfolio" className="btn-ghost mb-8 py-2">
        <ArrowLeft size={16} /> Kembali ke Portofolio
      </Link>
      <h1 className="text-3xl font-extrabold text-white sm:text-5xl">{p.title}</h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-300">{p.desc}</p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.detailImage || p.image || `/projects/${p.slug}.png`}
          alt={`Ilustrasi ${p.title}`}
          className="w-full rounded-2xl object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (!target.src.endsWith(".jpg")) {
              target.src = `/projects/${p.slug}.jpg`;
            }
          }}
        />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <section className="card p-6">
          <h2 className="font-bold text-white">Permasalahan</h2>
          <p className="mt-2 text-sm text-slate-400">
            {p.problem ?? "Belum dijelaskan. Tambahkan di data/projects.ts."}
          </p>
        </section>
        <section className="card p-6">
          <h2 className="font-bold text-white">Tujuan</h2>
          <p className="mt-2 text-sm text-slate-400">{p.desc}</p>
        </section>
        <section className="card p-6">
          <h2 className="font-bold text-white">Fitur Utama</h2>
          {p.features ? (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-400">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-sm text-slate-400">Belum dijelaskan. Tambahkan di data/projects.ts.</p>
          )}
        </section>
        <section className="card p-6">
          <h2 className="font-bold text-white">Teknologi</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <li key={t} className="rounded-md bg-brand/15 px-2.5 py-1 text-sm text-sky">
                {t}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {p.github && (
        <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 inline-flex items-center gap-2">
          <Github size={16} /> Lihat di GitHub
        </a>
      )}
    </main>
  );
}