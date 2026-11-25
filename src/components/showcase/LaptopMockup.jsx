import { FaLock } from "react-icons/fa";
import ScreenStack from "./ScreenStack";

// Dark anodised aluminium
const LID = "linear-gradient(180deg, #34363b 0%, #1d1e21 100%)";
const BASE = "linear-gradient(180deg, #5b5d62 0%, #3a3c40 22%, #26272a 70%, #151618 100%)";

/**
 * Realistic laptop (thin bezels, camera notch, aluminium base) showing a
 * macOS desktop with a single browser window. Text inside the display is
 * sized in container units so it scales with the laptop.
 * `screens[i].path` is shown in the address bar for the active screen.
 */
const LaptopMockup = ({ screens, index, onPrev, onNext, host, tabTitle }) => {
  const active = screens[index] || screens[0];

  return (
    <div className="relative w-full max-w-[700px]">
      {/* Lid */}
      <div
        className="relative mx-auto w-[86%] rounded-t-[1.1rem] rounded-b-[0.3rem] p-[1.6%] pb-[2.4%]"
        style={{
          background: LID,
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12), 0 30px 60px -25px rgba(0,0,0,0.8)",
        }}
      >
        {/* Display */}
        <div
          className="relative aspect-[16/10] overflow-hidden rounded-[0.45rem] bg-[#1e1f24]"
          style={{ containerType: "inline-size" }}
        >
          {/* macOS menu bar (the notch sits inside it, like on the real thing) */}
          <div
            className="absolute inset-x-0 top-0 z-20 flex items-center justify-between bg-[#1b1c20]/95 px-[1.6cqw] text-white/85"
            style={{ height: "3.4cqw", fontSize: "1.45cqw" }}
          >
            <div className="flex items-center gap-[1.6cqw]">
              <span className="font-semibold">Safari</span>
              <span className="text-white/60">File</span>
              <span className="text-white/60">Edit</span>
              <span className="text-white/60">View</span>
            </div>
            <div className="flex items-center gap-[1.4cqw] text-white/70">
              <span>Wed 9:41</span>
            </div>
          </div>
          {/* Camera notch */}
          <div className="absolute left-1/2 top-0 z-30 h-[3.4cqw] w-[13cqw] -translate-x-1/2 rounded-b-[1cqw] bg-black" aria-hidden="true">
            <span className="absolute left-1/2 top-[38%] h-[0.8cqw] w-[0.8cqw] -translate-x-1/2 rounded-full bg-[#0d1620] ring-1 ring-white/10" />
          </div>

          {/* Browser window */}
          <div className="absolute inset-x-[1.6cqw] bottom-[1.6cqw] top-[4.8cqw] overflow-hidden rounded-[1cqw] shadow-[0_1.5cqw_4cqw_rgba(0,0,0,0.55)] ring-1 ring-black/40">
            {/* Toolbar */}
            <div
              className="relative z-20 flex items-center gap-[1.6cqw] border-b border-black/10 bg-[#ececef] px-[1.6cqw]"
              style={{ height: "5cqw", fontSize: "1.45cqw" }}
            >
              <div className="flex gap-[0.7cqw]" aria-hidden="true">
                <span className="h-[1.25cqw] w-[1.25cqw] rounded-full bg-[#ff5f57]" />
                <span className="h-[1.25cqw] w-[1.25cqw] rounded-full bg-[#febc2e]" />
                <span className="h-[1.25cqw] w-[1.25cqw] rounded-full bg-[#28c840]" />
              </div>
              <span className="hidden truncate text-[#3c3c43] sm:inline" style={{ maxWidth: "14cqw" }}>
                {tabTitle}
              </span>
              <div className="mx-auto flex w-[52%] items-center justify-center gap-[0.8cqw] rounded-[0.8cqw] bg-white/90 py-[0.6cqw] text-[#3c3c43] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]">
                <FaLock className="text-[#8e8e93]" style={{ width: "1.1cqw", height: "1.1cqw" }} aria-hidden="true" />
                <span className="truncate">
                  {host}
                  <span className="text-[#8e8e93]">{active.path || "/"}</span>
                </span>
              </div>
              <div className="w-[4cqw]" />
            </div>

            {/* Page */}
            <div className="absolute inset-x-0 bottom-0 top-[5cqw] bg-white">
              <ScreenStack screens={screens} index={index} onPrev={onPrev} onNext={onNext} />
            </div>
          </div>

          {/* Glass glare */}
          <div className="pointer-events-none absolute inset-0 z-40 bg-[linear-gradient(120deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.03)_30%,transparent_45%)]" aria-hidden="true" />
        </div>
      </div>

      {/* Hinge */}
      <div className="mx-auto h-[0.55rem] w-[86%] rounded-b-[0.2rem] bg-[linear-gradient(180deg,#0c0c0e,#2a2b2f)]" aria-hidden="true" />

      {/* Base */}
      <div
        className="relative mx-auto h-[0.9rem] w-full rounded-b-[1.1rem] rounded-t-[0.15rem]"
        style={{ background: BASE, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)" }}
        aria-hidden="true"
      >
        {/* Finger notch for opening the lid */}
        <span className="absolute left-1/2 top-0 h-[0.35rem] w-[16%] -translate-x-1/2 rounded-b-[0.6rem] bg-[linear-gradient(180deg,#151618,#2c2d31)]" />
      </div>

      {/* Contact shadow */}
      <div className="mx-auto -mt-1 h-5 w-[92%] rounded-[50%] bg-black/45 blur-xl" aria-hidden="true" />
    </div>
  );
};

export default LaptopMockup;
