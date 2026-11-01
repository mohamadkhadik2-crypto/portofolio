export type Project = {
  slug: string;
  title: string;
  tags: string[];
  desc: string;
  features?: string[];
  problem?: string;
  github?: string;
  image?: string;
  detailImage?: string;
};

export const projects: Project[] = [
  {
    slug: "sia-pirasi",
    title: "SIA-PIRASI",
    image: "/projects/sia-pirasi.png",
    detailImage: "/projects/sia-pirasi-detail.png",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "PHP", "MySQL"],
    desc: "Sistem layanan pengaduan dan penyampaian aspirasi mahasiswa berbasis web dengan fitur pelacakan status dan pengelolaan admin.",
    features: [
      "Pengaduan dan aspirasi mahasiswa",
      "Pelacakan status",
      "Pengelolaan oleh admin",
    ],
  },
  // Proyek Anda yang lain tetap ada di bawah sini...
];