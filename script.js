"use strict";

const addButton = document.querySelector(".add-btn");
const subtractButton = document.querySelector(".subtract-btn");
const multiplyButton = document.querySelector(".multiply-btn");
const divideButton = document.querySelector(".divide-btn");

const liveDisplay = document.getElementById("display");
const possibleChoices = document.querySelectorAll(".possibleschoices")


let a;
let b;
let numberChoice
let one
let two
let three
let four
let five
let six
let seven
let eight
let nine
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
  liveDisplay.innerHTML = "Display: " + input_a + " " + input_b 
}

function getNumbers() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  one = document.getElementById("1").innerHTML
  two = document.getElementById("2").innerHTML
  three = document.getElementById("3").innerHTML
  four = document.getElementById("4").innerHTML
  five = document.getElementById("5").innerHTML
  six = document.getElementById("6").innerHTML
  seven = document.getElementById("7").innerHTML
  eight = document.getElementById("8").innerHTML
  nine = document.getElementById("9").innerHTML
  liveDisplay.innerHTML = one + two + three + four + five + six + seven + eight + nine 
}

addButton.addEventListener("click", add);
subtractButton.addEventListener("click", subtract);
multiplyButton.addEventListener("click", multiply);
divideButton.addEventListener("click", divide);