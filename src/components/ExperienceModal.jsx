// src/components/ExperienceModal.jsx

import Modal from "react-modal";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";

Modal.setAppElement('#root');

const ExperienceModal = ({ isOpen, onRequestClose, experience }) => {
  if (!experience) return null;

  // Syntax Highlighting Helper
  const highlightDetails = (text) => {
    // Keywords to highlight - extended list based on content
    const keywords = [
      "SQL", "VBA", "Java", "Data", "Database", "Program", "Algorithm", "Queries",
      "Reports", "Debugged", "Analysis", "Visualization", "Python", "React", "JavaScript",
      "HTML", "CSS", "WIX", "Research", "Analyzed", "Organized", "Evaluated"
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
      contentLabel="Experience Details"
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

        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-1 pr-10">
          <span className="text-accent font-mono mr-2">&gt;</span>
          {experience.title}
        </h2>
        <p className="text-lg text-accent font-semibold font-mono pl-6">{experience.company}</p>
        <p className="text-sm text-gray-400 mt-1 font-mono border-l-2 border-ink-600 ml-2 pl-4">
          {experience.year} | {experience.duration}
        </p>

        <div className="border-t border-gray-700 my-6"></div>

        {/* Terminal Tree Visuals */}
        <ul className="space-y-4 text-gray-300">
          {experience.details.map((point, index) => {
            // Check if the point is an object with a link property
            if (typeof point === 'object' && point.link) {
              return (
                <li key={index} className="flex cross-start">
                  <span className="text-cyan-500 font-mono mr-3 shrink-0">|--&gt;</span>
                  <a
                    href={point.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:underline hover:text-cyan-300 transition-colors"
                  >
                    {point.text}
                    <FaExternalLinkAlt size={12} />
                  </a>
                </li>
              );
            }
            // Otherwise, render it as text with highlighting
            return (
              <li key={index} className="flex items-start">
                <span className="text-cyan-500 font-mono mr-3 shrink-0">|--&gt;</span>
                <span className="leading-relaxed">
                  {highlightDetails(point)}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </Modal>
  );
};

export default ExperienceModal;