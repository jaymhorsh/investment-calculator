import { useState } from "react";
import Header from "./Component/Header/Header.js"
import logo from "./assets/investment-calculator-logo.png";
import InvestForm from "./Component/investForm/InvestForm.js";
import InvestList from "./Component/InvestList/InvestList.js";

const App = () => {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  // console.log(userInput);
  const yearlyData = [];

  // console.log(userInput);
  if (userInput) {
    let currentSaving = +userInput['currentSavings'];
    const yearlyContribution = +userInput['yearlyContribution'];
    const expectedReturn = +userInput['expectedReturn'] / 100;
    const duration = +userInput['duration'];
    // The code snippet is a loop that calculates the yearly data for an investment or savings account over a specified duration
    // The loop runs for `duration` iterations, with `i` representing the current year, starting from year 1 (hence `i + 1`).
    // An object representing the yearly data is created and pushed into the `yearlyData` array. This object includes the following properties:
    //  - `year`: The current year (incremented by 1 since JavaScript arrays are 0-based).
    //  - `yearlyInterest`: The interest earned during the year.
    //  - `savingsEndOfYear`: The total savings at the end of the year, including both the initial savings and the interest earned.
    //  - `yearlyContribution`: The amount contributed during the year.
    // The loop continues for the specified number of years (`duration`), accumulating data for each year's savings and interest.
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSaving * expectedReturn;
      currentSaving += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSaving,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header logo={logo}/>
      <InvestForm onFormData={calculateHandler}  />

      {!userInput && <p style={{textAlign: 'center'}}>No investment Available</p>}
      {userInput && (
        <InvestList
          data={yearlyData}
          initialInvestment={userInput["currentSavings"]}
        />
      )}
    </div>
  );
};

export default App;
