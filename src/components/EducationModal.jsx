import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";

// MODIFICATION 1: Updated the style object to let the modal itself handle scrolling
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#1f2937',
    border: '1px solid #4b5563',
    borderRadius: '0.75rem',
    padding: '2rem', // We now handle padding here
    maxWidth: '90vw',
    maxHeight: '90vh',
    width: '640px',
    overflowY: 'auto', // This is the key property for scrolling
  },
  overlay: {
    backgroundColor: 'rgba(17, 24, 39, 0.9)',
    zIndex: 50,
  },
};

Modal.setAppElement('#root');

const EducationModal = ({ isOpen, onRequestClose, data }) => {
  if (!data) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Education Details"
    >
      {/* MODIFICATION 2: The internal structure is now greatly simplified */}
      <div className="relative text-gray-300">
        <button
          onClick={onRequestClose}
          className="absolute -top-4 -right-4 text-gray-400 hover:text-white transition-colors z-10"
          aria-label="Close modal"
        >
          <FaTimes size={24} />
        </button>
        
        <h2 className="text-3xl font-bold text-white mb-6">{data.degree}</h2>
        
        {data.detailedAchievements && data.detailedAchievements.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">Awards & Scholarships</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              {data.detailedAchievements.map((item, index) => {
                if (item === "") {
                  return <li key={index} className="list-none">&nbsp;</li>;
                }
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        )}

        {data.courses && data.courses.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">{data.coursesTitle}</h3>
            <div className="flex flex-wrap gap-3">
              {data.courses.map((course) => (
                <span key={course} className="bg-gray-700 text-gray-300 text-sm font-medium px-3 py-1.5 rounded-md">
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