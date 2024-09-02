"use client"
import React from 'react'
import { IoMdPlay } from "react-icons/io";
const Journey = () => {
  return (
    <div>
      <div className='flex px-3 md:px-0 text-center flex-col gap-4 mb-12 max-w-6xl mx-auto justify-center  items-center'>
<div className='flex flex-col gap-3'>
<h1 className='text-[#151515] mt-12 text-[24px] md:text-[33px] xl:text-[40px] font-bold font-serif'>Our Journey and Vision</h1>
<p className='max-w-[550px] text-[14px] text-[#717171]'>At Genesis Bank, our mission is to revolutionize Ethiopia’s financial landscape by providing innovative investment opportunities that empower growth, drive development, and deliver unmatched value to our investors.</p>
</div>

<div className='w-full  h-[300px] px-12 md:px-0 md:h-[454px] bg-[#2A1216] rounded-md flex justify-center items-center'>
  <div className="relative flex justify-center items-center">
    <div className="absolute bg-[#9D0000]/60 w-[134px] h-[134px] rounded-full animate-slowPing"></div>
    <div className='bg-[#9D0000] w-[85.5px] h-[85.5px] rounded-full flex justify-center items-center'>
    <IoMdPlay  className='text-white text-xl'/>    </div>
  </div>
  <style jsx>{`
    @keyframes slowPing {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      100% {
        transform: scale(1.3);
        opacity: 0;
      }
    }

    .animate-slowPing {
      animation: slowPing 2s cubic-bezier(0, 0, 0.2, 1) infinite;
    }
  `}</style>
</div>


      </div>
    </div>
  )
}

export default Journey
