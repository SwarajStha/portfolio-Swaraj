import { useMemo, useState } from "react";
import { formatMonth } from "./buildGraph";

// Lane an edge occupies at a given row: merges swing out right after the
// merge commit, forks swing in right before the parent (like git draws them)
const laneAt = (e, r) => {
  if (r === e.from) return e.fromLane;
  if (r === e.to) return e.toLane;
  return e.kind === "merge" ? e.toLane : e.fromLane;
};

const blank = (n) => Array.from({ length: n }, () => ({ ch: " " }));

/** Builds the ASCII graph: one node line per row plus transition lines. */
const asciiGraph = (graph) => {
  const width = graph.laneCount * 2;
  const lines = []; // { row?, cells, rails }

  graph.rows.forEach((row, r) => {
    // Node line
    const cells = blank(width);
    graph.edges.forEach((e) => {
      if (e.from < r && r < e.to) cells[laneAt(e, r) * 2] = { ch: "|", color: e.color };
    });
    cells[row.lane * 2] = { ch: "*", color: row.color, bold: true };

    // Edges that continue below this row (used to keep wrapped text lines connected)
    const below = graph.edges.filter((e) => e.from <= r && r + 1 <= e.to);
    const rails = below.map((e) => ({ lane: laneAt(e, r), color: e.color }));
    lines.push({ row: r, cells, rails });

    // Transition lines into the next row, only where something changes lane
    if (r === graph.rows.length - 1) return;
    const moves = below.map((e) => ({ a: laneAt(e, r), b: laneAt(e, r + 1), color: e.color }));
    const steps = Math.max(0, ...moves.map((m) => Math.abs(m.b - m.a)));
    for (let k = 0; k < steps; k += 1) {
      const t = blank(width);
      moves.forEach(({ a, b, color }) => {
        const dir = Math.sign(b - a);
        const c = a + dir * Math.min(k, Math.abs(b - a));
        const n = c === b ? c : c + dir;
        if (n === c) t[c * 2] = { ch: "|", color };
        else if (n > c) t[c * 2 + 1] = { ch: "\\", color };
        else t[c * 2 - 1] = { ch: "/", color };
      });
      lines.push({ cells: t });
    }
  });
  return lines;
};

const Cells = ({ cells }) => (
  <span className="whitespace-pre">
    {cells.map((c, i) => (
      <span key={i} style={c.color ? { color: c.color } : undefined} className={c.bold ? "font-bold" : undefined}>
        {c.ch}
      </span>
    ))}
  </span>
);

/**
 * Option C, "terminal": real `git log --graph --oneline` output in a
 * terminal window. Each commit line opens the role's details.
 */
const OptionTerminal = ({ graph, onSelect }) => {
  const lines = useMemo(() => asciiGraph(graph), [graph]);
  const [hovered, setHovered] = useState(-1);
  const prefixWidth = `${graph.laneCount * 2 + 1}ch`;

  return (
    <div className="mx-auto max-w-[1000px] overflow-hidden rounded-lg border border-gray-800 bg-[#0f111a]/90 font-mono text-[13px] shadow-2xl backdrop-blur-md sm:text-sm">
      <div className="flex items-center gap-2 border-b border-gray-800 bg-[#1a1b26] px-4 py-2">
        <div className="flex shrink-0 gap-2" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="flex-1 truncate text-center text-xs text-gray-400">swaraj@portfolio: ~/career</span>
      </div>

      <div className="p-4 sm:p-6">
        <div className="mb-3 text-gray-300">
          <span className="text-green-400">swaraj@portfolio:~/career$</span> git log --graph --oneline --all
        </div>

        {lines.map((line, li) => {
          if (line.row === undefined) {
            return (
              <div key={li} className="leading-6">
                <Cells cells={line.cells} />
              </div>
            );
          }
          const row = graph.rows[line.row];
          const isHead = line.row === graph.headIndex;
          const clickable = row.type === "commit";
          const content = (
            <>
              <span className="relative shrink-0" style={{ width: prefixWidth }}>
                <Cells cells={line.cells} />
                {/* lane rails continue alongside wrapped text */}
                {line.rails.map((rail, ri) => (
                  <span
                    key={ri}
                    className="absolute bottom-0 top-6 w-px"
                    style={{ left: `calc(${rail.lane * 2}ch + 0.5ch)`, background: rail.color, opacity: 0.8 }}
                  />
                ))}
              </span>
              <span className="min-w-0 flex-1">
                <span className="text-yellow-500">{row.hash}</span>{" "}
                {row.type === "merge" ? (
                  <span className="text-gray-400">
                    Merge branch <span style={{ color: row.branchColor }}>&apos;{row.branch}&apos;</span> into {row.into}
                  </span>
                ) : (
                  <>
                    <span style={{ color: row.color }}>
                      ({isHead && <span className="font-bold text-cyan-300">HEAD -&gt; </span>}
                      {row.branch})
                    </span>{" "}
                    <span className={`font-semibold ${hovered === line.row ? "text-cyan-300" : "text-gray-100"}`}>{row.exp.title}</span>
                    <span className="text-gray-400"> @ {row.exp.company}</span>
                  </>
                )}
                <span className="text-gray-500">
                  {" "}
                  · {row.type === "merge" ? formatMonth(row.date) : row.exp.year}
                </span>
              </span>
            </>
          );

          return clickable ? (
            <button
              key={li}
              type="button"
              onClick={() => onSelect(row.exp)}
              onMouseEnter={() => setHovered(line.row)}
              onMouseLeave={() => setHovered(-1)}
              className="flex w-full items-stretch rounded text-left leading-6 transition-colors hover:bg-white/5"
            >
              {content}
            </button>
          ) : (
            <div key={li} className="flex items-stretch leading-6">
              {content}
            </div>
          );
        })}

        <div className="mt-3 flex items-center gap-2 text-gray-300">
          <span className="text-green-400">swaraj@portfolio:~/career$</span>
          <span className="block h-4 w-2 animate-pulse bg-gray-400" />
        </div>
        <div className="mt-2 text-xs text-gray-500">Click a commit to open it (git show).</div>
      </div>
    </div>
  );
};

export default OptionTerminal;
