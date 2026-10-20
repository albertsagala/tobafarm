import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const articles = [
  { category: "Jaringan komputer · Cisco Packet Tracer", metric: "3 konsep", metricNote: "VLAN, VTP, dan routing antar-VLAN dalam satu topologi.", date: "20 Oktober 2026", title: "Memahami VLAN, VTP, dan Inter-VLAN Routing melalui Cisco Packet Tracer", summary: "Penjelasan konsep, konfigurasi CLI tiga switch dan satu router, serta pengujian konektivitas untuk mahasiswa Teknik Elektro.", href: "/id/artikel/vtp-vlan-inter-vlan-routing/" },

  {category: "Layanan & Pelatihan", metric: "IoT", metricNote: "review sistem dan workshop praktik.", date: "17 Oktober 2026", title: "Review monitoring IoT dan workshop From ESP32 to Grafana", summary: "Cakupan jelas, harga awal, dan pengalaman narasumber terdokumentasi.", href: "/id/layanan/"},
  {category: "Catatan retrospektif · 2024", metric: "BSSN", metricNote: "National Cyber Exercise #9 di Medan.", date: "17 Oktober 2026", title: "Albert Sagala berbagi praktik pencegahan malware stealer", summary: "Keterlibatan sebagai narasumber, dengan rujukan berita resmi IT Del.", href: "/id/kegiatan/bssn-national-cyber-exercise/"},
  {category: "Catatan retrospektif · 2024", metric: "FGD", metricNote: "tata kelola keamanan informasi Sumatera Utara.", date: "17 Oktober 2026", title: "Kontribusi pada diskusi kebijakan keamanan informasi Sumut", summary: "Pembahasan tata kelola, SIEM, dan NIST Cybersecurity Framework dalam FGD November 2024.", href: "/id/kegiatan/tata-kelola-keamanan-informasi-sumut/"},
  { category: "Metode riset · Ruang & waktu", metric: "Kriging + SARIMA", metricNote: "memetakan lokasi dan meramalkan waktu dengan validasi yang tepat.", date: "15 Oktober 2026", title: "Memetakan Ruang, Meramalkan Waktu: Kriging dan SARIMA untuk Indoor Farming", summary: "Peran Kriging, IDW, RBF, ARIMA, dan SARIMA, periode musiman, serta pencegahan kebocoran data dalam evaluasi.", href: "/id/artikel/kriging-sarima-mikroklimat/" },
  { category: "AI · Indoor vertical farming · Arah riset", metric: "9 tren", metricNote: "dipilah berdasarkan kematangan, nilai praktis, dan peluang kontribusi ilmiah.", date: "15 Oktober 2026", title: "Sembilan tren AI yang membentuk indoor vertical farming pada 2026", summary: "Dari Safe RL dan digital twin hingga edge AI, phenotyping, predictive maintenance, dan asisten LLM—termasuk mana yang nyata dan mana yang masih hype.", href: "/id/artikel/tren-ai-indoor-vertical-farming-2026/" },
  { category: "Grafana · Monitoring · Indoor farming", metric: "27 node", metricNote: "dipantau bersama status AC, humidifier, CO₂, kesehatan sensor, dan alarm operasional.", date: "15 Oktober 2026", title: "Dashboard Grafana untuk monitoring indoor farming secara real-time", summary: "Cara mengubah data sensor dan aktuator menjadi dashboard operasional yang membantu diagnosis mikroklimat, evaluasi kontrol, dan deteksi gangguan.", href: "/id/artikel/dashboard-grafana-monitoring/" },
  { category: "Kabut asap · Pertanian lapangan", metric: "Fase kritis", metricNote: "prioritaskan pembungaan dan pembentukan hasil untuk pemeriksaan.", date: "15 Oktober 2026", title: "Saat Asap Menutupi Matahari: Apa Artinya bagi Petani Toba?", summary: "Risiko fotosintesis, fase rentan, dan panduan pencatatan bagi petani Toba tanpa menebak angka kerugian panen.", href: "/id/artikel/asap-toba-risiko-tanaman/" },
  {
    category: "IoT · Edge computing · Infrastruktur",
    metric: "27 node",
    metricNote: "mengirim data ke Jetson Nano untuk penyimpanan, monitoring, dan keputusan kontrol lokal.",
    date: "14 Oktober 2026",
    title: "Dari IoT ke Edge-to-Cloud: arsitektur tangguh untuk container farm",
    summary:
      "Arsitektur riset kami mempertahankan kontrol AC, humidifier, dan injeksi CO₂ di edge, sementara dashboard lokal dapat dipantau secara daring melalui Cloudflare Tunnel.",
    href: "/id/artikel/dari-iot-ke-edge-cloud/",
  },
  {
    category: "Mikroklimat spasial · Distribusi udara",
    metric: "4,6×",
    metricNote: "gradien horizontal lebih besar daripada gradien vertikal pada akhir pemulihan.",
    date: "14 Oktober 2026",
    title: "Mengapa perbedaan suhu horizontal lebih penting daripada ketinggian rak?",
    summary:
      "Pada kejadian pemulihan AC, selisih kiri–tengah mencapai 3,33°C, sedangkan selisih atas–bawah hanya 0,72°C. Temuan ini mengarahkan perhatian dari sekadar ketinggian rak menuju distribusi aliran udara sepanjang kontainer.",
    href: "/id/artikel/gradien-suhu-horizontal-rak/",
  },
  {
    category: "Mikroklimat spasial · Pendinginan",
    metric: "5,03°C",
    metricNote: "rentang suhu antarsensor ketika AC menyala.",
    date: "14 Oktober 2026",
    title: "AC mendinginkan container farm—tetapi tidak merata",
    summary:
      "Analisis 544 waktu pengamatan menunjukkan suhu rata-rata turun saat AC menyala, tetapi ketimpangan suhu antarlokasi membesar. Temuan ini menjelaskan mengapa kontrol berbasis satu sensor dapat menyesatkan.",
    href: "/id/artikel/ac-dan-keseragaman-mikroklimat/",
  },
  {
    category: "VPD · Temuan fasilitas",
    metric: "48,16%",
    metricNote: "waktu pengamatan berada dalam rentang air-VPD 0,6–1,2 kPa.",
    date: "14 Oktober 2026",
    title: "VPD di Container Farm: suhu terlihat baik belum tentu cukup",
    summary:
      "Pengamatan 48,1 jam menunjukkan masalah kelembapan malam yang tidak terlihat bila evaluasi hanya memakai suhu rata-rata. Artikel ini membahas data, keterbatasan air-VPD, serta arah kontrol suhu–kelembapan berikutnya.",
    href: "/id/artikel/vpd-container-farm/",
  },
];

export function Articles() {
  return (
    <section id="articles" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Artikel & Temuan"
            title="Catatan riset dan pertanian Toba"
            description="Temuan fasilitas dan penjelasan berbasis sumber tentang mikroklimat, teknologi pertanian, serta risiko di lapangan."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
