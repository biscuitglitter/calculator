"use strict";

const addButton = document.querySelector(".add-button");
const subtractButton = document.querySelector(".subtract-button");
const multiplyButton = document.querySelector(".multiply-button");
const divideButton = document.querySelector(".divide-button");

const mainDisplay = document.querySelector(".maindisplay");
const smallDisplay = document.querySelector(".smalldisplay");
const operators = document.querySelectorAll(".operators");
const numbers = document.querySelectorAll(".numbers");

const equalsbtn = document.querySelector(".equals-button")

let result;
let newOperator = "";
let storedOperator = "";
let num1 = "";
let num2 = "";

const add = (num2, num1) => {
  return parseFloat(num2 + num1);
};
const subtract = (num2, num1) => {
  return parseFloat(num2 - num1);
};
const multiply = (num2, num1) => {
  return parseFloat(num2 * num1);
};

const divide = (num2, num1) => {
  if (num2 === 0 || num1 === 0) {
    return "Numbers can't be divided by 0. Please try again";
  } else return parseFloat(num2 / num1);
};

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    num1 = num2;
    num2 = e.target.innerText;
    mainDisplay.innerText = num2;
  });
});

const operate = function () {
  if (!num2 && !num1) {
    mainDisplay.innerText = ""
  } else if (!num1 && num2) {
    mainDisplay.innerText = num2
  } else if (num2 && num1 && storedOperator) {
    if (storedOperator === "+") {
      result = parseFloat(num2) + parseFloat(num1);
      mainDisplay.innerText = result
      console.log(result)
    } else if (storedOperator === "-") {
      result = parseFloat(num2) - parseFloat(num1);
      mainDisplay.innerText = result
    } else if (storedOperator === "*") {
      result = parseFloat(num2)  * parseFloat(num1);
      mainDisplay.innerText = result
    } else if (storedOperator === "/") {
      result = parseFloat(num2) / parseFloat(num1)
      mainDisplay.innerText = result
    }
  }  
}

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    storedOperator = newOperator;
    newOperator = e.target.innerText;
    operate()
    seeOutput();
  });
});

function seeOutput() {
  smallDisplay.innerText = num1 + "" + storedOperator + "" + num2;
}

// i think i want my function to go like this

// click on an operator, we verify if we have smallDisplay, if we do then we're rendering maindisplay =
// operate(maindis + smalldis + operator) if we don't, we will only render the maindisplay

equalsbtn.addEventListener("click", () => {
  console.log("equal button has been clicked!")
  operate()
})

