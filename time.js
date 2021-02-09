/*Write a JavaScript program to display the current day and time in the following format.  Go to the editor
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
*/

function timeNow() {
  const dayOfWeek = [,
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ]
  const dateNow = new Date;
  const dayNow = dateNow.getDay()

  console.log('Today is: ', dayOfWeek[dateNow.getDay()], 'Current time is: ', dateNow.getHours(), ' : ', dateNow.getMinutes());
};

timeNow();