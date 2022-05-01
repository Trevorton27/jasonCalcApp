const numberElement = document.querySelectorAll(".number");
const operatorElement = document.querySelectorAll(".operator");
const equalElement = document.querySelector(".equal");
const clearElement = document.querySelector(".allClear");
const clearLastElement = document.querySelector(".clearLast");
const decimalElement = document.querySelector(".decimal");

const displayElement1 = document.querySelector(".display1");
const displayElement2 = document.querySelector(".display2");
const tempResultElement = document.querySelector(".tempResult");

let result = null;
let display1Num = "";
let display2Num = "";
let hasDecimal = false;
let previousOperator = "";

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
    if (!display2Num) {
      hasDecimal = false;
    }
    const operationName = e.target.innerText;
    if (display2Num && display1Num && lastOperation) {
      mathOperation();
    }
  });
});

function mathOperation() {
  if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(display2Num);
    console.log("add working", result);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(display2Num);
    console.log("subtract working", result);
  } else if (lastOperation === "*") {
    result = parseFloat(result) * parseFloat(display2Num);
    console.log("multiply working", result);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(display2Num);
    console.log("division working", result);
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(display2Num);
    console.log("modulus working", result);
  }
}

// transfer display2Num to display1Num

//update temoResult

//
