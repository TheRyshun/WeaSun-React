import React from 'react'
import WeatherContent_1 from './assets/weather-content-1.png'
import { AiFillGithub } from "react-icons/ai";

const Content = () => {
  return (
    <div className='p-12 w-full bg-[#FDEDEC]'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={WeatherContent_1} alt="/" />
          <div className='flex flex-col justify-items-center'>
            <p className='text-blue-400 font-bold'>AAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>BBBBBBBBBBBBBBBBBBBBBBBBBBB</h1>
            <p className='py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nam cumque ea adipisci alias illum non debitis corporis praesentium dolor provident officiis magni sit animi labore nobis, deleniti quia nulla.</p>
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