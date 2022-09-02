import React from "react";
import Background from "./heart.gif";
import { AiFillGithub } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="bg-[#FDEDEC]">
      <div className="grid grid-cols-3 p-12">
        <div className="col-span-2 border-t-4 border-b-4 border-l-4 border-[#CE2ADC] rounded-l-md">
          <div className="bg-blue-300 flex justify-center items-center">
            <div>
              <p className="text-2xl py-4 italic">
                Disponible 24/7
                <br />
              </p>
              <h1 className="text-4xl py-4 font-bold">
                Retrouver le code complet de WeaSun sur GitHub.
              </h1>
              <button
                type="button"
                class="border-4 border-black hover:border-[#9500a3] border-l-[#CE2ADC] hover:border-l-[#9500a3] text-white bg-black/90 font-medium rounded-lg text-lg px-5 py-2.5 my-8 text-center inline-flex items-center tracking-widest"
              >
                <AiFillGithub className="mr-2 -ml-1 w-4 h-4" />
                Github
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${Background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            overflow: "hidden",
          }}
        ></div>
      </div>
    </div>
  );
};

export default NavBar;
