const numberElement = document.querySelectorAll('.number');
const operatorElement = document.querySelectorAll('.operator');
const equalElement = document.querySelector('.equal');
const clearElement = document.querySelector('.allClear');
const clearLastElement = document.querySelector('.clearLast');
const decimalElement = document.querySelector('.decimal');

const displayElement1 = document.querySelector('.display1');
const displayElement2 = document.querySelector('.display2');
const tempResultElement = document.querySelector('.tempResult');

let result = null;
let display1Num = '';
let display2Num = '';
let hasDot = false;
