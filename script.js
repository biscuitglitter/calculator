"use strict";
const addButton = document.querySelector(".add-btn")
const subtractButton = document.querySelector(".subtract-btn")
const multiplyButton = document.querySelector(".multiply-btn")
const divideButton = document.querySelector(".divide-btn")

let a 
let b 


const add = (a, b) => { return a + b }
const subtract = (a, b) => { return a - b }
const multiply = (a, b) => { return a * b }
const divide = (a, b) => { return a / b }



addButton.addEventListener("click", add)
subtractButton.addEventListener("click", subtract)
multiplyButton.addEventListener("click", multiply)
divideButton.addEventListener("click", divide)


