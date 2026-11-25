import { useState } from "react";
import TerminalProficiency from "./TerminalProficiency";
import vueIcon from "../assets/tech/Vue.svg";
import nuxtIcon from "../assets/tech/Nuxt.svg";
import trpcIcon from "../assets/tech/tRPC.svg";
import zodIcon from "../assets/tech/Zod.svg";
import prismaIcon from "../assets/tech/Prisma.svg";
import fastapiIcon from "../assets/tech/FastAPI.svg";
import numpyIcon from "../assets/tech/NumPy.svg";
import pandasIcon from "../assets/tech/Pandas.svg";
import sklearnIcon from "../assets/tech/scikit-learn.svg";
import claudeIcon from "../assets/tech/Claude.svg";
import claudeCodeIcon from "../assets/tech/ClaudeCode.svg";
import mcpIcon from "../assets/tech/MCP.svg";
import postgresIcon from "../assets/tech/PostgreSQL.svg";
import githubActionsIcon from "../assets/tech/GitHubActions.svg";


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
        name: "TypeScript",
        icon: "/images/TypeScript.png",
        description: "Typed JavaScript; my daily language for full-stack work.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(0,122,255,0.7)]",
        proficiency: 85,
        date: "May 15 2022",
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
        name: "VB.NET",
        icon: "/images/VB.png",
        description: "Object-oriented language on the .NET Framework.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(0,122,255,0.7)]",
        proficiency: 65,
        date: "Nov 12 2017",
      },
    ],
  },
  {
    title: "Frameworks I have worked with",
    technologies: [
      {
        name: "Vue 3",
        icon: vueIcon,
        description: "Progressive framework for reactive front-ends.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(65,184,131,0.7)]",
        proficiency: 85,
        date: "May 04 2026",
      },
      {
        name: "Nuxt",
        icon: nuxtIcon,
        description: "Full-stack Vue framework with the Nitro server.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(0,220,130,0.7)]",
        proficiency: 75,
        date: "May 04 2026",
      },
      {
        name: "tRPC",
        icon: trpcIcon,
        description: "End-to-end type-safe APIs for TypeScript.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(57,142,231,0.7)]",
        proficiency: 75,
        date: "May 04 2026",
      },
      {
        name: "Zod",
        icon: zodIcon,
        description: "TypeScript-first schema validation.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(64,138,255,0.7)]",
        proficiency: 75,
        date: "May 04 2026",
      },
      {
        name: "Prisma",
        icon: prismaIcon,
        description: "Type-safe ORM for Node.js and TypeScript.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]",
        proficiency: 75,
        date: "May 04 2026",
      },
      {
        name: "FastAPI",
        icon: fastapiIcon,
        description: "High-performance Python web APIs.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(5,153,139,0.7)]",
        proficiency: 70,
        date: "May 11 2026",
      },
      {
        name: "Tailwind CSS",
        icon: "/images/TailwindV2.png",
        description: "A utility-first CSS framework.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.7)]",
        proficiency: 95,
        date: "Apr 05 2022",
      },
    ],
  },
  {
    title: "Data & ML libraries I use",
    technologies: [
      {
        name: "NumPy",
        icon: numpyIcon,
        description: "Numerical computing with arrays in Python.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(77,171,207,0.7)]",
        proficiency: 80,
        date: "May 10 2023",
      },
      {
        name: "Pandas",
        icon: pandasIcon,
        description: "Data wrangling and analysis in Python.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(231,4,136,0.7)]",
        proficiency: 85,
        date: "Oct 20 2025",
      },
      {
        name: "scikit-learn",
        icon: sklearnIcon,
        description: "Classical machine learning in Python.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(247,147,30,0.7)]",
        proficiency: 70,
        date: "May 18 2026",
      },
    ],
  },
  {
    title: "AI / LLM",
    technologies: [
      {
        name: "Claude API",
        icon: claudeIcon,
        description: "Building LLM features with the Anthropic SDK.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(217,119,87,0.7)]",
        proficiency: 85,
        date: "May 11 2026",
      },
      {
        name: "LLM Agents & Tool Use",
        icon: null,
        description: "Streaming, resumable agents that call tools.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(217,119,87,0.7)]",
        proficiency: 80,
        date: "May 18 2026",
      },
      {
        name: "MCP",
        icon: mcpIcon,
        description: "Model Context Protocol servers and clients.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]",
        proficiency: 70,
        date: "Jun 01 2026",
      },
      {
        name: "Prompt Engineering",
        icon: null,
        description: "Persona- and regime-based prompt design.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(217,119,87,0.7)]",
        proficiency: 85,
        date: "Oct 20 2025",
      },
      {
        name: "pgvector Embeddings",
        icon: postgresIcon,
        description: "Vector similarity search inside PostgreSQL.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(51,103,145,0.7)]",
        proficiency: 70,
        date: "May 18 2026",
      },
      {
        name: "Claude Code",
        icon: claudeCodeIcon,
        description: "Agentic coding in the terminal and IDE.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(217,119,87,0.7)]",
        proficiency: 85,
        date: "May 04 2026",
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
        name: "GitHub Actions",
        icon: githubActionsIcon,
        description: "CI/CD workflows for testing and deployment.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(32,136,255,0.7)]",
        proficiency: 70,
        date: "May 11 2026",
      },
      {
        name: "PostgreSQL",
        icon: postgresIcon,
        description: "Relational database for production apps.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(51,103,145,0.7)]",
        proficiency: 80,
        date: "May 04 2026",
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
        description: "Microsoft's cloud computing platform.",
        glowColor: "hover:drop-shadow-[0_0_12px_rgba(0,164,239,0.7)]",
        proficiency: 55,
        date: "Jul 15 2023",
      },
    ],
  },
];

// Category key shown in the terminal for each section (order = render order)
const sectionCategories = [
  ["Technologies I am proficient with", "proficient"],
  ["I have experience with", "experience"],
  ["Frameworks I have worked with", "framework"],
  ["Data & ML libraries I use", "data"],
  ["AI / LLM", "ai"],
  ["Productivity tools I use", "tools"],
  ["OS I have worked with", "os"],
  ["Cloud Platform (Fundamentals)", "cloud"],
];

// Hand-drawn style annotation used for the Drag / Expand / Collapse hints
const Annotation = ({ label, className = "", style, textClass, textStyle, svgSize, path, markerId, onClick }) => (
  <div
    className={`absolute z-40 hidden md:block pointer-events-none ${className}`}
    style={style}
  >
    <span
      className={`text-yellow-400 block -rotate-12 text-center ${onClick ? "pointer-events-auto cursor-pointer" : ""} ${textClass}`}
      style={{ fontFamily: '"Patrick Hand", cursive', ...textStyle }}
      onClick={onClick}
    >
      {label}
    </span>
    <svg width={svgSize[0]} height={svgSize[1]} viewBox={`0 0 ${svgSize[0]} ${svgSize[1]}`} className="opacity-80 pointer-events-none">
      <path
        d={path}
        stroke="#FACC15"
        strokeWidth="3"
        fill="none"
        markerEnd={`url(#${markerId})`}
        style={{ filter: "drop-shadow(0 0 5px rgba(250, 204, 21, 0.5))" }}
      />
      <defs>
        <marker id={markerId} markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#FACC15" />
        </marker>
      </defs>
    </svg>
  </div>
);

const Technologies = () => {
  // The terminal starts collapsed; the visitor expands it on demand
  const [isCollapsed, setIsCollapsed] = useState(true);

  const terminalData = sectionCategories.map(([title, category]) => ({
    ...techSections.find((s) => s.title === title),
    category,
  }));

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
              <div className="relative max-w-[900px] mx-auto">
                {/* Drag Indicator */}
                <Annotation
                  label="Drag"
                  style={{ top: "-105px", right: "0px" }}
                  textClass="text-4xl mb-2"
                  textStyle={{ marginLeft: "60px", transform: "translate(30px, 60px)" }}
                  svgSize={[150, 100]}
                  path="M 120 10 Q 80 10 20 80"
                  markerId="arrowhead"
                />

                {isCollapsed ? (
                  /* Expand Indicator (collapsed state) - larger, points at the yellow button */
                  <Annotation
                    label="Click to expand"
                    style={{ top: "-150px", left: "-40px" }}
                    textClass="text-5xl mb-1 whitespace-nowrap"
                    textStyle={{ transform: "translate(-10px, 10px)" }}
                    svgSize={[140, 120]}
                    path="M 20 15 Q 20 80 90 113"
                    markerId="arrowhead-expand"
                    onClick={() => setIsCollapsed(false)}
                  />
                ) : (
                  /* Collapse Indicator (expanded state) */
                  <Annotation
                    label="Collapse"
                    style={{ top: "-110px", left: "-5px" }}
                    textClass="text-3xl mb-1"
                    textStyle={{ transform: "translate(-10px, 10px)" }}
                    svgSize={[100, 90]}
                    path="M 10 20 Q 10 60 55 85"
                    markerId="arrowhead-collapse"
                    onClick={() => setIsCollapsed(true)}
                  />
                )}

                <TerminalProficiency
                  title="Terminal"
                  isCollapsed={isCollapsed}
                  onToggleCollapse={() => setIsCollapsed((c) => !c)}
                  bgColors={{
                    proficient: "text-green-400 drop-shadow-[0_0_5px_rgba(74,222,128,0.9)]",
                    experience: "text-blue-400 drop-shadow-[0_0_5px_rgba(96,165,250,0.9)]",
                    framework: "text-purple-400 drop-shadow-[0_0_5px_rgba(192,132,252,0.9)]",
                    data: "text-pink-400 drop-shadow-[0_0_5px_rgba(244,114,182,0.9)]",
                    ai: "text-amber-300 drop-shadow-[0_0_5px_rgba(252,211,77,0.9)]",
                    tools: "text-orange-400 drop-shadow-[0_0_5px_rgba(251,146,60,0.9)]",
                    os: "text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.9)]",
                    cloud: "text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.9)]",
                  }}
                  data={terminalData}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
