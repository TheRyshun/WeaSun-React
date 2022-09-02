import React from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

const Card = () => {
  return (
    <div className='w-full py-8 bg-[#FDEDEC]'>

        <div className='flex justify-center pb-10 md:text-5xl sm:text-4xl text-2xl font-bold italic'>
        <p className='border-b-2 border-black py-2'>Nos Versions</p>

        </div>

        <div className='max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10'>


            <div className='bg-black w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                <BsFillMoonStarsFill size={37} className='w-20 mx-auto mt-[-4rem]'/>
                <h2 className='text-[#CE2ADC] text-2xl font-bold text-center py-8'>Single Use</h2>
                <p className='text-white text-center text-4xl font-bold'>🔓</p>
                <div className='text-center text-white font-medium italic'>
                    <p className='py-3 border-b mx-8 mt-8'>Pas d'authentification</p>
                    <p className='py-3 border-b mx-8'>Localisation Météo</p>
                    <p className='py-3 border-b mx-8'>Détails sur les températures (max/min/ress)</p>
                    <p className='py-3 border-b mx-8'>Dark Mode</p>
                </div>
                <button className='tracking-widest mt-8 p-4 py-3 text-white font-bold rounded-full border-2 border-blue-400 hover:bg-gradient-to-br from-sky-500 to-[#f04fff]'>
                    TRIAL VERSION
                </button>
                </div>


                <div className='bg-black w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-110 duration-300'>
                <BsFillSunFill size={40} className='w-20 mx-auto mt-[-4rem]'/>
                <h2 className='text-yellow-300 text-2xl font-bold text-center py-8'>Wea Use</h2>
                <p className='text-white text-center text-4xl font-bold'>🔐</p>
                <div className='text-center text-white font-medium italic'>
                    <p className='py-3 border-b mx-8 mt-8'>Besoin d'un compte / Avantages du "Single Use"</p>
                    <p className='py-3 border-b mx-8'>Visualiser la météo de n'importe quelle ville</p>
                    <p className='py-3 border-b mx-8'>Détails du lever et coucher du soleil</p>
                    <p className='py-3 border-b mx-8'>Boussole Vent avec détails</p>
                </div>
                <button className='tracking-widest mt-8 p-4 py-3 text-white font-bold rounded-full border-2 border-blue-400 hover:bg-gradient-to-br from-sky-500 to-yellow-300'>
                    COMPLETE VERSION
                </button>
                </div>

        </div>
    </div>
  )
}

export default Card
