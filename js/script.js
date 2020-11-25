"use strict";

//Задача 1
let arr = [245, 766, 46589, 52364, 2988, 3647, 49625];

arr.forEach((num) => {
  if (String(num)[0] == 2 || String(num)[0] == 4) {
    console.log(num);
  }
});

//Задача 2

nextPrime: for (let i = 2; i <= 100; i++) {
  for (let n = 2; n < i; n++) {
    if (i % n == 0) continue nextPrime;
  }
  console.log(i);
}
