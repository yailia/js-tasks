// 1. Write a JavaScript program to list the properties of a JavaScript object. Go to the editor
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno
// https://www.w3resource.com/javascript-exercises/javascript-object-exercises.php

const student = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12 };

function getObjKeys (obj) {
  if(!isObj(obj)) return
  console.log(Object.keys(obj))
}

function isObj (obj) {
  const type = typeof obj;
  return type === 'object'
}

const arr = ['1']

getObjKeys(student)
getObjKeys(isObj)
getObjKeys(arr)
getObjKeys(1)
getObjKeys('1')