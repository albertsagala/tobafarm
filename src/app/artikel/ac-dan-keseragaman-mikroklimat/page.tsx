import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd } from "@/components/ArticleJsonLd";
import { Logo } from "@/components/Logo";
import { RelatedArticles } from "@/components/RelatedArticles";
import { site } from "@/lib/site";

const path = "/artikel/ac-dan-keseragaman-mikroklimat/";

export const metadata: Metadata = {
  title: "AC Mendinginkan Container Farm, tetapi Tidak Merata",
  description:
    "Analisis 27 sensor menunjukkan operasi AC berkaitan dengan suhu rata-rata lebih rendah, tetapi penyebaran suhu antarlokasi lebih lebar.",
  alternates: { canonical: path },
  openGraph: {
    type: "article",
    url: path,
    title: "AC Mendinginkan Container Farm, tetapi Tidak Merata",
    description:
      "Pada 544 waktu pengamatan, rentang suhu spasial meningkat dari 2,78°C ketika AC mati menjadi 5,03°C ketika AC menyala.",
    publishedTime: "2026-10-14",
    authors: ["Albert Sagala"],
    images: [{ url: "/og.jpg", width: 1280, height: 720, alt: "AC Mendinginkan Container Farm, tetapi Tidak Merata" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AC Mendinginkan Container Farm, tetapi Tidak Merata",
    description: "Analisis 27 sensor menunjukkan operasi AC berkaitan dengan suhu rata-rata lebih rendah, tetapi penyebaran suhu antarlokasi lebih lebar.",
    images: ["/og.jpg"],
  },
};

const comparison = [
  ["Jumlah waktu pengamatan", "406", "138"],
  ["Suhu rata-rata", "23,43°C", "22,85°C"],
  ["Simpangan baku spasial suhu", "0,71°C", "1,25°C"],
  ["Rentang suhu antarsensor", "2,78°C", "5,03°C"],
  ["Kepatuhan suhu per node", "51,6%", "46,6%"],
  ["Semua node serentak patuh", "20,9%", "1,4%"],
  ["Kelembapan relatif rata-rata", "83,97%", "65,98%"],
  ["Air-VPD rata-rata", "0,463 kPa", "0,946 kPa"],
  ["Kepatuhan air-VPD per node", "21,1%", "57,5%"],
];

export default function AcSpatialArticlePage() {
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
            headline={"AC Mendinginkan Container Farm, tetapi Tidak Merata"}
            description={"Analisis 27 sensor menunjukkan operasi AC berkaitan dengan suhu rata-rata lebih rendah, tetapi penyebaran suhu antarlokasi lebih lebar."}
            path={path}
            datePublished="2026-10-14"
          />
          <section className="bg-navy text-cream">
            <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-teal-bright">
                Mikroklimat spasial · Pendinginan · 14 Oktober 2026
              </p>
              <h1 className="font-display mt-5 max-w-4xl text-4xl leading-tight md:text-6xl">
                AC mendinginkan container farm—tetapi tidak merata
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-cream/75 md:text-xl">
                Data dari 27 sensor menunjukkan sebuah pertukaran yang mudah luput:
                ketika AC menyala, suhu rata-rata turun 0,58°C dan kondisi VPD membaik,
                tetapi rentang suhu antarlokasi melebar dari 2,78°C menjadi 5,03°C.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-cream/60">
                <span>Oleh Albert Sagala</span>
                <span>Pintu Bosi, Laguboti, Kabupaten Toba, Sumatera Utara</span>
              </div>
            </div>
          </section>

          <div className="mx-auto max-w-5xl px-5 py-14 md:px-8">
            <section className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-forest-deep p-6 text-cream">
                <p className="text-xs uppercase tracking-[0.18em] text-teal-bright">Suhu rata-rata</p>
                <p className="font-display mt-3 text-4xl">−0,58°C</p>
                <p className="mt-2 text-sm leading-6 text-cream/65">Lebih rendah saat AC menyala.</p>
              </div>
              <div className="rounded-3xl bg-forest-deep p-6 text-cream">
                <p className="text-xs uppercase tracking-[0.18em] text-teal-bright">Rentang spasial</p>
                <p className="font-display mt-3 text-4xl">+2,25°C</p>
                <p className="mt-2 text-sm leading-6 text-cream/65">Lebih lebar saat AC menyala.</p>
              </div>
              <div className="rounded-3xl bg-forest-deep p-6 text-cream">
                <p className="text-xs uppercase tracking-[0.18em] text-teal-bright">Data tersinkronisasi</p>
                <p className="font-display mt-3 text-4xl">544</p>
                <p className="mt-2 text-sm leading-6 text-cream/65">406 AC-OFF dan 138 AC-ON.</p>
              </div>
            </section>

            <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
              <div className="space-y-10 text-[1.05rem] leading-8 text-ink">
                <section>
                  <h2 className="font-display text-3xl text-forest-deep">
                    Rata-rata yang baik dapat menyembunyikan masalah
                  </h2>
                  <p className="mt-4">
                    Pengendalian iklim sering dinilai memakai satu nilai suhu rata-rata.
                    Pendekatan itu praktis, tetapi berisiko menutupi perbedaan kondisi di
                    antara rak, sisi, dan ketinggian tanaman. Jika satu lokasi menjadi
                    sangat dingin sementara lokasi lain tetap hangat, rata-ratanya dapat
                    terlihat benar walaupun tanaman tidak menerima lingkungan yang sama.
                  </p>
                  <p className="mt-4">
                    Pada fasilitas kami, operasi AC berkaitan dengan suhu rata-rata yang
                    lebih rendah. Namun pada saat yang sama, simpangan baku spasial naik
                    dari 0,71°C menjadi 1,25°C dan rentang antarsensor meningkat dari
                    2,78°C menjadi 5,03°C. Pendinginan rata-rata membaik, tetapi
                    ketidakseragaman ruang justru lebih besar.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-3xl text-forest-deep">Bagaimana data diperoleh?</h2>
                  <p className="mt-4">
                    Pengamatan dilakukan pada 18–30 Juni 2026 di fasilitas indoor vertical
                    farming berbasis kontainer 10 kaki di Pintu Bosi. Sebanyak 27 node
                    suhu–kelembapan ditempatkan di dalam ruang tanam dan satu node digunakan
                    sebagai referensi luar. Fasilitas menggunakan satu AC 1 PK, pencahayaan
                    buatan, rak hidroponik, dan pencatatan status aktuator serta daya.
                  </p>
                  <p className="mt-4">
                    Data suhu dan kelembapan dicatat sekitar setiap 15 menit, sedangkan
                    status AC sekitar setiap 30 menit. Setelah sinkronisasi timestamp,
                    pemeriksaan batas fisik, dan penggabungan tanpa interpolasi, tersedia
                    544 waktu pengamatan: 406 ketika AC mati dan 138 ketika AC menyala.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-3xl text-forest-deep">Perbandingan AC-OFF dan AC-ON</h2>
                  <div className="mt-5 overflow-x-auto rounded-2xl border border-[var(--line)] bg-white">
                    <table className="w-full min-w-[36rem] text-left text-sm">
                      <thead className="bg-forest-deep text-cream">
                        <tr>
                          <th className="px-4 py-3 font-medium">Indikator</th>
                          <th className="px-4 py-3 font-medium">AC-OFF</th>
                          <th className="px-4 py-3 font-medium">AC-ON</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--line)]">
                        {comparison.map(([metric, off, on]) => (
                          <tr key={metric}>
                            <th className="px-4 py-3 font-medium text-forest-deep">{metric}</th>
                            <td className="px-4 py-3 text-muted">{off}</td>
                            <td className="px-4 py-3 text-muted">{on}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-muted">
                    Kepatuhan suhu menggunakan rentang evaluasi 20–24°C. Kepatuhan VPD
                    menggunakan rentang air-VPD 0,6–1,2 kPa.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-3xl text-forest-deep">
                    Lebih dingin belum berarti lebih seragam
                  </h2>
                  <p className="mt-4">
                    Uji Mann–Whitney menunjukkan perbedaan suhu rata-rata antara kondisi
                    AC-OFF dan AC-ON signifikan secara statistik (p=0,005). Perbedaan pada
                    simpangan baku spasial dan rentang suhu juga signifikan (keduanya
                    p&lt;0,001). Fraksi kepatuhan suhu per node menurun dari 51,6% menjadi
                    46,6% (p=0,027), sedangkan keadaan ketika seluruh node serentak berada
                    dalam rentang turun dari 20,9% menjadi hanya 1,4%.
                  </p>
                  <p className="mt-4">
                    Ini menunjukkan bahwa sensor tunggal atau suhu rata-rata saja tidak
                    cukup untuk menilai keberhasilan pendinginan. Udara dingin dari AC
                    kemungkinan membentuk jalur aliran yang lebih kuat di sebagian ruang,
                    sedangkan area lain menerima efek yang lebih kecil. Pernyataan ini
                    merupakan interpretasi rekayasa yang perlu diuji lagi dengan pengukuran
                    kecepatan aliran udara atau eksperimen distribusi udara.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-3xl text-forest-deep">
                    Ada manfaat lain: RH dan VPD membaik
                  </h2>
                  <p className="mt-4">
                    Ketika AC menyala, RH rata-rata turun dari 83,97% menjadi 65,98% dan
                    air-VPD meningkat dari 0,463 menjadi 0,946 kPa. Kepatuhan air-VPD per
                    node naik dari 21,1% menjadi 57,5%. Jadi hasilnya bukan sederhana
                    “AC buruk”: pendinginan dan dehumidifikasi membantu VPD, tetapi
                    manfaat tersebut dibayar dengan distribusi suhu yang lebih tidak merata.
                  </p>
                  <div className="mt-6 rounded-3xl border border-teal/25 bg-teal/10 p-6">
                    <p className="font-display text-2xl text-forest-deep">Trade-off utama</p>
                    <p className="mt-2 text-muted">
                      AC-ON berasosiasi dengan suhu rata-rata lebih rendah dan VPD lebih
                      sesuai, tetapi juga dengan ketimpangan termal antarlokasi yang lebih besar.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="font-display text-3xl text-forest-deep">
                    Apakah pencahayaan menjelaskan perbedaannya?
                  </h2>
                  <p className="mt-4">
                    Untuk mengurangi pengaruh perubahan beban panas antara siang dan malam,
                    analisis tambahan dilakukan hanya pada periode lampu menyala. Polanya
                    tetap sama: suhu turun dari 23,74°C menjadi 22,85°C, sedangkan rentang
                    spasial naik dari 3,14°C menjadi 5,05°C dan simpangan baku spasial naik
                    dari 0,82°C menjadi 1,26°C. Air-VPD meningkat dari 0,598 menjadi
                    0,952 kPa dan kepatuhannya naik dari 34,9% menjadi 57,9%.
                  </p>
                  <p className="mt-4">
                    Pemeriksaan ini memperkuat diagnosis, tetapi tidak mengubah data
                    observasional menjadi eksperimen terkontrol.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-3xl text-forest-deep">
                    Implikasi bagi rancangan container farm
                  </h2>
                  <ol className="mt-5 space-y-4">
                    <li className="rounded-2xl border border-[var(--line)] bg-white p-5">
                      <strong className="text-forest-deep">1. Kendali tidak boleh bergantung pada satu sensor.</strong>
                      <p className="mt-1 text-muted">
                        Keputusan perlu mempertimbangkan sensor yang mewakili zona terpanas,
                        zona terdingin, atau kondisi terburuk.
                      </p>
                    </li>
                    <li className="rounded-2xl border border-[var(--line)] bg-white p-5">
                      <strong className="text-forest-deep">2. Distribusi udara perlu direkayasa.</strong>
                      <p className="mt-1 text-muted">
                        Arah outlet AC, kipas sirkulasi, hambatan rak, dan jalur balik udara
                        dapat menentukan apakah pendinginan tersebar merata.
                      </p>
                    </li>
                    <li className="rounded-2xl border border-[var(--line)] bg-white p-5">
                      <strong className="text-forest-deep">3. Gunakan metrik spasial.</strong>
                      <p className="mt-1 text-muted">
                        Selain suhu rata-rata, dashboard perlu menampilkan rentang, simpangan
                        baku, kepatuhan per node, dan kepatuhan serentak seluruh node.
                      </p>
                    </li>
                    <li className="rounded-2xl border border-[var(--line)] bg-white p-5">
                      <strong className="text-forest-deep">4. Optimasi harus mengakui trade-off.</strong>
                      <p className="mt-1 text-muted">
                        Pengendali perlu menyeimbangkan suhu, VPD, keseragaman ruang, energi,
                        serta frekuensi switching aktuator.
                      </p>
                    </li>
                  </ol>
                </section>

                <section>
                  <h2 className="font-display text-3xl text-forest-deep">Batas interpretasi</h2>
                  <p className="mt-4">
                    Studi ini merupakan diagnosis berbasis data operasional, bukan uji acak
                    terkontrol. Status AC berkaitan dengan beban panas, waktu, kondisi luar,
                    fase tanaman, dan keputusan pengendali. Data runtun waktu juga memiliki
                    autokorelasi dan jumlah pengamatan AC-OFF serta AC-ON tidak seimbang.
                    Karena itu, hasil yang tepat adalah bahwa operasi AC <em>berasosiasi</em>
                    dengan heterogenitas yang lebih besar pada fasilitas dan periode ini;
                    bukan bukti universal bahwa AC selalu menyebabkannya.
                  </p>
                </section>

                <section className="border-t border-[var(--line)] pt-8">
                  <h2 className="font-display text-3xl text-forest-deep">Kesimpulan</h2>
                  <p className="mt-4">
                    Suhu rata-rata 22,85°C ketika AC menyala tampak baik. Namun rentang
                    antarsensor 5,03°C dan kepatuhan serentak seluruh node hanya 1,4%
                    menunjukkan bahwa tanaman tidak selalu mengalami kondisi yang sama.
                    Langkah rekayasa berikutnya bukan sekadar menambah daya pendinginan,
                    melainkan memperbaiki sirkulasi udara dan menggunakan kontrol yang sadar
                    terhadap kondisi spasial.
                  </p>
                </section>
              </div>

              <aside className="lg:sticky lg:top-8 lg:self-start">
                <div className="rounded-3xl border border-[var(--line)] bg-white p-6">
                  <h2 className="font-display text-2xl text-forest-deep">Ringkasan studi</h2>
                  <dl className="mt-5 divide-y divide-[var(--line)]">
                    {[
                      ["Lokasi", "Pintu Bosi, Kabupaten Toba"],
                      ["Periode", "18–30 Juni 2026"],
                      ["Sensor", "27 internal + 1 eksternal"],
                      ["Pendingin", "AC 1 PK"],
                      ["Observasi", "544 waktu tersinkronisasi"],
                      ["Desain", "Diagnostik observasional"],
                    ].map(([label, value]) => (
                      <div key={label} className="py-3">
                        <dt className="text-xs uppercase tracking-wide text-muted">{label}</dt>
                        <dd className="mt-1 font-medium text-forest-deep">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <p className="mt-5 text-sm leading-6 text-muted">
                  Artikel ini melaporkan asosiasi AC dengan kondisi mikroklimat pada satu
                  fasilitas dan periode pengamatan. Tidak ada klaim kausal atau keunggulan
                  agronomis.
                </p>
              </aside>
            </div>
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
