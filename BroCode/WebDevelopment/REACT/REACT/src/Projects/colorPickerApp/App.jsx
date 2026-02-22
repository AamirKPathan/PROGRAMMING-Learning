import { useState } from "react";
import MyComponent from "./MyComponent";

function App() {
  const [color, setColor] = useState("#a55cff");

  return (
    <div className="app">
      <div className="card">
        <h1 className="title">Color Picker</h1>

        <div className="preview" style={{ backgroundColor: color }}>
          <p className="preview-text">{color}</p>
        </div>

        <MyComponent color={color} setColor={setColor} />
      </div>
    </div>
  );
}

export default App;
