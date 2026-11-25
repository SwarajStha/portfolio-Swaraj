import { useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { usePrefersReducedMotion } from "./hooks";

/**
 * A muted, looping clip that only plays while it is the visible screen.
 * With reduced motion it does not autoplay; the visitor gets the controls.
 */
const ScreenVideo = ({ screen, active, fit, position }) => {
  const ref = useRef(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (active && !reducedMotion) {
      video.play().catch(() => {}); // autoplay can be refused; the poster stays visible
    } else {
      video.pause();
    }
  }, [active, reducedMotion]);

  return (
    <video
      ref={ref}
      src={screen.video}
      poster={screen.src}
      muted
      loop
      playsInline
      preload={active ? "auto" : "none"}
      controls={reducedMotion}
      aria-label={screen.alt}
      className="absolute inset-0 h-full w-full"
      style={{ objectFit: fit, objectPosition: position }}
    />
  );
};

/**
 * All screens stacked on top of each other; only the active one is visible,
 * so switching crossfades instead of flashing. The left/right thirds of the
 * screen act as previous/next tap zones (the device "is" the slideshow).
 * A screen with `video` plays that clip (its `src` is the poster frame).
 */
const ScreenStack = ({ screens, index, onPrev, onNext, fit = "cover", position = "top" }) => {
  const multiple = screens.length > 1;

  return (
    <div className="absolute inset-0">
      {screens.map((screen, i) => (
        <div
          key={screen.video || screen.src}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${i === index ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== index}
        >
          {screen.video ? (
            <ScreenVideo screen={screen} active={i === index} fit={fit} position={position} />
          ) : (
            <img
              src={screen.src}
              alt={screen.alt}
              loading={i === 0 ? "eager" : "lazy"}
              draggable="false"
              className="absolute inset-0 h-full w-full select-none"
              style={{ objectFit: fit, objectPosition: position }}
            />
          )}
        </div>
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
