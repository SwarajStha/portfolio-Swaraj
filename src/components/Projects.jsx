import { useState } from "react";
import ProjectItem from "./ProjectItem";
import ProjectModal from "./ProjectModal";

// Organize all project data in one place
const projectData = [
  {
    id: "proj1",
    title: "Class Photo Scheduler",
    img: "/images/KotlinApp.jpg",
    description:
      "An in-progress mobile application designed for educational institutions to streamline the process of scheduling and managing class photos. It aims to provide a centralized platform for administrators, teachers, and photographers.",
    tech: ["Kotlin", "Android Studio", "XML", "Firebase (planned)"],
    githubLink: "", // Add link when available
    liveLink: "",
  },
  {
    id: "proj2",
    title: "Online Class Face-Tracker",
    img: "/images/face(1).png",
    description:
      "A Python-based tool that utilizes computer vision to track student engagement during online classes by detecting faces. The project generates an efficiency graph to visualize periods of attention.",
    tech: ["Python", "OpenCV", "Matplotlib"],
    githubLink: "https://github.com/SwarajStha/faceTrack",
    liveLink: "",
  },
  {
    id: "proj3",
    title: "Personal Portfolio",
    img: "/images/portfolio-Swaraj.png",
    description:
      "My personal portfolio website (the one you're on right now!) built from scratch to showcase my skills and projects. It is designed to be fully responsive and is continuously updated with new features and content.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Vite"],
    githubLink: "https://github.com/SwarajStha/portfolio-Swaraj",
    liveLink: "#", // Link to the current site
  },
  {
    id: "proj4",
    title: "St. Margaret's Bay Conservation Site",
    img: "/images/conservation-site.png",
    description:
      "A conceptual website for a local conservation area, developed as part of an experiential learning course. The site focuses on providing clear information about the area, its trails, and ecological importance.",
    tech: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/SwarajStha/conservation-site",
    liveLink: "",
  },
  {
    id: "proj5",
    title: "Mi'kmaq Language Game",
    img: "/images/miqmaq(1).png",
    description:
      "An interactive educational game designed to help users learn basic Mi'kmaq vocabulary. This project was developed in collaboration with community members to promote language preservation through technology.",
    tech: ["Java", "JavaFX"],
    githubLink: "", // Add link if available
    liveLink: "",
  },
];

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div
        className="bg-scroll"
        style={{ backgroundImage: "url(/backgroundPPcroppedR.jpg)" }}
      >
        <div id="projects" className="bg-white/40 pt-5">
          <div className="max-w-[1000px] mx-auto bg-gradient-to-r from-white/40 to-orange-700/40 py-12 text-white rounded-xl border">
              <div className="text-center mb-16">
                <h1 className="text-white text-4xl md:text-5xl font-bold inline-block border-b-4 border-cyan-400 pb-2">
                  PROJECTS
                </h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {projectData.map((project) => (
                  <ProjectItem
                    key={project.id}
                    title={project.title}
                    img={project.img}
                    onSelect={() => handleOpenModal(project)}
                  />
                ))}
              </div>
            </div>

            <ProjectModal
              project={selectedProject}
              isOpen={modalIsOpen}
              onRequestClose={handleCloseModal}
            />
          </div>
        </div>
    </>
  );
};

export default Projects;
