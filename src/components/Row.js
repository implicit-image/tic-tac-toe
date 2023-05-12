import React from 'react'
import Cell from './Cell.js'
import '../style/Row.css'



const Row = ({ cells, row, state, onclick }) => {





  return(
    <div className='row'>
      {cells.map((cell, i) =>
      <Cell
        onclick={() => onclick(i, row)}
        key={i}
        cellnum={i}
        rownum={row}
      />)}
    </div>
  )


}


export default Row;
