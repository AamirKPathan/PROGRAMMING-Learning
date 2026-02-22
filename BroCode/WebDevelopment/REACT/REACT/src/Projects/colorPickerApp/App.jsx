import { useState } from "react";
import MyComponent from "./MyComponent";

function App() {
  const [color, setColor] = useState("#ff0000");

  return (
    <div className="app-container">
      <h1>React Color Picker</h1>

      <MyComponent color={color} setColor={setColor} />

      <div
        className="color-preview"
        style={{ backgroundColor: color }}
      >
        {color}
      </div>
    </div>
  );
}

export default App;
