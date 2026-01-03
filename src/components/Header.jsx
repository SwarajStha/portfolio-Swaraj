import React, { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { PiGraduationCap } from "react-icons/pi";
import { FaCode } from "react-icons/fa";
import { BsBriefcase, BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { ImCamera } from "react-icons/im";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [nav, setNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNav = () => {
        setNav(!nav);
    };

    const navLinks = [
        { id: "homepage", name: "Home", icon: AiOutlineHome },
        { id: "education", name: "Education", icon: PiGraduationCap },
        { id: "experience", name: "Experience", icon: BsBriefcase },
        { id: "projects", name: "Projects", icon: GrProjects },
        { id: "technologies", name: "Technologies", icon: FaCode },
        { id: "photography", name: "Photography", icon: ImCamera },
        { id: "about", name: "About", icon: BsPerson },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled || nav
                ? "bg-black/80 backdrop-blur-md py-4 shadow-lg"
                : "bg-transparent py-6"
                }`}
        >
            <div className="flex justify-between min-[850px]:justify-center items-center px-4 w-full">
                {/* Mobile Hamburger Menu Icon */}
                <div
                    onClick={handleNav}
                    className="min-[850px]:hidden cursor-pointer z-[60] ml-auto p-2"
                >
                    <div className="space-y-1.5">
                        <span className={`block w-8 h-0.5 bg-current transition-transform duration-300 ${nav ? 'rotate-45 translate-y-2' : ''} ${isScrolled || nav ? 'bg-white' : 'bg-gray-800'}`}></span>
                        <span className={`block w-8 h-0.5 bg-current transition-opacity duration-300 ${nav ? 'opacity-0' : ''} ${isScrolled || nav ? 'bg-white' : 'bg-gray-800'}`}></span>
                        <span className={`block w-8 h-0.5 bg-current transition-transform duration-300 ${nav ? '-rotate-45 -translate-y-2' : ''} ${isScrolled || nav ? 'bg-white' : 'bg-gray-800'}`}></span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden min-[850px]:flex justify-center items-center flex-wrap gap-4 min-[850px]:gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={`group flex items-center gap-1 text-sm min-[850px]:text-base font-medium transition-colors duration-200 ${isScrolled
                                ? "text-gray-200 hover:text-cyan-400"
                                : "text-gray-800 hover:text-black"
                                }`}
                        >
                            <span className="w-[10px] overflow-hidden inline-flex justify-start text-current opacity-70 group-hover:opacity-100 transition-opacity">
                                <link.icon size={20} />
                            </span>
                            <span>{link.name}</span>
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {nav ? (
                <div className="fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-xl flex flex-col justify-center items-center z-40 transition-opacity duration-300">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={() => setNav(false)}
                            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-white/10 m-2 p-4 cursor-pointer hover:scale-105 transition-transform duration-200 text-gray-200 hover:text-cyan-400"
                        >
                            <link.icon size={20} />
                            <span className="pl-4 text-xl">{link.name}</span>
                        </a>
                    ))}
                </div>
            ) : null}

            {!nav && (
                <div className="absolute top-4 right-4 min-[850px]:hidden z-50 p-2" onClick={handleNav}>
                    <div className="space-y-1.5">
                        <span className={`block w-6 h-0.5 ${isScrolled ? 'bg-white' : 'bg-gray-800'}`}></span>
                        <span className={`block w-6 h-0.5 ${isScrolled ? 'bg-white' : 'bg-gray-800'}`}></span>
                        <span className={`block w-6 h-0.5 ${isScrolled ? 'bg-white' : 'bg-gray-800'}`}></span>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
