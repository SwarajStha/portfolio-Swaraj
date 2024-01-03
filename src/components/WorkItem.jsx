import HtmlReactParser from "html-react-parser";

const WorkItem = ({ year, title, company, duration, details }) => {
  return (
    <ol className="flex flex-col relative md:flex-row border-1 border-stone-200 pt-10">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="text-lg font-semibold text-black">{title}</span>
          <span className="flex-grow"></span>
          <span className="my-1 text-base font-normal leading-none text-stone-400">
            {duration}
          </span>
        </p>
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="my-1 text-base font-normal leading-none text-stone-400">
            {company}
          </span>
          <span className="flex-grow"></span>
          <span className="item-right inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md ">
            {year}
          </span>
        </p>
        <p className="my-2 text-base dont-normal text-black">
          {HtmlReactParser(details)}
        </p>
      </li>
    </ol>
  );
};

export default WorkItem;
