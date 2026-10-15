import type { Metadata } from "next";
import { AcademicPage } from "@/components/AcademicPage";
export const metadata: Metadata = {
  title: "Albert Sagala — Publikasi & Pengabdian kepada Masyarakat",
  description: "Jurnal internasional, jurnal nasional, prosiding internasional, dan kegiatan pengabdian Albert Sagala.",
  alternates: {canonical: "/id/publikasi/", languages: {en: "/publications/", id: "/id/publikasi/"}},
};
export default function Page() { return <AcademicPage locale="id"/>; }
