function MyComponent({ color, setColor }) {
  return (
    <div className="picker">
      <label className="label">Select a Color</label>

      <div className="input-wrapper">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="color-input"
        />
      </div>
    </div>
  );
}

export default MyComponent;
