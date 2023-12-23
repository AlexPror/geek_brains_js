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
      const newElem = document.createElement("div");
      newElem.classList.add("element");
      newElem.id = "elem";
      newElem.innerHTML = "- это ноль";
      baseElem[i].insertBefore(newElem, baseElem.firstChild);
    } else if (+nav.children[i].getAttribute("data") % 2 == 0) {
      const newElem = document.createElement("div");
      newElem.classList.add("element");
      newElem.id = "elem";
      newElem.innerHTML = "- четное число";
      baseElem[i].insertBefore(newElem, baseElem.firstChild);
    }
  }
  // evenNumber = () => {};
}

// ищем НЕчетное число через атрибут
function oddNumber() {
  let nav = document.querySelector("#nav");
  for (let i = 0; i < nav.children.length; i++) {
    if (+nav.children[i].getAttribute("data") % 2 !== 0) {
      const newElem = document.createElement("div");
      newElem.classList.add("element");
      newElem.id = "elem";
      newElem.innerHTML = "- нечетное число";
      baseElem[i].insertBefore(newElem, baseElem.firstChild);
    }
  }
  // oddNumber = () => {};
}

//удаление элемента
function delElem() {
  let delElement = document.querySelectorAll("#elem");
  for (let i = 0; i < delElement.length; i++) {
    let result = delElement;
    result.forEach(function (item) {
      let product = item;
      product.remove();
    });
  }
}

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
  delElem();
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
const randArr = [];
function createArr() {
  let elemQuantity = +document.querySelector("#elemQuantity").value;
  for (let index = 0; index < elemQuantity; index++) {
    randArr.push(Math.floor(Math.random() * 10));
  }
  console.log(randArr);
  createArr = () => {};
}

let navTwo = document.querySelector("#navTwo");
function createElemArr() {
  for (let i = 0; i < randArr.length; i++) {
    const newElem = document.createElement("div");
    newElem.classList.add("nav__item");
    newElem.id = "arrElem";
    newElem.innerHTML = randArr[i];
    navTwo.appendChild(newElem);
  }
  createElemArr = () => {};
}

const arr = document.querySelector("#createArr");
arr.addEventListener("click", function () {
  createArr();
  createElemArr();
});

function replaceElem() {
  let elemReplace = +document.querySelector("#elemReplace").value;
  let quantElem = +document.querySelector("#quantElem").value;
  let newElem = +document.querySelector("#newElem").value;
  randArr.splice(elemReplace, quantElem, newElem);
  for (let i = 0; i < randArr.length; i++) {
    const newElem = document.createElement("div");
    newElem.classList.add("nav__item");
    newElem.innerHTML = randArr[i];
    navTwo.appendChild(newElem);
  }
  console.log(randArr);
}

function delOldArr() {
  let deleteElement = document.querySelectorAll("#arrElem");
  for (let i = 0; i < deleteElement.length; i++) {
    deleteElement[i].remove();
  }
}

const replaceBtn = document.querySelector("#replace");
replaceBtn.addEventListener("click", function () {
  delOldArr();
  replaceElem();
});
