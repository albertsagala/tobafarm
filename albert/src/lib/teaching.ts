/**
 * Teaching materials published on this site.
 *
 * PDFs live in `public/kuliah/<slug>/` and are served from `/kuliah/<slug>/`.
 * Example: `public/kuliah/wireless-sensor-network/01-pengantar.pdf`
 * becomes href `/kuliah/wireless-sensor-network/01-pengantar.pdf`.
 *
 * Popular essays use `public/kuliah/tulisan/`.
 * Leave `materials` or `readings` empty until a file is ready to publish.
 */

export type TeachingFile = {
  title: string;
  href: string;
};

export type Course = {
  slug: string;
  title: string;
  slides: TeachingFile[];
  modules: TeachingFile[];
};

export type Reading = {
  title: string;
  href: string;
};

export const courses: Course[] = [
  {
    slug: "wireless-sensor-network",
    title: "Wireless Sensor Network",
    slides: [],
    modules: [],
  },
  {
    slug: "antar-jaringan",
    title: "Antar Jaringan",
    slides: [],
    modules: [],
  },
  {
    slug: "keamanan-siber",
    title: "Keamanan Siber",
    slides: [],
    modules: [],
  },
  {
    slug: "jaringan-komputer",
    title: "Jaringan Komputer",
    slides: [],
    modules: [],
  },
];

export const readings: Reading[] = [];
