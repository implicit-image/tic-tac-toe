import { React, useState } from 'react'
import Row from './Row.js'
import './../style/Grid.css'


const Grid = () => {

  const [grid, setGrid] = useState(
    {
      cells: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]],
    }
  )
  const [gameState, setGameState] = useState(
    {
      currPlayer: 'X',
      playerWon: 0,
      gameEnd: false,
      XsSum: 0,
      OsSum: 0
    }
  )

  const updateGrid = (value, x, y) => {
    //iterate over rows
    for (var row = 0; row < grid.cells.length; row++) {
      //iterate over columns in each row
      for (var col = 0; col < grid.cells[0].length; col++) {
        if (col == x && row == y) {
          const updatedCells = grid.cells
          updatedCells[row][col] = value
          setGrid({ cells: updatedCells })
          return 0
        }
      }
    }
    return 1
  }




  const onClickCell = (x, y) => {

    //change cell content if possible
    const button = document.getElementById(`cell-${y}-${x}`) || null

    if (button == null) {
      console.log('button couldnt be selected')
    }
    if (!(button.innerText == 'X' || button.innerText == 'O')) {
      //button is empty
      // update html
      button.innerText = gameState.currPlayer


      // update cells state
      updateGrid(gameState.currPlayer, x, y)

      //update game state
      setGameState({
        ...gameState,
        currPlayer: gameState.currPlayer == 'X' ? 'O' : 'X'
      })

      console.log(grid)
      console.log(gameState)


      } else {
      console.log("this  cell is taken")
    }



    //swap player turn


  }

  return(
    <div className='grid'>
      { grid.cells.map((row, i) =>
      <Row
        cells={row}
        row={i}
        onclick={(x, y) => onClickCell(x, y)}
        key={i}
      />) }
    </div>
  )
}


export default Grid
