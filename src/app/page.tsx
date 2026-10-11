import { About } from "@/components/About";
import { Architecture } from "@/components/Architecture";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Innovation } from "@/components/Innovation";
import { Pillars } from "@/components/Pillars";
import { Projects } from "@/components/Projects";
import { ResearchPlatform } from "@/components/ResearchPlatform";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Pillars />
        <ResearchPlatform />
        <Architecture />
        <Innovation />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
