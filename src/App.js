import './App.scss';
import GameColumn from './components/GameColumn/GameColumn';
import StartButton from './components/StartButton/StartButton';
import { useState } from 'react';
import { interval, gameArr, startGame, columnAction, randomNumber } from './utils';

const App = () => {
  const [firstColumnArr, setFirstColumnArr] = useState(gameArr);
  const [secondColumnArr, setSecondColumnArr] = useState(gameArr);
  const [thirdColumnArr, setThirdColumnArr] = useState(gameArr);
  const [fourthColumnArr, setFourthColumnArr] = useState(gameArr);
  const [fifthColumnArr, setFifthColumnArr] = useState(gameArr);

  const setArr = [ // arr for set arguments to startGame function
    {arr: firstColumnArr, numOfActions: randomNumber(5, 10), interval: interval, setArr: setFirstColumnArr},
    {arr: secondColumnArr, numOfActions: randomNumber(11, 15), interval:  interval+10, setArr: setSecondColumnArr},
    {arr: thirdColumnArr, numOfActions: randomNumber(16, 20), interval:  interval+20, setArr: setThirdColumnArr},
    {arr: fourthColumnArr,numOfActions: randomNumber(21, 25), interval:  interval+30, setArr: setFourthColumnArr},
    {arr: fifthColumnArr, numOfActions: randomNumber(26, 30), interval:  interval+40, setArr: setFifthColumnArr},
  ]

  const renderItems = setArr.map((e, index) => <GameColumn items={e.arr} key={index}/>) // map render items

  return (
    <div className="App">
      <div className='game__content'>
        {renderItems}
      </div>
      <StartButton onClick={() => startGame(setArr, columnAction)} text='Spin'/>
    </div>
  );
}

export default App;
