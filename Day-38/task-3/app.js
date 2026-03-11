const body = document.querySelector("body");

const btn = document.createElement("button");
btn.innerText = "click me";

function handleClick(e) {
  console.log(e.target);
}

btn.addEventListener("click", handleClick);

body.appendChild(btn);

setTimeout(() => {
  btn.removeEventListener("click", handleClick);
  body.removeChild(btn);
}, 10000);