const Contact = () => {
  return (
    <div
      id="contact"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 border"
    >
      <h1 className="py-4 text-4xl font-bold text-center text-black">
        CONTACT
      </h1>

      {/* Form element with POST method and multipart/form-data encoding type */}
      <form action="" methods="POST" encType="multipart/form-date">
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
            <div>
              {/* Input field for message */}
              <label className="uppercase text-sm py-2">Message</label>
            </div>
            <div className="py-2">
              <textarea
                rows="5"
                name="name"
                className="block w-full border-2 rounded-lg border-gray-300"
                placeholder="    Write your thought here..."
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
