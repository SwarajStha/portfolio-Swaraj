import ScreenStack from "./ScreenStack";

// Quest 3 front: white plastic shell with three dark sensor/camera pills
const SHELL = "radial-gradient(120% 140% at 35% 20%, #ffffff 0%, #ecebe8 45%, #c9c8c4 100%)";
const PILL = "linear-gradient(180deg, #2a2a2c 0%, #0b0b0c 100%)";
const STRAP = "linear-gradient(180deg, #8d8f93 0%, #5c5e62 100%)";

const SensorPill = ({ className, lenses = 2 }) => (
  <div
    className={`absolute flex flex-col items-center justify-evenly rounded-full ${className}`}
    style={{ background: PILL, boxShadow: "inset 0 1px 1px rgba(255,255,255,0.25)" }}
  >
    {Array.from({ length: lenses }).map((_, i) => (
      <span key={i} className="block aspect-square w-[42%] rounded-full bg-[radial-gradient(circle_at_35%_35%,#3d4a58,#050607_70%)] ring-1 ring-white/10" />
    ))}
  </div>
);

/** Meta Quest 3 seen from the front. */
const Quest3 = () => (
  <div className="relative aspect-[2/1] w-full" aria-hidden="true">
    {/* Head strap, visible on both sides */}
    <div className="absolute left-[-6%] top-[38%] h-[24%] w-[18%] rounded-l-full" style={{ background: STRAP }} />
    <div className="absolute right-[-6%] top-[38%] h-[24%] w-[18%] rounded-r-full" style={{ background: STRAP }} />
    {/* Facial interface peeking out behind the shell */}
    <div className="absolute inset-x-[6%] bottom-[-4%] h-[30%] rounded-b-[45%] bg-[#4a4b4f]" />
    {/* Shell */}
    <div
      className="absolute inset-0 rounded-[38%/50%]"
      style={{ background: SHELL, boxShadow: "0 18px 30px -10px rgba(0,0,0,0.6), inset 0 -6px 12px rgba(0,0,0,0.12)" }}
    >
      <SensorPill className="left-[14%] top-[22%] h-[56%] w-[11%]" />
      <SensorPill className="left-1/2 top-[30%] h-[40%] w-[10%] -translate-x-1/2" lenses={1} />
      <SensorPill className="right-[14%] top-[22%] h-[56%] w-[11%]" />
    </div>
  </div>
);

/**
 * XR project frame: the headset's view cast to a screen, with the headset
 * itself in front of it. Content is shown with a slight lens vignette.
 */
const HeadsetMockup = ({ screens, index, onPrev, onNext }) => (
  <div className="relative w-full max-w-[680px] pb-10 sm:pb-14">
    {/* Cast window */}
    <div className="overflow-hidden rounded-xl bg-[#101114] shadow-[0_40px_70px_-25px_rgba(0,0,0,0.85)] ring-1 ring-white/10">
      <div className="flex items-center gap-2 px-4 py-2 font-mono text-[11px] text-gray-300 sm:text-xs">
        <span className="h-2 w-2 animate-pulse rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
        Casting from Meta Quest 3
      </div>
      <div className="relative aspect-[16/10] bg-black">
        <ScreenStack screens={screens} index={index} onPrev={onPrev} onNext={onNext} />
        {/* Lens vignette */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.55)_100%)]" aria-hidden="true" />
      </div>
    </div>

    {/* The headset, in front of its own cast */}
    <div className="absolute -bottom-2 -left-3 w-[34%] min-w-[130px] sm:-left-8">
      <Quest3 />
    </div>
  </div>
);

export default HeadsetMockup;
