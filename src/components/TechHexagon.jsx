const TechHexagon = ({ icon, name, description, glowColor }) => {
  return (
    <div
      // Hexagon is now smaller by default, and scales up on md: screens
      className="group relative flex items-center justify-center w-[90px] h-[104px] md:w-[120px] md:h-[138px] bg-gray-500/60 border border-white/50 transition-all duration-300 hover:!bg-gray-700/80 group-hover:z-20"
      style={{
        clipPath:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      }}
    >
      <div
        className="absolute bottom-full mb-2 w-40 md:w-48 p-2 text-center text-sm text-white bg-slate-900 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 pointer-events-none z-10"
      >
        <h4 className="font-bold">{name}</h4>
        <p className="text-xs text-gray-300">{description}</p>
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-8 border-x-transparent border-t-[8px] border-t-slate-900"></div>
      </div>

      {/* The icon inside also scales up responsively */}
      <img
        src={icon}
        alt={`${name} icon`}
        className={`w-12 h-12 md:w-16 md:h-16 object-contain transition-all duration-300 group-hover:scale-110 ${glowColor}`}
      />
    </div>
  );
};

export default TechHexagon;