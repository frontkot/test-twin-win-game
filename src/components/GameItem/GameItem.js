import React from 'react';
import './GameItem.scss';

const GameItem = ({
  value, content
}) => {
  return (
    <div className='column__item' value={value}>
      {content}
    </div>
  );
};

export default GameItem;