export const interval = 150;
export const timerPlus = 5;

export const gameArr = [ // random arr for game, can contain any number of elements
  {value: 9, content: '9', isActive: false},
  {value: 8, content: '8', isActive: false},
  {value: 7, content: '7', isActive: false},
  {value: 6, content: '6', isActive: false},
  {value: 5, content: '5', isActive: false},
  {value: 4, content: '4', isActive: false},
  {value: 3, content: '3', isActive: false},
  {value: 2, content: '2', isActive: false},
  {value: 1, content: '1', isActive: true},
];

export const startGame = (arr, func) => { // 1st arg - one of column arr; 2nd arg - function startGame
  arr.forEach(e => {
    const { arr, numOfActions, interval, setArr } = e;
    func(arr, numOfActions, interval, setArr);
  })
}

// 1st arg - one of column arr; 2nd - number of actions in a column;
// 3rd - the change interval of elements in the array; 4th - set the state to the desired column array;
export const columnAction = (arr, numOfActions, interval, setArr) => { 
  for (let i = 0; i < numOfActions; i++) {
    // get the integer that remains after dividing by the length of the array
    let u = i % arr.length;
    // a new array with a shift to one side
    const newArr = [...arr.slice(u, arr.length),  ...arr.slice(0, u)];
    let timer = i*interval;
    console.log('timer', timer);
    
    setTimeout(() => { 
      setArr(newArr)  
    }, timer);
  }
}

export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min; //get random number from min to max
}
