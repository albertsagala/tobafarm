import { ExternalLink } from "lucide-react";
import type { Source } from "@/lib/content";

export function SourceLink({ source, className = "" }: { source: Source; className?: string }) {
  return (
    <a
      href={source.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-start gap-1 text-xs leading-snug text-teal-deep underline decoration-teal/40 underline-offset-2 [overflow-wrap:anywhere] transition hover:decoration-teal-deep ${className}`}
    >
      <ExternalLink className="mt-px h-3 w-3 shrink-0" aria-hidden />
      <span>
        {source.label}
        <span className="sr-only"> (tautan eksternal)</span>
      </span>
    </a>
  );
}
