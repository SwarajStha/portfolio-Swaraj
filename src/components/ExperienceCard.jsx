// You need to update this file to remove the pointer and alignment margins
// as they are now handled by the parent timeline structure.

const ExperienceCard = ({ experience, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className="relative w-full p-6 bg-gray-600/60 border border-slate-600 rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
    >
      {/* The triangle pointer is no longer needed here */}
      <p className="absolute top-2 right-3 text-xs font-semibold text-cyan-400">{experience.year}</p>
      <h3 className="text-xl font-bold text-white mb-1">{experience.title}</h3>
      <p className="text-md text-gray-400 mb-3">{experience.company}</p>
      <p className="text-sm text-gray-400 mb-3">{experience.country}</p>
      <p className="text-sm text-gray-400 italic">{experience.duration}</p>
    </div>
  );
};

export default ExperienceCard;