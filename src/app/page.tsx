import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Facility } from "@/components/Facility";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Research } from "@/components/Research";
import { Team } from "@/components/Team";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Facility />
        <Research />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
