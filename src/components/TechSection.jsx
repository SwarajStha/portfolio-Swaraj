// This component renders a title and a horizontal row of hexagons.
import TechHexagon from './TechHexagon';

const TechSection = ({ title, technologies }) => {
  return (
    <section className="mb-16 px-4">
      <h2 className="text-2xl font-semibold text-gray-100 mb-8 text-center">
        {title}
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {technologies.map((tech) => (
          <TechHexagon
            key={tech.name}
            name={tech.name}
            icon={tech.icon}
            description={tech.description}
            glowColor={tech.glowColor}
          />
        ))}
      </div>
    </section>
  );
};

export default TechSection;