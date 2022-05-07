function add(a, b) { 
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return a - b; 
}

function multiply (a, b) {
  return a * b;
}

function divide (a, b) {
  return a / b;
}

function operate(a, b, operator) {
  if (operator == "+") { 
    return add(a, b);}

  else if (operator == "-") {
    return subtract(a, b);
  }
  else if (operator == "x") {
    return multiply(a, b);
  }
  else if (operator == "÷") {
    return divide(a, b);
  }
}

let numbers = document.querySelectorAll(".number")
let operations = document.querySelectorAll(".operations")
let operator = "";
let firstNumber = "";
let secondNumber = "";
let display = document.querySelector(".display");
let clear = document.querySelector("#clear");


function displayContent(){
  if (operator == undefined) {
    return firstNumber;
  }
  else { 
  return firstNumber + " " + operator + " " + secondNumber;
}
} 

numbers.forEach(number => processNumber(number));
operations.forEach(operator => processOperator(operator));
clear.addEventListener("click", () => clearCalc());

function clearCalc() {
  operator = "";
  firstNumber = "";
  secondNumber = "";
  display.textContent = displayContent();
}


function processNumber(numberButton) {
    numberButton.addEventListener("click", () => {
      if (numberButton.textContent == ".") {
        checkDecimal();
      }
      else if (operator == "") {
        firstNumber += numberButton.textContent;
      }
      else if (operator == undefined)
      {}
      else 
      {
        secondNumber += numberButton.textContent;
      }
    display.textContent = displayContent();
    }     
    )
      }
    
function processOperator(operationButton) {
  operationButton.addEventListener("click", () => {
    if (operationButton.textContent != "="){
      if (secondNumber == "") { 
        operator = operationButton.textContent;
        display.textContent = displayContent();
  }
      else {
        firstNumber = operate(firstNumber, secondNumber, operator);
        secondNumber = "";
        operator = operationButton.textContent;
        display.textContent = displayContent();
    }}
    else if (operationButton.textContent == "=" && firstNumber != "" && secondNumber != "") {
      firstNumber = operate(firstNumber, secondNumber, operator);
      secondNumber = "";
      operator = undefined;
      display.textContent = displayContent();
    }
  })}

function checkDecimal() {
    if (operator == "") {
      if (firstNumber.indexOf(".") > -1) {
        firstNumber = firstNumber;
      }
      else {
        firstNumber += ".";
      }
    }
    else {
      if ((secondNumber.indexOf(".") > -1) || secondNumber == "") {
        secondNumber = secondNumber;
      }
      else {
        secondNumber += ".";
      }
    }
  }
