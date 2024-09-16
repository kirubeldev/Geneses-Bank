import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex px-5 md:px-[120px] pb-[77px] pt-[93px] bg-[#151515] mt-5 w-full flex-col space-y-8 md:flex-row md:justify-between ">
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <img src="./logo.svg" alt="" className="size-[50px] " />
            <div className="border-r border-1 border-white h-[40px]"></div>
            <div>
              <p className="text-[22px] text-white leading-5 font-bold">
                Genesis <br /> Bank.
              </p>
            </div>
          </div>
          <p className="text-white text-[14px] uppercase">
            Knowledge is Power.
          </p>
        </div>

        <div className="text-white">
          <p className="text-[16px] pb-3 font-semibold">About Us</p>

          <nav>
            <ul className="space-y-2">
              <li>
                <Link href={""} className="text-white/75">
                  {" "}
                  About Us
                </Link>
              </li>
              <li>
                <Link href={""} className="text-white/75">
                  {" "}
                  Investment
                </Link>
              </li>
              <li>
                <Link href={""} className="text-white/75">
                  {" "}
                  How it works
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="text-white">
          <p className="text-[16px] pb-3 font-semibold">News</p>

          <nav>
            <ul className="space-y-2">
              <li>
                <Link href={""} className="text-white/75">
                  {" "}
                  Latest News
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="text-white">
          <p className="text-[16px] pb-3 font-semibold">Lega </p>

          <nav>
            <ul className="space-y-2">
              <li>
                <Link href={""} className="text-white/75">
                  {" "}
                  Agerements
                </Link>
              </li>
              <li>
                <Link href={""} className="text-white/75">
                  {" "}
                  License
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="text-white">
          <p className="text-[16px] pb-3 font-semibold">Contact Us</p>

          <nav>
            <ul className="space-y-2">
              <li>
                <Link href={""} className="text-white/75">
                  {" "}
                  +251 96742 3789
                </Link>
              </li>
              <li>
                <Link href={""} className="text-white/75">
                  {" "}
                  +251 96742 7389
                </Link>
              </li>
              <li>
                <Link href={""} className="text-white/75">
                  {" "}
                  gb@example.com
                </Link>
              </li>
              <li>
                <Link href={""} className="text-white/75">
                  {" "}
                  gb2@example.com
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="text-white">
          <p className="text-[16px] pb-3 font-semibold">Find Us </p>

          <nav>
            <ul className="space-y-2">
              <li>
                <Link href={""} className="text-white/75">
                  {" "}
                  Addis Ababa, Ethiopia <br /> Working da from 8am to <br /> 5pm
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <hr />

      <div className="pt-[40px] text-white  md:px-[120px]  pb-[65px]  bg-[#151515] flex justify-between  items-center">
        <p>© 2024 Copyright. All rights resaved </p>
        <p>Term and condition. Policy</p>
      </div>
    </div>
  );
};

export default Footer;
