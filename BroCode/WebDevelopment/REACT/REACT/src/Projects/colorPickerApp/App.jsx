import { useState } from "react";

function App() {
  const [color, setColor] = useState("#a55cff");

  return (
    <div className="app">
      <h1 className="title">Color Picker</h1>

      <div className="square" style={{ backgroundColor: color }}>
        <p className="label">Selected Color:</p>
        <p className="hex">{color}</p>
      </div>

      <div className="picker">
        <h3 className="sub-heading">Select a Color</h3>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="color-btn"
        />
      </div>
    </div>
  );
}

export default App;
