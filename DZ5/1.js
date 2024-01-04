"use strict";

/*
Дан объект numbers. 
Необходимо в консоль вывести все значения объекта, которые больше или равны 3.
*/

const numbers = {
  key1: 12,
  key2: 2,
  key3: 4,
  key4: 1,
  key5: -244,
  key6: 0,
  key7: 7,
};

const valueArr = Object.values(numbers);
console.log(valueArr);

const num = valueArr.filter((dig) => dig >= 3);
console.log(num.join(","));

for (const key in numbers) {
  const num = numbers[key];
  if (num >= 3) {
    console.log(num);
  }
}
