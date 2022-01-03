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
let currentNumber = "";
let tempResult = "";
let num2 = "";

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    console.log("number has been clicked!")
    num2 += e.target.innerText;
    currentNumber = num2
    mainDisplay.innerText = num2;
    getOperator()
  });
});


function getOperator () {
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    storedOperator = newOperator;
    newOperator = e.target.innerText;
    mainDisplay.innerText = "";
    seeSmallDisplay();
  });
});
}

function seeSmallDisplay() {
  num2 = "";
  if (!tempResult) {
    smallDisplay.innerText = currentNumber + "" + newOperator
  } else if (currentNumber) {
    smallDisplay.innerText = tempResult + "" + newOperator
  }
}

const operate = function () {
  if (!currentNumber) {
    mainDisplay.innerText = "";
  } else if (!tempResult && currentNumber) {
    mainDisplay.innerText = currentNumber
  } else if (currentNumber && tempResult && storedOperator) {
    if (storedOperator === "+") {
      result = parseFloat(currentNumber) + parseFloat(tempResult);
      mainDisplay.innerText = result
      console.log(result)
    } else if (storedOperator === "-") {
      result = parseFloat(currentNumber) - parseFloat(tempResult);
      mainDisplay.innerText = result
    } else if (storedOperator === "*") {
      result = parseFloat(currentNumber)  * parseFloat(tempResult);
      mainDisplay.innerText = result
    } else if (storedOperator === "/") {
      result = parseFloat(currentNumber) / parseFloat(tempResult)
      mainDisplay.innerText = result
    }
  }  
}

// i think i want my function to go like this

// click on an operator, we verify if we have smallDisplay, if we do then we're rendering maindisplay =
// operate(maindis + smalldis + operator) if we don't, we will only render the maindisplay

equalsbtn.addEventListener("click", () => {
  console.log("equal button has been clicked!")
  operate()
})

