function MyComponent({ color, setColor }) {
  return (
    <div className="picker">
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
