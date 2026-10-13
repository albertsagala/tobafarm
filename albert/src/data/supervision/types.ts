/**
 * Data model for supervised final projects and the students who completed them.
 *
 * Projects and students are stored separately: a group project is one record in
 * `projects.ts`, and each member points to it through `projectIds` in
 * `students.ts`. Unknown values stay `null`; never fill a field by inference.
 *
 * Fields named `internalNotes` are for review only. They are stripped by
 * `src/lib/supervision.ts` and never reach the public page.
 */

export type Institution =
  | "Politeknik Informatika Del"
  | "Institut Teknologi Del";

export type DegreeLevel = "D3" | "D4" | "S1";

/** "tugas-akhir" = Tugas Akhir, "project" = Project (Proyek Akhir, group project, etc.). */
export type WorkType = "tugas-akhir" | "project";

/** Use the generic "pembimbing" when a source says "supervised" without naming the role. */
export type SupervisorRole =
  | "pembimbing-utama"
  | "pembimbing-pendamping"
  | "pembimbing";

/** ISO date, YYYY-MM-DD. */
export type IsoDate = string;

export type Source = {
  label: string;
  url: string;
  /** Date printed on the source itself, if any. */
  publishedOn: IsoDate | null;
  /** Date the source was opened and read for this record. */
  checkedOn: IsoDate;
};

/**
 * verified      a source explicitly states the supervision relationship
 * needs-review  sources conflict or are indirect; keep off the public list
 */
export type AcademicStatus = "verified" | "needs-review";

/**
 * verified      position read from an opened public profile or official page
 * link-only     identity matched, but the profile could not be opened; position stays null
 * needs-review  identity is ambiguous or sources conflict; nothing is shown
 * not-checked   no career check yet
 */
export type CareerStatus = "verified" | "link-only" | "needs-review" | "not-checked";

export type ProjectLink = {
  kind: "publication" | "repository" | "demo" | "news";
  label: string;
  url: string;
};

export type SupervisedProject = {
  /** Stable slug. Never change once published; it is used in URLs. */
  id: string;
  /** Title exactly as written in `academic.titleSource`. */
  title: string;
  workType: WorkType | null;
  institution: Institution;
  /** Years Albert supervised the work. Not the same as cohort or graduation year. */
  supervisionYears: number[];
  /** Year the Tugas Akhir/Project was completed, if a source states it. */
  completionYear: number | null;
  supervisorRole: SupervisorRole | null;
  /** Other supervisors named in the source. */
  coSupervisors: string[];
  themes: string[];
  /** One or two sentences, limited to what the sources describe. */
  summary: string | null;
  links: ProjectLink[];
  academic: {
    status: AcademicStatus;
    supervisionSources: Source[];
    titleSource: Source | null;
  };
  internalNotes: string | null;
};

export type SupervisedStudent = {
  /** Stable slug. Never change once published. */
  id: string;
  fullName: string;
  /** Name as printed in the supervision source, when it differs from `fullName`. */
  nameInSource: string | null;
  institution: Institution;
  studyProgram: string | null;
  degreeLevel: DegreeLevel | null;
  /** Angkatan / year of entry. */
  cohortYear: number | null;
  graduationYear: number | null;
  projectIds: string[];
  academic: {
    status: AcademicStatus;
    sources: Source[];
  };
  career: {
    status: CareerStatus;
    /** Last verified position. Fill only when `status` is "verified". */
    position: string | null;
    organization: string | null;
    /** Public profile URL. Fill only when the identity has been matched. */
    linkedinUrl: string | null;
    source: Source | null;
    checkedOn: IsoDate | null;
  };
  internalNotes: string | null;
};

/** People who may have been supervised but lack an explicit source. Never rendered. */
export type SupervisionCandidate = {
  name: string;
  reason: string;
  sources: Source[];
  nextStep: string;
};
