import React, { useState } from "react";
import Board from "./components/Board";

const App = () => {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [xPlayer, setXPlayer] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleBoxClick = (boxIndex) => {
    const updatedBoard = cells.map((value, idx) => {
      if (idx === boxIndex) {
        return xPlayer ? "X" : "O";
      } else {
        return value;
      }
    });
    checkWinner(updatedBoard);
    setCells(updatedBoard);
    setXPlayer(!xPlayer);
  };

  const checkWinner = (cells) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      // Iterate through win conditions and check if either player satisfies them
      if (cells[x] && cells[x] === cells[y] && cells[y] === cells[z]) {
        setGameOver(true);
        return cells[x];
      }
    }
  };

  const resetBoard = () => {
    setGameOver(false);
    setCells(Array(9).fill(null))
  }


  return (
    <div>
      <Board
        cells={cells}
        onClick={gameOver ? resetBoard : handleBoxClick }
      />
    </div>
  );
};

export default App;
