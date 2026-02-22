import { useState } from "react";
import MyComponent from "./MyComponent";

function App() {
  const [color, setColor] = useState("#a55cff");

  return (
    <div className="app">
      <div className="square" style={{ backgroundColor: color }}>
        <h1 className="main-heading">Color Picker</h1>

        <p className="label">Selected Color:</p>
        <p className="hex">{color}</p>

        <MyComponent color={color} setColor={setColor} />
      </div>
    </div>
  );
}

export default App;
