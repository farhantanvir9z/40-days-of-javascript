"use strict";
import {debounce} from "./debounce.js"

const charCountElem = document.querySelector("#charCount");
const textAreaBox = document.querySelector("#postContent");
  
const debouncedCharCount = debounce(countChars, 500)

textAreaBox.addEventListener("input", debouncedCharCount) 

function countChars() {
  const textAreaElem = document.querySelector("#postContent");
  const charCount = textAreaElem.value.length;
  charCountElem.textContent = `Characters typed: ${charCount}`
  if (charCount > 240) {
    charCountElem.classList.add("text-red-400")
  } else {
    charCountElem.classList.remove("text-red-400")
  } 
}

