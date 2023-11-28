"use strict";

/*
Необходимо пользователя попросить ввести температуру в градусах Цельсия,
преобразовать введенное пользователем значение в соответствующую температуру
в градусах по Фаренгейту и вывести в alert сообщение с таким текстом:
"Цельсий: {C}, Фаренгейт: {F}"
Где вместо {C} и {F} должны быть подставлены соответствующие значения, которые
были получены ранее.
Формула перевода градусов Цельсия в градусы Фаренгейта:
градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32

Уточнение: пользователь всегда вводит корректное число.
*/

// Здесь пишем решение, данный комментарий необходимо стереть.
// function tempertatureConverter() {
//   const temperature = document.getElementById("temperature").value;
//   const farengate = temperature * (9 / 5) + 32;
//   alert(`Температура °C: ${temperature}, Температура °F: ${farengate}`);
// }

const enterBtn = document.querySelector("#btn");
const temperature = document.getElementById("temperature");

document.addEventListener("keypress", function (e) {
  if (e.keyCode !== 13) {
    return;
  }
  tempertatureConverter(true);
});

enterBtn.addEventListener("click", function () {
  tempertatureConverter();
});

function tempertatureConverter(isEnter = false) {
  const temperatureValue = temperature.value;
  const farengate = temperatureValue * (5 / 9) + 32;
  if (temperatureValue === "") {
    return temperature.classList.add(
      "input_error"
    ); /*добавляем класс для выделения бордера при ошибке*/
  } else {
    temperature.classList.remove(
      "input_error"
    ); /*удаляем класс, добавленный ранее*/
  }

  if (isEnter) {
    return alert(
      `Температура °C: ${temperatureValue}, Температура °F: ${farengate.toFixed(
        2
      )}` /*запуск с клавиатуры*/
    );
  }
  alert(
    `Температура °C: ${temperatureValue}, Температура °F: ${farengate.toFixed(
      2
    )}` /*запуск кликом мышки*/
  );
}
