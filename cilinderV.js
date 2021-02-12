// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.
// https://www.w3resource.com/javascript-exercises/javascript-object-exercises.php

  const cilinder = {
    pi: 3.14,
    r: 0,
    h: 0,
    value: value = () => {
      return cilinder.pi * (cilinder.r * cilinder.r) * cilinder.h 
    }
  }

  function cilindersValue (r, h) {
    cilinder.r = r;
    cilinder.h = h;
    console.log(cilinder.value(r, h))
  }

cilindersValue(50, 15)
