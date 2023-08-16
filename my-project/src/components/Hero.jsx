import React from "react";

function Hero() {
  return (
    <div className="text-black">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="font-bold p-2">Window fitting and repair specialist</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">30 years of exp</h1>
        <div>
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Insert snappy stuff</p>
        </div>
        <button className="bg-[#73e1e9] w-[150px] rounded-sm font-medium my-6 mx-auto py-3 text-black">Contact Us</button>
      </div>
    </div>
  );
}

export default Hero;
