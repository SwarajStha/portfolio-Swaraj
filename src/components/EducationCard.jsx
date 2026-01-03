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

const EducationCard = ({ data, onOpenModal, isFirst, isLast }) => {
  // The 'View Details' button will now show if either detailed achievements OR courses exist.
  const hasDetails = (data.detailedAchievements && data.detailedAchievements.length > 0) || (data.courses && data.courses.length > 0);

  // Dynamic classes for seamless joining
  const borderClasses = `border border-slate-600 ${!isFirst ? 'lg:-ml-[1px] -mt-[1px] lg:mt-0' : ''}`;
  const roundedClasses = `rounded-none ${isFirst ? 'rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl' : ''} ${isLast ? 'rounded-b-2xl lg:rounded-bl-none lg:rounded-r-2xl' : ''}`;

  return (
    <div className={`bg-gray-400/40 ${borderClasses} ${roundedClasses} p-8 shadow-lg backdrop-blur-sm flex flex-col h-full hover:-translate-y-2 hover:z-10 transition-all duration-300 relative group`}>
      {/* Header Section */}
      <div className="flex flex-col items-start text-left">
        <img
          src={data.logo}
          alt={`${data.university} Logo`}
          className="h-16 w-auto mb-6 object-contain filter drop-shadow-md"
        />
        <h3 className="text-2xl font-bold text-white leading-tight min-h-[64px] flex items-end">{data.degree}</h3>
        <p className="text-base text-gray-200 mt-3 font-medium">{data.university}</p>
        <p className="text-sm text-cyan-400 font-bold mt-4 tracking-wide flex items-center gap-2">
          <FaRegClock /> {data.dates}
        </p>
      </div>

      {/* Divider */}
      <hr className="border-t border-black/60 my-6 w-full" />

      {/* Achievements Section */}
      <div className="flex-1">
        {data.summaryAchievements && data.summaryAchievements.length > 0 && (
          <div className="space-y-4">
            {data.summaryAchievements.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-black/20 p-2 rounded-lg mt-0.5 flex-shrink-0">
                  <AchievementIcon icon={item.icon} />
                </div>
                <span className="text-base text-gray-100 font-medium leading-relaxed">{item.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer / Button Section */}
      {hasDetails && (
        <div className="mt-8 pt-4">
          <button
            onClick={onOpenModal}
            className="border border-cyan-400 text-cyan-400 px-6 py-2 rounded hover:bg-cyan-400 hover:text-black transition-colors duration-300 font-bold text-sm tracking-wide uppercase"
          >
            View Details
          </button>
        </div>
      )}
    </div>
  );
};

export default EducationCard;