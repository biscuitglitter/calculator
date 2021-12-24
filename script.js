"use strict";


let a 
let b 
let result

const add = (a, b) => { return a + b }
const subtract = (a, b) => {  return a - b }
const multiply = (a, b) => { return a * b }

const divide = (a, b) => {
  if (a === 0 || b === 0) {
    return "Numbers can't be divided by 0. Please try again"
  } else 
  return a / b
}

function operate(a, b, operator) {
  if (operator === "+") {
    return add(a, b)
  } else if (operator === "-") {
    return subtract(a, b)
  } else if (operator === "*") {
    return multiply(a, b)
  } else if (operator === "/") {
    return divide(a, b)
  }
}




/* const addButton = document.querySelector(".add-btn")
const subtractButton = document.querySelector(".subtract-btn")
const multiplyButton = document.querySelector(".multiply-btn")
const divideButton = document.querySelector(".divide-btn")
 addButton.addEventListener("click", add)
subtractButton.addEventListener("click", subtract)
multiplyButton.addEventListener("click", multiply)
divideButton.addEventListener("click", divide) */


