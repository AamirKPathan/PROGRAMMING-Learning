function MyComponent({ color, setColor }) {
  return (
    <div className="picker-container">
      <label>Select a color:</label>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
}

export default MyComponent;
