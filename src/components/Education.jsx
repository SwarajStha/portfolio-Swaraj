// src/components/Education.jsx

import { useState } from "react";
import EducationCard from "./EducationCard";
import EducationModal from "./EducationModal";

// MODIFICATION 1: Converted your single object into an array of objects.
// I've used your exact university data and added the new high school data.
const educationData = [
  {
    id: "masters",
    degree: "M.Sc. in Management & Digital Technology",
    university: "Technical University of Munich (Heilbronn Campus), Germany",
    logo: "/images/TUM.png",
    dates: "October 2025",
    summaryAchievements: [
      { icon: "status", text: "2-Year Program" },
    ],
    coursesTitle: "Current Coursework",
    courses: [
      "Advanced Seminar Operations & Technology: Machine Learning",
      "Digital Finance",
      "Methods and Databases in Empirical Finance",
      "Campus Challenge: Successful Investing with AI and Large Language Models",
      "Marketing Research",
      "CEO Strategy Series",
    ],
  },
  {
    id: "uni",
    degree: "Bachelor of Computing Science & Business Administration",
    university: "Saint Mary’s University, Halifax, Canada",
    logo: "/images/SMU.png",
    dates: "September 2020 - May 2024",
    coop: "Co-operative Education Program",
    summaryAchievements: [
      { icon: "gpa", text: "High-Achievement GPA: 4.25 / 4.30" },
      { icon: "scholarship", text: "Recipient of 4 Major Scholarships" },
      { icon: "deansList", text: "Award of Academic Excellence" },
    ],
    detailedAchievements: [
      "Renewable International Entrance Scholarship – 2020, 2021, 2022, 2023",
      "Academic Achievement Scholarship Award – 2021-2022, 2022-2023",
      "MT&T Computing Science & Business Administration Scholarship Award – 2020-2021, 2022–2023, 2023-2024",
      "Faculty Union Scholarship for Academic Excellence – 2022-2023",
      "",
      "Dean’s List – 2020-2021, 2021-2022, 2022-2023",
    ],
    coursesTitle: "Relevant Coursework",
    courses: [
      "Software Engineering",
      "Data Structures & Algorithms",
      "Mobile App Development",
      "Internet Technologies & Web Programming",
      "Artificial Intelligence",
      "Digital Logic & Computer Architecture",
      "Principles of Programming Languages",
      "Applied Linear Algebra",
      "Management Information Systems",
      "Strategic Management",
      "Business Finance",
      "Planning & Control",
    ],
  },
  {
    id: "hs",
    degree: "High School Completion (A-Levels)",
    university: "Rato Bangala School, Lalitpur, Nepal",
    logo: "/images/RatoBangala.png",
    dates: "April 2007 - July 2019",
    summaryAchievements: [{ icon: "gpa", text: "Focus on STEM Curriculum" }],
    detailedAchievements: [
      "Graduated with A-Levels certification, equivalent to high school completion.",
      "Specialized in a science and technology-focused track.",
    ],
    coursesTitle: "Key Subjects",
    courses: [
      "Computer Science",
      "Mathematics",
      "Physics",
      "Business",
      "English Language",
    ],
  },
];

const Education = () => {
  // MODIFICATION 2: Added state to track WHICH education item is selected for the modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState(null);

  const handleOpenModal = (educationItem) => {
    setSelectedEducation(educationItem);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setTimeout(() => setSelectedEducation(null), 300);
  };

  return (
    <>
      <div id="education" className="bg-white/40 pt-5 pb-0">
        {/* I've updated this line to use the more subtle gradient we decided on */}
        <div
          className="w-full py-12 text-white"
          style={{
            backgroundImage:
              "radial-gradient(circle at bottom right, rgb(113, 72, 61), #11224080 75%, rgba(201, 201, 201, 0.6))",
          }}
        >
          <div className="max-w-[1240px] mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold inline-block border-b-4 border-cyan-400 pb-2">
                EDUCATION
              </h1>
            </div>

            {/* MODIFICATION 3: Looping over the data array to render multiple cards */}
            <div className="px-4 grid grid-cols-1 lg:grid-cols-3 gap-0">
              {educationData.map((eduItem, index) => (
                <EducationCard
                  key={eduItem.id}
                  data={eduItem}
                  onOpenModal={() => handleOpenModal(eduItem)}
                  isFirst={index === 0}
                  isLast={index === educationData.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <EducationModal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        data={selectedEducation}
      />
    </>
  );
};

export default Education;
