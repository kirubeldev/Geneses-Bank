import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div>
       <div className="md:flex justify-evenly hidden items-center rounded-[30px] bg-[#151515] py-2">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              width={40}
              height={40}
              className="object-contain"
              alt="Genesis Bank Logo"
            />
            <div className="border-r border-1 border-white h-[40px]"></div>
            <div>
              <p className="text-[19px] leading-5 font-bold">
                Genesis <br /> Bank.
              </p>
            </div>
          </div>

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
  )
}

export default Nav
