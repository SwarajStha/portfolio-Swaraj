const ProjectItem = ({ title, img, tech, category, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className="group relative w-full bg-[#0f111a]/90 backdrop-blur-md rounded-lg shadow-xl shadow-gray-900 border border-gray-800 overflow-hidden cursor-pointer transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] flex flex-col"
    >
      {/* Terminal Header */}
      <div className="bg-[#1a1b26] px-4 py-2 flex items-center justify-between border-b border-gray-800 group-hover:bg-[#1f2937] transition-colors">
        <div className="flex gap-2 items-center text-xs font-mono">
          <span className="text-purple-400">drwxr-xr-x</span>
          <span className="text-gray-500">swaraj</span>
          <span className="text-blue-400">4096</span>
          <span className="text-gray-500">{category || 'misc'}</span>
        </div>
        <div className="flex gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
        </div>
      </div>

      {/* Main Content (Image & Overlay) */}
      <div className="relative h-48 md:h-56 w-full overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f111a] via-[#0f111a]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

        {/* Center Prompt on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-black/70 backdrop-blur-sm text-cyan-400 font-mono px-4 py-2 rounded border border-cyan-500/30 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
            code {title.replace(/\s+/g, '-').toLowerCase()} .
          </span>
        </div>
      </div>

      {/* Info Footer */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg md:text-xl font-bold text-gray-200 group-hover:text-cyan-400 transition-colors font-mono mb-2 truncate">
            {title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {tech?.slice(0, 3).map((t, i) => (
              <span key={i} className="text-xs text-gray-500 border border-gray-700 px-2 py-0.5 rounded group-hover:border-gray-600">
                {t}
              </span>
            ))}
            {tech?.length > 3 && <span className="text-xs text-gray-600">+{tech.length - 3}</span>}
          </div>
        </div>

        <div className="pt-3 border-t border-gray-800 flex justify-between items-center text-xs font-mono">
          <span className="text-gray-500">Last commit: <span className="text-gray-300">2 days ago</span></span>
          <span className="text-green-500 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            Passing
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
