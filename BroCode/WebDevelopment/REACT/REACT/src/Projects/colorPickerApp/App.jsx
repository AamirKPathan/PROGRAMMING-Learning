import { useState } from "react";
import MyComponent from "./MyComponent";

function App() {
  const [color, setColor] = useState("#ff0000");

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">🎨 Color Picker</h1>

        <MyComponent color={color} setColor={setColor} />

        <div
          className="color-preview"
          style={{ backgroundColor: color }}
        >
          <span>{color}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
