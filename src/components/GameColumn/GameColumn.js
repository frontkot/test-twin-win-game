import React from 'react';
import './GameColumn.scss';
import GameItem from '../GameItem/GameItem';

const GameColumn = ({
  items
}) => {
  const renderItems = items.map((e, index) => 
    <GameItem 
      key={index}
      value={e.value}
      content={e.content}
    />
  )

  return (
    <div className='column__container'>
      {renderItems}
    </div>
  );
};

export default GameColumn;