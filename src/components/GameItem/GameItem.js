import React from 'react';
import './GameItem.scss';

const GameItem = ({
  value, content, isActive
}) => {
  return (
    <li key={content} className={isActive ? 'column__item column__item--active' : 'column__item'} value={value}>
      {content}
    </li>
  );
};

export default GameItem;