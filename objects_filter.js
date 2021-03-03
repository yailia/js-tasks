// Задание
// Напишите функцию, фильтрующую массив объектов по значению свойства.Массив, название свойства и нужное значение должны передаваться в качестве аргументов.Пример использования:
// let objects = [{ name: 'Василий', surname: 'Васильев' }, { name: 'Иван', surname: 'Иванов' }, { name: 'Пётр', surname: 'Петров' }]
// fn - функция, которую нужно написать (хорошее название тоже нужно придумать) let result = fn(objects, 'name', 'Иван'); 
// Результат выполнения должен быть: [ name: 'Иван', surname: 'Иванов' ]


const objects = [
  { name: 'Василий', surname: 'Васильев' },
  { name: 'Иван', surname: 'Иванов' },
  { name: 'Пётр', surname: 'Петров' }
];
// const prop = 'name';
// const propValue = 'Иван'
// const propObj = []

// const key = 'name';
// function objectPropFilter(objects, prop, propValue) {

//   for (let i = 0; i < objects.length; i++) {
//       const object = objects[i]
//       if (object[prop] === propValue) {
//           const newArr = [];
//           newArr[0] = `name: ${object.name}`;
//           newArr[1] = `surname: ${object.surname}`;
//           return object
//       }
//    }
// }

// const result = objectPropFilter(objects, prop, propValue)

// console.log(result)


function objectPropFilter (arr, key, val) {  
  return arr.filter(obj => obj[key] === val)
}

console.log(objectPropFilter(objects, 'name', 'Иван'));
