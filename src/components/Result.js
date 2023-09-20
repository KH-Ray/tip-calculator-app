export default function Result({ resultName, result }) {
  return (
    <div className="result-container flex">
      <p className="result-name">
        {resultName} <span>/ person</span>
      </p>
      <div className="result-price">
        ${result && result !== Infinity ? result.toFixed(2) : "0.00"}
      </div>
    </div>
  );
}
