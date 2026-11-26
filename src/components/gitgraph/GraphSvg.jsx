// Draws a commit graph (lanes, fork/merge curves, commit dots) as SVG.
// Row positions come from the layout that uses it, so the same drawing
// works for any card arrangement.

const BG = "#111827"; // ring around dots, matches the dark cards

const edgePath = (e, x1, y1, x2, y2) => {
  if (x1 === x2) return `M ${x1} ${y1} L ${x2} ${y2}`;
  const r = Math.min(40, (y2 - y1) * 0.6);
  if (e.kind === "merge") {
    // leave the merge commit and swing out to the branch lane right away
    return `M ${x1} ${y1} C ${x1} ${y1 + r * 0.55}, ${x2} ${y1 + r * 0.45}, ${x2} ${y1 + r} L ${x2} ${y2}`;
  }
  // fork: run down the branch lane, swing into the parent at the last moment
  return `M ${x1} ${y1} L ${x1} ${y2 - r} C ${x1} ${y2 - r * 0.45}, ${x2} ${y2 - r * 0.55}, ${x2} ${y2}`;
};

/**
 * @param graph      result of buildGraph
 * @param ys         y of each row's dot (same order as graph.rows)
 * @param laneX      lane -> x
 * @param connectors optional [{ row, x }]: a short line from the dot to x (the card edge)
 */
const GraphSvg = ({ graph, ys, laneX, width, height, connectors = [], activeRow = -1 }) => {
  if (!ys.length) return null;
  const { rows, edges, headIndex } = graph;

  return (
    <svg className="pointer-events-none absolute left-0 top-0 overflow-visible" width={width} height={height} aria-hidden="true">
      <defs>
        <filter id="git-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Lines first, so dots sit on top */}
      {edges.map((e) => (
        <path
          key={`${e.from}-${e.to}-${e.branch}`}
          d={edgePath(e, laneX(e.fromLane), ys[e.from], laneX(e.toLane), ys[e.to])}
          fill="none"
          stroke={e.color}
          strokeWidth={2.5}
          strokeLinecap="round"
          opacity={0.85}
        />
      ))}

      {connectors.map(({ row, x }) => {
        const cx = laneX(rows[row].lane);
        return (
          <line
            key={`c-${row}`}
            x1={cx}
            y1={ys[row]}
            x2={x}
            y2={ys[row]}
            stroke={rows[row].color}
            strokeWidth={1.5}
            strokeDasharray="3 4"
            opacity={activeRow === row ? 0.9 : 0.45}
          />
        );
      })}

      {rows.map((row, i) => {
        const cx = laneX(row.lane);
        const cy = ys[i];
        const isHead = i === headIndex;
        const active = i === activeRow;
        if (row.type === "merge") {
          return <circle key={i} cx={cx} cy={cy} r={5} fill={BG} stroke={row.color} strokeWidth={2.5} />;
        }
        return (
          <g key={i} filter={isHead || active ? "url(#git-glow)" : undefined}>
            {isHead && <circle cx={cx} cy={cy} r={11} fill="none" stroke={row.color} strokeWidth={1.5} opacity={0.6} />}
            <circle cx={cx} cy={cy} r={active ? 8 : 7} fill={row.color} stroke={BG} strokeWidth={3} />
          </g>
        );
      })}
    </svg>
  );
};

export default GraphSvg;
