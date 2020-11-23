"use strict";

//Задача 1
let lang = prompt("Введите язык ('en' или 'ru')"),
  weekDaysRU = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  weekDaysEn = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  weekDays;

//Решение через if
if (lang == "ru") {
  console.log(weekDaysRU);
} else if (lang == "en") {
  console.log(weekDaysEn);
}

//Решение через switch-case
switch (lang) {
  case "ru":
    console.log(weekDaysRU);
    break;
  case "en":
    console.log(weekDaysEn);
    break;
}

//Решение через многомерный массив
weekDays = {
  ru: weekDaysRU,
  en: weekDaysEn,
};
console.log(weekDays[lang]);

//Задача 2
let namePerson = prompt("Введите имя");
let result =
  namePerson === "Артем"
    ? "Директор"
    : namePerson === "Максим"
    ? "Преподаватель"
    : "Студент";

console.log(result);
