// 23. Write a JavaScript function to find the first not repeated character. Go to the editor
// Sample arguments : 'abacddbec'
// Expected output : 'e'
// https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php

function unicChar (str) {
    const arr = str.split('');
    let result = '';
    let ctr = 0;
    for (let x = 0; x < arr.length; x++) {
      ctr = 0;
      for (let y = 0; y < arr.length; y++) 
      {
        if (arr[x] === arr[y]) {
          ctr+= 1;
        }
      }
      if (ctr < 2) {
        result = arr[x];
        break;
      }
    }
    return result;
  }

console.log(unicChar('abacddbec'))