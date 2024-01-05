const Education = () => {
  return (
    <div
      className="bg-scroll"
      style={{ backgroundImage: "url(/backgroundPPcroppedR.jpg)" }}
    >
      <div id="education" className="bg-white/50 pt-5">
        <div className="bg-white max-w-[1000px] m-auto h-full w-full flex flex-col p-4 justify-center item-center border">
          <div>
            <h1 className="bg-gray-300 py-4 text-5xl font-bold text-center text-white pt-12 justify-center item-center pb-10">
              EDUCATION
            </h1>
            <div className="pl-6 pt-4">
              <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
              <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                <span className="text-lg font-semibold text-black">
                  Bachelor of Computing Science & Business Administration
                </span>
                <span className="flex-grow"></span>
                <span className="item-right inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">
                  September 2020 - May 2024 (Expected)
                </span>
              </p>
              <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                <span className="my-1 text-base font-normal leading-none text-stone-500">
                  Saint Mary’s University, Halifax NS
                </span>
              </p>
              <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                <span className="my-1 text-base font-normal leading-none text-stone-500">
                  Co-operative Education Program
                </span>
              </p>
              <p className="my-2 text-base font-normal text-black">
                <ul className="list-disc list-inside text-black-500">
                  <li>CGPA - 4.25 / 4.30 (A+)</li>
                  <li>
                    Renewable International Entrance Scholarship – 2020, 2021,
                    2022, 2023
                  </li>
                  <li>
                    Academic Achievement Scholarship Award – 2021 - 2022, 2022 -
                    2023
                  </li>
                  <li>
                    MT&T Computing Science & Business Administration Scholarship
                    Award – 2020 - 2021, 2022 – 2023, 2023 - 2024
                  </li>
                  <li>
                    Faculty Union Scholarship for Academic Excellence – 2022 -
                    2023
                  </li>
                  <li>Dean’s List – 2020-2021, 2021-2022, 2022-2023</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
