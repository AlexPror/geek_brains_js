//     Задача 1
/*
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

// сортировка пузырьком попорядку
function mySort() {
  let nav = document.querySelector("#nav");
  for (let i = 0; i < nav.children.length; i++) {
    for (let j = i; j < nav.children.length; j++) {
      if (
        +nav.children[i].getAttribute("data") >
        +nav.children[j].getAttribute("data")
      ) {
        replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replacedNode, nav.children[i]);
      }
    }
  }
}

// обратная сортировка пузырьком
function mySortDesc() {
  let nav = document.querySelector("#nav");
  for (let i = 0; i < nav.children.length; i++) {
    for (let j = i; j < nav.children.length; j++) {
      if (
        +nav.children[i].getAttribute("data") <
        +nav.children[j].getAttribute("data")
      ) {
        replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replacedNode, nav.children[i]);
      }
    }
  }
}

// функция замены элемента
function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

// ищем четное число через атрибут
const baseElem = document.getElementsByClassName("nav__item");
function evenNumber() {
  let nav = document.querySelector("#nav");
  for (let i = 0; i < nav.children.length; i++) {
    if (+nav.children[i].getAttribute("data") === 0) {
      const dataAttr = nav.children[i].getAttribute("data");
      const resTextEl = document.querySelector(
        `.nav__item[data="${dataAttr}"] .resText`
      );
      resTextEl.innerHTML = " - это ноль";
    } else if (+nav.children[i].getAttribute("data") % 2 === 0) {
      const dataAttr = nav.children[i].getAttribute("data");
      const resTextEl = document.querySelector(
        `.nav__item[data="${dataAttr}"] .resText`
      );
      resTextEl.innerHTML = " - четное число";
    }
  }
}

// ищем НЕчетное число через атрибут
function oddNumber() {
  let nav = document.querySelector("#nav");
  for (let i = 0; i < nav.children.length; i++) {
    if (+nav.children[i].getAttribute("data") % 2 !== 0) {
      const dataAttr = nav.children[i].getAttribute("data");
      const resTextEl = document.querySelector(
        `.nav__item[data="${dataAttr}"] .resText`
      );
      resTextEl.innerHTML = "- нечетное число";
    }
  }
}

//удаление текста
function delText() {
  let nav = document.querySelector("#nav");
  for (let i = 0; i < nav.children.length; i++) {
    if (
      +nav.children[i].getAttribute("data") % 2 !== 0 ||
      +nav.children[i].getAttribute("data") === 0 ||
      +nav.children[i].getAttribute("data") % 2 == 0
    ) {
      const dataAttr = nav.children[i].getAttribute("data");
      const resTextEl = document.querySelector(
        `.nav__item[data="${dataAttr}"] .resText`
      );
      resTextEl.innerHTML = "";
    }
  }
}
// let delElement = document.querySelectorAll("#elem");
// for (let i = 0; i < delElement.length; i++) {
//   let result = delElement;
//   result.forEach(function (item) {
//     let product = item;
//     product.remove();
//   });
// }

// кнопки
const evenBtn = document.querySelector("#evenNum");
evenBtn.addEventListener("click", function () {
  evenNumber();
});

const oddBtn = document.querySelector("#oddNum");
oddBtn.addEventListener("click", function () {
  oddNumber();
});

const resetBtn = document.querySelector("#btn-reset");
resetBtn.addEventListener("click", function () {
  delText();
});

const sortAsc = document.querySelector("#sortAsc");
sortAsc.addEventListener("click", function () {
  mySort();
});

const sortDesc = document.querySelector("#sortDesc");
sortDesc.addEventListener("click", function () {
  mySortDesc();
});

// Задача 2

/*
Дан массив arr (const arr = [1, 2, 3, 4, 5, 6, 7];).
Необходимо внести такие изменения в массив, лежащий в const arr, чтобы
его значения после изменений стали: 
[1, 2, 100, 6, 7]
*/

//создаём массив из случайных чисел
const randArr = [];
function createArr() {
  let elemQuantity = +document.querySelector("#elemQuantity").value;
  for (let index = 0; index < elemQuantity; index++) {
    randArr.push(Math.floor(Math.random() * 10));
    console.log(randArr);
  }
  let originalArray = document.querySelector("#originalArray");
  originalArray.innerHTML = `Исходный массив [${randArr}]`;
  console.log(`Исходный массив [${randArr}]`);
}

// печатаем массив через создание DOM элемментов
let origArr = document.querySelector("#origArr");
function createElemArrDom() {
  for (let i = 0; i < randArr.length; i++) {
    const newElem = document.createElement("div");
    newElem.classList.add("nav__item-arr");
    newElem.innerHTML = randArr[i];
    origArr.appendChild(newElem);
  }
}

//функция замены элемента в исходном массиве
function replaceElem() {
  let elemReplace = +document.querySelector("#elemReplace").value;
  let quantElem = +document.querySelector("#quantElem").value;
  let newElem = +document.querySelector("#newElem").value;
  let replacedArray = document.querySelector("#replacedArray");
  randArr.splice(elemReplace, quantElem, newElem);
  replacedArray.innerHTML = `Новый массив: [${randArr}]`;
  console.log(`Новый массив: [${randArr}]`);

  // замена массива через DOM элементы
}
function replElDom() {
  let replArr = document.querySelector("#replArr");
  for (let i = 0; i < randArr.length; i++) {
    const newElem = document.createElement("div");
    newElem.classList.add("nav__item-arr");
    newElem.innerHTML = randArr[i];
    replArr.appendChild(newElem);
  }
}

//функции очистки полей
function clearOrigArr() {
  let clearArr = document.querySelectorAll(".nav__item-arr");
  for (let i = 0; i < clearArr.length; i++) {
    clearArr[i].remove();
    randArr.splice(0, randArr.length);
  }
}

function clearInput() {
  document.querySelector("#elemQuantity").value = "";
  document.querySelector("#elemReplace").value = "";
  document.querySelector("#quantElem").value = "";
  document.querySelector("#newElem").value = "";
}

function clearArray() {
  document.querySelector("#originalArray").innerHTML = "";
  document.querySelector("#replacedArray").innerHTML = "";
}

//кнопки
const createArrBtn = document.querySelector("#createArr");
createArrBtn.addEventListener("click", function () {
  createArr();
  createElemArrDom();
});

const replaceBtn = document.querySelector("#replace");
replaceBtn.addEventListener("click", function () {
  replaceElem();
  replElDom();
});

const resetBtn2 = document.querySelector("#btn-reset2");
resetBtn2.addEventListener("click", function () {
  clearOrigArr();
  clearInput();
  clearArray();
});

//задача 3

/*
Используя Math.random() необходимо сгенерировать массив, 
содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль 
следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива,
 в которых значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], 
то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что 
в сгенерированном массиве тройки лежат под индексами 1 и 4. 
Если троек в сгенерированном массиве не окажется,
 значит нужно будет вывести пустой массив.
*/

//создаём массив из случайных чисел
const randNewArr = [];
function newArr() {
  for (let index = 0; index < 5; index++) {
    randNewArr.push(Math.floor(Math.random() * 5));
  }
  let printArray = document.querySelector("#printArray");
  console.log(`Исходный массив [${randNewArr}]`);
  printArray.innerHTML = `Исходный массив [${randNewArr}]`;
}

//сумма элементов массива
function sumArrEl(arr) {
  let sum = 0;
  for (let i = 0; i < randNewArr.length; i++) {
    sum += randNewArr[i];
  }
  console.log(`Сумма элементов массива: ${sum}`);
  document.querySelector("#sumOutput").innerHTML = sum;
  // sumArrEl = () => {};
}

//минимальный элемент массива
function minElArr(randNewArr) {
  document.querySelector("#minElOutput").innerHTML = Math.min(...randNewArr);
  document.querySelector("#minElOutput").innerHTML = Math.min(
    ...null,
    randNewArr
  );
  console.log(
    `Минимальный элемент массива: ${Math.min.apply(null, randNewArr)}`
  );
}

//массив индексов в которых значение равно 3
function indexArr() {
  let newArr = [];
  for (let index = 0; index <= randNewArr.length; index++) {
    if (randNewArr[index] === 3) {
      newArr.push(index);
    }
  }
  console.log(`Массив индексов в которых значение равно 3: [${newArr}]`);
  document.querySelector("#indexOutput").innerHTML = `[${newArr}]`;
  // indexArr = () => {};
}

function clearText() {
  randNewArr.splice(0, randNewArr.length);
  document.querySelector("#printArray").innerHTML = "";
  document.querySelector("#indexOutput").innerHTML = "";
  document.querySelector("#minElOutput").innerHTML = "";
  document.querySelector("#sumOutput").innerHTML = "";
}

//кнопки
const newArrBtn = document.querySelector("#createNewArr");
newArrBtn.addEventListener("click", function () {
  newArr();
});

const sumArr = document.querySelector("#sumArrEl");
sumArr.addEventListener("click", function () {
  sumArrEl();
});

const minArrEl = document.querySelector("#minArrEl");
minArrEl.addEventListener("click", function () {
  minElArr(randNewArr);
});

const indArr = document.querySelector("#indexArr");
indArr.addEventListener("click", function () {
  indexArr(randNewArr);
});

const resetBtn3 = document.querySelector("#btn-reset3");
resetBtn3.addEventListener("click", function () {
  clearText();
});

//задача 4
/*
Необходимо вывести горку в консоль (используя цикл for), 
как показано на рисунке, только у вашей горки должно быть 
20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

const string = "x";
const arr = [];
function piramid() {
  let arrOrig = document.querySelector("#printArr");
  for (let index = 1; index <= 20; index++) {
    arr.push(string);
    let str = arr.join("");
    const newEl = document.createElement("div");
    newEl.classList.add("piramid");
    newEl.innerHTML = str;
    arrOrig.appendChild(newEl);
    console.log(arr.join(""));
  }
}

function clearPiramid() {
  arr.splice(0, arr.length);
  document.querySelector("#printArr").innerHTML = "";
}

const piramidArr = document.querySelector("#piramidArray");
piramidArr.addEventListener("click", function () {
  piramid();
});

const piramidReset = document.querySelector("#btn-reset4");
piramidReset.addEventListener("click", function () {
  clearPiramid();
});
