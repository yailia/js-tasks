// Given an array of integers nums and an integer target, 
// return indices of 
// the two numbers such that they add up to target.
// You may assume that each input would have exactly one 
// solution, 
// and you may not use the same element twice.
// You can return the answer in any order.
// const nums = [2,7,11,15];
// const target = 9;
// const nums = [3,2,4];
// const target = 6;
const nums = [3,3];
const target = 6;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            const sum = nums[i] + nums[j];
            if (sum === target && i !== j) {
                return [i, j];
            }
        }
    }
};



console.log(twoSum(nums, target))