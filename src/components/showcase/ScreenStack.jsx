import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

/**
 * All screens stacked on top of each other; only the active one is visible,
 * so switching crossfades instead of flashing. The left/right thirds of the
 * screen act as previous/next tap zones (the device "is" the slideshow).
 */
const ScreenStack = ({ screens, index, onPrev, onNext, fit = "cover", position = "top" }) => {
  const multiple = screens.length > 1;

  return (
    <div className="absolute inset-0">
      {screens.map((screen, i) => (
        <img
          key={screen.src}
          src={screen.src}
          alt={screen.alt}
          loading={i === 0 ? "eager" : "lazy"}
          draggable="false"
          className={`absolute inset-0 h-full w-full select-none transition-opacity duration-700 ease-out ${i === index ? "opacity-100" : "opacity-0"}`}
          style={{ objectFit: fit, objectPosition: position }}
          aria-hidden={i !== index}
        />
      ))}

      {multiple && (
        <>
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous screen"
            className="group/zone absolute inset-y-0 left-0 z-30 flex w-1/3 items-center justify-start pl-2 focus:outline-none"
          >
            <span className="rounded-full bg-black/55 p-2 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover/zone:opacity-100 group-focus-visible/zone:opacity-100">
              <FaChevronLeft size={12} />
            </span>
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label="Next screen"
            className="group/zone absolute inset-y-0 right-0 z-30 flex w-1/3 items-center justify-end pr-2 focus:outline-none"
          >
            <span className="rounded-full bg-black/55 p-2 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover/zone:opacity-100 group-focus-visible/zone:opacity-100">
              <FaChevronRight size={12} />
            </span>
          </button>
        </>
      )}
    </div>
  );
};

export default ScreenStack;
