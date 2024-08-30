import Link from "next/link";
import React from "react";
import Chart from "./Chart";

const Hero = () => {
  return (
    <div
      className="relative hidden md:inline"
      style={{
        backgroundImage: `url('./bg.png')`, // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow:"hidden", // Full height of the viewport
        maxwidth: "100vw",
      }}
    >
      <div className="2xl:px-[300px] px-[125px] pt-6">
        <div className="flex justify-evenly items-center rounded-[30px] bg-[#151515] py-2">
          <div className="flex items-center gap-2">
            <img
              src="./logo.svg"
              className="size-[40px] object-contain"
              alt="Genesis Bank Logo"
            />

            <div className="border-r border-1 border-white h-[40px]"></div>
            <div>
              <p className="text-[19px] leading-5 font-bold">
                Genesis <br /> Bank.
              </p>
            </div>
          </div>

          <div>
            <nav>
              <ul className="flex gap-[48px] items-center">
                <li>
                  <Link className="text-[14px]" href="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="text-[14px]" href="/investment">
                    Investment
                  </Link>
                </li>
                <li>
                  <Link className="text-[14px]" href="/howit">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link className="text-[14px]" href="/news">
                    News
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex gap-7 items-center">
            <Link className="text-[14px] underline" href="/contact">
              Contact Us
            </Link>
            <button className="text-black text-[14px] rounded-[4px] bg-white py-2 px-7">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full items-center mt-[100px] justify-center gap-9">
        <div>
          <p
            style={{ fontWeight: 100 }}
            className="text-[30px] md:text-[16px] border border-white rounded-[17px] py-1 px-[80px]"
          >
            Knowledge is power
          </p>
        </div>

        <h1 className="text-[64px] font-semibold text-center leading-[70px]">
          Invest in the future <br />
          Genesis Bank
        </h1>
        <p className="text-center text-[16px]">
          Secure your stake in the pioneering investment bank of Ethiopia and{" "}
          <br />
          become part of the nation&apos;s financial future.
        </p>
        <div className="flex items-center gap-[24px]">
          <button className="bg-[#AF001E] rounded-[4px] py-[10px] px-[20px]">
            Invest Now
          </button>
          <button className="border text-[14px] border-white rounded-[4px] py-[10px] px-[20px]">
            Learn More
          </button>
        </div>
      </div>

      {/* Wrap the Chart and Image Row in a relative parent */}
      <div className="relative mt-10">
        <Chart />

        {/* Image Row */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center gap-[80px] lg:gap-[105px] items-center mb-4">
          <img src="./zemen.png" className="object-cover" alt="Zemen Bank" />
          <img src="./tele.png" className="object-cover" alt="Telecom" />
          <img src="./cbe.png" className="object-cover" alt="CBE" />
          <img src="./abisinia.png" className="object-cover" alt="Abisinia Bank" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
