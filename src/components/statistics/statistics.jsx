import React from 'react';

import {List,Title} from './statistics.styled';
import IsEmptyNotification from '../sectionTitle/notification/notification';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  percentage,
  visibilityMessage,
  visbilityStat
}) => {
  return (
    <div>
      <Title>Statistics</Title>
      {visibilityMessage && <IsEmptyNotification />}
      {visbilityStat && (
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
            Positive feedback: <span>{Math.round(percentage)}%</span>
          </li>
        </List>
      )}
    </div>
  );
};

export default Statistics;
