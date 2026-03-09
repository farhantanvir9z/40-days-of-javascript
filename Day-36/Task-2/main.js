import {throttle} from "./throttle.js"

let screenSize;

const showSizeElem = document.querySelector("#show-size")
const showViewElem = document.querySelector("#show-view");

function displayScreenSize() {
  showSizeElem.innerText = `Size: ${innerWidth} × ${innerHeight}`;
  
  showViewElem.innerText = `View: ${(innerWidth >= 1440) ? "Large Desktop" : (innerWidth <= 1439 && innerWidth > 1024) ? "Desktop" : (innerWidth <= 1024  && innerWidth > 576) ? "Tablet" : "Mobile"
  }`
  console.log(innerWidth)
}

const throttledSizeShower = throttle(displayScreenSize, 250)

window.addEventListener("resize", throttledSizeShower)

displayScreenSize()