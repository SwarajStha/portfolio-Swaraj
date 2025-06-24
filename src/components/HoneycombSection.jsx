import TechHexagon from './TechHexagon';

const HoneycombSection = ({ title, technologies, rowCounts }) => {
  let rows = [];
  let startIndex = 0;
  // This logic dynamically creates the rows based on the rowCounts array (e.g., [5, 4])
  for (const count of rowCounts) {
    rows.push(technologies.slice(startIndex, startIndex + count));
    startIndex += count;
  }

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-gray-100 mb-8 text-center">
        {title}
      </h2>
      {/* Margins and offsets are now responsive. 
        Smaller values for mobile, larger for desktop.
      */}
      <div className="flex flex-col items-center -ml-5 md:-ml-[34px]">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex justify-center gap-2 md:gap-4 
            ${
              rowIndex > 0 // Apply stagger logic only to rows after the first one
                ? (rowIndex % 2 !== 0 
                    ? 'ml-12 md:ml-[68px] -mt-6 md:-mt-[35px]' // Staggered row
                    : '-mt-6 md:-mt-[35px]' // Non-staggered row
                  )
                : '' // No margin for the first row
            }`}
          >
            {row.map((tech) => (
              <TechHexagon key={tech.name} {...tech} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HoneycombSection;