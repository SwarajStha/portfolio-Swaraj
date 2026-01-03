import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import ResumeButton from "./ResumeButton";

const Homepage = () => {
  return (
    <div id="homepage" className="w-full h-screen"
      style={{
        backgroundImage:
          "radial-gradient(circle at bottom right, rgb(76, 83, 96) 5%, rgba(201, 201, 201, 0.6), rgba(255, 255, 255, 0.6))",
      }}>
      <div className="max-w-screen-2xl m-auto h-full w-full flex flex-col justify-center items-center px-4">
        {/* Main header */}
        <h1 className="w-fit text-left text-[10vw] font-bold text-gray-800 leading-[0.9]">
          SWARAJ
          <br /> SHRESTHA
        </h1>
        {/* Sub header with animated text */}
        <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
          I'm a
          <TypeAnimation
            sequence={[
              "Developer.",
              2000,
              "Coder.",
              2000,
              "Problem Solver.",
              2000,
              "Tech Enthusiast.",
              2000,
            ]}
            wrapper="div"
            speed={40}
            cursor={true}
            style={{ fontSize: "em", paddingLeft: "5px" }}
            repeat={Infinity}
          />
        </h2>
        <div className="flex justify-between pt-6 max-w-[100px] w-full">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/swaraj-shrestha/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn className="cursor-pointer" size={25} />
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/SwarajStha"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="cursor-pointer" size={25} />
          </a>
        </div>
        <div className="flex pt-8">
          {/* Resume */}
          <ResumeButton />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
