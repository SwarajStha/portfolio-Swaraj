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
      {/* Outer container with the background image */}
      <div
        className="bg-scroll"
        style={{ backgroundImage: "url(/backgroundPPcroppedR.jpg)" }}
      >
        {/* Semi-transparent white layer */}
        <div id="experience" className="bg-white/40 pt-5 pb-5">
          {/* Main content box with the gradient */}
          <div className="max-w-[1000px] mx-auto bg-gradient-to-l from-[#f9731699] from-30% via-[#7c2d1280] via-85% to-[#11224080] py-12 text-white rounded-xl">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20">
                <h1 className="text-4xl md:text-5xl font-bold inline-block border-b-4 border-cyan-400 pb-2">
                  EXPERIENCE
                </h1>
              </div>

              <div className="relative">
                {/* The central timeline line */}
                <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-white/75 -translate-x-1/2"></div>

                {experienceData.map((item, index) => {
                  const position = index % 2 === 0 ? "right" : "left";
                  return (
                    <div
                      key={index}
                      className="relative md:flex md:justify-center md:items-start w-full mb-12"
                    >
                      {/* LEFT SIDE: Render card here if position is 'left' */}
                      {position === "left" ? (
                        <div className="w-full md:w-5/12 md:pr-12">
                          <ExperienceCard
                            experience={item}
                            onSelect={() => handleOpenModal(item)}
                          />
                        </div>
                      ) : (
                        <div className="hidden md:block w-5/12"></div> // Empty spacer
                      )}

                      {/* Middle Dot and Connector Line */}
                      {/* This container sits on top of the layout. pointer-events-none makes it "click-through" */}
                      <div className="hidden md:block absolute top-8 left-0 w-full h-full pointer-events-none">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-700"></div>
                        {/* The new horizontal line */}
                        <div
                          className={`absolute top-1.5 h-0.5 bg-white/75 w-6 
                          ${
                            position === "left"
                              ? "right-1/2 mr-3"
                              : "left-1/2 ml-3"
                          }`}
                        ></div>
                      </div>

                      {/* RIGHT SIDE: Render card here if position is 'right' */}
                      {position === "right" ? (
                        <div className="w-full md:w-5/12 md:pl-12">
                          <ExperienceCard
                            experience={item}
                            onSelect={() => handleOpenModal(item)}
                          />
                        </div>
                      ) : (
                        <div className="hidden md:block w-5/12"></div> // Empty spacer
                      )}
                    </div>
                  );
                })}
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
