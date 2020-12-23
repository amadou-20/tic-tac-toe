import React from "react";
import './App.css';
import Board from "./components/Board";


function App() {
  return (
    <div className="app">
      <h1>let's to jump a tic tac toe GAME </h1>
      <li>start the game</li>
      <li>end the game</li>
      <Board />
    </div>
  );
}

export default App;
