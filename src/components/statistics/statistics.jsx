import React from 'react';

import {List,Title,Item} from './statistics.styled';
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
          <Item>
            Good: <span>{good}</span>
          </Item>
          <Item>
            Neutral: <span>{neutral}</span>
          </Item>
          <Item>
            Bad: <span>{bad}</span>
          </Item>
          <Item>
            Total: <span>{total}</span>
          </Item>
          <Item>
            Positive feedback: <span>{Math.round(positivePercentage)}%</span>
          </Item>
        </List>
      )}
    </div>
  );
};

export default Statistics;
