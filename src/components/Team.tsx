import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { researchLead } from "@/lib/content";

export function Team() {
  const lead = researchLead;
  const initials = lead.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <section id="team" className="scroll-mt-24 bg-forest-deep py-20 text-cream md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading light eyebrow="Tim" title="Penanggung jawab riset" />
        </Reveal>
        <Reveal>
          <article className="mx-auto mt-12 max-w-5xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-[auto_1fr] md:gap-10">
              <div className="flex items-center gap-4 md:block">
                {lead.photo ? (
                  <Image
                    src={lead.photo.src}
                    alt={`Foto ${lead.name}`}
                    width={lead.photo.width}
                    height={lead.photo.height}
                    className="h-24 w-24 rounded-2xl object-cover object-top md:h-36 md:w-36"
                  />
                ) : (
                  <span
                    className="font-display flex h-20 w-20 items-center justify-center rounded-2xl bg-teal/20 text-3xl text-teal-bright md:h-28 md:w-28 md:text-4xl"
                    aria-hidden
                  >
                    {initials}
                  </span>
                )}
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-bright md:mt-4">
                  {lead.role}
                </p>
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-3xl md:text-4xl">{lead.name}</h3>
                <ul className="mt-3 space-y-1 text-cream/90">
                  {lead.positions.map((position) => (
                    <li key={position}>{position}</li>
                  ))}
                </ul>

                <h4 className="mt-7 text-xs font-medium uppercase tracking-[0.2em] text-teal-bright">
                  Bidang riset
                </h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {lead.focus.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/15 px-3 py-1 text-sm text-cream/90"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <h4 className="mt-7 text-xs font-medium uppercase tracking-[0.2em] text-teal-bright">
                  Profil akademik
                </h4>
                <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                  {lead.profiles.map((profile) => (
                    <li key={profile.href}>
                      <a
                        href={profile.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-full items-start justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-teal-bright/60"
                      >
                        <span className="min-w-0">
                          <span className="block font-medium text-cream">{profile.label}</span>
                          <span className="mt-0.5 block text-sm text-cream/75 [overflow-wrap:anywhere]">
                            {profile.note}
                          </span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-teal-bright" aria-hidden />
                        <span className="sr-only">(tautan eksternal)</span>
                      </a>
                    </li>
                  ))}
                </ul>

                <p className="mt-7 text-sm leading-relaxed text-cream/75">
                  Jabatan dan afiliasi di atas adalah posisi pribadi pemimpin
                  riset. Pencantumannya tidak menyatakan dukungan, kemitraan, atau
                  pengesahan resmi dari institusi tersebut terhadap Toba Smart
                  Farming.
                </p>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
