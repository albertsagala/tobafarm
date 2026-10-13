import { statusInfo, type Status } from "@/lib/content";

const styles: Record<Status, string> = {
  operational: "border-teal-deep bg-teal-deep text-cream",
  experimental: "border-amber/40 bg-amber/10 text-amber",
  development: "border-dashed border-forest/50 bg-transparent text-forest",
};

export function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-wide ${styles[status]}`}
    >
      {statusInfo[status].label}
    </span>
  );
}
