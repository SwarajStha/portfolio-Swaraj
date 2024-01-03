import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Homepage = () => {
  return (
    <div id="homepage">
      <img
        className="w-full h-screen object-cover object-left scale"
        src="backgroundPPcropped.jpg"
        alt="Image location moved"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[720px] m-auto h-full w-full flex flex-col justify-center xl:items-start items-center">
          {/* Main header */}
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I am Swaraj Shrestha
          </h1>
          {/* Sub header with animated text */}
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "Coder",
                2000,
                "Problem Solver",
                2000,
                "Tech Enthusiast",
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
              href="https://www.linkedin.com/in/swaraj-shrestha-0b7a5a1b0/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn className = "cursor-pointer" size = {25}/>
            </a>
            {/* GitHub */}
            <a href="">
                <FaGithub className = "cursor-pointer" size = {25}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
