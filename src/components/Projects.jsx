import ProjectItem from "./ProjectItem";
import ConservationImg from "../assets/conservation-site.png";
import FaceImg from "../assets/face(1).png";
import ClassPhotoImg from "../assets/KotlinApp.jpg";
import MiqmaqImg from "../assets/miqmaq(1).png";
import PortfolioImg from "../assets/portfolio-Swaraj.png";

const Projects = () => {
  return (
    <div
      className="bg-scroll"
      style={{ backgroundImage: "url(/backgroundPPcroppedR.jpg)" }}
    >
      <div id="projects" className="bg-white/50 pt-5">
        <div className="pt-5 bg-white max-w-[1000px] m-auto p-4 py-16 justify-center item-center h-full w-full flex flex-col">
          <h1 className="bg-gray-300 py-4 text-4xl font-bold text-center text-black pt-12 justify-center item-center pb-10 mb-5 item-center">
            PROJECTS
          </h1>
          <div className="flex sm:text-xl text-md text-gray-800 justify-center">
            <h3 className="text-center py-8">Personal Projects</h3>
          </div>
          <div className="ml-5 mr-5 grid sm:grid-cols-3 gap-9">
            <ProjectItem
              img={ClassPhotoImg}
              title="Class Photo Scheduler (in progress)"
            />
            <ProjectItem img={FaceImg} title="Online Class Face-Tracker" />
            <ProjectItem img={PortfolioImg} title="online Portfolio" />
          </div>
          <div className="flex sm:text-xl text-md text-gray-800 justify-center">
            <h3 className="text-center py-8 mt-5">Experential Learning</h3>
          </div>
          <div className="ml-8 mr-8 grid sm:grid-cols-2 gap-12">
            <ProjectItem
              img={ConservationImg}
              title="St. Margaret's Bay Area - Conservation Site"
            />
            <ProjectItem img={MiqmaqImg} title="Mi'kmaq Language Game" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
