// src/components/Photography.jsx
// MODIFICATION: Refactored to match Experience Section "Commit" Tile Aesthetic
import { FaExternalLinkAlt } from "react-icons/fa";

const photographyData = [
  {
    id: "scopio",
    title: "Scop.io",
    permissions: "drwxr-xr-x", // Directory permissions
    owner: "swaraj",
    group: "scop.io",
    date: "Jan 2 2026",
    commitHash: "3f2a1b",
    branch: "feature/scopio-portfolio",
    displayCmd: "display Scopio_Profile.png",
    image: "/images/Scopio.png",
    description: "A curated collection of my professional event and portrait photography found on Scop.io.",
    mountScript: "./link_scopio.sh",
    link: "https://artist.scop.io/swaraj-shrestha-34f22243",
    status: "ONLINE",
  },
  {
    id: "wix",
    title: "Photography Website",
    permissions: "drwxr-xr-x", // Directory permissions
    owner: "swaraj",
    group: "wix",
    date: "Jan 2 2026",
    commitHash: "8c7d6e",
    branch: "feature/wix-portfolio",
    displayCmd: "display Phorography_Web_Cover.jpg",
    image: "/images/WIX.png", // Ensure this path matches the user's files
    description: "My personal photography site featuring landscapes and creative projects hosted on Wix.",
    mountScript: "./link_photography.sh",
    link: "https://swarajshrestha.wixsite.com/swarajphotography",
    status: "ONLINE",
  },
];

const PhotoTerminal = ({ data }) => {
  return (
    <div className="w-full max-w-lg mx-auto transform transition-all hover:scale-[1.01] duration-300">

      {/* Container: Matches ExperienceCard style but slightly darker for text readability */}
      {/* bg-gray-900/70 gives a dark frosted look. border-slate-700 matches Experience. */}
      <div className="relative w-full p-6 bg-gray-900/70 backdrop-blur-md border border-slate-700 rounded-lg shadow-xl shadow-gray-900 flex flex-col h-full font-mono text-sm group overflow-hidden transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]">

        {/* Status Badge (Absolute Top Right) - Matches Experience [STABLE] tag */}
        <div className="absolute top-0 right-0 px-3 py-1 text-xs font-mono font-bold rounded-bl-lg border-b border-l border-slate-700 text-green-400 bg-green-900/20">
          [{data.status}]
        </div>

        {/* Terminal Permissions Header - Matches Experience */}
        <div className="font-mono text-[10px] sm:text-xs text-gray-500 mb-4 border-b border-gray-800 pb-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <span className="mr-3">{data.permissions}</span>
          <span className="mr-3 text-cyan-500">{data.owner}</span>
          <span className="mr-3 text-gray-400">{data.group}</span>
          <span className="mr-3 text-gray-500">{data.date}</span>
        </div>

        {/* Git Header: Commit Hash - Matches Experience */}
        <div className="flex justify-between items-start mb-2 font-mono text-xs">
          <span className="text-yellow-500">commit {data.commitHash}</span>
        </div>

        {/* Branch Info with Separator Line - Matches Experience */}
        <div className="flex items-center gap-2 mb-4 font-mono text-xs">
          <span className="text-blue-400">({data.branch})</span>
          <span className="h-px bg-gray-700 flex-grow"></span>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col space-y-4">

          {/* Title */}
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors font-mono">
            {data.title}
          </h3>

          {/* Display Command (Optional, keeps the Terminal vibe) */}
          <div className="flex items-center space-x-2 text-xs">
            <span className="text-green-400">$</span>
            <span className="text-yellow-300">{data.displayCmd}</span>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed text-sm">
            {data.description}
          </p>

          {/* Image Display */}
          <div className="relative rounded border border-gray-700 p-1 bg-black/40 shadow-inner group-hover:border-gray-500 transition-colors mt-2">
            <div className="aspect-[4/5] overflow-hidden rounded relative">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />
              {/* Scanline overlay effect optional */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Mount Button (Action) */}
          <div className="pt-4 flex justify-center">
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative inline-flex items-center space-x-2 px-6 py-2 bg-gray-900 border border-cyan-500/50 rounded hover:bg-cyan-900/20 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
            >
              <span className="text-gray-400 group-hover/btn:text-gray-200 transition-colors">&gt;</span>
              <span className="text-cyan-400 font-bold group-hover/btn:text-cyan-300 transition-colors">
                {data.mountScript}
              </span>
            </a>
          </div>
        </div>

        {/* Footer: Author Line - Matches Experience */}
        <div className="text-xs text-gray-400 font-mono border-t border-gray-700 pt-3 mt-4">
          Author: <span className="text-blue-400">Swaraj Shrestha</span> {'<External Volume>'}
        </div>
      </div>
    </div>
  );
};

const Photography = () => {
  return (
    <div id="photography" className="bg-white/40 pt-5 pb-0">
      <div
        className="w-full py-12 text-white"
        style={{
          backgroundImage:
            "radial-gradient(circle at top right, rgb(113, 72, 61), #11224080 60%, rgba(201, 201, 201, 0.6))",
        }}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold inline-block border-b-4 border-cyan-400 pb-2 mb-6">
              PHOTOGRAPHY
            </h1>

            {/* Main Command Line Subheader */}
            <div className="font-mono text-sm md:text-base text-left max-w-4xl mx-auto bg-black/30 p-2 rounded border border-gray-700 shadow-lg backdrop-blur-sm">
              <span className="text-green-400">swaraj@portfolio</span>
              <span className="text-gray-300">:</span>
              <span className="text-blue-400">~/photography</span>
              <span className="text-gray-300">$ </span>
              <span className="text-white">ls -l --external-links</span>
            </div>
          </div>

          {/* Dual Terminals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-6xl mx-auto">
            {photographyData.map((data) => (
              <PhotoTerminal key={data.id} data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photography;
