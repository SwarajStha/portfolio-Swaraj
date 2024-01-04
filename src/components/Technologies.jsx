import Python from "../assets/Python.png";
import Java from "../assets/Java.png";
import VB from "../assets/VB.png";
import Kotlin from "../assets/KotlinV2.png";
import JavaScript from "../assets/JavascriptV2.png";
import ReactL from "../assets/reactL.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css-3.png";
import Tailwind from "../assets/TailwindV2.png";
import Bootstrap from "../assets/bootstrap.png";
import SQL from "../assets/database.png";
import Windows from "../assets/windows.png";
import Linux from "../assets/linux.png";
import Git from "../assets/github.png";
import Office from "../assets/office.png";
import Google from "../assets/google.png";

const Technologies = () => {
  // const techArray = [Python, Java, C, Cpp, VB, Kotlin, LISP, JavaScript, ReactL, HTML, CSS, Tailwind, Bootstrap, SQL, Windows, Linux, Git, Office, Google];

  return (
    <div
      className="bg-scroll"
      style={{ backgroundImage: "url(/backgroundPPcropped.jpg)" }}
    >
      <div id="technologies" className="bg-white/50 pt-5">
        <div className="bg-white max-w-[1000px] m-auto h-full w-full flex flex-col p-4 justify-center item-center">
          <h1 className="bg-gray-300 py-4 text-4xl font-bold text-center text-black pt-12 justify-center item-center pb-10">
            TECHNOLOGIES
          </h1>
          <div className="flex sm:text-2xl text-l text-gray-800 justify-left pt-8">
            <h3 className="text-center mx-3">I have proficiently worked with</h3>
          </div>
          <div className="item-center">
            <div className="mx-3 pr-6 w-full grid grid-cols-2 sm:grid-cols-6 gap-3 text-center py-8">
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img
                  className="w-15 mx-auto pt-2"
                  src={Python}
                  alt="Python icon"
                />
                <p className="my-4">Python</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img
                  className="w-15 mx-auto pt-2"
                  src={Java}
                  alt="Python icon"
                />
                <p className="my-4">Java</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img
                  className="w-15 mx-auto pt-2"
                  src={JavaScript}
                  alt="Python icon"
                />
                <p className="my-4">JavaScript</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img
                  className="w-15 mx-auto pt-2"
                  src={HTML}
                  alt="Python icon"
                />
                <p className="my-4">HTML</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img
                  className="w-15 mx-auto pt-2"
                  src={CSS}
                  alt="Python icon"
                />
                <p className="my-4">CSS</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img
                  className="w-15 mx-auto pt-2"
                  src={ReactL}
                  alt="Python icon"
                />
                <p className="my-4">React.js</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 w-full py-8">
            <div className="flex flex-col mr-5 pl-5">
              <div className="flex sm:text-2xl text-l text-gray-800 justify-center">
                <h3 className="text-center">I have experience working with</h3>
              </div>
              <div className="ml-5 item-center">
                <div className="mr-5 pr-4 w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8">
                  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img
                      className="w-15 mx-auto pt-2"
                      src={SQL}
                      alt="SQL icon"
                    />
                    <p className="my-4">SQL</p>
                  </div>
                  <div className="pl-1 pr-1 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-15 mx-auto pt-2" src={VB} alt="VB icon" />
                    <p className="my-4 pt-2">VB.NET</p>
                  </div>
                  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img
                      className="w-15 mx-auto pt-2"
                      src={Kotlin}
                      alt="Kotlin icon"
                    />
                    <p className="my-4">Kotlin</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mr-5 pl-5">
              <div className="pl-10 ml-5 flex sm:text-2xl text-l text-gray-800 justify-center">
                <h3 className="text-center pl-1">
                  Frameworks I have experience with
                </h3>
              </div>
              <div className="mr-10 item-center">
                <div className="mr-10 pr-4 w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8">
                  <div></div>
                  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img
                      className="w-15 mx-auto pt-2"
                      src={Tailwind}
                      alt="Tailwind icon"
                    />
                    <p className="my-4">Tailwind CSS</p>
                  </div>
                  <div className="pl-1 pr-1 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img
                      className="w-15 mx-auto pt-2"
                      src={Bootstrap}
                      alt="Bootstrap icon"
                    />
                    <p className="my-4 pt-2">Bootstrap</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 w-full">
            <div className="flex flex-col mr-5 pl-5">
              <div className="flex sm:text-2xl text-l pt-4 text-gray-800 justify-center">
                <h3 className="text-center">Productivity Tools I use</h3>
              </div>
              <div className="ml-5 item-center">
                <div className="mr-5 pr-4 w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8">
                  <div className="pl-1 pr-1 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img
                      className="w-15 mx-auto pt-2"
                      src={Git}
                      alt="Github icon"
                    />
                    <p className="my-4 pt-2">Github</p>
                  </div>
                  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img
                      className="w-15 mx-auto pt-2"
                      src={Office}
                      alt="MS Office icon"
                    />
                    <p className="my-4">MS Office</p>
                  </div>
                  <div className="pl-1 pr-1 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img
                      className="w-15 mx-auto pt-2"
                      src={Google}
                      alt="Google Suite icon"
                    />
                    <p className="my-4 pt-2">Google Suite</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col mr-5 pl-5">
              <div className="pl-10 ml-10 flex sm:text-2xl text-l pt-4 text-gray-800 justify-center">
                <h3 className="text-center">OS I have experience in</h3>
              </div>
              <div className="mr-10 item-center justify-center">
                <div className="mr-10 pr-4 w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8 justify-center item-center">
                  <div></div>
                  <div className="pl-1 pr-1 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img
                      className="w-15 mx-auto pt-2"
                      src={Windows}
                      alt="Windows icon"
                    />
                    <p className="my-4 pt-2">Windows</p>
                  </div>
                  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img
                      className="w-15 mx-auto pt-2"
                      src={Linux}
                      alt="Linux icon"
                    />
                    <p className="my-4">Linux</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
