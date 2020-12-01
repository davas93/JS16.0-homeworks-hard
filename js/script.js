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
  "Сегодня ",
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

document.write(date1);
console.log(date1);
