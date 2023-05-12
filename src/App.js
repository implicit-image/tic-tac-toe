import logo from './logo.svg';
import Grid from './components/Grid.js'
import { useState } from 'react'


const App = () => {

  const [grid, setGrid] = useState(
    {
      cellCount: 3,
      rowCount: 3,
      cells: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]],
      playerTurn: 1,
      score: 0
    }
  )



  return (
    <div className="App">
      <Grid state={grid}/>
    </div>
  );
}

export default App;
