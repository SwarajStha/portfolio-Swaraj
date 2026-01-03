import TechSection from "./TechSection"; // For the simple rows
import HoneycombSection from "./HoneycombSection";
import TerminalProficiency from "./TerminalProficiency";

const techSections = [
  {
    title: "Technologies I am proficient with",
    technologies: [
      {
        name: "Python",
        icon: "/images/Python.png",
        description: "Versatile for backend and data science.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(255,212,59,0.7)]",
        proficiency: 90,
        date: "Jan 10 2020",
      },
      {
        name: "React",
        icon: "/images/reactL.png",
        description: "Building dynamic front-end applications.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(97,218,251,0.7)]",
        proficiency: 90,
        date: "Mar 15 2021",
      },
      {
        name: "JavaScript",
        icon: "/images/JavascriptV2.png",
        description: "The language of the web.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(247,223,30,0.7)]",
        proficiency: 80,
        date: "Sep 14 2016",
      },
      {
        name: "Kotlin",
        icon: "/images/Kotlin.png",
        description: "Modern language for Android development.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(127,82,255,0.7)]",
        proficiency: 75,
        date: "Jun 20 2021",
      },
      {
        name: "Java",
        icon: "/images/java.png",
        description: "Robust, object-oriented programming.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(237,30,36,0.7)]",
        proficiency: 75,
        date: "Sep 01 2020",
      },
      {
        name: "SQL",
        icon: "/images/database.png",
        description: "Managing and querying relational databases.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]",
        proficiency: 85,
        date: "Mar 05 2018",
      },
      {
        name: "VBA",
        icon: "/images/VBA.png",
        description: "Embedded within MS Office applications.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(0,117,143,0.7)]",
        proficiency: 75,
        date: "Feb 10 2020",
      },
      {
        name: "HTML",
        icon: "/images/html.png",
        description: "The skeleton of all web pages.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(227,76,38,0.7)]",
        proficiency: 80,
        date: "Jun 10 2015",
      },
      {
        name: "CSS",
        icon: "/images/css-3.png",
        description: "Styling and designing web content.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(21,114,182,0.7)]",
        proficiency: 90,
        date: "Jul 22 2015",
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
        proficiency: 65,
        date: "Nov 12 2017",
      },
      {
        name: "LISP",
        icon: "/images/common-lisp.png",
        description: "A family of programming languages with a long history.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]",
        proficiency: 60,
        date: "Oct 25 2020",
      },
      {
        name: "TypeScript",
        icon: "/images/TypeScript.png",
        description: "Modern language for web development.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(0,122,255,0.7)]",
        proficiency: 65,
        date: "May 15 2022",
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
        proficiency: 95,
        date: "Apr 05 2022",
      },
      {
        name: "Bootstrap",
        icon: "/images/bootstrap.png",
        description: "Popular front-end component library.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(121,82,179,0.7)]",
        proficiency: 85,
        date: "Aug 12 2020",
      },
      {
        name: "SpringBoot",
        icon: "/images/SpringBoot.png",
        description: "High-level Java web framework.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(0, 164, 2, 0.6)]",
        proficiency: 70,
        date: "Dec 10 2021",
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
        proficiency: 95,
        date: "Jan 15 2012",
      },
      {
        name: "Google Suite",
        icon: "/images/google.png",
        description: "Cloud-based collaboration tools.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(66,133,244,0.7)]",
        proficiency: 95,
        date: "May 05 2014",
      },
      {
        name: "Adobe Suite",
        icon: "/images/Adobe.png",
        description: "Creative design software suite.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(255,85,85,0.7)]",
        proficiency: 85,
        date: "Aug 10 2013",
      },
      {
        name: "GitHub",
        icon: "/images/github.png",
        description: "Version control and collaboration.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]",
        proficiency: 90,
        date: "Jan 20 2020",
      },
      {
        name: "Figma",
        icon: "/images/Figma.png",
        description: "Design and prototyping tool.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(252,70,107,0.7)]",
        proficiency: 75,
        date: "Jun 10 2021",
      },
      {
        name: "Docker",
        icon: "/images/Docker.png",
        description: "Containerization platform.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(0,122,255,0.7)]",
        proficiency: 75,
        date: "Sep 05 2022",
      },
      {
        name: "Digital Ocean",
        icon: "/images/DigitalOcean.png",
        description: "Cloud infrastructure provider.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(0,164,239,0.7)]",
        proficiency: 80,
        date: "Oct 12 2022",
      },
      {
        name: "Kubernetes",
        icon: "/images/Kubernetes.png",
        description: "Container orchestration platform.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(0,122,255,0.7)]",
        proficiency: 65,
        date: "Nov 20 2023",
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
        proficiency: 95,
        date: "Feb 20 2012",
      },
      {
        name: "Linux",
        icon: "/images/linux.png",
        description: "The open-source operating system.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(252,204,1,0.8)]",
        proficiency: 65,
        date: "Mar 10 2020",
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
        proficiency: 55,
        date: "Jul 15 2023",
      },
    ],
  },
];

const Technologies = () => {
  // We find the data for each section to build the custom layout
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
    <>
      <div id="technologies" className="bg-white/40 pt-5 pb-0">
        <div
          className="w-full py-12 text-white"
          style={{
            backgroundImage:
              "radial-gradient(circle at top right, #f9731699, #7c2d1299, #112240CC)",
          }}
        >
          <div className="max-w-[1240px] mx-auto">
            <div className="text-center mb-16 px-4">
              <h1 className="text-4xl md:text-5xl font-bold inline-block border-b-4 border-cyan-400 pb-2">
                TECHNOLOGIES
              </h1>
            </div>

            <div className="px-4">
              {/* Render the first honeycomb section - REPLACED WITH TERMINAL SIMULATOR */}
              {/* {proficientData && (
              <HoneycombSection {...proficientData} rowCounts={[5, 4]} />
            )} */}

              {/* TERMINAL SIMULATOR for ALL Sections */}
              <div className="relative max-w-[900px] mx-auto">
                {/* Drag Indicator */}
                <div className="absolute z-40 hidden md:block" style={{ top: '-105px', right: '0px' }}>
                  <span
                    className="text-yellow-400 text-4xl block -rotate-12 mb-2 text-center"
                    style={{ fontFamily: '"Patrick Hand", cursive', marginLeft: '60px', transform: 'translate(30px, 60px)' }}
                  >
                    Drag
                  </span>
                  <svg width="150" height="100" viewBox="0 0 150 100" className="opacity-80">
                    <path
                      d="M 120 10 Q 80 10 20 80"
                      stroke="#FACC15"
                      strokeWidth="3"
                      fill="none"
                      markerEnd="url(#arrowhead)"
                      style={{ filter: 'drop-shadow(0 0 5px rgba(250, 204, 21, 0.5))' }}
                    />
                    <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#FACC15" />
                      </marker>
                    </defs>
                  </svg>
                </div>

                {/* Click Indicator */}
                <div className="absolute z-40 hidden md:block" style={{ top: '-110px', left: '-25px' }}>
                  <span
                    className="text-yellow-400 text-3xl block -rotate-12 mb-1 text-center"
                    style={{ fontFamily: '"Patrick Hand", cursive', transform: 'translate(-10px, 10px)' }}
                  >
                    Click
                  </span>
                  <svg width="100" height="90" viewBox="0 0 100 90" className="opacity-80">
                    <path
                      d="M 10 20 Q 10 60 55 85"
                      stroke="#FACC15"
                      strokeWidth="3"
                      fill="none"
                      markerEnd="url(#arrowhead-click)"
                      style={{ filter: 'drop-shadow(0 0 5px rgba(250, 204, 21, 0.5))' }}
                    />
                    <defs>
                      <marker id="arrowhead-click" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#FACC15" />
                      </marker>
                    </defs>
                  </svg>
                </div>

                <TerminalProficiency
                  title="Terminal"
                  bgColors={{
                    proficient: "text-green-400 drop-shadow-[0_0_5px_rgba(74,222,128,0.9)]",
                    experience: "text-blue-400 drop-shadow-[0_0_5px_rgba(96,165,250,0.9)]",
                    framework: "text-purple-400 drop-shadow-[0_0_5px_rgba(192,132,252,0.9)]",
                    tools: "text-orange-400 drop-shadow-[0_0_5px_rgba(251,146,60,0.9)]",
                    os: "text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.9)]",
                    cloud: "text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.9)]",
                  }}
                  data={[
                    { ...proficientData, category: 'proficient' },
                    { ...experienceData, category: 'experience' },
                    { ...frameworksData, category: 'framework' },
                    { ...toolsData, category: 'tools' },
                    { ...OSData, category: 'os' },
                    { ...cloudData, category: 'cloud' },
                  ]}
                />

                {/* Side-by-side container for the next two sections - HIDDEN as integrated into Terminal */}
                {/* <div className="flex flex-col md:flex-row justify-center items-start gap-x-24 gap-y-10 my-16">
              {experienceData && <TechSection {...experienceData} />}
              {frameworksData && <TechSection {...frameworksData} />}
            </div> */}

                {/* Render the second honeycomb section - HIDDEN */}
                {/* {toolsData && (
                <HoneycombSection {...toolsData} rowCounts={[4, 4]} />
              )} */}

                {/* Side-by-side container for the last two sections - HIDDEN */}
                {/* <div className="flex flex-col md:flex-row justify-center items-start gap-x-24 gap-y-10 mt-16">
                {OSData && <TechSection {...OSData} />}
                {cloudData && <TechSection {...cloudData} />}
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
