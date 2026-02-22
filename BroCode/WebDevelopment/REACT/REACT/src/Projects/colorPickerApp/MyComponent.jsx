function MyComponent({ color, setColor }) {
  return (
    <div className="picker">
      <label className="label">Select a Color:</label>

      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="color-input"
      />
    </div>
  );
}

export default MyComponent;
