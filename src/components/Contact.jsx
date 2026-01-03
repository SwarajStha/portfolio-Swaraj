// src/components/Contact.jsx

import Draggable from 'react-draggable';
import { useRef } from 'react';

const Contact = () => {
  const nodeRef = useRef(null);

  return (
    <div id="about" className="bg-white/40 pt-5 pb-10">
      <div
        className="w-full py-12 text-white"
        style={{
          backgroundImage:
            "radial-gradient(circle at top right, rgb(76, 83, 96) 5%, rgba(201, 201, 201, 0.6), rgba(255, 255, 255, 0.6))",
        }}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="pt-10 text-white text-4xl md:text-5xl font-bold inline-block border-b-4 border-cyan-400 pb-2">
            ABOUT
          </h1>

          <div className="relative flex flex-col items-center justify-center w-full pt-8 font-mono">

            {/* Handwriting Drag Indicator */}
            <div className="absolute z-40 hidden md:block" style={{ top: '30px', left: '40%', transform: 'translateX(20px)' }}>
              <span
                className="text-yellow-400 text-4xl block -rotate-12 mb-2"
                style={{ fontFamily: '"Patrick Hand", cursive' }}
              >
                Drag
              </span>
              <svg width="150" height="100" viewBox="0 0 150 100" className="opacity-80 -mt-[12px]">
                <path
                  d="M 120 10 Q 80 10 20 80"
                  stroke="#FACC15"
                  strokeWidth="3"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  style={{ filter: 'drop-shadow(0 0 5px rgba(250, 204, 21, 0.5))' }}
                />
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#FACC15" />
                  </marker>
                </defs>
              </svg>
            </div>

            {/* Draggable Profile Window (Floating) */}
            <Draggable nodeRef={nodeRef} bounds="parent" defaultPosition={{ x: -250, y: 115 }}>
              <div
                ref={nodeRef}
                className="absolute z-50 w-[300px] md:w-[350px] cursor-grab active:cursor-grabbing hover:z-[60] shadow-2xl transition-transform"
                style={{ top: '0' }} // Initial positioning handled by Draggable defaultPosition
              >
                {/* Terminal Header */}
                <div className="bg-gray-800 border border-black rounded-t-lg p-2 flex items-center justify-between shadow-lg">
                  <div className="flex gap-2 ml-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"></div>
                  </div>
                  <div className="text-gray-400 font-mono text-xs pr-2">Preview: PROFILE.jpg</div>
                  <div className="w-2"></div>
                </div>
                {/* Terminal Content (Profile Image) */}
                <div className="bg-gray-900 border-x border-b border-black rounded-b-lg p-1 shadow-2xl">
                  <div className="relative w-full h-auto overflow-hidden rounded">
                    <img
                      src="images/Profile.jpg"
                      alt="Profile"
                      className="w-full h-auto object-contain"
                      draggable="false" // Prevent native drag
                    />
                  </div>
                </div>
              </div>
            </Draggable>

            {/* Main IDE Window (Bio + Form) */}
            <div className="w-full max-w-[1240px] flex flex-col min-h-[800px] bg-[#1e1e1e] border border-gray-700 rounded-lg shadow-2xl overflow-hidden relative z-10">

              {/* IDE Header/Toolbar */}
              <div className="bg-[#252526] p-2 flex items-center justify-between border-b border-[#3e3e42]">
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <span className="cursor-pointer hover:text-white flex items-center gap-1"><span className="text-blue-400">☰</span> File</span>
                  <span className="cursor-pointer hover:text-white">Edit</span>
                  <span className="cursor-pointer hover:text-white">Selection</span>
                  <span className="cursor-pointer hover:text-white">View</span>
                  <span className="cursor-pointer hover:text-white">Go</span>
                  <span className="cursor-pointer hover:text-white">Run</span>
                  <span className="cursor-pointer hover:text-white">Terminal</span>
                  <span className="cursor-pointer hover:text-white">Help</span>
                </div>
                <div className="text-xs text-gray-500 font-mono">portfolio-swaraj - Visual Studio Code</div>
              </div>

              {/* Tab Bar */}
              <div className="bg-[#2d2d2d] flex text-sm text-gray-400 overflow-x-auto">
                <div className="flex items-center gap-2 px-4 py-2 bg-[#1e1e1e] border-t-2 border-cyan-400 text-white min-w-fit">
                  <span className="text-blue-400">M↓</span> about_me.md <span className="hover:text-gray-200 cursor-pointer ml-2">×</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 hover:bg-[#2d2d2d] min-w-fit border-r border-[#3e3e42]">
                  <span className="text-yellow-400">{`{}`}</span> contact.json <span className="hover:text-gray-200 cursor-pointer ml-2">×</span>
                </div>
              </div>

              {/* Editor Content Area */}
              <div className="flex-1 p-0 md:p-8 overflow-y-auto font-mono text-sm md:text-base leading-relaxed bg-[#1e1e1e] text-gray-300">
                <div className="grid grid-cols-[auto_1fr] h-full">
                  {/* Line Numbers */}
                  <div className="hidden md:flex flex-col text-right pr-4 text-gray-600 select-none border-r border-[#3e3e42] mr-4 font-mono text-sm leading-8">
                    {[...Array(30)].map((_, i) => <span key={i}>{i + 1}</span>)}
                  </div>

                  {/* Code Content */}
                  <div className="pl-2 md:pl-0 w-full space-y-8 pt-2">
                    {/* Bio Section */}
                    <div className="max-w-[800px] ml-auto md:ml-0 md:pl-[450px] transition-all duration-500"> {/* Pushed right to make space for profile initially */}
                      <p className="text-gray-400 mb-4">// <span className="text-green-600">Bio.js</span> - Swaraj Shrestha</p>
                      <p>
                        <span className="text-blue-400">const</span> <span className="text-yellow-300">swaraj</span> = <span className="text-blue-400">new</span> <span className="text-green-400">Developer</span>({`{`}
                        <br />
                        &nbsp;&nbsp;<span className="text-cyan-300">education</span>: [<span className="text-orange-300">"Management & Digital Technologies"</span>],
                        <br />
                        <br />
                        &nbsp;&nbsp;<span className="text-cyan-300">experience</span>: <span className="text-orange-300">"CBSA (Database Dev), SMU (TA)"</span>,
                        <br />
                        &nbsp;&nbsp;<span className="text-cyan-300">passion</span>: <span className="text-orange-300">"Streamlining efficiency & debugging"</span>
                        <br />
                        {`}`});
                      </p>
                      <br />
                      <p className="text-gray-400">// Highlights from config.json</p>
                      <div className="text-purple-300">
                        swaraj.<span className="text-yellow-300">getSkills</span>().<span className="text-yellow-300">forEach</span>(skill ={`>`} console.<span className="text-yellow-300">log</span>(skill));
                      </div>
                      <div className="mt-2 pl-4 border-l-2 border-gray-700 text-gray-400 text-xs italic">
                        {`> "Efficient Problem Solver"`}<br />
                        {`> "Strong Analytical Skills"`}<br />
                        {`> "Adaptable & Quick Learner"`}<br />
                        {`> "Proven Work Ethic"`}
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                      </div>
                    </div>

                    {/* Contact Form as JSON Object */}
                    <div className="md:pl-[50px] pt-12 mt-12 border-t border-[#3e3e42]">
                      <p className="text-gray-400 mb-6">// <span className="text-yellow-500">contact.json</span> - Send a message</p>

                      <form
                        action="https://getform.io/f/917849d1-d8a5-4201-938c-fdf49f62eef8"
                        method="POST"
                        className="w-full max-w-[800px] grid gap-6"
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="flex flex-col">
                            <label className="text-cyan-300 mb-1">"name": <span className="text-white">value,</span></label>
                            <input type="text" name="name" className="bg-[#2d2d2d] border border-gray-600 rounded p-2 text-orange-300 focus:border-cyan-400 outline-none font-mono" placeholder="<input-string>" />
                          </div>
                          <div className="flex flex-col">
                            <label className="text-cyan-300 mb-1">"phone": <span className="text-white">value,</span></label>
                            <input type="text" name="phone" className="bg-[#2d2d2d] border border-gray-600 rounded p-2 text-orange-300 focus:border-cyan-400 outline-none font-mono" placeholder="<input-string>" />
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <label className="text-cyan-300 mb-1">"email": <span className="text-white">value,</span></label>
                          <input type="email" name="email" className="bg-[#2d2d2d] border border-gray-600 rounded p-2 text-orange-300 focus:border-cyan-400 outline-none font-mono" placeholder="<input-string>" />
                        </div>

                        <div className="flex flex-col">
                          <label className="text-cyan-300 mb-1">"message": <span className="text-white">value</span></label>
                          <textarea name="message" rows="4" className="bg-[#2d2d2d] border border-gray-600 rounded p-2 text-orange-300 focus:border-cyan-400 outline-none font-mono" placeholder="<textarea-string>"></textarea>
                        </div>

                        <button className="flex items-center justify-center gap-2 py-3 mt-4 bg-green-700/20 border border-green-600 text-green-400 hover:bg-green-700/40 rounded transition-all group">
                          <span className="group-hover:translate-x-1 transition-transform">GIT PUSH --contact</span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Bar */}
              <div className="bg-[#007acc] text-white text-xs p-1 flex justify-between px-4">
                <div className="flex gap-4">
                  <span>main*</span>
                  <span className="flex items-center gap-1">0<span className="text-xs">⚠</span> 0<span className="text-xs">ⓧ</span></span>
                </div>
                <div className="flex gap-4">
                  <span>Ln 12, Col 45</span>
                  <span>UTF-8</span>
                  <span>JavaScript</span>
                  <span>Prettier</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
