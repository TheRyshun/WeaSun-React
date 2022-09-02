import React from "react";
import Starter from "./Starter";
import Content from "./Content";
import Newsletter from "./Newsletter";
import Card from "./Card";

function Home() {
  return (
    <div className="Ressources">
        <Starter/>
        <Content/>
        <Newsletter/>
        <Card/>

    </div>
  );
}

export default Home;