import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { caseStudies, publications, researchLead } from "@/lib/content";

export function About() {
  const summary = [
    { term: "Fasilitas", value: "Kontainer 10 kaki dengan hidroponik vertikal", href: "#facility" },
    { term: "Studi kasus", value: `${caseStudies.length} topik riset terdokumentasi`, href: "#projects" },
    { term: "Publikasi", value: `${publications.published.length} makalah terbit dengan DOI atau tautan penerbit`, href: "#publications" },
    { term: "Pemimpin riset", value: researchLead.name, href: "#team" },
  ];

  return (
    <section id="about" className="scroll-mt-24 bg-cream-soft py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading eyebrow="Tentang" title="Riset terapan di satu fasilitas yang terukur" />
        </Reveal>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <Reveal>
            <div className="space-y-5 text-[17px] leading-relaxed text-muted">
              <p>
                Toba Smart Farming adalah platform riset pertanian dalam ruang.
                Pusatnya sebuah kontainer 10 kaki berisi rak hidroponik vertikal
                yang dipasangi jaringan sensor, pipeline data, dan pengendali
                iklim.
              </p>
              <p>
                Pertanyaan risetnya praktis: seberapa seragam kondisi di dalam
                ruang tanam, seberapa andal data sensornya, dan apakah pengendali
                berbasis AI dapat menjaga iklim dengan memperhitungkan energi
                listrik.
              </p>
              <p>
                Hasil eksperimen hanya disampaikan melalui publikasi yang
                ditautkan di situs ini. Angka hasil panen, penghematan energi,
                atau akurasi model tidak dikutip ulang di luar publikasinya.
              </p>
            </div>
          </Reveal>
          <Reveal delayMs={100}>
            <dl className="divide-y divide-[var(--line)] rounded-3xl border border-[var(--line)] bg-white">
              {summary.map((item) => (
                <div key={item.term} className="grid gap-1 p-5 sm:grid-cols-[9rem_1fr] sm:gap-4">
                  <dt className="text-xs font-medium uppercase tracking-[0.18em] text-teal-deep">
                    {item.term}
                  </dt>
                  <dd>
                    <a
                      href={item.href}
                      className="text-forest-deep underline decoration-teal/40 underline-offset-4 transition hover:decoration-teal-deep"
                    >
                      {item.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
