"use strict";

const addButton = document.querySelector(".add-button");
const subtractButton = document.querySelector(".subtract-button");
const multiplyButton = document.querySelector(".multiply-button");
const divideButton = document.querySelector(".divide-button");

const liveDisplay = document.getElementById("display");
const possibleChoices = document.querySelectorAll(".possibleschoices")


let a;
let b;
let numberChoice
let input_a
let input_b

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

function operate(a, b, operator) { // this function takes two number, and an operator
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


function getInput() {
   input_a = document.getElementById("number-a").value;
   input_b = document.getElementById("number-b").value;
  liveDisplay.innerHTML = input_a + " " + input_b 
}

  const btns = document.querySelectorAll('.btn');
for (const btn of btns) {
  btn.addEventListener('click', function() {
    liveDisplay.innerHTML = this.id
  });
}

const operators = document.querySelectorAll(".operators")
for (const operator of operators)
  operator.addEventListener("click", function () {
    liveDisplay.innerHTML = this.id
  })

addButton.addEventListener("click", add);
subtractButton.addEventListener("click", subtract);
multiplyButton.addEventListener("click", multiply);
divideButton.addEventListener("click", divide);