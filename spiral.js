const array = [
[1,  2,  3,  4,  5],
[6,  7,  8,  9,  10],
[11, 12, 13, 14, 15],
[16, 17, 18, 19, 20]
];


function firstArrayPrint (array) {
  for (i of array[0]) { console.log(i)}
  array.splice(0, 1)
  return array
}

function secondStepPrint (array) {
  const newArray = []
  for (let i = 0; i < array.length; i++) {
    const newItem = array[i]
    const lastNum = newItem.length - 1
    const arrayLastIndex = newItem[lastNum]
    console.log(arrayLastIndex)
    newItem.splice(lastNum, 1)
    newArray.push(newItem)
  }
  return newArray
}

function thirdStepPrint (array) {

  const lastArray = array.length - 1
  const reverseArr = array[lastArray].reverse();
  for (i of reverseArr) {console.log(i)}
  reverseArr.reverse()
  array.splice(lastArray, 1);
  return array
}

function lastStepPrint (array) {
  const newArray = []
  for (let i = array.length - 1; i >= 0; i--) {
    const newItem = array[i]
    const arrayFirstIndex = newItem[0]
    console.log(arrayFirstIndex)
    newItem.splice(0, 1)
    newArray.push(newItem)
  }
  return newArray
}


function spiral (array) {
  if (array.length > 0) {
    const firstStep = firstArrayPrint(array)
    const secondStep = secondStepPrint(firstStep)
    const thirdStep = thirdStepPrint(secondStep)
    const laststep = lastStepPrint(thirdStep)
    laststep.reverse()
    spiral(laststep)
  }
  else console.log('Кончено')
}

spiral(array)