import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaChevronRight, FaArrowRight } from "react-icons/fa";

/**
 * Phone mockup: titanium frame + screen carousel.
 * Auto-advances screenshots; click the right edge to skip ahead.
 */
const PhoneMockup = ({ img, title, images = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const hasCarousel = images && images.length > 1;
    const displayImage = hasCarousel ? images[currentIndex] : img;

    useEffect(() => {
        if (!hasCarousel) return;
        const timer = setInterval(
            () => setCurrentIndex((prev) => (prev + 1) % images.length),
            4000
        );
        return () => clearInterval(timer);
    }, [hasCarousel, images.length]);

    const handleNext = (e) => {
        if (!hasCarousel) return;
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <div
            className="relative flex h-[480px] w-[240px] flex-col overflow-hidden rounded-[2.5rem] sm:h-[560px] sm:w-[280px]"
            style={{
                background: "linear-gradient(145deg, #3a3a40, #1a1a1a)",
                boxShadow: `
                    0 40px 80px -12px rgba(0, 0, 0, 0.9),
                    0 0 0 1px rgba(255, 255, 255, 0.1),
                    inset 0 0 20px rgba(0,0,0,1)
                `,
                padding: "10px",
            }}
        >
            {/* Punch-hole camera */}
            <div className="absolute top-5 left-1/2 z-20 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-black shadow-[inset_0_0_4px_rgba(255,255,255,0.2)]"></div>

            {/* Screen */}
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-gray-800 bg-black shadow-inner">
                <div className="pointer-events-none absolute inset-0 z-20 rounded-[2rem] bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-60"></div>

                <img
                    src={displayImage}
                    alt={title}
                    className="h-full w-full object-cover transition-opacity duration-300"
                />

                {/* Carousel dots */}
                {hasCarousel && (
                    <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
                        {images.map((_, i) => (
                            <span
                                key={i}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? "w-4 bg-white/90" : "w-1.5 bg-white/40"}`}
                            />
                        ))}
                    </div>
                )}

                {/* Click area to advance */}
                {hasCarousel && (
                    <div
                        onClick={handleNext}
                        className="group absolute top-0 right-0 z-30 flex h-full w-1/3 cursor-pointer items-center justify-end pr-2 transition-all hover:bg-gradient-to-l hover:from-black/40 hover:to-transparent"
                        title="Next screenshot"
                    >
                        <div className="rounded-full bg-black/50 p-2 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                            <FaChevronRight size={14} />
                        </div>
                    </div>
                )}
            </div>

            {/* Side buttons */}
            <div className="absolute top-24 -right-[2px] h-10 w-[4px] rounded-r-sm bg-[#2a2a2d] shadow-md"></div>
            <div className="absolute top-40 -right-[2px] h-16 w-[4px] rounded-r-sm bg-[#2a2a2d] shadow-md"></div>
        </div>
    );
};

/**
 * Featured project panel, tamalsen.dev-style: a thin outlined frame with
 * project copy on the left and a tilted phone that floats over / breaks out
 * of the frame on the right, drifting with scroll (parallax).
 */
const ProjectWorkstation = ({ project, onExpand }) => {
    const panelRef = useRef(null);

    // Parallax: phone drifts up and straightens slightly as you scroll past
    const { scrollYProgress } = useScroll({
        target: panelRef,
        offset: ["start end", "end start"],
    });
    const phoneY = useTransform(scrollYProgress, [0, 1], [70, -70]);
    const phoneRotate = useTransform(scrollYProgress, [0, 1], [22, 10]);

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
    const images = project.id === "proj1" ? classSchedulerImages : project.images || [];

    return (
        <div ref={panelRef} className="relative">
            {/* Outlined frame */}
            <div className="relative overflow-visible rounded-sm border-2 border-accent-pink/80 shadow-[0_0_60px_-20px_rgba(225,29,116,0.35)]">
                <div className="grid grid-cols-1 gap-8 p-7 sm:p-10 lg:grid-cols-2 lg:gap-4 lg:p-14">
                    {/* Left: copy */}
                    <div className="relative z-10 flex flex-col justify-center">
                        <span className="font-mono text-sm tracking-widest text-accent-pink">
                            Featured Project
                        </span>
                        <h3 className="font-display mt-3 text-3xl font-bold text-white md:text-5xl">
                            {project.title}
                        </h3>
                        <p className="mt-5 max-w-md leading-relaxed text-slate-400">
                            A native Android academic organizer — course scheduling,
                            photo note-taking and a filterable gallery in one Material 3
                            app, built on MVVM + Room.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {project.tech?.slice(0, 5).map((t, i) => (
                                <span
                                    key={i}
                                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-slate-400"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="mt-8">
                            <button
                                onClick={onExpand}
                                className="group inline-flex items-center gap-2 rounded bg-accent-violet px-7 py-3 font-mono text-sm font-semibold text-ink-950 transition-all duration-300 hover:bg-accent-soft hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
                            >
                                View Project
                                <FaArrowRight
                                    size={12}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </button>
                        </div>

                        {/* Hand-drawn arrow pointing at the phone (desktop only) */}
                        <div className="pointer-events-none absolute -right-8 bottom-2 hidden lg:block" aria-hidden="true">
                            <span className="font-hand mb-1 block -rotate-6 text-2xl text-accent-violet/90">
                                try it!
                            </span>
                            <svg width="120" height="70" viewBox="0 0 120 70" className="opacity-70">
                                <path
                                    d="M 10 15 Q 60 5 105 55"
                                    stroke="#a78bfa"
                                    strokeWidth="2.5"
                                    fill="none"
                                    markerEnd="url(#featArrow)"
                                />
                                <defs>
                                    <marker id="featArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="#a78bfa" />
                                    </marker>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    {/* Right: floating tilted phone */}
                    <div className="relative flex items-center justify-center lg:justify-end lg:pr-10">
                        <motion.div
                            style={{ y: phoneY, rotate: phoneRotate }}
                            className="lg:-my-24"
                        >
                            <div className="animate-float">
                                <PhoneMockup
                                    img={project.img}
                                    title={project.title}
                                    images={images}
                                />
                            </div>
                        </motion.div>
                        {/* Floor glow */}
                        <div className="absolute -bottom-8 left-1/2 h-6 w-48 -translate-x-1/2 rounded-full bg-accent-pink/20 blur-2xl lg:left-auto lg:right-16 lg:translate-x-0"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectWorkstation;
