export default function Button({ amount, handleTip, tip }) {
  return (
    <button
      onClick={() => handleTip(amount)}
      className={tip === amount ? "selected" : ""}
    >
      {amount}%
    </button>
  );
}
