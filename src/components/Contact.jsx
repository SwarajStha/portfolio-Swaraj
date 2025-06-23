
const Contact = () => {
  return (
    <div
      className="bg-scroll"
      style={{ backgroundImage: "url(/backgroundPPcroppedR.jpg)" }}
    >
      <div id="about" className="bg-white/40 pt-5 pb-10">
        <div className="rounded-xl bg-white/60 max-w-[1000px] m-auto h-full w-full flex flex-col p-4 justify-center item-center">
          <h1 className="rounded bg-gray-300 py-4 text-5xl font-bold text-center text-white pb-5">
            ABOUT
          </h1>
          <div className="grid md:grid-cols-2 ml-10 pl-10 max-w-[850px] pt-4 text-justify item-center gap-4">
            <div className="pt-9 flex flex-col mr-5">
              {/* Profile Picture*/}
              <img
                src="images/Profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col mr-5">
              <p className="pt-5 my-2 text-base font-normal text-black text-justify leading-relaxed">
                Computing Science and Business Administration degree holder with proven ability to troubleshoot 
                and debug code, develop a database, and manage projects, honed while serving as a Database Developer 
                at Canada Border Services Agency. Demonstrated programming skills through hands-on projects, 
                including creating web applications while completing my degree and working as a TA for computer science 
                courses. Continually seeking to improve and streamline processes for efficiency and effectiveness.
              </p>
              <p className="pt-3 my-2 text-base font-normal text-black text-justify leading-relaxed">
                <strong>Highlighted Skills</strong>
                <ol>
                  <li>• Efficient Problem-solver</li>
                  <li>• Interpersonal</li>
                  <li>• Analytical</li>
                  <li>• Adaptability</li>
                  <li>• Time-management</li>
                  <li>• Proven Work Ethics</li>
                </ol>
              </p>
            </div>
          </div>

          <div className="rounded mt-10 bg-white max-w-[850px] m-auto h-full w-full flex flex-col p-4 justify-center item-center">
            <h2 className="rounded bg-gray-100 py-4 text-2xl font-normal text-center text-black pb-5">
              Contact Me About Collaborations and Opportunities
            </h2>
          </div>

          {/* Form element with POST method and multipart/form-data encoding type */}
          <form
            action="https://getform.io/f/917849d1-d8a5-4201-938c-fdf49f62eef8"
            method="POST"
            encType="multipart/form-date"
            className="max-w-[800px] item-center m-auto w-full justify-center pt-1"
          >
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
              <div className="flex flex-col">
                {/* Input fields for name */}
                <label className="uppercase text-sm py-2">Name</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="text"
                  name="name"
                  placeholder=" Your Name"
                />
              </div>
              <div className="flex flex-col">
                {/* Input field for phone number */}
                <label className="uppercase text-sm py-2">Phone Number</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="text"
                  name="phone"
                  placeholder=" (xxx) xxx-xxxx"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
              <div className="flex flex-col">
                <div>
                  {/* Input field for email */}
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                    placeholder=" yourname@example.com"
                  />
                </div>
                <div>
                  {/* Input field for subject */}
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                    placeholder=" Enter subject"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div>
                  {/* Input field for message */}
                  <label className="uppercase text-sm py-2">Message</label>
                </div>
                <div className="py-2">
                  <textarea
                    rows="5"
                    name="name"
                    className="p-3 block w-full border-2 rounded-lg border-gray-300"
                    placeholder=" Write your thought here..."
                  ></textarea>
                </div>
              </div>
            </div>
            <button className="bg-[#001b5e] text-gray-100 mt-4 wi-full p-4 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
