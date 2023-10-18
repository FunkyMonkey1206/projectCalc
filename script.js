//Add functions for each operation
const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

let currentVal = 0;
let nextVal = 0;
let operator = "";
let valueHolder = "0";
let result = 0;
let dPointCount = 0;

buttons.forEach((button) =>{
    button.addEventListener('click', () => {
        if(button.id == 'AC') {
            allClear();
        } else if(button.id == '+') {
            if(operator != ""){
                nextVal = +valueHolder
                operate(currentVal, nextVal, operator)
                outputDisplay(result);
                currentVal = result;
                valueHolder = "";
                operator = button.id;
            } else {
                currentVal = +valueHolder;
                operator = button.id;
                valueHolder = "";
            }
        } else if(button.id == '-') {
            if(operator != ""){
                nextVal = +valueHolder
                operate(currentVal, nextVal, operator)
                outputDisplay(result);
                currentVal = result;
                valueHolder = "";
                operator = button.id;
            } else {
                currentVal = +valueHolder;
                operator = button.id;
                valueHolder = "";
            }
        } else if(button.id == '×') {
            if(operator != ""){
                nextVal = +valueHolder
                operate(currentVal, nextVal, operator)
                outputDisplay(result);
                currentVal = result;
                valueHolder = "";
                operator = button.id;
            } else {
                currentVal = +valueHolder;
                operator = button.id;
                valueHolder = "";
            }
        } else if(button.id == '÷') {
            if(operator != ""){
                nextVal = +valueHolder
                operate(currentVal, nextVal, operator)
                outputDisplay(result);
                currentVal = result;
                valueHolder = "";
                operator = button.id;
            } else {
                currentVal = +valueHolder;
                operator = button.id;
                valueHolder = "";
            }
        } else if(button.id == "=") {
            if(operator != ""){
                nextVal = +valueHolder
                operate(currentVal, nextVal, operator)
                outputDisplay(result);
                currentVal = result;
                valueHolder = "";
            } else {
                outputDisplay(valueHolder);
                valueHolder = "";
            }
        } else if(button.id == ".") {
            if (dPointCount == 0) {
                valueHolder += button.id;
                outputDisplay(valueHolder);
                dPointCount++;
            } else {
                outputDisplay(valueHolder);
            }
        } else {
                valueHolder += button.id;
                outputDisplay(valueHolder);
        }
        

    })
});

function allClear() {
    display.textContent = 0;
    firstVal = 0;
    secondVal = 0;
    operator = "";
    valueHolder = "";
    dPointCount = 0;
};

function outputDisplay(input) {
    display.textContent = input;
}

function clearDisplay() {
    display.textContent = 0;
}

// function add(firstVal, secondVal) {
//     valueHolder = firstVal + secondVal;
// }

// function subtract(firstVal, secondVal) {
//     valueHolder = firstVal - secondVal;
// }

// function multiply(firstVal, secondVal) {
//     valueHolder = firstVal * secondVal;
// }

// function divide(firstVal, secondVal) {
//     valueHolder = firstVal / secondVal;
// }
//Calculator operation
//flow 
//get first value 
// let firstVal = prompt("Input First Value");
// //select operator
// let operator = prompt("Input Operator");
// //input second value
// let secondVal = prompt("Input Second Value");

//Create Operate function that takes value and perform desired operation
function operate(firstVal, secondVal, operator) {
    // operator = "+" ? add(firstVal, secondVal) : "Error";
    // operator = "-" ? subtract(firstVal, secondVal) : "Error";
    // operator = "*" ? multiply(firstVal, secondVal) : "Error";
    // operator = "/" ? divide(firstVal, secondVal) : "Error";
    
    if (operator == "+") {
        result = currentVal + nextVal;
    } else if (operator == "-") {
        result = currentVal - nextVal;
    } else if (operator == "×") {
        result = currentVal * nextVal;
    } else if (operator == "÷") {
        if (nextVal == 0) {
            alert("Snarky Error Message");
            allClear();
        } else {
        result = currentVal / nextVal;
        }
    }
    dPointCount = 0;
}

clearDisplay();

