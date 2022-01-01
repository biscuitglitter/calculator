"use strict";

const addButton = document.querySelector(".add-button");
const subtractButton = document.querySelector(".subtract-button");
const multiplyButton = document.querySelector(".multiply-button");
const divideButton = document.querySelector(".divide-button");

const mainDisplay = document.querySelector(".maindisplay");
const smallDisplay = document.querySelector(".smalldisplay");
const possibleChoices = document.querySelectorAll(".possibleschoices");
const operators = document.querySelectorAll(".operators");
const numbers = document.querySelectorAll(".numbers");


let result;
let newOperator = "";
let storedOperator = "";
let num1 = "";
let num2 = "";

// const add = (num2, num1) => {
//   return num2 + num1;
// };
// const subtract = (num2, num1) => {
//   return num2 - num1;
// };
// const multiply = (num2, num1) => {
//   return num2 * num1;
// };

// const divide = (num2, num1) => {
//   if (num2 === 0 || num1 === 0) {
//     return "Numbers can't be divided by 0. Please try again";
//   } else return num2 / num1;
// };

function operate(num2, num1, storedOperator) {
  if (storedOperator === "+") {
   result = parseFloat(num2 + num1)
  } else if (storedOperator === "-") {
   result = parseFloat(num2 - num1)
  } else if (storedOperator === "*") {
   result = parseFloat(num2 * num1)
  } else if (storedOperator === "/") {
   result = parseFloat(num2 / num1)
  }  
  console.log(result)
  return mainDisplay.innerText = result;
}

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    num2 = num1
    num2 += e.target.innerText
    mainDisplay.innerText = num2
  })
})

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    storedOperator = newOperator
    newOperator = e.target.innerText
    clearVar()
  })
  })

function clearVar() {
  console.log("clearVal is fired!")
  operate(num2, num1, storedOperator)
  mainDisplay.innerText = num2;
  smallDisplay.innerText += num1 + "" + storedOperator + "" + num2
}



// i think i want my function to go like this

// click on an operator, we verify if we have smallDisplay, if we do then we're rendering maindisplay = operate (maindis+smalldis+operator) if we don't, we will only render the maindisplay
