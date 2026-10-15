import type { Metadata } from "next";
import { AcademicPage } from "@/components/AcademicPage";
export const metadata: Metadata = {
  title: "Albert Sagala — Publications & Community Engagement",
  description: "International journals, national journals, international conference proceedings, and community programmes by Albert Sagala.",
  alternates: {canonical: "/publications/", languages: {en: "/publications/", id: "/id/publikasi/"}},
};
export default function Page() { return <AcademicPage locale="en"/>; }
