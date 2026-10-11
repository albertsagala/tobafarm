export type Paper = {
  title: string;
  venue: string;
  year: number;
  href: string;
};

export type Activity = {
  title: string;
  year: string;
  role: "Leader" | "Member";
  scheme: string;
  href?: string;
};

export const publicationGroups: {
  id: string;
  label: string;
  items: Paper[];
}[] = [
  {
    id: "international-journals",
    label: "International journals",
    items: [
      {
        year: 2024,
        title:
          "Implementing interoperable multi-gateway LoRaWAN for efficient maritime tracking systems",
        venue: "EUREKA: Physics and Engineering",
        href: "https://doi.org/10.21303/2461-4262.2024.003138",
      },
      {
        year: 2023,
        title: "Experiment on multi-hop LoRa for tracking application",
        venue:
          "International Journal of Sensors, Wireless Communications and Control",
        href: "https://doi.org/10.2174/2210327913666230217150456",
      },
      {
        year: 2022,
        title:
          "Unmanned aerial vehicle design for disaster victim search and rescue operation using wireless sensor network localization",
        venue: "IAES International Journal of Robotics and Automation",
        href: "https://doi.org/10.11591/ijra.v11i4.pp288-303",
      },
      {
        year: 2017,
        title: "Improving SCADA security using IDS and MikroTIK",
        venue:
          "Journal of Telecommunication, Electronic and Computer Engineering",
        href: "https://jtec.utem.edu.my/jtec/article/view/1795",
      },
      {
        year: 2017,
        title: "Development of automatic attendances system using RFID technology",
        venue: "Advanced Science Letters",
        href: "https://doi.org/10.1166/asl.2017.7383",
      },
      {
        year: 2016,
        title:
          "Private cloud storage using OpenStack with simple network architecture",
        venue: "Indonesian Journal of Electrical Engineering and Computer Science",
        href: "https://doi.org/10.11591/ijeecs.v4.i1.pp155-164",
      },
      {
        year: 2015,
        title:
          "Secured communication among HMI and controller using RC-4 algorithm and Raspberry Pi",
        venue: "TELKOMNIKA Indonesian Journal of Electrical Engineering",
        href: "https://doi.org/10.11591/tijee.v15i3.1571",
      },
      {
        year: 2015,
        title: "SCADA network delineation plant assessments",
        venue: "Advanced Science Letters",
        href: "https://doi.org/10.1166/asl.2015.6597",
      },
      {
        year: 2015,
        title: "Testing and comparing result scanning using web vulnerability scanner",
        venue: "Advanced Science Letters",
        href: "https://doi.org/10.1166/asl.2015.6598",
      },
    ],
  },
  {
    id: "international-conferences",
    label: "International conferences",
    items: [
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
          "Classification of arrhythmias from ECG signals using artificial neural networks in middle adults",
        venue:
          "IEEE International Conference on Artificial Intelligence and Mechatronics Systems (AIMS)",
        href: "https://doi.org/10.1109/aims66189.2025.11229800",
      },
      {
        year: 2024,
        title:
          "Enhancing agricultural pesticide application through a custom-built hexacopter equipped with advanced control and navigation systems",
        venue:
          "International Conference on Technology Innovation and Its Applications (ICTIIA)",
        href: "https://doi.org/10.1109/ictiia61827.2024.10761269",
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
        year: 2023,
        title:
          "Evaluating positioning estimation using LSE, gradient descent, and particle swarm optimization with dynamic inertia weight in wireless sensor network",
        venue: "AIP Conference Proceedings",
        href: "https://doi.org/10.1063/5.0183305",
      },
      {
        year: 2023,
        title: "Website monitoring for disaster victim search and rescue",
        venue:
          "IEEE International Conference of Computer Science and Information Technology (ICoSNIKOM)",
        href: "https://doi.org/10.1109/icosnikom60230.2023.10364398",
      },
      {
        year: 2023,
        title:
          "Vehicle accident detection system with LPWAN technology for information transmission",
        venue: "IEEE Information Technology International Seminar (ITIS)",
        href: "https://doi.org/10.1109/itis59651.2023.10420333",
      },
      {
        year: 2023,
        title: "RSSI fingerprinting using machine learning for position estimation",
        venue:
          "IEEE International Conference of Computer Science and Information Technology (ICoSNIKOM)",
        href: "https://doi.org/10.1109/icosnikom60230.2023.10364450",
      },
      {
        year: 2023,
        title:
          "Enhancing comfort and handling in semi-active suspension systems with fuzzy controller",
        venue:
          "IEEE International Conference of Computer Science and Information Technology (ICoSNIKOM)",
        href: "https://doi.org/10.1109/icosnikom60230.2023.10364378",
      },
      {
        year: 2023,
        title:
          "Exploring vehicle tracking performance with LoRa technology: an analysis of speed and environmental factors",
        venue:
          "International Conference on Electronic and Electrical Engineering and Intelligent System (ICE3IS)",
        href: "https://doi.org/10.1109/ice3is59323.2023.10335253",
      },
      {
        year: 2022,
        title:
          "Design of WSNs sensor for river water quality monitoring system for Neolissochillus thienemanni sumateranus lifes",
        venue:
          "IEEE International Conference of Computer Science and Information Technology (ICoSNIKOM)",
        href: "https://doi.org/10.1109/icosnikom56551.2022.10034906",
      },
      {
        year: 2022,
        title:
          "Internet of Things-based food product drying oven using shallow geothermal heat",
        venue:
          "IEEE International Conference of Computer Science and Information Technology (ICoSNIKOM)",
        href: "https://doi.org/10.1109/icosnikom56551.2022.10034881",
      },
      {
        year: 2022,
        title:
          "Quadcopter unmanned aerial vehicle (UAV) design for search and rescue (SAR)",
        venue:
          "IEEE International Conference of Computer Science and Information Technology (ICoSNIKOM)",
        href: "https://doi.org/10.1109/icosnikom56551.2022.10034866",
      },
      {
        year: 2022,
        title: "Implementation LoRaWAN end node tracking",
        venue: "IOP Conference Series: Earth and Environmental Science",
        href: "https://doi.org/10.1088/1755-1315/1083/1/012061",
      },
      {
        year: 2019,
        title:
          "Implementation of wireless sensor network as fire detector using Arduino Nano",
        venue:
          "IEEE International Conference of Computer Science and Information Technology (ICoSNIKOM)",
        href: "https://doi.org/10.1109/icosnikom48755.2019.9111537",
      },
      {
        year: 2019,
        title:
          "Low power – low rate vessel tracking system (VTS) in territorial waters",
        venue:
          "IEEE International Conference of Computer Science and Information Technology (ICoSNIKOM)",
        href: "https://doi.org/10.1109/icosnikom48755.2019.9111615",
      },
      {
        year: 2016,
        title: "Web-based ranking signature using cluster retrival similarity",
        venue:
          "International Seminar on Application for Technology of Information and Communication (iSemantic)",
        href: "https://doi.org/10.1109/isemantic.2016.7873826",
      },
      {
        year: 2016,
        title: "Industrial control system security-malware botnet detection",
        venue:
          "International Conference on Computer, Control, Informatics and its Applications (IC3INA)",
        href: "https://doi.org/10.1109/ic3ina.2016.7863036",
      },
      {
        year: 2015,
        title: "Automatic SNORT IDS rule generation based on honeypot log",
        venue:
          "International Conference on Information Technology and Electrical Engineering (ICITEE)",
        href: "https://doi.org/10.1109/iciteed.2015.7409013",
      },
      {
        year: 2015,
        title: "Multi-thread performance on a single thread in-memory database",
        venue:
          "International Conference on Information Technology and Electrical Engineering (ICITEE)",
        href: "https://doi.org/10.1109/iciteed.2015.7409012",
      },
      {
        year: 2012,
        title: "Swarm tracking control for flocking of a multi-agent system",
        venue:
          "IEEE Conference on Control, Systems and Industrial Informatics",
        href: "https://doi.org/10.1109/ccsii.2012.6470477",
      },
    ],
  },
  {
    id: "national-journals",
    label: "National journals",
    items: [
      {
        year: 2026,
        title:
          "Performance evaluation of a self-hosted edge-IoT data pipeline for hydroponic pH and EC monitoring",
        venue: "Journal of Intelligent Computing Systems and Applications",
        href: "https://doi.org/10.54074/jicsa.v2i1.34",
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
          "Experimental comparison of deployed DQN and rule-based climate controllers in indoor farming: climate performance and electrical energy trade-offs",
        venue: "Journal of Intelligent Computing Systems and Applications",
        href: "https://doi.org/10.54074/jicsa.v2i1.33",
      },
      {
        year: 2025,
        title:
          "Application of KNN method for classification of arrhythmia types based on ECG data",
        venue:
          "Journal of Computer Networks, Architecture and High Performance Computing",
        href: "https://doi.org/10.47709/cnahpc.v7i3.6010",
      },
      {
        year: 2025,
        title:
          "Pengenalan teknologi Internet of Things (IoT) untuk sistem hidroponik di SMKN 1 Pagaran, Kabupaten Tapanuli Utara, Sumatera Utara",
        venue: "Jurnal Abdi Masyarakat Indonesia",
        href: "https://doi.org/10.54082/jamsi.1539",
      },
      {
        year: 2022,
        title:
          "Smart farming: drip irrigation controlled using LR-WPAN with hybrid power",
        venue: "Jurnal Sistem Informasi dan Ilmu Komputer Prima (JUSIKOM PRIMA)",
        href: "https://doi.org/10.34012/jurnalsisteminformasidanilmukomputer.v5i2.2462",
      },
      {
        year: 2022,
        title:
          "Implementation of wireless sensor network (WSN) for earthquake detection",
        venue: "ELKHA: Jurnal Teknik Elektro",
        href: "https://doi.org/10.26418/elkha.v14i2.56146",
      },
      {
        year: 2022,
        title:
          "Implementation of portable off-grid solar water pump for irrigation systems",
        venue: "Jurnal Mantik",
        href: "https://www.iocscience.org/ejournal/index.php/mantik/article/view/1811",
      },
    ],
  },
];

export const researchProjects: Activity[] = [
  {
    year: "2026",
    role: "Member",
    scheme: "Hibah internal (PDUPT lanjutan)",
    title:
      "Implementasi SLAM dan deteksi korban bencana berbasis YOLOv8 thermal pada sistem navigasi mandiri robot hexapod",
  },
  {
    year: "2025",
    role: "Leader",
    scheme: "Hibah internal (PPDK)",
    title:
      "Pengembangan sistem pertanian vertikal indoor menggunakan deep flow technique (DFT) dan kontrol iklim berbasis IoT dalam kontainer 10 ft untuk peningkatan hasil tanaman",
  },
  {
    year: "2025",
    role: "Member",
    scheme: "Hibah internal (PDUPT)",
    title:
      "Sistem penyortir kemiri berbasis deep learning dengan metode YOLOv8 untuk meningkatkan hasil produksi",
  },
  {
    year: "2024",
    role: "Leader",
    scheme: "Hibah internal (PDUPT)",
    title:
      "Sistem kontrol nutrisi dan iklim pada pertanian indoor dengan teknik hidroponik vertikal",
  },
  {
    year: "2024",
    role: "Member",
    scheme: "Hibah internal (PDUPT)",
    title: "Unmanned surface vehicle for water quality monitoring in Lake Toba",
  },
  {
    year: "2021–2023",
    role: "Leader",
    scheme: "Penelitian desentralisasi (PDUPT)",
    title:
      "Vessel tracking system (VTS) real-time monitoring based on GPS-LoRa communication",
    href: "https://www.del.ac.id/?p=13620",
  },
  {
    year: "2022",
    role: "Leader",
    scheme: "Hibah internal (PDUPT-I)",
    title:
      "Rancang bangun unmanned aerial vehicle (UAV) untuk operasi search and rescue (SAR) korban bencana menggunakan metode lokalisasi wireless sensor network (WSN)",
    href: "https://www.del.ac.id/?p=13979",
  },
  {
    year: "2021",
    role: "Leader",
    scheme: "Hibah internal",
    title:
      "A prototype of smart solar water pump in a rural area with wireless sensor network for monitoring",
  },
];

export const communityServices: Activity[] = [
  {
    year: "2026",
    role: "Member",
    scheme: "Hibah internal",
    title:
      "Penguatan kapasitas petani hortikultura Desa Banualuhu dengan penerapan hidroponik vertikal IoT–energi surya pada komoditas seledri",
  },
  {
    year: "2025",
    role: "Member",
    scheme: "Hibah internal (PKM)",
    title:
      "Penguatan peternakan berbasis teknologi: penerapan sistem air minum terjadwal pada kandang dan mesin pencacah rumput untuk efisiensi pakan ternak sapi Limousin Desa Siponjot, Kabupaten Humbang Hasundutan",
  },
  {
    year: "2025",
    role: "Leader",
    scheme: "IEEE Tech4Good",
    title:
      "Empowering local farmers with solar-integrated IoT vertical hydroponics for celery cultivation",
    href: "https://www.del.ac.id/?p=16822",
  },
  {
    year: "2024",
    role: "Leader",
    scheme: "Hibah internal (PKM)",
    title:
      "Pengenalan teknologi IoT di bidang pertanian untuk mendukung kegiatan laboratorium di SMKN 1 Pagaran",
  },
  {
    year: "2022",
    role: "Leader",
    scheme: "Pengabdian kepada masyarakat kompetitif nasional",
    title:
      "Smart precision farming untuk optimalisasi jumlah air dan nutrisi (fertigasi) pada tanaman stroberi di Desa Pintubosi, Kabupaten Toba",
  },
  {
    year: "2022",
    role: "Leader",
    scheme: "Hibah internal (PKM)",
    title:
      "Implementasi irigasi tetes pada tanaman stroberi dan pembuatan pupuk organik cair untuk mendukung wisata agro di Desa Onanrunggu, Samosir",
    href: "https://www.del.ac.id/?p=14185",
  },
];
