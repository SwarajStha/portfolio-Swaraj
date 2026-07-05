import Reveal from "./Reveal";

/**
 * Consistent section header: `// 02` eyebrow + large display title
 * + optional mono subtitle. Left-aligned like tamalsen.dev.
 */
const SectionHeading = ({ index, title, subtitle, align = "left" }) => {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <Reveal>
      <div className={`flex flex-col gap-3 mb-14 md:mb-20 ${alignCls}`}>
        <span className="font-mono text-sm text-accent tracking-widest">
          {"//"} {index}
        </span>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-none">
          {title}
        </h2>
        {subtitle && (
          <p className="font-mono text-sm text-slate-500 mt-2">{subtitle}</p>
        )}
      </div>
    </Reveal>
  );
};

export default SectionHeading;
