import React from 'react';
import './StartButton.scss';

const StartButton = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};

export default StartButton;