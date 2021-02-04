const arr = [-9, -2, 0, 2, 3];

function sortedSqrArr (arr) {
  return arr.map(i => Math.pow(i, 2)).sort((a, b) => a-b)
}

const sortedArr = sortedSqrArr(arr);
console.log(arr, sortedArr)
