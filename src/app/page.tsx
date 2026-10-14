import { About } from "@/components/About";
import { Articles } from "@/components/Articles";
import { Contact } from "@/components/Contact";
import { Facility } from "@/components/Facility";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Research } from "@/components/Research";
import { Team } from "@/components/Team";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Facility />
        <Gallery />
        <Articles />
        <Research />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
