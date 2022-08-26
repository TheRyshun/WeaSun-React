import React from "react";
import NavBar from "./components/NavBar";
import Starter from "./components/Starter";
import Content from "./components/Content";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Starter />
      <Content />
      <Newsletter />
    </div>
  );
}

export default App;
