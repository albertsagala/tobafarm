export const site = {
  name: "Toba Smart Farming",
  shortName: "Toba",
  url: "https://www.tobasmartfarming.com",
  tagline: "Riset pertanian dalam ruang berbasis kontainer",
  description:
    "Toba Smart Farming meneliti pertanian dalam ruang di kontainer 10 kaki: pemantauan dengan jaringan sensor nirkabel, pemetaan mikroklimat spasial, dan pengujian kontrol iklim berbasis AI.",
  locale: "id_ID",
  language: "id",
  email: "albertsagala333@gmail.com",
} as const;

export const nav = [
  { href: "#about", label: "Tentang" },
  { href: "#facility", label: "Fasilitas" },
  { href: "#projects", label: "Riset & Proyek" },
  { href: "#team", label: "Tim" },
  { href: "#contact", label: "Kontak" },
] as const;

export function isValidEmail(value: string | undefined | null): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}
