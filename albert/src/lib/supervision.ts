import { projects } from "@/data/supervision/projects";
import { students } from "@/data/supervision/students";
import type {
  Institution,
  IsoDate,
  Source,
  SupervisedProject,
  SupervisedStudent,
  SupervisorRole,
  WorkType,
} from "@/data/supervision/types";

/*
 * Public view of the supervision data. Only these shapes are passed to pages
 * and client components, so `internalNotes`, review statuses, and unverified
 * career leads never reach the browser.
 */

export type PublicSource = {
  label: string;
  url: string;
  publishedOn: string | null;
  checkedOn: string;
};

export type PublicStudent = {
  id: string;
  fullName: string;
  initials: string;
  institution: Institution;
  studyProgram: string | null;
  programLabel: string | null;
  cohortYear: number | null;
  graduationYear: number | null;
  linkedinUrl: string | null;
  lastVerifiedPosition: {
    position: string;
    organization: string | null;
    checkedOn: string;
    source: PublicSource;
  } | null;
};

export type PublicProject = {
  id: string;
  title: string;
  workTypeLabel: string | null;
  institution: Institution;
  supervisionYears: number[];
  completionYear: number | null;
  roleLabel: string | null;
  coSupervisors: string[];
  themes: string[];
  summary: string | null;
  links: SupervisedProject["links"];
  supervisionSources: PublicSource[];
  titleSource: PublicSource | null;
  members: PublicStudent[];
};

export const supervisionCopy = {
  eyebrow: "Bimbingan",
  title: "Student Supervision & Alumni",
  intro:
    "Guiding students for about a year as they framed a problem, designed a solution, tested it, and completed a Tugas Akhir (final project) or Project at Politeknik Informatika Del and Institut Teknologi Del.",
  careerNote:
    "Career details belong to the graduates and reflect their own work and later experience. They are listed as a record of where alumni have gone, not as an outcome of supervision alone.",
} as const;

const workTypeLabels: Record<WorkType, string> = {
  "tugas-akhir": "Tugas Akhir",
  project: "Project",
};

const roleLabels: Record<SupervisorRole, string> = {
  "pembimbing-utama": "Primary supervisor",
  "pembimbing-pendamping": "Co-supervisor",
  pembimbing: "Supervisor",
};

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export function formatDate(value: IsoDate): string {
  return dateFormat.format(new Date(`${value}T00:00:00Z`));
}

function toPublicSource(source: Source): PublicSource {
  return {
    label: source.label,
    url: source.url,
    publishedOn: source.publishedOn ? formatDate(source.publishedOn) : null,
    checkedOn: formatDate(source.checkedOn),
  };
}

function initialsOf(name: string): string {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return `${first}${last}`.toUpperCase();
}

function toPublicStudent(student: SupervisedStudent): PublicStudent {
  const { career } = student;
  const showLink =
    (career.status === "verified" || career.status === "link-only") &&
    career.linkedinUrl !== null;
  const { position, source, checkedOn } = career;
  const lastVerifiedPosition =
    career.status === "verified" && position && source && checkedOn
      ? {
          position,
          organization: career.organization,
          checkedOn: formatDate(checkedOn),
          source: toPublicSource(source),
        }
      : null;

  return {
    id: student.id,
    fullName: student.fullName,
    initials: initialsOf(student.fullName),
    institution: student.institution,
    studyProgram: student.studyProgram,
    programLabel: student.studyProgram
      ? [student.degreeLevel, student.studyProgram].filter(Boolean).join(" ")
      : null,
    cohortYear: student.cohortYear,
    graduationYear: student.graduationYear,
    linkedinUrl: showLink ? career.linkedinUrl : null,
    lastVerifiedPosition,
  };
}

function checkIntegrity() {
  const problems: string[] = [];
  const projectIds = new Set<string>();
  for (const project of projects) {
    if (projectIds.has(project.id)) problems.push(`Duplicate project id "${project.id}"`);
    projectIds.add(project.id);
    if (
      project.academic.status === "verified" &&
      project.academic.supervisionSources.length === 0
    ) {
      problems.push(`Project "${project.id}" is verified but has no supervision source`);
    }
  }

  const studentIds = new Set<string>();
  for (const student of students) {
    if (studentIds.has(student.id)) problems.push(`Duplicate student id "${student.id}"`);
    studentIds.add(student.id);
    for (const id of student.projectIds) {
      if (!projectIds.has(id)) {
        problems.push(`Student "${student.id}" links to unknown project "${id}"`);
      }
    }
    if (student.academic.status === "verified" && student.academic.sources.length === 0) {
      problems.push(`Student "${student.id}" is verified but has no source`);
    }
    const { career } = student;
    if (
      career.status === "verified" &&
      (!career.position || !career.source || !career.checkedOn)
    ) {
      problems.push(
        `Student "${student.id}" career is verified but lacks position, source, or checkedOn`,
      );
    }
    if (career.status === "link-only" && !career.linkedinUrl) {
      problems.push(`Student "${student.id}" career is link-only but has no linkedinUrl`);
    }
  }

  if (problems.length > 0) {
    throw new Error(`Supervision data is inconsistent:\n- ${problems.join("\n- ")}`);
  }
}

checkIntegrity();

const verifiedStudents = students.filter((s) => s.academic.status === "verified");

export const publicProjects: PublicProject[] = projects
  .filter((project) => project.academic.status === "verified")
  .map((project) => ({
    id: project.id,
    title: project.title,
    workTypeLabel: project.workType ? workTypeLabels[project.workType] : null,
    institution: project.institution,
    supervisionYears: project.supervisionYears,
    completionYear: project.completionYear,
    roleLabel: project.supervisorRole ? roleLabels[project.supervisorRole] : null,
    coSupervisors: project.coSupervisors,
    themes: project.themes,
    summary: project.summary,
    links: project.links,
    supervisionSources: project.academic.supervisionSources.map(toPublicSource),
    titleSource: project.academic.titleSource
      ? toPublicSource(project.academic.titleSource)
      : null,
    members: verifiedStudents
      .filter((student) => student.projectIds.includes(project.id))
      .map(toPublicStudent),
  }))
  .filter((project) => project.members.length > 0)
  .sort((a, b) => (b.completionYear ?? 0) - (a.completionYear ?? 0));

const uniqueSorted = <T extends string | number>(values: T[]) =>
  [...new Set(values)].sort((a, b) =>
    typeof a === "number" && typeof b === "number" ? b - a : String(a).localeCompare(String(b)),
  );

export const supervisionFilters = {
  institutions: uniqueSorted(publicProjects.map((p) => p.institution)),
  programs: uniqueSorted(
    publicProjects.flatMap((p) =>
      p.members.flatMap((m) => (m.studyProgram ? [m.studyProgram] : [])),
    ),
  ),
  years: uniqueSorted(
    publicProjects.flatMap((p) => (p.completionYear ? [p.completionYear] : [])),
  ),
};

const publicStudentIds = new Set(
  publicProjects.flatMap((p) => p.members.map((m) => m.id)),
);

export const supervisionStats = {
  students: publicStudentIds.size,
  projects: publicProjects.length,
  groupProjects: publicProjects.filter((p) => p.members.length > 1).length,
  verifiedCareers: verifiedStudents.filter(
    (s) => publicStudentIds.has(s.id) && s.career.status === "verified",
  ).length,
};
