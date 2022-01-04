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
      operate()
    });
  });

const operate = function () {
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
  console.log(result)
}

equalsbtn.addEventListener("click", () => {
  console.log("equal has been clicked!")
  operate()
})
