"use strict";

/*
Необязательное задание.
Если вам показалось домашнее задание простым, выполняем данный пункт.

Необходимо от пользователя получить целое число.
Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

Пример:
Пользователь ввел число 163. Программа должна вывести:
"В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

Пример 2:
Пользователь ввел число 74. Программа должна вывести:
"В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

Пример 3:
Пользователь ввел число 9537. Программа должна вывести:
"В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

Уточнение: Пользователь всегда вводит корректное положительное целое число.
Подсказка: Возможно, вам понадобится округление чисел и оператор %.
*/
function placeNumber() {
  const placeNum = document.querySelector("#placeNum").value;
  const units = placeNum % 10;
  const num = Math.floor(placeNum / 10);
  const tens = num % 10;
  const dig = Math.floor(num / 10);
  const hundreds = dig % 10;
  const digit = `${dig}${tens}${units}`;
  let result;
  result = `В числе ${digit} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${units}`;
  document.querySelector("#result4").innerHTML = result;
}

const enterBtn4 = document.querySelector("#btn4");
enterBtn4.addEventListener("click", function () {
  placeNumber();
});

const resetBtn4 = document.querySelector("#btn-reset4");
resetBtn4.addEventListener("click", function () {
  document.querySelector("#result4").innerHTML = "";
  document.querySelector("#placeNum").value = "";
});
