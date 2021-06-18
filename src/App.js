import './App.scss';
import GameColumn from './components/GameColumn/GameColumn';
import StartButton from './components/StartButton/StartButton';

const gameArr = [
  {value: 1, content: '1', isActive: true},
  {value: 2, content: '2', isActive: false},
  {value: 3, content: '3', isActive: false},
  {value: 4, content: '4', isActive: false},
  {value: 5, content: '5', isActive: true},
  {value: 6, content: '6', isActive: true},
  {value: 7, content: '7', isActive: true},
  {value: 8, content: '8', isActive: true},
  {value: 9, content: '9', isActive: true},
  {value: 10, content: '10', isActive: true},
]

const App = () => {
  return (
    <div className="App">
      <div className='game__content'>
        <GameColumn items={gameArr}/>
        <GameColumn items={gameArr}/>
        <GameColumn items={gameArr}/>
        <GameColumn items={gameArr}/>
        <GameColumn items={gameArr}/>
      </div>
      <StartButton />
    </div>
  );
}

export default App;
