/* React / Passerelle  */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Pages Web */
import Ressources from "./components/content/assets/RessourcesP/Ressources";
import Home from "./components/content/assets/HomeP/Home";
import About from "./components/content/assets/AboutP/About";
import Register from "./components/content/assets/Register/Register";
import Login from "./components/content/assets/LoginP/Login";
import Panel from './components/content/assets/panel/Panel';
import Trial from './components/content/assets/TrialVersion/Trial';

function App() {
  return (    
    <div className="App">
    <Router>
    <Routes>
        <Route exact path="/" element={<Home />}/> 
        <Route path="/home" element={<Home />}/> 
        <Route path="/ressources" element={<Ressources />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/trial" element={<Trial />} />
    </Routes>
    </Router>

</div>
  );
}

export default App;
