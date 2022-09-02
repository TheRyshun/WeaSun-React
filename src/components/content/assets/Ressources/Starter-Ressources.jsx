import React from "react";
import { VscGroupByRefType } from "react-icons/vsc";
import { MdRouter } from "react-icons/md";


const NavBar = () => {
  return (
    <div className="bg-[#FDEDEC]">
      <div className="p-12">
        <h1 className="text-2xl font-bold">Our Most Popular Services</h1>
        <p className="text-xl">Fully licensed, bonded et insured</p>
      </div>
      <div class="p-12 grid grid-cols-2 md:grid-cols-4 gap-4">

        <div class="bg-blue-300 py-6 px-4 border-l-4 border-[#CE2ADC]">
          <VscGroupByRefType size={40}/>
          <h1 className="py-2 text-xl md:text-2xl font-bold italic">
          React-Typed            
          </h1>
          <p>
          Avouons-le l'effet de frappe a l'air cool et la bonne nouvelle, c'est qu'il est sur le site pour un belle effet.
          </p>
          </div>

          <div class="bg-blue-300 py-6 px-4 border-l-4 border-[#CE2ADC]">
          <MdRouter size={40}/>
          <h1 className="py-2 text-xl md:text-2xl font-bold italic">
          React-router-dom            
          </h1>
          <p>
          Une bibliothèque de routage complète, côté client et côté serveur permettant de créer des interfaces utilisateur.
          </p>
          </div>

          <div class="bg-blue-300 py-6 px-4 border-l-4 border-[#CE2ADC] md:col-span-2">
          <MdRouter size={40}/>
          <h1 className="py-2 text-xl md:text-2xl font-bold italic">
          Ajax            
          </h1>
          <p>
          Ajax est une méthode utilisant différentes technologies permettant des requêtes au serveur web et en conséquence de modifier partiellement la page web affichée sur le poste client sans avoir à afficher une nouvelle page complète.
          </p>
          </div>

          <div class="bg-blue-300 py-6 px-4 border-l-4 border-[#CE2ADC] md:col-span-2">
          <MdRouter size={40}/>
          <h1 className="py-2 text-xl md:text-2xl font-bold italic">
          React.JS            
          </h1>
          <p>
          I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
          </p>
          </div>

          <div class="bg-blue-300 py-6 px-4 border-l-4 border-[#CE2ADC] col-span-2">
          <MdRouter size={40}/>
          <h1 className="py-2 text-xl md:text-2xl font-bold italic">
          OpenWeather            
          </h1>
          <p>
          I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
          </p>
          </div>

      </div>
    </div>
  );
};

export default NavBar;
