// Write a function to find the longest common prefix string amongst an array
//  of strings.

// If there is no common prefix, return an empty string "".


// Example 1:
// const strs = [''];
// const strs = ['a'];
// const strs = ['ab', 'a'];
// const strs = ["flower","flow","floight"]
// Output: "fl"
// Example 2:

const strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';
  let firstElm = strs[0];
  let result = '';
  for (let i = 0; i < firstElm.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (firstElm[i] !== strs[j][i]) {
        return result;
      };
    };
    result += firstElm[i];
  };
  return result;
};

console.log(longestCommonPrefix(strs))