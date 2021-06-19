import './App.scss';
import GameColumn from './components/GameColumn/GameColumn';
import StartButton from './components/StartButton/StartButton';
import { useState } from 'react';
import { gameArr, startGame, columnAction, randomNumber } from './utils';

const App = () => {
  const [firstColumnArr, setFirstColumnArr] = useState(gameArr.reverse());
  const [secondColumnArr, setSecondColumnArr] = useState(gameArr.reverse());
  const [thirdColumnArr, setThirdColumnArr] = useState(gameArr.reverse());
  const [fourthColumnArr, setFourthColumnArr] = useState(gameArr.reverse());
  const [fifthColumnArr, setFifthColumnArr] = useState(gameArr.reverse());

  const interval = 150;
  const timerPlus = 5;
  const setArr = [
    {arr: firstColumnArr, numOfActions: randomNumber(5, 10), timeoutPlus: timerPlus, interval: interval, setArr: setFirstColumnArr},
    {arr: secondColumnArr, numOfActions: randomNumber(11, 15), timeoutPlus: timerPlus+1, interval:  interval+10, setArr: setSecondColumnArr},
    {arr: thirdColumnArr, numOfActions: randomNumber(16, 20), timeoutPlus: timerPlus+2, interval:  interval+20, setArr: setThirdColumnArr},
    {arr: fourthColumnArr,numOfActions: randomNumber(21, 25), timeoutPlus: timerPlus+3, interval:  interval+30, setArr: setFourthColumnArr},
    {arr: fifthColumnArr, numOfActions: randomNumber(26, 30), timeoutPlus: timerPlus+4, interval:  interval+40, setArr: setFifthColumnArr},
  ]

  const renderItems = setArr.map((e, index) => <GameColumn items={e.arr} key={index}/>)

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
