import { useRef, useState } from "react";
import { FaMobileAlt, FaLaptop, FaVrCardboard, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PhoneMockup from "./PhoneMockup";
import LaptopMockup from "./LaptopMockup";
import HeadsetMockup from "./HeadsetMockup";
import ShowcaseTerminal from "./ShowcaseTerminal";
import { useCarousel, usePrefersReducedMotion, useScrollProgress } from "./hooks";

const DEVICE_ICONS = { phone: FaMobileAlt, laptop: FaLaptop, headset: FaVrCardboard };

const lerp = (from, to, t) => from + (to - from) * t;

/**
 * Scroll-linked pose per device: the phone floats tilted and straightens a
 * little as you scroll past; the laptop lid opens towards you; the headset
 * only drifts. Values are smaller on narrow screens.
 */
const devicePose = (device, p, small) => {
  const k = small ? 0.45 : 1;
  switch (device) {
    case "phone":
      return `translateY(${lerp(36, -36, p) * k}px) rotate(${lerp(9, 3, p) * k}deg)`;
    case "laptop":
      return `perspective(1600px) translateY(${lerp(24, -24, p) * k}px) rotateX(${lerp(12, 0, p) * k}deg)`;
    default:
      return `translateY(${lerp(20, -20, p) * k}px)`;
  }
};

const normaliseScreens = (screens, title) =>
  screens.map((s, i) =>
    typeof s === "string" ? { src: s, alt: `${title} screen ${i + 1}` } : { alt: `${title}: ${s.label || `screen ${i + 1}`}`, ...s }
  );

/**
 * One featured project at a time, each shown on the device it was built for.
 * Controlled: the parent owns which project is active (`activeId`/`onSelect`).
 */
const FeaturedShowcase = ({ projects, activeId, onSelect, onOpen }) => {
  const [hovering, setHovering] = useState(false);
  const stageRef = useRef(null);
  const tabRefs = useRef([]);

  const reducedMotion = usePrefersReducedMotion();
  const progress = useScrollProgress(stageRef, !reducedMotion);

  const activeIndex = Math.max(0, projects.findIndex((p) => p.id === activeId));
  const project = projects[activeIndex];
  const { showcase } = project;
  const screens = normaliseScreens(showcase.screens, project.title);
  const { index, setIndex, next, prev } = useCarousel(screens.length, { paused: hovering });

  const selectTab = (i) => {
    const target = projects[(i + projects.length) % projects.length];
    onSelect(target.id);
    setIndex(0);
    tabRefs.current[(i + projects.length) % projects.length]?.focus();
  };

  const onTabKeyDown = (e) => {
    if (e.key === "ArrowRight") selectTab(activeIndex + 1);
    if (e.key === "ArrowLeft") selectTab(activeIndex - 1);
  };

  const small = typeof window !== "undefined" && window.innerWidth < 640;
  const deviceProps = { screens, index, onPrev: prev, onNext: next };
  const wide = showcase.device !== "phone";

  return (
    <div ref={stageRef} className="px-2 py-6 sm:px-4">
      {/* Project switcher */}
      <div className="mb-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-sm md:text-base">
        <span className="font-bold text-green-400">swaraj@portfolio:~/featured$</span>
        <span className="text-gray-300">ls</span>
        <div role="tablist" aria-label="Featured projects" className="flex flex-wrap gap-2" onKeyDown={onTabKeyDown}>
          {projects.map((p, i) => {
            const Icon = DEVICE_ICONS[p.showcase.device];
            const selected = p.id === project.id;
            return (
              <button
                key={p.id}
                ref={(el) => (tabRefs.current[i] = el)}
                type="button"
                role="tab"
                id={`showcase-tab-${p.id}`}
                aria-selected={selected}
                aria-controls="showcase-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => selectTab(i)}
                className={`flex items-center gap-2 rounded px-3 py-1.5 transition-all duration-200 ${selected
                  ? "border border-cyan-500/50 bg-blue-500/20 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                  : "border border-transparent text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
              >
                {Icon && <Icon aria-hidden="true" />}
                {p.showcase.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Stage */}
      <div
        key={project.id}
        id="showcase-panel"
        role="tabpanel"
        aria-labelledby={`showcase-tab-${project.id}`}
        className={`flex animate-showcase-in flex-col items-center justify-center gap-14 ${wide ? "xl:flex-row xl:gap-14" : "lg:flex-row lg:gap-20"}`}
      >
        {/* Device + slideshow controls */}
        <div
          className={`flex w-full flex-col items-center ${wide ? "xl:w-[58%]" : "lg:w-auto"}`}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onFocus={() => setHovering(true)}
          onBlur={() => setHovering(false)}
        >
          <div
            className="flex w-full justify-center will-change-transform"
            style={reducedMotion ? undefined : { transform: devicePose(showcase.device, progress, small) }}
          >
            <div className={`flex w-full justify-center ${reducedMotion ? "" : "animate-float"}`}>
              {showcase.device === "phone" && <PhoneMockup {...deviceProps} />}
              {showcase.device === "laptop" && <LaptopMockup {...deviceProps} host={showcase.host} tabTitle={showcase.tabTitle} />}
              {showcase.device === "headset" && <HeadsetMockup {...deviceProps} />}
            </div>
          </div>

          {screens.length > 1 && (
            <div className="mt-10 flex items-center gap-3 font-mono text-xs text-gray-200">
              <button type="button" onClick={prev} aria-label="Previous screen" className="rounded-full p-2 hover:bg-white/10">
                <FaChevronLeft size={12} />
              </button>
              <div className="flex items-center gap-1.5">
                {screens.map((s, i) => (
                  <button
                    key={s.src}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show ${s.label || `screen ${i + 1}`}`}
                    aria-current={i === index}
                    className="flex h-6 items-center"
                  >
                    <span className={`block h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-5 bg-cyan-400" : "w-1.5 bg-white/40 hover:bg-white/70"}`} />
                  </button>
                ))}
              </div>
              <button type="button" onClick={next} aria-label="Next screen" className="rounded-full p-2 hover:bg-white/10">
                <FaChevronRight size={12} />
              </button>
              {screens[index].label && <span className="min-w-[6rem] text-gray-300">{screens[index].label}</span>}
            </div>
          )}
        </div>

        {/* Terminal */}
        <div className={`z-10 w-full ${wide ? "max-w-xl xl:w-[42%]" : "max-w-xl"}`}>
          <ShowcaseTerminal project={project} showcase={showcase} onExpand={() => onOpen(project)} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedShowcase;
