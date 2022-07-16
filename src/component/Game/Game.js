import React, { useState } from 'react';
import './Game.css';
import { Board } from '../Board/Board';

export const Game = () => {
  const winningCombination = [];
  const [cellValues, setCellValues] = useState(['', '', '', '', '', '', '', '', ''])
  const onCellClicked = (cellIndex) => {
    const newCellvalues = [...cellValues];
    cellValues[cellIndex] = 'X';
    setCellValues(newCellvalues );
  }

  return (
    <>
      <div id="game">
        <h1> X O GAME </h1>
        <Board
          cellValues={cellValues}
          winningCombination={winningCombination}
          cellClicked={onCellClicked}
        />
      </div>

      <div id="modal-overlay">
        <div id="game-result-modal">
          <div id="result-container">
            <div id="winner-container">
              <span></span>
            </div>
          </div>
          <div id="new-game-container">
            <button id="new-game-button">Start New Game</button>
          </div>
        </div>
      </div>
    </>
  );
};
