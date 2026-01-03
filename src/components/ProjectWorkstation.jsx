import { useState, useEffect } from "react";
import { FaPlay, FaStop, FaAndroid, FaTerminal, FaExpand, FaChevronRight } from "react-icons/fa";

const S25Emulator = ({ img, title, images = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const hasCarousel = images && images.length > 0;
    const displayImage = hasCarousel ? images[currentIndex] : img;

    const handleNext = (e) => {
        if (!hasCarousel) return;
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    return (
        /* S25 "Titanium" Frame: complex shadows and gradients for realism */
        <div
            className="relative mx-auto h-[600px] w-[300px] rounded-[2.5rem] flex flex-col overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-[1.02]"
            style={{
                // Titanium/Dark Metal Frame Gradient
                background: 'linear-gradient(145deg, #3a3a40, #1a1a1a)',
                // Complex Shadow Layering:
                // 1. Deep Drop Shadow (Depth)
                // 2. Subtle Outer Ring (Edge Highlight)
                // 3. Inner Shadow (Bezel Depth)
                boxShadow: `
                    0 30px 60px -12px rgba(0, 0, 0, 0.9),
                    0 0 0 1px rgba(255, 255, 255, 0.1),
                    inset 0 0 20px rgba(0,0,0,1)
                `,
                padding: '10px', // Represents the bezel thickness
            }}
        >
            {/* Punch-hole Camera */}
            <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full z-20 shadow-[inset_0_0_4px_rgba(255,255,255,0.2)]"></div>

            {/* Screen Content Container */}
            <div className="h-full w-full bg-black overflow-hidden relative rounded-[2rem] shadow-inner border border-gray-800">

                {/* Screen Gloss/Reflection Overlay (Glass Effect) */}
                <div className="absolute inset-0 pointer-events-none z-20 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-60 rounded-[2rem]"></div>

                <img
                    src={displayImage}
                    alt={title}
                    className="w-full h-full object-cover transition-opacity duration-300"
                />

                {/* Live Demo Badge (Overlay) */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 pointer-events-none z-10 shadow-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                    <span className="text-white text-xs font-mono tracking-wide">simulated app running</span>
                </div>

                {/* Right Click/Swipe Area for Carousel */}
                {hasCarousel && (
                    <div
                        onClick={handleNext}
                        className="absolute top-0 right-0 h-full w-1/3 z-30 cursor-pointer group flex items-center justify-end pr-2 hover:bg-gradient-to-l hover:from-black/40 hover:to-transparent transition-all"
                        title="Beside / Next Image"
                    >
                        <div className="bg-black/50 p-2 rounded-full text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110">
                            <FaChevronRight size={16} />
                        </div>
                    </div>
                )}
            </div>

            {/* Side Buttons (Volume/Power) - 3D Styled */}
            <div className="absolute top-24 -right-[2px] w-[4px] h-10 bg-[#2a2a2d] rounded-r-sm shadow-md"></div>
            <div className="absolute top-40 -right-[2px] w-[4px] h-16 bg-[#2a2a2d] rounded-r-sm shadow-md"></div>
        </div>
    );
};

const TerminalDebugger = ({ project, onExpand }) => {
    const [logs, setLogs] = useState([
        { type: 'INFO', msg: 'Starting emulator...' },
        { type: 'DEBUG', msg: 'Loading class data...' },
    ]);

    useEffect(() => {
        const sequence = [
            { type: 'DEBUG', msg: 'Initializing Room Database...', delay: 800 },
            { type: 'DEBUG', msg: 'Pre-populating CourseDAO...', delay: 1600 },
            { type: 'SUCCESS', msg: 'Local SQLite Connected', delay: 2400 },
            { type: 'INFO', msg: 'Binding ViewModel Providers...', delay: 3200 },
            { type: 'SUCCESS', msg: 'MainActivity Rendered', delay: 4000 },
            { type: 'WATCH', msg: 'Observing LiveData changes...', delay: 4800 },
        ];

        let timeouts = [];
        sequence.forEach(({ type, msg, delay }) => {
            const timeout = setTimeout(() => {
                setLogs(prev => [...prev.slice(-5), { type, msg }]);
            }, delay);
            timeouts.push(timeout);
        });

        return () => timeouts.forEach(clearTimeout);
    }, []);

    const getLogColor = (type) => {
        switch (type) {
            case 'INFO': return 'text-blue-400';
            case 'DEBUG': return 'text-gray-400';
            case 'SUCCESS': return 'text-green-400';
            case 'WATCH': return 'text-yellow-400';
            default: return 'text-gray-300';
        }
    };

    return (
        <div className="w-full max-w-xl bg-[#0f111a]/90 backdrop-blur-md rounded-lg shadow-2xl border border-gray-800 overflow-hidden font-mono text-sm">
            {/* Title Bar */}
            <div className="bg-[#1a1b26] px-4 py-2 flex items-center justify-between border-b border-gray-800">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"></div>
                </div>
                <div className="text-gray-400 text-xs flex items-center gap-2">
                    <FaTerminal />
                    swaraj@portfolio:~/projects/class-scheduler
                </div>
                <div className="w-10"></div> {/* Spacer for centering */}
            </div>

            {/* Terminal Content */}
            <div className="p-6 text-gray-300 space-y-4">
                <div>
                    <span className="text-purple-400">Project:</span> {project.title}
                </div>

                <div>
                    <span className="text-purple-400">Status:</span>
                    <span className="ml-2 text-green-400 font-bold">[ACTIVE]</span>
                    <span className="ml-2 text-gray-500">- Passing Build</span>
                </div>

                <div>
                    <span className="text-purple-400">Technologies:</span>
                    <div className="mt-2 flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                            <span key={i} className="px-2 py-1 bg-gray-800 text-cyan-400 rounded text-xs border border-gray-700">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-700/50">
                    {logs.map((log, i) => (
                        <div key={i} className="mb-1">
                            <span className={`font-bold ${getLogColor(log.type)}`}>[{log.type}]</span>{' '}
                            <span className="text-gray-400">{log.msg}</span>
                        </div>
                    ))}
                    <div className="animate-pulse text-cyan-500">_</div>
                </div>

                {/* Faux Controls */}
                <div className="mt-6 flex justify-end">
                    <button
                        onClick={onExpand}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-cyan-400 border border-slate-600 rounded transition-colors shadow-lg shadow-black/20"
                    >
                        <FaExpand size={10} /> Expand
                    </button>
                </div>
            </div>
        </div>
    );
};

const ProjectWorkstation = ({ project, onExpand }) => {
    // Specific images for the Class Photo Scheduler project
    const classSchedulerImages = [
        "/images/Class_Scheduler.png",
        "/images/Class_Scheduler(0).png",
        "/images/Class_Scheduler(1).png",
        "/images/Class_Scheduler(2).png",
        "/images/Class_Scheduler(3).png",
        "/images/Class_Scheduler(4).png",
        "/images/Class_Scheduler(5).png",
        "/images/Class_Scheduler(6).png",
        "/images/Class_Scheduler(7).png",
        "/images/Class_Scheduler(8).png",
    ];

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 py-10 px-4">
            {/* Left: Phone Emulator (Floating) */}
            <div className="relative group perspective-1000">
                <div className="transform transition-transform duration-500 group-hover:rotate-y-6 group-hover:rotate-x-6">
                    <S25Emulator
                        img={project.img}
                        title={project.title}
                        images={project.id === "proj1" ? classSchedulerImages : []}
                    />
                </div>
                {/* Floor reflection/shadow */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-4 bg-black/20 blur-xl rounded-full"></div>
            </div>

            {/* Right: Terminal Debugger */}
            <div className="w-full max-w-xl z-10">
                <TerminalDebugger project={project} onExpand={onExpand} />
            </div>
        </div>
    );
};

export default ProjectWorkstation;
