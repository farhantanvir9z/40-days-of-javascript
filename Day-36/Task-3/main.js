import { memoize } from "./memoize.js";

const form = document.querySelector("#form");
const showTempElem = document.querySelector("#show-fahrenheit");
const showFuncCount = document.querySelector("#show-count");

let funcCount = 0;
const memoizedConvert = memoize(convertToFahrenheit)

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const celsius = parseInt(document.querySelector("#celsius").value);
  const fahrenheit = memoizedConvert(celsius);
  showTempElem.innerText = `${fahrenheit}°F`
  showFuncCount.innerText = `Function Count: ${funcCount}`
})
function convertToFahrenheit(celsius) {
  funcCount++;
  return (celsius * 9/5) + 32;
}



