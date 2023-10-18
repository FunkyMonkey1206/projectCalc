//Add functions for each operation
function add(firstVal, secondVal) {
    alert(firstVal + secondVal);
}

function subtract(firstVal, secondVal) {
    alert(firstVal - secondVal);
}

function multiply(firstVal, secondVal) {
    alert(firstVal * secondVal);
}

function divide(firstVal, secondVal) {
    alert(firstVal / secondVal);
}
//Calculator operation
//flow 
//get first value 
let firstVal = prompt("Input First Value");
//select operator
let operator = prompt("Input Operator");
//input second value
let secondVal = prompt("Input Second Value");

//Create Operate function that takes value and perform desired operation
function operate(firstVal, secondVal, operator) {
    // operator = "+" ? add(firstVal, secondVal) : "Error";
    // operator = "-" ? subtract(firstVal, secondVal) : "Error";
    // operator = "*" ? multiply(firstVal, secondVal) : "Error";
    // operator = "/" ? divide(firstVal, secondVal) : "Error";

    
    if (operator == "+") {
        add(firstVal, secondVal);
    } else if (operator == "-") {
        subtract(firstVal, secondVal);
    } else if (operator == "*") {
        multiply(firstVal, secondVal);
    } else if (operator == "/") {
        divide(firstVal, secondVal);
    }
}

operate(+firstVal, +secondVal, operator);