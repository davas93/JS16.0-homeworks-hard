"use strict";

//Задача вариант а)
let date1 = new Date(),
  weekday = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ],
  month = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];

date1 = [
  "Сегодня",
  weekday[date1.getDay()] + ",",
  date1.getDate(),
  month[date1.getMonth()],
  date1.getFullYear(),
  "года" + ",",
  date1.getHours(),
  "час",
  date1.getMinutes(),
  "минут",
  date1.getSeconds(),
  "секунд",
];
date1[10] = 11;
let lastHoursNum = date1[6].toString().split("").pop(),
  lastMinutesNum = date1[8].toString().split("").pop(),
  lastSecondsNum = date1[10].toString().split("").pop();

/*//Склоняем часы
if (lastHoursNum == "2" || lastHoursNum == "3" || lastHoursNum == "4") {
  date1[7] = "часа";
} else if (
  lastHoursNum == "0" ||
  lastHoursNum == "5" ||
  lastHoursNum == "6" ||
  lastHoursNum == "7" ||
  lastHoursNum == "8" ||
  lastHoursNum == "9"
) {
  date1[7] = "часов";
} else {
  date1[7] = "час";
}

//Cклоняем минуты
if (lastMinutesNum == "2" || lastMinutesNum == "3" || lastMinutesNum == "4") {
  date1[9] = "минуты";
} else if (
  lastMinutesNum == "0" ||
  lastMinutesNum == "5" ||
  lastMinutesNum == "6" ||
  lastMinutesNum == "7" ||
  lastMinutesNum == "8" ||
  lastMinutesNum == "9"
) {
  date1[9] = "минут";
} else {
  date1[9] = "минута";
}

//Cклоняем секунды
if (lastSecondsNum == "2" || lastSecondsNum == "3" || lastSecondsNum == "4") {
  date1[11] = "секунды";
} else if (
  lastSecondsNum == "0" ||
  lastSecondsNum == "5" ||
  lastSecondsNum == "6" ||
  lastSecondsNum == "7" ||
  lastSecondsNum == "8" ||
  lastSecondsNum == "9"
) {
  date1[11] = "секунд";
} else {
  date1[11] = "секунда";
}*/
if (10 <= date1[10] <= 20) {
  date1[11] = "секунд";
}
if (["2", "3", "4"].indexOf(lastSecondsNum) > -1) {
  date1[11] = "секунды";
} else if ("1" === lastSecondsNum) {
  date1[11] = "секунда";
} else {
  date1[11] = "секунд";
}

document.write(date1.join(" "));

//Задача вариант б)
console.log(lastSecondsNum);
