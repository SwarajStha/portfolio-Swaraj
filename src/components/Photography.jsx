// src/components/Photography.jsx

// MODIFICATION: Added the missing import statement for the icon
import { FaExternalLinkAlt } from "react-icons/fa";

// Data for your two photography portfolios
const photographyData = [
  {
    title: "Scop.io Portfolio",
    description:
      "A curated collection of my professional event and portrait photography.",
    link: "https://artist.scop.io/swaraj-shrestha-34f22243",
    // IMPORTANT: Remember to replace this with your own image
    image: "/images/Scopio.png",
  },
  {
    title: "Wix Website Portfolio",
    description:
      "My personal photography site featuring landscapes and creative projects.",
    link: "https://swarajshrestha.wixsite.com/swarajphotography",
    // IMPORTANT: Remember to replace this with your own image
    image: "/images/WIX.png",
  },
];

// This is the component for each individual card
const PhotographyCard = ({ site }) => {
  return (
    // The entire card is a link that opens in a new tab
    <a
      href={site.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block w-full aspect-[4/5] group rounded-lg overflow-hidden shadow-lg"
    >
      <img
        src={site.image}
        alt={site.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>

      {/* Text content and button container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
        <h3 className="text-2xl font-bold mb-2 drop-shadow-md">{site.title}</h3>
        <p className="text-gray-200 mb-4 drop-shadow-md">{site.description}</p>
        <div className="inline-flex items-center gap-2 bg-cyan-500 text-white font-bold py-2 px-5 rounded-lg group-hover:bg-cyan-600 transition-colors">
          {/* The icon that was causing the error */}
          <FaExternalLinkAlt />
          <span>View Gallery</span>
        </div>
      </div>
    </a>
  );
};

// This is the main section component, now with the correct theme
const Photography = () => {
  return (
    <div
      className="bg-scroll"
      style={{ backgroundImage: "url(/backgroundPPcroppedR.jpg)" }}
    >
      <div id="photography" className="bg-white/40 pt-10 pb-5">
        <div
          className="max-w-[1000px] mx-auto py-20 text-white rounded-xl"
          style={{
            backgroundImage:
              "radial-gradient(circle at top right, rgb(113, 72, 61), #11224080 60%, rgba(201, 201, 201, 0.6))",
          }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold inline-block border-b-4 border-cyan-400 pb-2">
                PHOTOGRAPHY
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {photographyData.map((site) => (
                <PhotographyCard key={site.title} site={site} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photography;
