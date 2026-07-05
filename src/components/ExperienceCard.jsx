const ExperienceCard = ({ experience, onSelect }) => {
  const isActive =
    experience.duration.toLowerCase().includes("present") ||
    experience.year.toLowerCase().includes("present");

  return (
    <div
      onClick={onSelect}
      className="group relative w-full cursor-pointer rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.05] hover:shadow-[0_20px_40px_-20px_rgba(34,211,238,0.2)]"
    >
      {/* Status Tag (Absolute Top Right) */}
      <div
        className={`absolute top-0 right-0 rounded-bl-lg rounded-tr-xl border-b border-l border-white/10 px-3 py-1 font-mono text-xs font-bold ${isActive ? "bg-green-400/10 text-green-400" : "bg-accent/10 text-accent"}`}
      >
        [{isActive ? "ACTIVE" : "STABLE"}]
      </div>

      {/* Terminal Permissions Header */}
      <div className="scrollbar-hide mb-3 overflow-x-auto whitespace-nowrap border-b border-white/5 pb-2 font-mono text-[10px] text-slate-500 sm:text-xs">
        <span className="mr-3">drwxr-xr-x</span>
        <span className="mr-3 text-accent/70">swaraj</span>
        <span className="mr-3 text-slate-400">{experience.terminalGroup}</span>
        <span className="mr-3">{experience.terminalDate}</span>
      </div>

      {/* Git Header */}
      <div className="mb-2 font-mono text-xs">
        <span className="text-accent-amber/90">commit {experience.commitHash}</span>
      </div>

      {/* Branch Info */}
      <div className="mb-3 flex items-center gap-2 font-mono text-xs">
        <span className="text-accent-violet">({experience.branch})</span>
        <span className="h-px flex-grow bg-white/10"></span>
      </div>

      <h3 className="font-display mb-1 text-lg font-bold text-white transition-colors group-hover:text-accent-soft md:text-xl">
        {experience.title}
      </h3>
      <p className="mb-1 text-sm text-slate-300">{experience.company}</p>
      <p className="mb-2 text-xs italic text-slate-500">{experience.country}</p>
      <p className="mt-2 border-t border-white/5 pt-2 font-mono text-xs text-slate-500">
        Author: <span className="text-accent-violet">Swaraj Shrestha</span>{" "}
        &lt;{experience.duration}&gt;
      </p>
    </div>
  );
};

export default ExperienceCard;
