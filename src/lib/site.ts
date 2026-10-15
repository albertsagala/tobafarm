export const site = {
  name: "Toba Smart Farming",
  shortName: "Toba",
  url: "https://www.tobasmartfarming.com",
  tagline: "Container-based indoor farming research",
  description:
    "Toba Smart Farming develops and evaluates container-based indoor farming through distributed sensing, spatial microclimate analysis, and AI-assisted climate control.",
  locale: "en_US",
  language: "en",
  email: "albertsagala333@gmail.com",
} as const;

export const navEn = [
  { href: "/#about", label: "About" },
  { href: "/#facility", label: "Facility" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#articles", label: "Articles" },
  { href: "/publications/", label: "Publications & Service" },
  { href: "/#team", label: "Team" },
  { href: "/supervision/", label: "Students" },
  { href: "/teaching/", label: "Teaching" },
  { href: "/collaboration/", label: "Collaboration" },
] as const;

export const navId = [
  { href: "/id/#about", label: "Tentang" },
  { href: "/id/#facility", label: "Fasilitas" },
  { href: "/id/#gallery", label: "Galeri" },
  { href: "/id/#articles", label: "Artikel" },
  { href: "/id/publikasi/", label: "Publikasi & PkM" },
  { href: "/id/#team", label: "Tim" },
  { href: "/id/bimbingan/", label: "Mahasiswa" },
  { href: "/id/materi-ajar/", label: "Materi Ajar" },
  { href: "/id/kolaborasi/", label: "Kolaborasi" },
] as const;

export const nav = navEn;

export function isValidEmail(value: string | undefined | null): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}
