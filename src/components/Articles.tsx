import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Articles() {
  return (
    <section id="articles" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Artikel & Temuan"
            title="Catatan berbasis data dari fasilitas"
            description="Penjelasan ringkas tentang hasil pengukuran, batas interpretasi, dan implikasinya bagi rekayasa sistem indoor farming."
          />
        </Reveal>
        <Reveal className="mt-12">
          <article className="grid overflow-hidden rounded-3xl border border-[var(--line)] bg-cream-soft lg:grid-cols-[0.85fr_1.15fr]">
            <div className="flex min-h-72 flex-col justify-between bg-forest-deep p-7 text-cream sm:p-10">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-teal-bright">
                VPD · Temuan fasilitas
              </p>
              <div>
                <p className="font-display text-6xl">48,16%</p>
                <p className="mt-2 max-w-sm text-cream/70">
                  waktu pengamatan berada dalam rentang air-VPD 0,6–1,2 kPa.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <p className="text-sm text-muted">14 Oktober 2026 · Albert Sagala</p>
              <h3 className="font-display mt-3 text-3xl leading-tight text-forest-deep md:text-4xl">
                VPD di Container Farm: suhu terlihat baik belum tentu cukup
              </h3>
              <p className="mt-4 max-w-2xl leading-7 text-muted">
                Pengamatan 48,1 jam menunjukkan masalah kelembapan malam yang tidak terlihat
                bila evaluasi hanya memakai suhu rata-rata. Artikel ini membahas data,
                keterbatasan air-VPD, serta arah kontrol suhu–kelembapan berikutnya.
              </p>
              <Link
                href="/artikel/vpd-container-farm/"
                className="mt-7 inline-flex w-fit rounded-full bg-forest px-5 py-3 text-sm font-medium text-white transition hover:bg-forest-mid"
              >
                Baca artikel
              </Link>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
