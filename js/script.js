"use strict";

let week = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  toDay = new Date().getDay();

for (let i = 0; i < week.length; i++) {
  if (i === 5 || i === 6) {
    week[i] = week[i].italics();
  }
  if (i === toDay) {
    let correctIndex = i == 0 ? 6 : i - 1;
    week[correctIndex] = week[correctIndex].bold();
  }
}
document.write(week.join("<br>"));
