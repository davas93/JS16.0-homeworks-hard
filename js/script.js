function check(string) {
  if (typeof string !== "string") {
    alert("Данный аргумент не является строкой");
    return;
  }
  string = string.trim();
  if (string.lenght > 30) {
    string.slice(0, 30) + "...";
    return;
  }
}
check();
