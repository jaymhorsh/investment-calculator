import React from "react";
import InvestBody from "../InvestBody/InvestBody";
import "./investList.css";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 1,
  maximumFractionDigits: 2,
});
const InvestItem = (props) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      {props.data.map((list) => (
        <InvestBody
          key={list.year}
          year={list.year}
          savings={formatter.format(list.savingsEndOfYear)}
          interestGain={formatter.format(list.yearlyInterest)}
          totalInterestGain={formatter.format(
            list.savingsEndOfYear -
              props.initialInvestment -
              list.yearlyContribution * list.year
          )}
          investedCapital={formatter.format(
            props.initialInvestment + list.yearlyContribution * list.year
          )}
        />
      ))}
    </table>
  );
};

export default InvestItem;
