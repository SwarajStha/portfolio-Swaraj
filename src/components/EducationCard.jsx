// src/components/EducationCard.jsx

import { FaAward, FaGraduationCap, FaStar } from "react-icons/fa";

// A small helper to render the correct icon
const AchievementIcon = ({ icon }) => {
  switch (icon) {
    case 'gpa':
      return <FaGraduationCap className="text-cyan-400" size={20} />;
    case 'scholarship':
      return <FaAward className="text-cyan-400" size={20} />;
    case 'deansList':
      return <FaStar className="text-cyan-400" size={20} />;
    default:
      return null;
  }
};

const EducationCard = ({ data, onOpenModal }) => {
  return (
    <div className="bg-slate-700/50 border border-slate-600 rounded-2xl p-4 shadow-lg backdrop-blur-sm">
      {/* It has `flex-col` for mobile and `md:flex-row` to switch to a side-by-side layout on medium screens and up.
      */}
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Left Column */}
        <div className="flex-shrink-0 md:w-1/3 text-center md:text-left">
          <img
            src={data.logo}
            alt={`${data.university} Logo`}
            className="h-12 w-auto mx-auto md:mx-0 mb-4"
          />
          <h3 className="pt-6 text-2xl font-bold text-white">{data.degree}</h3>
          <p className="text-lg text-gray-400 mt-1">{data.university}</p>
          <p className="text-md text-cyan-400 font-semibold mt-2 pt-4">{data.dates}</p>
        </div>

        {/* Right Column */}
        <div className="md:w-2/3 md:border-l md:border-gray-700 md:pl-8">
          <h4 className="text-xl font-semibold text-white mb-4">Key Achievements</h4>
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
          <button
            onClick={onOpenModal}
            className="mt-6 bg-gray-700 text-white font-bold py-2 px-5 rounded-lg hover:bg-cyan-500 transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;