// Given a signed 32-bit integer x, return x with its digits 
// reversed. 
// If reversing x causes the value to go outside the signed
//  32-bit
//  integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit
//  integers 
// (signed or unsigned).
// Example 1:
// const x = 123
// Output: 321
// Example 2:
const x = -123
// Output: -321
// Example 3:
// const x = 120
// Output: 21
// Example 4:
// Input: x = 0
// Output: 0

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  let xrev = parseInt(Math.abs(x).toString().split('').reverse().join(''));

  return xrev > Math.pow(2,31) - 1 ? 0 : x > 0 ? xrev : xrev * -1;
};

console.log (reverse(x))