import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react"
function App() {

  const [activePlayer, setActivePlayer] = useState('X');
  function handleSelectSquare(){
    setActivePlayer((currActive)=>currActive === 'X'? 'O' : 'X');
  }
  return (
    <>
      <div id="game-container">
        <ol id="players">
          <Player initialName='Player 1' symbol='X'  isActive={activePlayer==='X'}   />
          <Player initialName='Player 2' symbol='O' isActive ={activePlayer==='O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol ={activePlayer} />
      </div>
    </>

  )
}

export default App
