export type Project = {
  slug: string; 
  title: string; 
  tags: string[]; 
  desc: string;
  features?: string[]; 
  problem?: string; 
  github?: string; 
  image?: string;
  detailImage?: string; // Tambahkan properti ini
};

export const projects: Project[] = [
  { 
    slug: "sia-pirasi", 
    title: "SIA-PIRASI", 
    image: "/projects/sia-pirasi.png", // Gambar untuk halaman depan
    detailImage: "/projects/sia-pirasi-detail.png", // Gambar khusus halaman detail
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "PHP", "MySQL"],
    desc: "Sistem layanan pengaduan dan penyampaian aspirasi mahasiswa berbasis web dengan fitur pelacakan status dan pengelolaan admin.",
    features: ["Pengaduan dan aspirasi mahasiswa", "Pelacakan status", "Pengelolaan oleh admin"] 
  },
  // Proyek lainnya...
];