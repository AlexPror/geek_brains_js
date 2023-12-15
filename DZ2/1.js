"use strict";

/*
Создать переменные positive и negative, в которые пользователь вводит с 
клавиатуры значения. Нужно попросить пользователя ввести положительное число в 
переменную positive и отрицательное в переменную negative. 
Перед тем, как положить значения в данные переменные необходимо их превратить 
в числа.
После ввода значений, необходимо вывести "Все значения верные.", если 
пользователь действительно ввел корректные значения, которые мы просили его 
ввести.
Если же пользователь где-то ввел неверное значение, то необходимо вывести 
в консоль "Одно или более значений некорректно.".
*/

function defineNumber() {
  const positive = document.querySelector("#positive").value;
  const negative = document.querySelector("#negative").value;
  let pos = +positive; // перевод значения в число
  let neg = +negative; // перевод значения в число
  let result;
  if (pos >= 0 && neg < 0) {
    result = "Все значения верны";
  } else {
    result = "Одно или более значений некорректно.";
  }
  document.querySelector("#result").innerHTML = result;
}
const resetBtn = document.querySelector("#btn-reset");
resetBtn.addEventListener("click", function () {
  document.querySelector("#result").innerHTML = "";
});
const enterBtn = document.querySelector("#btn");
enterBtn.addEventListener("click", function () {
  defineNumber();
});
