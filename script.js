"use strict";

const addButton = document.querySelector(".add-button");
const subtractButton = document.querySelector(".subtract-button");
const multiplyButton = document.querySelector(".multiply-button");
const divideButton = document.querySelector(".divide-button");

const liveDisplay = document.getElementById("display");
const possibleChoices = document.querySelectorAll(".possibleschoices");

let a;
let b;
var storedOperator;
let firstValue;
let secondValue;

const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  if (a === 0 || b === 0) {
    return "Numbers can't be divided by 0. Please try again";
  } else return a / b;
};

function operate(firstValue, secondValue, storedOperator) {
  // this function takes two number, and a storedOperator
  if (storedOperator === "+") {
    return add(a, b);
  } else if (storedOperator === "-") {
    return subtract(a, b);
  } else if (storedOperator === "*") {
    return multiply(a, b);
  } else if (storedOperator === "/") {
    return divide(firstValue, secondValue);
  }
}

const numbers = document.querySelectorAll(".numbers");
for (const number of numbers) {
  number.addEventListener("click", function () {
    liveDisplay.innerHTML = this.id; // when we click on any number, we see it in the display
    firstValue = this.id; // firstValue is the number we clicked
    a = firstValue;
    getOperator() // we're storing at as "a"
  });
}

function getOperator() {
  const operators = document.querySelectorAll(".operators");
  for (const operator of operators)
    operator.addEventListener("click", function () {
      liveDisplay.innerHTML = a;
      storedOperator = this.id
      getSecondVal()
    })
}

function getSecondVal () {
  const numbers = document.querySelectorAll(".numbers");
  for (const number of numbers) {
    number.addEventListener("click", function () {
      secondValue = this.id;
      b = secondValue;
    })
  }
}


const equalsButton = document.querySelector(".equals-button");
equalsButton.addEventListener("click", function () {
  liveDisplay.innerHTML = operate(firstValue, secondValue, storedOperator)
  console.log(firstValue, secondValue, storedOperator)
});