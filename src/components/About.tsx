import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { placeholders } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-cream-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Toba Smart Farming"
            description="An applied research and technology initiative working at the intersection of agriculture, sensing, computation, and climate engineering."
          />
        </Reveal>
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/about.jpg"
                alt="Instrumentation and plant material arranged as a sensing and control research still life"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <div className="space-y-6 text-[17px] leading-relaxed text-muted">
              <p>
                The initiative is concerned with how crops, climate, energy, and
                computation interact inside tightly instrumented growing
                environments. The working premise is straightforward: if
                environmental states can be observed with sufficient spatial and
                temporal resolution, then cultivation decisions can be made with
                greater discipline.
              </p>
              <p>
                Work is organized around indoor vertical farming as a research
                platform — a setting in which lighting, airflow, irrigation, and
                climate can be treated as engineered variables rather than
                background conditions.
              </p>
              <p>
                {placeholders.region}. {placeholders.affiliations}.
              </p>
              <blockquote className="border-l-2 border-teal pl-5 text-forest-deep">
                The site presents research directions, system concepts, and
                demonstration themes. It does not report unpublished
                experimental results or institutional claims that have not been
                verified for public release.
              </blockquote>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
