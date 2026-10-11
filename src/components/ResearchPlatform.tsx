import Image from "next/image";
import { Box, Layers, ThermometerSun } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const features = [
  {
    icon: Box,
    title: "Container as laboratory",
    body: "A shipping-container envelope provides a bounded volume in which climate, lighting, and airflow can be specified, instrumented, and revised.",
  },
  {
    icon: Layers,
    title: "Vertical production geometry",
    body: "Stacked growing layers increase canopy area per floor footprint and create vertical microclimate structure that must be measured, not assumed uniform.",
  },
  {
    icon: ThermometerSun,
    title: "Controlled environment agriculture",
    body: "The platform is intended for repeatable trials: lighting recipes, irrigation regimes, and climate set-points that can be compared under documented conditions.",
  },
];

export function ResearchPlatform() {
  return (
    <section
      id="platform"
      className="relative scroll-mt-24 overflow-hidden bg-forest-deep py-24 text-cream md:py-32"
    >
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-teal/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Research platform"
            title="Container-based indoor vertical farming"
            description="The primary experimental setting is an indoor vertical farm housed in a containerized volume. The container is treated as both a production system and an instrumented research facility."
          />
        </Reveal>
        <div className="mt-16 grid items-stretch gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-white/10 md:min-h-[420px]">
              <Image
                src="/images/platform.jpg"
                alt="Interior of a containerized indoor farm with vertical cultivation and grow lighting"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="grid gap-5">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delayMs={index * 90}>
                <article className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-teal/40">
                  <div className="flex items-center gap-3">
                    <feature.icon className="h-5 w-5 text-teal-bright" aria-hidden />
                    <h3 className="font-display text-2xl">{feature.title}</h3>
                  </div>
                  <p className="mt-3 leading-relaxed text-cream/70">{feature.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
