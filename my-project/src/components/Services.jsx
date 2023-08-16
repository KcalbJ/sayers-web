import React from "react";
import { TbDoor, TbWindow, TbTool } from "react-icons/tb";
import Window from "../assets/window-bay-view.jpg";
function Services() {
  return (
    <div name="support" className="w-full mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={Window}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            Services
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">
           blah blah
          </h3>
          <p className="py-4 text-3xl text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            repudiandae veritatis ratione error tenetur, voluptates architecto
            possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo
            et cum vel?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-24 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl border-solid border-4 border-[#C8D9F0] shadow-[5px_5px_0px_0px_#C8D9F0]">
            <div className="p-8">
              <TbDoor  size={30}/>
              <h3 className="font-bold text-2xl my-6">Door Fitting</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi provident iure placeat blanditiis ea sint earum hic
                iste quibusdam exercitationem.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl border-solid border-4 border-[#C8D9F0] shadow-[5px_5px_0px_0px_#C8D9F0]">
            <div className="p-8">
              <TbWindow  size={30} />
              <h3 className="font-bold text-2xl my-6">Windows</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi provident iure placeat blanditiis ea sint earum hic
                iste quibusdam exercitationem.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl border-solid border-4 border-[#C8D9F0] shadow-[5px_5px_0px_0px_#C8D9F0]">
            <div className="p-8">
              <TbTool size={30} />
              <h3 className="font-bold text-2xl my-6">Repair Specialist</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi provident iure placeat blanditiis ea sint earum hic
                iste quibusdam exercitationem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
