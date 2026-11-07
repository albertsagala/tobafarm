import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Passengers: Ketika Otomatisasi Gagal, Siapa yang Mengambil Kendali?",
  description: "Refleksi film Passengers tentang fail-safe, fault-tolerant control, AI, dan keselamatan sistem pertanian vertikal.",
  alternates: { canonical: "/id/artikel/passengers-otomatisasi-fail-safe/" },
  openGraph: { type: "article", title: "Passengers: Ketika Otomatisasi Gagal, Siapa yang Mengambil Kendali?", publishedTime: "2026-11-07", authors: ["Albert Sagala"], images: ["/images/passengers-fail-safe.svg"] },
};

const sections = [
  { heading: "Bukan sekadar satu kapsul yang rusak", paragraphs: [
    "Kapal Avalon membawa ribuan penumpang menuju Homestead II dalam perjalanan sekitar 120 tahun. Penumpangnya berhibernasi, sementara kapal beroperasi otomatis. Namun Jim Preston terbangun sekitar 90 tahun sebelum tiba. Belakangan kita mengetahui adanya kerusakan akibat benturan dengan benda antariksa, yang memicu gangguan pada berbagai subsistem.",
    "Kegagalan besar tidak selalu berasal dari satu komponen yang hancur total. Kerusakan lokal dapat berkembang menjadi kegagalan berantai. Dalam rekayasa, fault detection and diagnosis (FDD) membantu mendeteksi gejala, mengisolasi gangguan, dan menentukan tindakan. Fault-tolerant control berupaya mempertahankan fungsi penting meskipun sebagian komponen gagal.",
    "Kita juga tidak dapat menyimpulkan bahwa Avalon sama sekali tidak memiliki proteksi. Film memperlihatkan fasilitas dan mekanisme darurat; persoalannya adalah perlindungan yang ada tidak cukup menghadapi rangkaian kerusakan yang terjadi."
  ]},
  { heading: "Fail-safe bukan sekadar tombol manual", paragraphs: [
    "Manual override hanya satu bagian dari keselamatan. Operator yang tidak memiliki informasi, akses, pelatihan, atau waktu yang cukup belum tentu mampu mengambil alih secara aman. Fail-safe berarti mengarahkan sistem ke kondisi yang meminimalkan bahaya saat terjadi kegagalan.",
    "Pada sistem penunjang kehidupan, menghentikan semua fungsi justru berbahaya. Di sana diperlukan kemampuan fail-operational atau graceful degradation: mempertahankan fungsi kritis sambil mengurangi fungsi yang tidak esensial.",
    "Desain berlapis melibatkan deteksi anomali, isolasi kerusakan, redundansi yang memperhitungkan common-cause failure, prosedur pemulihan, dan intervensi manusia yang realistis. Tidak ada lapisan yang menjamin keselamatan mutlak, tetapi semuanya dapat mengurangi risiko."
  ]},
  { heading: "Dari kapal Avalon ke pertanian vertikal", paragraphs: [
    "Dalam riset pertanian vertikal berbasis kontainer, suhu, kelembapan relatif, dan parameter lain dipantau untuk mendukung keputusan pengendalian. Pendekatan berbasis data dan reinforcement learning juga diteliti untuk mengelola iklim. Skala risikonya berbeda jauh dari kapal antarbintang, tetapi persoalan keandalan sensor, aktuator, dan kontrol memiliki kemiripan.",
    "Bayangkan sensor melaporkan 22°C padahal suhu sebenarnya 29°C. Pengendali dapat menyimpulkan bahwa pendinginan tidak diperlukan. Atau aktuator menerima perintah menyala tetapi perangkat fisik tidak merespons. Algoritma mungkin bekerja sesuai kode, sementara kondisi nyata tetap tidak aman bagi tanaman.",
    "Karena itu, validasi sensor, pemeriksaan konsistensi antarnode, deteksi data yang membeku, verifikasi respons aktuator, alarm, dan fallback controller berbasis aturan layak dipertimbangkan. Dalam safe reinforcement learning, batas keselamatan sebaiknya tidak hanya diandalkan pada reward, tetapi juga dijaga oleh lapisan pengaman independen.",
    "Evaluasi ilmiah perlu menguji gangguan: bias sensor, putus komunikasi, perubahan lingkungan, dan kegagalan aktuator. Ukur pelanggaran batas suhu, durasi kondisi tidak aman, waktu pemulihan, serta keberhasilan fallback. Bedakan secara eksplisit hasil simulasi dari hasil eksperimen nyata."
  ]},
  { heading: "Arthur dan keterbatasan pemahaman konteks", paragraphs: [
    "Arthur, bartender android, akhirnya mengungkapkan bahwa Jim sengaja membangunkan Aurora. Adegan ini menggambarkan bagaimana sistem yang mampu berbicara dengan lancar belum tentu memahami konteks sosial dan konsekuensi pengungkapan informasi.",
    "Dalam AI, antarmuka yang tampak manusiawi tidak membuktikan bahwa mesin memahami kerahasiaan, persetujuan, atau dampak moral sebagaimana manusia. Pengujian perilaku, batas kewenangan, dan tata kelola informasi tetap penting."
  ]},
  { heading: "Kesepian Jim, pilihan Aurora, dan etika teknologi", paragraphs: [
    "Jim membangunkan Aurora tanpa persetujuannya. Kesepian menjelaskan konteks tindakan Jim, tetapi tidak membenarkannya: Aurora kehilangan kesempatan menjalani masa depan yang telah ia pilih.",
    "Ketika kapal terancam, Jim dan Aurora bekerja sama untuk mencegah bencana. Kerja sama dan keberanian mereka tidak otomatis menghapus pelanggaran sebelumnya. Seseorang dapat membuat keputusan yang salah dan kemudian melakukan tindakan yang menyelamatkan banyak orang.",
    "Pertanyaan etis bagi pengembang teknologi bukan hanya apakah sistem mampu melakukan sesuatu, melainkan siapa yang berwenang memutuskan, siapa yang menanggung risiko, dan apakah pihak yang terdampak memiliki pilihan yang bermakna."
  ]},
  { heading: "Penumpang atau pengendali?", paragraphs: [
    "Kita menikmati kenyamanan teknologi seolah menjadi penumpang. Namun ketika sistem gagal, manusia tetap memerlukan informasi yang dapat dipahami, kewenangan yang jelas, dan jalur pemulihan yang dapat dijalankan. Tanggung jawab itu terutama harus dipikirkan oleh perancang dan pengelola sistem, bukan dibebankan begitu saja kepada pengguna.",
    "Pelajaran terpenting dari Passengers bukan bahwa otomatisasi pasti gagal, melainkan bahwa kegagalan harus diperlakukan sebagai kemungkinan sejak tahap desain. Dalam smart farming, tujuan kita bukan hanya AI yang efisien, tetapi sistem yang dapat dipercaya dan mampu melindungi tanaman, peralatan, serta proses produksi ketika kondisi tidak lagi ideal."
  ]}
];

export default function Page() {
  return <div className="min-h-screen bg-cream-soft"><Header locale="id" /><main id="main"><article className="mx-auto max-w-3xl px-5 py-16 md:py-24">
    <Link href="/id/#articles" className="text-sm font-medium text-teal-deep">← Kembali ke artikel</Link>
    <p className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-teal-deep">Refleksi film · AI · Keselamatan sistem</p>
    <h1 className="font-display mt-4 text-4xl leading-tight text-forest-deep md:text-6xl">Passengers: Ketika Otomatisasi Gagal, Siapa yang Mengambil Kendali?</h1>
    <p className="mt-6 text-xl leading-8 text-muted">Dari kapal antarbintang Avalon hingga pertanian vertikal, teknologi cerdas bukan hanya mampu bekerja sendiri, tetapi juga dirancang agar tetap aman ketika sesuatu berjalan di luar rencana.</p>
    <p className="mt-5 text-sm text-muted">7 November 2026 · Albert Sagala · Mengandung spoiler film Passengers (2016)</p>
    <figure className="mt-10"><img src="/images/passengers-fail-safe.svg" alt="Ilustrasi orisinal kapal antarbintang dengan sistem otomatisasi, pemantauan, fail-safe, dan kendali manusia" className="w-full rounded-2xl" width="1600" height="900" /><figcaption className="mt-3 text-sm text-muted">Ilustrasi orisinal untuk refleksi rekayasa keselamatan; bukan cuplikan film Passengers.</figcaption></figure>
    <div className="mt-12 space-y-6 text-lg leading-8 text-ink">
      <p>Setelah menonton <em>Passengers</em>, saya melihat lebih dari kisah dua manusia yang terbangun terlalu dini dalam perjalanan antarbintang. Sebagai peneliti sistem kontrol, otomatisasi, dan kecerdasan buatan untuk pertanian cerdas, saya justru bertanya: apa yang terjadi ketika sistem yang dirancang bekerja tanpa manusia tiba-tiba membutuhkan manusia pada saat paling kritis?</p>
      {sections.map(section => <section key={section.heading} className="pt-6"><h2 className="font-display mb-5 text-3xl text-forest-deep md:text-4xl">{section.heading}</h2><div className="space-y-5">{section.paragraphs.map((p,i)=><p key={i}>{p}</p>)}</div></section>)}
      <blockquote className="border-l-4 border-teal-deep pl-6 font-display text-2xl text-forest-deep">Teknologi yang benar-benar cerdas bukan hanya tahu cara bekerja. Ia juga dirancang untuk tahu apa yang harus dilakukan ketika pekerjaannya tidak berjalan sebagaimana mestinya.</blockquote>
      <p className="text-sm text-muted">Catatan: ini refleksi atas film fiksi ilmiah, bukan audit teknis kapal Avalon. Contoh kegagalan sensor dan strategi kontrol adalah ilustrasi rekayasa serta arah penelitian, bukan klaim hasil uji yang telah tervalidasi.</p>
    </div>
  </article></main><Footer locale="id" /></div>;
}
