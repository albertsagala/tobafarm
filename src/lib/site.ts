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
  { href: "/#climate", label: "Climate" },
  { href: "/#research-stories", label: "Research" },
  { href: "/#facility", label: "Facility" },
  { href: "/#articles", label: "Insights" },
  { href: "/#projects", label: "Research Areas" },
  { href: "/#resources", label: "Resources" },
  { href: "/services/", label: "Services & Training" },
] as const;

export const navId = [
  { href: "/id/#climate", label: "Cuaca" },
  { href: "/id/#research-stories", label: "Riset" },
  { href: "/id/#facility", label: "Fasilitas" },
  { href: "/id/#articles", label: "Artikel" },
  { href: "/id/#projects", label: "Bidang Riset" },
  { href: "/id/#resources", label: "Sumber Belajar" },
  { href: "/id/layanan/", label: "Layanan & Pelatihan" },
] as const;

export const nav = navEn;

export function isValidEmail(value: string | undefined | null): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}
