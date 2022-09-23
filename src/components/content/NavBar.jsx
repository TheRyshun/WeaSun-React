import React, { useState } from 'react'
import { CgMenuRound } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import {Link} from 'react-router-dom'


const NavBar = () => {
  
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }


  return (
    <body className='bg-black'>
    <div className='flex justify-between items-center h-24 mx-auto px-8 text-white'>
    <p className='flex w-full text-5xl font-bold text-[#CE2ADC]'>🌤
      <h1 className='font-caveat'>
      WeaSun
      </h1>
    </p>
    <ul className='hidden md:flex font-bold'>
      <li className='p-4 hover:rounded-full appearance-none border-0 border-t border-b border-yellow-300'><Link to="/home">Hub</Link></li>
      <li className='p-4 hover:rounded-full appearance-none border-0 border-t border-b border-yellow-300'><Link to="/ressources">Ressources</Link></li>
      <li className='p-4 hover:rounded-full appearance-none border-0 border-t border-b border-yellow-300'><Link to="/about">About</Link></li>
      <li className='p-4 hover:rounded-full appearance-none border-0 border-t border-b border-yellow-300'><a href="https://github.com/TheRyshun/WeaSun-React">GitHub</a></li>
    </ul>

    <ul className='pl-12 hidden md:flex items-center gap-6 tracking-widest font-bold'>
        <li className='p-4 py-3 rounded-full border-2 border-blue-400 hover:bg-gradient-to-br from-sky-500 to-[#f04fff]'><Link to="/login">Login</Link></li>
        <li className='p-4 py-3 rounded-full border-2 border-blue-400 hover:bg-gradient-to-br from-sky-500 to-[#f04fff]'><Link to="/register">Register</Link></li>
    </ul>
    
    <div onClick={handleNav} className='block md:hidden'>
        {nav ? <CgCloseO size={40}/> : <CgMenuRound size={40} />}
    </div>
    <ul className={nav ? 'fixed left-0 top-4 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-200 fixed left-[-100%]'}>
      <h1 className='w-full text-3xl font-bold text-[#CE2ADC] m-4'>🌤 WeaSun</h1>
        <li className='p-4 border-b border-gray-600'><Link to="/">Hub</Link></li>
        <li className='p-4 border-b border-gray-600'><Link to="/ressources">Ressources</Link></li>
        <li className='p-4 border-b border-gray-600'><Link to="/about">About</Link></li>
        <li className='p-4 border-b border-gray-600'><a href="https://github.com/TheRyshun/WeaSun-React">GitHub</a></li>
    </ul>
  </div>
    </body>
  )
}

export default NavBar