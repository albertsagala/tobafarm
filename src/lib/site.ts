export const site = {
  name: "Toba Smart Farming",
  shortName: "Toba",
  url: "https://www.tobasmartfarming.com",
  tagline: "Engineering the Future of Intelligent Farming",
  description:
    "Toba Smart Farming advances intelligent agriculture through integrated sensing, data-driven analysis, and AI-based environmental control. Our research bridges experimental indoor farming systems with practical engineering solutions for sustainable food production.",
  locale: "en_US",
} as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#pillars", label: "Technology" },
  { href: "#platform", label: "Research Platform" },
  { href: "#facility", label: "Facility" },
  { href: "#architecture", label: "Architecture" },
  { href: "#innovation", label: "Innovation" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Collaborate" },
] as const;

export const placeholders = {
  email: "Email address — verification pending",
  phone: "Phone number — verification pending",
  address: "Facility address — verification pending",
  region:
    "Geographic focus: Lake Toba region, North Sumatra, Indonesia (facility details to be confirmed)",
  affiliations: "Institutional affiliations — verification pending",
  publications: "Publication list — not yet published on this site",
} as const;
