import { useState } from 'react'
import './App.css'

function App() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [depth, setDepth] = useState("");

  const changeUnit = (value, unit) => {
    console.log("Change Unit Called:", value)
    if (unit === "width") { setWidth(value.target.value); }
    if (unit === "height") {
      setHeight(value.target.value);
    }
    if (unit === "depth") {
      setDepth(value.target.value);
    }
  }

  return (
    <>
      <h1>Universal Journalist Unit Calculator</h1>
      <label>
        Height:
        <input type="number" name="height" value={height} onChange={e => changeUnit(e, "height")} />
      </label>
      <label>
        Width:
        <input type="number" name="width" value={width} onChange={e => changeUnit(e, "width")} />
      </label>
      <label>
        Depth:
        <input type="number" name="depth" value={depth} onChange={e => changeUnit(e, "depth")} />
      </label>
      <p>You need to write almost one to begin</p>
    </>
  );
}

export default App
