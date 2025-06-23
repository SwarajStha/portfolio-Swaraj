import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";

// Styles for the modal
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
    padding: '2rem',
    maxWidth: '90vw',
    maxHeight: '90vh',
    width: '700px', // max-w-3xl
    overflowY: 'auto',
  },
  overlay: {
    backgroundColor: 'rgba(17, 24, 39, 0.9)',
    zIndex: 50,
  },
};

Modal.setAppElement('#root');

const ExperienceModal = ({ isOpen, onRequestClose, experience }) => {
  if (!experience) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Experience Details"
    >
      <div className="relative text-gray-300">
        <button
          onClick={onRequestClose}
          className="absolute -top-4 -right-4 text-gray-400 hover:text-white transition-colors z-10"
          aria-label="Close modal"
        >
          <FaTimes size={24} />
        </button>
        
        <h2 className="text-3xl font-bold text-white">{experience.title}</h2>
        <p className="text-lg text-cyan-400 font-semibold mt-1">{experience.company}</p>
        <p className="text-sm text-gray-400 mt-2">{experience.year} | {experience.duration}</p>
        
        <div className="border-t border-gray-700 my-6"></div>
        
        <ul className="list-disc list-inside space-y-3 text-gray-400">
          {experience.details.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default ExperienceModal;