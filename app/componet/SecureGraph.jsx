import React from 'react';
import { Graphline } from './graph';

const SecureGraph = () => {
  return (
    <div className="max-w-6xl mx-auto mt-5 px-4">
      <div className="md:flex md:justify-between items-center flex-col md:flex-row">
        <div className="flex flex-col justify-center items-center md:items-start w-full md:w-fit mb-5 md:mb-0 text-center md:text-left">
          <h1 className="text-2xl font-bold">Secure. Grow. Succeed.</h1>
          <p className="max-w-xs text-sm md:text-base mt-2">
            Genesis Bank offers innovative investment solutions to help you achieve your financial goals. Invest smartly with us.
          </p>
        </div>

        <div className="w-full md:w-auto">
          <Graphline />
        </div>
      </div>
    </div>
  );
};

export default SecureGraph;
