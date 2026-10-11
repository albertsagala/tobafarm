import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const projects = [
  {
    status: "Demonstration theme",
    title: "Instrumented vertical rack",
    body: "A multi-layer growing rack treated as a sensing and actuation testbed: canopy-level climate, lighting channels, and irrigation as independently documented variables.",
    image: "/images/project-rack.jpg",
    alt: "Leafy canopy on a vertical rack with nearby sensing hardware",
  },
  {
    status: "System concept",
    title: "Facility telemetry console",
    body: "A conceptual operations view for time-series environmental data, alarm states, and actuator commands. Interface design is part of the research platform, not a commercial product listing.",
    image: "/images/project-console.jpg",
    alt: "Monitoring consoles in a darkened operations room",
  },
  {
    status: "Research direction",
    title: "Zone-level climate experiments",
    body: "Planned comparison of climate strategies across spatially partitioned zones inside the container. Protocols and outcomes will be published only when they are ready for public release.",
    image: "/images/project-zones.jpg",
    alt: "Partitioned indoor cultivation zones under mixed lighting",
  },
];

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Projects & demonstrations"
            title="Work in public outline"
            description="The items below describe demonstration themes and system concepts. Names, partners, dates, and measured outcomes are omitted until they can be stated accurately."
          />
        </Reveal>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delayMs={index * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--line)] bg-cream-soft">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-teal">
                    {project.status}
                  </p>
                  <h3 className="font-display mt-3 text-2xl text-forest-deep">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted">
                    {project.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
