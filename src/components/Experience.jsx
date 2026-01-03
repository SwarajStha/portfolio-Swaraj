// src/components/Experience.jsx

import { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import ExperienceModal from "./ExperienceModal";

const experienceData = [
  {
    year: "January 2024 - December 2024",
    title: "Database Developer",
    duration: "4 month Co-op + transitioned to termed position post-graduation",
    company: "Canada Border Services Agency (CBSA)",
    country: "Halifax, NS, Canada",
    commitHash: "7f3a92b",
    branch: "main",
    terminalGroup: "CBSA",
    terminalDate: "December24",
    details: [
      "Languages used: VBA and SQL",
      "Developed robust database that has demonstrated remarkable success in streamlining data input processes, enhancing user interfaces, fortifying data integrity, whilst decreasing the number of separate files required from 14 to 2.",
      "Created input screens, user manuals, queries, and reports and implementing data visualization tools to facilitate data analysis and reporting.",
    ],
  },
  {
    year: "September 2022 - April 2024",
    title: "Teacher's Assistant - Programming & Problem Solving",
    duration: "3 Academic Semesters",
    company: "Saint Mary's University",
    country: "Halifax, NS, Canada",
    commitHash: "a1b2c3d",
    branch: "feature/smu-academic",
    terminalGroup: "SMU",
    terminalDate: "April24",
    details: [
      "Advanced Computer Programming and Problem-Solving (January 2024 – April 2024); Introduction to Computers and Programming	(September 2023 – December 2023, September 2022 – December 2022)",
      "Evaluated and debugged student-generated code in Java, enhancing my expertise in algorithms.",
      "Checking submissions by 27 students (2024), 36 students (2023), and 56 students (2022) and marking them.",
      "Refined problem-solving skills while deciphering a student’s approach to the problem presented.",
    ],
  },
  {
    year: "May 2022 - December 2023",
    title: "SMUworks Program Administrator",
    duration: "Co-op + continued on part-time basis",
    company: "Saint Mary's University",
    country: "Halifax, NS, Canada",
    commitHash: "9e8d7c6",
    branch: "main",
    terminalGroup: "SMU",
    terminalDate: "December23",
    details: [
      "Organized, examined, and analyzed data for the SMUworks program to draw conclusions regarding trends.",
      "Part of the SMUworks Steering Committee to advocate for the students’ side and based on past SMUworks records.",
      "Oversaw all tasks related to the program ensuring that the 40+ positions we funded each term ran smoothly.",
      "Conducted comprehensive mid-term assessments of SMUworks grant recipients and student employees funded by these grants, ensuring adherence to grant objectives and performance standards.",
    ],
  },
  {
    year: "August 2022 - April 2024",
    title: "Residence Assistant",
    duration: "2 Academic Years",
    company: "Saint Mary's University",
    country: "Halifax, NS, Canada",
    commitHash: "4f5e6d7",
    branch: "feature/smu-residence",
    terminalGroup: "SMU",
    terminalDate: "April24",
    details: [
      "Improved leadership skills by disseminating information by updating the residents (22-floor members (2022), 35-floor members (2023)) on the most current information regarding the university and the facilities available, organizing floor events to help the residents socialize better, bringing forth a feeling of togetherness among the floor members, and since most students are first years – nurturing growth both academically and mentally by becoming an example.",
      "Mentoring new student leaders.",
    ],
  },
  {
    year: "January 2023 - April 2023",
    title: "Teacher's Assistant - Discrete Mathematics",
    duration: "1 Academic Semester",
    company: "Saint Mary's University",
    country: "Halifax, NS, Canada",
    commitHash: "1a2b3c4",
    branch: "feature/smu-academic",
    terminalGroup: "SMU",
    terminalDate: "April23",
    details: [
      "Social Sciences and Humanities Research Council COVID Partnership Engagement Grant NSIE Project",
      "Evaluated, corrected, and gave feedback to 59 students regarding their quizzes and submissions.",
      "Adapted communication strategies to ensure comprehensive understanding of complex concepts.",
      "Polished analytics skills by observing diverse student approaches to problem-solving.",
    ],
  },
  {
    year: "September 2021 - April 2022",
    title: "Research Assistant (NSIE Project)",
    duration: "1 Academic Year",
    company: "Saint Mary's University",
    country: "Halifax, NS, Canada",
    commitHash: "5d4c3b2",
    branch: "feature/smu-research",
    terminalGroup: "SMU",
    terminalDate: "April22",
    details: [
      "Creating a website to show the professor’s works, current projects, and the teams working on the projects utilizing skills in layout design and understanding of web design practices using the WIX platform.",
      "Collected and analyzed raw data of interviews to organize the qualitative data gathered which allowed visualization of the amount of usable data and recognize the category in need of data.",
    ],
  },
  {
    year: "May 2021 - August 2021",
    title: "Research Intern (NSIS Project)",
    duration: "Summer Break term",
    company: "Saint Mary's University",
    country: "Halifax, NS, Canada",
    commitHash: "8a7b6c5",
    branch: "feature/smu-research",
    terminalGroup: "SMU",
    terminalDate: "August21",
    details: [
      "Nova Scotia International Student (NSIS) Project",
      "Analyzed and categorized relevant research articles and summarized finding for each theme.",
      "Collected information on the research topic and edited a book chapter for a Sociology textbook.",
      "Aided in creating a training manual for a general Scoping Review process of research to help students conduct their own research.",
    ],
  },
  {
    year: "April 2017 - June 2017",
    title: "Intern Photojournalist",
    duration: "3 Months",
    company: "MyRepública (New York Times Partner)",
    country: "Kathmandu, Nepal",
    commitHash: "f0e1d2c",
    branch: "main",
    terminalGroup: "myrep-blica",
    terminalDate: "June17",
    details: [
      "Wrote and published three articles about photography in the newspaper's segment ‘My City.’",
      "Shot and provided photographs that supplemented other features and news stories in addition to publishing 5 photo stories in the ‘My City’ segment.",
      "Contributed to articles including the ones linked here:",
      // This is now an object with text and a link
      {
        text: "Published articles:",
        link: "https://myrepublica.nagariknetwork.com/author/2138/swaraj-shrestha",
      },
      {
        text: "Additional article:",
        link: "https://myrepublica.nagariknetwork.com/news/the-hands-that-feed-photo-feature",
      },
    ],
  },
];

const Experience = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleOpenModal = (experience) => {
    setSelectedExperience(experience);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setSelectedExperience(null);
  };

  return (
    <>
      {/* Semi-transparent white layer wrapper (consistent with other sections) */}
      <div id="experience" className="bg-white/40 pt-5 pb-0">
        {/* Full-width Gradient Container */}
        <div
          className="w-full py-12 text-white"
          style={{
            backgroundImage:
              "radial-gradient(circle at bottom right, #f9731699, #7c2d1299, #112240CC)",
          }}
        >
          {/* Centered Content Container */}
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h1 className="text-4xl md:text-5xl font-bold inline-block border-b-4 border-cyan-400 pb-2">
                EXPERIENCE
              </h1>
              <p className="text-gray-400 font-mono mt-4 text-sm">
                * git log --graph --all
              </p>
            </div>

            <div className="relative">
              {/* GIT GRAPH TRACKS (Desktop) */}
              {/* Track 1: Main (White) - Right Side */}
              <div className="hidden md:block absolute top-0 left-[51%] w-0.5 h-full bg-white/30"></div>
              {/* Track 2: Feature/Academic (Cyan) - Left Side */}
              <div className="hidden md:block absolute top-0 left-[49%] w-0.5 h-full bg-cyan-400/30"></div>

              {/* MOBILE VIEW (Stacked) */}
              <div className="md:hidden space-y-8">
                {experienceData.map((item, index) => (
                  <div key={index} className="relative pl-8">
                    {/* Mobile Timeline Line */}
                    <div className="absolute top-0 left-0 w-0.5 h-full bg-white/75"></div>
                    {/* Mobile Dot */}
                    <div className="absolute top-8 -left-[7px] w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-700"></div>

                    <ExperienceCard
                      experience={item}
                      onSelect={() => handleOpenModal(item)}
                    />
                  </div>
                ))}
              </div>

              {/* DESKTOP VIEW (2-Column Dense) */}
              <div className="hidden md:flex flex-row justify-center items-start w-full">

                {/* LEFT COLUMN (Odd indices: 1, 3, 5...) */}
                <div className="w-1/2 pr-16 flex flex-col gap-8 pt-32">
                  {experienceData.map((item, index) => {
                    if (index % 2 === 0) return null; // Skip even items
                    const isMain = item.branch === 'main';
                    return (
                      <div key={index} className="relative w-full">
                        <ExperienceCard
                          experience={item}
                          onSelect={() => handleOpenModal(item)}
                        />
                        {/* Connector Logic for Left Column */}
                        {isMain ? (
                          // Connects to RIGHT Track (Main/White) - Crosses over
                          <div className="absolute top-8 -right-[4.5rem] w-[4.5rem] flex items-center justify-end z-20">
                            <div className="w-full h-px bg-white/50"></div>
                            <div className="w-3 h-3 bg-white rounded-full border-2 border-slate-900 absolute -right-[1.5px]"></div>
                          </div>
                        ) : (
                          // Connects to LEFT Track (Feature/Cyan) - Standard
                          <div className="absolute top-8 -right-16 w-16 flex items-center justify-end z-20">
                            <div className="w-full h-px bg-cyan-400/50"></div>
                            <div className="w-3 h-3 bg-cyan-400 rounded-full border-2 border-slate-900 absolute -right-[1.5px]"></div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* RIGHT COLUMN (Even indices: 0, 2, 4...) */}
                <div className="w-1/2 pl-16 flex flex-col gap-8">
                  {experienceData.map((item, index) => {
                    if (index % 2 !== 0) return null; // Skip odd items
                    const isMain = item.branch === 'main';
                    return (
                      <div key={index} className="relative w-full">
                        <ExperienceCard
                          experience={item}
                          onSelect={() => handleOpenModal(item)}
                        />
                        {/* Connector Logic for Right Column */}
                        {isMain ? (
                          // Connects to RIGHT Track (Main/White) - Standard
                          <div className="absolute top-8 -left-16 w-16 flex items-center z-20">
                            <div className="w-3 h-3 bg-white rounded-full border-2 border-slate-900 absolute -left-[1.5px]"></div>
                            <div className="w-full h-px bg-white/50"></div>
                          </div>
                        ) : (
                          // Connects to LEFT Track (Feature/Cyan) - Crosses over
                          <div className="absolute top-8 -left-[4.5rem] w-[4.5rem] flex items-center z-20">
                            <div className="w-3 h-3 bg-cyan-400 rounded-full border-2 border-slate-900 absolute -left-[1.5px]"></div>
                            <div className="w-full h-px bg-cyan-400/50"></div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <ExperienceModal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        experience={selectedExperience}
      />
    </>
  );
};

export default Experience;
