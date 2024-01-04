import React from "react";
import { useState } from "react";
import { AiOutlineHome, AiOutlineMenu, AiOutlineProject } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import { PiGraduationCap } from "react-icons/pi";
import { BsBriefcase } from "react-icons/bs";

const Navbar = () => {
  // State to control the visibility of the navigation menu
  const [nav, setNav] = useState(false);

  // Handler for click event on the menu icon
  const handleNav = () => {
    // Toggle the visibility of the navigation menu when the menu icon is clicked
    setNav(!nav);
  };

  return (
    <div>
      {/* Menu icon that opens the navigation when clicked */}
      <AiOutlineMenu
        onClick={handleNav}
        className="fixed top-4 right-4 z-[99] md:hidden pointer-events-auto"
      />

      {/* Navigation menu that appears when 'nav' is true */}
      {nav ? (
        <div
          className="fixed w-full h-screen bg-white/90 flex
                        flex-col justify-center items-center z-20"
        >
          {/* Home link */}
          <a
            href="#homepage"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg
                            bg-shadow-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            onClick={() => setNav(false)}
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>

          {/* Education */}
          <a
            href="#education"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg
                            bg-shadow-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            onClick={() => setNav(false)}
          >
            <PiGraduationCap size={20} />
            <span className="pl-4">Education</span>
          </a>

          {/* Technologies */}
          <a
            href="#technologies"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg
                            bg-shadow-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            onClick={() => setNav(false)}
          >
            <FaCode size={20} />
            <span className="pl-4">Experience</span>
          </a>

          {/* Experience */}
          <a
            href="#experience"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg
                            bg-shadow-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            onClick={() => setNav(false)}
          >
            <BsBriefcase size={20} />
            <span className="pl-4">Experiential Learning</span>
          </a>

          {/* Projects */}
          <a
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg
                            bg-shadow-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            onClick={() => setNav(false)}
          >
            <GrProjects size={20} />
            <span className="pl-4">Projects</span>
          </a>

          {/* Volunteer */}
          <a
            href="#volunteer"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg
                            bg-shadow-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            onClick={() => setNav(false)}
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Volunteer</span>
          </a>

          {/* About */}
          <a
            href="#about"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg
                            bg-shadow-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            onClick={() => setNav(false)}
          >
            <BsPerson size={20} />
            <span className="pl-4">About</span>
          </a>
        </div>
      ) : null}

      {/* Navigation menu for medium and large screens */}
      <div className="md:block hidden fixed top-[25%] z-10">
        {/* Container for navigation links */}
        <div className="flex flex-col">
          {/* Home link */}
          <a
            href="#homepage"
            title="Home"
            className="rounded-full shadow-lg 
                        bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={40} />
          </a>

          {/* Education */}
          <a
            href="#education"
            title="Education"
            className="rounded-full shadow-lg 
                        bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <PiGraduationCap size={40} />
          </a>

          {/* Technologies */}
          <a
            href="#technologies"
            title="Technologies"
            className="rounded-full shadow-lg 
                        bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <FaCode size={40} />
          </a>

          {/* Experience*/}
          <a
            href="#experience"
            title="Experience"
            className="rounded-full shadow-lg 
                        bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <BsBriefcase size={40} />
          </a>

          {/* Projects */}
          <a
            href="#projects"
            title="Projects"
            className="rounded-full shadow-lg 
                        bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <GrProjects size={40} />
          </a>

          {/* Volunteer */}
          <a
            href="#volunteer"
            title="Volunteer"
            className="rounded-full shadow-lg 
                        bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineProject size={40} />
          </a>

          {/* About */}
          <a
            href="#about"
            title="About"
            className="rounded-full shadow-lg 
                        bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <BsPerson size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
