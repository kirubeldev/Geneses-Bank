import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowUp } from "react-icons/go";
import { FaDollarSign } from "react-icons/fa6";
const CapitalGrowth = () => {
  return (
    <div>
      <div className="flex flex-col space-y-12 md:space-y-0 justify-center md:items-center items-center md:flex-row md:justify-between max-w-6xl mx-auto my-[50px] ">
        <div className="flex items-center gap-3">
          <div className="size-[80px] rounded-full bg-[#151515] flex justify-center items-center text-white font-bold">
            <GoArrowUpRight className="text-2xl" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">Capital</h1>
            <p className="text-[14px] text-[#717171] max-w-[250px]">
              Investment banks are skilled in raising capital for businesses.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="size-[80px] rounded-full bg-[#151515] flex justify-center items-center text-white font-bold">
          <FaDollarSign className="text-2xl" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">Capital</h1>
            <p className="text-[14px] text-[#717171] max-w-[250px]">
              Investment banks are skilled in raising capital for businesses.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="size-[80px] rounded-full bg-[#151515] flex justify-center items-center text-white font-bold">
          <GoArrowUp className="text-2xl" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">Capital</h1>
            <p className="text-[14px] text-[#717171] max-w-[250px]">
              Investment banks are skilled in raising capital for businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapitalGrowth;
