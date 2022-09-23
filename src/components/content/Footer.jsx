import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-black text-white'>
        <div className='grid md:grid-cols-2 py-6'>

            <div className='px-8'>
            <p className='py-4 flex md:justify-start justify-center w-full text-4xl font-bold text-[#CE2ADC]'>🌤
            <h1 className=''>
             WeaSun
            </h1>
            </p>
            
            <p className='text-center md:text-left'>
                Site internet pour visualiser la météo sur un lieu précis avec ces détails comme l'humidité, le vent, etc....
                <br />
                Crée par Thomas Tetrel avec le langage React.JS et d'autres outils.
            </p>
            </div>

            <div className='flex justify-center items-center'>
            <ul className='md:flex md:border-b hidden text-center gap-8'>
                <li className='py-2'>Ressources</li>
                <li className='py-2'>About</li>
                <li className='py-2'>GitHub</li>
                <li className='py-2'>Login</li>
                <li className='py-2'>Register</li>
            </ul>



            </div>

        </div>
    </div>
  )
}

export default Footer
