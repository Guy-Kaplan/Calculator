var num1 = 0;
var num2 = 0;
var result = 0;
var isThereZeroOnTheLeft = true;
var actionToDo = "";

function addDigit(digit) {
    var input = document.getElementById("input");
    if (isThereZeroOnTheLeft) {
        input.value = digit;
        isThereZeroOnTheLeft = false;
    }
    else {
        input.value += digit;
    }
}

function addZero() {
    var input = document.getElementById("input");
    if (isThereZeroOnTheLeft===false) {
        input.value += 0;
    }
}

function getAction(actionFromUser) { // *,/,+,-
    actionToDo = actionFromUser;
    var input = document.getElementById("input");
    num1 = input.value;
    input.value = 0;
    isThereZeroOnTheLeft = true;
}

function calculate() { // =
    var input = document.getElementById("input");
    num2 = input.value;
    if (actionToDo === "multiply") {
        result = num1 * num2;
    }
    else if (actionToDo === "divide") {
        if (num2 === "0") {
            alert("Error. Can't divide in 0");
        }
        else {
            result = num1 / num2;
        }
    }
    else if (actionToDo === "add") {
        result = +(num1) + +(num2);
    }
    else if (actionToDo === "subtract") {
        result = num1 - num2;
    }
    input.value = result;
    if (result === 0) {
        isThereZeroOnTheLeft = true;
    }
    num1 = 0;
    num2 = 0;
    result = 0;
    actionToDo = "";
}

function reset() {
    num1 = 0;
    num2 = 0;
    result = 0;
    var input = document.getElementById("input");
    input.value = 0;
    isThereZeroOnTheLeft = true;
}
