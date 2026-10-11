export function SpatialField() {
  const cells = [
    0.18, 0.32, 0.41, 0.55, 0.48, 0.36, 0.22, 0.28, 0.46, 0.62, 0.71, 0.58,
    0.44, 0.3, 0.24, 0.38, 0.57, 0.78, 0.66, 0.5, 0.34, 0.29, 0.43, 0.6, 0.69,
    0.52, 0.37, 0.26,
  ];

  return (
    <figure className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <svg
        viewBox="0 0 280 160"
        className="h-auto w-full"
        role="img"
        aria-label="Illustrative spatial microclimate field. Values are schematic, not measured data."
      >
        {cells.map((value, i) => {
          const col = i % 7;
          const row = Math.floor(i / 7);
          return (
            <rect
              key={i}
              x={col * 38 + 8}
              y={row * 36 + 8}
              width="32"
              height="28"
              rx="6"
              fill={`rgba(94, 184, 172, ${0.12 + value * 0.7})`}
            />
          );
        })}
      </svg>
      <figcaption className="mt-4 text-center text-xs tracking-wide text-cream/45">
        Illustrative spatial field — schematic only, not facility measurements
      </figcaption>
    </figure>
  );
}
