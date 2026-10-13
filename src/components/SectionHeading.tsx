type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p
        className={`text-xs font-medium uppercase tracking-[0.28em] ${
          light ? "text-teal-bright" : "text-teal-deep"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-display mt-3 text-3xl leading-tight tracking-tight md:text-5xl ${
          light ? "text-cream" : "text-forest-deep"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base leading-relaxed md:text-lg ${
            light ? "text-cream/90" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
