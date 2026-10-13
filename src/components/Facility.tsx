import Image from "next/image";
import { ArrowDown, Cpu, Database, Radio, Settings2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SourceLink } from "@/components/SourceLink";
import { StatusBadge } from "@/components/StatusBadge";
import { facility, statusInfo, type Stage, type Status } from "@/lib/content";

const stageIcons: Record<Stage["id"], typeof Radio> = {
  sensing: Radio,
  processing: Cpu,
  storage: Database,
  actuation: Settings2,
};

const statusOrder: Status[] = ["operational", "experimental", "development"];

export function Facility() {
  const { specs, photos, stages } = facility;

  return (
    <section id="facility" className="scroll-mt-24 bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Fasilitas"
            title="Kontainer 10 kaki sebagai kebun riset terinstrumentasi"
            description={facility.summary}
          />
        </Reveal>

        <div id="platform" className="mt-14 scroll-mt-24">
          <Reveal>
            <div className="rounded-3xl border border-[var(--line)] bg-white">
              <div className="border-b border-[var(--line)] p-5 sm:p-6">
                <h3 className="font-display text-2xl text-forest-deep sm:text-3xl">
                  Spesifikasi terverifikasi
                </h3>
                <p className="mt-1 text-sm text-muted">
                  Setiap baris ditautkan ke catatan publik yang menjadi sumbernya.
                </p>
              </div>
              <dl className="divide-y divide-[var(--line)]">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="grid gap-2 p-5 sm:p-6 md:grid-cols-[13rem_1fr_auto] md:items-start md:gap-6"
                  >
                    <dt className="text-xs font-medium uppercase tracking-[0.18em] text-teal-deep md:pt-1">
                      {spec.label}
                    </dt>
                    <dd className="min-w-0">
                      <p className="text-forest-deep">{spec.value}</p>
                      <SourceLink source={spec.source} className="mt-1.5" />
                    </dd>
                    {spec.status ? (
                      <dd className="md:pt-0.5">
                        <StatusBadge status={spec.status} />
                      </dd>
                    ) : null}
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

        {photos.length > 0 ? (
          <div id="facility-photos" className="mt-14 scroll-mt-24">
            <h3 className="font-display text-2xl text-forest-deep sm:text-3xl">
              Dokumentasi foto
            </h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {photos.map((photo) => (
                <figure
                  key={photo.src}
                  className="overflow-hidden rounded-3xl border border-[var(--line)] bg-white"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="h-auto w-full"
                  />
                  <figcaption className="p-5 text-sm leading-relaxed text-muted">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        ) : null}

        <div id="architecture" className="mt-16 scroll-mt-24">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="font-display text-2xl text-forest-deep sm:text-3xl">
                Alur sistem: dari sensor ke aktuator
              </h3>
              <p className="mt-3 text-muted">
                Status setiap komponen mengikuti catatan publik terbaru, bukan
                telemetri langsung.
              </p>
            </div>
            <ul className="mx-auto mt-6 grid max-w-4xl gap-3 sm:grid-cols-3">
              {statusOrder.map((status) => (
                <li
                  key={status}
                  className="rounded-2xl border border-[var(--line)] bg-cream-soft p-4 text-sm leading-relaxed text-muted"
                >
                  <StatusBadge status={status} />
                  <p className="mt-2">{statusInfo[status].description}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <ol id="pillars" className="mt-10 grid scroll-mt-24 gap-10 lg:grid-cols-4 lg:gap-8">
            {stages.map((stage, index) => {
              const Icon = stageIcons[stage.id];
              const last = index === stages.length - 1;
              return (
                <li key={stage.id} className="relative">
                  <Reveal delayMs={index * 70} className="h-full">
                    <article className="flex h-full flex-col rounded-3xl border border-[var(--line)] bg-white p-5 sm:p-6">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest text-teal-bright">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.2em] text-teal-deep">
                            Tahap {index + 1}
                          </p>
                          <h4 className="font-display text-2xl leading-tight text-forest-deep">
                            {stage.title}
                          </h4>
                        </div>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{stage.summary}</p>
                      <ul className="mt-4 space-y-4 border-t border-[var(--line)] pt-4">
                        {stage.components.map((component) => (
                          <li key={component.name}>
                            <div className="flex flex-wrap items-start justify-between gap-2">
                              <p className="font-medium leading-snug text-forest-deep">
                                {component.name}
                              </p>
                              <StatusBadge status={component.status} />
                            </div>
                            <p className="mt-1 text-sm leading-relaxed text-muted">
                              {component.detail}
                            </p>
                            <SourceLink source={component.source} className="mt-1" />
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                  {last ? null : (
                    <ArrowDown
                      className="absolute -bottom-8 left-1/2 h-5 w-5 -translate-x-1/2 text-teal-deep lg:-right-7 lg:bottom-auto lg:left-auto lg:top-16 lg:-rotate-90 lg:translate-x-0"
                      aria-hidden
                    />
                  )}
                </li>
              );
            })}
          </ol>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted">
            Keputusan pengendali mengubah kondisi ruang tanam, lalu kondisi itu
            diukur kembali oleh sensor pada siklus berikutnya.
          </p>
        </div>
      </div>
    </section>
  );
}
