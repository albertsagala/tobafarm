import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const articles = [
  {
    category: "Mikroklimat spasial · Distribusi udara",
    metric: "4,6×",
    metricNote: "gradien horizontal lebih besar daripada gradien vertikal pada akhir pemulihan.",
    date: "14 Oktober 2026",
    title: "Mengapa perbedaan suhu horizontal lebih penting daripada ketinggian rak?",
    summary:
      "Pada kejadian pemulihan AC, selisih kiri–tengah mencapai 3,33°C, sedangkan selisih atas–bawah hanya 0,72°C. Temuan ini mengarahkan perhatian dari sekadar ketinggian rak menuju distribusi aliran udara sepanjang kontainer.",
    href: "/artikel/gradien-suhu-horizontal-rak/",
  },
  {
    category: "Mikroklimat spasial · Pendinginan",
    metric: "5,03°C",
    metricNote: "rentang suhu antarsensor ketika AC menyala.",
    date: "14 Oktober 2026",
    title: "AC mendinginkan container farm—tetapi tidak merata",
    summary:
      "Analisis 544 waktu pengamatan menunjukkan suhu rata-rata turun saat AC menyala, tetapi ketimpangan suhu antarlokasi membesar. Temuan ini menjelaskan mengapa kontrol berbasis satu sensor dapat menyesatkan.",
    href: "/artikel/ac-dan-keseragaman-mikroklimat/",
  },
  {
    category: "VPD · Temuan fasilitas",
    metric: "48,16%",
    metricNote: "waktu pengamatan berada dalam rentang air-VPD 0,6–1,2 kPa.",
    date: "14 Oktober 2026",
    title: "VPD di Container Farm: suhu terlihat baik belum tentu cukup",
    summary:
      "Pengamatan 48,1 jam menunjukkan masalah kelembapan malam yang tidak terlihat bila evaluasi hanya memakai suhu rata-rata. Artikel ini membahas data, keterbatasan air-VPD, serta arah kontrol suhu–kelembapan berikutnya.",
    href: "/artikel/vpd-container-farm/",
  },
];

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
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Reveal key={article.href} delayMs={index * 80} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--line)] bg-cream-soft">
                <div className="flex min-h-56 flex-col justify-between bg-forest-deep p-7 text-cream sm:p-8">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-bright">
                    {article.category}
                  </p>
                  <div>
                    <p className="font-display text-5xl">{article.metric}</p>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-cream/70">
                      {article.metricNote}
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <p className="text-sm text-muted">{article.date} · Albert Sagala</p>
                  <h3 className="font-display mt-3 text-3xl leading-tight text-forest-deep">
                    {article.title}
                  </h3>
                  <p className="mt-4 flex-1 leading-7 text-muted">{article.summary}</p>
                  <Link
                    href={article.href}
                    className="mt-7 inline-flex w-fit rounded-full bg-forest px-5 py-3 text-sm font-medium text-white transition hover:bg-forest-mid"
                  >
                    Baca artikel
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
