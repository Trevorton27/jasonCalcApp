const numberElement = document.querySelectorAll('.number');
const operatorElement = document.querySelectorAll('.operator');
const equalElement = document.querySelector('.equal');

const clearEntityElement = document.querySelector('.clearEntity');
const clearLastElement = document.querySelector('.clearLast');

const displayElementOne = document.querySelector('.display1');
const displayElementTwo = document.querySelector('.display2');
const tempResultElement = document.querySelector('.tempResult');

const memoryRecallElement = document.querySelector('.memRecall');
const memoryClearElement = document.querySelector('.memClear');
const memoryStoreElement = document.querySelector('.memStore');

let result = null;
let firstOperand = '';
let secondOperand = '';
let hasDecimal = false;
let previousOperator = '';
let memoryStore = '';

numberElement.forEach((number) => {
  number.addEventListener('click', (e) => {
    if (e.target.innerText === '.' && !hasDecimal) {
      hasDecimal = true;
    } else if (e.target.innerText === '.' && hasDecimal) {
      return;
    }
    secondOperand += e.target.innerText;
    displayElementTwo.innerText = secondOperand;
  });
});

operatorElement.forEach((operator) => {
  operator.addEventListener('click', (e) => {
    if (!secondOperand) return;
    hasDecimal = false;
    const operationName = e.target.innerText;
    if (secondOperand && firstOperand && previousOperator) {
      mathOperation();
    } else {
      result = parseFloat(secondOperand);
    }
    clearVar(operationName);
    previousOperator = operationName;
  });
});

function mathOperation() {
  switch (previousOperator) {
    case '+':
      result = parseFloat(result) + parseFloat(secondOperand);
      break;
    case '-':
      result = parseFloat(result) - parseFloat(secondOperand);
      break;
    case '*':
      result = parseFloat(result) * parseFloat(secondOperand);
      break;
    case '/':
      result = parseFloat(result) / parseFloat(secondOperand);
      break;
    case '%':
      result = parseFloat(result) % parseFloat(secondOperand);
      break;
  }
}

function clearVar(name = '') {
  firstOperand += secondOperand + ' ' + name + ' ';
  displayElementOne.innerText = firstOperand;
  displayElementTwo.innerText = '';
  secondOperand = '';
  tempResultElement.innerText = result;
}

equalElement.addEventListener('click', (e) => {
  if (!secondOperand || !firstOperand) {
    return;
  }
  mathOperation();
  clearVar();
  displayElementTwo.innerText = result;
  firstOperand = '';
  secondOperand = result;
  tempResultElement.innerText = '';
});

clearLastElement.addEventListener('click', (e) => {
  clearScreen();
});

clearEntityElement.addEventListener('click', (e) => {
  displayElementTwo.innerText = '';
  secondOperand = '';
});

memoryStoreElement.addEventListener('click', (e) => {
  memoryStore = secondOperand;
  clearScreen();
});

memoryRecallElement.addEventListener('click', (e) => {
  secondOperand = memoryStore;
  displayElementTwo.innerText = memoryStore;
});

memoryClearElement.addEventListener('click', (e) => {
  memoryStore = '';
  clearScreen();
});

const clearScreen = () => {
  secondOperand = '';
  displayElementTwo.innerText = '0';
  firstOperand = '';
  displayElementOne.innerText = '0';
  tempResultElement.innerText = '';
  previousOperator = '';
};
