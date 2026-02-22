function MyComponent({ color, setColor }) {
  return (
    <div className="picker-section">
      <label className="label">Select a Color:</label>

      <input
        type="color"
        className="color-input"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
}

export default MyComponent;
