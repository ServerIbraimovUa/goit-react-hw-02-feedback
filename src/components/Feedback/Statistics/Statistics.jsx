import React from 'react';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <li>
        <p>Good:{good}</p>
      </li>
      <li>
        <p>Neutral:{neutral}</p>
      </li>
      <li>
        <p>Bad:{bad}</p>
      </li>
      <li>
        <p>Total feedback:{total}</p>
      </li>
      <li>
        <p>Total positive feedback:{positivePercentage}%</p>
      </li>
    </ul>
  );
};

export default Statistics;
