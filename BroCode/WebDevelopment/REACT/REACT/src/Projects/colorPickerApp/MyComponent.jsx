import { useState } from "react";

function MyComponent() {
  const [color, setColor] = useState("#a052ff");

  return (
    <div className="color-picker">
      <h1>Color Picker</h1>

      <div
        className="color-display"
        style={{ backgroundColor: color }}
      >
        <p>Selected Color:</p>
        <p>{color}</p>
      </div>

      <label>Select a Color:</label>

      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
}

export default MyComponent;