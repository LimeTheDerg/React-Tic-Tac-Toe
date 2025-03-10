interface Props {
    xIsNext : boolean;
    squares: string[];
    onPlay: (nextSquares : string[]) => void;
}

import XOBox from './XOBox.tsx'

export default function GameBoard({xIsNext, squares, onPlay}:Props) {
    let nextSquares = squares.slice();
    function handlePress(num : number) {
        if (nextSquares[num] == 'X' || nextSquares[num] == 'O') return;
        if (xIsNext) {
            nextSquares[num] = 'X' 
        }
        else {
            nextSquares[num] = 'O'
        }
        onPlay(nextSquares);
    }
    function handleRestart() {
        nextSquares = ['-','-','-','-','-','-','-','-','-'];
        onPlay(nextSquares)
        xIsNext = true;
    }
    let statusP: string = "";
    if(determineWin(nextSquares) === 'X') {
        statusP = 'X has Won!'
    }
    else if(determineWin(nextSquares) === 'O') {
        statusP = 'O has Won!'
    }
    else {
        statusP = 'The next player is ' + (xIsNext===true ? 'X' : 'O');
    }
    return (
        <>
        <div className='indicator'>{statusP}</div>
        <div className='container'>
            <XOBox value={squares[0]} onPress={() => handlePress(0)} />
            <XOBox value={squares[1]} onPress={() => handlePress(1)} />
            <XOBox value={squares[2]} onPress={() => handlePress(2)} />
                <br/>
            <XOBox value={squares[3]} onPress={() => handlePress(3)} />
            <XOBox value={squares[4]} onPress={() => handlePress(4)} />
            <XOBox value={squares[5]} onPress={() => handlePress(5)} />
                <br/>
            <XOBox value={squares[6]} onPress={() => handlePress(6)} />
            <XOBox value={squares[7]} onPress={() => handlePress(7)} />
            <XOBox value={squares[8]} onPress={() => handlePress(8)} />
        </div>
        <br />
        <button className='restart' onClick={handleRestart}>Restart</button>
        </>
    )
}

function determineWin(squareArr:string[]) {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i = 0; i < 9; i++) {
        try {
            if (squareArr[winConditions[i][0]] === 'X' && squareArr[winConditions[i][1]] === 'X' && squareArr[winConditions[i][2]] === 'X') {
                console.log(squareArr)

                return 'X';
            }
            else if (squareArr[winConditions[i][0]] === 'O' && squareArr[winConditions[i][1]] === 'O' && squareArr[winConditions[i][2]] === 'O') {
                console.log(squareArr)

                return 'O';
            }
        } catch (error) {
        }
    }
}