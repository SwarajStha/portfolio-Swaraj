import { useLayoutEffect, useRef, useState } from "react";
import ExperienceCard from "../ExperienceCard";
import GraphSvg from "./GraphSvg";
import { MergeRow } from "./shared";

const LANE_GAP = 24;
const CARD_ANCHOR = 34;
const MERGE_ANCHOR = 22;
const MIN_DOT_GAP = 64; // vertical distance between consecutive dots
const SIDE_GAP = 28; // space between cards on the same side
const WIDE = 768;

/**
 * Option B, "center graph": the graph runs down the middle; main-line
 * commits sit on the right, feature-branch commits on the left. Cards on
 * opposite sides may overlap vertically (dense, like the current timeline)
 * but dots stay in strict time order. Phones fall back to one column.
 */
const OptionCenter = ({ graph, onSelect }) => {
  const ref = useRef(null);
  const rowRefs = useRef([]);
  const [width, setWidth] = useState(0);
  const [heights, setHeights] = useState([]);
  const [hovered, setHovered] = useState(-1);

  useLayoutEffect(() => {
    const measure = () => {
      setWidth(ref.current?.offsetWidth || 0);
      setHeights(rowRefs.current.map((el) => el?.offsetHeight || 0));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (ref.current) ro.observe(ref.current);
    rowRefs.current.forEach((el) => el && ro.observe(el));
    return () => ro.disconnect();
  }, [graph]);

  const wide = width >= WIDE;
  const graphW = 56 + (graph.laneCount - 1) * LANE_GAP;
  const colW = wide ? (width - graphW) / 2 : width - graphW;
  const leftColRight = colW;
  const rightColLeft = wide ? colW + graphW : graphW;
  // Main lane hugs the right column; feature lanes fan out to the left
  const mainX = wide ? rightColLeft - 28 : 14;
  const laneX = (lane) => (wide ? mainX - lane * LANE_GAP : mainX + lane * LANE_GAP);

  // Stack rows per side, keeping dots in order
  const cursor = { left: 0, right: 0 };
  let prevDot = -Infinity;
  const placed = graph.rows.map((row, i) => {
    const side = wide && row.type === "commit" && !row.onMain ? "left" : "right";
    const anchor = row.type === "merge" ? MERGE_ANCHOR : CARD_ANCHOR;
    const h = heights[i] || (row.type === "merge" ? 44 : 200);
    const top = Math.max(cursor[side], prevDot + MIN_DOT_GAP - anchor);
    prevDot = top + anchor;
    cursor[side] = top + h + SIDE_GAP;
    return { side, top, dot: top + anchor };
  });
  const height = Math.max(cursor.left, cursor.right);

  return (
    <div ref={ref} className="relative mx-auto max-w-[1240px]" style={{ height }}>
      {width > 0 && (
        <GraphSvg
          graph={graph}
          ys={placed.map((p) => p.dot)}
          laneX={laneX}
          width={width}
          height={height}
          activeRow={hovered}
          connectors={graph.rows
            .map((row, i) => ({ row: i, x: placed[i].side === "left" ? leftColRight : rightColLeft }))
            .filter(({ row }) => graph.rows[row].type === "commit")}
        />
      )}
      {graph.rows.map((row, i) => (
        <div
          key={`${row.type}-${row.hash}`}
          ref={(el) => (rowRefs.current[i] = el)}
          className="absolute"
          style={{
            top: placed[i].top,
            left: placed[i].side === "left" ? 0 : rightColLeft,
            width: colW,
          }}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(-1)}
        >
          {row.type === "merge" ? (
            <MergeRow row={row} />
          ) : (
            <ExperienceCard
              experience={row.exp}
              onSelect={() => onSelect(row.exp)}
              isHead={i === graph.headIndex}
              branchColor={row.color}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default OptionCenter;
