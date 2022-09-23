import React from "react";
import ContentAbout from "./ContentAbout";
import NavBar from "../../NavBar";
import Footer from "../../Footer";

function About() {
    return (
      <div className="About">
        <NavBar/>
        <ContentAbout/>
        <Footer/>
      </div>
    );
  }
  
  export default About;