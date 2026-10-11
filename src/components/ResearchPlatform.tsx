import { Activity, Brain, Radio, ThermometerSun } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const features = [
  {
    icon: Radio,
    title: "IoT sensing",
    body: "Environmental nodes observe temperature, humidity, CO₂, photosynthetic light, and airflow at more than one point in the growing volume. The network is the measurement layer for later analysis and control, not a single room average.",
  },
  {
    icon: Activity,
    title: "Spatial microclimate monitoring",
    body: "Readings stay tied to position across racks and height. The aim is to reconstruct gradients created by lighting, airflow, and canopy structure, so control is not based on one thermostat.",
  },
  {
    icon: Brain,
    title: "Reinforcement learning",
    body: "Climate policy is sequential: an action changes the next state, the crop environment, and energy use. Reinforcement learning is studied as a candidate method under agronomic and safety constraints. It is not presented here as a finished controller.",
  },
  {
    icon: ThermometerSun,
    title: "Climate control",
    body: "HVAC, humidification, irrigation, and lighting are the actuation channels that close the loop. Set-points are documented experimental variables, and energy use is treated as part of the control problem.",
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
            title="A 10-foot container as an instrumented farm"
            description="The experimental system is a 10-foot container-based indoor vertical farm. Sensing, spatial monitoring, learning, and climate actuation are designed as one loop: measure the volume, retain where each reading came from, and intervene only through documented control channels."
          />
        </Reveal>
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delayMs={index * 80}>
              <article className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-teal/40 md:p-8">
                <div className="flex items-center gap-3">
                  <feature.icon className="h-5 w-5 text-teal-bright" aria-hidden />
                  <h3 className="font-display text-2xl">{feature.title}</h3>
                </div>
                <p className="mt-4 leading-relaxed text-cream/90">{feature.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-cream/75">
            Photographs of this container, its sensors, actuators, dashboard,
            and racks are reserved for the facility record below. Illustrative
            images are not used in their place.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
