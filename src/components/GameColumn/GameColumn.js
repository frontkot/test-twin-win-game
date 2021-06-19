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
      isActive={index === 4 ? true : false}
    />
  )

  return (
    <ul className='column__container'>
      {renderItems}
    </ul>
  );
};

export default GameColumn;