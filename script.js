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
var value = "";

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    storedValue = value
    mainDisplay.innerText += e.target.innerText;
    value = mainDisplay.innerText
  });
});


  operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
      storedOperator = newOperator;
      mainDisplay.innerText = ""
      newOperator = e.target.innerText;
      smallDisplay.innerText = value + newOperator
      operate()
    });
  });

const operate = function () {
  console.log("operate has been fired!")
  if (!storedValue) {
    result = "";
  } else if (storedValue && !value) {
    result = storedValue;
  } else if (value && storedOperator && storedValue) {
    if (storedOperator === "+") {
      result = parseFloat(storedValue) + parseFloat(value);
    } else if (storedOperator === "-") {
      result = parseFloat(storedValue) - parseFloat(value);
    } else if (storedOperator === "*") {
      result = parseFloat(storedValue)  * parseFloat(value);
    } else if (storedOperator === "/") {
      result = parseFloat(storedValue) / parseFloat(value)
    }
  }  
  smallDisplay.innerText = result
}



