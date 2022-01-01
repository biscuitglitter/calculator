"use strict";

const addButton = document.querySelector(".add-button");
const subtractButton = document.querySelector(".subtract-button");
const multiplyButton = document.querySelector(".multiply-button");
const divideButton = document.querySelector(".divide-button");

const liveDisplay = document.getElementById("maindisplay");
const smallDisplay = document.getElementById("smalldisplay");
const possibleChoices = document.querySelectorAll(".possibleschoices");
const operators = document.querySelectorAll(".operators");
const numbers = document.querySelectorAll(".numbers");


let a;
let b;
let result;
let newOperator = "";
let storedOperator = "";
let num1 = "";
let num2 = "";

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

function operate(a, b, storedOperator) {
  // this function takes two numbers, and a storedOperator
  if (storedOperator === "+") {
    result = add(a, b);
  } else if (storedOperator === "-") {
    result = subtract(a, b);
  } else if (storedOperator === "*") {
    result = multiply(a, b);
  } else if (storedOperator === "/") {
    result = divide(a, b);
  }
  return result;
}

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    num1 += e.target.innerText
    liveDisplay.innerText = num1
    console.log(num1)
  })
})
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    storedOperator = newOperator
    newOperator = e.target.innerText
console.log("newOperator = " + newOperator + " storedOperator = " + storedOperator)
  })
  })



const equalsbtn = document.querySelector(".equals-button");
equalsbtn.addEventListener("click", function () {
  liveDisplay.innerHTML = operate(a, b, storedOperator);
  console.log(a, storedOperator, b);
});
