import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

const ContentAbout = () => {
  return (
    <div className="bg-[#FDEDEC]">
      {/*Haut du content*/}

      <div className="bg-[#ffe5e3] flex justify-center items-center p-12">
        <p className="md:text-2xl text-md text-center">
          <h1 className="text-3xl md:text-4xl py-8">Allez-y, contactez-moi</h1>
          Toutes vos intentions et conseils pour l'évolution de WeaSun sont les
          bienvenus. <br />! Votre message sera envoyé dans le panel pour être
          vu !
        </p>
      </div>

      {/*Bas du cotent*/}

      <div className="p-4 md:p-32 grid grid-cols-2">
        <div className="md:col-span-1 col-span-2 pb-8 md:pb-0 border-r-0 md:border-r-4 md:border-black text-md">
          
          <div className="flex justify-start gap-12 text-sm md:text-xl">
          <ul>
            <li className="mb-2">Email  *</li>
            <li>
              <input
                type="text"
                className="border-2 border-black rounded-md"
                id=""
                minlength={16}
                maxlength={32}
                size={24}
              />
            </li>
          </ul>

          <ul>
          <li className="mb-2">UserName *</li>
            <li>
              <input
                type="text"
                className="border-2 border-black rounded-md"
                id=""
                minlength={16}
                maxlength={32}
                size={24}
              />
            </li>
          </ul>
          
          </div>

        <div className="mt-10 text-md md:text-xl">
          <ul>
            <li className="mb-2">Message *</li>
            <li> <textarea type="text" className="border-2 border-black rounded-md" id="" minlength={16} maxLength={256} cols={61}/></li>
          </ul>
        </div>

        <button className="bg-blue-300 px-[100px] mt-12 rounded-full border-2 border-blue-400 hover:bg-gradient-to-br from-sky-500 to-[#f04fff]">ENVOYER</button>

          </div>

          <div className="md:col-span-1 col-span-2 pl-6">
          <div className="grid grid-cols-2 gap-8">

          <div>
            <MdAlternateEmail size={30}/>
            <h1 className="text-xl md:text-3xl">Email</h1>
            <p className="text-md md:text-xl italic">
              thomastetrel@gmail.com
            </p>
          </div>

          <div>
            <AiFillLinkedin size={30}/>
            <h1 className="text-xl md:text-3xl">Linkedin</h1>
            <p className="text-md md:text-xl italic">
            linkedin.com/in/thomas-tetrel
            </p>
          </div>

          <div>
            <BsDiscord size={30}/>
            <h1 className="text-xl md:text-3xl">Discord</h1>
            <p className="text-md md:text-xl italic">
            discordapp.com/users/210035828796162048
            </p>
          </div>

          <div>
            
          </div>


          </div>
          </div>
          
          </div>
      </div>
  );
};

export default ContentAbout;
