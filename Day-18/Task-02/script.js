console.log("javascript is loaded successfully...")
const button = document.querySelector(".btn");
    
    button.addEventListener("click", () => {
      button.classList.toggle("white");
    });
    button.addEventListener("click",
    toggle)
const lightElem = document.querySelectorAll(".light");
let darkMode;
function toggle() {
lightElem.forEach((elem) => {
  elem.classList.toggle("dark")
  darkMode = elem.classList.contains("dark");
  localStorage.setItem("darkMode", darkMode)
})
}

  
  let isDarkMode = localStorage.getItem("darkMode") === "true";
  console.log(isDarkMode)
  if (isDarkMode) {
    toggle();
    button.classList.toggle("white");
  } 