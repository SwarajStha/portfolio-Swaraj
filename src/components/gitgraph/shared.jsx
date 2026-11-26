import { useLayoutEffect, useState } from "react";
import { formatMonth } from "./buildGraph";

/**
 * Measures each `[data-row]` element inside the container and returns the
 * y of its dot (element top + its `data-anchor` offset), plus the container
 * size. Re-measures whenever the container resizes.
 */
export const useRowAnchors = (containerRef, deps = []) => {
  const [box, setBox] = useState({ ys: [], width: 0, height: 0 });

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () => {
      const top = el.getBoundingClientRect().top;
      const ys = [...el.querySelectorAll("[data-row]")]
        .sort((a, b) => a.dataset.row - b.dataset.row)
        .map((r) => r.getBoundingClientRect().top - top + Number(r.dataset.anchor || 0));
      setBox({ ys, width: el.offsetWidth, height: el.offsetHeight });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    el.querySelectorAll("[data-row]").forEach((r) => ro.observe(r));
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return box;
};

/** A slim "Merge branch …" line, like a merge commit in `git log`. */
export const MergeRow = ({ row }) => (
  <div className="flex min-h-[44px] items-center">
    <p className="rounded-md border border-slate-700/70 bg-gray-900/70 px-3 py-1.5 font-mono text-xs leading-relaxed text-gray-300 backdrop-blur-sm sm:text-sm">
      <span className="text-yellow-500">{row.hash}</span> Merge branch{" "}
      <span style={{ color: row.branchColor }}>&apos;{row.branch}&apos;</span> into {row.into}{" "}
      <span className="text-gray-400">· {formatMonth(row.date)}</span>
    </p>
  </div>
);
