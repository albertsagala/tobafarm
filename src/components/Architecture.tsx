import { Activity, Cloud, Cpu, Radio, Settings2 } from "lucide-react";
import { ArchitectureFlow } from "@/components/ArchitectureFlow";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const layers = [
  {
    icon: Radio,
    title: "Sensors",
    body: "Environmental nodes for temperature, humidity, CO₂, photosynthetic lighting, and related signals across racks and zones.",
  },
  {
    icon: Cpu,
    title: "Edge computing",
    body: "On-site processing for filtering, local buffering, and low-latency control where round-trips to the cloud are unnecessary.",
  },
  {
    icon: Cloud,
    title: "Cloud services",
    body: "Longer-horizon storage, model training, and remote observation of facility state. Implementation details remain to be specified.",
  },
  {
    icon: Activity,
    title: "Analytics",
    body: "Spatial and temporal analysis of microclimate, resource use, and system behavior — intended to support experiment design as much as operations.",
  },
  {
    icon: Settings2,
    title: "Actuators",
    body: "HVAC, humidification, irrigation, and lighting channels that close the loop from observation to environmental intervention.",
  },
];

export function Architecture() {
  return (
    <section id="architecture" className="scroll-mt-24 bg-cream-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="System architecture"
            title="From observation to actuation"
            description="The reference architecture is a sensing-to-control stack. It is presented as a system concept for the research platform, not as a claim that every layer is already deployed."
          />
        </Reveal>
        <Reveal>
          <div className="mt-14 rounded-3xl border border-[var(--line)] bg-cream px-4 py-8">
            <ArchitectureFlow />
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {layers.map((layer, index) => (
            <Reveal key={layer.title} delayMs={index * 70}>
              <article className="h-full rounded-3xl border border-[var(--line)] bg-white p-6 transition hover:-translate-y-1 hover:border-teal/30 hover:shadow-[0_20px_40px_-28px_rgba(12,36,28,0.4)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest/8 text-forest">
                  <layer.icon className="h-5 w-5" aria-hidden />
                </div>
                <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-teal">
                  Layer {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-2 text-xl text-forest-deep">
                  {layer.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{layer.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
