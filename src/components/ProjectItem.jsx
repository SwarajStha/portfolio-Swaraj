const ProjectItem = ({ title, img, onSelect }) => {
  return (
    // The entire card is clickable
    <div
      onClick={onSelect}
      className="relative flex flex-col items-center justify-center w-full h-64 shadow-xl shadow-gray-600 rounded-xl group hover:bg-gradient-to-t from-slate-900 via-slate-900 to-slate-800 cursor-pointer transition-all duration-300"
    >
      <img
        src={img}
        alt={title}
        className="rounded-xl w-full h-full object-cover group-hover:opacity-10 transition-opacity duration-300"
      />
      <div className="hidden group-hover:flex flex-col items-center justify-center absolute inset-0">
        <h3 className="text-xl font-bold text-white tracking-wider text-center px-2">
          {title}
        </h3>
        <p className="mt-4 p-3 rounded-lg bg-white text-gray-700 font-bold text-md">
          Learn More
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
