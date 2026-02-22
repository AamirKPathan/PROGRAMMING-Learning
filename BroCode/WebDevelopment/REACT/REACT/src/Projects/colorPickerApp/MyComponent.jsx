function MyComponent({ color, setColor }) {
  return (
    <div className="picker-container">
      <label className="label">Choose a color</label>
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
