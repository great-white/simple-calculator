import React from "react";
import "./App.css";
import CalculatorButton from "./components/button/CalculatorButton";
import Display from "./components/display/Display";
import Structure from "./components/structure/Structure";

function App() {
  return (
    <div className="App">
      <h1>Hello Calculator</h1>
      <Structure />
    </div>
  );
}

export default App;
