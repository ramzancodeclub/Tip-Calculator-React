import { useState } from "react";
import "./App.css";

const App = () => {
  const [calc, setCalc] = useState(null);

  const handleClick = () => {
    const inputValue = document.querySelector("#bill");
    const services = document.querySelector("#services");
    const people = document.querySelector("#people");
    const finalResult = (parseInt(inputValue.value) * parseInt(services.value) / 100) / parseInt(people.value);
    return (
      <>
        <p>Tip amount</p>
        <h2><sup>$</sup>{finalResult.toFixed(2)}</h2>
        <p>each</p>
      </>
    )
  }

  return (
    <>
      <div className="container">
        <main>
          <h1>Tip Calculator</h1>
          <hr />
          <p>How much was your bill?</p>
          <span>$</span>
          <input type="number" aria-label="bill amount" id="bill"></input>
          <p>How was your services?</p>
          <select name="services" id="services" title="Select services" >
            <option disabled defaultValue>
              -- Choose an option --
            </option>
            <option value="30">30% - Outstanding</option>
            <option value="20">20% - Good</option>
            <option value="15">15% - It was okay</option>
            <option value="10">10% - Bad</option>
            <option value="5">5% - Terrible</option>
          </select>
          <p>How many people are sharing the bill?</p>
          <input type="number" aria-label="people" id="people"></input>
          <span>people</span>
          <br />
          <button onClick={(() => setCalc(handleClick()))}>Calculate!</button>
          <div id="result">{calc}</div>
        </main>
      </div>
    </>
  );
};

export default App;
