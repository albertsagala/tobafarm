/**
 * Public content for the site. Every fact here must trace to a public record
 * listed in `sources`. Leave optional fields unset instead of writing
 * placeholder text; components hide anything that is empty.
 */

export type Status = "operational" | "experimental" | "development";

export const statusInfo: Record<Status, { label: string; description: string }> = {
  operational: {
    label: "Operasional",
    description:
      "Bagian dari sistem yang berjalan dan dipakai sebagai infrastruktur dalam studi yang sudah terbit.",
  },
  experimental: {
    label: "Eksperimen",
    description:
      "Metode yang diuji atau dibandingkan dalam studi; bukan pengendalian harian.",
  },
  development: {
    label: "Pengembangan",
    description: "Sedang dibangun dalam proyek riset yang berjalan.",
  },
};

export type Source = { label: string; href: string };

const sinta = {
  researches:
    "https://sinta.kemdiktisaintek.go.id/authors/profile/6034587/?view=researches",
  services:
    "https://sinta.kemdiktisaintek.go.id/authors/profile/6034587/?view=services",
};

export const sources = {
  containerGrant: {
    label: "SINTA · Penelitian 2025 (PPDK)",
    href: sinta.researches,
  },
  climateGrant: {
    label: "SINTA · Penelitian 2024 (PDUPT)",
    href: sinta.researches,
  },
  wsn24: {
    label: "JICSA 2026 · doi:10.54074/jicsa.v2i1.32",
    href: "https://doi.org/10.54074/jicsa.v2i1.32",
  },
  phEc: {
    label: "JICSA 2026 · doi:10.54074/jicsa.v2i1.34",
    href: "https://doi.org/10.54074/jicsa.v2i1.34",
  },
  dqn: {
    label: "JICSA 2026 · doi:10.54074/jicsa.v2i1.33",
    href: "https://doi.org/10.54074/jicsa.v2i1.33",
  },
  rlPid: {
    label: "IEEE TIME-E 2025 · doi:10.1109/time-e68804.2025.11512910",
    href: "https://doi.org/10.1109/time-e68804.2025.11512910",
  },
  driftWatch: {
    label: "IEEE TIME-E 2025 · doi:10.1109/time-e68804.2025.11512866",
    href: "https://doi.org/10.1109/time-e68804.2025.11512866",
  },
  ddpg: {
    label: "IEEE TIME-E 2024 · doi:10.1109/time-e62724.2024.10919833",
    href: "https://doi.org/10.1109/time-e62724.2024.10919833",
  },
  digitalTwin: {
    label: "IEEE TIME-E 2024 · doi:10.1109/time-e62724.2024.10919834",
    href: "https://doi.org/10.1109/time-e62724.2024.10919834",
  },
} satisfies Record<string, Source>;

export type Spec = {
  label: string;
  value: string;
  status?: Status;
  source: Source;
};

export type FacilityPhoto = {
  /** Public path such as `/images/facility/container-exterior.jpg`. */
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

export type Component = {
  name: string;
  detail: string;
  status: Status;
  source: Source;
};

export type Stage = {
  id: "sensing" | "processing" | "storage" | "actuation";
  title: string;
  summary: string;
  components: Component[];
};

export const facility = {
  summary:
    "Fasilitas riset berupa kontainer 10 kaki berisi sistem hidroponik vertikal. Di dalamnya terpasang jaringan sensor nirkabel, sensor larutan nutrisi, pipeline data yang dikelola sendiri, serta pengendali iklim dan pencahayaan yang sedang diuji.",
  specs: [
    {
      label: "Wadah",
      value: "Kontainer 10 kaki untuk pertanian vertikal dalam ruang",
      source: sources.containerGrant,
    },
    {
      label: "Sistem tanam",
      value: "Hidroponik vertikal dengan deep flow technique (DFT)",
      status: "development",
      source: sources.containerGrant,
    },
    {
      label: "Jaringan sensor lingkungan",
      value: "24 node sensor nirkabel untuk menilai keseragaman kondisi antar-titik",
      status: "operational",
      source: sources.wsn24,
    },
    {
      label: "Larutan nutrisi",
      value: "Pemantauan pH dan EC",
      status: "operational",
      source: sources.phEc,
    },
    {
      label: "Pipeline data",
      value: "Edge-IoT self-hosted (server dikelola sendiri)",
      status: "operational",
      source: sources.phEc,
    },
    {
      label: "Pengendali iklim",
      value: "DQN dan pengendali berbasis aturan, keduanya pernah dijalankan pada sistem",
      status: "experimental",
      source: sources.dqn,
    },
    {
      label: "Pengendali pencahayaan",
      value: "Hybrid reinforcement learning–PID",
      status: "experimental",
      source: sources.rlPid,
    },
  ] satisfies Spec[],
  // Only photographs taken at the facility. Never stock or generated images.
  photos: [] as FacilityPhoto[],
  stages: [
    {
      id: "sensing",
      title: "Sensor",
      summary: "Mengukur kondisi ruang tanam dan larutan nutrisi.",
      components: [
        {
          name: "Jaringan sensor nirkabel 24 node",
          detail: "Titik ukur tersebar di dalam kontainer untuk pemetaan mikroklimat.",
          status: "operational",
          source: sources.wsn24,
        },
        {
          name: "Sensor pH dan EC",
          detail: "Memantau larutan nutrisi hidroponik.",
          status: "operational",
          source: sources.phEc,
        },
      ],
    },
    {
      id: "processing",
      title: "Pemrosesan",
      summary: "Mengolah data di sisi edge dan menguji metode analisis.",
      components: [
        {
          name: "Pipeline edge-IoT",
          detail: "Menerima dan meneruskan data sensor di lokasi.",
          status: "operational",
          source: sources.phEc,
        },
        {
          name: "Pemetaan keseragaman spasial",
          detail: "Membandingkan kondisi antar-node dengan memperhitungkan energi.",
          status: "experimental",
          source: sources.wsn24,
        },
        {
          name: "DriftWatch-CEA",
          detail: "Deteksi drift pada banyak sensor secara spasio-temporal.",
          status: "experimental",
          source: sources.driftWatch,
        },
        {
          name: "Digital twin berbasis microservices",
          detail: "Model digital lingkungan tanam terkendali.",
          status: "experimental",
          source: sources.digitalTwin,
        },
      ],
    },
    {
      id: "storage",
      title: "Penyimpanan",
      summary: "Menyimpan data runtun waktu untuk analisis dan kontrol.",
      components: [
        {
          name: "Server data self-hosted",
          detail: "Bagian dari pipeline edge-IoT yang dikelola sendiri.",
          status: "operational",
          source: sources.phEc,
        },
      ],
    },
    {
      id: "actuation",
      title: "Aktuator & kontrol",
      summary: "Mengubah kondisi ruang tanam berdasarkan keputusan pengendali.",
      components: [
        {
          name: "Kontrol iklim DQN vs berbasis aturan",
          detail: "Dibandingkan dari sisi performa iklim dan energi listrik.",
          status: "experimental",
          source: sources.dqn,
        },
        {
          name: "Kontrol pencahayaan hybrid RL-PID",
          detail: "Pengaturan lampu tanam di kontainer.",
          status: "experimental",
          source: sources.rlPid,
        },
        {
          name: "Kontrol nutrisi dan iklim DDPG",
          detail: "Reinforcement learning untuk nutrisi, iklim, dan kondisi tanaman.",
          status: "experimental",
          source: sources.ddpg,
        },
      ],
    },
  ] satisfies Stage[],
};

export type CaseStudy = {
  id: string;
  title: string;
  year: string;
  status: Status;
  problem: string;
  approach: string;
  equipment: string;
  documentation: Source[];
  nextStep?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "spatial-microclimate",
    title: "Pemetaan mikroklimat spasial dengan 24 node sensor",
    year: "2026",
    status: "experimental",
    problem:
      "Kondisi lingkungan di dalam kontainer belum tentu seragam, sehingga pembacaan dari satu titik dapat menyesatkan keputusan kontrol.",
    approach:
      "Menilai keseragaman spasial dari banyak titik ukur sekaligus, dengan konsumsi energi sebagai bagian dari penilaian.",
    equipment: "Jaringan sensor nirkabel 24 node di dalam container farm.",
    documentation: [sources.wsn24],
  },
  {
    id: "climate-control",
    title: "Kontrol iklim: DQN dibandingkan pengendali berbasis aturan",
    year: "2024–2026",
    status: "experimental",
    problem:
      "Pengendali iklim harus menjaga kondisi tanam sekaligus memperhitungkan konsumsi listrik.",
    approach:
      "Menjalankan pengendali DQN dan pengendali berbasis aturan pada sistem, lalu membandingkan performa iklim dan energi listriknya. Studi sebelumnya menguji DDPG untuk nutrisi dan iklim.",
    equipment:
      "Pengendali DQN, pengendali berbasis aturan, dan data energi listrik dari pertanian dalam ruang.",
    documentation: [sources.dqn, sources.ddpg],
  },
  {
    id: "lighting-control",
    title: "Kontrol pencahayaan hybrid RL-PID",
    year: "2025",
    status: "experimental",
    problem: "Pencahayaan tanam di kontainer perlu diatur secara otomatis.",
    approach: "Menggabungkan reinforcement learning dengan pengendali PID.",
    equipment: "Sistem pencahayaan tanam di pertanian dalam ruang berbasis kontainer.",
    documentation: [sources.rlPid],
  },
  {
    id: "edge-pipeline",
    title: "Pipeline data edge-IoT untuk pH dan EC",
    year: "2026",
    status: "operational",
    problem:
      "Larutan nutrisi hidroponik perlu dipantau terus-menerus dengan infrastruktur data yang dikelola sendiri.",
    approach: "Membangun pipeline data edge-IoT yang dikelola sendiri lalu mengevaluasi kinerjanya.",
    equipment: "Sensor pH dan EC, pipeline edge-IoT self-hosted.",
    documentation: [sources.phEc],
  },
  {
    id: "sensor-drift",
    title: "Deteksi drift multi-sensor (DriftWatch-CEA)",
    year: "2025",
    status: "experimental",
    problem:
      "Pembacaan sensor dapat bergeser dari kondisi sebenarnya seiring waktu, sehingga data untuk kontrol menjadi tidak andal.",
    approach: "Kerangka adaptif spasio-temporal untuk mendeteksi drift pada banyak sensor sekaligus.",
    equipment: "Data multi-sensor dari sistem controlled environment agriculture.",
    documentation: [sources.driftWatch],
  },
  {
    id: "dft-container",
    title: "Hidroponik vertikal DFT dalam kontainer 10 kaki",
    year: "2025",
    status: "development",
    problem: "Meningkatkan hasil tanaman pada pertanian vertikal dalam ruang.",
    approach:
      "Mengembangkan sistem hidroponik vertikal deep flow technique (DFT) dengan kontrol iklim berbasis IoT.",
    equipment: "Kontainer 10 kaki, rak hidroponik vertikal DFT, kontrol iklim IoT.",
    documentation: [sources.containerGrant],
  },
];

export type Paper = {
  title: string;
  venue: string;
  year: number;
  href: string;
};

export type Manuscript = {
  title: string;
  stage: string;
  year?: number;
};

export const publications: { published: Paper[]; manuscripts: Manuscript[] } = {
  published: [
    {
      year: 2026,
      title:
        "Experimental comparison of deployed DQN and rule-based climate controllers in indoor farming: climate performance and electrical energy trade-offs",
      venue: "Journal of Intelligent Computing Systems and Applications",
      href: "https://doi.org/10.54074/jicsa.v2i1.33",
    },
    {
      year: 2026,
      title:
        "Energy-aware spatial uniformity assessment in a container farm using a 24-node wireless sensor network",
      venue: "Journal of Intelligent Computing Systems and Applications",
      href: "https://doi.org/10.54074/jicsa.v2i1.32",
    },
    {
      year: 2026,
      title:
        "Performance evaluation of a self-hosted edge-IoT data pipeline for hydroponic pH and EC monitoring",
      venue: "Journal of Intelligent Computing Systems and Applications",
      href: "https://doi.org/10.54074/jicsa.v2i1.34",
    },
    {
      year: 2025,
      title:
        "Hybrid RL-PID for intelligent lighting control in container-based indoor farming",
      venue:
        "IEEE International Conference on Technology, Informatics, Management, Engineering and Environment (TIME-E)",
      href: "https://doi.org/10.1109/time-e68804.2025.11512910",
    },
    {
      year: 2025,
      title:
        "DriftWatch-CEA: a spatio-temporal adaptive framework for multi-sensor drift detection in controlled environment agriculture systems",
      venue:
        "IEEE International Conference on Technology, Informatics, Management, Engineering and Environment (TIME-E)",
      href: "https://doi.org/10.1109/time-e68804.2025.11512866",
    },
    {
      year: 2025,
      title:
        "Pengenalan teknologi Internet of Things (IoT) untuk sistem hidroponik di SMKN 1 Pagaran, Kabupaten Tapanuli Utara, Sumatera Utara",
      venue: "Jurnal Abdi Masyarakat Indonesia",
      href: "https://doi.org/10.54082/jamsi.1539",
    },
    {
      year: 2024,
      title:
        "Optimizing indoor vertical farming with DDPG reinforcement learning: enhancing control of nutrient levels, climate conditions, and plant health",
      venue:
        "IEEE International Conference on Technology, Informatics, Management, Engineering and Environment (TIME-E)",
      href: "https://doi.org/10.1109/time-e62724.2024.10919833",
    },
    {
      year: 2024,
      title:
        "A microservices-driven digital twin model for precision farming in a controlled indoor environment",
      venue:
        "IEEE International Conference on Technology, Informatics, Management, Engineering and Environment (TIME-E)",
      href: "https://doi.org/10.1109/time-e62724.2024.10919834",
    },
    {
      year: 2022,
      title: "Smart farming: drip irrigation controlled using LR-WPAN with hybrid power",
      venue: "Jurnal Sistem Informasi dan Ilmu Komputer Prima (JUSIKOM PRIMA)",
      href: "https://doi.org/10.34012/jurnalsisteminformasidanilmukomputer.v5i2.2462",
    },
    {
      year: 2022,
      title: "Implementation of portable off-grid solar water pump for irrigation systems",
      venue: "Jurnal Mantik",
      href: "https://www.iocscience.org/ejournal/index.php/mantik/article/view/1811",
    },
  ],
  manuscripts: [],
};

export type FieldActivity = {
  year: string;
  role: "Ketua" | "Anggota";
  scheme: string;
  title: string;
  href?: string;
};

export const fieldActivities: { source: Source; items: FieldActivity[] } = {
  source: { label: "SINTA · Pengabdian kepada masyarakat", href: sinta.services },
  items: [
    {
      year: "2026",
      role: "Anggota",
      scheme: "Hibah internal",
      title:
        "Penguatan kapasitas petani hortikultura Desa Banualuhu dengan penerapan hidroponik vertikal IoT–energi surya pada komoditas seledri",
    },
    {
      year: "2025",
      role: "Ketua",
      scheme: "IEEE Tech4Good",
      title:
        "Empowering local farmers with solar-integrated IoT vertical hydroponics for celery cultivation",
      href: "https://www.del.ac.id/?p=16822",
    },
    {
      year: "2024",
      role: "Ketua",
      scheme: "Hibah internal (PKM)",
      title:
        "Pengenalan teknologi IoT di bidang pertanian untuk mendukung kegiatan laboratorium di SMKN 1 Pagaran",
    },
    {
      year: "2022",
      role: "Ketua",
      scheme: "Pengabdian kepada masyarakat kompetitif nasional",
      title:
        "Smart precision farming untuk optimalisasi jumlah air dan nutrisi (fertigasi) pada tanaman stroberi di Desa Pintubosi, Kabupaten Toba",
    },
    {
      year: "2022",
      role: "Ketua",
      scheme: "Hibah internal (PKM)",
      title:
        "Implementasi irigasi tetes pada tanaman stroberi dan pembuatan pupuk organik cair untuk mendukung wisata agro di Desa Onanrunggu, Samosir",
      href: "https://www.del.ac.id/?p=14185",
    },
  ],
};

export type ProfileLink = { label: string; note: string; href: string };

export type TeamMember = {
  name: string;
  role: string;
  positions: string[];
  focus: string[];
  profiles: ProfileLink[];
  photo?: { src: string; width: number; height: number };
};

export const researchLead: TeamMember = {
  name: "Albert Sagala",
  role: "Pemimpin riset",
  positions: [
    "Associate Professor of Electrical Engineering, Institut Teknologi Del",
    "PhD Candidate, Engineering Physics, Institut Teknologi Bandung",
  ],
  focus: [
    "Intelligent control and cyber-physical systems",
    "Artificial intelligence for precision agriculture",
    "Internet of Things and wireless sensor networks",
    "Instrumentation, automation, and edge computing",
  ],
  profiles: [
    {
      label: "Situs akademik",
      note: "albert.tobasmartfarming.com",
      href: "https://albert.tobasmartfarming.com",
    },
    {
      label: "SINTA",
      note: "Profil penulis nasional",
      href: "https://sinta.kemdiktisaintek.go.id/authors/profile/6034587",
    },
    {
      label: "Institut Teknologi Del",
      note: "Halaman staf",
      href: "https://www.del.ac.id/?page_id=7078",
    },
    {
      label: "LinkedIn",
      note: "Profil profesional",
      href: "https://www.linkedin.com/in/albert-sagala-47b963235",
    },
  ],
};

export const collaborationPaths = [
  {
    title: "Riset bersama di fasilitas",
    body: "Jaringan sensor, pemetaan mikroklimat, deteksi drift sensor, pipeline data edge, dan kontrol iklim atau pencahayaan berbasis AI di kontainer 10 kaki.",
    href: "#facility",
    linkLabel: "Lihat fasilitas",
  },
  {
    title: "Penerapan di lapangan",
    body: "Hidroponik vertikal IoT dengan energi surya dan irigasi presisi bersama petani atau sekolah, seperti kegiatan yang sudah tercatat.",
    href: "#field",
    linkLabel: "Lihat kegiatan lapangan",
  },
  {
    title: "Diskusi metode dan publikasi",
    body: "Pertanyaan tentang metode, data, atau replikasi studi yang sudah terbit.",
    href: "#publications",
    linkLabel: "Lihat publikasi",
  },
];
