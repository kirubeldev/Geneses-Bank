import React from 'react'
import { Slider } from "@/components/ui/slider"

import { FaCheckCircle } from "react-icons/fa";import Image from 'next/image';
const FeturedShares = () => {
  return (
    <div className='mt-8 max-w-6xl mx-auto '>
      <div className=' max-w-6xl mx-auto items-center flex space-y-4 flex-col md:flex-row  md:justify-between px-5 md:px-0'>
<div className='flex flex-col mt-12  '>
<h1 className='text-[#151515] text-[24px]  md:text-[33px] xl:text-[40px] font-bold font-serif'>Featured Shares</h1>
<p className=' max-w-[480px] text-[#404040] leading-5 '>Investing in Genesis Bank means becoming part of a historic financial transformation.</p>
</div>

<button className='border py-1 px-5 border-black rounded-md'>Learn more</button>
      </div>


      <div className='flex md:justify-between flex-col md:flex-row px-5 md:px-0 mt-8 md:mt-0'>
<div className='bg-[#151515] py-4 px-8 rounded-lg mt-4 pb-4' >
<p className='text-[20px] text-[#d8d8d8] pb-3 font-semibold '>Share Offerings</p>
<div className='flex items-center'>

<p className='text-[24px] md:text-[33px] xl:text-[40px] font-bold  text-white'>100,000 ETB</p>
<span className='text-[14px] text-white'>/Share</span>
</div>
<hr className='md:w-[425px] mt-3'/>

<div className='mt-[54px] space-y-2 '>

<div className='flex gap-2 items-center'>
<FaCheckCircle  className='text-[#AF001E]'/>
<p className='text-[#d8d8d8] text-[16px] font-semibold'> Minimum Investment  10 Share (1,000,000 Birr)</p>
</div>


<div className='flex gap-2 items-center pb-[161px]'>
<FaCheckCircle  className='text-[#AF001E]'/>
<p className='text-[#d8d8d8] text-[16px] font-semibold'> Minimum Investment  10 Share (1,000,000 Birr)</p>
</div>

</div>
</div>


<div className='fel flex-col space-y-5'>


<div className='bg-[#151515] h-fit py-4 px-8 rounded-lg mt-4 md:w-[620px]  pb-4 '>
<p className='text-[#f1e9e9] font-bold pb-5'>Calculate</p>
<p className='text-[#f1e9e9] pb-4'> Shares</p>
<input type="number" placeholder='Min 10, Max 100 Amount of shares' className='rounded-md py-1 mb-[46px] px px-2  w-full md:w-[554px] h-[30px] outline-none border-none'/>
<Slider defaultValue={[50]} max={100} step={1} trackClassName="bg-[#717171]" />
<div className='flex pb-5 items-center  mt-[29px]  justify-between text-center'>

 <button className='border-none outline-none py-2 px-7 rounded-sm font-semibold bg-[#AF001E] text-[14px] text-white '>Invest Now</button>
<p className='text-white text-[16px]'>100,000 ETB</p>
</div>
</div>

<div className='flex justify-between items-center border py-1 px-[20px] md:px-[59px] rounded-md'>
      <Image src="/zemen.png" width={63} height={36} className="object-cover" alt="Zemen Bank" />
          <Image src="/tele.png" width={63} height={36} className="object-cover" alt="Telecom" />
          <Image src="/dashn.png" width={53} height={24} className="object-cover" alt="CBE" />
          </div>
      </div>

     
      </div>
      
    </div>
  )
}

export default FeturedShares
