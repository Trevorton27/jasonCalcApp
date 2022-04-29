const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');
const tempResultEl = document.querySelector('.temp-result');
const numbersEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const clearEl = document.querySelector('.all-clear');
const clearLastEl = document.querySelector('.last-entity-clear');
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
        if (!disp2Num) result;
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

function mathOperation(){
    if (lastOperation === 'X'){
        result = parseFloat(result) * parseFloat(disp2Num);
    }else if(lastOperation === '+'){
        result = parseFloat(result) + parseFloat(disp2Num);
    }else if(lastOperation === '-'){
        result = parseFloat(result) - parseFloat(disp2Num);
    }else if(lastOperation === '/'){
        result = parseFloat(result) / parseFloat(disp2Num);
    }else if(lastOperation === '%'){
        result = parseFloat(result) % parseFloat(disp2Num);
    }
}

