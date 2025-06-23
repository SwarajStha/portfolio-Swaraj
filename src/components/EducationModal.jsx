import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";

// Styles for the modal (consistent with the ProjectModal)
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#1f2937", // bg-gray-800
    border: "1px solid #4b5563", // border-gray-600
    borderRadius: "0.75rem", // rounded-xl
    padding: "0",
    maxWidth: "90vw",
    maxHeight: "90vh",
    width: "640px", // max-w-2xl
    overflow: "hidden",
  },
  overlay: {
    backgroundColor: "rgba(17, 24, 39, 0.9)",
    zIndex: 50,
  },
};

Modal.setAppElement("#root");

const EducationModal = ({ isOpen, onRequestClose, data }) => {
  if (!data) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Education Details"
    >
      <div className="relative text-gray-300 flex flex-col h-full">
        <button
          onClick={onRequestClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          aria-label="Close modal"
        >
          <FaTimes size={24} />
        </button>

        <div className="overflow-y-auto p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Details & Accomplishments
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">Awards & Scholarships</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-400">

              {data.detailedAchievements.map((item, index) => {
                // If the item is just an empty string for spacing, we handle it specially
                if (item === "") {
                  // 'list-none' hides the bullet point for this spacer item
                  return <li key={index} className="list-none">&nbsp;</li>;
                }
                // Otherwise, we render the normal list item
                return (
                  <li key={index}>{item}</li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">
              Relevant Coursework
            </h3>
            <div className="flex flex-wrap gap-3">
              {data.relevantCourses.map((course) => (
                <span
                  key={course}
                  className="bg-gray-700 text-gray-300 text-sm font-medium px-3 py-1.5 rounded-md"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EducationModal;
