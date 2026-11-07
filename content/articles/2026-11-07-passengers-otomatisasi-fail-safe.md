---
title: "Passengers: Ketika Otomatisasi Gagal, Siapa yang Mengambil Kendali?"
date: "2026-11-07"
category: "AI, Automation & Smart Farming"
description: "Dari kapal Avalon hingga pertanian vertikal: pelajaran tentang fail-safe, ketahanan sistem, AI, dan tanggung jawab manusia."
tags: ["Passengers", "fail-safe", "automation", "smart farming", "AI", "sistem kontrol"]
spoiler: true
---

# Passengers: Ketika Otomatisasi Gagal, Siapa yang Mengambil Kendali?

*Dari kapal antarbintang Avalon hingga pertanian vertikal, teknologi yang cerdas bukan hanya teknologi yang mampu bekerja sendiri, melainkan yang tetap aman ketika sesuatu berjalan di luar rencana.*

**Peringatan: artikel ini mengandung spoiler film *Passengers* (2016).**

Sabtu ini saya baru selesai menonton *Passengers*. Di permukaan, film ini bercerita tentang dua manusia yang terbangun terlalu dini dalam perjalanan antarbintang. Tetapi sebagai seseorang yang meneliti sistem kontrol, otomatisasi, dan kecerdasan buatan untuk pertanian cerdas, saya melihat pertanyaan lain: **apa yang terjadi ketika sistem yang dirancang untuk bekerja tanpa manusia justru membutuhkan manusia pada saat paling kritis?**

Kapal Avalon membawa ribuan penumpang menuju Homestead II. Perjalanannya berlangsung sekitar 120 tahun. Selama sebagian besar perjalanan, penumpang berada dalam hibernasi, sementara berbagai fungsi kapal berjalan otomatis. Restoran, layanan robot, pemeliharaan lingkungan, hingga kapsul tidur menjadi bagian dari ekosistem teknologi yang tampak sangat andal.

Lalu Jim Preston terbangun sekitar 90 tahun sebelum tiba di tujuan. Satu kejadian yang tidak semestinya terjadi mengubah seluruh hidupnya.

## Bukan sekadar satu kapsul yang rusak

Seiring cerita berkembang, kita mengetahui bahwa kapal mengalami kerusakan akibat benturan dengan benda antariksa. Gangguan merambat ke berbagai subsistem. Ini penting: kegagalan besar tidak selalu muncul dari satu komponen yang tiba-tiba hancur total. Ia dapat bermula dari kerusakan lokal, disusul efek berantai yang tidak tertangani.

Dalam rekayasa, kita mengenal *fault detection and diagnosis* (FDD): kemampuan mengenali gejala abnormal, mengisolasi sumber gangguan, dan menentukan respons. Kita juga mengenal *fault-tolerant control*: sistem yang tetap mempertahankan fungsi penting meski sebagian komponennya gagal.

Namun ada perbedaan yang sering dilupakan: **sistem yang otomatis belum tentu sistem yang tangguh**. Kemampuan beroperasi selama bertahun-tahun tanpa intervensi bukan bukti bahwa semua skenario kegagalan telah tertangani.

Tidak adil pula menyimpulkan Avalon sama sekali tidak memiliki mekanisme keselamatan. Film memperlihatkan beberapa proteksi dan fasilitas darurat. Masalahnya, lapisan perlindungan itu tidak cukup untuk menghadapi rangkaian kegagalan yang terjadi. Dalam bahasa rekayasa keselamatan, kita perlu menilai bukan hanya keberadaan pengaman, tetapi juga cakupan, independensi, dan kemampuannya menghadapi *common-cause failure*.

## Fail-safe bukan sekadar tombol manual

Saat sistem otomatis bermasalah, respons spontan kita adalah: “Kembalikan saja ke manual.” Tetapi *manual override* hanya salah satu strategi. Operator yang tidak memiliki informasi, pelatihan, akses, atau waktu yang cukup belum tentu dapat mengendalikan keadaan dengan aman.

*Fail-safe* berarti sistem berpindah atau bertahan pada keadaan yang meminimalkan bahaya ketika terjadi kegagalan. Pada sebagian sistem, itu berarti menghentikan proses. Pada sistem lain—seperti penunjang kehidupan di kapal—mematikan semuanya justru berbahaya. Di sana, dibutuhkan *fail-operational* atau *graceful degradation*: fungsi kritis tetap hidup walaupun layanan nonkritis dikurangi.

Bayangkan rancangan keselamatan berlapis:

1. **Deteksi:** sensor dan pemantauan mengenali kondisi yang tidak masuk akal.
2. **Isolasi:** gangguan pada satu subsistem tidak mudah merambat ke subsistem lain.
3. **Redundansi:** jalur cadangan tersedia untuk fungsi kritis, dengan perhatian terhadap kegagalan bersama.
4. **Pemulihan:** pengendali dapat beralih ke mode operasi terbatas yang aman.
5. **Intervensi manusia:** informasi, kewenangan, prosedur, dan akses tersedia ketika keputusan manusia diperlukan.

Tidak satu pun lapisan ini menjamin keselamatan mutlak. Tujuannya adalah mengurangi peluang sebuah gangguan berubah menjadi bencana.

## Dari Avalon ke pertanian vertikal

Apa hubungan kapal antarbintang dengan sebuah kontainer pertanian? Skala risikonya jelas berbeda. Tetapi persoalan rekayasanya memiliki kemiripan.

Dalam riset pertanian vertikal berbasis kontainer, lingkungan tanaman dipantau melalui sensor suhu, kelembapan relatif, dan parameter lain. Data menjadi masukan bagi keputusan pengendalian, termasuk pengoperasian pendingin udara dan pencahayaan. Kami juga mengeksplorasi pendekatan berbasis data dan *reinforcement learning* untuk pengendalian iklim.

Sekarang bayangkan satu sensor suhu melaporkan 22°C padahal suhu sebenarnya 29°C. Pengendali yang hanya mempercayai satu angka mungkin memutuskan bahwa pendinginan tidak diperlukan. Atau sebaliknya, aktuator diperintahkan menyala tetapi perangkat fisiknya tidak merespons. Dalam dua contoh itu, algoritma dapat bekerja persis sesuai program, tetapi keputusan di dunia nyata tetap salah.

Inilah alasan **kualitas data, validasi sensor, dan umpan balik aktuator sama pentingnya dengan kecanggihan algoritma AI**.

Sebuah arsitektur yang layak diuji dapat memadukan pemeriksaan batas fisik, perbandingan antarsensor, deteksi nilai yang membeku, verifikasi respons aktuator, alarm, dan pengendali cadangan berbasis aturan. Untuk *reinforcement learning*, batas keselamatan sebaiknya tidak diserahkan hanya kepada fungsi *reward*. Tindakan yang berpotensi melanggar batas operasional perlu disaring oleh lapisan keselamatan yang terpisah.

Itulah arah pertanyaan penelitian yang menarik: bukan hanya “apakah AI dapat menghemat energi?”, tetapi juga **“bagaimana performa AI ketika sensor bias, komunikasi terputus, kondisi lingkungan berubah, atau aktuator gagal?”**

Klaim bahwa sebuah pengendali lebih aman harus dibuktikan melalui pengujian gangguan, bukan sekadar kurva performa pada kondisi normal. Kita perlu mengukur tingkat pelanggaran batas suhu, waktu pemulihan, durasi kondisi tidak aman, dan kemampuan berpindah ke pengendali cadangan. Hasil simulasi juga harus dibedakan dengan hasil eksperimen pada fasilitas nyata.

## Arthur: ketika mesin memahami kata, tetapi kehilangan konteks

Ada adegan lain yang sangat relevan dengan AI: Arthur, bartender android di kapal. Jim sebelumnya meminta Arthur merahasiakan fakta bahwa ia sengaja membangunkan Aurora. Namun ketika percakapan berubah, Arthur mengungkapkan informasi itu.

Arthur tidak perlu dianggap memiliki niat jahat. Adegan ini justru memperlihatkan masalah *context awareness*: sebuah sistem dapat mengikuti pola percakapan dan tetap gagal memahami konsekuensi sosial dari informasi yang disampaikan.

Dalam pengembangan AI, ini mengingatkan kita pada pentingnya pengelolaan konteks, batas kewenangan, kerahasiaan, dan pengujian perilaku di luar skenario ideal. Antarmuka yang terlihat manusiawi bukan jaminan bahwa sistem memahami nilai, relasi, atau dampak keputusannya seperti manusia.

## Kesepian Jim, pilihan Aurora, dan etika pengendalian

Film ini juga tidak dapat dibaca hanya sebagai kisah romantis. Jim sengaja membangunkan Aurora tanpa persetujuannya, sehingga menghilangkan kesempatan Aurora untuk menjalani masa depan yang telah ia pilih. Kesepian Jim menjelaskan konteks tindakannya, tetapi tidak membenarkannya.

Ketika kerusakan kapal membahayakan semua penumpang, Jim dan Aurora akhirnya bekerja sama. Mereka membantu mencegah kegagalan yang lebih besar. Namun kerja sama dalam keadaan darurat tidak otomatis menghapus pelanggaran persetujuan yang terjadi sebelumnya.

Dua hal itu dapat benar sekaligus: seseorang dapat melakukan tindakan yang keliru dan kemudian mengambil keputusan yang menyelamatkan banyak orang.

Di sini ada pelajaran bagi perancang teknologi. Pertanyaan etis bukan hanya apakah sistem mampu melakukan sesuatu, tetapi juga **siapa yang berhak mengambil keputusan, siapa yang menanggung risiko, dan apakah pihak terdampak memiliki pilihan yang bermakna**.

## Penumpang atau pengendali?

Judul *Passengers* mengajak kita merenungkan posisi manusia di dalam sistem yang semakin otomatis. Kita menikmati kemudahan teknologi seolah hanya menjadi penumpang. Namun ketika terjadi kegagalan, siapa yang mampu memahami situasi dan bertindak?

Jawabannya bukan membebankan seluruh tanggung jawab kepada pengguna. Justru perancang, pengelola, dan operator sistem wajib menyiapkan pengawasan, informasi yang dapat dipahami, jalur eskalasi, dan prosedur pemulihan. Manusia perlu tetap memiliki kemampuan untuk mengambil alih **ketika pengambilalihan itu realistis dan aman**.

Bagi saya, pesan terpenting *Passengers* bukan bahwa otomatisasi pasti gagal, melainkan bahwa **rekayasa yang baik harus menganggap kegagalan sebagai kemungkinan yang perlu dirancang sejak awal**.

Di pertanian cerdas, kita tentu ingin sensor yang akurat, AI yang adaptif, dan kontrol yang efisien. Tetapi tujuan akhirnya lebih besar: sistem yang dapat dipercaya oleh manusia yang mengoperasikannya, serta tetap melindungi tanaman, peralatan, dan proses produksi ketika kondisi tidak lagi ideal.

**Teknologi yang benar-benar cerdas bukan hanya tahu cara bekerja. Ia juga dirancang untuk tahu apa yang harus dilakukan ketika pekerjaannya tidak berjalan sebagaimana mestinya.**

---

*Catatan penulis: artikel ini adalah refleksi atas film fiksi ilmiah, bukan audit teknis sistem kapal Avalon. Contoh kegagalan sensor dan strategi kontrol pertanian merupakan ilustrasi rekayasa dan arah penelitian, bukan klaim hasil uji yang telah tervalidasi.*
