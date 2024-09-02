"use client";
import { IoMdClose, IoMdAdd } from "react-icons/io";
import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (value) => {
    setOpenItem(openItem === value ? null : value);
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <div className="flex gap-5 items-center justify-between">
          <div className="flex gap-5 items-center">
            <p className="text-[28px] py-3 font-bold text-[#3C3C43]/50">01</p>
            <AccordionTrigger>
              Lower Risk
            </AccordionTrigger>
          </div>
          <button
            className={`flex justify-center items-center w-[48px] h-[48px] rounded-full text-white font-extrabold text-xl ${openItem === "item-1" ? 'bg-red-600' : 'bg-black'}`}
            onClick={() => handleToggle("item-1")}
          >
            {openItem === "item-1" ? <IoMdClose /> : <IoMdAdd />}
          </button>
        </div>
        <AccordionContent className="p-4"> {/* Added padding here */}
          This fund focuses on government bonds and high-grade corporate bonds, providing steady returns with lower volatility.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <div className="flex gap-5 items-center justify-between">
          <div className="flex gap-5 items-center">
            <p className="text-[28px] py-3 font-bold text-[#3C3C43]/50">02</p>
            <AccordionTrigger>
              Middle Risk
            </AccordionTrigger>
          </div>
          <button
            className={`flex justify-center items-center w-[48px] h-[48px] rounded-full text-white font-extrabold text-xl ${openItem === "item-2" ? 'bg-red-600' : 'bg-black'}`}
            onClick={() => handleToggle("item-2")}
          >
            {openItem === "item-2" ? <IoMdClose /> : <IoMdAdd />}
          </button>
        </div>
        <AccordionContent className="p-4"> {/* Added padding here */}
          This fund focuses on government bonds and high-grade corporate bonds, providing steady returns with lower volatility.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <div className="flex gap-5 items-center justify-between">
          <div className="flex gap-5 items-center">
            <p className="text-[28px] py-3 font-bold text-[#3C3C43]/50">03</p>
            <AccordionTrigger>
              High Risk
            </AccordionTrigger>
          </div>
          <button
            className={`flex justify-center items-center w-[48px] h-[48px] rounded-full text-white font-extrabold text-xl ${openItem === "item-3" ? 'bg-red-600' : 'bg-black'}`}
            onClick={() => handleToggle("item-3")}
          >
            {openItem === "item-3" ? <IoMdClose /> : <IoMdAdd />}
          </button>
        </div>
        <AccordionContent className="p-4"> {/* Added padding here */}
          This fund focuses on government bonds and high-grade corporate bonds, providing steady returns with lower volatility.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
