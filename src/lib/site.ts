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
  { href: "/#projects", label: "Research" },
  { href: "/#team", label: "Team" },
  { href: "/collaboration/", label: "Collaboration" },
] as const;

export const navId = [
  { href: "/id/#about", label: "Tentang" },
  { href: "/id/#facility", label: "Fasilitas" },
  { href: "/id/#gallery", label: "Galeri" },
  { href: "/id/#articles", label: "Artikel" },
  { href: "/id/#projects", label: "Riset & Proyek" },
  { href: "/id/#team", label: "Tim" },
  { href: "/id/kolaborasi/", label: "Kolaborasi" },
] as const;

export const nav = navEn;

export function isValidEmail(value: string | undefined | null): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}
