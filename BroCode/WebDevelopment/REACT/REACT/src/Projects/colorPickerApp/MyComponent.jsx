function MyComponent({ color, setColor }) {
  return (
    <div className="picker">
      <h3 className="sub-heading">Select a Color</h3>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="color-btn"
      />
    </div>
  );
}

export default MyComponent;
