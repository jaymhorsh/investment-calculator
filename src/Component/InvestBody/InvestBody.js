import React from "react";

const InvestBody = (props) => (
  <tbody>
    <tr>
      <td>{props.year}</td>
      <td>{props.savings}</td>
      <td>{props.interestGain}</td>
      <td>{props.totalInterestGain}</td>
      <td>{props.investedCapital}</td>
    </tr>
  </tbody>
);

export default InvestBody;
