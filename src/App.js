import React from "react";
import "./style.css"
import BahnhofSelector from "./components/BahnhofSelector";

const App = () => {
  return (
    <div className="centered">
      <span>Bahn Mining</span>
      <BahnhofSelector />
    </div>
  );
}

export default App;
