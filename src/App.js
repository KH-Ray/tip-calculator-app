import Logo from "./components/Logo";
import Form from "./components/Form";
import Button from "./components/Button";
import CustomTip from "./components/CustomTip";
import Result from "./components/Result";

import dollar from "./images/icon-dollar.svg";
import person from "./images/icon-person.svg";
import Reset from "./components/Reset";
import { useState, useEffect } from "react";
import { TipSelect } from "./components/TipSelect";

export default function App() {
  const [bill, setBill] = useState("");
  const [numOfPeople, setNumOfPeople] = useState("");
  const [tip, setTip] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <Container>
      <Logo />
      <Calculator>
        <div className="container grid grid--2-cols">
          <CalculatorLeft
            bill={bill}
            numOfPeople={numOfPeople}
            tip={tip}
            setBill={setBill}
            setNumOfPeople={setNumOfPeople}
            setTip={setTip}
            handleTipAmount={setTipAmount}
            handleTotal={setTotal}
          />
          <CalculatorRight
            tipAmount={tipAmount}
            total={total}
            setBill={setBill}
            setNumOfPeople={setNumOfPeople}
            setTip={setTip}
          />
        </div>
      </Calculator>
    </Container>
  );
}

function Container({ children }) {
  return <main className="flex flex--center">{children}</main>;
}

function Calculator({ children }) {
  return <>{children}</>;
}

function CalculatorLeft({
  bill,
  numOfPeople,
  tip,
  setBill,
  setNumOfPeople,
  setTip,
  handleTipAmount,
  handleTotal,
}) {
  useEffect(
    function () {
      const tipAmount = (bill / numOfPeople) * (tip / 100);
      const total = bill / numOfPeople + tipAmount;

      handleTipAmount(tipAmount);
      handleTotal(total);
    },
    [bill, numOfPeople, tip, handleTipAmount, handleTotal]
  );

  return (
    <div className="left">
      <Form
        label="Bill"
        forLabel="bill"
        bgUrl={dollar}
        input={bill}
        handleInput={setBill}
      />
      <TipSelect>
        <Button amount={5} handleTip={setTip} tip={tip} />
        <Button amount={10} handleTip={setTip} tip={tip} />
        <Button amount={15} handleTip={setTip} tip={tip} />
        <Button amount={25} handleTip={setTip} tip={tip} />
        <Button amount={50} handleTip={setTip} tip={tip} />
        <CustomTip handleTip={setTip} />
      </TipSelect>
      <Form
        label="Number of people"
        forLabel="numOfPeople"
        bgUrl={person}
        input={numOfPeople}
        handleInput={setNumOfPeople}
      />
    </div>
  );
}

function CalculatorRight({
  tipAmount,
  total,
  setBill,
  setNumOfPeople,
  setTip,
}) {
  return (
    <div className="right flex">
      <Result resultName="Tip amount" result={tipAmount} />
      <Result resultName="Total" result={total} />
      <Reset
        setBill={setBill}
        setNumOfPeople={setNumOfPeople}
        setTip={setTip}
      />
    </div>
  );
}
