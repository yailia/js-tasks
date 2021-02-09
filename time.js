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
  const minutes = dateNow.getMinutes() +'';
  const seconds = dateNow.getSeconds() +'';
  const minutesResult = minutes.length === 1 ? '0' + minutes : minutes;
  const secondsResult = seconds.length === 1 ? '0' + seconds : seconds;
  console.log('Today is: ', dayOfWeek[dateNow.getDay()], 'Current time is: ', dateNow.getHours(), ' : ', minutesResult, ' : ', secondsResult);
  // console.log(seconds.length)
};

const timerId = setInterval(timeNow, 50);