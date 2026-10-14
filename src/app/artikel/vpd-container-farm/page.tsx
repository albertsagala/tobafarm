import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd } from "@/components/ArticleJsonLd";
import { Logo } from "@/components/Logo";
import { RelatedArticles } from "@/components/RelatedArticles";
import { site } from "@/lib/site";

const path = "/artikel/vpd-container-farm/";

export const metadata: Metadata = {
  title: "VPD di Container Farm: Temuan dari Fasilitas 10 Kaki",
  description:
    "Analisis air-VPD dari fasilitas indoor farming 10 kaki di Pintubosi: kepatuhan 48,16%, masalah kelembapan malam, dan implikasi kontrol iklim.",
  alternates: { canonical: path },
  openGraph: {
    type: "article",
    url: path,
    title: "VPD di Container Farm: Temuan dari Fasilitas 10 Kaki",
    description:
      "Data 48,1 jam menunjukkan hanya 48,16% waktu berada pada rentang air-VPD operasional 0,6–1,2 kPa.",
    publishedTime: "2026-10-14",
    authors: ["Albert Sagala"],
    images: [{ url: "/og.jpg", width: 1280, height: 720, alt: "VPD di Container Farm: Temuan dari Fasilitas 10 Kaki" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VPD di Container Farm: Temuan dari Fasilitas 10 Kaki",
    description: "Analisis air-VPD dari fasilitas indoor farming 10 kaki di Pintubosi: kepatuhan 48,16%, masalah kelembapan malam, dan implikasi kontrol iklim.",
    images: ["/og.jpg"],
  },
};

const metrics = [
  ["Periode pengamatan", "22–24 Juni 2026 (48,1 jam)"],
  ["Suhu udara", "22,36 ± 2,24 °C"],
  ["Kelembapan relatif", "78,18 ± 11,44%"],
  ["Air-VPD rata-rata", "0,593 kPa"],
  ["Rentang air-VPD", "0,166–1,411 kPa"],
  ["Kepatuhan 0,6–1,2 kPa", "48,16%"],
  ["Kepatuhan malam hari", "0%"],
  ["Energi pendinginan", "9,73 kWh"],
];

export default function VpdArticlePage() {
  return (
    <div className="min-h-screen bg-cream-soft">
      <header className="border-b border-white/10 bg-navy">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="/" className="text-cream" aria-label="Toba Smart Farming, beranda">
            <Logo />
          </Link>
          <Link
            href="/#articles"
            className="rounded-full border border-teal/50 px-4 py-2 text-sm text-teal-bright transition hover:bg-teal/10"
          >
            Kembali ke artikel
          </Link>
        </div>
      </header>

      <main id="main">
        <article>
          <ArticleJsonLd
            headline={"VPD di Container Farm: Temuan dari Fasilitas 10 Kaki"}
            description={"Analisis air-VPD dari fasilitas indoor farming 10 kaki di Pintubosi: kepatuhan 48,16%, masalah kelembapan malam, dan implikasi kontrol iklim."}
            path={path}
            datePublished="2026-10-14"
          />
          <section className="bg-navy text-cream">
            <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-teal-bright">
                Temuan fasilitas · VPD · 14 Oktober 2026
              </p>
              <h1 className="font-display mt-5 max-w-4xl text-4xl leading-tight md:text-6xl">
                VPD di Container Farm: suhu terlihat baik belum tentu cukup
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-cream/75 md:text-xl">
                Pengamatan 48,1 jam di fasilitas indoor farming 10 kaki kami menunjukkan
                bahwa pengendalian suhu saja belum menjamin lingkungan transpirasi yang
                stabil. Air-VPD hanya berada pada rentang operasional 0,6–1,2 kPa selama
                48,16% waktu pengamatan.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-cream/60">
                <span>Oleh Albert Sagala</span>
                <span>Pintubosi, Laguboti, Kabupaten Toba, Sumatera Utara</span>
              </div>
            </div>
          </section>

          <div className="mx-auto grid max-w-5xl gap-12 px-5 py-14 md:px-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
            <div className="space-y-10 text-[1.05rem] leading-8 text-ink">
              <section>
                <h2 className="font-display text-3xl text-forest-deep">Apa itu VPD?</h2>
                <p className="mt-4">
                  Vapor pressure deficit (VPD) menyatakan selisih antara tekanan uap air
                  jenuh pada suhu tertentu dan tekanan uap air aktual. Secara praktis, VPD
                  membantu membaca “daya tarik” udara terhadap air dari tanaman. VPD terlalu
                  rendah menandakan udara sangat lembap sehingga transpirasi dapat melemah
                  dan risiko kondensasi meningkat. VPD terlalu tinggi meningkatkan tekanan
                  evaporatif dan dapat mendorong tanaman kehilangan air terlalu cepat.
                </p>
                <div className="mt-5 rounded-2xl border border-[var(--line)] bg-white p-5 text-center">
                  <p className="font-medium text-forest-deep">
                    VPD = e<sub>s</sub>(T) × (1 − RH/100)
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    Pada studi ini VPD dihitung dari suhu dan RH udara, sehingga hasilnya
                    adalah <strong>air-VPD</strong>, bukan leaf-VPD.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-display text-3xl text-forest-deep">Fasilitas dan data</h2>
                <p className="mt-4">
                  Data dikumpulkan di fasilitas pertanian dalam ruang berbasis kontainer
                  10 kaki di Desa Pintubosi, Kecamatan Laguboti, Kabupaten Toba. Ruang tanam
                  berdimensi sekitar 234 × 282 × 239 cm dan menggunakan hidroponik vertikal
                  untuk sayuran daun. Kondisi mikroklimat dipantau melalui 27 titik sensor
                  internal dan satu referensi luar, bersama status aktuator dan konsumsi
                  energi. Sistem mencakup AC 1 PK, humidifier, pencahayaan, serta injeksi CO₂.
                </p>
                <p className="mt-4">
                  Analisis utama menggunakan rekaman 22–24 Juni 2026 selama sekitar 48,1 jam.
                  Rentang 0,6–1,2 kPa dipakai sebagai target operasional untuk evaluasi
                  fasilitas—bukan sebagai klaim bahwa satu rentang selalu optimal untuk
                  semua komoditas dan semua fase pertumbuhan.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl text-forest-deep">Temuan utama</h2>
                <p className="mt-4">
                  Suhu rata-rata 22,36 °C sekilas tampak sesuai dengan sasaran ruang tanam.
                  Namun RH rata-rata mencapai 78,18%, sehingga air-VPD rata-rata hanya
                  0,593 kPa—sedikit di bawah batas bawah rentang evaluasi. Kepatuhan
                  keseluruhan tercatat 48,16%. Dengan kata lain, lebih dari separuh waktu,
                  kombinasi suhu dan kelembapan belum berada pada zona kerja yang ditetapkan.
                </p>
                <div className="mt-6 rounded-3xl bg-forest-deep p-7 text-cream">
                  <p className="text-sm uppercase tracking-[0.2em] text-teal-bright">
                    Masalah paling jelas
                  </p>
                  <p className="font-display mt-3 text-3xl">0% kepatuhan pada malam hari</p>
                  <p className="mt-3 leading-7 text-cream/75">
                    RH malam rata-rata 89,67% dan air-VPD sekitar 0,281 kPa. Pendinginan yang
                    menurunkan suhu tanpa strategi dehumidifikasi dapat justru menekan VPD
                    semakin rendah.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-display text-3xl text-forest-deep">
                  Mengapa kontrol suhu saja tidak cukup?
                </h2>
                <p className="mt-4">
                  Suhu dan RH saling berinteraksi dalam menentukan VPD. Karena itu, aturan
                  sederhana “AC menyala ketika suhu tinggi” tidak selalu menghasilkan
                  lingkungan tanaman yang benar. Pada malam hari, beban panas menurun tetapi
                  kelembapan dapat tetap tinggi. AC 1 PK mengonsumsi 9,73 kWh selama periode
                  pengamatan, tetapi energi tersebut belum otomatis menghasilkan kepatuhan
                  VPD yang tinggi.
                </p>
                <p className="mt-4">
                  Dataset terpisah pada 3 Juli 2026 memperlihatkan sisi berlawanan: air-VPD
                  rata-rata 1,204 kPa dan pelanggaran VPD tinggi bertahan 225 menit setelah
                  pukul 10.55. Dua pengamatan ini menegaskan bahwa fasilitas dapat berpindah
                  dari kondisi terlalu lembap ke terlalu kering; pengendali harus merespons
                  keduanya, bukan mengejar satu setpoint suhu.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl text-forest-deep">
                  Implikasi untuk rancangan pengendali
                </h2>
                <ol className="mt-5 space-y-4">
                  <li className="rounded-2xl border border-[var(--line)] bg-white p-5">
                    <strong className="text-forest-deep">1. Jadikan VPD sebagai variabel supervisi.</strong>
                    <p className="mt-1 text-muted">
                      Kendali suhu dan RH tetap menjadi lapisan aktuasi, tetapi keputusan
                      tingkat atas perlu mengevaluasi VPD dan durasi pelanggaran.
                    </p>
                  </li>
                  <li className="rounded-2xl border border-[var(--line)] bg-white p-5">
                    <strong className="text-forest-deep">2. Pisahkan strategi siang dan malam.</strong>
                    <p className="mt-1 text-muted">
                      Malam memerlukan perhatian pada kelembapan berlebih dan kondensasi;
                      siang dapat memerlukan humidifikasi ketika VPD meningkat.
                    </p>
                  </li>
                  <li className="rounded-2xl border border-[var(--line)] bg-white p-5">
                    <strong className="text-forest-deep">3. Gunakan informasi spasial.</strong>
                    <p className="mt-1 text-muted">
                      Banyak titik sensor diperlukan karena satu pembacaan rata-rata dapat
                      menyembunyikan zona mikroklimat yang melanggar batas.
                    </p>
                  </li>
                  <li className="rounded-2xl border border-[var(--line)] bg-white p-5">
                    <strong className="text-forest-deep">4. Optimalkan kepatuhan bersama energi.</strong>
                    <p className="mt-1 text-muted">
                      Penilaian pengendali harus mencakup proporsi waktu dalam rentang,
                      besarnya pelanggaran, dan energi—bukan suhu rata-rata saja.
                    </p>
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="font-display text-3xl text-forest-deep">Batas interpretasi</h2>
                <p className="mt-4">
                  Hasil ini merupakan karakterisasi fasilitas pada periode pengamatan
                  tertentu. Karena suhu daun tidak diukur, angka yang dilaporkan tidak boleh
                  ditafsirkan sebagai leaf-VPD. Evaluasi agronomis berikutnya perlu
                  menghubungkan VPD dengan fase pertumbuhan, respons tanaman, distribusi
                  spasial, dan durasi paparan sebelum menyimpulkan setpoint terbaik untuk
                  pakchoi atau komoditas lain.
                </p>
              </section>

              <section className="border-t border-[var(--line)] pt-8">
                <h2 className="font-display text-3xl text-forest-deep">Kesimpulan</h2>
                <p className="mt-4">
                  Angka 48,16% adalah diagnosis, bukan keberhasilan. Temuan utamanya jelas:
                  ruang dapat memiliki suhu rata-rata yang tampak aman tetapi tetap gagal
                  menjaga lingkungan transpirasi karena kelembapan. Langkah berikutnya adalah
                  kontrol gabungan suhu–kelembapan yang sadar VPD, spasial, dan energi,
                  kemudian divalidasi langsung bersama tanaman.
                </p>
              </section>
            </div>

            <aside className="lg:sticky lg:top-8 lg:self-start">
              <div className="rounded-3xl border border-[var(--line)] bg-white p-6">
                <h2 className="font-display text-2xl text-forest-deep">Ringkasan angka</h2>
                <dl className="mt-5 divide-y divide-[var(--line)]">
                  {metrics.map(([label, value]) => (
                    <div key={label} className="py-3">
                      <dt className="text-xs uppercase tracking-wide text-muted">{label}</dt>
                      <dd className="mt-1 font-medium text-forest-deep">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <p className="mt-5 text-sm leading-6 text-muted">
                Catatan: seluruh nilai VPD pada artikel ini adalah air-VPD yang dihitung dari
                suhu udara dan kelembapan relatif.
              </p>
            </aside>
          </div>
        </article>
        <RelatedArticles currentPath={path} />
      </main>

      <footer className="border-t border-[var(--line)] bg-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-8 text-sm text-muted md:px-8">
          <p>© 2026 {site.name}. Temuan dari fasilitas riset indoor farming berbasis kontainer.</p>
          <Link href="/" className="text-teal-deep underline underline-offset-4">
            Kembali ke beranda
          </Link>
        </div>
      </footer>
    </div>
  );
}
