import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site.url}/`,
      lastModified: new Date("2026-10-14"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${site.url}/artikel/ac-dan-keseragaman-mikroklimat/`,
      lastModified: new Date("2026-10-14"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/artikel/vpd-container-farm/`,
      lastModified: new Date("2026-10-14"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
