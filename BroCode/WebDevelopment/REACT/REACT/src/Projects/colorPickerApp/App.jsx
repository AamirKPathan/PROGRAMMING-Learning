import { useState } from "react";
import MyComponent from "./MyComponent";

function App() {
  const [color, setColor] = useState("#a55cff");

  return (
    <div className="app">
      <div className="container">
        <h1>Color Picker</h1>

        <div className="color-bar" style={{ backgroundColor: color }}>
          <span>{color}</span>
        </div>

        <MyComponent color={color} setColor={setColor} />
      </div>
    </div>
  );
}

export default App;
