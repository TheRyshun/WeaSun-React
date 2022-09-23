import React from "react";
import Starter from "./Starter";
import Content from "./Content";
import Newsletter from "./Newsletter";
import Card from "./Card";
import NavBar from "../../NavBar";
import Footer from "../../Footer";
 
function Home() {
  return (
    <div>
        <NavBar/>
        <Starter/>
        <Content/>
        <Newsletter/>
        <Card/>
        <Footer/>
        
    </div>
  );
}

export default Home;