import { useState, useEffect } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

// Helper for typewriter effect
const Typewriter = ({ text, className, delay = 0 }) => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, 50 + Math.random() * 30); // Random typing speed

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    // Simple wait for delay before starting
    const [startTyping, setStartTyping] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setStartTyping(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    if (!startTyping) return <span className={className}></span>;

    return <span className={className}>{currentText}</span>;
};

import Draggable from "react-draggable";

// Icon Imports
import pythonIcon from "../assets/Python.png";
import reactIcon from "../assets/reactL.png";
import jsIcon from "../assets/JavascriptV2.png";
import kotlinIcon from "../assets/Kotlin.png";
import javaIcon from "../assets/java.png";
import sqlIcon from "../assets/database.png";
import vbaIcon from "../assets/VBA.png";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css-3.png";
import vbIcon from "../assets/VB.png";
import lispIcon from "../assets/common-lisp.png";
import tsIcon from "../assets/TypeScript.png";
import tailwindIcon from "../assets/TailwindV2.png";
import bootstrapIcon from "../assets/bootstrap.png";
import springIcon from "../assets/SpringBoot.png";
import officeIcon from "../assets/office.png";
import googleIcon from "../assets/google.png";
import windowsIcon from "../assets/windows.png";
import linuxIcon from "../assets/linux.png";
import azureIcon from "../assets/Azure.png";
import digitalOceanIcon from "../assets/DigitalOcean.png";
import dockerIcon from "../assets/Docker.png";
import k8sIcon from "../assets/Kubernetes.png";
import githubIcon from "../assets/github.png";
import figmaIcon from "../assets/Figma.png";
import adobeIcon from "../assets/Adobe.png";


const iconMap = {
    "Python": pythonIcon,
    "React": reactIcon,
    "JavaScript": jsIcon,
    "Kotlin": kotlinIcon,
    "Java": javaIcon,
    "SQL": sqlIcon,
    "VBA": vbaIcon,
    "HTML": htmlIcon,
    "CSS": cssIcon,
    "VB.NET": vbIcon,
    "LISP": lispIcon,
    "TypeScript": tsIcon,
    "Tailwind CSS": tailwindIcon,
    "Bootstrap": bootstrapIcon,
    "SpringBoot": springIcon,
    "MS Office": officeIcon,
    "Google Suite": googleIcon,
    "Windows": windowsIcon,
    "Linux": linuxIcon,
    "Azure": azureIcon,
    "Digital Ocean": digitalOceanIcon,
    "Docker": dockerIcon,
    "Kubernetes": k8sIcon,
    "GitHub": githubIcon,
    "Figma": figmaIcon,
    "Adobe Suite": adobeIcon
};

const TerminalProficiency = ({ title, data, bgColors = {} }) => {
    // We don't flatten anymore, we iterate over sections.

    if (!data || data.length === 0) return null;

    const [expandedItems, setExpandedItems] = useState({});
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Draggable Snap-Back Logic
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);

    const handleStart = () => {
        setIsDragging(true);
    };

    const handleDrag = (e, data) => {
        setPosition({ x: data.x, y: data.y });
    };

    // Snap back to (0,0) on stop
    const handleStop = () => {
        setIsDragging(false);
        setPosition({ x: 0, y: 0 });
    };

    const toggleItem = (uniqueId) => {
        setExpandedItems((prev) => ({
            ...prev,
            [uniqueId]: !prev[uniqueId],
        }));
    };

    const getProgressBar = (percent = 90) => {
        const totalChars = 20;
        const filledChars = Math.round((percent / 100) * totalChars);
        const bar = "=".repeat(filledChars) + ">";
        return `[${bar.padEnd(totalChars + 1, " ")}] ${percent}%`;
    };



    return (
        <Draggable
            handle=".terminal-header"
            position={position}
            onStart={handleStart}
            onDrag={handleDrag}
            onStop={handleStop}
        >
            <div
                className={`w-full max-w-[900px] mx-auto my-10 rounded-lg overflow-hidden shadow-2xl bg-[#0f111a]/90 backdrop-blur-md font-mono text-sm md:text-base border border-gray-800 relative z-10 
                ${!isDragging ? "transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" : ""}`}
            >
                {/* Window Title Bar */}
                <div className="terminal-header bg-[#1a1b26] px-4 py-2 flex items-center gap-2 border-b border-gray-800 cursor-move">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div
                        className="w-3 h-3 rounded-full bg-[#ffbd2e] cursor-pointer hover:bg-yellow-400 transition-colors"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        title={isCollapsed ? "Expand" : "Collapse"}
                    ></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    <div className="flex-1 flex justify-center text-xs font-sans select-none">
                        <a
                            href="#homepage"
                            className="text-gray-400 opacity-60 hover:opacity-100 hover:text-blue-300 hover:underline decoration-blue-300/50 transition-all duration-200 cursor-pointer"
                            title="cd ~ (Back to Home)"
                        >
                            swaraj@portfolio: ~/skills
                        </a>
                    </div>
                </div>

                {/* Terminal Content */}
                <div className="p-4 md:p-6 text-gray-300 space-y-2 cursor-default">
                    {/* Iterate over each data section to create a new "command block" */}
                    {data?.map((section, sectionIndex) => (
                        <div key={sectionIndex} className={isCollapsed ? "mb-2" : "mb-8"}>
                            {/* Command Prompt for this Section */}
                            <div className="flex flex-wrap gap-0 mb-4 font-bold items-center min-h-6">
                                <span className="text-green-400 mr-2">swaraj@portfolio:~$</span>
                                <Typewriter text="ls" className="text-blue-400" delay={sectionIndex * 200 + 500} />

                                {/* Part 1: Flags and Expand */}
                                <Typewriter
                                    text=" -l --expand--"
                                    className="text-gray-400"
                                    delay={sectionIndex * 200 + 800}
                                />

                                {/* Part 2: The Title (Highlighted) */}
                                <Typewriter
                                    text={section.title}
                                    className="text-gray-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]"
                                    delay={sectionIndex * 200 + 800 + (14 * 50) + 200}
                                />

                                {/* Part 3: Closing Slash */}
                                <Typewriter
                                    text="-/"
                                    className="text-gray-400"
                                    delay={sectionIndex * 200 + 800 + (14 * 50) + 200 + (section.title.length * 50) + 200}
                                />
                            </div>

                            {!isCollapsed && (
                                <>
                                    {/* Total Usage Line (Optional, or per section) */}
                                    <div className="text-gray-500 mb-2">total {section.technologies.length * 4}</div>

                                    {/* File List for this Section */}
                                    <div className="flex flex-col gap-1">
                                        {section.technologies.map((tech) => {
                                            const uniqueId = `${section.category}-${tech.name}`;

                                            // Use custom proficiency or default to 80
                                            const proficiency = tech.proficiency || 80;

                                            // Resolve Icon
                                            const iconSrc = iconMap[tech.name];

                                            return (
                                                <div key={uniqueId} className="flex flex-col">
                                                    {/* Row 1: The 'Directory' Entry */}
                                                    <div
                                                        className="group flex items-center gap-2 md:gap-4 hover:bg-white/10 p-2 rounded-md cursor-pointer transition-all duration-200 ease-in-out border border-transparent hover:border-white/5"
                                                        onClick={() => toggleItem(uniqueId)}
                                                    >
                                                        {/* Toggle Icon & Permissions */}
                                                        <div className="flex items-center gap-2 min-w-[140px] md:min-w-[180px]">
                                                            <span className="text-gray-500 text-xs w-4 group-hover:text-gray-300 transition-colors">
                                                                {expandedItems[uniqueId] ? (
                                                                    <FaChevronDown />
                                                                ) : (
                                                                    <FaChevronRight />
                                                                )}
                                                            </span>
                                                            <span className="text-purple-400 text-xs md:text-sm group-hover:text-purple-300 transition-colors duration-200">
                                                                drwxr-xr-x
                                                            </span>
                                                            {/* Category as Group Name */}
                                                            <span className={`text-xs hidden sm:inline w-20 truncate opacity-70 ${bgColors[section.category] || 'text-gray-500'} group-hover:opacity-100 transition-opacity`}>
                                                                {section.category}
                                                            </span>
                                                        </div>

                                                        {/* Size/Date */}
                                                        <div className="text-gray-500 text-xs hidden md:block min-w-[80px] group-hover:text-gray-300 transition-colors">
                                                            4096
                                                        </div>
                                                        <div className="text-gray-500 text-xs hidden md:block min-w-[100px] group-hover:text-gray-300 transition-colors">
                                                            {tech.date || "Oct 25 10:24"}
                                                        </div>

                                                        {/* Name with Icon */}
                                                        <div className="text-blue-400 font-bold flex-1 truncate group-hover:text-blue-300 group-hover:drop-shadow-[0_0_10px_rgba(96,165,250,0.8)] transition-all duration-200 flex items-center">
                                                            {iconSrc && (
                                                                <img
                                                                    src={iconSrc}
                                                                    alt={tech.name}
                                                                    className="w-4 h-4 mr-2 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                                                />
                                                            )}
                                                            <span>{tech.name}/</span>
                                                        </div>
                                                    </div>

                                                    {/* Row 2: Expanded Content */}
                                                    {expandedItems[uniqueId] && (
                                                        <div className="pl-4 md:pl-10 py-2 border-l-2 border-gray-700 ml-3 md:ml-5 my-1 space-y-1 text-gray-400">

                                                            {/* Proficiency Bar */}
                                                            <div className="flex items-center flex-wrap gap-2">
                                                                <span className="text-gray-500">|--&gt;</span>
                                                                <span className="text-yellow-300">Proficiency:</span>
                                                                <span className="text-green-400 whitespace-pre font-mono text-xs md:text-sm">
                                                                    {getProgressBar(proficiency)}
                                                                </span>
                                                            </div>

                                                            {/* Description */}
                                                            <div className="flex items-start gap-2">
                                                                <span className="text-gray-500">|--&gt;</span>
                                                                <span className="text-cyan-300">Description:</span>
                                                                <span className="text-[#ce9178]">"{tech.description}"</span>
                                                            </div>

                                                            {/* Category Label (Explicit) */}
                                                            <div className="flex items-start gap-2">
                                                                <span className="text-gray-500">|--&gt;</span>
                                                                <span className="text-pink-300">Category:</span>
                                                                <span className="text-gray-300">{section.title}</span>
                                                            </div>

                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </>
                            )}
                        </div>
                    ))}

                    {/* Bottom Prompt */}
                    <div className="mt-6 flex items-center gap-2">
                        <span className="text-green-400">swaraj@portfolio:~$</span>
                        <span className="animate-pulse bg-gray-400 w-2 h-4 block"></span>
                    </div>
                </div>
            </div>
        </Draggable>
    );
};

export default TerminalProficiency;
