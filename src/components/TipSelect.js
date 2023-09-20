export function TipSelect({ children }) {
  return (
    <div>
      <p className="label">Select Tip %</p>
      <div className="tips grid grid--3-cols">{children}</div>
    </div>
  );
}
