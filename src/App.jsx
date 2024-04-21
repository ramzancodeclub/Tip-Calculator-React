// Importing useState hook from React
import { useState } from "react";
// Importing CSS styles for the component
import "./App.css";

// Functional component App
const App = () => {
  // State variables using useState hook
  const [tipAmount, setTipAmount] = useState(); // State for calculation result
  const [choice, setChoice] = useState(); // State for selected service choice

  // Function to handle button click and calculate tip
  const handleClick = () => {
    // Getting input elements by their IDs
    const inputValue = document.querySelector("#bill"); // Bill amount input
    const services = document.querySelector("#services"); // Services dropdown
    const people = document.querySelector("#people"); // Number of people input

    // Calculating tip amount per person
    const finalResult =
      (parseInt(inputValue.value) * parseInt(services.value) / 100) /
      parseInt(people.value);

    // Validation checks before displaying the result
    if (inputValue.value === "") {
      alert("Please enter your bill amount ");
    } else if (services.value === "default") {
      alert("Please select services");
    } else if (people.value === "") {
      alert("Please enter people");
    } else {
      // Returning JSX for displaying the calculated tip
      return (
        <>
          <p>Tip amount</p>
          <h2><sup>$</sup>{finalResult.toFixed(2)}</h2>
          <p>each</p>
        </>
      );
    }
  };

  // JSX code for rendering the component
  return (
    <>
      <div className="container">
        <main>
          <h1>Tip Calculator</h1>
          <hr />
          {/* Form inputs for bill amount, services, and number of people */}
          <p>How much was your bill?</p>
          <span>$</span>
          <input type="number" aria-label="bill amount" id="bill"></input>
          <p>How was your services?</p>
          {/* Dropdown for selecting service quality */}
          <select
            name="services"
            id="services"
            title="Select services"
            value={choice}
            defaultValue={"default"}
            onChange={(e) => setChoice(e.target.value)}
          >
            <option disabled value={"default"}>
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
          {/* Button to calculate tip */}
          <button onClick={(() => setTipAmount(handleClick()))}>Calculate!</button>
          {/* Div to display the calculation result */}
          <div id="result">{tipAmount}</div>
        </main>
      </div>
    </>
  );
};

// Exporting the App component as default
export default App;

