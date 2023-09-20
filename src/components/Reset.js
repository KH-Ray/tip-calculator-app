export default function Reset({ setBill, setNumOfPeople, setTip }) {
  function handleReset() {
    setBill("");
    setNumOfPeople("");
    setTip(0);

    document.getElementsByClassName("input")[0].value = "";
    document.getElementsByClassName("input")[1].value = "";
    document.querySelector(".custom-tip").value = "";
  }

  return (
    <button className="reset" onClick={handleReset}>
      RESET
    </button>
  );
}
