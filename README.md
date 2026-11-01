# Portofolio Mohamad Kadik

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Lucide React.

## Menjalankan
    npm install
    npm run dev      # http://localhost:3000
    npm run build    # cek build produksi

## Mengganti konten
- **Playlist Spotify**: ubah `SPOTIFY_PLAYLIST_URL` di `data/site.ts` (link `https://open.spotify.com/playlist/...`). Kosongkan untuk menampilkan empty state.
- **CV**: taruh file `cv-Mohamad Kadik.pdf` di folder `public/`.
- **Foto profil**: taruh `profile.jpg` di `public/` (jika tidak ada, tampil inisial MK).
- **Sertifikat**: taruh gambar di `public/certificates/`, lalu tambahkan `{ title, src }` pada array `certificates` di `data/site.ts`.
- **Audio background**: taruh `background-music.mp3` di `public/audio/`. Gunakan musik original/royalty-free. Tidak ada autoplay.
- **Proyek**: edit `data/projects.ts` (tambah `problem`, `features`, `github` jika sudah dipastikan sesuai).
- **Gambar proyek**: `npm run images` membuat ulang SVG di `public/projects/`, atau ganti file dengan nama slug yang sama.

## Catatan
- Link repo GitHub belum dipasangkan ke proyek karena kecocokannya belum pasti.
- Urutan homepage: Home, About, Music, Education, Portofolio, Contact, Footer. Navbar hanya Home, About, Portofolio, Contact.
