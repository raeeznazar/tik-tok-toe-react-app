import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
function App() {
  return (
    <>
      <div id="game-container">
        <ol id="players">
          <Player initialName='Player 1' symbol='x' />
          <Player initialName='Player 2' symbol='0' />
        </ol>
        <GameBoard />
      </div>
    </>

  )
}

export default App
