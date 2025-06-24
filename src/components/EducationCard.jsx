// src/components/EducationCard.jsx

import { FaAward, FaGraduationCap, FaStar, FaRegClock } from "react-icons/fa";

// A small helper to render the correct icon
const AchievementIcon = ({ icon }) => {
  switch (icon) {
    case 'gpa':
      return <FaGraduationCap className="text-cyan-400" size={20} />;
    case 'scholarship':
      return <FaAward className="text-cyan-400" size={20} />;
    case 'deansList':
      return <FaStar className="text-cyan-400" size={20} />;
    case 'status':
      return <FaRegClock className="text-cyan-400" size={20} />;
    default:
      return null;
  }
};

const EducationCard = ({ data, onOpenModal }) => {
  // The 'View Details' button will now show if either detailed achievements OR courses exist.
  const hasDetails = (data.detailedAchievements && data.detailedAchievements.length > 0) || (data.courses && data.courses.length > 0);

  return (
    <div className="bg-gray-400/40 border border-slate-600 rounded-2xl p-4 shadow-lg backdrop-blur-sm flex flex-col">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Left Column */}
        <div className="flex-shrink-0 md:w-1/3 text-center md:text-left">
          <img
            src={data.logo}
            alt={`${data.university} Logo`}
            className="h-20 w-auto mx-auto md:mx-0 mb-4"
          />
          <h3 className="pt-5 text-2xl font-bold text-white">{data.degree}</h3>
          <p className="text-lg text-gray-200 mt-1">{data.university}</p>
          <p className="pt-5 text-md text-cyan-400 font-semibold mt-2">{data.dates}</p>
        </div>

        {/* Right Column - MODIFIED: Removed the 'Key Subjects' logic */}
        <div className="md:w-2/3 md:border-l md:border-slate-600 md:pl-8">
          {data.summaryAchievements && data.summaryAchievements.length > 0 && (
            <>
              <h4 className="pb-5 text-xl font-semibold text-white mb-4">Key Achievements</h4>
              <div className="space-y-4">
                {data.summaryAchievements.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-gray-700 p-3 rounded-full">
                      <AchievementIcon icon={item.icon} />
                    </div>
                    <span className="text-lg text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      
      {/* "View Details" button is now controlled by the new 'hasDetails' check */}
      {hasDetails && (
        <div className="mt-6 text-right">
          <button
            onClick={onOpenModal}
            className="bg-gray-700 text-white font-bold py-2 px-5 rounded-lg hover:bg-cyan-500 transition-colors"
          >
            View Details
          </button>
        </div>
      )}
    </div>
  );
};

export default EducationCard;