// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
// https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php

function isPalindrome (word) {
  return word.split('').reverse().join('') === word ? true : false; 
}

console.log(isPalindrome('lol'))
console.log(isPalindrome('notlol'))