import React, { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";


function Navbar() {
    const [nav, setNav] = useState(false)
    const handleClick = () => {
        setNav(!nav)
    }
    
  return (
    <div className=" flex  justif-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black">
      <h1 className="w-full text-3xl font-bold ">SayersWindows</h1>
      <ul className="hidden md:flex ">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Services</li>
        <li className="p-4">Projects</li>
        <li className="p-4">Testimonials</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleClick} className="block md:hidden">
        {!nav ? <RiMenuLine size={20}/> : <RiCloseLine size={20}/>}
         
      </div>
      <div className={!nav ? 'fixed hidden': 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-slate-300 ease-in-out'}>
        <h1 className="w-full text-3xl font-bold m-4 ">SayersWindows</h1>
        <ul className="uppercase">
          <li className="p-4">Home</li>
          <li className="p-4">About</li>
          <li className="p-4">Services</li>
          <li className="p-4">Projects</li>
          <li className="p-4">Testimonials</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
