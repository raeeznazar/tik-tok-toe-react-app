import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
import { useState } from "react"
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currActive) => currActive === 'X' ? 'O' : 'X');
    setGameTurns((prevTurn) => {
      let currentPlayer = 'X'
      if (prevTurn.length > 0 && prevTurn[0].player === 'X') {
        currentPlayer = 'O'
      }
      const updatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurn];
      return updatedTurn
    });

  }
  return (
    <>
      <div id="game-container" >
        <ol id="players" className="highlight-player">
          <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'} />
          <Player initialName='Player 2' symbol='O' isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}
        />


      </div>
      <Log turns={gameTurns} />
    </>

  )
}

export default App
