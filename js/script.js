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
    " секунд",
  ];
  if (document.layers) {
    document.layers.doc_time.document.write(dateTime);
    document.layers.doc_time.document.close();
  } else document.getElementById("doc_time").innerHTML = dateTime.join(" ");
  setInterval("clock()", 1000);
}
clock();
console.log(dateTime);
