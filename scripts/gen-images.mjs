// Membuat 11 ilustrasi SVG 16:9 ke public/projects/. Jalankan: npm run images
import { writeFileSync } from "node:fs";
const W = 1280, H = 720;
const cfg = [
  ["sia-pirasi", "dash", "Aspirasi & Pelacakan Status", 217],
  ["yolov8-object-detection", "detect", "Vehicle Detection", 205],
  ["sistem-pendukung-keputusan", "rank", "SAW · TOPSIS Ranking", 230],
  ["cloud-infrastructure-cicd", "pipe", "CI/CD Pipeline", 195],
  ["face-detection-recognition", "face", "Face Recognition", 250],
  ["deteksi-uang-rupiah", "money", "Rupiah Detection", 160],
  ["aplikasi-klinik-gigi", "records", "Patient Records", 188],
  ["sipusku-library-app", "phone", "Library Mobile App", 222],
  ["digitech-company-profile", "site", "Company Profile & Admin", 210],
  ["sistem-pengaduan-masyarakat", "table", "Report Management", 200],
  ["image-processing-frequency-domain", "spectrum", "Frequency Spectrum", 240],
];
const c = (h, l = 60, a = 1) => `hsla(${h},85%,${l}%,${a})`;
const rect = (x, y, w, h, f, r = 10, s = "none") => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${f}" stroke="${s}"/>`;
const txt = (x, y, t, s = 20, f = "#cbd5e1", w = 600) => `<text x="${x}" y="${y}" font-family="Arial,sans-serif" font-size="${s}" font-weight="${w}" fill="${f}">${t}</text>`;
const bars = (x, y, n, h, k) => Array.from({ length: n }, (_, i) => rect(x + i * 46, y + h - ((i * 37 + k * 13) % 70 + 30) * h / 100, 30, ((i * 37 + k * 13) % 70 + 30) * h / 100, c(h * 0 + 210 + i * 3), 6)).join("");
const motifs = {
  dash: (h) => rect(140, 180, 1000, 420, "#0b1630", 18, c(h, 50, .4)) + [0, 1, 2].map((i) => rect(170 + i * 320, 210, 290, 90, c(h, 40, .2), 12) + txt(190 + i * 320, 260, ["Diajukan", "Diproses", "Selesai"][i], 24, "#fff", 700)).join("") + [0, 1, 2, 3].map((i) => rect(170, 330 + i * 60, 940, 44, "#ffffff0d", 8) + rect(190, 344 + i * 60, 16, 16, c(h + i * 20), 8) + rect(220, 348 + i * 60, 300 - i * 30, 8, "#ffffff40", 4)).join(""),
  detect: (h) => [[160, 380, 300, 180, "car"], [520, 340, 240, 150, "car"], [820, 400, 280, 170, "truck"]].map(([x, y, w, hh, l], i) => rect(x, y, w, hh, c(h + i * 30, 50, .12), 6, c(h + i * 30, 60)) + rect(x, y - 30, 110, 30, c(h + i * 30, 50), 4) + txt(x + 10, y - 9, `${l} 0.9${i + 2}`, 18, "#fff", 700) + rect(x + 30, y + hh * .35, w - 60, hh * .4, "#ffffff18", 18)).join("") + rect(0, 560, W, 8, "#ffffff22", 0),
  rank: (h) => [0, 1, 2, 3, 4].map((i) => rect(180, 190 + i * 84, 920 - i * 150, 54, c(h + i * 10, 55, .75 - i * .1), 10) + txt(200, 226 + i * 84, `Alternatif ${i + 1}`, 22, "#fff", 700) + txt(1030 - i * 150, 226 + i * 84, (0.92 - i * 0.11).toFixed(2), 22, "#fff", 700)).join(""),
  pipe: (h) => ["Push", "Build", "Test", "Docker", "Nginx", "EC2"].map((t, i) => (i ? `<path d="M${130 + i * 180} 360H${160 + i * 180}" stroke="${c(h)}" stroke-width="3"/>` : "") + rect(60 + i * 180, 310, 110, 100, c(h + i * 8, 40, .3), 16, c(h + i * 8, 60)) + txt(78 + i * 180, 368, t, 20, "#fff", 700)).join("") + rect(160, 480, 960, 110, "#ffffff0d", 14) + [0, 1, 2, 3, 4, 5].map((i) => rect(190, 505 + i * 14, 500 - i * 40, 6, c(h, 60, .6), 3)).join(""),
  face: (h) => rect(400, 150, 480, 460, "#0b1630", 20, c(h, 55, .4)) + `<circle cx="640" cy="360" r="120" fill="${c(h, 40, .25)}"/><circle cx="600" cy="335" r="12" fill="#fff"/><circle cx="680" cy="335" r="12" fill="#fff"/><path d="M590 410Q640 450 690 410" stroke="#fff" stroke-width="6" fill="none"/>` + rect(500, 230, 280, 260, "none", 8, c(h, 70)) + rect(500, 195, 190, 32, c(h, 55), 6) + txt(512, 219, "Mohamad · 94%", 18, "#fff", 700),
  money: (h) => [[190, "2.000", 160], [440, "5.000", 200], [690, "10.000", 270]].map(([x, v, hue], i) => rect(x, 240 + i * 25, 340, 170, c(hue, 40, .35), 12, c(h + i * 20, 60)) + txt(x + 24, 340 + i * 25, `Rp${v}`, 40, "#fff", 800) + rect(x - 6, 205 + i * 25, 120, 28, c(h + i * 20, 50), 4) + txt(x + 4, 226 + i * 25, `Rp${v} 0.9${i + 5}`, 16, "#fff", 700)).join(""),
  records: (h) => rect(130, 170, 260, 430, "#0b1630", 16) + [0, 1, 2, 3, 4].map((i) => rect(150, 195 + i * 76, 220, 56, i === 1 ? c(h, 40, .4) : "#ffffff0d", 10)).join("") + rect(420, 170, 730, 100, "#0b1630", 16) + rect(420, 295, 730, 305, "#0b1630", 16) + [0, 1, 2, 3, 4, 5].map((i) => rect(450, 325 + i * 44, 670 - (i % 3) * 90, 14, "#ffffff30", 7)).join("") + `<circle cx="485" cy="220" r="26" fill="${c(h)}"/>` + txt(530, 228, "Admin · Dokter", 24, "#fff", 700),
  phone: (h) => rect(480, 90, 320, 560, "#0b1630", 40, c(h, 60, .6)) + [0, 1, 2].map((i) => rect(510, 150 + i * 150, 260, 120, c(h + i * 18, 40, .3), 14) + rect(525, 165 + i * 150, 60, 90, c(h + i * 18, 55), 6) + rect(600, 180 + i * 150, 140, 10, "#ffffff50", 5) + rect(600, 205 + i * 150, 100, 8, "#ffffff30", 4)).join("") + rect(120, 200, 300, 14, "#ffffff22", 7) + rect(860, 330, 300, 14, "#ffffff22", 7),
  site: (h) => rect(150, 130, 980, 460, "#0b1630", 18, c(h, 55, .4)) + rect(150, 130, 980, 44, "#ffffff10", 18) + rect(190, 230, 420, 36, c(h, 55, .9), 8) + rect(190, 290, 360, 12, "#ffffff40", 6) + rect(190, 315, 300, 12, "#ffffff30", 6) + rect(190, 360, 130, 40, c(h, 50), 10) + [0, 1, 2].map((i) => rect(190 + i * 300, 450, 270, 110, c(h + i * 20, 40, .22), 12)).join("") + rect(700, 220, 380, 190, c(h, 45, .25), 14) + bars(730, 250, 6, 130, 3),
  table: (h) => rect(130, 150, 1020, 460, "#0b1630", 18, c(h, 55, .4)) + rect(130, 150, 1020, 56, c(h, 40, .3), 18) + [0, 1, 2, 3, 4, 5].map((i) => rect(160, 230 + i * 62, 960, 46, "#ffffff0b", 8) + rect(180, 247 + i * 62, 80, 12, "#ffffff50", 6) + rect(300, 247 + i * 62, 380, 12, "#ffffff30", 6) + rect(940, 242 + i * 62, 150, 24, c([140, 45, 200][i % 3], 50, .6), 12)).join(""),
  spectrum: (h) => [160, 120, 80, 45].map((r, i) => `<circle cx="420" cy="360" r="${r * 1.6}" fill="${c(h + i * 12, 50, .1 + i * .08)}" stroke="${c(h, 60, .4)}"/>`).join("") + `<path d="M420 120V600M180 360H660" stroke="#ffffff25"/>` + rect(760, 190, 340, 160, "#0b1630", 12, c(h, 60, .4)) + `<path d="M780 320C840 200 880 340 940 230S1040 300 1080 210" stroke="${c(h, 70)}" stroke-width="4" fill="none"/>` + rect(760, 380, 340, 160, "#0b1630", 12, c(h, 60, .4)) + `<path d="M780 500C830 420 870 500 920 430S1010 490 1080 410" stroke="${c(h + 40, 70)}" stroke-width="4" fill="none"/>`,
};
for (const [slug, kind, label, hue] of cfg) {
  const grid = Array.from({ length: 33 }, (_, i) => `<path d="M${i * 40} 0V${H}" stroke="#ffffff08"/>`).join("") + Array.from({ length: 19 }, (_, i) => `<path d="M0 ${i * 40}H${W}" stroke="#ffffff08"/>`).join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${label}"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#050816"/><stop offset="1" stop-color="${c(hue, 12)}"/></linearGradient><radialGradient id="r" cx=".8" cy=".1" r=".6"><stop offset="0" stop-color="${c(hue, 55, .35)}"/><stop offset="1" stop-color="#0000"/></radialGradient></defs><rect width="${W}" height="${H}" fill="url(#g)"/><rect width="${W}" height="${H}" fill="url(#r)"/>${grid}${motifs[kind](hue)}${txt(60, 70, label, 30, "#fff", 800)}${rect(60, 85, 70, 4, c(hue, 60), 2)}</svg>`;
  writeFileSync(`public/projects/${slug}.svg`, svg);
}
console.log("11 gambar dibuat di public/projects/");
