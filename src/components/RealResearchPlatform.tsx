import Image from "next/image";
import { Camera } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

type FacilityPhoto = {
  title: string;
  caption: string;
  /** Public path, for example `/images/facility/container.jpg`, once an authentic photograph exists. */
  src?: string;
  wide?: boolean;
};

/**
 * Leave `src` unset until a photograph from the experimental facility is
 * available. These frames must not be filled with stock or generated images.
 */
const photos: FacilityPhoto[] = [
  {
    title: "10-foot container system",
    caption:
      "Exterior or interior of the container-based indoor vertical farm. This frame is reserved for a photograph of the actual 10-foot system.",
    wide: true,
  },
  {
    title: "Sensors",
    caption:
      "IoT nodes as installed in the container, including their position relative to the canopy.",
  },
  {
    title: "Climate-control actuators",
    caption:
      "HVAC, humidification, irrigation, or lighting hardware that acts on the measured climate.",
  },
  {
    title: "Monitoring dashboard",
    caption:
      "The interface used to inspect time-series environmental data and actuator state.",
  },
  {
    title: "Cultivation racks",
    caption:
      "Vertical growing racks inside the container, shown as built rather than as a concept render.",
  },
];

function FacilityFrame({ photo }: { photo: FacilityPhoto }) {
  return (
    <figure className="flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--line)] bg-white">
      <div className={`relative ${photo.wide ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
        {photo.src ? (
          <Image
            src={photo.src}
            alt={photo.title}
            fill
            sizes={
              photo.wide
                ? "(min-width: 1024px) 80vw, 100vw"
                : "(min-width: 1024px) 40vw, 100vw"
            }
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 border border-dashed border-forest/25 bg-forest-deep/[0.03] px-6 text-center">
            <Camera className="h-6 w-6 text-teal" aria-hidden />
            <p className="text-sm font-medium text-forest-deep">
              Facility photograph pending
            </p>
            <p className="max-w-sm text-xs leading-relaxed text-muted">
              Reserved for an authentic photograph of the experimental system.
              Stock and generated images are not shown here.
            </p>
          </div>
        )}
      </div>
      <figcaption className="flex flex-1 flex-col p-6">
        <p className="font-display text-2xl text-forest-deep">{photo.title}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{photo.caption}</p>
      </figcaption>
    </figure>
  );
}

export function RealResearchPlatform() {
  const [primary, ...details] = photos;

  return (
    <section id="facility" className="scroll-mt-24 bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Real research platform"
            title="The 10-foot container, as documented"
            description="This record is for photographs of the working system: the container, its sensors, climate-control actuators, monitoring dashboard, and cultivation racks. Empty frames stay empty until those photographs are available."
          />
        </Reveal>
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal className="lg:col-span-2">
            <FacilityFrame photo={primary} />
          </Reveal>
          {details.map((photo, index) => (
            <Reveal key={photo.title} delayMs={index * 70}>
              <FacilityFrame photo={photo} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
