"use client";
import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

// File audio: public/audio/background-music.mp3 (gunakan musik original / royalty-free)
export default function MusicPlayer() {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [vol, setVol] = useState(0.5);
  const [error, setError] = useState(false);

  async function toggle() {
    const a = ref.current; if (!a) return;
    if (playing) { a.pause(); setPlaying(false); return; }
    try { await a.play(); setPlaying(true); setError(false); } catch { setError(true); setPlaying(false); }
  }

  return (
    <div className="glass fixed bottom-4 right-4 z-40 flex items-center gap-3 rounded-2xl px-3 py-2 shadow-lg" role="region" aria-label="Background music">
      <audio ref={ref} src="/audio/background-music.mp3" loop preload="none" onError={() => { setError(true); setPlaying(false); }} />
      <button onClick={toggle} aria-label={playing ? "Pause musik" : "Putar musik"}
        className="grid h-10 w-10 place-items-center rounded-full bg-brand/25 text-white ring-1 ring-brand/50 hover:bg-brand/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky">
        {playing ? <Pause size={18} /> : <Play size={18} />}
      </button>
      <div className="hidden min-w-[110px] sm:block">
        <p className="text-xs font-bold text-white">Background Music</p>
        <p className="text-[11px] text-slate-400">{error ? "Audio belum tersedia" : playing ? "Sedang diputar" : "Putar jika mau"}</p>
      </div>
      <div className={`eq flex h-5 items-end gap-0.5 ${playing ? "on" : ""}`} aria-hidden><span /><span /><span /><span /></div>
      <button onClick={() => { setMuted(!muted); if (ref.current) ref.current.muted = !muted; }} aria-label={muted ? "Aktifkan suara" : "Bisukan"} className="text-slate-300 hover:text-white">
        {muted || vol === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
      <input type="range" min={0} max={1} step={0.05} value={vol} aria-label="Volume" className="hidden w-20 sm:block"
        onChange={(e) => { const v = Number(e.target.value); setVol(v); if (ref.current) ref.current.volume = v; }} />
    </div>
  );
}
