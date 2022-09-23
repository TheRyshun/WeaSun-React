import React from "react";
import Background from "./background.jpg";
import { useState } from "react";
import Axios from 'axios';
import {Link} from 'react-router-dom'

const Content = () => {
  const [usernameReg, setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')
  const [emailReg, setEmailReg] = useState('')

  const register = () => {
    Axios.post('http://localhost:3001/register', {
      username: usernameReg,
      password : passwordReg,
      email : emailReg
  
    })
  }  
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
        <p className="flex text-5xl md:text-7xl font-bold text-[#CE2ADC]">
          🌤
          <h1 className="font-caveat">WeaSun</h1>
        </p>

        <div className="py-12 text-white">
          <h1 className="py-4 text-3xl md:text-5xl font-anton">Créez votre compte</h1>

          <p className="py-6 text-xl">
            <input
              type="text"
              className="w-full py-4 border-2 border-gray-500 hover:border-blue-400 placeholder-blue-400 hover:caret-blue-400 bg-black opacity-70 rounded-sm"
              id=""
              minlength={16}
              maxlength={32}
              placeholder="Nom d'utilisateur"
              onChange={(e) =>{
                setUsernameReg(e.target.value)
              }}
            />
          </p>

          <p className="py-6 text-xl">
            <input
              type="email"
              className="w-full py-4 border-2 border-gray-500 hover:border-blue-400 placeholder-blue-400 hover:caret-blue-400 bg-black opacity-70 rounded-sm"
              id=""
              minlength={16}
              maxlength={32}
              placeholder="Email"
              onChange={(e) =>{
                setEmailReg(e.target.value)
              }}              
            />
          </p>

          <p className="pt-6 text-xl">
            <input
              type="password"
              className="w-full py-4 border-2 border-gray-500 hover:border-blue-400 placeholder-blue-400 hover:caret-blue-400 bg-black opacity-70 rounded-sm"
              id=""
              minlength={16}
              maxlength={32}
              placeholder="Mot de passe"
              onChange={(e) =>{
                setPasswordReg(e.target.value)
              }}
            />
          </p>
        </div>
        <div className="py-12 text-white">
          <button onClick={register} className="w-full py-4 rounded-full text-center text-xl md:text-2xl tracking-widest font-bold bg-green-400 hover:bg-green-600">CRÉER MON COMPTE</button>
          <p className="flex justify-center py-4 text-2xl font-bold">
          <h1 className="invisible md:visible">Compte déjà créer ?</h1>
          <a href="/login" className="px-4 invisible md:visible hover:underline hover:underline-offset-8 hover:text-[#CE2ADC]"><Link to="/login">Login</Link></a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
