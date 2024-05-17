import { useState } from "react"


let initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]


export default function GameBoard() {

    const [gameBoard, setGameBoard] = useState(initialGameBoard)


    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updateGameboard = [...prevGameBoard.map(innerArray => [...innerArray])]
            updateGameboard[rowIndex][colIndex] = 'X';
            return updateGameboard
        })
    }
    return (
        <ol id="game-board">
            {
                gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => <li key={colIndex}><button onClick={() => handleSelectSquare(rowIndex, colIndex)} >{playerSymbol}</button></li>)}
                    </ol>
                </li>)
            }
        </ol>
    )
}