export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 36 36"
        className="h-8 w-8"
        aria-hidden="true"
        fill="none"
      >
        <rect width="36" height="36" rx="8" className="fill-forest-deep" />
        <path
          d="M10 24c4.5-1 7.3-5 8-10 .7 5 3.5 9 8 10-3.4 4.5-12.6 4.5-16 0Z"
          className="fill-teal"
        />
        <path
          d="M18 8v15"
          className="stroke-cream"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="18" cy="25" r="1.7" className="fill-cream" />
      </svg>
      <span className="leading-tight">
        <span className="block text-[11px] font-medium uppercase tracking-[0.22em] text-teal">
          Toba
        </span>
        <span className="block text-sm font-medium tracking-wide">
          Smart Farming
        </span>
      </span>
    </span>
  );
}
