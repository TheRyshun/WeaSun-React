import React from "react";
import Background from "./background.png";

const contentP = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          overflow: "hidden",
        }}
        className="w-full h-full"
      >
        <div className="py-24 flex justify-center items-center">
            <div className="text-white">
            <h1 className="px-4 py-2 text-5xl md:text-6xl rounded-t-lg font-bold font-anton tracking-widest bg-gradient-to-r from-[#CE2ADC] via-purple-500 to-blue-500 opacity">P a n e l - U s e r</h1>
            <p className="bg-black opacity-70 text-white">
            <ul className="py-12 text-center">
              <li className="text-6xl font-caveat border-b-2">Nom d'utilisateur</li>
              <li className="py-8 text-3xl">Ayden</li>
            </ul>
            <ul className="py-12 text-center">
              <li className="text-6xl font-caveat border-b-2">Email</li>
              <li className="py-8 text-2xl">ayden@gmail.com</li>
            </ul>
          </p>

          <div className="bg-black opacity-70 mb-24 rounded-b-lg flex justify-center items-center">
            <button className="my-8 py-4 px-4 tracking-widest bg-red-500 hover:bg-red-700 text-2xl">
            Page Météorologique 
            </button>
          </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default contentP;
