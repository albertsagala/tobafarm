import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  BrainCircuit,
  GraduationCap,
  Handshake,
  Radio,
  SearchCheck,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";

const path = "/id/kolaborasi/";

export const metadata: Metadata = {
  title: "Kolaborasi & Layanan",
  description:
    "Kolaborasi riset, audit mikroklimat, sistem sensor IoT, analisis data, kontrol iklim berbasis AI, dan pelatihan untuk indoor farming.",
  alternates: { canonical: path, languages: { en: "/collaboration/", id: path } },
  openGraph: {
    type: "website",
    url: path,
    title: "Kolaborasi & Layanan — Toba Smart Farming",
    description:
      "Menghubungkan fasilitas eksperimen, data lapangan, dan keahlian rekayasa untuk menyelesaikan masalah indoor farming.",
    images: [
      {
        url: "/og.jpg",
        width: 1280,
        height: 720,
        alt: "Kolaborasi dan layanan Toba Smart Farming",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kolaborasi & Layanan — Toba Smart Farming",
    description:
      "Kolaborasi riset dan layanan rekayasa berbasis data untuk indoor farming.",
    images: ["/og.jpg"],
  },
};

const services = [
  {
    icon: SearchCheck,
    title: "Audit mikroklimat",
    description:
      "Evaluasi suhu, kelembapan, VPD, hotspot, kepatuhan spasial, dan respons pendinginan berdasarkan data multisensor.",
    outputs: ["Peta masalah", "Metrik kinerja", "Rekomendasi prioritas"],
  },
  {
    icon: Radio,
    title: "Arsitektur sensor & IoT",
    description:
      "Perancangan penempatan sensor, akuisisi data, MQTT, edge–cloud, dashboard, serta pemantauan status perangkat.",
    outputs: ["Rancangan sistem", "Zonasi sensor", "Alur data dan dashboard"],
  },
  {
    icon: BrainCircuit,
    title: "Kontrol iklim & AI",
    description:
      "Kajian rule-based, PID, dan reinforcement learning untuk pengendalian suhu–kelembapan yang sadar energi dan kondisi spasial.",
    outputs: ["Baseline kontrol", "Strategi evaluasi", "Protokol uji aman"],
  },
  {
    icon: BarChart3,
    title: "Analisis data & validasi",
    description:
      "Pembersihan data, sinkronisasi aktuator–sensor, analisis statistik, visualisasi, serta evaluasi klaim teknis.",
    outputs: ["Dataset terstruktur", "Analisis reproducible", "Temuan dan batas interpretasi"],
  },
  {
    icon: GraduationCap,
    title: "Pelatihan & peningkatan kapasitas",
    description:
      "Pelatihan IoT pertanian, Grafana, analisis mikroklimat, AI/ML, dan kontrol untuk kampus, pemerintah, atau tim teknis.",
    outputs: ["Modul terarah", "Studi kasus nyata", "Praktik dan evaluasi"],
  },
  {
    icon: Handshake,
    title: "Pilot project & kolaborasi riset",
    description:
      "Perumusan eksperimen bersama, prototipe, pengujian lapangan, publikasi, dan pengembangan bukti konsep.",
    outputs: ["Ruang lingkup", "Milestone terukur", "Dokumentasi hasil"],
  },
];

const engagementModes = [
  {
    label: "Konsultasi terarah",
    detail:
      "Untuk diagnosis masalah yang sudah jelas, telaah desain, atau second opinion berbasis data.",
  },
  {
    label: "Audit berbasis dataset",
    detail:
      "Untuk tim yang telah memiliki data sensor, aktuator, energi, atau dashboard tetapi membutuhkan analisis.",
  },
  {
    label: "Pilot project",
    detail:
      "Untuk menguji sensor, kontrol, dashboard, atau metode AI pada lingkup kecil sebelum implementasi lebih luas.",
  },
  {
    label: "Kolaborasi akademik",
    detail:
      "Untuk proposal, eksperimen bersama, co-supervision, publikasi, atau pengembangan dataset.",
  },
];

export default function CollaborationPage() {
  const emailHref =
    `mailto:${site.email}?subject=Diskusi%20Kolaborasi%20Toba%20Smart%20Farming`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kolaborasi dan layanan rekayasa indoor farming",
    provider: {
      "@type": "ResearchOrganization",
      name: site.name,
      url: site.url,
    },
    areaServed: "Indonesia",
    serviceType: [
      "Audit mikroklimat",
      "Arsitektur sensor dan IoT",
      "Analisis data indoor farming",
      "Kontrol iklim berbasis AI",
      "Pelatihan teknologi pertanian",
      "Kolaborasi riset",
    ],
    url: `${site.url}${path}`,
  };

  return (
    <div className="min-h-screen bg-cream-soft">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Header locale="id" enHref="/collaboration/" idHref="/id/kolaborasi/" />
      <main id="main">
        <section id="top" className="bg-navy pt-28 text-cream md:pt-36">
          <div className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-teal-bright">
              Kolaborasi & layanan
            </p>
            <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_23rem] lg:items-end">
              <div>
                <h1 className="font-display max-w-4xl text-4xl leading-tight sm:text-5xl md:text-7xl">
                  Dari data lapangan menuju keputusan rekayasa yang dapat diuji
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-cream/75 md:text-xl">
                  Toba Smart Farming membuka kolaborasi dengan industri, pemerintah,
                  kampus, dan tim teknologi untuk memecahkan masalah mikroklimat,
                  instrumentasi, analisis data, dan kontrol indoor farming.
                </p>
              </div>
              <div className="rounded-3xl border border-teal/30 bg-white/5 p-6">
                <p className="text-sm leading-7 text-cream/75">
                  Setiap pekerjaan dimulai dari masalah, data yang tersedia, dan
                  indikator keberhasilan. Ruang lingkup, jadwal, luaran, serta biaya
                  ditetapkan setelah diskusi awal—bukan dijanjikan sebelum bukti tersedia.
                </p>
                <a
                  href={emailHref}
                  className="mt-6 inline-flex rounded-full bg-teal-bright px-5 py-3 text-sm font-medium text-navy transition hover:bg-white"
                >
                  Diskusikan kebutuhan
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-deep">
                Bidang dukungan
              </p>
              <h2 className="font-display mt-3 text-4xl text-forest-deep md:text-5xl">
                Layanan yang berangkat dari fasilitas dan data nyata
              </h2>
              <p className="mt-4 leading-7 text-muted">
                Fokus kami bukan menjual satu teknologi untuk semua masalah. Setiap
                rekomendasi harus sesuai dengan kondisi fasilitas, kualitas data,
                risiko operasional, dan kemampuan implementasi mitra.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.title}
                    className="rounded-3xl border border-[var(--line)] bg-cream-soft p-6 sm:p-7"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest text-teal-bright">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="font-display mt-5 text-2xl text-forest-deep">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
                    <ul className="mt-5 space-y-2 border-t border-[var(--line)] pt-5 text-sm text-forest-deep">
                      {service.outputs.map((output) => (
                        <li key={output} className="flex gap-2">
                          <span className="text-teal-deep" aria-hidden>•</span>
                          {output}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-cream py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-deep">
                  Bentuk kerja sama
                </p>
                <h2 className="font-display mt-3 text-4xl text-forest-deep md:text-5xl">
                  Mulai dari lingkup yang dapat dibuktikan
                </h2>
                <p className="mt-4 leading-7 text-muted">
                  Pilot kecil dengan indikator yang jelas biasanya lebih bernilai
                  daripada proyek besar dengan asumsi yang belum diuji.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {engagementModes.map((mode, index) => (
                  <article
                    key={mode.label}
                    className="rounded-3xl border border-[var(--line)] bg-white p-6"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-teal-deep">
                      0{index + 1}
                    </p>
                    <h3 className="font-display mt-3 text-2xl text-forest-deep">{mode.label}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{mode.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-forest-deep py-20 text-cream md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-bright">
                Proses kerja
              </p>
              <h2 className="font-display mt-3 text-4xl md:text-5xl">
                Empat langkah sebelum rekomendasi diterapkan
              </h2>
            </div>
            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                ["01", "Pemetaan kebutuhan", "Masalah, pengguna, fasilitas, data, risiko, dan target dibahas secara eksplisit."],
                ["02", "Pemeriksaan bukti", "Kualitas data dan asumsi diperiksa sebelum memilih metode atau teknologi."],
                ["03", "Rencana terukur", "Ruang lingkup, indikator, luaran, jadwal, serta tanggung jawab disepakati."],
                ["04", "Uji dan evaluasi", "Hasil dibandingkan dengan baseline; keterbatasan dan langkah lanjut didokumentasikan."],
              ].map(([number, title, detail]) => (
                <li key={number} className="border-t border-white/20 pt-5">
                  <p className="text-sm text-teal-bright">{number}</p>
                  <h3 className="font-display mt-3 text-2xl">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-cream/65">{detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[1fr_0.85fr] lg:items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-deep">
                Bukti kerja
              </p>
              <h2 className="font-display mt-3 text-4xl text-forest-deep md:text-5xl">
                Mulai dari temuan yang sudah dapat diperiksa
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-muted">
                Artikel berikut memperlihatkan cara kami memisahkan hasil pengukuran,
                interpretasi rekayasa, dan batas klaim.
              </p>
              <div className="mt-8 grid gap-4">
                {[
                  ["/artikel/gradien-suhu-horizontal-rak/", "Gradien horizontal 4,6× lebih besar daripada vertikal pada satu kejadian pemulihan."],
                  ["/artikel/ac-dan-keseragaman-mikroklimat/", "AC menurunkan suhu rata-rata tetapi memperlebar ketidakseragaman antarlokasi."],
                  ["/artikel/vpd-container-farm/", "Kepatuhan air-VPD hanya 48,16% dan kelembapan malam menjadi batas utama."],
                ].map(([href, text]) => (
                  <Link
                    key={href}
                    href={href}
                    className="rounded-2xl border border-[var(--line)] bg-cream-soft p-5 font-medium text-forest-deep transition hover:border-teal/50"
                  >
                    {text}
                  </Link>
                ))}
              </div>
            </div>
            <aside className="rounded-3xl border border-[var(--line)] bg-cream-soft p-7">
              <h2 className="font-display text-3xl text-forest-deep">
                Cocok untuk siapa?
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
                <li>• Pengelola indoor farm atau greenhouse yang memiliki masalah mikroklimat.</li>
                <li>• Perusahaan agri-tech yang membutuhkan validasi prototipe atau analisis data.</li>
                <li>• Pemerintah yang merancang pilot teknologi pertanian terkendali.</li>
                <li>• Kampus dan kelompok riset yang membutuhkan fasilitas, metode, atau kolaborator.</li>
                <li>• Tim teknis yang ingin meningkatkan kemampuan IoT, dashboard, AI, dan kontrol.</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="bg-teal/10 py-20 md:py-24">
          <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-deep">
              Diskusi awal
            </p>
            <h2 className="font-display mt-3 text-4xl text-forest-deep md:text-5xl">
              Ceritakan masalahnya sebelum memilih teknologinya
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-muted">
              Sertakan jenis fasilitas, masalah utama, data yang tersedia, target,
              lokasi, dan waktu yang diharapkan. Kami akan menilai apakah kebutuhan
              tersebut sesuai dengan kompetensi dan kapasitas yang tersedia.
            </p>
            <a
              href={emailHref}
              className="mt-8 inline-flex rounded-full bg-forest px-6 py-3.5 text-sm font-medium text-white transition hover:bg-forest-mid"
            >
              Kirim ringkasan kebutuhan
            </a>
            <p className="mt-4 text-sm text-muted">{site.email}</p>
          </div>
        </section>
      </main>
      <Footer locale="id" />
    </div>
  );
}
