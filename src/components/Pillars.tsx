import { Brain, Cpu, Leaf, Radio } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const pillars = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    body: "Models for environmental prediction, decision support, and sequential control. Emphasis on methods that remain inspectable in an experimental setting.",
  },
  {
    icon: Radio,
    title: "IoT Sensor Networks",
    body: "Distributed sensing of temperature, humidity, CO₂, light, and related microclimate variables — designed for dense spatial coverage rather than a single room average.",
  },
  {
    icon: Cpu,
    title: "Intelligent Control",
    body: "Closed-loop actuation of climate, irrigation, and lighting. Control is treated as an engineering problem with energy, crop, and operational constraints.",
  },
  {
    icon: Leaf,
    title: "Precision Agriculture",
    body: "Cultivation practices informed by measurement: canopy conditions, resource use, and environmental gradients inside the growing volume.",
  },
];

export function Pillars() {
  return (
    <section id="pillars" className="scroll-mt-24 bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Technology pillars"
            title="Four coupled lines of work"
            description="The program is not a collection of isolated tools. Sensing, models, control, and agronomy are designed to inform one another."
          />
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delayMs={index * 80}>
              <article className="group h-full rounded-3xl border border-[var(--line)] bg-cream-soft p-8 transition hover:-translate-y-1 hover:border-teal/30 hover:shadow-[0_24px_50px_-28px_rgba(12,36,28,0.35)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-forest text-teal-bright transition group-hover:bg-teal group-hover:text-forest-deep">
                  <pillar.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-display mt-6 text-2xl text-forest-deep">
                  {pillar.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{pillar.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
