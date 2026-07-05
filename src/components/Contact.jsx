// src/components/Contact.jsx

import Draggable from 'react-draggable';
import { useEffect, useRef, useState } from 'react';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

/* Profile preview styled as an editor image-preview window */
const ProfileWindow = ({ nodeRef, className = "", style }) => (
  <div ref={nodeRef} className={className} style={style}>
    <div className="bg-gray-800 border border-black rounded-t-lg p-2 flex items-center justify-between shadow-lg">
      <div className="flex gap-2 ml-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="text-gray-400 font-mono text-xs pr-2">Preview: PROFILE.jpg</div>
      <div className="w-2"></div>
    </div>
    <div className="bg-gray-900 border-x border-b border-black rounded-b-lg p-1 shadow-2xl">
      <img
        src="/images/Profile.jpg"
        alt="Portrait of Swaraj Shrestha"
        className="w-full h-auto object-contain rounded"
        draggable="false"
      />
    </div>
  </div>
);

const Contact = () => {
  const nodeRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Draggable window only makes sense with a mouse + room to move
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section id="about" className="w-full py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="07"
          title="About & Contact"
          subtitle="$ git push --contact"
        />

        <Reveal>
          <div className="relative font-mono">
            {/* Handwriting Drag Indicator (desktop only) */}
            {isDesktop && (
              <div className="absolute z-40 hidden lg:block" style={{ top: '-10px', left: '26%' }} aria-hidden="true">
                <span className="font-hand text-accent-amber text-3xl block -rotate-12 mb-1">
                  Drag me
                </span>
                <svg width="120" height="80" viewBox="0 0 150 100" className="opacity-80 -mt-2">
                  <path
                    d="M 120 10 Q 80 10 20 80"
                    stroke="#FACC15"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#dragArrow)"
                    style={{ filter: 'drop-shadow(0 0 5px rgba(250, 204, 21, 0.5))' }}
                  />
                  <defs>
                    <marker id="dragArrow" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#FACC15" />
                    </marker>
                  </defs>
                </svg>
              </div>
            )}

            {/* Main IDE Window (Bio + Form) */}
            <div className="w-full flex flex-col bg-[#1e1e1e] border border-white/10 rounded-xl shadow-2xl overflow-hidden relative z-10">

              {/* IDE Header/Toolbar */}
              <div className="bg-[#252526] p-2 flex items-center justify-between border-b border-[#3e3e42]">
                <div className="hidden sm:flex items-center gap-4 text-gray-400 text-sm">
                  <span className="cursor-pointer hover:text-white flex items-center gap-1"><span className="text-blue-400">☰</span> File</span>
                  <span className="cursor-pointer hover:text-white">Edit</span>
                  <span className="cursor-pointer hover:text-white">View</span>
                  <span className="cursor-pointer hover:text-white">Go</span>
                  <span className="cursor-pointer hover:text-white">Run</span>
                  <span className="cursor-pointer hover:text-white">Terminal</span>
                  <span className="cursor-pointer hover:text-white">Help</span>
                </div>
                <div className="flex sm:hidden gap-2 ml-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-gray-500 font-mono truncate pl-2">portfolio-swaraj — Visual Studio Code</div>
              </div>

              {/* Tab Bar */}
              <div className="bg-[#2d2d2d] flex text-sm text-gray-400 overflow-x-auto scrollbar-hide">
                <div className="flex items-center gap-2 px-4 py-2 bg-[#1e1e1e] border-t-2 border-accent text-white min-w-fit">
                  <span className="text-blue-400">M↓</span> about_me.md <span className="hover:text-gray-200 cursor-pointer ml-2">×</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 min-w-fit border-r border-[#3e3e42]">
                  <span className="text-yellow-400">{`{}`}</span> contact.json <span className="hover:text-gray-200 cursor-pointer ml-2">×</span>
                </div>
              </div>

              {/* Editor Content Area */}
              <div className="flex-1 p-5 md:p-8 font-mono text-sm md:text-base leading-relaxed bg-[#1e1e1e] text-gray-300">

                {/* Bio row: profile window + bio code */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(280px,360px)_1fr] lg:gap-12">
                  {/* Profile: static on mobile/tablet, draggable window on desktop */}
                  <div className="relative mx-auto w-full max-w-[320px] lg:mx-0 lg:max-w-none">
                    {isDesktop ? (
                      <Draggable nodeRef={nodeRef} bounds="parent">
                        <ProfileWindow
                          nodeRef={nodeRef}
                          className="cursor-grab active:cursor-grabbing hover:z-30 relative"
                        />
                      </Draggable>
                    ) : (
                      <ProfileWindow nodeRef={null} />
                    )}
                  </div>

                  {/* Bio as code */}
                  <div>
                    <p className="text-gray-500 mb-4">{"//"} <span className="text-green-600">Bio.js</span> — Swaraj Shrestha</p>
                    <p className="break-words">
                      <span className="text-blue-400">const</span> <span className="text-yellow-300">swaraj</span> = <span className="text-blue-400">new</span> <span className="text-green-400">Developer</span>({`{`}
                      <br />
                      &nbsp;&nbsp;<span className="text-cyan-300">education</span>: [<span className="text-orange-300">&quot;M.Sc. Management &amp; Digital Technology @ TUM&quot;</span>],
                      <br />
                      &nbsp;&nbsp;<span className="text-cyan-300">experience</span>: <span className="text-orange-300">&quot;CBSA (Database Dev), SMU (TA)&quot;</span>,
                      <br />
                      &nbsp;&nbsp;<span className="text-cyan-300">passion</span>: <span className="text-orange-300">&quot;Streamlining efficiency &amp; debugging&quot;</span>
                      <br />
                      {`}`});
                    </p>
                    <br />
                    <p className="text-gray-500">{"//"} Highlights from config.json</p>
                    <div className="text-purple-300 break-words">
                      swaraj.<span className="text-yellow-300">getSkills</span>().<span className="text-yellow-300">forEach</span>(skill ={`>`} console.<span className="text-yellow-300">log</span>(skill));
                    </div>
                    <div className="mt-3 pl-4 border-l-2 border-gray-700 text-gray-400 text-xs italic space-y-1">
                      <p>{`> "Efficient Problem Solver"`}</p>
                      <p>{`> "Strong Analytical Skills"`}</p>
                      <p>{`> "Adaptable & Quick Learner"`}</p>
                      <p>{`> "Proven Work Ethic"`}</p>
                    </div>
                  </div>
                </div>

                {/* Contact Form as JSON Object */}
                <div className="pt-10 mt-10 border-t border-[#3e3e42]">
                  <p className="text-gray-500 mb-6">{"//"} <span className="text-yellow-500">contact.json</span> — Send a message</p>

                  <form
                    action="https://getform.io/f/917849d1-d8a5-4201-938c-fdf49f62eef8"
                    method="POST"
                    className="w-full max-w-[800px] grid gap-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <label className="text-cyan-300 mb-1" htmlFor="contact-name">&quot;name&quot;: <span className="text-white">value,</span></label>
                        <input id="contact-name" type="text" name="name" className="bg-[#2d2d2d] border border-gray-600 rounded p-2.5 text-orange-300 focus:border-accent outline-none font-mono" placeholder="<input-string>" />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-cyan-300 mb-1" htmlFor="contact-phone">&quot;phone&quot;: <span className="text-white">value,</span></label>
                        <input id="contact-phone" type="text" name="phone" className="bg-[#2d2d2d] border border-gray-600 rounded p-2.5 text-orange-300 focus:border-accent outline-none font-mono" placeholder="<input-string>" />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="text-cyan-300 mb-1" htmlFor="contact-email">&quot;email&quot;: <span className="text-white">value,</span></label>
                      <input id="contact-email" type="email" name="email" className="bg-[#2d2d2d] border border-gray-600 rounded p-2.5 text-orange-300 focus:border-accent outline-none font-mono" placeholder="<input-string>" />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-cyan-300 mb-1" htmlFor="contact-message">&quot;message&quot;: <span className="text-white">value</span></label>
                      <textarea id="contact-message" name="message" rows="4" className="bg-[#2d2d2d] border border-gray-600 rounded p-2.5 text-orange-300 focus:border-accent outline-none font-mono" placeholder="<textarea-string>"></textarea>
                    </div>

                    <button className="flex items-center justify-center gap-2 py-3 mt-2 bg-green-700/20 border border-green-600 text-green-400 hover:bg-green-700/40 rounded transition-all group">
                      <span className="group-hover:translate-x-1 transition-transform">GIT PUSH --contact</span>
                    </button>
                  </form>
                </div>
              </div>

              {/* Status Bar */}
              <div className="bg-[#007acc] text-white text-xs p-1 flex justify-between px-4">
                <div className="flex gap-4">
                  <span>main*</span>
                  <span className="flex items-center gap-1">0<span className="text-xs">⚠</span> 0<span className="text-xs">ⓧ</span></span>
                </div>
                <div className="hidden sm:flex gap-4">
                  <span>Ln 12, Col 45</span>
                  <span>UTF-8</span>
                  <span>JavaScript</span>
                  <span>Prettier</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
