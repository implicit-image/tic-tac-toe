import React from 'react'
import '../style/Cell.css'

const Cell = ({
  onclick,
  rownum,
  cellnum,
  gamestate
}) => {
  return(
    <div className='cell' id={`cell-${rownum}-${cellnum}`}>
      <button onClick={onclick}>
        <p className="cell-content">{rownum} {cellnum}</p>
      </button>
    </div>
  )
}
export default Cell;
