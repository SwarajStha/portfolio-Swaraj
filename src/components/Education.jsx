import { useState } from "react";

import EducationCard from "./EducationCard";
import EducationModal from "./EducationModal";

// A single, organized object for all your education data
const educationData = {
  degree: "Bachelor of Computing Science & Business Administration",
  university: "Saint Mary’s University, Halifax NS",
  logo: "/images/SMU.png",
  dates: "September 2020 - May 2024",
  coop: "Co-operative Education Program",
  // Summary for the main card view
  summaryAchievements: [
    { icon: "gpa", text: "High-Achievement GPA: 4.25 / 4.30" },
    { icon: "scholarship", text: "Recipient of 4 Major Scholarships" },
    { icon: "deansList", text: "Award of Academic Excellence" },
  ],
  // Details for the pop-up modal
  detailedAchievements: [
    "Renewable International Entrance Scholarship – 2020, 2021, 2022, 2023",
    "Academic Achievement Scholarship Award – 2021-2022, 2022-2023",
    "MT&T Computing Science & Business Administration Scholarship Award – 2020-2021, 2022–2023, 2023-2024",
    "Faculty Union Scholarship for Academic Excellence – 2022-2023",
    "",
    "Dean’s List – 2020-2021, 2021-2022, 2022-2023",
  ],
  relevantCourses: [
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
    "Planning & Control"
  ],
};

const Education = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

return (
  <>
    <div
      className="bg-scroll"
      style={{ backgroundImage: "url(/backgroundPPcroppedR.jpg)" }}
    >
      <div id="education" className="bg-white/40 pt-5">
        <div className="max-w-[1000px] mx-auto bg-gradient-to-r from-[#112240] via-orange-900/40 to-orange-600/80 py-12 text-white rounded-xl">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold inline-block border-b-4 border-cyan-400 pb-2">
              EDUCATION
            </h1>
          </div>

          <div className="px-4">
            <EducationCard
              data={educationData}
              onOpenModal={() => setModalIsOpen(true)}
            />
          </div>

        </div>

        <EducationModal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          data={educationData}
        />
      </div>
    </div>
  </>
);
};

export default Education;
