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
      style={{ backgroundImage: "url(/backgroundPPcropped.jpg)" }}
    >
      <div id="projects" className="bg-white/40 pt-5">
        <div className="pt-5 bg-white max-w-[1000px] m-auto p-4 py-16 justify-center item-center h-full w-full flex flex-col">
          <h1 className="bg-gray-300 py-4 text-5xl font-bold text-center text-white pt-12 justify-center item-center pb-10 mb-5 item-center">
            PROJECTS
          </h1>
          <div className="flex sm:text-xl text-lg text-gray-800 justify-center">
            <h2 className="text-center py-8">Personal Projects</h2>
          </div>
          <div className="ml-5 mr-5 grid sm:grid-cols-3 gap-9">
            <ProjectItem
              img={ClassPhotoImg}
              title="Class Photo Scheduler (in progress)"
              link=""
            />
            <ProjectItem
              img={FaceImg}
              title="Online Class Face-Tracker"
              link="https://github.com/SwarajStha/faceTrack"
            />
            <ProjectItem
              img={PortfolioImg}
              title="Online Portfolio (continuously developed)"
              link="https://github.com/SwarajStha/portfolio-Swaraj"
            />
          </div>
          <div className="flex sm:text-xl text-lg text-gray-800 justify-center pt-5">
            <h2 className="text-center py-8 mt-5">Experential Learning</h2>
          </div>
          <div className="ml-10 mr-10 grid sm:grid-cols-2 gap-12">
            <ProjectItem
              img={ConservationImg}
              title="St. Margaret's Bay Area - Conservation Site"
              link="https://github.com/SwarajStha/conservation-site"
            />
            <ProjectItem
              img={MiqmaqImg}
              title="Mi'kmaq Language Game"
              link=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
