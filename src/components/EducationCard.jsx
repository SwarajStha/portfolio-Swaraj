import { FaAward, FaGraduationCap, FaStar, FaRegClock, FaArrowRight } from "react-icons/fa";

const AchievementIcon = ({ icon }) => {
  switch (icon) {
    case 'gpa':
      return <FaGraduationCap className="text-accent" size={16} />;
    case 'scholarship':
      return <FaAward className="text-accent" size={16} />;
    case 'deansList':
      return <FaStar className="text-accent" size={16} />;
    case 'status':
      return <FaRegClock className="text-accent" size={16} />;
    default:
      return null;
  }
};

const EducationCard = ({ data, onOpenModal }) => {
  const hasDetails =
    (data.detailedAchievements && data.detailedAchievements.length > 0) ||
    (data.courses && data.courses.length > 0);

  return (
    <div
      onClick={hasDetails ? onOpenModal : undefined}
      className={`group relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_-20px_rgba(34,211,238,0.15)] ${hasDetails ? "cursor-pointer" : ""}`}
    >
      {/* Logo + dates */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="rounded-xl bg-white/90 p-2.5 shadow-lg">
          <img
            src={data.logo}
            alt={`${data.university} logo`}
            className="h-10 w-auto object-contain"
          />
        </div>
        <span className="flex items-center gap-2 whitespace-nowrap font-mono text-xs text-accent">
          <FaRegClock size={11} /> {data.dates}
        </span>
      </div>

      <h3 className="font-display text-xl font-bold leading-snug text-white transition-colors group-hover:text-accent-soft">
        {data.degree}
      </h3>
      <p className="mt-2 text-sm text-slate-400">{data.university}</p>
      {data.coop && (
        <p className="mt-1 font-mono text-xs text-accent-violet">{data.coop}</p>
      )}

      {/* Achievements */}
      <div className="mt-6 flex-1 space-y-3 border-t border-white/5 pt-5">
        {data.summaryAchievements?.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="mt-0.5 shrink-0 rounded-md bg-accent/10 p-1.5">
              <AchievementIcon icon={item.icon} />
            </div>
            <span className="text-sm leading-relaxed text-slate-300">{item.text}</span>
          </div>
        ))}
      </div>

      {hasDetails && (
        <div className="mt-6 flex items-center gap-2 font-mono text-xs text-accent opacity-70 transition-opacity group-hover:opacity-100">
          view details
          <FaArrowRight size={10} className="transition-transform group-hover:translate-x-1" />
        </div>
      )}
    </div>
  );
};

export default EducationCard;
