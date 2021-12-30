"use strict";

const addButton = document.querySelector(".add-button");
const subtractButton = document.querySelector(".subtract-button");
const multiplyButton = document.querySelector(".multiply-button");
const divideButton = document.querySelector(".divide-button");

const liveDisplay = document.getElementById("display");
const possibleChoices = document.querySelectorAll(".possibleschoices");

let a;
let b;
var operator;
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

function operate(a, b, operator) {
  // this function takes two number, and an operator
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}

const numbers = document.querySelectorAll(".numbers");
for (const number of numbers) {
  number.addEventListener("click", function () {
    liveDisplay.innerHTML = this.id; // when we click on any number, we see it in the display
    firstValue = this.id; // firstValue is the number we clicked
    a = firstValue; // we're storing at as "a"
  });
}
function getSecondVal () {
  const numbers = document.querySelectorAll(".numbers");
  for (const number of numbers) {
    number.addEventListener("click", function () {
      secondValue = this.id;
      b = secondValue;
      console.log("secondValue, b = " + b + " has been saved!")
    })
  }
}

const operators = document.querySelectorAll(".operators");
for (const operator of operators)
  operator.addEventListener("click", function () {
    liveDisplay.innerHTML = a; // basically what this line means is that: clicking on an operator after clicking on any number will
    // make the number get displayed instead of the operator
    console.log("firstValue, a = " + a + " has been saved!")
    getSecondVal()   // we're calling getsecondval, which stores the secondvalue b that we choose after clicking on another number
    liveDisplay.innerHTML = b;
    console.log("getSecondVal has been called, and b is " + b)
  });


const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener("click", operate(a, b, operator));
