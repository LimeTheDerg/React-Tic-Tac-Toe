import { useState } from "react";
import GameBoard from "./GameBoard";
    
function Game() {
    const [sqArr, setSqArr] = useState(['-','-','-','-','-','-','-','-','-'])
    function handlePlay(nextSquares:any) {
        setXIsNext(!xIsNext)
        setSqArr(nextSquares);
    }
    const [xIsNext, setXIsNext] = useState(true);    
    return (
        <div className="game">
        <GameBoard onPlay={handlePlay} xIsNext={xIsNext} squares={sqArr}/>
        </div>
    )
}

export default Game;
