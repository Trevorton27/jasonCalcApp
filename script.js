// while user input != 'equals sign' continue operations
// if user input == 'equals sign' break operations
// if user input == 'clear' clear all
//function for each operation

// on operator click perform calculations and empty the array then add that to the running total.
let output = [];
let oneArray = []
let sum = 0;

// function for each button
let input = document.getElementById('input');
const zero = document.getElementById('zero');
zero.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("button clicked", output)
});
const one = document.getElementById('one');
one.addEventListener('click', function (event,) {
    event.preventDefault();
    output.push(1)
    let myValue = 1;
        myValue += "1";
        output.push(myValue);
        console.log(myValue)
    // output.push(myValue);
    addNumbers( output );
    // document.getElementById('input').innerHTML = output.join('');
    console.log("one ", output)
});
const two = document.getElementById('two');
two.addEventListener('click', function (event) {
    event.preventDefault();
    output.push(2)
    addNumbers( output );
    console.log("2 clicked", output)
});


// operators
const clear = document.getElementById('clear');
clear.addEventListener('click', function (event) {
    event.preventDefault();
    output = [];
    console.log("clear clicked", output)
});
const equals = document.getElementById('equals');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const decimal = document.getElementById('decimal');

function addNumbers(numbers) {
    let addButton = document.getElementById('add');
    addButton.addEventListener('click', function(){
        for (let i = 0; i < numbers.length; i++) {

            sum += numbers[i];
            numbers.splice(0, numbers.length);
        }
            console.log(sum);
    });

}





