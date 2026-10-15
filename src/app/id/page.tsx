import { AcademicOverview } from "@/components/AcademicOverview";
import type { Metadata } from "next";
import { About } from "@/components/About";
import { Articles } from "@/components/Articles";
import { ResearchStories, CollaborationPaths, ResourceLinks } from "@/components/ResearchStories";
import { Facility } from "@/components/Facility";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Research } from "@/components/Research";
import { Team } from "@/components/Team";

export const metadata: Metadata = {
  title: "Riset Pertanian dalam Ruang Berbasis Kontainer",
  description: "Fasilitas indoor farming 10 kaki untuk jaringan sensor, analisis mikroklimat spasial, dan kontrol iklim berbasis AI.",
  alternates: { canonical: "/id/", languages: { en: "/", id: "/id/" } },
};

export default function Home() {
  return (
    <>
      <Header locale="id" />
      <main id="main">
        <Hero locale="id" />
        <ResearchStories locale="id" />
        <About />
        <Facility />
        <Gallery />
        <Articles />
        <Research />
        <AcademicOverview locale="id" />
        <Team />
        <ResourceLinks locale="id" />
        <CollaborationPaths locale="id" />
      </main>
      <Footer locale="id" />
    </>
  );
}

