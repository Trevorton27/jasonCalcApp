const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');
const tempResultEl = document.querySelector('.temp-result');
const numbersEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const clearAllEl = document.querySelector('.all-clear');
const clearLastEl = document.getElementById('clearLast');
const equalEl = document.querySelector('.equal');

let disp1Num = '';
let disp2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;
numbersEl.forEach(number => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        } else if (e.target.innerText === '.' && haveDot) {
            return;
        }
        disp2Num += e.target.innerText;
        display2El.innerText = disp2Num;
    })
});

operationEl.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if (!disp2Num) return;
        haveDot = false;
        const operationName = e.target.innerText;
        if (disp1Num && disp2Num && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(disp2Num);
        }
        clearVar(operationName)
        lastOperation = operationName;
        console.log(result)
    })
});

function clearVar(name = '') {
    disp1Num += disp2Num + ' ' + name + ' ';
    display1El.innerText = disp1Num;
    display2El.innerText = '';
    disp2Num = '';
    tempResultEl.innerText = result;
}

function mathOperation() {
    if (lastOperation === '*') {
        result = parseFloat(result) * parseFloat(disp2Num);
    } else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(disp2Num);
    } else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(disp2Num);
    } else if (lastOperation === '/') {
        result = parseFloat(result) / parseFloat(disp2Num);
    } else if (lastOperation === '%') {
        result = parseFloat(result) % parseFloat(disp2Num);
    }
}

equalEl.addEventListener('click', (e) => {
    if (!disp1Num || !disp2Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display2El.innerText = result;
    tempResultEl.innerText = ' ';
    disp2Num = result;
    disp1Num = '';

});

clearAllEl.addEventListener('click', (e) => {
    display1El.innerText = '0';
    display2El.innerText = '0';
    disp1Num = '';
    disp2Num = '';
    result = '';
    tempResultEl.innerText = '0';

});

clearLastEl.addEventListener('click', (e) => {
    display2El.innerText = '';
    disp2Num = '';

});

window.addEventListener('keydown', (e) => {
    if (
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.'
    ) {
        clickButtonEl(e.key)
    } else if (
        e.key === '+' ||
        e.key === '-' ||
        e.key === '*' ||
        e.key === '/' ||
        e.key === '%'
    ) {
        clickOperation(e.key);
    }else if(e.key === 'Enter'){
        clickEqual();
    }
});

function clickButtonEl(key) {
    numbersEl.forEach(button => {
        if (button.innerText === key) {
            button.click();
        }

    });
}

function clickOperation(key){
    operationEl.forEach(button =>{
        if (button.innerText === key){
            button.click();
        }
    })
}
function clickEqual(){
    equalEl.click();
}