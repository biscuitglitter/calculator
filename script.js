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
let storedValue = "";
let value = "";

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (newOperator === "") {
      mainDisplay.innerText += e.target.innerText;
      storedValue = mainDisplay.innerText
      mainDisplay.innerText = storedValue;
    } else if (newOperator !== "") {
      mainDisplay.innerText += e.target.innerText;
      value = mainDisplay.innerText
      mainDisplay.innerText = value;
    }
  });
  
});

  operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
      storedOperator = newOperator;
      mainDisplay.innerText = ""
      newOperator = e.target.innerText;
      if (value) {
        storedOperator = newOperator
        smallDisplay.innerText = value + newOperator
      } else if (!value) {
        storedOperator = newOperator
        smallDisplay.innerText = storedValue + newOperator
      }
    });
  });

 const operate = function () {
    if (storedOperator === "+") {
      result = parseFloat(storedValue) + parseFloat(value);
      console.log("this function just ran!")
    } else if (storedOperator === "-") {
      result = parseFloat(storedValue) - parseFloat(value);
      console.log("this function just ran!")
    } else if (storedOperator === "*") {
      console.log("this function just ran!")
      result = parseFloat(storedValue) * parseFloat(value);
    } else if (storedOperator === "/") {
      console.log("this function just ran!")
      result = parseFloat(storedValue) / parseFloat(value)
  }          
  console.log("value = " + value)
  console.log("storedval = " + storedValue)
  console.log("stored op = " + storedOperator)
  return mainDisplay.innerText = result
 }

 equalsbtn.addEventListener("click", () => {
  mainDisplay.innerText = "";
  operate()
})
