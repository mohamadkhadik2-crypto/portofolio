"use client";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ArrowUp, Download, Music2, GraduationCap, Code2 } from "lucide-react";
import { SocialIcon } from "./Icons";
import { NAME, CV_PATH, PROFILE_PHOTO, SPOTIFY_PLAYLIST_URL, spotifyEmbedUrl, nav, socials, interests, education } from "@/data/site";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const heroSocials = socials.filter((s) => ["github", "instagram", "tiktok"].includes(s.icon));

export function Hero() {
  return (
    <section id="home" className="wrap grid min-h-screen items-center gap-10 pb-16 pt-32 md:grid-cols-2 fade">
      <div>
        <p className="mb-4 text-sm font-semibold text-sky">Portofolio Informatika</p>
        <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-6xl">
          Hello, saya <span className="grad">{NAME}.</span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Mahasiswa Informatika dan developer yang tertarik pada AI, software development, serta teknologi untuk membangun solusi digital.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/#portfolio" className="btn-primary">View My Work <ArrowRight size={16} /></Link>
          <Link href="/#contact" className="btn-ghost">Contact Me <ArrowUpRight size={16} /></Link>
        </div>
        <div className="mt-8 flex items-center gap-3">
          <span className="text-xs font-semibold text-slate-400">Find me</span>
          {heroSocials.map((s) => (
            <a key={s.name} href={s.href} {...ext} aria-label={s.name} className="glass grid h-10 w-10 place-items-center rounded-lg text-white hover:border-brand/60"><SocialIcon name={s.icon} /></a>
          ))}
        </div>
      </div>
      <div className="mx-auto w-full max-w-sm">
        <div className="glass relative rotate-2 rounded-3xl p-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-brand/30 to-navy">
            <div className="absolute inset-0 grid place-items-center text-6xl font-extrabold text-white/80" aria-hidden>MK</div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={PROFILE_PHOTO} alt={`Foto ${NAME}`} className="absolute inset-0 h-full w-full object-cover" onError={(e) => (e.currentTarget.style.display = "none")} />
          </div>
          <p className="mt-4 text-2xl font-extrabold text-white">DEVELOPER</p>
          <p className="text-xs text-slate-400">Learn · Build · Improve</p>
          <span className="glass absolute -left-4 bottom-20 flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-white"><GraduationCap size={14} /> Informatika</span>
          <span className="glass absolute -right-4 top-10 flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-white"><Code2 size={14} /> Software Development</span>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="wrap py-16 fade">
      <h2 className="text-3xl font-extrabold text-white sm:text-5xl">About <span className="grad">Me</span></h2>
      <p className="mt-5 max-w-3xl leading-relaxed text-slate-300">
        Saya mahasiswa Informatika yang menekuni pengembangan perangkat lunak dan teknologi cerdas. Saya suka mengubah masalah nyata menjadi sistem yang bisa dipakai, dari antarmuka sampai infrastruktur.
      </p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {interests.map((i) => <li key={i} className="glass rounded-full px-4 py-2 text-sm text-slate-200">{i}</li>)}
      </ul>
      <a href={CV_PATH} download className="btn-primary mt-8"><Download size={16} /> Download CV</a>
    </section>
  );
}

export function Music() {
  const embed = SPOTIFY_PLAYLIST_URL ? spotifyEmbedUrl(SPOTIFY_PLAYLIST_URL) : null;
  return (
    <section id="music" className="wrap grid items-center gap-8 py-16 md:grid-cols-2 fade">
      <div>
        <Music2 className="mb-4 text-sky" size={28} aria-hidden />
        <h2 className="text-4xl font-extrabold leading-tight sm:text-6xl">
          <span className="text-slate-100">A little music.</span><br /><span className="grad">A lot of ideas.</span>
        </h2>
        <p className="mt-5 max-w-md leading-relaxed text-slate-300">
          Musik yang menemani proses saya mengubah ide menjadi sesuatu yang nyata. Intip playlist yang sedang sering saya putar.
        </p>
        {SPOTIFY_PLAYLIST_URL && (
          <a href={SPOTIFY_PLAYLIST_URL} {...ext} className="btn-primary mt-7"><Music2 size={16} /> Daily Rotation di Spotify <ArrowUpRight size={16} /></a>
        )}
      </div>
      <div className="min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-navy p-2">
        {embed ? (
          <iframe title="Playlist Spotify Mohamad Kadik" src={embed} width="100%" height="420" loading="lazy" className="block rounded-2xl border-0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
        ) : (
          <div className="grid h-[420px] place-items-center p-6 text-center">
            <div><Music2 className="mx-auto mb-3 text-sky" />
              <p className="font-bold text-white">Playlist belum dihubungkan</p>
              <p className="mt-2 text-sm text-slate-400">Isi <code>SPOTIFY_PLAYLIST_URL</code> di <code>data/site.ts</code> dengan link playlist Spotify.</p></div>
          </div>
        )}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="wrap py-16 fade">
      <h2 className="text-3xl font-extrabold text-white sm:text-5xl">Education</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {education.map((e) => (
          <article key={e.name} className="card p-5">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-brand/20 font-bold text-sky" aria-hidden>
              {e.name.split(" ").filter((w) => /^[A-Z]/.test(w)).slice(0, 2).map((w) => w[0]).join("")}
            </div>
            <h3 className="font-bold text-white">{e.name}</h3>
            <p className="mt-1 text-sm text-sky">{e.period}</p>
            <p className="mt-2 text-sm text-slate-400">{e.note}</p>
            {e.href && <a href={e.href} {...ext} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white hover:text-sky">Website resmi <ArrowUpRight size={14} /></a>}
          </article>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="wrap py-16 fade">
      <h2 className="text-3xl font-extrabold text-white sm:text-5xl">Let&apos;s <span className="grad">collaborate</span></h2>
      <p className="mt-4 max-w-xl text-slate-300">Punya ide proyek atau ingin berkolaborasi? Hubungi saya lewat salah satu kanal di bawah.</p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {socials.map((s) => (
          <a key={s.name} href={s.href} {...ext} className="card flex items-center justify-between p-4">
            <span className="flex items-center gap-3 font-semibold text-white"><SocialIcon name={s.icon} size={20} /> {s.name}</span>
            <ArrowUpRight size={16} className="text-slate-400" />
          </a>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mt-10 border-t border-brand/30 bg-gradient-to-b from-navy/60 to-ink">
      <div className="wrap grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="text-2xl font-extrabold text-white">{NAME}<span className="text-sky">.</span></p>
          <p className="mt-2 text-sm text-slate-400">Informatics Student &amp; Developer</p>
        </div>
        <nav aria-label="Footer">
          <p className="mb-3 text-sm font-bold text-white">Navigasi</p>
          <ul className="space-y-2 text-sm">{nav.map((n) => <li key={n.id}><Link href={`/#${n.id}`} className="text-slate-400 hover:text-sky">{n.label}</Link></li>)}</ul>
        </nav>
        <div>
          <p className="mb-3 text-sm font-bold text-white">Sosial</p>
          <div className="flex gap-3">{heroSocials.map((s) => <a key={s.name} href={s.href} {...ext} aria-label={s.name} className="glass grid h-10 w-10 place-items-center rounded-lg text-white hover:border-brand/60"><SocialIcon name={s.icon} /></a>)}</div>
        </div>
      </div>
      <div className="wrap flex items-center justify-between border-t border-white/10 py-5 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} {NAME}. All rights reserved.</p>
        <a href="#home" className="glass inline-flex items-center gap-1 rounded-lg px-3 py-2 text-slate-300 hover:text-white"><ArrowUp size={14} /> Back to top</a>
      </div>
    </footer>
  );
}
