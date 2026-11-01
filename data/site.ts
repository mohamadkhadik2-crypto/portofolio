// ====== KONFIGURASI MUDAH DIGANTI ======
// Ganti link playlist Spotify di sini. Kosongkan ("") untuk menampilkan empty state.
export const SPOTIFY_PLAYLIST_URL =
  "https://open.spotify.com/playlist/3z9qHoWx1Hyfur8zbkkRIM?si=caNIVjFmQ_6VtCR_mm8NzA&utm_source=copy-link";

export function spotifyEmbedUrl(url: string): string | null {
  const m = url.match(/playlist\/([A-Za-z0-9]+)/);
  return m ? `https://open.spotify.com/embed/playlist/${m[1]}?utm_source=generator&theme=0` : null;
}

export const NAME = "Mohamad Kadik";
export const CV_PATH = "/cv-Mohamad%20Kadik.pdf"; // file: public/cv-Mohamad Kadik.pdf
export const PROFILE_PHOTO = "/profile.jpg"; // file: public/profile.jpg

export const nav = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Portofolio", id: "portfolio" },
  { label: "Contact", id: "contact" },
];

export const socials = [
  { name: "GitHub", href: "https://github.com/mohamadkhadik2-crypto", icon: "github" },
  { name: "Instagram", href: "https://www.instagram.com/khadiqtoretto?exln=bHF4bzVrZGZnZzRu", icon: "instagram" },
  { name: "TikTok", href: "https://www.tiktok.com/@hadiq0504?_r=1&_t=ZS-9B2IO34p4FE", icon: "tiktok" },
  { name: "Figma", href: "https://www.figma.com/design/LABpFsHr6US0bbPQNfailU/Untitled?node-id=1-3&t=O5XeYVr6iN3mLddR-1", icon: "figma" },
  { name: "Spotify", href: "https://open.spotify.com/user/31hs5foeyszt2l3yq4onlssyjuse?si=s6mzJbywR7e2lAw-YUQhyA&utm_source=copy-link", icon: "spotify" },
];

export const interests = [
  "AI & Data Science", "Computer Vision", "Deep Learning", "Frontend Development", "UI/UX Design",
  "Backend Development", "Cloud Computing", "System Integration", "Automation", "Internet of Things",
];

export const education = [
  { name: "SMP Mu'alimin Mu'alimat", period: "2016–2019", note: "Pendidikan menengah pertama." },
  { name: "SMK Fathul Amin Gedongan", period: "2020–2023", note: "Jurusan Teknik Instalasi Listrik." },
  { name: "UIN Siber Syekh Nurjati Cirebon", period: "2023–Sekarang", note: "Program Studi Informatika.", href: "https://uinssc.ac.id/" },
];

// Tambahkan sertifikat: taruh gambar di public/certificates/ lalu isi di sini.
export const certificates: { title: string; src: string }[] = [
  // { title: "Nama Sertifikat", src: "/certificates/nama-file.jpg" },
];

export const techStack = [
  { group: "Programming Languages", items: ["Python", "JavaScript", "TypeScript", "PHP"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { group: "Backend & Database", items: ["Node.js", "Laravel", "MySQL", "MariaDB", "Firebase", "Supabase"] },
  { group: "AI & Computer Vision", items: ["Python", "OpenCV", "YOLOv8", "PyTorch"] },
  { group: "DevOps & Cloud", items: ["Docker", "Docker Compose", "GitHub Actions", "Nginx", "AWS EC2"] },
  { group: "Tools", items: ["Figma", "Git", "GitHub", "VS Code", "Label Studio"] },
];
