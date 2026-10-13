import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SourceLink } from "@/components/SourceLink";
import { StatusBadge } from "@/components/StatusBadge";
import {
  caseStudies,
  fieldActivities,
  publications,
  researchLead,
  type CaseStudy,
} from "@/lib/content";

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const rows = [
    { term: "Masalah", value: study.problem },
    { term: "Pendekatan", value: study.approach },
    { term: "Perangkat / data", value: study.equipment },
  ];

  return (
    <article
      id={study.id}
      className="flex h-full scroll-mt-24 flex-col rounded-3xl border border-[var(--line)] bg-white p-6 sm:p-7"
    >
      <div className="flex flex-wrap items-center gap-3">
        <StatusBadge status={study.status} />
        <span className="text-xs tracking-wide text-muted">{study.year}</span>
      </div>
      <h3 className="font-display mt-3 text-2xl leading-snug text-forest-deep">
        {study.title}
      </h3>
      <dl className="mt-5 flex-1 space-y-4 text-sm leading-relaxed">
        {rows.map((row) => (
          <div key={row.term}>
            <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-teal-deep">
              {row.term}
            </dt>
            <dd className="mt-1 text-muted">{row.value}</dd>
          </div>
        ))}
        {study.documentation.length > 0 ? (
          <div>
            <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-teal-deep">
              Dokumentasi
            </dt>
            <dd className="mt-1">
              <ul className="space-y-1">
                {study.documentation.map((doc) => (
                  <li key={doc.href + doc.label}>
                    <SourceLink source={doc} />
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ) : null}
        {study.nextStep ? (
          <div>
            <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-teal-deep">
              Langkah berikutnya
            </dt>
            <dd className="mt-1 text-muted">{study.nextStep}</dd>
          </div>
        ) : null}
      </dl>
    </article>
  );
}

export function Research() {
  const { published, manuscripts } = publications;
  const academicSite = researchLead.profiles.find((p) => p.href.includes("albert."));

  return (
    <section id="projects" className="scroll-mt-24 bg-cream-soft py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Riset & Proyek"
            title="Studi kasus dari fasilitas"
            description="Setiap studi kasus merangkum masalah, pendekatan, perangkat, dan statusnya. Hasil dan angka eksperimen dibaca langsung di dokumentasi yang ditautkan."
          />
        </Reveal>

        <div id="innovation" className="mt-14 grid scroll-mt-24 gap-6 md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <Reveal key={study.id} delayMs={(index % 2) * 80} className="h-full">
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>

        {published.length > 0 || manuscripts.length > 0 ? (
          <div id="publications" className="mt-20 scroll-mt-24">
            <Reveal>
              <h3 className="font-display text-3xl text-forest-deep md:text-4xl">Publikasi</h3>
              <p className="mt-3 max-w-3xl leading-relaxed text-muted">
                Makalah yang berkaitan dengan fasilitas dan pertanian presisi.
                {academicSite ? (
                  <>
                    {" "}Daftar lengkap ada di{" "}
                    <a
                      href={academicSite.href}
                      className="text-forest underline decoration-teal/50 underline-offset-4"
                    >
                      situs akademik pemimpin riset
                    </a>
                    .
                  </>
                ) : null}
              </p>
            </Reveal>

            {published.length > 0 ? (
              <div className="mt-8">
                <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-teal-deep">
                  Makalah terbit
                </h4>
                <ol className="mt-3 divide-y divide-[var(--line)] border-y border-[var(--line)]">
                  {published.map((paper) => (
                    <li key={paper.href} className="py-4">
                      <div className="grid gap-1 sm:grid-cols-[4rem_1fr] sm:gap-6">
                        <p className="text-sm font-medium text-teal-deep">{paper.year}</p>
                        <div className="min-w-0">
                          <a
                            href={paper.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="leading-snug text-forest-deep underline decoration-teal/40 underline-offset-4 [overflow-wrap:anywhere] transition hover:decoration-teal-deep"
                          >
                            {paper.title}
                          </a>
                          <p className="mt-1 text-sm text-muted">{paper.venue}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ) : null}

            {manuscripts.length > 0 ? (
              <div className="mt-10">
                <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-teal-deep">
                  Naskah dalam proses
                </h4>
                <ul className="mt-3 divide-y divide-[var(--line)] border-y border-[var(--line)]">
                  {manuscripts.map((item) => (
                    <li key={item.title} className="py-4">
                      <p className="leading-snug text-forest-deep">{item.title}</p>
                      <p className="mt-1 text-sm text-muted">
                        {item.stage}
                        {item.year ? ` · ${item.year}` : ""}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ) : null}

        {fieldActivities.items.length > 0 ? (
          <div id="field" className="mt-20 scroll-mt-24">
            <Reveal>
              <h3 className="font-display text-3xl text-forest-deep md:text-4xl">
                Penerapan lapangan
              </h3>
              <p className="mt-3 max-w-3xl leading-relaxed text-muted">
                Kegiatan pengabdian kepada masyarakat yang dipimpin atau diikuti
                pemimpin riset, sesuai catatan publik.
              </p>
              <SourceLink source={fieldActivities.source} className="mt-2" />
            </Reveal>
            <ol className="mt-6 divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {fieldActivities.items.map((item) => (
                <li key={`${item.year}-${item.title}`} className="py-4">
                  <div className="grid gap-1 sm:grid-cols-[4rem_1fr] sm:gap-6">
                    <p className="text-sm font-medium text-teal-deep">{item.year}</p>
                    <div className="min-w-0">
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="leading-snug text-forest-deep underline decoration-teal/40 underline-offset-4 transition hover:decoration-teal-deep"
                        >
                          {item.title}
                        </a>
                      ) : (
                        <p className="leading-snug text-forest-deep">{item.title}</p>
                      )}
                      <p className="mt-1 text-sm text-muted">
                        {item.role} · {item.scheme}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ) : null}
      </div>
    </section>
  );
}
