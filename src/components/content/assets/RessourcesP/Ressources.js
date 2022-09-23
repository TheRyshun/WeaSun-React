import React from "react";
import Start_R from "./Starter-Ressources";
import Content_R from "./Content-Ressources";
import NavBar from "../../NavBar";
import Footer from "../../Footer";

function Ressources() {
  return (
    <div className="Ressources">
        <NavBar/>
        <Start_R/>
        <Content_R/>
        <Footer/>
    </div>
  );
}

export default Ressources;