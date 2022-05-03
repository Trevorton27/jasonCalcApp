const numberElement = document.querySelectorAll(".number");
const operatorElement = document.querySelectorAll(".operator");
const equalElement = document.querySelector(".equal");
const clearEntityElement = document.querySelector(".clearEntity");
const clearLastElement = document.querySelector(".clearLast");
const decimalElement = document.querySelector(".decimal");

const displayElement1 = document.querySelector(".display1");
const displayElement2 = document.querySelector(".display2");
const tempResultElement = document.querySelector(".tempResult");

const memRecallElement = document.querySelector(".memRecall");
const memClearElement = document.querySelector(".memClear");
const memStoreElement = document.querySelector(".memStore");

let result = null;
let display1Num = "";
let display2Num = "";
let hasDecimal = false;
let previousOperator = "";
let mStore = "";

numberElement.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !hasDecimal) {
      hasDecimal = true;
    } else if (e.target.innerText === "." && hasDecimal) {
      return;
    }
    display2Num += e.target.innerText;
    displayElement2.innerText = display2Num;
  });
});

operatorElement.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (!display2Num) return;
    hasDecimal = false;
    const operationName = e.target.innerText;
    if (display2Num && display1Num && previousOperator) {
      mathOperation();
    } else {
      result = parseFloat(display2Num);
    }
    clearVar(operationName);
    previousOperator = operationName;
  });
});

function mathOperation() {
  if (previousOperator === "+") {
    result = parseFloat(result) + parseFloat(display2Num);
  } else if (previousOperator === "-") {
    result = parseFloat(result) - parseFloat(display2Num);
  } else if (previousOperator === "*") {
    result = parseFloat(result) * parseFloat(display2Num);
  } else if (previousOperator === "/") {
    result = parseFloat(result) / parseFloat(display2Num);
  } else if (previousOperator === "%") {
    result = parseFloat(result) % parseFloat(display2Num);
  }
}

function clearVar(name = "") {
  display1Num += display2Num + " " + name + " ";
  displayElement1.innerText = display1Num;
  displayElement2.innerText = "";
  display2Num = "";
  tempResultElement.innerText = result;
}

equalElement.addEventListener("click", (e) => {
  if (!display2Num || !display1Num) {
    return;
  }
  mathOperation();
  clearVar();
  displayElement2.innerText = result;
  display1Num = "";
  display2Num = result;
  tempResultElement.innerText = "";
});
clearLastElement.addEventListener("click", (e) => {
  clearScreen();
});
clearEntityElement.addEventListener("click", (e) => {
  displayElement2.innerText = "";
  display2Num = "";
});

memStoreElement.addEventListener("click", (e) => {
  mStore = display2Num;
  clearScreen();
});
memRecallElement.addEventListener("click", (e) => {
  display2Num = mStore;
  displayElement2.innerText = mStore;
});
memClearElement.addEventListener("click", (e) => {
  mStore = "";
  clearScreen();
});
const clearScreen = () => {
  display2Num = "";
  displayElement2.innerText = "0";
  display1Num = "";
  displayElement1.innerText = "0";
  tempResultElement.innerText = "";
  previousOperator = "";
};
