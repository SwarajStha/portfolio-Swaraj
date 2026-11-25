import ScreenStack from "./ScreenStack";

// Brushed-titanium rim: alternating light/dark bands read as a curved metal edge
const RIM =
  "linear-gradient(135deg, #e4e6ea 0%, #9a9da3 12%, #4a4d52 30%, #b9bcc1 50%, #3d4045 70%, #a7aaaf 86%, #e1e3e7 100%)";
const BUTTON = "linear-gradient(90deg, #6d7076 0%, #c9ccd1 45%, #7a7d83 100%)";

/**
 * Realistic modern Android phone (flat display, titanium frame).
 * The screenshots already contain the status bar and camera cut-out,
 * so the frame only draws the hardware around the display.
 */
const PhoneMockup = ({ screens, index, onPrev, onNext, drawCamera = false }) => (
  <div className="relative aspect-[1/2] w-[230px] sm:w-[270px] lg:w-[290px]">
    {/* Soft contact shadow under the phone */}
    <div className="absolute -bottom-6 left-1/2 h-6 w-3/4 -translate-x-1/2 rounded-[50%] bg-black/45 blur-xl" aria-hidden="true" />

    {/* Side buttons (behind the rim so only their edge shows) */}
    <div className="absolute -right-[3px] top-[17%] h-[11%] w-[5px] rounded-r-[3px]" style={{ background: BUTTON }} aria-hidden="true" />
    <div className="absolute -right-[3px] top-[31%] h-[6.5%] w-[5px] rounded-r-[3px]" style={{ background: BUTTON }} aria-hidden="true" />

    {/* Titanium rim */}
    <div
      className="absolute inset-0 rounded-[2.9rem]"
      style={{
        background: RIM,
        boxShadow:
          "0 50px 80px -20px rgba(0,0,0,0.75), 0 25px 30px -15px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.35)",
      }}
    >
      {/* Antenna bands cut into the rim */}
      <span className="absolute left-0 top-[11%] h-[3px] w-[3px] bg-black/40" aria-hidden="true" />
      <span className="absolute right-0 bottom-[11%] h-[3px] w-[3px] bg-black/40" aria-hidden="true" />
      <span className="absolute bottom-0 left-[28%] h-[3px] w-[3px] bg-black/40" aria-hidden="true" />

      {/* Black glass front with thin bezel */}
      <div className="absolute inset-[3px] rounded-[2.75rem] bg-[#050505] shadow-[inset_0_0_6px_rgba(255,255,255,0.12)]">
        {/* Display */}
        <div className="absolute inset-[8px] overflow-hidden rounded-[2.35rem] bg-black">
          <ScreenStack screens={screens} index={index} onPrev={onPrev} onNext={onNext} />

          {drawCamera && (
            <div className="absolute left-1/2 top-[1.6%] z-20 h-3 w-3 -translate-x-1/2 rounded-full bg-black ring-1 ring-white/10" aria-hidden="true">
              <span className="absolute left-[30%] top-[25%] h-1 w-1 rounded-full bg-sky-300/40" />
            </div>
          )}

          {/* Glass reflections */}
          <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(115deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.04)_28%,transparent_42%)]" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 z-20 rounded-[2.35rem] shadow-[inset_0_0_14px_rgba(0,0,0,0.55)]" aria-hidden="true" />
        </div>
      </div>
    </div>
  </div>
);

export default PhoneMockup;
