import React from 'react';

const Discover = ({ reverse = false }) => {
  return (
    <div className="max-w-6xl mx-auto my-10 px-4 mb-12">
      <div
        className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} md:justify-between items-center`}
      >
        <div className="flex flex-col max-w-[600px] justify-center items-center md:items-start w-full md:w-fit mb-5 md:mb-0 text-center md:text-left">
          <h1 className="text-2xl font-bold">
            Discover the Strategic Advantages of <br /> Partnering with Genesis Bank.
          </h1>
          <p className="max-w-[503px] md:max-w-[400px] text-sm md:text-base mt-2">
            Investing in Genesis Bank means becoming part of a historic financial transformation. With Ethiopia’s growing economy and our strategic approach, your investment is poised to yield significant returns.
          </p>
        <button className='py-2 mt-12 px-6 rounded-md border'>Learn More</button>

        </div>

        <div className=" w-full md:w-[502px] relative h-[303px] bg-[#FAFAFA] rounded-xl">
          <div className="w-[300px] md:w-[365px] absolute right-0 h-[303px] bg-[#E2EBED] rounded-xl">
            <div className="absolute w-[255px] md:w-[345px] h-[211px] right-[120px] top-[50px]">
              <img src="./carta.png" alt="" className="w-full h-full " />
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Discover;
