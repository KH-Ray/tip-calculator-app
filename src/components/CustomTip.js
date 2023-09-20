export default function CustomTip({ handleTip }) {
  return (
    <input
      type="text"
      placeholder="Custom"
      className="custom-tip"
      onChange={(e) => handleTip(Number(e.target.value))}
    />
  );
}
