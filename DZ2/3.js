"use strict";

/*
Необходимо создать переменную dayNumber, в которую пользователь должен ввести 
целое число в интервале [1, 32).
Если пользователь ввел иное значение, необходимо вывести в консоль 
"Неверное значение".
Если пользователь ввел верное значение, в нужном диапазоне, то необходимо 
определить, в какую декаду месяца попадает это число и вывести сообщение в 
консоль: "Число N1 попадает в N2 декаду месяца.", где вместо N1 и N2 будут 
подставлены подходящие значения, которые мы получили.

Примечание: выражение [1, 32) означает от 1 включительно, до 32, не включая 
число 32.
*/

// const obj = {
//   firstDecada:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   secondDecada:[11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//   thirdDecada:[21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
// }
// for (let dayNum in obj) {
//   if (dayNum === true) {
//     console.log(`Число ${dayNum} попадает в ${obj[i]}`)
// }
// const array = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24, 25, 26, 27, 28, 29, 30, 31,
// ];
// console.log(array.length);
// const dayNum = 1;
// let newArr = [];
// for (let i = 0; i <= array.length - 1; i++) {
//   if (dayNum <= 10 && i <= 9) {
//     newArr.push(Math.round((dayNum / array[i]) * 100) / 100);
//   }
// }
// console.log(newArr);

function decadeNumber() {
  const dayNumber = document.querySelector("#dayNumber").value;
  let result;
  if (dayNumber >= 1 && dayNumber <= 10) {
    result = `Число ${dayNumber} попадает в первую декаду месяца`;
  } else if (dayNumber >= 11 && dayNumber <= 20) {
    result = `Число ${dayNumber} попадает во вторую декаду месяца`;
  } else if (dayNumber >= 21 && dayNumber <= 31) {
    result = `Число ${dayNumber} попадает в третью декаду месяца`;
  } else if (dayNumber > 31) {
    result = `Неверное значение`;
  }
  document.querySelector("#result3").innerHTML = result;
}

// calenderNumber();
// function calenderNumber() {
//   const dayDig = document.querySelector("#decade").innerText;
//   const dayNumber = document.querySelector("#dayNumber");
//   dayNumber.value = dayDig;
//   let result;
//   if (dayNumber >= 1 && dayNumber <= 10) {
//     result = `Число ${dayNumber} попадает в первую декаду месяца`;
//   } else if (dayNumber >= 11 && dayNumber <= 20) {
//     result = `Число ${dayNumber} попадает во вторую декаду месяца`;
//   } else if (dayNumber >= 21 && dayNumber <= 31) {
//     result = `Число ${dayNumber} попадает в третью декаду месяца`;
//   } else if (dayNumber > 31) {
//     result = `Неверное значение`;
//   }
//   document.querySelector("#result3").innerHTML = result;
// }

const enterBtn3 = document.querySelector("#btn3");
enterBtn3.addEventListener("click", function () {
  decadeNumber();
});

// const enterDay = document.querySelector("#decade");
// enterDay.addEventListener("click", function () {
//   calenderNumber();
// });

const resetBtn3 = document.querySelector("#btn-reset3");
resetBtn3.addEventListener("click", function () {
  document.querySelector("#result3").innerHTML = "";
  document.querySelector("#dayNumber").value = "";
});
