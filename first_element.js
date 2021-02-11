// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php

// Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

function first (array, n) {
  if (!n) return array[0];
  else if (n > array.length) return array;
  return n < 0 ? array = [] : array.splice(0, n);
}