/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      for (let j = 1; j < nums.length; j++) {
          const sum = nums[i] + nums[j];
          if (sum === target) {
              return [i, j]
          }
      }
  }
};

// const nums = [2,7,11,15];
// const target = 9;
// const nums = [3,2,4];
// const target = 6;
// const nums = [3,3];
// const target = 6;

console.log(twoSum(nums, target))