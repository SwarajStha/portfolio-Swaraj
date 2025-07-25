// src/components/ProjectModal.jsx

import Modal from "react-modal";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

// MODIFICATION 1: Updated the style object to let the modal itself handle scrolling.
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#1f2937', // bg-gray-800
    border: '1px solid #4b5563', // border-gray-600
    borderRadius: '0.75rem', // rounded-xl
    padding: '2rem', // We now handle padding here
    maxWidth: '90vw',
    maxHeight: '90vh',
    width: '640px', // max-w-2xl
    overflowY: 'auto', // This is the key property for scrolling
  },
  overlay: {
    backgroundColor: 'rgba(17, 24, 39, 0.9)',
    zIndex: 50,
  },
};

Modal.setAppElement('#root');

const ProjectModal = ({ project, isOpen, onRequestClose }) => {
  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Project Details"
    >
      {/* MODIFICATION 2: The internal structure is now greatly simplified. */}
      <div className="relative text-gray-300">
        <button
          onClick={onRequestClose}
          className="absolute -top-4 -right-4 text-gray-400 hover:text-white transition-colors z-10"
          aria-label="Close modal"
        >
          <FaTimes size={24} />
        </button>
        
        {/* The image is no longer inside a scrolling div */}
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        
        <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
        <p className="text-gray-400 mb-6">{project.description}</p>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((techName) => (
              <span key={techName} className="bg-gray-700 text-cyan-400 text-sm font-medium px-3 py-1 rounded-full">
                {techName}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-cyan-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-cyan-600 transition-colors">
              <FaExternalLinkAlt />
              View Live Site
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors">
              <FaGithub />
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;