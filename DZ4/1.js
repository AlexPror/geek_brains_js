"use strict";

/*
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

// let arr = [
//   { 0: "это ноль" },
//   { 1: "нечетное число" },
//   { 2: "четное число" },
//   { 3: "нечетное число" },
//   { 4: "четное число" },
//   { 5: "нечетное число" },
//   { 6: "четное число" },
//   { 7: "нечетное число" },
//   { 8: "четное число" },
//   { 9: "нечетное число" },
//   { 10: "четное число" },
// ];
// console.log(arr);

// function shuffle(arr) {
//   var currentIndex = arr.length,
//     temporaryValue,
//     randomIndex;

//   while (0 !== currentIndex) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;

//     temporaryValue = arr[currentIndex];
//     arr[currentIndex] = arr[randomIndex];
//     arr[randomIndex] = temporaryValue;
//   }

//   return arr;
// }
// console.log(arr);
// shuffle(arr);

// const shuffle = (arr) => {
//   return arr.sort(() => Math.round(Math.random() * 100) - 50);
// };
// console.log(arr);

// for (let i = 0; i <= 10; i++) {
//   if (i == 0) {
//     console.log(`${i} - это ноль`);
//   } else if (i % 2 !== 0) {
//     console.log(`${i} - нечетное число`);
//   } else if (i % 2 == 0) {
//     console.log(`${i} - четное число`);
//   }
// }
