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
  weekday[date1.getDay()],
  date1.getDate(),
  month[date1.getMonth()],
  date1.getFullYear(),
  "года",
  date1.getHours(),
  "час",
  date1.getMinutes(),
  "минут",
  date1.getSeconds(),
  "секунд",
];

let lastHoursNum = date1[6].toString().split("").pop(),
  lastMinutesNum = date1[8].toString().split("").pop(),
  lastSecondsNum = date1[10].toString().split("").pop(),
  hoursText = date1[7],
  minutesText = date1[9],
  secondsText = date1[11];

document.write(date1);
console.log(date1);
console.log(minutesText);
