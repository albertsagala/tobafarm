import type { SupervisedProject } from "./types";

export const projects: SupervisedProject[] = [
  {
    id: "lora-ship-tracking",
    title: "Real-time Positioning and Tracking of Ship Based on LoRa Technology",
    workType: null,
    institution: "Institut Teknologi Del",
    supervisionYears: [],
    completionYear: null,
    supervisorRole: "pembimbing",
    coSupervisors: [],
    themes: ["LoRa communication", "Vessel tracking", "Internet of Things"],
    summary:
      "A GPS transmitter on a vessel sends its position over LoRa to a receiver at the port, where it is stored and shown on a web map. The system was tested around the IT Del campus and on the Ajibata–Tomok crossing of Lake Toba.",
    links: [
      {
        kind: "news",
        label: "IT Del news report",
        url: "https://www.del.ac.id/?p=10220",
      },
      {
        kind: "publication",
        label:
          "Low Power – Low Rate Vessel Tracking System (VTS) in Territorial Waters (ICoSNIKOM 2019)",
        url: "https://doi.org/10.1109/icosnikom48755.2019.9111615",
      },
    ],
    academic: {
      status: "verified",
      supervisionSources: [
        {
          label:
            "Institut Teknologi Del — Mahasiswa Teknik Elektro IT Del Kembangkan Sistem Monitoring Kapal Secara Real-time menggunakan Teknologi LoRa",
          url: "https://www.del.ac.id/?p=10220",
          publishedOn: "2019-07-19",
          checkedOn: "2026-10-13",
        },
      ],
      titleSource: {
        label: "Institut Teknologi Del news report",
        url: "https://www.del.ac.id/?p=10220",
        publishedOn: "2019-07-19",
        checkedOn: "2026-10-13",
      },
    },
    internalNotes:
      "Source says the three students worked 'di bawah bimbingan langsung' Albert Sagala, but does not say whether this was the Tugas Akhir; workType stays null. Title is the system name used in the news report; compare with the Tugas Akhir report title before replacing. Supervision and completion years are not stated.",
  },
  {
    id: "uav-sar-wsn-localization",
    title:
      "Unmanned Aerial Vehicle (UAV) Design for Disaster Victim Search and Rescue (SAR) Operation using Wireless Sensor Network (WSN) Localization",
    workType: null,
    institution: "Institut Teknologi Del",
    supervisionYears: [],
    completionYear: null,
    supervisorRole: "pembimbing",
    coSupervisors: ["Guntur Petrus Boy Knight"],
    themes: [
      "Unmanned aerial vehicles",
      "Wireless sensor network localization",
      "Search and rescue",
    ],
    summary:
      "A quadcopter carries passive infrared sensors over a disaster area; the victim's position is estimated by triangulation and shown on a monitoring website. The final test took place on the IT Del field.",
    links: [
      {
        kind: "news",
        label: "IT Del news report",
        url: "https://www.del.ac.id/?p=13979",
      },
      {
        kind: "publication",
        label:
          "Unmanned aerial vehicle design for disaster victim search and rescue operation using wireless sensor network localization (IJRA, 2022)",
        url: "https://doi.org/10.11591/ijra.v11i4.pp288-303",
      },
      {
        kind: "publication",
        label:
          "Quadcopter Unmanned Aerial Vehicle (UAV) Design for Search and Rescue (SAR) (ICoSNIKOM 2022)",
        url: "https://doi.org/10.1109/icosnikom56551.2022.10034866",
      },
    ],
    academic: {
      status: "verified",
      supervisionSources: [
        {
          label:
            "Institut Teknologi Del — Program Studi S1 Teknik Elektro Kembangkan Unmanned Aerial Vehicle (UAV) Design for Disaster Victim Search and Rescue (SAR) Operation Using Wireless Sensor Network (WSN) Localization",
          url: "https://www.del.ac.id/?p=13979",
          publishedOn: "2022-07-26",
          checkedOn: "2026-10-13",
        },
      ],
      titleSource: {
        label: "Institut Teknologi Del news report",
        url: "https://www.del.ac.id/?p=13979",
        publishedOn: "2022-07-26",
        checkedOn: "2026-10-13",
      },
    },
    internalNotes:
      "Source names two supervisors without saying which is primary; role kept as generic 'pembimbing'. Source does not say whether this was the Tugas Akhir; workType stays null. Supervision and completion years are not stated.",
  },
];
