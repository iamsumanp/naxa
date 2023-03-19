import React from "react";

export const Hero = () => {
  return (
    <div className=" flex flex-col w-full px-10 sm:px-24 py-10 text-[#333132]">
      {/* <div className="flex w-full flex-col md:flex-row justify-between items-center"> */}
      <span className="text-yellow text-[18px] pt-6 pb-6 font-bold">
        SERVICES
      </span>
      <div className="text-[30px] md:text-[56px] w-4/5 md:w-3/4 pb-6">
        At <span className="text-blue">NAXA</span>, we work on{" "}
        <span className="text-blue">ideas</span>; ideas that can provide{" "}
        <span className="text-blue">simple solutions</span> to complex problems.
      </div>
      <span className="text-[16px] md:text-[20px] w-4/5 md:w-2/4">
        We work as a team to generate, explore, build and validate ideas. We
        also contextualize innovations around the world to find the best fitting
        solutions to local problems.
      </span>
      {/* </div> */}
    </div>
  );
};
