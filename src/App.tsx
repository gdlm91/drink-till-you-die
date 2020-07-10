import React from "react";
import "./App.css";
import Board from "./Board";
import Dice, { DiceValues } from "./Dice";

function App() {
  function handleOnDiceChange(value: DiceValues, rolling: boolean) {
    console.log({ value, rolling });
  }

  return (
    <div className="App">
      <header>
        <h1>Drink till you die</h1>
        <Dice onChange={handleOnDiceChange} />
        <Board />
      </header>
    </div>
  );
}

export default App;
