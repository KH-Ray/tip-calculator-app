export default function Form({ label, forLabel, bgUrl, input, handleInput }) {
  const backgroundImg = {
    backgroundImage: `url(${bgUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "5%",
    backgroundSize: "10zpx",
  };

  return (
    <div>
      <label htmlFor={forLabel} className="label">
        {label}{" "}
        <span className={input === 0 ? "" : "hidden"}>Can't be zero</span>
      </label>
      <input
        type="text"
        id={forLabel}
        placeholder={0}
        // className="input input-invalid"
        className={input === 0 ? "input input-invalid" : "input"}
        style={backgroundImg}
        onChange={(e) => handleInput(Number(e.target.value))}
        required
      />
    </div>
  );
}
