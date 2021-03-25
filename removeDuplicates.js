https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/727/

// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.


/**
 * @param {number[]} nums
 * @return {number}
 */
//  var removeDuplicates = function(nums) {
//      for (let i = 1; i < nums.length; i++) {
//       if (nums[i] === nums[i - 1]) {
//           nums.splice(i, 1);
//           i = 0;
//         }
//     }
//   return nums.length;
// }

var removeDuplicates = function(nums) {
      for (let i = 1; i < nums.length; i++) {
      if (nums[i] === nums[i - 1]) {
          nums[i] = '';
          i = 0;
          console.log(nums)
        }
    }
  
  };


// пройтись по массиву
// сравнить числа
// если правое равно левому, то 


const nums = [1,1,2];
const nums2 = [0,0,1,1,1,2,2,3,3,4];

console.log(removeDuplicates(nums));
console.log(removeDuplicates(nums2));
