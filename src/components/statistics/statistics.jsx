import React from 'react';

import IsEmptyNotification from '../notification/notification';

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
      <h2>Statistics</h2>
      {visibilityMessage && <IsEmptyNotification />}
      {visbilityStat && (
        <ul>
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
        </ul>
      )}
    </div>
  );
};

export default Statistics;
