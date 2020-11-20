let num = 266219;

num = ("" + num).split("").reduce(function (num, val) {
  return num * val;
});
console.log(num);

num = num ** 3;
console.log(String(num).slice(0, 2));
