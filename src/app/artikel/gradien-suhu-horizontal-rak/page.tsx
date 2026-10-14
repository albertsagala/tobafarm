import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd } from "@/components/ArticleJsonLd";
import { Logo } from "@/components/Logo";
import { RelatedArticles } from "@/components/RelatedArticles";
import { site } from "@/lib/site";

const path = "/artikel/gradien-suhu-horizontal-rak/";

export const metadata: Metadata = {
  title: "Mengapa Perbedaan Suhu Horizontal Lebih Penting daripada Ketinggian Rak?",
  description:
    "Analisis pemulihan AC menunjukkan selisih suhu horizontal 3,33°C, sekitar 4,6 kali selisih antarlapisan vertikal pada akhir pengamatan.",
  alternates: { canonical: path },
  openGraph: {
    type: "article",
    url: path,
    title: "Mengapa Perbedaan Suhu Horizontal Lebih Penting daripada Ketinggian Rak?",
    description:
      "Data 24 sensor aktif menunjukkan posisi kiri–tengah–kanan lebih menentukan ketidakseragaman suhu daripada perbedaan lapisan bawah–tengah–atas pada satu kejadian pemulihan.",
    publishedTime: "2026-10-14",
    authors: ["Albert Sagala"],
    images: [{ url: "/og.jpg", width: 1280, height: 720, alt: "Mengapa Perbedaan Suhu Horizontal Lebih Penting daripada Ketinggian Rak?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mengapa Perbedaan Suhu Horizontal Lebih Penting daripada Ketinggian Rak?",
    description: "Analisis pemulihan AC menunjukkan selisih suhu horizontal 3,33°C, sekitar 4,6 kali selisih antarlapisan vertikal pada akhir pengamatan.",
    images: ["/og.jpg"],
  },
};

const endpointRows = [
  ["Horizontal", "Kiri", "25,91°C", "Di atas batas 24°C"],
  ["Horizontal", "Tengah", "22,58°C", "Dalam rentang"],
  ["Horizontal", "Kanan", "23,38°C", "Dalam rentang"],
  ["Vertikal", "Bawah", "23,74°C", "Dalam rentang"],
  ["Vertikal", "Tengah", "23,98°C", "Dalam rentang"],
  ["Vertikal", "Atas", "24,46°C", "Sedikit di atas batas"],
];

export default function HorizontalGradientArticlePage() {
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
            headline={"Mengapa Perbedaan Suhu Horizontal Lebih Penting daripada Ketinggian Rak?"}
            description={"Analisis pemulihan AC menunjukkan selisih suhu horizontal 3,33°C, sekitar 4,6 kali selisih antarlapisan vertikal pada akhir pengamatan."}
            path={path}
            datePublished="2026-10-14"
          />
          <section className="bg-navy text-cream">
            <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-teal-bright">
                Mikroklimat spasial · Distribusi udara · 14 Oktober 2026
              </p>
              <h1 className="font-display mt-5 max-w-4xl text-4xl leading-tight md:text-6xl">
                Mengapa perbedaan suhu horizontal lebih penting daripada ketinggian rak?
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-cream/75 md:text-xl">
                Pada satu kejadian pemulihan AC di container farm kami, selisih suhu
                kiri–tengah–kanan mencapai 3,33°C. Selisih bawah–tengah–atas hanya
                0,72°C. Masalah dominannya bukan sekadar udara panas naik, melainkan
                bagaimana udara dingin menjangkau seluruh panjang ruang tanam.
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
                <p className="text-xs uppercase tracking-[0.18em] text-teal-bright">Selisih horizontal</p>
                <p className="font-display mt-3 text-4xl">3,33°C</p>
                <p className="mt-2 text-sm leading-6 text-cream/65">Kiri versus tengah pada akhir pemulihan.</p>
              </div>
              <div className="rounded-3xl bg-forest-deep p-6 text-cream">
                <p className="text-xs uppercase tracking-[0.18em] text-teal-bright">Selisih vertikal</p>
                <p className="font-display mt-3 text-4xl">0,72°C</p>
                <p className="mt-2 text-sm leading-6 text-cream/65">Atas versus bawah pada waktu yang sama.</p>
              </div>
              <div className="rounded-3xl bg-forest-deep p-6 text-cream">
                <p className="text-xs uppercase tracking-[0.18em] text-teal-bright">Perbandingan</p>
                <p className="font-display mt-3 text-4xl">4,6×</p>
                <p className="mt-2 text-sm leading-6 text-cream/65">Gradien horizontal lebih besar dalam kejadian ini.</p>
              </div>
            </section>

            <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
              <div className="space-y-10 text-[1.05rem] leading-8 text-ink">
                <section>
                  <h2 className="font-display text-3xl text-forest-deep">
                    Dugaan awal yang masuk akal—tetapi tidak cukup
                  </h2>
                  <p className="mt-4">
                    Pada rak bertingkat, penjelasan yang paling mudah adalah bahwa udara
                    panas naik sehingga rak atas pasti menjadi masalah utama. Efek daya
                    apung memang ada: pada akhir pengamatan, lapisan atas masih memiliki
                    suhu rata-rata 24,46°C, lebih tinggi daripada lapisan bawah 23,74°C.
                    Namun selisih vertikalnya hanya 0,72°C.
                  </p>
                  <p className="mt-4">
                    Pada saat yang sama, zona kiri mencapai 25,91°C, zona tengah 22,58°C,
                    dan zona kanan 23,38°C. Selisih kiri–tengah sebesar 3,33°C jauh lebih
                    besar daripada selisih atas–bawah. Karena itu, untuk kejadian ini,
                    posisi horizontal lebih informatif dalam menemukan hotspot yang belum
                    pulih.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-3xl text-forest-deep">Kejadian yang dianalisis</h2>
                  <p className="mt-4">
                    Analisis berasal dari kejadian nyata penghentian dan pemulihan
                    pengendali pada 12 Juli 2026. AC terverifikasi aktif melalui pengukuran
                    daya mulai pukul 14.35. Interval pemulihan utama berakhir pada 16.46,
                    ketika suhu rata-rata ruang mencapai nilai minimum 24,03°C setelah
                    sekitar 131 menit pendinginan.
                  </p>
                  <p className="mt-4">
                    Jaringan nominal memiliki 27 node suhu–kelembapan di dalam kontainer.
                    Ekspor kejadian memuat 24 node aktif; tiga node yang tidak tersedia
                    tidak direkonstruksi. Zona horizontal dikelompokkan sebagai kiri,
                    tengah, dan kanan, sedangkan lapisan vertikal dikelompokkan sebagai
                    bawah, tengah, dan atas.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-3xl text-forest-deep">Apa yang terlihat pada akhir pemulihan?</h2>
                  <div className="mt-5 overflow-x-auto rounded-2xl border border-[var(--line)] bg-white">
                    <table className="w-full min-w-[38rem] text-left text-sm">
                      <thead className="bg-forest-deep text-cream">
                        <tr>
                          <th className="px-4 py-3 font-medium">Pengelompokan</th>
                          <th className="px-4 py-3 font-medium">Zona</th>
                          <th className="px-4 py-3 font-medium">Suhu rata-rata</th>
                          <th className="px-4 py-3 font-medium">Status terhadap 20–24°C</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--line)]">
                        {endpointRows.map(([group, zone, temperature, status]) => (
                          <tr key={`${group}-${zone}`}>
                            <td className="px-4 py-3 text-muted">{group}</td>
                            <th className="px-4 py-3 font-medium text-forest-deep">{zone}</th>
                            <td className="px-4 py-3 text-muted">{temperature}</td>
                            <td className="px-4 py-3 text-muted">{status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="font-display text-3xl text-forest-deep">
                    Pendinginan tidak menjangkau semua zona dengan kekuatan yang sama
                  </h2>
                  <p className="mt-4">
                    Dari sampel terakhir sebelum AC aktif hingga pukul 16.46, suhu rata-rata
                    zona kiri turun sekitar 8,79°C. Zona tengah turun 11,42°C dan zona kanan
                    10,52°C. Perbedaan respons pendinginan antarzona mencapai 2,63°C.
                    Artinya, sebagian ruang menerima efek pendinginan yang lebih kuat daripada
                    bagian lainnya.
                  </p>
                  <p className="mt-4">
                    Penjelasan rekayasa yang paling masuk akal adalah jalur suplai dan balik
                    udara, hambatan rak, tajuk tanaman, luminair, dan posisi unit AC. Akan
                    tetapi, data suhu saja belum cukup untuk menetapkan penyebab aliran
                    secara kausal. Verifikasi memerlukan pengukuran kecepatan udara, smoke
                    test, atau pemodelan CFD yang diuji terhadap sensor lapangan.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-3xl text-forest-deep">
                    Rata-rata ruang hampir memenuhi target, tetapi hotspot belum pulih
                  </h2>
                  <p className="mt-4">
                    Median spasial mencapai batas atas 24°C setelah 123 menit dan rata-rata
                    minimum mencapai 24,03°C setelah 131 menit. Jika pengendali hanya melihat
                    satu sensor atau nilai agregat, kondisi ini mudah dinilai sebagai
                    “hampir selesai”. Kenyataannya, hanya 13 dari 24 node aktif atau 54,2%
                    yang berada dalam rentang 20–24°C.
                  </p>
                  <p className="mt-4">
                    Pada akhir interval, sensor terdingin menunjukkan 20,1°C sementara
                    sensor terpanas masih 27,7°C—rentang 7,6°C untuk target yang lebarnya
                    hanya 4°C. Menambah durasi AC tanpa memperbaiki distribusi udara dapat
                    mendinginkan zona yang sudah baik secara berlebihan, tetapi tetap gagal
                    menghilangkan hotspot.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-3xl text-forest-deep">Implikasi praktis</h2>
                  <ol className="mt-5 space-y-4">
                    <li className="rounded-2xl border border-[var(--line)] bg-white p-5">
                      <strong className="text-forest-deep">1. Prioritaskan sensor sepanjang arah aliran udara.</strong>
                      <p className="mt-1 text-muted">
                        Sensor kiri, tengah, dan kanan diperlukan untuk mendeteksi zona yang
                        tidak terjangkau pendinginan. Sensor pada beberapa ketinggian tetap
                        penting, tetapi tidak boleh menjadi satu-satunya dasar zonasi.
                      </p>
                    </li>
                    <li className="rounded-2xl border border-[var(--line)] bg-white p-5">
                      <strong className="text-forest-deep">2. Gunakan kriteria pemulihan spasial.</strong>
                      <p className="mt-1 text-muted">
                        Pengendali sebaiknya memeriksa persentil atas, proporsi node yang
                        patuh, dan waktu bertahan dalam batas—bukan hanya suhu rata-rata.
                      </p>
                    </li>
                    <li className="rounded-2xl border border-[var(--line)] bg-white p-5">
                      <strong className="text-forest-deep">3. Perbaiki distribusi, bukan sekadar kapasitas.</strong>
                      <p className="mt-1 text-muted">
                        Kipas sirkulasi, baffle, ducting, arah outlet, dan jalur balik udara
                        perlu diuji sebelum menyimpulkan bahwa kapasitas AC harus ditambah.
                      </p>
                    </li>
                    <li className="rounded-2xl border border-[var(--line)] bg-white p-5">
                      <strong className="text-forest-deep">4. Pisahkan diagnosis horizontal dan vertikal.</strong>
                      <p className="mt-1 text-muted">
                        Satu indeks ketidakseragaman dapat menyembunyikan arah masalah.
                        Dashboard perlu melaporkan gradien horizontal dan vertikal secara terpisah.
                      </p>
                    </li>
                  </ol>
                </section>

                <section>
                  <h2 className="font-display text-3xl text-forest-deep">Batas interpretasi</h2>
                  <p className="mt-4">
                    Judul artikel ini sengaja berupa pertanyaan. Data menunjukkan dominasi
                    horizontal pada satu kejadian pemulihan, di satu kontainer, dengan posisi
                    AC, konfigurasi rak, kepadatan tanaman, dan node aktif tertentu. Hasilnya
                    tidak membuktikan bahwa gradien horizontal selalu lebih besar pada semua
                    vertical farm. Kesimpulan yang defensibel adalah: pada konfigurasi ini,
                    dimensi horizontal merupakan sumber ketidakseragaman yang lebih besar
                    daripada perbedaan ketinggian rak selama kejadian yang dianalisis.
                  </p>
                </section>

                <section className="border-t border-[var(--line)] pt-8">
                  <h2 className="font-display text-3xl text-forest-deep">Kesimpulan</h2>
                  <p className="mt-4">
                    Lapisan atas memang lebih hangat, tetapi hotspot utama berada pada zona
                    horizontal yang kurang terjangkau aliran dingin. Selisih horizontal
                    3,33°C versus selisih vertikal 0,72°C mengarahkan keputusan desain:
                    petakan suhu sepanjang kontainer, rekayasa distribusi udara, dan hentikan
                    penggunaan suhu rata-rata sebagai satu-satunya indikator pemulihan.
                  </p>
                </section>
              </div>

              <aside className="lg:sticky lg:top-8 lg:self-start">
                <div className="rounded-3xl border border-[var(--line)] bg-white p-6">
                  <h2 className="font-display text-2xl text-forest-deep">Ringkasan kejadian</h2>
                  <dl className="mt-5 divide-y divide-[var(--line)]">
                    {[
                      ["Tanggal", "12 Juli 2026"],
                      ["Jendela pemulihan", "14.35–16.46"],
                      ["Sensor aktif", "24 node internal"],
                      ["Target suhu", "20–24°C"],
                      ["Pendingin", "AC 1 PK"],
                      ["Lokasi", "Pintu Bosi, Kabupaten Toba"],
                    ].map(([label, value]) => (
                      <div key={label} className="py-3">
                        <dt className="text-xs uppercase tracking-wide text-muted">{label}</dt>
                        <dd className="mt-1 font-medium text-forest-deep">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <p className="mt-5 text-sm leading-6 text-muted">
                  Analisis ini menggunakan data kejadian operasional. Penjelasan pola aliran
                  udara merupakan hipotesis rekayasa yang masih perlu diuji secara langsung.
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
