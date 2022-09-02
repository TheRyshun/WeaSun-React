import React from 'react'
import WeatherContent_1 from './weather-content-1.png'
import { AiFillGithub } from "react-icons/ai";

const Content = () => {
  return (
    <div className='p-12 w-full bg-[#FDEDEC]'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={WeatherContent_1} />
          <div className='flex flex-col justify-items-center'>
            <p className='text-blue-400 font-bold'>Projet Personnel</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl italic font-anton py-2'>Site Applicatif</h1>
            <p className='py-8'>
              Prévisions météorologiques les plus complètes et fiables dans le monde. <br />
              Le dashboard vous fournissent des informations détaillées pour votre localité. <br />
              Comme la météo la plus actualisée, la situation actuelle. <br />
              Elles vous offrent également des infos complémentaires intéressantes telles que l'heure du lever et coucher du soleil..</p>
            <button type="button" class="border-4 border-black hover:border-[#9500a3] border-l-[#CE2ADC] hover:border-l-[#9500a3] text-white bg-black/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
        <AiFillGithub className='mr-2 -ml-1 w-4 h-4' />
        Github
        </button>
          </div>
      </div>
    </div>
  )
}

export default Content