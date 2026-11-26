import { formatMonth } from "./buildGraph";

/** A slim "Merge branch …" line, like a merge commit in `git log`. */
const MergeRow = ({ row }) => (
  <div className="flex min-h-[44px] items-center">
    <p className="rounded-md border border-slate-700/70 bg-gray-900/70 px-3 py-1.5 font-mono text-xs leading-relaxed text-gray-300 backdrop-blur-sm sm:text-sm">
      <span className="text-yellow-500">{row.hash}</span> Merge branch{" "}
      <span style={{ color: row.branchColor }}>&apos;{row.branch}&apos;</span> into {row.into}{" "}
      <span className="text-gray-400">· {formatMonth(row.date)}</span>
    </p>
  </div>
);

export default MergeRow;
