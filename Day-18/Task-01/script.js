"use strict";
console.log("script file loaded successfully...");
// prevent the default action of form
const form = document.querySelector("form");
form.addEventListener("submit", event => {
    event.preventDefault();
});

// adding the input field
const selectedElem = document.querySelector("#select");
const btn = document.querySelector(".addBtn");
btn.addEventListener("click", () => {
    const inputElem = document.createElement("input");
    inputElem.classList.add("inputField");
    const fieldType = selectedElem.value;
    console.log(fieldType);
    inputElem.setAttribute("type", fieldType);
    const placeHolderText = prompt("define the input name") || fieldType;
    inputElem.setAttribute("placeholder", placeHolderText);
    inputElem.setAttribute("name", placeHolderText);
   form.appendChild(inputElem)
});
// sumbit button functionality
const submitBtn = document.querySelector(".submit");

submitBtn.addEventListener("click", function () {
    const selectItem = document.querySelectorAll(".selectItem ~ input");
    let obj =  {};
    selectItem.forEach((elem) => {
      obj[elem.name] = elem.value;
    })
    console.log(obj);
    
});
// reset button functionality
const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener(
  "click",
  () => {
    const selectItem = document.querySelectorAll(".selectItem ~ input");
    selectItem.forEach(elem => {
      elem.value = "";
    })
  }
)