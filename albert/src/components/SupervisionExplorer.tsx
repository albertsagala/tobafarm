"use client";

import { useId, useMemo, useState, type CSSProperties } from "react";
import { ExternalLink, Search } from "lucide-react";
import type { PublicProject, PublicStudent } from "@/lib/supervision";

type Filters = {
  institutions: string[];
  programs: string[];
  years: number[];
};

const ALL = "all";

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function studentMatches(student: PublicStudent, query: string) {
  return query !== "" && normalize(student.fullName).includes(query);
}

function projectMatches(project: PublicProject, query: string) {
  if (query === "") return true;
  return (
    normalize(project.title).includes(query) ||
    project.themes.some((theme) => normalize(theme).includes(query)) ||
    project.members.some((member) => studentMatches(member, query))
  );
}

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: (string | number)[];
  onChange: (value: string) => void;
}) {
  const id = useId();
  if (options.length === 0) return null;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-medium uppercase tracking-[0.18em] text-forest">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 rounded-xl border border-[var(--line)] bg-white px-3 text-sm text-ink focus-visible:border-teal"
      >
        <option value={ALL}>All</option>
        {options.map((option) => (
          <option key={option} value={String(option)}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function StudentCard({ student, highlighted }: { student: PublicStudent; highlighted: boolean }) {
  const years = [
    student.cohortYear ? `Cohort ${student.cohortYear}` : null,
    student.graduationYear ? `Graduated ${student.graduationYear}` : null,
  ].filter(Boolean);
  const position = student.lastVerifiedPosition;

  return (
    <li
      className={`flex gap-4 rounded-2xl border bg-cream-soft p-4 ${
        highlighted ? "border-teal ring-1 ring-teal" : "border-[var(--line)]"
      }`}
    >
      <span
        aria-hidden="true"
        className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest text-sm font-medium tracking-wide text-cream"
      >
        {student.initials}
      </span>
      <div className="min-w-0">
        <p className="font-medium leading-snug text-forest-deep">{student.fullName}</p>
        <p className="mt-0.5 text-sm text-muted">
          {[student.programLabel, student.institution].filter(Boolean).join(" · ")}
        </p>
        {years.length > 0 ? (
          <p className="mt-0.5 text-sm text-muted">{years.join(" · ")}</p>
        ) : null}
        {position ? (
          <p className="mt-2 text-sm text-ink">
            <span className="block text-[11px] uppercase tracking-[0.18em] text-forest">
              Last verified position
            </span>
            {position.position}
            {position.organization ? `, ${position.organization}` : ""}
            <span className="block text-xs text-muted">
              Checked {position.checkedOn} ·{" "}
              <a
                href={position.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-teal/50 underline-offset-2"
              >
                source
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </span>
          </p>
        ) : null}
        {student.linkedinUrl ? (
          <a
            href={student.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-sm text-forest underline decoration-teal/50 underline-offset-4 transition hover:decoration-teal"
          >
            LinkedIn
            <span className="sr-only">
              {" "}
              profile of {student.fullName} (opens in a new tab)
            </span>
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </li>
  );
}

function Meta({ label, value }: { label: string; value: string | null }) {
  if (!value) return null;
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-[0.18em] text-forest">{label}</dt>
      <dd className="mt-1 text-sm text-ink">{value}</dd>
    </div>
  );
}

function ProjectArticle({ project, query }: { project: PublicProject; query: string }) {
  const headingId = `${project.id}-title`;
  const eyebrow = [project.institution, project.workTypeLabel].filter(Boolean).join(" · ");

  return (
    <article
      id={project.id}
      aria-labelledby={headingId}
      className="scroll-mt-28 rounded-3xl border border-[var(--line)] bg-white p-6 md:p-8"
    >
      <p className="text-[11px] uppercase tracking-[0.22em] text-forest-mid">{eyebrow}</p>
      <h3 id={headingId} className="font-display mt-3 text-2xl leading-snug text-forest-deep md:text-3xl">
        {project.title}
      </h3>
      {project.themes.length > 0 ? (
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Research themes">
          {project.themes.map((theme) => (
            <li
              key={theme}
              className="rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-xs text-forest"
            >
              {theme}
            </li>
          ))}
        </ul>
      ) : null}
      {project.summary ? (
        <p className="mt-4 max-w-3xl leading-relaxed text-muted">{project.summary}</p>
      ) : null}

      <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Meta label="Albert's role" value={project.roleLabel} />
        <Meta
          label="Co-supervision"
          value={project.coSupervisors.length > 0 ? project.coSupervisors.join(", ") : null}
        />
        <Meta
          label="Supervised in"
          value={project.supervisionYears.length > 0 ? project.supervisionYears.join(", ") : null}
        />
        <Meta
          label="Completed"
          value={project.completionYear ? String(project.completionYear) : null}
        />
      </dl>

      <h4 className="mt-7 text-xs font-medium uppercase tracking-[0.18em] text-forest">
        {project.members.length > 1 ? `Group members (${project.members.length})` : "Student"}
      </h4>
      <ul className="mt-3 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {project.members.map((member) => (
          <StudentCard
            key={member.id}
            student={member}
            highlighted={studentMatches(member, query)}
          />
        ))}
      </ul>

      <details className="mt-6 rounded-2xl border border-[var(--line)] bg-cream-soft px-5 py-4">
        <summary className="cursor-pointer text-sm font-medium text-forest-deep marker:text-teal">
          Publications, sources, and verification
        </summary>
        {project.links.length > 0 ? (
          <ul className="mt-4 space-y-2">
            {project.links.map((link) => (
              <li key={link.url} className="text-sm">
                <span className="mr-2 text-[11px] uppercase tracking-[0.18em] text-forest-mid">
                  {link.kind}
                </span>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-deep underline decoration-teal/40 underline-offset-4 transition hover:decoration-teal"
                >
                  {link.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-5 border-t border-[var(--line)] pt-4 text-sm text-muted">
          <p className="text-[11px] uppercase tracking-[0.18em] text-forest">
            Supervision stated by
          </p>
          <ul className="mt-2 space-y-2">
            {project.supervisionSources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest underline decoration-teal/40 underline-offset-4"
                >
                  {source.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <span className="block text-xs">
                  {source.publishedOn ? `Published ${source.publishedOn} · ` : ""}
                  Checked {source.checkedOn}
                </span>
              </li>
            ))}
          </ul>
          {project.titleSource ? (
            <p className="mt-3 text-xs">
              Title as written in the{" "}
              <a
                href={project.titleSource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest underline decoration-teal/40 underline-offset-2"
              >
                {project.titleSource.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              .
            </p>
          ) : null}
        </div>
      </details>
    </article>
  );
}

export function SupervisionExplorer({
  projects,
  filters,
}: {
  projects: PublicProject[];
  filters: Filters;
}) {
  const searchId = useId();
  const [query, setQuery] = useState("");
  const [institution, setInstitution] = useState(ALL);
  const [program, setProgram] = useState(ALL);
  const [year, setYear] = useState(ALL);

  const normalizedQuery = normalize(query);
  const filterCount = [filters.institutions, filters.programs, filters.years].filter(
    (options) => options.length > 0,
  ).length;

  const visible = useMemo(
    () =>
      projects.filter(
        (project) =>
          (institution === ALL || project.institution === institution) &&
          (program === ALL || project.members.some((m) => m.studyProgram === program)) &&
          (year === ALL || String(project.completionYear) === year) &&
          projectMatches(project, normalizedQuery),
      ),
    [projects, institution, program, year, normalizedQuery],
  );

  const visibleStudents = new Set(visible.flatMap((p) => p.members.map((m) => m.id))).size;
  const filtered =
    normalizedQuery !== "" || institution !== ALL || program !== ALL || year !== ALL;

  const reset = () => {
    setQuery("");
    setInstitution(ALL);
    setProgram(ALL);
    setYear(ALL);
  };

  if (projects.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-[var(--line)] bg-white p-8 md:p-10">
        <h3 className="font-display text-2xl text-forest-deep">
          Verified records are being compiled
        </h3>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted">
          A student or project appears here only after a supervision list, an
          approval page, the Del repository, or an official institutional page
          names Albert Sagala as supervisor. No entries have reached that
          standard yet.
        </p>
      </div>
    );
  }

  return (
    <div>
      <form
        role="search"
        aria-label="Search supervised projects"
        onSubmit={(event) => event.preventDefault()}
        style={{ "--filters": filterCount } as CSSProperties}
        className="grid gap-4 rounded-3xl border border-[var(--line)] bg-white p-5 md:items-end md:p-6 md:[grid-template-columns:2fr_repeat(var(--filters),minmax(0,1fr))]"
      >
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor={searchId}
            className="text-xs font-medium uppercase tracking-[0.18em] text-forest"
          >
            Search
          </label>
          <div className="relative">
            <Search
              size={16}
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              id={searchId}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Name, title, or theme"
              autoComplete="off"
              className="h-11 w-full rounded-xl border border-[var(--line)] bg-white pl-9 pr-3 text-sm text-ink placeholder:text-muted focus-visible:border-teal"
            />
          </div>
        </div>
        <FilterSelect
          label="Institution"
          value={institution}
          options={filters.institutions}
          onChange={setInstitution}
        />
        <FilterSelect
          label="Study program"
          value={program}
          options={filters.programs}
          onChange={setProgram}
        />
        <FilterSelect
          label="Year completed"
          value={year}
          options={filters.years}
          onChange={setYear}
        />
      </form>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted" aria-live="polite">
          Showing {visible.length} of {projects.length}{" "}
          {projects.length === 1 ? "project" : "projects"} · {visibleStudents}{" "}
          {visibleStudents === 1 ? "student" : "students"}
        </p>
        {filtered ? (
          <button
            type="button"
            onClick={reset}
            className="rounded-full border border-forest/30 px-4 py-2 text-sm text-forest transition hover:border-teal hover:text-forest-deep"
          >
            Clear search and filters
          </button>
        ) : null}
      </div>

      {visible.length > 0 ? (
        <div className="mt-6 space-y-6">
          {visible.map((project) => (
            <ProjectArticle key={project.id} project={project} query={normalizedQuery} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-3xl border border-dashed border-[var(--line)] bg-white p-8">
          <h3 className="font-display text-2xl text-forest-deep">No matching entries</h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">
            Nothing matches the current search or filters. Try a student&apos;s
            surname, a word from a project title, or a theme such as LoRa.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-5 rounded-full bg-forest px-5 py-2.5 text-sm text-cream transition hover:bg-forest-mid"
          >
            Clear search and filters
          </button>
        </div>
      )}
    </div>
  );
}
