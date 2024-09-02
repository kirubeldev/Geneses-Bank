import React from 'react'
import { Graph2 } from './Graph2'
import { AccordionDemo } from './Accordion1'

const Risk = () => {
  return (
    <div>
      <div className='max-w-6xl mx-auto '>
      <h1 className='text-[#151515] text-[24px] px-5 md:px-0 md:text-[33px] xl:text-[40px] font-bold font-serif'>Expected Risk</h1>
<div className='flex flex-col md:gap-12 space-y-6 md:flex-row md:justify-between md:items-center'>
   <div className='md:w-1/2'>

    <Graph2/>
   </div>
    <div className='md:w-1/2 px-5'>

    <AccordionDemo />
   </div>
</div>
      </div>
    </div>
  )
}

export default Risk
