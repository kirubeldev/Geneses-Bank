"use client";

import React, { useState } from 'react';
import {
  Accordion ,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IoMdAdd, IoMdRemove } from 'react-icons/io';

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (value) => {
    setOpenItem(openItem === value ? null : value);
};
 
  return (
    <div>
      <div className='max-w-6xl px-5 md:px-0 mt-9 mx-auto'>
        <h1 className='text-[#151515] text-[24px] md:text-[33px] xl:text-[40px] font-bold '>FAQ&apos;s</h1>
        <div className='flex flex-col md:gap-6 space-y-6 md:flex-row md:justify-between md:items-center'>
          <div className=''>
            <button className='py-2 mt-12 px-6 rounded-md border'>Contact Support</button>
          </div>
          <div className='md:w-2/3'>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <div className={`py-2 px-5 rounded-md ${openItem === "item-1" ? 'bg-[#eeebeb]' : ''}`}>
                  <div className='flex justify-between items-center'>
                    <AccordionTrigger onClick={() => handleToggle("item-1")}>
                    What makes Genesis Bank a unique investment opportunity?
                    </AccordionTrigger>
                    <button
                      className="text-xl"
                      onClick={() => handleToggle("item-1")}
                    >
                      {openItem === "item-1" ? <IoMdRemove /> : <IoMdAdd />}
                    </button>
                  </div>
                  <AccordionContent>
                    <div className='pr-12'>
                      Genesis Bank is Ethiopia's first investment bank, offering a rare opportunity to be part of a pioneering financial institution. Our innovative approach, combined with a deep understanding of the local market, positions us for significant growth and long-term success.
                    </div>
                  </AccordionContent>
                </div>
              </AccordionItem>
              <AccordionItem value="item-2">
                <div className={`py-2 px-5 rounded-md ${openItem === "item-2" ? 'bg-[#eeebeb]' : ''}`}>
                  <div className='flex justify-between items-center'>
                    <AccordionTrigger onClick={() => handleToggle("item-2")}>
                      How can I purchase shares in Genesis Bank?
                    </AccordionTrigger>
                    <button
                      className="text-xl"
                      onClick={() => handleToggle("item-2")}
                    >
                      {openItem === "item-2" ? <IoMdRemove /> : <IoMdAdd />}
                    </button>
                  </div>
                  <AccordionContent>
                    <div className='pr-12'>
                      Genesis Bank is Ethiopia's first investment bank, offering a rare opportunity to be part of a pioneering financial institution. Our innovative approach, combined with a deep understanding of the local market, positions us for significant growth and long-term success.
                    </div>
                  </AccordionContent>
                </div>
              </AccordionItem>
              <AccordionItem value="item-3">
                <div className={`py-2 px-5 rounded-md ${openItem === "item-3" ? 'bg-[#eeebeb]' : ''}`}>
                  <div className='flex justify-between items-center'>
                    <AccordionTrigger onClick={() => handleToggle("item-3")}>
                      What is the minimum investment required to purchase shares?
                    </AccordionTrigger>
                    <button
                      className="text-xl"
                      onClick={() => handleToggle("item-3")}
                    >
                      {openItem === "item-3" ? <IoMdRemove /> : <IoMdAdd />}
                    </button>
                  </div>
                  <AccordionContent>
                    <div className='pr-12'>
                      Genesis Bank is Ethiopia's first investment bank, offering a rare opportunity to be part of a pioneering financial institution. Our innovative approach, combined with a deep understanding of the local market, positions us for significant growth and long-term success.
                    </div>
                  </AccordionContent>
                </div>
              </AccordionItem>
              <AccordionItem value="item-4">
                <div className={`py-2 px-5 rounded-md ${openItem === "item-4" ? 'bg-[#eeebeb]' : ''}`}>
                  <div className='flex justify-between items-center'>
                    <AccordionTrigger onClick={() => handleToggle("item-4")}>
                      How will I receive updates about my investment?
                    </AccordionTrigger>
                    <button
                      className="text-xl"
                      onClick={() => handleToggle("item-4")}
                    >
                      {openItem === "item-4" ? <IoMdRemove /> : <IoMdAdd />}
                    </button>
                  </div>
                  <AccordionContent>
                    <div className='pr-12'>
                      Genesis Bank is Ethiopia's first investment bank, offering a rare opportunity to be part of a pioneering financial institution. Our innovative approach, combined with a deep understanding of the local market, positions us for significant growth and long-term success.
                    </div>
                  </AccordionContent>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
