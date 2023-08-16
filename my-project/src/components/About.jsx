import React from "react";
import Window from "../assets/windowrep.jpg";
function About() {
  return (
    <div className="w-full bg-slate-200 py-16 px-4">
      <div className="mw-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Window} className="w-[500px] mx-auto my-4" alt="EKHFLSMFLSJ" />
        <div className="flex flex-col justify-center">
          <p className="font-bold uppercase underline">About About</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">bout bout</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            odio accusamus adipisci repellat. Sunt saepe quam doloremque quod!
            Repudiandae optio atque eius ducimus at esse doloribus corporis
            necessitatibus dolore maxime.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
