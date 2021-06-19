export const gameArr = [
  {value: 1, content: '1', isActive: true},
  {value: 2, content: '2', isActive: false},
  {value: 3, content: '3', isActive: false},
  {value: 4, content: '4', isActive: false},
  {value: 5, content: '5', isActive: false},
  {value: 6, content: '6', isActive: false},
  {value: 7, content: '7', isActive: false},
  {value: 8, content: '8', isActive: false},
  {value: 9, content: '9', isActive: false},
];

export const startGame = (arr, func) => {
  arr.forEach(e => {
    const { arr, numOfActions, timeoutPlus, interval, setArr } = e;
    func(arr, numOfActions, timeoutPlus, interval, setArr);
  })
}

export const columnAction = (arr, numOfActions, timeoutPlus, interval, setArr) => {
  for (let i = 0; i < numOfActions; i++) {
    let u = i % arr.length;
    const newArr = [...arr.slice(u, arr.length),  ...arr.slice(0, u)];
    let timeout = timeoutPlus;
    let timer = i*interval + timeout*i;
    
    setTimeout(() => { 
      setArr(newArr)  
    }, timer);
  }
}

export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}
