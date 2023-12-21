//поворот куба за курсором (не работает)
function rotateCube(e) {
  const cube = document.querySelector("#cube");
  let x = e.clientX - window.innerWidth / 2;
  let y = e.clientY - window.innerHeight / 2;
  const q = 0.15;

  x = x * q * 1.25;
  y = -y * q * 1.25;

  for (let i = 0; i < cube.length; i++)
    cube[i].style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
}

document.addEventListener("mousemove", rotateCube);

// поворот куба с клавиатуры
let x = 0,
  y = 0;

document.addEventListener("keydown", function (e) {
  // if (e.keyCode == 37) y -= 5;
  // if (e.keyCode == 39) y += 5;
  // if (e.keyCode == 38) x += 5;
  // if (e.keyCode == 40) x -= 5;

  switch (e.code) {
    case "ArrowLeft": // если нажата клавиша влево
      x -= 5;
      break;
    case "ArrowUp": // если нажата клавиша вверх
      y += 5;
      break;
    case "ArrowRight": // если нажата клавиша вправо
      x += 5;
      break;
    case "ArrowDown": // если нажата клавиша вниз
      y -= 5;
      break;
  }

  document.querySelector(
    ".cube"
  ).style.transform = `rotateY(${y}deg) rotateX(${x}deg)`;
});

/*задача 1*/
// Создайте функцию которая возводит переданное число в куб,
// необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function cubeNumber() {
  const numOne = document.querySelector("#numOne").value;
  const numTwo = document.querySelector("#numTwo").value;
  const resNumOne = `Куб первого числа: ${numOne ** 3}`;
  document.querySelector("#resNumOne").innerHTML = resNumOne;
  const resNumTwo = `Куб второго числа: ${numTwo ** 3}`;
  document.querySelector("#resNumTwo").innerHTML = resNumTwo;
  const cubeSum = `Сумма : ${numOne ** 3 + numTwo ** 3}`;
  document.querySelector("#cubeSum").innerHTML = cubeSum;
  console.log(resNumOne, resNumTwo);
}

const resetBtn = document.querySelector("#btn-reset");
resetBtn.addEventListener("click", function () {
  document.querySelector("#resNumOne").innerHTML = "";
  document.querySelector("#resNumTwo").innerHTML = "";
  document.querySelector("#cubeSum").innerHTML = "";
  document.querySelector("#numOne").value = "";
  document.querySelector("#numTwo").value = "";
});
const enterBtn = document.querySelector("#btn");
enterBtn.addEventListener("click", function () {
  cubeNumber();
});

// /*задача 2*/
// Пользователь вводит с клавиатуры число, если ввёл текст,
// необходимо вывести что значение задано неверно
//  Создать фукнцию, которая высчитывает 13% от данного числа
//  и выводит в консоль текст "Размер заработной платы за
//  вычетом налогов равен значение"

function moneyForNothing() {
  const money = Number(document.querySelector("#money").value);
  console.log(money);
  const wage = `Размер заработной платы за вычетом налогов равен ${(
    money * 0.87
  ).toFixed(2)}`;
  const message = "Значение задано неверно";
  Number.isFinite(money)
    ? (document.querySelector("#result2").innerHTML = wage)
    : (document.querySelector("#result2").innerHTML = message);
  // if (Number.isInteger(money)) {
  //   console.log(wage);
  //   document.querySelector("#result2").innerHTML = wage;
  // } else {
  //   console.log(message);
  //   document.querySelector("#res2").innerHTML = message;
  // }
}

const enterBtn2 = document.querySelector("#btn2");
enterBtn2.addEventListener("click", function () {
  moneyForNothing();
});

const resetBtn2 = document.querySelector("#btn-reset2");
resetBtn2.addEventListener("click", function () {
  document.querySelector("#result2").innerHTML = "";
  document.querySelector("#res2").innerHTML = "";
  document.querySelector("#money").value = "";
});

/* Задача 3*/
// Пользователь с клавиатуры вводит 3 числа,
// необходимо создать функцию, которая определяет
// максимальное значение среди этих чисел

function maxNumber() {
  const firstDig = document.querySelector("#digOne").value;
  const secondDig = document.querySelector("#digTwo").value;
  const thirdDig = document.querySelector("#digThree").value;
  if (firstDig > secondDig && firstDig > thirdDig) {
    document.querySelector("#result3").innerHTML = "Первое число больше";
  } else if (secondDig > firstDig && secondDig > thirdDig) {
    document.querySelector("#result3").innerHTML = "Второе число больше";
  } else {
    document.querySelector("#result3").innerHTML = "Третье число больше";
  }
}

const resetBtn3 = document.querySelector("#btn-reset3");
resetBtn3.addEventListener("click", function () {
  document.querySelector("#result3").innerHTML = "";
  document.querySelector("#digOne").value = "";
  document.querySelector("#digTwo").value = "";
  document.querySelector("#digThree").value = "";
});

const enterBtn3 = document.querySelector("#btn3");
enterBtn3.addEventListener("click", function () {
  maxNumber();
});

// Задача 4

// Необходимо реализовать четыре функции, каждая функция
// должна принимать по два числа и выполнять одну из
// операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число,
// например выражение console.log(sum(2, 6)); должно вывести
// число 8 в консоль (sum - функция сложения в данном примере,
//   ваши названия функций могут отличаться).
//   Округлять значения, которые возвращают функции не нужно,
//   однако, обратите внимание на разность, функция должна
//   вычесть из большего числа меньшее, либо вернуть 0, если числа
//   равны. Функциям всегда передаются корректные числа, проверки
//   на NaN, Infinity делать не нужно.

function multNumber() {
  const numberOne = document.querySelector("#numberOne").value;
  const numberTwo = document.querySelector("#numberTwo").value;
  document.querySelector("#result4").innerHTML = Math.imul(
    numberOne,
    numberTwo
  );
}

function sumNumber() {
  const numberOne = +document.querySelector("#numberOne").value;
  const numberTwo = +document.querySelector("#numberTwo").value;
  document.querySelector("#result4").innerHTML = numberOne + numberTwo;
}

function differenceNumber() {
  const numberOne = +document.querySelector("#numberOne").value;
  const numberTwo = +document.querySelector("#numberTwo").value;
  if (numberOne >= numberTwo) {
    document.querySelector("#result4").innerHTML = numberOne - numberTwo;
  } else if (numberTwo >= numberOne) {
    document.querySelector("#result4").innerHTML = numberTwo - numberOne;
  }
}

function divideNumber() {
  const numberOne = +document.querySelector("#numberOne").value;
  const numberTwo = +document.querySelector("#numberTwo").value;
  document.querySelector("#result4").innerHTML = (
    numberOne / numberTwo
  ).toFixed(2);
}

const resetBtn4 = document.querySelector("#btn-reset4");
resetBtn4.addEventListener("click", function () {
  document.querySelector("#result4").innerHTML = "";
  document.querySelector("#numberOne").value = "";
  document.querySelector("#numberTwo").value = "";
});

const enterBtnMult = document.querySelector("#btnMult");
enterBtnMult.addEventListener("click", function () {
  multNumber();
});

const enterBtnSum = document.querySelector("#btnSum");
enterBtnSum.addEventListener("click", function () {
  sumNumber();
});

const enterBtnDiff = document.querySelector("#btnDiff");
enterBtnDiff.addEventListener("click", function () {
  differenceNumber();
});

const enterBtnDiv = document.querySelector("#btnDivide");
enterBtnDiv.addEventListener("click", function () {
  divideNumber();
});
