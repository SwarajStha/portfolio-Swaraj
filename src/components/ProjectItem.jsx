import { FaArrowRight } from "react-icons/fa";

const ProjectItem = ({ title, img, tech, category, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className="group relative flex w-full cursor-pointer flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_25px_50px_-20px_rgba(34,211,238,0.2)]"
    >
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden bg-ink-950 md:h-60">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover object-top opacity-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-transparent"></div>

        {/* Hover prompt */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="translate-y-3 rounded border border-accent/40 bg-ink-950/80 px-4 py-2 font-mono text-sm text-accent shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
            open project <FaArrowRight className="ml-1 inline" size={10} />
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="font-mono text-xs tracking-wide text-slate-500">
          {category}
        </span>
        <h3 className="font-display text-xl font-bold text-white transition-colors group-hover:text-accent-soft">
          {title}
        </h3>
        <div className="mt-1 flex flex-wrap gap-2">
          {tech?.slice(0, 3).map((t, i) => (
            <span
              key={i}
              className="rounded-full border border-white/10 px-2.5 py-0.5 font-mono text-[11px] text-slate-500 transition-colors group-hover:border-white/20"
            >
              {t}
            </span>
          ))}
          {tech?.length > 3 && (
            <span className="py-0.5 font-mono text-[11px] text-slate-600">
              +{tech.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
