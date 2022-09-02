import React from 'react';
import Background from './ocean.webp';
import Typed from 'react-typed';
import { AiFillPlayCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";


const Starter = () => {
  return (
    <div style={{ backgroundImage:`url(${Background})`, backgroundRepeat:"no-repeat", backgroundSize: 'cover', overflow: 'hidden'}} className='w-full pt-16 h-[400px] mx-auto text-center flex flex-col justify-center'>
    <div>

    <p className='text-blue-400 font-bold italic p-4 text-2xl'>Fait par Thomas Tetrel en React</p>
    <h1 className='md:text-6xl sm:text-5xl text-3xl font-bold md:p-6 font-anton'>Retrouvez les prévisions</h1>
    <div className='flex justify-center items-center'>
        <p className='md:text-5xl sm:text-4xl text-xl font-bold font-caveat'>Rapide, Précis </p>
        <Typed
          className='pl-2 md:text-5xl sm:text-4xl text-xl font-bold font-caveat'
          strings={['sur toutes les villes de France', 'sur toutes les villes internationales', 'même sur la Boussole']}
          typeSpeed={250}
          backSpeed={100}
          delay={800}
          loop
        />
    </div>
    <div className='flex justify-center p-16 gap-8'>
    <button type="button" class="border-4 border-black hover:border-[#9500a3] border-l-[#CE2ADC] hover:border-l-[#9500a3] text-white bg-black/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
        <AiFillGithub className='mr-2 -ml-1 w-4 h-4' />
        Github
        </button>
    <button type="button" class="border-4 border-black hover:border-[#9500a3] border-l-[#CE2ADC] hover:border-l-[#9500a3] text-white bg-black/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
        <AiFillPlayCircle className='mr-2 -ml-1 w-4 h-4' />
        Version d'essais
        </button>
        </div>
    </div>
    </div>

    
  )
}

export default Starter
