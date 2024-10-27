

import React from "react";
import Nav from "../componet/Nav";

const page = () => {
  return (
  <div className="mb-[70px]">
    
    <div className="relative  text-white pt-6 2xl:px-[300px] md:px-[125px] md:pt-6 z-10">
          <Nav />
        </div>
      <div className="max-w-6xl mx-auto flex mt-[70px] flex-col items-center">
        <div className="text-center">
          <h1 className="text-[36px] font-bold">Get started with us </h1>
          <p className="text-[#161C2D] max-w-[654px]">
          Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.
          </p>
        </div>
      </div>

      <div className='max-w-6xl mx-auto mt-[50px]'>
      <div className='flex flex-col'>
        <div className='border p-9 rounded-xl space-y-6'>
          <div className='flex justify-between'>
            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>First & Last Name</span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. John Doe' />
              </div>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Phone Number</span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. (123) 456-7890' />
              </div>
            </div>
            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Email</span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. john.doe@example.com' />
              </div>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Subject</span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. Inquiry' />
              </div>
            </div>
          </div>
          <div className='space-y-4 flex flex-col'>
            <p>
              <span className='text-[#161C2D] font-bold text-[16px]'>Message</span>
            </p>
            <textarea
              id="feedback"
              rows="4"
              className="border p-2 rounded-xl text-[14px] w-full"
              placeholder="Type your message here..."
            />
          </div>
          <button type="submit" className="mt-4 bg-[#AF001E]  text-white px-[100px] py-2 rounded-md w-fit flex justify-center mx-auto">
          Submit
        </button>
        </div>
       
      </div>
    </div>
  </div>
  );



};

export default page;
