export type Project = {
  slug: string; title: string; tags: string[]; desc: string;
  features?: string[]; problem?: string; github?: string;
};
// github: isi hanya jika repositori benar-benar sesuai proyek, contoh:
// github: "https://github.com/mohamadkhadik2-crypto/uas-khadik"
export const projects: Project[] = [
  { slug: "sia-pirasi", title: "SIA-PIRASI", tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "PHP", "MySQL"],
    desc: "Sistem layanan pengaduan dan penyampaian aspirasi mahasiswa berbasis web dengan fitur pelacakan status dan pengelolaan admin.",
    features: ["Pengaduan dan aspirasi mahasiswa", "Pelacakan status", "Pengelolaan oleh admin"] },
  { slug: "yolov8-object-detection", title: "YOLOv8 Object Detection", tags: ["Python", "YOLOv8", "OpenCV", "PyTorch"],
    desc: "Sistem deteksi objek berbasis computer vision." },
  { slug: "sistem-pendukung-keputusan", title: "Sistem Pendukung Keputusan", tags: ["React", "SAW", "TOPSIS"],
    desc: "Sistem pengambilan keputusan berbasis multi-kriteria.", features: ["Metode SAW", "Metode TOPSIS"] },
  { slug: "cloud-infrastructure-cicd", title: "Cloud Infrastructure & CI/CD", tags: ["Docker", "Docker Compose", "GitHub Actions", "Nginx", "AWS EC2"],
    desc: "Deployment aplikasi dan automasi pipeline CI/CD." },
  { slug: "face-detection-recognition", title: "Face Detection & Recognition", tags: ["Python", "Flask", "OpenCV", "Haar Cascade", "LBPH"],
    desc: "Dashboard deteksi dan pengenalan wajah.", features: ["Deteksi wajah (Haar Cascade)", "Pengenalan wajah (LBPH)"] },
  { slug: "deteksi-uang-rupiah", title: "Sistem Deteksi Uang Rupiah", tags: ["Python", "YOLOv8", "Label Studio"],
    desc: "Deteksi nominal uang Rp2.000, Rp5.000, dan Rp10.000.", features: ["Nominal Rp2.000, Rp5.000, Rp10.000"] },
  { slug: "aplikasi-klinik-gigi", title: "Aplikasi Klinik Gigi", tags: ["React", "Firebase"],
    desc: "Aplikasi pengelolaan pasien dan rekam medis dengan role Admin dan Dokter.", features: ["Pengelolaan pasien", "Rekam medis", "Role Admin dan Dokter"] },
  { slug: "sipusku-library-app", title: "Sipusku Library App", tags: ["React Native", "Expo Router", "Supabase"],
    desc: "Aplikasi perpustakaan digital." },
  { slug: "digitech-company-profile", title: "DigiTech Company Profile", tags: ["Next.js", "MariaDB", "Prisma", "Docker", "NextAuth"],
    desc: "Company profile dan sistem administrasi." },
  { slug: "sistem-pengaduan-masyarakat", title: "Sistem Pengaduan Masyarakat", tags: ["Next.js", "MariaDB"],
    desc: "Sistem pengelolaan pengaduan masyarakat." },
  { slug: "image-processing-frequency-domain", title: "Image Processing Frequency Domain", tags: ["Python", "OpenCV", "NumPy", "FFT", "Tkinter"],
    desc: "Pengolahan citra menggunakan transformasi domain frekuensi." },
];
