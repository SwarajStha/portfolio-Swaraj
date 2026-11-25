import { useEffect, useState } from "react";
import { FaTerminal, FaExpand } from "react-icons/fa";

const LOG_COLORS = {
  INFO: "text-blue-400",
  DEBUG: "text-gray-400",
  SUCCESS: "text-green-400",
  WATCH: "text-yellow-400",
};

const STATUS_COLORS = {
  ACTIVE: "text-green-400",
  COMPLETE: "text-cyan-400",
};

/**
 * Terminal panel next to the device. Prints the project's log lines one by
 * one; remount it (key) to replay the sequence for another project.
 */
const ShowcaseTerminal = ({ project, showcase, onExpand }) => {
  const [logs, setLogs] = useState(() => showcase.logs.slice(0, 2));

  useEffect(() => {
    const timeouts = showcase.logs.slice(2).map((log, i) =>
      setTimeout(() => setLogs((prev) => [...prev.slice(-5), log]), 800 * (i + 1))
    );
    return () => timeouts.forEach(clearTimeout);
  }, [showcase.logs]);

  return (
    <div className="w-full overflow-hidden rounded-lg border border-gray-800 bg-[#0f111a]/90 font-mono text-sm shadow-2xl backdrop-blur-md">
      {/* Title bar */}
      <div className="flex items-center gap-3 border-b border-gray-800 bg-[#1a1b26] px-4 py-2">
        <div className="flex shrink-0 gap-2" aria-hidden="true">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <div className="flex min-w-0 flex-1 items-center justify-center gap-2 text-xs text-gray-400">
          <FaTerminal className="shrink-0" aria-hidden="true" />
          <span className="truncate">swaraj@portfolio:{showcase.path}</span>
        </div>
        <div className="w-10 shrink-0" />
      </div>

      <div className="space-y-4 p-5 text-gray-300 sm:p-6">
        <div>
          <span className="text-purple-400">Project:</span> {project.title}
        </div>
        <div>
          <span className="text-purple-400">Status:</span>
          <span className={`ml-2 font-bold ${STATUS_COLORS[showcase.status] || "text-gray-300"}`}>[{showcase.status}]</span>
          <span className="ml-2 text-gray-500">- {showcase.statusNote}</span>
        </div>
        <div>
          <span className="text-purple-400">Technologies:</span>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="rounded border border-gray-700 bg-gray-800 px-2 py-1 text-xs text-cyan-400">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 min-h-[9.5rem] border-t border-gray-700/50 pt-4" aria-live="off">
          {logs.map((log, i) => (
            <div key={`${i}-${log.msg}`} className="mb-1">
              <span className={`font-bold ${LOG_COLORS[log.type] || "text-gray-300"}`}>[{log.type}]</span>{" "}
              <span className="text-gray-400">{log.msg}</span>
            </div>
          ))}
          <div className="animate-pulse text-cyan-500">_</div>
        </div>

        <div className="mt-2 flex justify-end">
          <button
            type="button"
            onClick={onExpand}
            className="flex items-center gap-2 rounded border border-slate-600 bg-slate-700 px-4 py-2 text-cyan-400 shadow-lg shadow-black/20 transition-colors hover:bg-slate-600"
          >
            <FaExpand size={10} /> Expand
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseTerminal;
