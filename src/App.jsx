import { useState } from 'react'
import './App.css'
import EiffelTower from "./components/EiffelTower";
import SoccerField from './components/SoccerField';
import Castellana from './components/Castellana';

function App() {
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [tall, setTall] = useState("");
  const [calculate, setCalculate] = useState(false);

  const changeUnit = (value, unit) => {
    if (unit === "width") { setWidth(value.target.value); setCalculate(true); }
    if (unit === "length") { setLength(value.target.value); setCalculate(true); }
    if (unit === "tall") { setTall(value.target.value); setCalculate(true); }
  }

  return (
    <>
      <h1>Universal Journalist Unit Calculator</h1>
      <p>True journalist measures in meters</p>
      <div>
        <label>
          Width:
          <input type="number" name="width" value={width} onChange={(e) => changeUnit(e, "width")} />
        </label>
        <label>
          Length:
          <input type="number" name="length" value={length} onChange={(e) => changeUnit(e, "length")} />
        </label>
        <label>
          Tall:
          <input type="number" name="tall" value={tall} onChange={(e) => changeUnit(e, "tall")} />
        </label>
        <p>You need to write almost one to begin</p>
      </div>
      {calculate && (
        <div>
          {tall && <EiffelTower width={width} tall={tall} length={length} />}
          {length && <Castellana width={width} tall={tall} length={length} />}
          {(length || width) && <SoccerField width={width} tall={tall} length={length} />}
        </div>
      )}
    </>
  );
}

export default App
