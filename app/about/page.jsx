import React from "react";
import Nav from "../componet/Nav";
import GenesisCard from "../componet/GenesisCards";
import Stability from "../componet/Stability";
import { IoIosArrowForward } from "react-icons/io";

const Page = () => {
  return (
    <div>
      <div className=" min-h- w-full">
        {/* Background Image with Opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"  // Set z-index to 0 for the background
          style={{
            backgroundImage: `url('/aboutbg.svg')`,
          }}
        />

        {/* Content Layer */}
        <div className="relative text-white pt-6 2xl:px-[300px] md:px-[125px] md:pt-6 ">
          <Nav />
        </div>

        <div className="relative  flex px-5 md:px-0 items-center -mt-[50px] justify-center min-h-screen z-[-1]">
          <div>
            <p className="text-[28px] mx-auto text-center font-semibold 2xl:text-[36px]">
              Empower Your Future with Genesis Bank
            </p>
            <p className="max-w-[473px] mx-auto text-gray-600 text-center">
              Unlock your potential with tailored financial solutions designed
              to secure and grow your wealth for generations to come.
            </p>
            <button className="flex gap-4 items-center text-white px-7 mt-5 py-[6px] mx-auto rounded-[16.5px] bg-[#231F20]">
              <p>Explore Investment</p>
              <IoIosArrowForward className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      <GenesisCard />
      <Stability />
    </div>
  );
};

export default Page;
