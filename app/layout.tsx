import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MusicPlayer from "@/components/MusicPlayer";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Mohamad Kadik | Informatics Student & Developer",
  description: "Portofolio Mohamad Kadik, mahasiswa Informatika dan developer yang tertarik pada AI, software development, dan teknologi.",
  openGraph: { title: "Mohamad Kadik | Informatics Student & Developer", type: "website", locale: "id_ID" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={font.className}>
        <div className="stars" aria-hidden />
        <Navbar />
        <MusicPlayer />
        {children}
      </body>
    </html>
  );
}
