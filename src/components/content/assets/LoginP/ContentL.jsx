import React from 'react'
import Background from "./background.jpg";
import { useState } from "react";
import Axios from 'axios';
import {Link} from 'react-router-dom'

const ContentL = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [loginStatut, setLoginStatut] = useState('')

  const login = () => {
    Axios.post('http://localhost:3001/login', {
      username: username,
      password : password
    }).then((res) => {
      if (res.data.message) {
        setLoginStatut(res.data.message)
      }
      setLoginStatut(res.data.message)

    });
    
  };

  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
      className="w-full h-full"
    >
      <div className="p-24 md:p-32 w-[full] md:w-[60%]">
        <p className="py-10 flex justify-center text-5xl md:text-7xl font-bold text-[#CE2ADC]">
          🌤
          <h1 className="font-caveat">WeaSun</h1>
        </p>

        <div className="py-12 text-white bg-black opacity-90 rounded-t-xl">
          <h1 className="text-center py-6 text-3xl md:text-5xl font-anton">Se Connecter</h1>

          <p className="py-6 text-xl">
            <input
              type="text"
              className="w-full text-white py-4 border-2 border-gray-500 hover:border-blue-400 placeholder-blue-400 hover:caret-blue-400 bg-black opacity-70 rounded-sm"
              id=""
              minlength={16}
              maxlength={32}
              placeholder="Nom d'Utilisateur"
              onChange={(e) =>{
                setUsername(e.target.value)
              }}
            />
          </p>

          <p className="pt-6 text-xl">
            <input
              type="password"
              className="w-full py-4 text-white border-2 border-gray-500 hover:border-blue-400 placeholder-blue-400 hover:caret-blue-400 bg-black opacity-70 rounded-sm"
              id=""
              minlength={16}
              maxlength={32}
              placeholder="Mot de passe"
              onChange={(e) =>{
                setPassword(e.target.value)
              }}
            />
          </p>

          <h1 className='flex justify-center items-center pt-6 text-2xl font-bold '>{loginStatut}</h1>
        </div>
        <div className="bg-black opacity-90 rounded-b-xl py-6 text-white">
            <div className='flex justify-center items-center'>
            <button onClick={login} className="py-4 px-8 rounded-full text-center text-xl md:text-2xl tracking-widest font-bold bg-green-400 hover:bg-green-600">AUTHENTIFICATION</button>
            </div>
          <p className="flex justify-center py-6 text-2xl font-bold">
          <h1 className="invisible md:visible">Besoin d'un compte ?</h1>
          <a href="/login" className="px-4 invisible md:visible hover:underline hover:underline-offset-8 hover:text-[#CE2ADC]"><Link to="/register">Register</Link></a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContentL