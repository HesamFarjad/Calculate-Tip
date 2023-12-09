import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div>
      <Head />
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    console.log("Hesam");
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} setPercentage={setPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} setPercentage={setPercentage2}>
        How did you're friend like the service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <OutPut bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   // if (!amount) return;
  // }
  return (
    <form className="bill-input">
      <h3>How much was the bill?</h3>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(h) => onSetBill(Number(h.target.value))}
      ></input>
    </form>
  );
}

function SelectPercentage({ children, percentage, setPercentage }) {
  return (
    <div className="list">
      {" "}
      <h3>{children}</h3>
      <select
        value={percentage}
        onChange={(h) => setPercentage(Number(h.target.value))}
      >
        <option value="0"> Dissatisfied (0%)</option>
        <option value="5"> It was okay (5%)</option>
        <option value="10"> It was good (10%)</option>
        <option value="20"> Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function OutPut({ bill, tip }) {
  return (
    <div className="result">
      You pay {bill + tip} (${bill} + ${tip} tip)
    </div>
  );
}

function Reset({ onReset }) {
  return (
    <button
      className="reset-button"
      style={{ backgroundColor: "#064041", color: "#fff" }}
      onClick={onReset}
    >
      Reset
    </button>
  );
}

function Head() {
  return <h1>🧮 Calculate Tip</h1>;
}
