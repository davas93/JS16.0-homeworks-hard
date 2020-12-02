function clock() {
  let d = new Date(),
    year = d.getFullYear(),
    monthNum = d.getMonth(),
    weekday = d.getDay(),
    day = d.getDate(),
    hours = d.getHours(),
    minutes = d.getMinutes(),
    seconds = d.getSeconds();

  month = new Array(
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
    "декабря"
  );

  week = new Array(
    "Восересенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота"
  );

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

  if (document.layers) {
    document.layers.clock.document.write(dateTime);
    document.layers.clock.document.close();
  } else document.getElementById("clock").innerHTML = dateTime.join(" ");
  setInterval("clock()", 1000);
}
clock();
console.log(dateTime);
