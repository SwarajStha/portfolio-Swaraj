import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";

Modal.setAppElement('#root');

const EducationModal = ({ isOpen, onRequestClose, data }) => {
  if (!data) return null;

  // Syntax Highlighting Helper
  const highlightDetails = (text) => {
    // Keywords to highlight - same as ExperienceModal
    const keywords = [
      "SQL", "VBA", "Java", "Data", "Database", "Program", "Algorithm", "Queries",
      "Reports", "Debugged", "Analysis", "Visualization", "Python", "React", "JavaScript",
      "HTML", "CSS", "WIX", "Research", "Analyzed", "Organized", "Evaluated",
      "Engineering", "Mathematics", "Development", "System", "Cloud"
    ];

    // Split text by keywords (capturing group to keep delimiters)
    const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, i) => {
      // Check if this part matches a keyword (case-insensitive)
      if (keywords.some(k => k.toLowerCase() === part.toLowerCase())) {
        return <span key={i} className="text-yellow-400 font-mono font-bold">{part}</span>;
      }
      return part;
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-panel"
      overlayClassName="modal-overlay"
      contentLabel="Education Details"
      closeTimeoutMS={200}
    >
      <div className="relative text-gray-300 font-sans">
        <button
          onClick={onRequestClose}
          className="absolute top-0 right-0 rounded-full border border-white/10 p-2 text-gray-400 hover:border-accent/50 hover:text-white transition-colors z-10"
          aria-label="Close modal"
        >
          <FaTimes size={16} />
        </button>

        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-6 pr-10">
          <span className="text-accent font-mono mr-2">&gt;</span>
          {data.degree}
        </h2>

        {data.detailedAchievements && data.detailedAchievements.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4 font-mono">
              <span className="text-gray-500 mr-2">#</span>
              Awards & Scholarships
            </h3>
            <ul className="space-y-3 text-gray-400">
              {data.detailedAchievements.map((item, index) => {
                if (item === "") {
                  return <li key={index} className="h-4"></li>;
                }
                return (
                  <li key={index} className="flex items-start">
                    <span className="text-cyan-500 font-mono mr-3 shrink-0">|--&gt;</span>
                    <span className="leading-relaxed">
                      {highlightDetails(item)}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {data.courses && data.courses.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">{data.coursesTitle}</h3>
            <div className="flex flex-wrap gap-3">
              {data.courses.map((course) => (
                <span key={course} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-slate-300">
                  {course}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default EducationModal;