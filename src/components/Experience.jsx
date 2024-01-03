import WorkItem from "./WorkItem";

const data = [
  {
    year: "January 2024",
    title: "Database Developer",
    duration: "Present",
    company: "Canadian Border Services Agency (CBSA)",
    details:
      "• Starting January 8 for second co-op term. <br>• Will work alongside the Division's Regional Business Planing Manager to design and develop database. " +
      "<br>• Create input screens, user manuels, queries, reports and implement data visualization tools to facilitate data analysis and reporting. " +
      "<br>• Details to be updated.",
  },

  {
    year: "September - December 2022, September - December 2023",
    title: "Teacher's Assistant - Introduction to Computers and Programming",
    duration: "2 terms",
    company: "Saint Mary's University",
    details:
      "• Evaluating and debugging student-generated code in Java, enhancing my expertise in algorithms. " +
      "<br>• Checking submissions by 56 students (2022) and 36 students (2023) and giving practical feedback accordingly. " +
      "<br>• Refined problem-solving skills by analyzing students’ diverse methodologies to computational problems, focusing on their use of logic, algorithms, and software design principles. ",
  },

  {
    year: "May 2022 - December 2023",
    title: "SMUworks Program Administrator",
    duration: "Co-op 4 months + continued in part-time basis",
    company: "Saint Mary's University - Career & Experential Learning",
    details:
      "•	Organizing, examining, and analyzing data for SMUworks to draw conclusions regarding the trends.<br>•	Part of the SMUworks Steering Committee to advocate for the students’ side and based on past SMUworks records. " +
      "<br>•	Oversee all tasks related to the program ensuring that the 40+ positions we fund each term runs smoothly. " +
      "<br>•	Conducted comprehensive mid-term assessments of SMUworks grant recipients and student employees funded by these grants, ensuring adherence to grant objectives and performance standards.",
  },

  {
    year: "September 2022",
    title: "Residence Assistant",
    duration: "Present",
    company: "Saint Mary's University - Residence Life",
    details:
      "•    Polished leadership skills by disseminating information by updating the residents (22-floor members (2022), 35-floor members (2023)) on the most current information regarding the university and the facilities available," +
      " organizing floor events to help the residents socialize better, bringing forth a feeling of togetherness among the floor members, and since most students are first years – nurturing growth both academically and mentally by becoming an example. " +
      "<br>•	Mentoring new student leaders.<br>•	Received 50+ hours of training.",
  },

  {
    year: "January 2023 - April 2023",
    title: "Teacher's Assistant - Discrete Mathematics",
    company: "Saint Mary's University",
    details:
      "•    Evaluated, corrected, and gave feedback to 59 students regarding their quizzes and submissions. " +
      "<br>•  Radapted my communication strategies to ensure comprehensive understanding of complex concepts among all students. This involved thoughtful reflection on teaching methodologies and tailoring explanations to meet diverse learning styles." +
      "<br>•  Polished analytics skills as students took different approaches to solve the same problem.",
  },

  {
    year: "September 2021 - April 2022",
    title: "Research Assistant",
    company: "Saint Mary's University",
    details:
      "<i>Social Sciences and Humanities Research Council COVID Partnership Engagement Grant NSIE Project</i>" +
      "<br>•	Creating a website to show the professor’s current projects, and the teams working on the projects utilizing skills in layout design and understanding of web design practices using the WIX platform." +
      "<br>•	Set up a means for the team members to communicate so progress of each task started could be tracked more accurately via the use of Trello." +
      "<br>•	Collected and analyzed raw data of interviews to organize the qualitative data gathered which allowed visualization of the amount of usable data and recognize the category in need of data.",
  },

  {
    year: "September 2021 - April 2022",
    title: "Teaching Assistant - Sociology",
    company: "Saint Mary's University",
    details:
      "•	Coached students with their projects by arranging one-on-one office hours during which time guided them through their specific issues with using the suggested software to get the outcome they wanted. " +
      "<br>•	Created a presentable guide for students to direct them on how to conduct Scoping Reviews- aiding students and other research assistants to use the guide to conduct effective reviews online. " +
      "<br>•	Created an aiding explainer video to instruct students on how to use the video editing software “VideoPad Video Editor” and alternative software, giving the students the skills and technology they needed to complete their course project.",
  },
];

const Experience = () => {
  return (
    <div
      className="bg-scroll"
      style={{ backgroundImage: "url(/backgroundPPcroppedR.jpg)" }}
    >
      <div className="bg-white/50 pt-5">
        <div
          id="experience"
          className="max-w-[1000px] m-auto md:pl-20 p-4 py-16 border bg-white"
        >
          <h1 className="bg-gray-300 py-4 text-4xl font-bold text-center text-black pt-12 justify-center item-center pb-10">
            EXPERIENCE
          </h1>
          {data.map((item, idx) => (
            <WorkItem
              key={idx}
              year={item.year}
              title={item.title}
              duration={item.duration}
              company={item.company}
              details={item.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
