// https://learn.javascript.ru/array-methods#tasks

// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

const arr = ["HTML", "JavaScript", "CSS"];

// const sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

const copySorted = (arr) => {
  const sorted = [...arr].sort();
  return sorted;
};

const sorted = copySorted(arr);

console.log(sorted, arr)