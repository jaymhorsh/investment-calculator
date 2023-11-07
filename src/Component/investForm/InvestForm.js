import React, { useState } from "react";
import "./investForm.css";
const initialState = {
  currentSavings: 1000,
  yearlyContribution: 2000,
  expectedReturn: 5,
  duration: 5,
};
const InvestForm = (props) => {
  const [userInput, setUserInput] = useState(initialState);
  const currentSavingsHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        currentSavings: e.target.value,
      };
    });
  };
  const yearlyContributionHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        yearlyContribution: e.target.value,
      };
    });
  };
  const expectedReturnHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        expectedReturn: e.target.value,
      };
    });
  };
  const durationHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        duration: e.target.value,
      };
    });
  };

  const resetHandler = () => {
    setUserInput(initialState);
  };

  const formHead = (e) => {
    e.preventDefault();

    props.onFormData(userInput);
  };

  return (
    <div className="form" onSubmit={formHead}>
      <form>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            {/* <input type="number" value={userInput['currentSaving']} id="current-savings"  onChange={(e)=>inputChangeHandler('currentSaving', e.target.value)}/> */}
            <input
              type="number"
              value={userInput["currentSavings"]}
              id="current-savings"
              onChange={currentSavingsHandler}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            {/* <input type="number" value={userInput['yearlyContribution']} id="yearly-contribution"   onChange={(e)=>inputChangeHandler('yearlyContribution', e.target.value)}/> */}
            <input
              type="number"
              id="yearly-contribution"
              value={userInput["yearlyContribution"]}
              onChange={yearlyContributionHandler}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            {/* <input type="number" value={userInput['expectedReturn']} id="expected-return"   onChange={(e)=>inputChangeHandler('expectedReturn', e.target.value)}/> */}
            <input
              type="number"
              id="expected-return"
              readOnly
              value={userInput["expectedReturn"]}
              onChange={expectedReturnHandler}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            {/* <input type="number" value={userInput['duration']} id="duration"   onChange={(e)=>inputChangeHandler('Duration', e.target.value)}/> */}
            <input
              type="number"
              id="duration"
              value={userInput["duration"]}
              onChange={durationHandler}
              min="1"
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" onClick={resetHandler} className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default InvestForm;
