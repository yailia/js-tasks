// Given an array of integers nums which is 
// sorted in ascending order, and an integer target, 
// write a function to search target in nums. 
// If target exists, then return its index. 
// Otherwise, return -1.
// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
   let left = -1;
   let right = nums.length;

   while (right - left > 1) {
     const mid = Math.floor((left + right) / 2);

     if (nums[mid] === target) {
       return mid;
     }
     if (nums[mid] > target) {
       right = mid;
     }
     else {
       left = mid;
     }
   }
   return -1;

};

console.log(search([-1,0,3,5,9,12], 9))
console.log(search([-1,0,3,5,9,12], 2))