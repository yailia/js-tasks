const array = [
[1,  2,  3,  4,  5],
[6,  7,  8,  9,  10],
[11, 12, 13, 14, 15],
[16, 17, 18, 19, 20]
];


function goRight (arr) {
  if(array){
    for (i of arr[0]) console.log(i)
    arr.shift()
  }
  return arr

};

function goDown (arr) {
  if(array) {
    for (i of arr) console.log(i.pop())
  } 
  return arr
};

function goLeft (arr) {
  if (array){
    const lastI = arr.length - 1
    const needArr = arr[lastI];
    for (let i = lastI + 1; i >= 0; i--) console.log(needArr[i])
    arr.pop()
  }
  return arr
}

function goUp (arr) {
  if (array) {
    for (let i = arr.length -1 ; i >=0; i--) console.log(arr[i].shift())
  }
  return arr
}

function loop (array) {
  while(array.length > 0){
    const right = goRight(array)
    const down = goDown(right)
    const left = goLeft(down)
    const up = goUp(left)
    }
    console.log ('Конец')
  }

loop(array)
