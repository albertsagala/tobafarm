import type { MetadataRoute } from "next";
import { person } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: person.url,
      lastModified: new Date("2026-10-11"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${person.url}/supervision/`,
      lastModified: new Date("2026-10-13"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
