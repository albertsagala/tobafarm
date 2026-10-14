import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
 const lastModified = new Date("2026-10-14");
 const pages = [["/","weekly",1],["/collaboration/","monthly",0.9],["/articles/horizontal-temperature-gradient/","monthly",0.9],["/articles/ac-and-microclimate-uniformity/","monthly",0.9],["/articles/vpd-container-farm/","monthly",0.9],["/id/","weekly",0.9],["/id/kolaborasi/","monthly",0.8],["/id/artikel/gradien-suhu-horizontal-rak/","monthly",0.8],["/id/artikel/ac-dan-keseragaman-mikroklimat/","monthly",0.8],["/id/artikel/vpd-container-farm/","monthly",0.8]] as const;
 return pages.map(([path,changeFrequency,priority])=>({url:`${site.url}${path === "/" ? "" : path}`,lastModified,changeFrequency,priority}));
}
