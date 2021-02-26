// Write a JavaScript program to get a random element from an array.
// https://www.w3resource.com/javascript-exercises/fundamental/index.php


function makeArr (arrLength) {
  const arr = [];
  let l = 0;
  while (l < arrLength) {
  arr.push(l);
  l++
  };
 return arr;
};

const arr = makeArr(10)

function randomIndex (arr) {
    return arr[Math.floor(Math.random() * (arr.length))] ;
}

const randArrayElem = randomIndex(arr)
console.log(randArrayElem)