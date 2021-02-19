const firstToUpperCase = (str) => {
  const strLow = str.toLowerCase();
  return strLow[0].toUpperCase() + strLow.slice(1);
} 

console.log(firstToUpperCase('пРиВет'))