//     Задача 1

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
    } else if (+nav.children[i].getAttribute("data") % 2 == 0) {
      const dataAttr = nav.children[i].getAttribute("data");
      const resTextEl = document.querySelector(
        `.nav__item[data="${dataAttr}"] .resText`
      );
      resTextEl.innerHTML = " - четное число";
    }
  }
}

// if (+nav.children[i].getAttribute("data") === 0) {
//   const newElem = document.createElement("div");
//   newElem.classList.add("element");
//   newElem.id = "elem";
//   newElem.innerHTML = "- это ноль";
//   baseElem[i].insertBefore(newElem, baseElem.firstChild);
// } else if (+nav.children[i].getAttribute("data") % 2 == 0) {
//   const newElem = document.createElement("div");
//   newElem.classList.add("element");
//   newElem.id = "elem";
//   newElem.innerHTML = "- четное число";
//   baseElem[i].insertBefore(newElem, baseElem.firstChild);
// }

// evenNumber = () => {};

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
      // const newElem = nav.children[i].getAttribute("data");
      // newElem.classList.add("element");
      // newElem.id = "elem";
      // newElem.innerHTML = "- нечетное число";
      // baseElem[i].insertBefore(newElem, baseElem.firstChild);
    }
  }
  // oddNumber = () => {};
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

//создаём массив из случайных чисел
const randArr = [];
function createArr() {
  let elemQuantity = +document.querySelector("#elemQuantity").value;
  for (let index = 0; index < elemQuantity; index++) {
    randArr.push(Math.floor(Math.random() * 10));
  }
  let originalArray = document.querySelector("#originalArray");
  originalArray.innerHTML = `Исходный массив [${randArr}]`;
  console.log(`Исходный массив [${randArr}]`);
  createArr = () => {};
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
  // createElemArr = () => {};
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
  }
}

function clearReplArr() {
  let replArr = document.querySelectorAll(".nav__item-arr");
  for (let i = 0; i < replArr.length; i++) {
    replArr[i].remove();
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
const arr = document.querySelector("#createArr");
arr.addEventListener("click", function () {
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
  clearReplArr();
  clearInput();
  clearArray();
});
