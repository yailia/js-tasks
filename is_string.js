// https://www.w3resource.com/javascript-exercises/javascript-string-exercises.php

// Write a JavaScript function to check whether an 'input' is a string or not.

// Test Data:
// console.log(is_string('w3resource'));
// true
// console.log(is_string([1, 2, 4, 0]));
// false


isString = function(input) {
  if (!input) return false;
  return Object.prototype.toString.call(input) === '[object String]' 
};
console.log(isString('w3resource'));
console.log(isString([1, 2, 4, 0]));
console.log(isString(''));
console.log(isString({}));