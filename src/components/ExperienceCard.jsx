// You need to update this file to remove the pointer and alignment margins
// as they are now handled by the parent timeline structure.

// Helper to generate slug from text
const ExperienceCard = ({ experience, onSelect }) => {
  const toSlug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  // Extract info for "ls -l" style string
  const companySlug = toSlug(experience.company.split(' ')[0]); // First word of company
  const titleSlug = toSlug(experience.title);
  // Attempt to get end date from year string (e.g. "Jan 2024 - Dec 2024" -> "Dec 2024")
  const dateStr = experience.year.split('-').pop().trim().substring(0, 8); // Shorten for aesthetics

  const isActive = experience.duration.toLowerCase().includes("present") || experience.year.toLowerCase().includes("present");

  return (
    <div
      onClick={onSelect}
      className="relative w-full p-6 bg-gray-900/40 backdrop-blur-md border border-slate-700 rounded-lg shadow-xl cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-cyan-500/50 group"
    >
      {/* Status Tag (Absolute Top Right) */}
      <div className={`absolute top-0 right-0 px-3 py-1 text-xs font-mono font-bold rounded-bl-lg border-b border-l border-slate-700 ${isActive ? 'text-green-400 bg-green-900/20' : 'text-blue-400 bg-blue-900/20'}`}>
        [{isActive ? 'ACTIVE' : 'STABLE'}]
      </div>

      {/* Terminal Permissions Header */}
      <div className="font-mono text-[10px] sm:text-xs text-gray-500 mb-3 border-b border-gray-800 pb-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <span className="mr-3">drwxr-xr-x</span>
        <span className="mr-3 text-cyan-600">swaraj</span>
        <span className="mr-3 text-gray-400">{experience.terminalGroup}</span>
        <span className="mr-3 text-gray-500">{experience.terminalDate}</span>
      </div>

      {/* Git Header */}
      <div className="flex justify-between items-start mb-2 font-mono text-xs">
        <span className="text-yellow-500">commit {experience.commitHash}</span>
        {/* Year removed from here as it's in permissions now, or keep it? User didn't say to remove. Keeping it for now but maybe redundant. 
            Actually, let's keep it as the 'commit date' metaphor. 
        */}
      </div>

      {/* Branch Info */}
      <div className="flex items-center gap-2 mb-3 font-mono text-xs">
        <span className="text-blue-400">({experience.branch})</span>
        <span className="h-px bg-gray-700 flex-grow"></span>
      </div>

      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors font-mono">
        {experience.title}
      </h3>
      <p className="text-md text-gray-300 mb-1">{experience.company}</p>
      <p className="text-sm text-gray-400 mb-2 italic">{experience.country}</p>
      <p className="text-xs text-gray-400 font-mono border-t border-gray-700 pt-2 mt-2">
        Author: <span className="text-blue-400">Swaraj Shrestha</span> &lt;{experience.duration}&gt;
      </p>
    </div>
  );
};

export default ExperienceCard;