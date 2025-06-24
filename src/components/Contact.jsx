// src/components/Contact.jsx

const Contact = () => {
  return (
    <div
      className="bg-scroll"
      style={{ backgroundImage: "url(/backgroundPPcroppedR.jpg)" }}
    >
      <div id="about" className="bg-white/40 pt-5 pb-10">

        <div className="rounded-xl bg-white/60 max-w-[1000px] m-auto h-full w-full flex flex-col p-4 justify-center items-center">
          <h1 className="pt-10 text-white text-4xl md:text-5xl font-bold inline-block border-b-4 border-cyan-400 pb-2">
            ABOUT
          </h1>

          {/* THE RESPONSIVE FIX: ml-10 and pl-10 are now md:ml-10 and md:pl-10 */}
          <div className="grid md:grid-cols-2 md:ml-10 md:pl-10 max-w-[850px] pt-4 text-justify items-center gap-4">
            <div className="pt-9 flex flex-col mr-5">
              <img
                src="images/Profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col mr-5">
              <p className="pt-5 my-2 text-base font-normal text-black text-justify leading-relaxed">
                Computing Science and Business Administration degree holder with
                proven ability to troubleshoot and debug code, develop a
                database, and manage projects, honed while serving as a Database
                Developer at Canada Border Services Agency. Demonstrated
                programming skills through hands-on projects, including creating
                web applications while completing my degree and working as a TA
                for computer science courses. Continually seeking to improve and
                streamline processes for efficiency and effectiveness.
              </p>

              {/* This is a <div> for valid HTML, but keeps your original styles */}
              <div className="pt-3 my-2 text-base font-normal text-black text-justify leading-relaxed">
                <strong>Highlighted Skills</strong>
                <ul className="list-disc list-inside mt-1">
                  <li>Efficient Problem-solver</li>
                  <li>Interpersonal</li>
                  <li>Analytical</li>
                  <li>Adaptability</li>
                  <li>Time-management</li>
                  <li>Proven Work Ethics</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center my-8 pt-8">
            <h2 className="text-3xl font-bold text-white">Contact Me</h2>
            <p className="text-black mt-2">
              I'm open to collaborations and new opportunities.
            </p>
          </div>

          <form
            action="https://getform.io/f/917849d1-d8a5-4201-938c-fdf49f62eef8"
            method="POST"
            encType="multipart/form-data" // Corrected typo
            className="max-w-[800px] items-center m-auto w-full justify-center pt-1"
          >
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2">Name</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="text"
                  name="name"
                  placeholder=" Your Name"
                />
              </div>
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2">Phone Number</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="text"
                  name="phone"
                  placeholder=" (xxx) xxx-xxxx"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-1 gap-4 w-full py-2">
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2">Email</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="email"
                  name="email"
                  placeholder=" yourname@example.com"
                />
              </div>
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2">Subject</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="text"
                  name="subject"
                  placeholder=" Enter subject"
                />
              </div>
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2">Message</label>
              <textarea
                rows="5"
                name="message" // Corrected from "name" to "message"
                className="p-3 block w-full border-2 rounded-lg border-gray-300"
                placeholder=" Write your thought here..."
              ></textarea>
            </div>
            <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
