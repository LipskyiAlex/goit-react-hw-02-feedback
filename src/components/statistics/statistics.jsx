import React from 'react';

import {List,Title} from './statistics.styled';
const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
       
    <div>
      <Title>Statistics</Title>
      {total!==0 && (
        <List>
          <li>
            Good: <span>{good}</span>
          </li>
          <li>
            Neutral: <span>{neutral}</span>
          </li>
          <li>
            Bad: <span>{bad}</span>
          </li>
          <li>
            Total: <span>{total}</span>
          </li>
          <li>
            Positive feedback: <span>{Math.round(positivePercentage)}%</span>
          </li>
        </List>
      )}
    </div>
  );
};

export default Statistics;
