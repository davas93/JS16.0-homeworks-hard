let clock = function () {
  console.log("ну как тут?");
  //Вариант а)
  let d = new Date(),
    year = d.getFullYear(),
    monthNum = d.getMonth(),
    weekday = d.getDay(),
    day = d.getDate(),
    hours = d.getHours(),
    minutes = d.getMinutes(),
    seconds = d.getSeconds(),
    month = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ],
    week = [
      "Восересенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];

  //Вариант вывода а)
  dateTime = [
    "Сегодня ",
    week[weekday],
    ", " + day + " " + month[monthNum],
    " ",
    year,
    " года, ",
    hours,
    " час ",
    minutes,
    " минут ",
    seconds,
    " секунда",
  ];

  //Склоняем часы
  if (dateTime[6] >= 10 && dateTime[6] <= 20) {
    dateTime[7] = " часов";
  } else if (
    2 === dateTime[6] % 10 ||
    3 === dateTime[6] % 10 ||
    4 === dateTime[6] % 10
  ) {
    dateTime[7] = " часа";
  } else if (1 === dateTime[6] % 10) {
    dateTime[7] = " час";
  } else {
    dateTime[7] = " часов";
  }

  //Склоняем минуты
  if (dateTime[8] >= 10 && dateTime[8] <= 20) {
    dateTime[9] = " минут";
  } else if (
    2 === dateTime[8] % 10 ||
    3 === dateTime[8] % 10 ||
    4 === dateTime[8] % 10
  ) {
    dateTime[9] = " минуты";
  } else if (1 === dateTime[8] % 10) {
    dateTime[9] = " минута";
  } else {
    dateTime[9] = " минут";
  }

  //Склоняем секунды
  if (dateTime[10] >= 10 && dateTime[10] <= 20) {
    dateTime[11] = " секунд";
  } else if (
    2 === dateTime[10] % 10 ||
    3 === dateTime[10] % 10 ||
    4 === dateTime[10] % 10
  ) {
    dateTime[11] = " секунды";
  } else if (1 === dateTime[10] % 10) {
    dateTime[11] = " секунда";
  } else {
    dateTime[11] = " секунд";
  }

  //Вариант вывода б)
  //Добавим нули перед числами, если <10
  if (day <= 9) day = "0" + day;
  if (hours <= 9) hours = "0" + hours;
  if (minutes <= 9) minutes = "0" + minutes;
  if (seconds <= 9) seconds = "0" + seconds;

  dateTimeNum =
    day +
    "." +
    monthNum +
    "." +
    year +
    " - " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;

  //Добавляем на страницу

  document.getElementById("clock").innerHTML = dateTime.join(" ");
  document.getElementById("clock1").innerHTML = dateTimeNum;
};

clock();
setInterval(clock, 1000);

//Стили
let clockStyle = document.querySelector("#clock"),
  clockStyle1 = document.querySelector("#clock1");
clockStyle.style.color = "red";
clockStyle.style.fontWeight = "bold";
clockStyle.style.fontFamily = "Arial";
clockStyle.style.marginBottom = "20px";
clockStyle1.style.color = "red";
clockStyle1.style.fontWeight = "bold";
clockStyle1.style.fontFamily = "Arial";
clockStyle1.style.marginBottom = "20px";
