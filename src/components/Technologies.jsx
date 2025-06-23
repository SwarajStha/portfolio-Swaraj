// --- Reusable Hexagon Component (No changes needed here) ---
// This component displays the icon and handles the hover effects.
const TechHexagon = ({ icon, name, description, glowColor }) => {
  return (
    <div
      className="group relative flex items-center justify-center w-[120px] h-[138px] bg-gray-500/60 transition-transform duration-300 hover:!bg-gray-700/80 group-hover:z-20"
      style={{
        clipPath:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      }}
    >
      {/* Tooltip that appears on hover */}
      <div
        className="absolute bottom-full mb-4 w-48 p-2 text-center text-sm text-white bg-slate-900 rounded-lg opacity-0 invisible 
                   group-hover:opacity-100 group-hover:visible transition-opacity duration-300 pointer-events-none z-10"
      >
        <h4 className="font-bold">{name}</h4>
        <p className="text-xs text-gray-300">{description}</p>
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-8 border-x-transparent border-t-[8px] border-t-slate-900"></div>
      </div>

      {/* Icon with glow effect */}
      <img
        src={icon}
        alt={`${name} icon`}
        className={`w-16 h-16 object-contain transition-all duration-300 group-hover:scale-110 ${glowColor}`}
      />
    </div>
  );
};

// --- Honeycomb Section Component (with corrected honeycomb alignment) ---
const HoneycombSectionProg = ({ title, technologies }) => {
  // We split the technologies array into two rows
  const topRow = technologies.slice(0, 5);
  const bottomRow = technologies.slice(5, 9);

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-gray-300 mb-8 text-center">
        {title}
      </h2>
      {/*
        MODIFICATION: The parent div now has a negative left margin `-ml-[34px]`.
        This shifts the entire honeycomb structure to the left by half of the stagger amount,
        making the whole block appear perfectly centered on the page.
      */}
      <div className="flex flex-col items-center">
        {/* Top Row: No changes needed here */}
        <div className="flex justify-center gap-4">
          {topRow.map((tech) => (
            <TechHexagon
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
              description={tech.description}
              glowColor={tech.glowColor}
            />
          ))}
        </div>

        {/*
          Bottom Row: MODIFIED with precise values.
          -mt-[35px] provides the perfect vertical interlock.
          ml-[68px] provides the perfect horizontal stagger.
        */}
        <div className="flex justify-center gap-4 -mt-[35px]">
          {bottomRow.map((tech) => (
            <TechHexagon
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
              description={tech.description}
              glowColor={tech.glowColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Reusable Section Component ---
// This component renders a title and a horizontal row of hexagons.
const TechSection = ({ title, technologies }) => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-gray-300 mb-8 text-center">
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

// --- Honeycomb Section Component (with corrected honeycomb alignment) ---
const HoneycombSection = ({ title, technologies }) => {
  // We split the technologies array into two rows
  const topRow = technologies.slice(0, 4);
  const bottomRow = technologies.slice(4, 8);

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-gray-300 mb-8 text-center">
        {title}
      </h2>
      {/*
        MODIFICATION: The parent div now has a negative left margin `-ml-[34px]`.
        This shifts the entire honeycomb structure to the left by half of the stagger amount,
        making the whole block appear perfectly centered on the page.
      */}
      <div className="flex flex-col items-center -ml-[34px]">
        {/* Top Row: No changes needed here */}
        <div className="flex justify-center gap-4">
          {topRow.map((tech) => (
            <TechHexagon
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
              description={tech.description}
              glowColor={tech.glowColor}
            />
          ))}
        </div>

        {/*
          Bottom Row: MODIFIED with precise values.
          -mt-[35px] provides the perfect vertical interlock.
          ml-[68px] provides the perfect horizontal stagger.
        */}
        <div className="flex justify-center gap-4 -mt-[35px] ml-[136px]">
          {bottomRow.map((tech) => (
            <TechHexagon
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
              description={tech.description}
              glowColor={tech.glowColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main Technologies Component ---
const Technologies = () => {
  // Data is now organized by section to match your layout
  const techSections = [
    {
      title: "Technologies I am proficient with",
      technologies: [
        {
          name: "Python",
          icon: "/images/Python.png",
          description: "Versatile for backend and data science.",
          glowColor: "hover:drop-shadow-[0_0_12px_rgba(255,212,59,0.7)]",
        },
        {
          name: "React",
          icon: "/images/reactL.png",
          description: "Building dynamic front-end applications.",
          glowColor: "hover:drop-shadow-[0_0_12px_rgba(97,218,251,0.7)]",
        },
        {
          name: "JavaScript",
          icon: "/images/JavascriptV2.png",
          description: "The language of the web.",
          glowColor: "hover:drop-shadow-[0_0_12px_rgba(247,223,30,0.7)]",
        },
        {
          name: "Kotlin",
          icon: "/images/Kotlin.png",
          description: "Modern language for Android development.",
          glowColor: "hover:drop-shadow-[0_0_12px_rgba(127,82,255,0.7)]",
        },
        {
          name: "Java",
          icon: "/images/java.png",
          description: "Robust, object-oriented programming.",
          glowColor: "hover:drop-shadow-[0_0_12px_rgba(237,30,36,0.7)]",
        },
        {
          name: "SQL",
          icon: "/images/database.png",
          description: "Managing and querying relational databases.",
          glowColor: "hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]",
        },
        {
          name: "VBA",
          icon: "/images/VBA.png",
          description: "Embedded within MS Office applications.",
          glowColor: "hover:drop-shadow-[0_0_12px_rgba(0,117,143,0.7)]",
        },
        {
          name: "HTML",
          icon: "/images/html.png",
          description: "The skeleton of all web pages.",
          glowColor: "hover:drop-shadow-[0_0_12px_rgba(227,76,38,0.7)]",
        },
        {
          name: "CSS",
          icon: "/images/css-3.png",
          description: "Styling and designing web content.",
          glowColor: "hover:drop-shadow-[0_0_12px_rgba(21,114,182,0.7)]",
        },
      ],
    },
    {
      title: "I have experience with",
      technologies: [
        {
          name: "VB.NET",
          icon: "/images/VB.png",
          description: "Object-oriented language on the .NET Framework.",
          glowColor: "hover:drop-shadow-[0_0_12px_rgba(0,122,255,0.7)]",
        },
        {
          name: "LISP",
          icon: "/images/common-lisp.png",
          description: "A family of programming languages with a long history.",
          glowColor: "hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]",
        },
        {
          name: "TypeScript",
          icon: "/images/TypeScript.png",
          description: "Modern language for web development.",
          glowColor: "hover:drop-shadow-[0_0_12px_rgba(0,122,255,0.7)]",
        },
      ],
    },
    {
      title: "Frameworks I have worked with",
      technologies: [
        {
          name: "Tailwind CSS",
          icon: "/images/TailwindV2.png",
          description: "A utility-first CSS framework.",
          glowColor: "hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.7)]",
        },
        {
          name: "Bootstrap",
          icon: "/images/bootstrap.png",
          description: "Popular front-end component library.",
          glowColor: "hover:drop-shadow-[0_0_12px_rgba(121,82,179,0.7)]",
        },
        {
          name: "SpringBoot",
          icon: "/images/SpringBoot.png",
          description: "High-level Java web framework.",
          glowColor: "hover:drop-shadow-[0_0_12px_rgba(0, 164, 2, 0.6)]",
        },
      ],
    },
    {
      title: "Productivity tools I use",
      technologies: [
        {
          name: "MS Office",
          icon: "/images/office.png",
          description: "Suite of productivity applications.",
          glowColor: "hover:drop-shadow-[0_0_12px_rgba(216,66,40,0.7)]",
        },
        {
          name: "Google Suite",
          icon: "/images/google.png",
          description: "Cloud-based collaboration tools.",
          glowColor: "hover:drop-shadow-[0_0_12px_rgba(66,133,244,0.7)]",
        },
        {
          name: "Adobe Suite",
          icon: "/images/Adobe.png",
          description: "Creative design software suite.",
          glowColor: "hover:drop-shadow-[0_0_12px_rgba(255,85,85,0.7)]",
        },
        {
          name: "GitHub",
          icon: "/images/github.png",
          description: "Version control and collaboration.",
          glowColor: "hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]",
        },
        {
          name: "Figma",
          icon: "/images/Figma.png",
          description: "Design and prototyping tool.",
          glowColor: "hover:drop-shadow-[0_0_12px_rgba(252,70,107,0.7)]",
        },
        {
          name: "Docker",
          icon: "/images/Docker.png",
          description: "Containerization platform.",
          glowColor: "hover:drop-shadow-[0_0_12px_rgba(0,122,255,0.7)]",
        },
        {
          name: "Digital Ocean",
          icon: "/images/DigitalOcean.png",
          description: "Cloud infrastructure provider.",
          glowColor: "hover:drop-shadow-[0_0_12px_rgba(0,164,239,0.7)]",
        },
        {
          name: "Kubernetes",
          icon: "/images/Kubernetes.png",
          description: "Container orchestration platform.",
          glowColor: "hover:drop-shadow-[0_0_12px_rgba(0,122,255,0.7)]",
        },
      ],
    },
    {
      title: "OS I have worked with",
      technologies: [
        {
          name: "Windows",
          icon: "/images/windows.png",
          description: "The world's most popular desktop OS.",
          glowColor: "hover:drop-shadow-[0_0_12px_rgba(0,164,239,0.7)]",
        },
        {
          name: "Linux",
          icon: "/images/linux.png",
          description: "The open-source operating system.",
          glowColor: "hover:drop-shadow-[0_0_12px_rgba(252,204,1,0.8)]",
        },
      ],
    },
    {
      title: "Cloud Platform (Fundamentals)",
      technologies: [
        {
          name: "Azure",
          icon: "/images/Azure.png",
          description: "Amazon Web Services.",
          glowColor: "hover:drop-shadow-[0_0_12px_rgba(0,164,239,0.7)]",
        },
      ],
    },
  ];

  // We find the data for each section to build our custom layout
  const proficientData = techSections.find(
    (s) => s.title === "Technologies I am proficient with"
  );
  const experienceData = techSections.find(
    (s) => s.title === "I have experience with"
  );
  const frameworksData = techSections.find(
    (s) => s.title === "Frameworks I have worked with"
  );
  const toolsData = techSections.find(
    (s) => s.title === "Productivity tools I use"
  );
  const OSData = techSections.find((s) => s.title === "OS I have worked with");
  const cloudData = techSections.find(
    (s) => s.title === "Cloud Platform (Fundamentals)"
  );

  return (
    <div
      className="bg-scroll"
      style={{ backgroundImage: "url(/backgroundPPcropped.jpg)" }}
    >
      <div id="technologies" className="bg-white/40 pt-5">
        <div className="max-w-[1000px] mx-auto bg-gradient-to-r from-[#112240] via-orange-900/40 to-orange-600/80 py-12 text-white rounded-xl border">
            <div className="text-center mb-16">
              <h1 className="text-white text-4xl md:text-5xl font-bold inline-block border-b-4 border-cyan-400 pb-2">
                TECHNOLOGIES
              </h1>
            </div>

            {/* Render the first honeycomb section */}
            {proficientData && <HoneycombSectionProg {...proficientData} />}

            {/* Side-by-side container for the next two sections */}
            <div className="flex flex-col md:flex-row justify-center items-start gap-x-24 gap-y-10 mb-16">
              {experienceData && <TechSection {...experienceData} />}
              {frameworksData && <TechSection {...frameworksData} />}
            </div>

            {/* Render the second honeycomb section */}
            {toolsData && <HoneycombSection {...toolsData} topRowCount={4} />}

            {/* Side-by-side container for the next two sections */}
            <div className="flex flex-col md:flex-row justify-center items-start gap-x-24 gap-y-10 mb-16">
              {OSData && <TechSection {...OSData} />}
              {cloudData && <TechSection {...cloudData} />}
            </div>
          </div>
        </div>
      </div>

  );
};

export default Technologies;
