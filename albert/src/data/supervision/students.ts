import type { Source, SupervisedStudent } from "./types";

const shipNews: Source = {
  label: "Institut Teknologi Del news report (ship tracking, LoRa)",
  url: "https://www.del.ac.id/?p=10220",
  publishedOn: "2019-07-19",
  checkedOn: "2026-10-13",
};

const shipPaper: Source = {
  label: "ICoSNIKOM 2019 author list (Crossref)",
  url: "https://doi.org/10.1109/icosnikom48755.2019.9111615",
  publishedOn: null,
  checkedOn: "2026-10-13",
};

const uavNews: Source = {
  label: "Institut Teknologi Del news report (UAV for SAR)",
  url: "https://www.del.ac.id/?p=13979",
  publishedOn: "2022-07-26",
  checkedOn: "2026-10-13",
};

const uavJournal: Source = {
  label: "IJRA 2022 author list (Crossref)",
  url: "https://doi.org/10.11591/ijra.v11i4.pp288-303",
  publishedOn: "2022-12-01",
  checkedOn: "2026-10-13",
};

const uavConference: Source = {
  label: "ICoSNIKOM 2022 author list (Crossref)",
  url: "https://doi.org/10.1109/icosnikom56551.2022.10034866",
  publishedOn: null,
  checkedOn: "2026-10-13",
};

const linkOnlyNote =
  "LinkedIn profile could not be opened (access limited without login). Identity matched from the public search-index summary of the profile: same name, Institut Teknologi Del, electrical engineering, study period consistent with the project. Position left empty until the profile is opened and read.";

export const students: SupervisedStudent[] = [
  {
    id: "dirgantara-siahaan",
    fullName: "Dirgantara Siahaan",
    nameInSource: null,
    institution: "Institut Teknologi Del",
    studyProgram: "Teknik Elektro",
    degreeLevel: null,
    cohortYear: null,
    graduationYear: null,
    projectIds: ["lora-ship-tracking"],
    academic: { status: "verified", sources: [shipNews, shipPaper] },
    career: {
      status: "link-only",
      position: null,
      organization: null,
      linkedinUrl: "https://www.linkedin.com/in/dirgantarasiahaan",
      source: null,
      checkedOn: "2026-10-13",
    },
    internalNotes: `${linkOnlyNote} Search summary listed Bachelor, Electrical Engineering, IT Del 2015–2019 (self-reported; not used for cohort/graduation fields). Lead to confirm: Bank Mandiri (search summary only).`,
  },
  {
    id: "ebenezer-sitorus",
    fullName: "Ebenezer Sitorus",
    nameInSource: null,
    institution: "Institut Teknologi Del",
    studyProgram: "Teknik Elektro",
    degreeLevel: null,
    cohortYear: null,
    graduationYear: null,
    projectIds: ["lora-ship-tracking"],
    academic: { status: "verified", sources: [shipNews, shipPaper] },
    career: {
      status: "needs-review",
      position: null,
      organization: null,
      linkedinUrl: null,
      source: null,
      checkedOn: "2026-10-13",
    },
    internalNotes:
      "Possible profile: https://www.linkedin.com/in/ebenezer-jerry-sitorus-b95a67133 (name 'Ebenezer Jerry Sitorus', Teknik Elektro IT Del 2015–2019 per search summary). Middle name does not appear in the IT Del or ICoSNIKOM sources, and other 'Ebenezer Sitorus' profiles exist. Confirm identity before adding linkedinUrl.",
  },
  {
    id: "tahan-nadeak",
    fullName: "Tahan Nadeak",
    nameInSource: null,
    institution: "Institut Teknologi Del",
    studyProgram: "Teknik Elektro",
    degreeLevel: null,
    cohortYear: null,
    graduationYear: null,
    projectIds: ["lora-ship-tracking"],
    academic: { status: "verified", sources: [shipNews, shipPaper] },
    career: {
      status: "link-only",
      position: null,
      organization: null,
      linkedinUrl: "https://www.linkedin.com/in/tahan-nadeak-497984186",
      source: null,
      checkedOn: "2026-10-13",
    },
    internalNotes: `${linkOnlyNote} Search summary listed Electrical, Electronics and Communications Engineering, IT Del 2015–2019. Lead to confirm: a public LinkedIn post dated 2023-07-14 mentions a Supervisor Utility role at First Resources Ltd.; possibly outdated.`,
  },
  {
    id: "joy-andrew-immanuel-damanik",
    fullName: "Joy Andrew Immanuel Damanik",
    nameInSource: "Joy Damanik",
    institution: "Institut Teknologi Del",
    studyProgram: "Teknik Elektro",
    degreeLevel: "S1",
    cohortYear: null,
    graduationYear: null,
    projectIds: ["uav-sar-wsn-localization"],
    academic: {
      status: "verified",
      sources: [uavNews, uavJournal, uavConference],
    },
    career: {
      status: "link-only",
      position: null,
      organization: null,
      linkedinUrl: "https://www.linkedin.com/in/joydamanik",
      source: null,
      checkedOn: "2026-10-13",
    },
    internalNotes: `Full name from both 2022 publications of the same project. ${linkOnlyNote}`,
  },
  {
    id: "imanuel-maurice-darmawan-sitanggang",
    fullName: "Imanuel Maurice Darmawan Sitanggang",
    nameInSource: "Imanuel Sitanggang",
    institution: "Institut Teknologi Del",
    studyProgram: "Teknik Elektro",
    degreeLevel: "S1",
    cohortYear: null,
    graduationYear: null,
    projectIds: ["uav-sar-wsn-localization"],
    academic: {
      status: "verified",
      sources: [uavNews, uavJournal, uavConference],
    },
    career: {
      status: "link-only",
      position: null,
      organization: null,
      linkedinUrl:
        "https://www.linkedin.com/in/imanuel-maurice-darmawan-sitanggang-352950206",
      source: null,
      checkedOn: "2026-10-13",
    },
    internalNotes: `Spelling conflict: IJRA 2022 and the LinkedIn profile name use 'Darmawan'; ICoSNIKOM 2022 uses 'Dermawan'. 'Darmawan' kept; confirm with the student. ${linkOnlyNote} Lead to confirm: search summary mentions PT Galva Technologies (2023) and PT Tirta Fresindo Jaya.`,
  },
  {
    id: "fajar-sam-hutabarat",
    fullName: "Fajar Sam Hutabarat",
    nameInSource: "Fajar Hutabarat",
    institution: "Institut Teknologi Del",
    studyProgram: "Teknik Elektro",
    degreeLevel: "S1",
    cohortYear: null,
    graduationYear: null,
    projectIds: ["uav-sar-wsn-localization"],
    academic: {
      status: "verified",
      sources: [uavNews, uavJournal, uavConference],
    },
    career: {
      status: "needs-review",
      position: null,
      organization: null,
      linkedinUrl: null,
      source: null,
      checkedOn: "2026-10-13",
    },
    internalNotes:
      "Two LinkedIn profiles named 'Fajar Hutabarat' both list Electrical and Electronics Engineering, IT Del 2018–2022: https://www.linkedin.com/in/fajar-hutabarat-0726441b8 and https://id.linkedin.com/in/fajar-hutabarat-0417b320b (the latter mentions Teaching Assistant at IT Del since 2023). Confirm which belongs to him before adding linkedinUrl.",
  },
];
