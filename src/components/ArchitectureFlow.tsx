export function ArchitectureFlow() {
  const nodes = [
    { x: 70, y: 90, label: "Sensors" },
    { x: 230, y: 90, label: "Edge" },
    { x: 390, y: 90, label: "Cloud" },
    { x: 550, y: 90, label: "Analytics" },
    { x: 710, y: 90, label: "Actuators" },
  ];

  return (
    <div className="overflow-x-auto">
      <svg
        viewBox="0 0 780 180"
        className="mx-auto h-auto w-full min-w-[640px] max-w-5xl"
        role="img"
        aria-label="Reference architecture flow from sensors through edge computing, cloud, and analytics to actuators"
      >
        <defs>
          <linearGradient id="flow" x1="0" x2="1">
            <stop offset="0%" stopColor="#3d9b8f" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#3d9b8f" stopOpacity="0.55" />
          </linearGradient>
        </defs>
        <path
          d="M110 90 H670"
          stroke="url(#flow)"
          strokeWidth="2"
          fill="none"
        />
        {nodes.slice(0, -1).map((node, i) => (
          <polygon
            key={node.label}
            points={`${nodes[i + 1].x - 78},84 ${nodes[i + 1].x - 70},90 ${nodes[i + 1].x - 78},96`}
            fill="#3d9b8f"
          />
        ))}
        {nodes.map((node) => (
          <g key={node.label}>
            <circle cx={node.x} cy={node.y} r="28" fill="#0c241c" />
            <circle
              cx={node.x}
              cy={node.y}
              r="28"
              fill="none"
              stroke="#3d9b8f"
              strokeWidth="1.25"
            />
            <circle cx={node.x} cy={node.y} r="4" fill="#5eb8ac" />
            <text
              x={node.x}
              y={node.y + 52}
              textAnchor="middle"
              fill="#143528"
              fontSize="13"
              fontFamily="var(--font-body), system-ui, sans-serif"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
