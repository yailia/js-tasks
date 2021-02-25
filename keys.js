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

const arr = ['sdf']

getObjKeys(student)
getObjKeys(isObj)
getObjKeys(arr)
getObjKeys(1)
getObjKeys('1')