"use strict";

/*
Необходимо создать объект, в котором будут объединены два массива en и ru 
так, чтобы в объекте ключами выступали значения из массива en, а значениями 
объекта являлись значения из массива ru.
*/

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];

const arrObj = {};
for (let i = 0; i < en.length; i++) {
  arrObj[en[i]] = ru[i];
}
console.log(arrObj);

//это не мое решение, но я его хотел бы сохранить здесь
const combineArr = (keys, values) =>
  keys.reduce(
    (accumulator, currentValue, index) => (
      (accumulator[currentValue] = values[index]), accumulator
    ),
    {}
  );
const obj = combineArr(en, ru);
console.log(obj);

//вариант от преподавателя
const combineArray = (keys, values) =>
  keys.reduce({ ...accumulator, [currentValue]: values[index] }, {});
const objNew = combineArr(en, ru);
console.log(objNew);
