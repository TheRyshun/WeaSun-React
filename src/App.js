/* React / Passerelle  */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Pages Web */
import Ressources from "./components/content/assets/Ressources/Ressources";
import Home from "./components/content/assets/HomeP/Home";
import About from "./components/content/assets/AboutP/About";

/* Composents des pages */

import NavBar from "./components/content/NavBar";
import Starter from './components/content/assets/HomeP/Starter';
import Content from './components/content/assets/HomeP/Content';
import Newsletter from './components/content/assets/HomeP/Newsletter';
import Card from './components/content/assets/HomeP/Card';

import Footer from './components/content/Footer';


function App() {
  return (
    <div className="App">
    <NavBar/>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/ressources" element={<Ressources />} />
        <Route exact path="/about" element={<About />} />
    </Routes>
    <Footer/>

</div>

  );
}

export default App;
