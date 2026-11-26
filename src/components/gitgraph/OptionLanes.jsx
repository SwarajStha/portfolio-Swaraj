import { useRef, useState } from "react";
import ExperienceCard from "../ExperienceCard";
import GraphSvg from "./GraphSvg";
import { MergeRow, useRowAnchors } from "./shared";

const LANE_GAP = 22;
const LANE_START = 14;
const CARD_ANCHOR = 34; // dot aligns with the card's "commit …" line

/**
 * Option A, "VS Code Git Graph": graph gutter on the left, one column of
 * commits on the right, merge commits as slim rows. Same layout on phones.
 */
const OptionLanes = ({ graph, onSelect }) => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(-1);
  const { ys, width, height } = useRowAnchors(ref, [graph]);
  const gutter = LANE_START * 2 + (graph.laneCount - 1) * LANE_GAP + 16;
  const laneX = (lane) => LANE_START + lane * LANE_GAP;

  return (
    <div ref={ref} className="relative mx-auto max-w-[900px]">
      <GraphSvg
        graph={graph}
        ys={ys}
        laneX={laneX}
        width={width}
        height={height}
        activeRow={hovered}
        connectors={graph.rows.map((r, i) => ({ row: i, x: gutter })).filter(({ row }) => graph.rows[row].type === "commit")}
      />
      {graph.rows.map((row, i) => (
        <div
          key={`${row.type}-${row.hash}`}
          data-row={i}
          data-anchor={row.type === "merge" ? 22 : CARD_ANCHOR}
          style={{ paddingLeft: gutter }}
          className={row.type === "merge" ? "py-1" : "py-3"}
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

export default OptionLanes;
