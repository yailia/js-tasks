// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

const str = 'webmaster';
const str2 = 'awrakemf;lMLKM;LKMADF;slkM;WLKA;LWK;L!@##$%^&*\\\*-'

function stringToAlpOrder (str) {
  return str.replace(/[^A-Za-zа-я0-9]+/g, '').split('').sort().join('');
}

console.log(stringToAlpOrder(str))
console.log(stringToAlpOrder(str2))